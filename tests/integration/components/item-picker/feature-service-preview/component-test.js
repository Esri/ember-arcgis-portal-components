import { resolve } from 'rsvp';
import Service from '@ember/service';
import { module, test } from 'qunit';
import { setupRenderingTest } from 'ember-qunit';
import { render } from '@ember/test-helpers';
import hbs from 'htmlbars-inline-precompile';

module('Integration | Component | item picker/feature service preview', function (hooks) {
  setupRenderingTest(hooks);

  hooks.beforeEach(function () {
    let intl = this.owner.lookup('service:intl');
    intl.setLocale('en-us');

    const session = Service.extend({});
    this.owner.register('service:session', session);
  });

  hooks.beforeEach(function () {
    const featureService = Service.extend({
      getLayerInfo () {
        return resolve(2);
      }
    });
    this.owner.register('service:feature-service', featureService);
  });

  test('it renders', async function (assert) {
    const id = 'test-dataset-id';
    const item = {
      id: id,
      title: 'This is the name',
      description: 'This is the description',
      owner: 'jupe',
      modified: 1411060006000,
      type: 'Feature Service',
      url: 'https://foo.bar.baz'
    };

    this.setProperties({
      currentItem: {item: item},
      isLoading: false,
      layerList: [],
      selectedLayer: null,
      onSelectionValidator: function () {},
      onPreviewSelected: function () {},
      cancelAction: function () {},
    });

    await render(hbs`{{item-picker/feature-service-preview
      model=currentItem
      onSelectionValidator=onSelectionValidator
      onItemSelected=onPreviewSelected
      onCancel=cancelAction
    }}`);

    const el = this.$('.item-picker-current-item-preview');
    assert.equal(el.find('h4').text().trim(), 'This is the name');
    assert.equal(el.find('span').text().trim(), 'Shared by: jupe');
    assert.equal(el.find('.item-picker-current-item-preview-description').text().trim(), 'This is the description');
    assert.equal(el.find('.item-picker-current-item-preview-meta > div').length, 3);
    assert.equal(el.find('.item-picker-current-item-preview-meta > div:nth-child(2)').text().trim(), '9/18/2014');
    assert.equal(el.find('.item-picker-current-item-preview-meta > div:nth-child(3)').text().trim(), 'Feature Service');
  });
});
