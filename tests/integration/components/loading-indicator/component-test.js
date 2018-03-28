import { module, test } from 'qunit';
import { setupRenderingTest } from 'ember-qunit';
import { render } from '@ember/test-helpers';
import hbs from 'htmlbars-inline-precompile';

module('Integration | Component | loading indicator', function (hooks) {
  setupRenderingTest(hooks);

  hooks.beforeEach(function () {
    const intl = this.owner.lookup('service:intl');
    return intl.setLocale('en-us');
  });

  test('it renders', async function (assert) {
    assert.expect(1);
    await render(hbs`{{loading-indicator}}`);
    assert.equal(this.$().text().trim(), 'Loading...');
  });
});
