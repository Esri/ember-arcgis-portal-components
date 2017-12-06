import Ember from 'ember';
import layout from './template';

export default Ember.Component.extend({
  layout,
  thumbnailIsBroken: false,
  session: Ember.inject.service(),
  didInsertElement () {
    this.$('img').on('error', Ember.run.bind(this, this.onImageError));
  },

  willDestroyElement () {
    this.$('img').off();
  },
  /**
   * Construct the url for the thumbnail
   * For non-public items, append a token
   */
  thumbnailUrl: Ember.computed('model', function () {
    // const ENV = Ember.getOwner(this).resolveRegistration('config:environment');
    const portal = this.get('session.portalHostname');
    const item = this.get('model');
    let url = `//${portal}/sharing/rest/content/items/${item.id}/info/${item.thumbnail}?w=600`;
    // append token if not public
    if (item.access !== 'public') {
      url = url + '&token=' + this.get('session.token');
    }
    return url;
  }),
  /**
   * Handle a broken thumbnail
   */
  showFallback: Ember.computed('thumbnailIsBroken', 'model.thumbnail', function () {
    return Ember.isEmpty(this.get('model.thumbnail')) || this.get('thumbnailIsBroken');
  }),
  /**
   * Handler that fires if the thumbnail image 404s
   */
  onImageError () {
    Ember.run(this, function () {
      if (!this.get('isDestroyed') && !this.get('isDestroying')) {
        this.set('thumbnailIsBroken', true);
      }
    });
  },
});
