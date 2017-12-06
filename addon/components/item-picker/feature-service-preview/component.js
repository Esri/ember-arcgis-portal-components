import Ember from 'ember';
import layout from './template';

export default Ember.Component.extend({

  intl: Ember.inject.service(),

  layout,

  isLoading: true,

  itemService: Ember.inject.service('items-service'),

  classNames: [ 'item-picker-current-item-preview' ],

  didInsertElement () {
    let item = this.get('model');
    let lowercaseType = item.type.toLowerCase();
    switch (lowercaseType) {
      case 'feature service':
        this._request(item.url)
        .then((resp, err) => {
          if (resp.layers) {
            resp.layers.forEach(function (layer) {
              let active = (layer.id === 0);
              layer.checked = active;
            });
            Ember.set(item, 'layers', resp.layers);
          } else if (resp.fields) {
            Ember.set(item, 'fields', resp.fields);
          } else {
            throw err;
          }

          this.set('isLoading', false);

          this.get('selectItemAndLayer')(item, 0);
        });

        break;
      default:
        this.set('selectedItem', item);
        break;
    }
  },

  didRender () {
    // Needed to jump to error message
    if (this.get('showError')) {
      this.$().scrollTop(0);
    }
  },

  itemType: Ember.computed('_i18nScope', 'model.type', function () {
    const itemType = this.get('model.type');
    let result = itemType;
    const key = `${this.get('_i18nScope')}shared.itemType.${itemType.camelize()}`;
    const intl = this.get('intl');
    // if we don't have a translation for it, just display it as-is
    if (intl.exists(key)) {
      result = intl.t(key);
    }
    return result;
  }),

  description: Ember.computed.reads('model.description'),

  showError: Ember.computed.notEmpty('errorMessage'),

  messageClass: Ember.computed('errorMessage', function () {
    if (this.get('errorMessage.status') === 'warning') {
      return 'alert-warning';
    } else if (this.get('errorMessage.status') === 'error') {
      return 'alert-danger';
    }
  }),

  _request (url) {
    if (url.includes('http://')) {
      url = url.replace('http://', 'https://');
    }

    let jsonUrl = url + '?f=json';
    return fetch(jsonUrl)
      .then(this.get('itemService').checkStatusAndParseJson);
  }

});
