import Ember from 'ember';
import forceHttps from 'ember-arcgis-opendata-components/utils/force-https';

// NOTE: the test for this is in
// packages/opendata-ui/tests/integration/components/image-with-fallback/component-test.js
export default Ember.Component.extend({
  didInsertElement () {
    this.$().on('error', Ember.run.bind(this, this.onImageError));
  },

  willDestroyElement () {
    this.$().off();
  },

  tagName: 'img',

  attributeBindings: [ 'src', 'title', 'alt' ],

  imgIndex: 0,

  imgSrcAry: Ember.computed('imgSrc', 'fallbackSrc', function () {
    const imgSrc = this.get('imgSrc');
    const result = Ember.isArray(imgSrc) ? imgSrc : [imgSrc];
    result.push(this.get('fallbackSrc'));
    return result;
  }),

  src: Ember.computed('imgSrcAry', 'imgIndex', function () {
    const imgSrc = this.get('imgSrcAry')[this.get('imgIndex')];
    return forceHttps(imgSrc);
  }),

  onImageError () {
    Ember.run(this, function () {
      if (!this.get('isDestroyed') && !this.get('isDestroying')) {
        this.incrementProperty('imgIndex');
      }
    });
  }
});
