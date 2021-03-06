import { module, test } from 'qunit';
import { setupRenderingTest } from 'ember-qunit';
import { render, click, find, findAll } from '@ember/test-helpers';
import hbs from 'htmlbars-inline-precompile';
import Service from '@ember/service';

module('Integration | Component | item picker/item row', function (hooks) {
  setupRenderingTest(hooks);

  hooks.beforeEach(function () {
    const intl = this.owner.lookup('service:intl');
    intl.setLocale('en-us');

    const session = Service.extend({});
    this.owner.register('service:session', session);
  });

  test('it renders', async function (assert) {
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
    await render(hbs`{{item-picker/item-row model=model currentItemId=currentItemId onClick=(action onClick item)}}`);

    assert.equal(find('h2').textContent.trim(), 'This is the name');
    assert.ok(!find('.item-picker-item-results-item').classList.contains('is-selected'));
  });

  test('it renders selected', async function (assert) {
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
    await render(hbs`{{item-picker/item-row model=model currentItemId=currentItemId onClick=(action onClick item)}}`);

    assert.equal(find('h2').textContent.trim(), 'This is the name');
    assert.ok(find('.item-picker-item-results-item').classList.contains('is-selected'));
  });

  test('it properly handles click', async function (assert) {
    const id = 'test-dataset-id';
    const item = { id: id, title: 'This is the name' };
    this.setProperties({
      currentItemId: id,
      model: item
    });

    // test double for the external action
    this.set('onClick', (model) => {
      assert.equal(item.id, model.item.id, 'submitted value is passed to external action');
    });

    await render(hbs`{{item-picker/item-row model=model currentItemId=currentItemId onClick=(action onClick)}}`);
    await click('li > a');
  });

  test('multiple-mode: it renders', async function (assert) {
    // test double for the external action
    this.set('onClick', () => {
      // assert.equal(actual, expected, 'submitted value is passed to external action');
    });

    const id = 'test-item-id';
    const model = { id: id, title: 'This is the name', type: 'Web Map', owner: 'vader' };
    this.setProperties({
      model: model,
      itemsToAdd: []
    });
    await render(hbs`{{item-picker/item-row
      model=model
      selectMultiple=true
      itemsToAdd=itemsToAdd
      currentItemId=currentItemId
      onClick=(action onClick item)}}`);

    assert.equal(find('h2').textContent.trim(), 'This is the name');
    assert.equal(find('.shared-by').textContent.trim(), 'vader');
    assert.equal(findAll('.magic-checkbox').length, 1, 'should be one checkbox');
    assert.equal(findAll('.item-picker-item-results-item a').length, 1, 'should be one a');
    assert.equal(findAll('.item-picker-item-results-item a input').length, 1, 'should be one a input');
    assert.notOk(this.$('.item-picker-item-results-item a input').is(':checked'), 'input should not be checked');
  });

  test('multiple-mode: it renders checked', async function (assert) {
    // test double for the external action
    this.set('onClick', () => {
      // assert.equal(actual, expected, 'submitted value is passed to external action');
    });

    const id = 'test-item-id';
    const model = { id: id, title: 'This is the name', type: 'Web Map', owner: 'vader' };
    this.setProperties({
      model: model,
      itemsToAdd: [ model ]
    });
    await render(hbs`{{item-picker/item-row
      model=model
      selectMultiple=true
      itemsToAdd=itemsToAdd
      currentItemId=currentItemId
      onClick=(action onClick item)}}`);

    assert.equal(find('h2').textContent.trim(), 'This is the name');
    assert.equal(find('.shared-by').textContent.trim(), 'vader');
    assert.ok(this.$('.item-picker-item-results-item a input').is(':checked'), 'should be checked');
  });

  test('multiple-mode: it properly handles click', async function (assert) {
    const id = 'test-dataset-id';
    const item = { id: id, title: 'This is the name' };
    this.setProperties({
      model: item,
      itemsToAdd: []
    });

    // test double for the external action
    this.set('onClick', (model) => {
      assert.equal(item.id, model.item.id, 'submitted value is passed to external action');
    });

    await render(
      hbs`{{item-picker/item-row model=model selectMultiple=true itemsToAdd=itemsToAdd currentItemId=currentItemId onClick=(action onClick)}}`
    );

    assert.notOk(this.$('.item-picker-item-results-item a input').is(':checked'));

    await click('li > a');
  });
});
