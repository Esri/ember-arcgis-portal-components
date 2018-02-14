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
  },
  beforeEach () {
    const featureService = Ember.Service.extend({
      getLayerInfo () {
        return Ember.RSVP.resolve(2);
      }
    });
    this.register('service:feature-service', featureService);
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

  this.setProperties({
    currentItem: item,
    isLoading: false,
    layerList: [],
    selectedLayer: null,
    onSelectionValidator: function () {},
    onPreviewSelected: function () {},
    cancelAction: function () {},
  });

  this.render(hbs`{{item-picker/feature-service-preview
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
