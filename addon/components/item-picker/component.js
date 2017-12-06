import Ember from 'ember';
import layout from './template';
import fetch from 'ember-network/fetch';
import queryHelpers from 'ember-arcgis-portal-components/utils/query-helpers';
import isGuid from 'ember-arcgis-portal-components/utils/is-guid';

export default Ember.Component.extend({

  layout,

  intl: Ember.inject.service(),

  itemService: Ember.inject.service('items-service'),

  _i18nScope: Ember.computed('i18nScope', function () {
    return `${this.getWithDefault('i18nScope', 'ember-arcgis-portal-components.itemPicker')}.`;
  }),

  classNames: [ 'item-picker', 'clearfix', 'row' ],

  isValidating: false,

  shouldValidate: false,

  selectAnyway: false,

  init () {
    this._super(...arguments);
    if (this.get('searchItemsOnInit')) {
      if (this.get('catalog')) {
        this._setInitialCatalog(this.get('catalog'));
      }
      this._doSearch(this.get('q'));
    }
  },

  selectButtonText: Ember.computed('isValidating', 'selectAnyway', function () {
    const intl = this.get('intl');
    if (this.get('isValidating')) {
      return intl.t(`${this.get('_i18nScope')}buttons.validating`);
    } else if (this.get('selectAnyway')) {
      return intl.t(`${this.get('_i18nScope')}buttons.selectAnyway`);
    }
    return intl.t(`${this.get('_i18nScope')}buttons.select`);
  }),

  selectButtonClass: Ember.computed('isValidating', 'selectAnyway', 'errorMessage', function () {
    const errorMessage = this.get('errorMessage');
    if (this.get('isValidating')) {
      return 'disabled';
    } else if (errorMessage && errorMessage.status && errorMessage.status === 'error') {
      return 'disabled';
    }
  }),

  sidebarComponent: Ember.computed('currentItem', function () {
    let type = this.get('currentItem.type');

    switch (type.toLowerCase()) {
      case 'feature service':
        return 'item-picker/feature-service-preview';
      default:
        return 'item-picker/item-preview';
    }
  }),

  previewUrl: Ember.computed('portalHostName', 'currentItem.id', 'currentItem.url', function () {
    const portalHostName = this.get('portalHostName');
    const id = this.get('currentItem.id');
    const type = this.get('currentItem.type');
    const url = this.get('currentItem.url');
    const protocol = '//';
    let host = (portalHostName === undefined) ? this.get('session.portalHostname') : portalHostName;
    let previewURL;

    switch (true) {
      // Is there a URL? If so, use it
      case url !== null:
        previewURL = this.get('currentItem.url');
        break;
      // Is it a webmap? If so, send a webmap specific link
      case type.toLowerCase() === 'web map':
        previewURL = `${protocol}${host}/home/webmap/viewer.html?webmap=${id}`;
        break;
      // Otherwise, just return the item page
      default:
        previewURL = `${protocol}${host}/home/item.html?id=${id}`;
    }

    return previewURL;
  }),

  inputElementId: Ember.computed(function () {
    return `${this.get('elementId')}-search-items`;
  }),

  placeholder: Ember.computed('_i18nScope', function () {
    return this.get('intl').t(`${this.get('_i18nScope')}searchItems`);
  }),

  query: '',

  pageSize: Ember.computed(function () {
    return this.get('rowCount') || 10;
  }),

  items: Ember.A([]),

  totalCount: Ember.computed.reads('items.total'),

  pageNumber: Ember.computed('items.start', 'items.total', function () {
    const pageSize = this.get('pageSize');
    const start = this.get('items.start');
    return ((start - 1) / pageSize) + 1;
  }),

  hasSearched: false,

  showTabs: Ember.computed('catalog', function () {
    const catalog = this.get('catalog');
    if (catalog && catalog.length > 1) {
      return true;
    }
    return false;
  }),

  onlyOneCataEntry: Ember.computed('catalog', 'selectedCatalog', function () {
    const catalog = this.get('catalog');
    if (catalog && catalog.length === 1) {
      return catalog[0];
    }
    return undefined;
  }),

  noItemsFoundMsg: Ember.computed('items.[]', 'q', function () {
    let result = '';
    if (this.get('hasSearched') && this.get('items.results.length') === 0) {
      let i18nKey = 'noItems.withoutQuery';
      if (!Ember.isEmpty(this.get('q'))) {
        i18nKey = 'noItems.withQuery';
      }
      i18nKey = `${this.get('_i18nScope')}${i18nKey}`;
      result = this.get('intl').t(i18nKey);
    }
    return result;
  }),

  errorMessage: Ember.computed('isValidating', 'errorHash', function () {
    const errorHash = this.get('errorHash');
    if (!this.get('isValidating') && errorHash && errorHash.status) {
      if (errorHash.status === 'warning' || errorHash.status === 'error') {
        return errorHash;
      }
    }
  }),

  showNoItemsMsg: Ember.computed.notEmpty('noItemsFoundMsg'),

  itemsToAdd: [],

  hasItemsToAdd: Ember.computed.notEmpty('itemsToAdd'),

  disableAddItems: Ember.computed.not('hasItemsToAdd'),

  _defaultSearch (q, isValidGuid) {
    let parts = [];
    if (q) {
      if (isValidGuid) {
        parts.push(`id:${q}`);
      } else {
        parts.push(`title:${q}`);
      }
    }
    let defaultQuery = this.get('defaultQuery');
    if (defaultQuery) {
      parts.push(`(${defaultQuery})`);
    }
    if (parts.length === 0) {
      // we need a q or it won't return anything...
      // this is just so that when searchItemsOnInit === true, it returns something
      parts.push('access:public');
    }
    return parts.join(' AND ');
  },

  _doSearch (q, page = 1) {
    let isValidGuid = isGuid(q);
    this.setProperties({
      loading: true,
      currentItem: null,
      items: null,
    });

    const selectedCatalog = this.get('selectedCatalog') || this.get('onlyOneCataEntry');

    let query = selectedCatalog // If we have a catalog selected
      ? queryHelpers.createQuery(selectedCatalog, q, isValidGuid) // Create a query for that tab.
      : this._defaultSearch(q, isValidGuid); // Otherwise perform a normal search

    const pageSize = this.get('pageSize');
    let params = {
      q: query,
      start: ((page - 1) * pageSize) + 1,
      num: pageSize,
      sortField: 'title'
    };

    // allow portalOpts to be passed in so we can access
    // other portals besides the one our session is auth'd to
    this.get('itemService').search(params, this.get('portalOpts'))
      .then((resp) => {
        this.set('items', resp);
      }, (err) => {
        throw err;
      })
      .finally(() => {
        this.setProperties({
          loading: false,
          hasSearched: true,
        });
      });
  },

  _setInitialCatalog (catalog) {
    let startingCatalog = catalog[0];
    let selectedCatalog = catalog.reduce((acc, entry) => {
      if (entry.active) {
        acc = entry;
      }
      return acc;
    }, startingCatalog);

    this.set('selectedCatalog', selectedCatalog);
    this.set('selectedCatalogName', selectedCatalog.name);
  },

  _request (url) {
    if (url.includes('http://')) {
      url = url.replace('http://', 'https://');
    }

    let jsonUrl = url + '?f=json';
    return fetch(jsonUrl)
      .then(this.get('itemService').checkStatusAndParseJson);
  },

  _setInitialItemAndLayer (selectedItem, selectedLayerId) {
    if (!selectedItem.fields) {
      let layers = Ember.get(selectedItem, 'layers');
      let selectedLayer = layers.filter(layer => layer.id === selectedLayerId);
      this.set('selectedLayer', selectedLayer);
    }
    this.set('selectedItem', selectedItem);
  },

  actions: {
    chooseCatalog (val) {
      const selectedCatalog = this.get('catalog').findBy('name', val);
      this.set('selectedCatalogName', selectedCatalog.name);
      this.set('selectedCatalog', selectedCatalog);
      // Run search..
      this._doSearch(this.get('q'));
    },

    doSearch (query) {
      const q = query;
      this.set('q', q);
      Ember.run.debounce(this, this._doSearch, q, 150);
    },
    changePage (page) {
      const q = this.get('q');
      this._doSearch(q, page);
    },
    onClick (item) {
      if (this.get('selectMultiple')) {
        const itemsToAdd = this.get('itemsToAdd');
        const existingObj = itemsToAdd.findBy('id', item.id);
        if (!existingObj) {
          itemsToAdd.pushObject(item);
        } else {
          itemsToAdd.removeObject(existingObj);
        }
      } else {
        if (this.get('currentItem.id') === item.id) {
          this.set('currentItem', null);
        } else {
          this.setProperties({
            errorHash: null,
            selectAnyway: false,
            currentItem: item
          });
        }
      }
    },

    onSelect () {
      const item = this.get('selectedItem');
      const layer = this.get('selectedLayer');
      const validator = this.get('onSelectionValidator');

      this.set('isValidating', true);
      if (validator && typeof validator === 'function' && !this.get('selectAnyway')) {
        validator(item)
          .then((resp) => {
            this.set('isValidating', false);
            this.set('errorHash', resp.status);
            if (resp.status.status === 'error') {
              return;
            } else if (resp.status.status === 'warning') {
              this.set('selectAnyway', true);
              return;
            } else {
              switch (item.type.toLowerCase()) {
                case 'feature service':
                  return this.get('selectAction')(resp.item, 0);
                default:
                  return this.get('selectAction')(resp.item);
              }
            }
          });
      } else {
        this.set('isValidating', false);
        switch (item.type.toLowerCase()) {
          case 'feature service':
            return this.get('selectAction')(item, layer);
          default:
            return this.get('selectAction')(item);
        }
      }
    },

    onSet (item, layerId) {
      this._setInitialItemAndLayer(item, layerId);
    },

    cancelAction () {
      this.setProperties({
        errorHash: null,
        selectAnyway: false,
        currentItem: null,
        itemsToAdd: []
      });
    }
  },
});
