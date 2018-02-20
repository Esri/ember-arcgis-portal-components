import { moduleForComponent, test } from 'ember-qunit';
import hbs from 'htmlbars-inline-precompile';

moduleForComponent('loading-indicator', 'Integration | Component | loading indicator', {
  integration: true,
  setup () {
    const intl = this.container.lookup('service:intl');
    intl.setLocale('en-us');
  },
});

test('it renders', function (assert) {
  assert.expect(1);
  this.render(hbs`{{loading-indicator}}`);
  assert.equal(this.$().text().trim(), 'Loading...');
});
