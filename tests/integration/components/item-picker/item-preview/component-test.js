import { moduleForComponent, test } from 'ember-qunit';
import hbs from 'htmlbars-inline-precompile';
import instanceInitializer from 'dummy/instance-initializers/ember-intl';

moduleForComponent('item-picker/item-preview', 'Integration | Component | item picker/item preview', {
  integration: true,
  setup () {
    // manually invoke the ember-intl initializer
    instanceInitializer.initialize(this);
    let intl = this.container.lookup('service:intl');
    intl.setLocale('en-us');
  }
});

test('it renders', function (assert) {
  // Set any properties with this.set('myProperty', 'value');
  // Handle any actions with this.on('myAction', function(val) { ... });
  const id = 'test-dataset-id';
  const model = {
    id: id,
    title: 'This is the name',
    description: 'This is the description',
    owner: 'jupe',
    modified: 1411060006000,
    type: 'Web Map'
  };
  this.set('model', model);
  this.render(hbs`{{item-picker/item-preview model=model _i18nScope="ember-arcgis-portal-components.itemPicker."}}`);

  // assert.equal(this.$().text().trim(), '');
  const el = this.$('.item-picker-current-item-preview');
  assert.equal(el.find('h2').text().trim(), 'This is the name');
  assert.equal(el.find('h3').text().trim(), 'Shared by: jupe');
  assert.equal(el.find('.item-picker-current-item-preview-description').text().trim(), 'This is the description');
  assert.equal(el.find('.item-picker-current-item-preview-meta > div').length, 2);
  assert.equal(el.find('.item-picker-current-item-preview-meta > div:nth-child(1)').text().trim(), '9/18/2014');
  assert.equal(el.find('.item-picker-current-item-preview-meta > div:nth-child(2)').text().trim(), 'Web Map');
});
