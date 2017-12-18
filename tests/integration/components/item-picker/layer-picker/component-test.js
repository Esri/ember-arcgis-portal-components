import { moduleForComponent, test } from 'ember-qunit';
import hbs from 'htmlbars-inline-precompile';

moduleForComponent('item-picker/layer-picker', 'Integration | Component | item picker/layer picker', {
  integration: true,
  setup () {
    // manually invoke the ember-intl initializer
    let intl = this.container.lookup('service:intl');
    intl.setLocale('en-us');
    this.inject.service('intl', {as: 'intl'});
  }
});

test('it renders with layers', function (assert) {
  const item = {
    checked: true,
    defaultVisibility: true,
    geometryType: 'esriGeometryPoint',
    id: 0,
    maxScale: 0,
    minScale: 0,
    name: 'test',
    parentLayerId: -1,
    subLayerIds: null
  };

  const itemArr = [item];
  this.set('model', itemArr);
  this.set('onLayerSelected', function () {});
  this.render(hbs`{{item-picker/layer-picker model=model selectable=true onLayerSelected=onLayerSelected}}`);

  assert.equal(this.$('.layer-picker-list').length, 1, 'Layer list is not empty');
  assert.equal(this.$('ul').length, 1, 'There is at least 1 layer in the list');
});
