import { moduleForComponent, test } from 'ember-qunit';
import hbs from 'htmlbars-inline-precompile';

moduleForComponent('item-picker/item-row', 'Integration | Component | item picker/item row', {
  integration: true
});

test('it renders', function (assert) {
  // test double for the external action
  this.set('onClick', () => {
    // assert.equal(actual, expected, 'submitted value is passed to external action');
  });

  const id = 'test-item-id';
  const model = { id: id, title: 'This is the name' };
  this.setProperties({
    currentItemId: `${id}-wrong`,
    model: model
  });
  this.render(hbs`{{item-picker/item-row model=model currentItemId=currentItemId onClick=(action onClick item)}}`);

  assert.equal(this.$('h2').text().trim(), 'This is the name');
  assert.ok(!this.$('.item-picker-item-results-item').hasClass('is-selected'));
});

test('it renders selected', function (assert) {
  // test double for the external action
  this.set('onClick', () => {
    // assert.equal(actual, expected, 'submitted value is passed to external action');
  });

  const id = 'test-item-id';
  const model = { id: id, title: 'This is the name' };
  this.setProperties({
    currentItemId: id,
    model: model
  });
  this.render(hbs`{{item-picker/item-row model=model currentItemId=currentItemId onClick=(action onClick item)}}`);

  assert.equal(this.$('h2').text().trim(), 'This is the name');
  assert.ok(this.$('.item-picker-item-results-item').hasClass('is-selected'));
});

test('it properly handles click', function (assert) {
  const id = 'test-dataset-id';
  const model = { id: id, title: 'This is the name' };
  this.setProperties({
    currentItemId: id,
    model: model
  });

  // test double for the external action
  this.set('onClick', (item) => {
    assert.equal(item.id, id, 'submitted value is passed to external action');
  });

  this.render(hbs`{{item-picker/item-row model=model currentItemId=currentItemId onClick=(action onClick)}}`);
  this.$('li > a').click();
});

test('multiple-mode: it renders', function (assert) {
  // test double for the external action
  this.set('onClick', () => {
    // assert.equal(actual, expected, 'submitted value is passed to external action');
  });

  const id = 'test-item-id';
  const model = { id: id, title: 'This is the name' };
  this.setProperties({
    model: model,
    itemsToAdd: []
  });
  this.render(hbs`{{item-picker/item-row model=model selectMultiple=true itemsToAdd=itemsToAdd currentItemId=currentItemId onClick=(action onClick item)}}`);

  assert.equal(this.$('h2').text().trim(), 'This is the name');
  assert.equal(this.$('.item-picker-item-results-item a').length, 2);
  assert.equal(this.$('.item-picker-item-results-item a input').length, 1);
  assert.notOk(this.$('.item-picker-item-results-item a input').is(':checked'));
});

test('multiple-mode: it renders checked', function (assert) {
  // test double for the external action
  this.set('onClick', () => {
    // assert.equal(actual, expected, 'submitted value is passed to external action');
  });

  const id = 'test-item-id';
  const model = { id: id, title: 'This is the name' };
  this.setProperties({
    model: model,
    itemsToAdd: [ { id: id } ]
  });
  this.render(hbs`{{item-picker/item-row model=model selectMultiple=true itemsToAdd=itemsToAdd currentItemId=currentItemId onClick=(action onClick item)}}`);

  assert.equal(this.$('h2').text().trim(), 'This is the name');
  assert.ok(this.$('.item-picker-item-results-item a input').is(':checked'));
});

test('multiple-mode: it properly handles click', function (assert) {
  const id = 'test-dataset-id';
  const model = { id: id, title: 'This is the name' };
  this.setProperties({
    model: model,
    itemsToAdd: []
  });

  // test double for the external action
  this.set('onClick', (item) => {
    assert.equal(item.id, id, 'submitted value is passed to external action');
  });

  this.render(hbs`{{item-picker/item-row model=model selectMultiple=true itemsToAdd=itemsToAdd currentItemId=currentItemId onClick=(action onClick)}}`);

  assert.notOk(this.$('.item-picker-item-results-item a input').is(':checked'));

  this.$('li > a').click();
});
