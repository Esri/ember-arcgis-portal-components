import Ember from 'ember';
import layout from './template';

export default Ember.Component.extend({

  layout,

  intl: Ember.inject.service(),

  itemService: Ember.inject.service('items-service'),

  _i18nScope: Ember.computed('i18nScope', function () {
    return `${this.getWithDefault('i18nScope', 'ember-arcgis-portal-components.itemPicker')}.`;
  }),

  classNames: [ 'item-picker', 'clearfix' ],

  init () {
    this._super(...arguments);
    if (this.get('searchItemsOnInit')) {
      this._doSearch(this.get('q'));
    }
  },

  inputElementId: Ember.computed(function () {
    return `${this.get('elementId')}-search-items`;
  }),

  placeholder: Ember.computed('_i18nScope', function () {
    return this.get('intl').t(`${this.get('_i18nScope')}searchItems`);
  }),

  query: '',

  pageSize: 10,

  items: Ember.A([]),

  totalCount: Ember.computed.reads('items.total'),

  pageNumber: Ember.computed('items.start', 'items.total', function () {
    const pageSize = this.get('pageSize');
    const start = this.get('items.start');
    return ((start - 1) / pageSize) + 1;
  }),

  hasSearched: false,

  noItemsFoundMsg: Ember.computed('items.[]', 'q', function () {
    let result = '';
    if (this.get('hasSearched') && this.get('items.length') === 0) {
      let i18nKey = 'noItems.withoutQuery';
      if (!Ember.isEmpty(this.get('q'))) {
        i18nKey = 'noItems.withQuery';
      }
      i18nKey = `${this.get('_i18nScope')}${i18nKey}`;
      result = this.get('intl').t(i18nKey);
    }
    return result;
  }),

  showNoItemsMsg: Ember.computed.notEmpty('noItemsFoundMsg'),

  itemsToAdd: [],

  hasItemsToAdd: Ember.computed.notEmpty('itemsToAdd'),

  disableAddItems: Ember.computed.not('hasItemsToAdd'),

  _doSearch (q, page = 1) {
    this.setProperties({
      loading: true,
      currentItem: null,
      items: null,
    });

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

    const pageSize = this.get('pageSize');
    let params = {
      q: parts.join(' AND '),
      start: ((page - 1) * pageSize) + 1,
      num: pageSize,
      sortField: 'title'
    };

    this.get('itemService').search(params)
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

  actions: {
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
          this.set('currentItem', item);
        }
      }
    },
    cancelAction () {
      this.setProperties({
        currentItem: null,
        itemsToAdd: []
      });
    }
  },
});
