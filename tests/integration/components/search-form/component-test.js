import { module, test } from 'qunit';
import { setupRenderingTest } from 'ember-qunit';
import { render } from '@ember/test-helpers';
import hbs from 'htmlbars-inline-precompile';

module('Integration | Component | search form', function (hooks) {
  setupRenderingTest(hooks);

  hooks.beforeEach(function () {
    this.actions = {};
    this.send = (actionName, ...args) => this.actions[actionName].apply(this, args);
  });

  hooks.beforeEach(function () {
    let intl = this.owner.lookup('service:intl');
    intl.setLocale('en-us');
  });

  test('it renders', async function (assert) {
    assert.expect(2);

    this.set('q', undefined);
    this.actions.search = function (val) {
      assert.equal(val, 'test', 'it should have passed the value on submit');
    };

    await render(hbs`{{search-form _q=q onSearch=(action 'search')}}`);

    let $input = this.$('input');
    assert.equal($input.val(), '', 'input should be empty');

    // enter term and search
    $input.val('test').trigger('change');
    assert.equal(this.get('q'), undefined, 'should not mutate q property');
  });
});
