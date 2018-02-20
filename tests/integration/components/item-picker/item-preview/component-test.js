import { moduleForComponent, test } from 'ember-qunit';
import hbs from 'htmlbars-inline-precompile';

moduleForComponent('item-picker/item-preview', 'Integration | Component | item picker/item preview', {
  integration: true,
  setup () {
    let intl = this.container.lookup('service:intl');
    intl.setLocale('en-us');
  }
});

test('it renders', function (assert) {
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
  this.set('onSelectionValidator', function () {});
  this.set('onItemSelected', function () {});
  this.set('cancelAction', function () {});
  this.set('isLoading', true);

  this.render(hbs`{{item-picker/item-preview
    model=model
    onSelectionValidator=onSelectionValidator
    onItemSelected=onItemSelected
    onCancel=cancelAction
  }}`);

  // assert.equal(this.$().text().trim(), '');
  const el = this.$('.item-picker-current-item-preview');
  assert.equal(el.find('h4').text().trim(), 'This is the name');
  assert.equal(el.find('span').text().trim(), 'Shared by: jupe');
  assert.equal(el.find('.item-picker-current-item-preview-description').text().trim(), 'This is the description');
  assert.equal(el.find('.item-picker-current-item-preview-meta > div').length, 2);
  assert.equal(el.find('.item-picker-current-item-preview-meta > div:nth-child(1)').text().trim(), '9/18/2014');
  assert.equal(el.find('.item-picker-current-item-preview-meta > div:nth-child(2)').text().trim(), 'Web Map');
});
