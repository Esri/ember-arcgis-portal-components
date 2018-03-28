import forceHttps from 'ember-arcgis-portal-components/utils/force-https';
import { module, test } from 'qunit';

module('Unit | Utility | force https', function () {
  // Replace this with your real tests.
  test('it upgrades http to https for arcgis.com if protocol is https', function (assert) {
    let result = forceHttps('http://foo.arcgis.com/some-path?query=string', 'https');
    assert.equal(result, 'https://foo.arcgis.com/some-path?query=string');
  });

  test('it always upgrades for arcgis.com urls to https', function (assert) {
    let result = forceHttps('http://foo.arcgis.com/some-path?query=string', 'http');
    assert.equal(result, 'https://foo.arcgis.com/some-path?query=string');
  });

  test('it does upgrade non-arcgis.com urls to https if protocol is https', function (assert) {
    let result = forceHttps('http://foo.com', 'https');
    assert.equal(result, 'https://foo.com');
  });

  test('it returns https', function (assert) {
    let result = forceHttps('https://foo.com');
    assert.equal(result, 'https://foo.com');
  });
});
