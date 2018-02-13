import { moduleForComponent, test } from 'ember-qunit';
import hbs from 'htmlbars-inline-precompile';
import instanceInitializer from 'dummy/instance-initializers/ember-intl';

moduleForComponent('loading-indicator', 'Integration | Component | loading indicator', {
  integration: true,
  setup () {
    // manually invoke the ember-intl initializer
    instanceInitializer.initialize(this.container);
    const intl = this.container.lookup('service:intl');
    // intl.addTranslations('en-us', { organizations: 'Featured Organizations Sharing Data' });
    intl.setLocale('en-us');
  },
});

test('it renders', function (assert) {
  assert.expect(1);
  this.render(hbs`{{loading-indicator}}`);
  assert.equal(this.$().text().trim(), 'Loading...');
});
