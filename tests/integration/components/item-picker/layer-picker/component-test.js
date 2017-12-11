import { moduleForComponent, test } from 'ember-qunit';
import hbs from 'htmlbars-inline-precompile';

moduleForComponent('item-picker/layer-picker', 'Integration | Component | item picker/layer picker', {
  integration: true
});

test('it renders', function (assert) {
  // Set any properties with this.set('myProperty', 'value');
  // Handle any actions with this.on('myAction', function(val) { ... });

  this.render(hbs`{{item-picker/layer-picker}}`);

  assert.equal(this.$().text().trim(), '');

  // Template block usage:
  this.render(hbs`
    {{#item-picker/layer-picker}}
      template block text
    {{/item-picker/layer-picker}}
  `);

  assert.equal(this.$().text().trim(), 'template block text');
});
