import { A } from '@ember/array';
import { module, test } from 'qunit';
import { setupRenderingTest } from 'ember-qunit';
import { render, find, findAll } from '@ember/test-helpers';
import hbs from 'htmlbars-inline-precompile';
import Service from '@ember/service';

module('Integration | Component | item picker', function (hooks) {
  setupRenderingTest(hooks);

  hooks.beforeEach(function () {
    let intl = this.owner.lookup('service:intl');
    intl.setLocale('en-us');

    const session = Service.extend({});
    this.owner.register('service:session', session);
  });

  test('it renders', async function (assert) {
    // Set any properties with this.set('myProperty', 'value');
    // Handle any actions with this.on('myAction', function(val) { ... });

    await render(hbs`{{item-picker }}`);

    assert.equal(find('*').textContent.trim(), 'Search items:');
  });

  test('it renders results', async function (assert) {
    // Set any properties with this.set('myProperty', 'value');
    // Handle any actions with this.on('myAction', function(val) { ... });
    const item = {
      id: 'abc123',
      title: 'This is the name',
      description: 'This is the description',
      owner: 'jupe',
      modified: 1411060006000,
      type: 'Web Map'
    };
    const items = A([item]);
    this.set('items', { results: items });
    await render(hbs`{{item-picker items=items }}`);
    assert.equal(findAll('.item-picker-item-results-item').length, 1);
    assert.ok(!find('.item-picker-item-results-item').classList.contains('is-selected'));
    assert.equal(findAll('.item-picker-current-item').length, 0);
  });

  test('it respects passed in items as selections', async function (assert) {
    const item = {
      id: 'abc123',
      title: 'This is item 1',
      description: 'This is the first description',
      owner: 'marvin',
      modified: 1411060006000,
      type: 'Web Map'
    };
    const item2 = {
      id: 'def456',
      title: 'This is item 2',
      description: 'This is the second description',
      owner: 'marvin',
      modified: 1410060006000,
      type: 'Web Map'
    };
    const items = A([item, item2]);
    const selectedItems = [ item ];

    this.setProperties({
      items: { results: items },
      selectedItems,
      selectAction () {}
    });

    await render(hbs`{{item-picker items=items selectMultiple=true itemsToAdd=selectedItems selectAction=(action selectAction)}}`);

    assert.equal(findAll('.item-picker-item-results-item').length, 2);
    assert.ok(findAll('.item-picker-item-results-item input:checked').length);
    assert.ok(findAll('.item-picker-item-results-item input:not(:checked)').length);
  });

  test('Vertical flex mode toggles with verticalFlex attribute', async function (assert) {
    this.setProperties({
      items: { results: [] },
      selectAction () {}
    });

    await render(hbs`{{item-picker verticalFlex=true items=items selectMultiple=true selectAction=(action selectAction)}}`);

    assert.ok(this.element.querySelector('div').classList.contains('item-picker-vertical-flex'),
      'item-picker-vertical-flex class added when verticalFlex == true');

    await render(hbs`{{item-picker verticalFlex=false items=items selectMultiple=true selectAction=(action selectAction)}}`);

    assert.notOk(this.element.querySelector('div').classList.contains('item-picker-vertical-flex'),
      'item-picker-vertical-flex class NOT added when verticalFlex != true');
  });
});
