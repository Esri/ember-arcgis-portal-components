import { module, test } from 'qunit';
import { setupRenderingTest } from 'ember-qunit';
import { render, findAll, find } from '@ember/test-helpers';
import hbs from 'htmlbars-inline-precompile';
import Service from '@ember/service';

module('Integration | Component | item picker/layer picker row', function (hooks) {
  setupRenderingTest(hooks);

  hooks.beforeEach(function () {
    let intl = this.owner.lookup('service:intl');
    intl.setLocale('en-us');

    const session = Service.extend({});
    this.owner.register('service:session', session);
  });

  test('it renders a layer with type', async function (assert) {
    this.set('layer', {
      geometryType: 'esriGeometryPoint',
      name: 'The Layer'
    });
    // Handle any actions with this.on('myAction', function(val) { ... });
    await render(hbs`{{item-picker/layer-picker-row
      layer=layer
      selectable=false
    }}`);
    assert.equal(find('label').textContent.trim(), 'The Layer (Point)');
  });

  test('it renders a radio layer with type', async function (assert) {
    let layer = {
      geometryType: 'esriGeometryPoint',
      name: 'The Layer'
    };
    this.setProperties({
      layer: layer,
      onLayerSelected: function () {}
    });
    // Handle any actions with this.on('myAction', function(val) { ... });
    await render(hbs`{{item-picker/layer-picker-row
      layer=layer
      selectable=true
      onLayerSelected=(action onLayerSelected)
    }}`);
    assert.equal(find('label').textContent.trim(), 'The Layer (Point)');
    assert.equal(findAll('input[type=radio]').length, 1, 'Should be one input');
  });
});
