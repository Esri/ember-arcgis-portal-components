import { moduleForComponent, test } from 'ember-qunit';
import hbs from 'htmlbars-inline-precompile';
import Ember from 'ember';
import instanceInitializer from 'dummy/instance-initializers/ember-intl';

moduleForComponent('item-picker/feature-service-preview', 'Integration | Component | item picker/feature service preview', {
  integration: true,
  setup () {
    instanceInitializer.initialize(this);
    let intl = this.container.lookup('service:intl');
    intl.setLocale('en-us');

    const session = Ember.Service.extend({});
    this.register('service:session', session);
  }
});

test('it renders', function (assert) {
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

  this.set('currentItem', item);
  this.set('onSelectionValidator', function () {});
  this.set('onPreviewSelected', function () {});
  this.set('cancelAction', function () {});
  this.set('isLoading', 'false');

  this.render(hbs`{{item-picker/feature-service-preview
    _i18nScope="ember-arcgis-portal-components.itemPicker."
    model=currentItem
    onSelectionValidator=onSelectionValidator
    onItemSelected=onPreviewSelected
    onCancel=cancelAction
    isLoading=isLoading
  }}`);

  const el = this.$('.item-picker-current-item-preview');
  assert.equal(el.find('h2').text().trim(), 'This is the name');
  assert.equal(el.find('span').text().trim(), 'Shared by: jupe');
  assert.equal(el.find('.item-picker-current-item-preview-description').text().trim(), 'This is the description');
  assert.equal(el.find('.item-picker-current-item-preview-meta > div').length, 3);
  assert.equal(el.find('.item-picker-current-item-preview-meta > div:nth-child(2)').text().trim(), '9/18/2014');
  assert.equal(el.find('.item-picker-current-item-preview-meta > div:nth-child(3)').text().trim(), 'Feature Service');
});
