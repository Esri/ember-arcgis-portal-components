import queryHelpers from 'dummy/utils/query-helpers';
import { module, test } from 'qunit';

module('Unit | Utility | query helpers');

// Replace this with your real tests.
test('it works', function (assert) {
  const facet = {
    name: 'Apps',
    params: {
      query: {
        type: [
          'Web Mapping Application'
        ],
        typekeywords: [
          '-hubsite',
          '-story'
        ],
        tags: [
          '-survey',
          '-storymap',
          '-site'
        ]
      }
    }
  };
  const query = 'Environment';
  let result = queryHelpers.createQuery(facet, query);
  assert.ok(result);
});
