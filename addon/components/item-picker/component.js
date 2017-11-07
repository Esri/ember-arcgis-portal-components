import Ember from 'ember';
import layout from './template';
import queryHelpers from 'ember-arcgis-portal-components/utils/query-helpers';

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

    if (this.get('catalog')) {
      this._setInitialCatalog(this.get('catalog'));
    }

    if (this.get('searchItemsOnInit')) {
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

  previewUrl: Ember.computed('portalHostName', 'currentItem.id', 'currentItem.url', function () {
    const url = this.get('portalHostName');
    if (url) {
      return `${url}/home/item.html?id=${this.get('currentItem.id')}`;
    } else {
      return this.get('currentItem.url');
    }
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

  disabledStatus: Ember.computed('currentItem', function () {
    if (!this.get('currentItem.url')) {
      return 'disabled';
    }
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

  _defaultSearch (q) {
    let parts = [];
    if (q) {
      parts.push(`title:${q}`);
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
    this.setProperties({
      loading: true,
      currentItem: null,
      items: null,
    });

    const selectedCatalog = this.get('selectedCatalog') || this.get('onlyOneCataEntry');

    let query = selectedCatalog // If we have a catalog selected
      ? queryHelpers.createQuery(selectedCatalog, q) // Create a query for that tab.
      : this._defaultSearch(q); // Otherwise perform a normal search

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
    let startingCatalog;

    // Search through the catalog to see if
    // there is one that has the active flag
    catalog.forEach(function (catalogPiece) {
      if (catalogPiece.active) {
        startingCatalog = catalogPiece;
      }
    });

    // Is there an active flag?
    if (startingCatalog) {
      // Set it to the selected catalog
      this.set('selectedCatalog', startingCatalog);
      this.set('selectedCatalogName', startingCatalog.name);
    } else {
      // Otherwise, use the first item in the catalog as the starting point
      this.set('selectedCatalog', catalog[0]);
      this.set('selectedCatalogName', catalog[0].name);
    }
  },

  actions: {
    chooseCatalog (val) {
      const selectedCatalog = this.get('catalog').findBy('name', val);
      this.set('selectedCatalogName', selectedCatalog.name);
      this.set('selectedCatalog', selectedCatalog);
      // Run search..
      this._doSearch();
    },

    doSearch () {
      const q = this.get('q');
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

    onSelect (item) {
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
              return this.get('selectAction')(resp.item);
            }
          });
      } else {
        this.set('isValidating', false);
        return this.get('selectAction')(item);
      }
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
