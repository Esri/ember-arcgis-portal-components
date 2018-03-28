import isGuid from 'dummy/utils/is-guid';
import { module, test } from 'qunit';

module('Unit | Utility | is guid', function () {
  // Replace this with your real tests.
  test('it works', function (assert) {
    assert.notOk(isGuid(1234));
    assert.notOk(isGuid('1234'));
    assert.notOk(isGuid('imnotaguid'));
    assert.ok(isGuid('76c3db4812d44f0087850093837e7a90'));
    assert.ok(isGuid('{371acc8b-85cf-4251-8c01-7d0e48bac7e3}'));
  });
});
