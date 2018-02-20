import { moduleForComponent, test } from 'ember-qunit';
import hbs from 'htmlbars-inline-precompile';
import Service from '@ember/service';

moduleForComponent('item-pager', 'Integration | Component | item pager', {
  integration: true,
  setup () {
    const intl = this.container.lookup('service:intl');
    intl.setLocale('en-us');

    const session = Service.extend({});
    this.register('service:session', session);
  }
});

test('it renders', function (assert) {
  this.setProperties({
    pageSize: 10,
    totalCount: 101,
    pageNumber: 1,
    changePage: (page) => { this.set('pageNumber', page); }
  });

  this.render(hbs`{{item-pager pageSize=pageSize totalCount=totalCount pageNumber=pageNumber changePage=(action changePage)}}`);
  const pagination = this.$('ul.pagination');
  assert.equal(pagination.find('li').length, 14);
  assert.ok(pagination.find('li:first').hasClass('disabled'));
  assert.ok(pagination.find('li:nth-child(2)').hasClass('disabled'));
  assert.ok(pagination.find('li:nth-child(3)').hasClass('active'));
  assert.ok(!pagination.find('li:nth-child(4)').hasClass('active'));
  assert.ok(!pagination.find('li:nth-child(4)').hasClass('disabled'));
  assert.ok(!pagination.find('li:nth-child(5)').hasClass('active'));
  assert.ok(!pagination.find('li:nth-child(5)').hasClass('disabled'));
  assert.ok(!pagination.find('li:nth-child(6)').hasClass('active'));
  assert.ok(!pagination.find('li:nth-child(6)').hasClass('disabled'));
  assert.ok(!pagination.find('li:nth-child(7)').hasClass('active'));
  assert.ok(!pagination.find('li:nth-child(7)').hasClass('disabled'));
  assert.ok(!pagination.find('li:nth-child(8)').hasClass('active'));
  assert.ok(!pagination.find('li:nth-child(8)').hasClass('disabled'));
  assert.ok(!pagination.find('li:nth-child(9)').hasClass('active'));
  assert.ok(!pagination.find('li:nth-child(9)').hasClass('disabled'));
  assert.ok(!pagination.find('li:nth-child(10)').hasClass('active'));
  assert.ok(!pagination.find('li:nth-child(10)').hasClass('disabled'));
  assert.ok(!pagination.find('li:nth-child(11)').hasClass('active'));
  assert.ok(!pagination.find('li:nth-child(11)').hasClass('disabled'));
  assert.ok(!pagination.find('li:nth-child(12)').hasClass('active'));
  assert.ok(!pagination.find('li:nth-child(12)').hasClass('disabled'));
  assert.ok(!pagination.find('li:nth-child(13)').hasClass('active'));
  assert.ok(!pagination.find('li:nth-child(13)').hasClass('disabled'));
  assert.ok(!pagination.find('li:nth-child(14)').hasClass('active'));
  assert.ok(!pagination.find('li:nth-child(14)').hasClass('disabled'));

  pagination.find('li:nth-child(4) a').click();
  assert.equal(pagination.find('li').length, 14);
  assert.ok(!pagination.find('li:first').hasClass('disabled'));
  assert.ok(!pagination.find('li:nth-child(2)').hasClass('disabled'));
  assert.ok(!pagination.find('li:nth-child(3)').hasClass('active'));
  assert.ok(pagination.find('li:nth-child(4)').hasClass('active'));
  assert.ok(!pagination.find('li:nth-child(5)').hasClass('active'));
  assert.ok(!pagination.find('li:nth-child(6)').hasClass('active'));
  assert.ok(!pagination.find('li:nth-child(7)').hasClass('active'));
  assert.ok(!pagination.find('li:nth-child(8)').hasClass('active'));
  assert.ok(!pagination.find('li:nth-child(9)').hasClass('active'));
  assert.ok(!pagination.find('li:nth-child(10)').hasClass('active'));
  assert.ok(!pagination.find('li:nth-child(11)').hasClass('active'));
  assert.ok(!pagination.find('li:nth-child(12)').hasClass('active'));
  assert.ok(!pagination.find('li:nth-child(13)').hasClass('active'));
  assert.ok(!pagination.find('li:nth-child(13)').hasClass('disabled'));
  assert.ok(!pagination.find('li:nth-child(14)').hasClass('active'));
  assert.ok(!pagination.find('li:nth-child(14)').hasClass('disabled'));

  pagination.find('li:last a').click();
  assert.ok(!pagination.find('li:first').hasClass('disabled'));
  assert.ok(!pagination.find('li:nth-child(2)').hasClass('disabled'));
  assert.ok(!pagination.find('li:nth-child(3)').hasClass('active'));
  assert.ok(!pagination.find('li:nth-child(4)').hasClass('active'));
  assert.ok(!pagination.find('li:nth-child(5)').hasClass('active'));
  assert.ok(!pagination.find('li:nth-child(6)').hasClass('active'));
  assert.ok(!pagination.find('li:nth-child(7)').hasClass('active'));
  assert.ok(pagination.find('li:nth-child(8)').hasClass('active'));
  assert.ok(pagination.find('li:nth-child(9)').hasClass('disabled'));
  assert.ok(pagination.find('li:nth-child(10)').hasClass('disabled'));
});
