import Ember from 'ember';
import layout from './template';

export default Ember.Component.extend({

  intl: Ember.inject.service(),

  layout,

  isLoading: true,

  itemService: Ember.inject.service('items-service'),

  classNames: [ 'item-picker-current-item-preview' ],

  didInsertElement () {
    this.$('img').on('error', Ember.run.bind(this, this.onImageError));
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

  willDestroyElement () {
    this.$('img').off();
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

  thumbnailUrl: Ember.computed('model.thumbnail', function () {
    const ENV = Ember.getOwner(this).resolveRegistration('config:environment');
    const portal = ENV.APP.portalRestUrl;
    return `${portal}/content/items/${this.get('model.id')}/info/${this.get('model.thumbnail')}`;
  }),

  thumbnailIsBroken: false,

  showFallback: Ember.computed('thumbnailIsBroken', 'model.thumbnail', function () {
    return Ember.isEmpty(this.get('model.thumbnail')) || this.get('thumbnailIsBroken');
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
  },

  onImageError () {
    Ember.run(this, function () {
      if (!this.get('isDestroyed') && !this.get('isDestroying')) {
        this.set('thumbnailIsBroken', true);
      }
    });
  },

});
