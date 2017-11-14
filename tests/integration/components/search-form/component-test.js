import { moduleForComponent, test } from 'ember-qunit';
import hbs from 'htmlbars-inline-precompile';

moduleForComponent('search-form', 'Integration | Component | search form', {
  integration: true,
  beforeEach () {
    let intl = this.container.lookup('service:intl');
    intl.setLocale('en-us');
    this.inject.service('intl', {as: 'intl'});
  }
});

test('it renders', function (assert) {
  assert.expect(2);

  this.set('q', undefined);
  this.on('search', function (val) {
    assert.equal(val, 'test', 'it should have passed the value on submit');
  });

  this.render(hbs`{{search-form _q=q onSearch=(action 'search')}}`);

  let $input = this.$('input');
  assert.equal($input.val(), '', 'input should be empty');

  // enter term and search
  $input.val('test').trigger('change');
  assert.equal(this.get('q'), undefined, 'should not mutate q property');
});
