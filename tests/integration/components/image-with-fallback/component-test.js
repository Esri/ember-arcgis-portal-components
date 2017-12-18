import { moduleForComponent, test } from 'ember-qunit';
import hbs from 'htmlbars-inline-precompile';

// NOTE: this component is in ember-arcgis-layout-cards
moduleForComponent('image-with-fallback', 'Integration | Component | image with fallback', {
  integration: true
});

test('it renders', function (assert) {
  // Set any properties with this.set('myProperty', 'value');
  // Handle any actions with this.on('myAction', function(val) { ... });" + EOL + EOL +

  this.render(hbs`{{image-with-fallback imgSrc="source" fallbackSrc="fallback-source"}}`);

  assert.equal(this.$().text().trim(), '');
});
