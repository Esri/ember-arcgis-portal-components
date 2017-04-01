import Ember from 'ember';
import layout from './template';

export default Ember.Component.extend({

  intl: Ember.inject.service(),

  layout,

  classNames: [ 'item-picker-current-item-preview' ],

  didInsertElement () {
    this.$('img').on('error', Ember.run.bind(this, this.onImageError));
  },

  willDestroyElement () {
    this.$('img').off();
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

  onImageError () {
    Ember.run(this, function () {
      if (!this.get('isDestroyed') && !this.get('isDestroying')) {
        this.set('thumbnailIsBroken', true);
      }
    });
  },

});
