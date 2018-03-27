import { moduleForComponent, test } from 'ember-qunit';
import hbs from 'htmlbars-inline-precompile';
import Service from '@ember/service';

moduleForComponent('item-picker/layer-picker-row', 'Integration | Component | item picker/layer picker row', {
  integration: true,
  setup () {
    let intl = this.container.lookup('service:intl');
    intl.setLocale('en-us');

    const session = Service.extend({});
    this.register('service:session', session);
  },
});

test('it renders a layer with type', function (assert) {
  this.set('layer', {
    geometryType: 'esriGeometryPoint',
    name: 'The Layer'
  });
  // Handle any actions with this.on('myAction', function(val) { ... });
  this.render(hbs`{{item-picker/layer-picker-row
    layer=layer
    selectable=false
  }}`);
  assert.equal(this.$('label').text().trim(), 'The Layer (Point)');
});

test('it renders a radio layer with type', function (assert) {
  let layer = {
    geometryType: 'esriGeometryPoint',
    name: 'The Layer'
  };
  this.setProperties({
    layer: layer,
    onLayerSelected: function () {}
  });
  // Handle any actions with this.on('myAction', function(val) { ... });
  this.render(hbs`{{item-picker/layer-picker-row
    layer=layer
    selectable=true
    onLayerSelected=(action onLayerSelected)
  }}`);
  assert.equal(this.$('label').text().trim(), 'The Layer (Point)');
  assert.equal(this.$('input[type=radio]').length, 1, 'Should be one input');
});
