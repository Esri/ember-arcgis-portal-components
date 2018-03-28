import { module, test } from 'qunit';
import { setupRenderingTest } from 'ember-qunit';
import { render, findAll } from '@ember/test-helpers';
import hbs from 'htmlbars-inline-precompile';

module('Integration | Component | item picker/layer picker', function (hooks) {
  setupRenderingTest(hooks);

  hooks.beforeEach(function () {
    // manually invoke the ember-intl initializer
    let intl = this.owner.lookup('service:intl');
    intl.setLocale('en-us');
    this.intl = this.owner.lookup('service:intl');
  });

  test('it renders with layers', async function (assert) {
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
    await render(hbs`{{item-picker/layer-picker model=model selectable=true onLayerSelected=onLayerSelected}}`);

    assert.equal(findAll('.layer-picker-list').length, 1, 'Layer list is not empty');
    assert.equal(findAll('ul').length, 1, 'There is at least 1 layer in the list');
  });
});
