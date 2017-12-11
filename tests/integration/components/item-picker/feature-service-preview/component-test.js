import { moduleForComponent, test } from 'ember-qunit';
import hbs from 'htmlbars-inline-precompile';

moduleForComponent('item-picker/feature-service-preview', 'Integration | Component | item picker/feature service preview', {
  integration: true
});

test('it renders', function (assert) {
  // Set any properties with this.set('myProperty', 'value');
  // Handle any actions with this.on('myAction', function(val) { ... });

  this.render(hbs`{{item-picker/feature-service-preview}}`);

  assert.equal(this.$().text().trim(), '');

  // Template block usage:
  this.render(hbs`
    {{#item-picker/feature-service-preview}}
      template block text
    {{/item-picker/feature-service-preview}}
  `);

  assert.equal(this.$().text().trim(), 'template block text');
});
