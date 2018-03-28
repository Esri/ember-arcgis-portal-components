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
});
