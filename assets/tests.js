'use strict';

define('dummy/tests/app.lint-test', ['exports'], function (exports) {
  'use strict';

  QUnit.module('ESLint - app.js');
  QUnit.test('should pass ESLint', function (assert) {
    assert.expect(1);
    assert.ok(true, 'app.js should pass ESLint.\n');
  });
});
define('dummy/tests/application/route.lint-test', ['exports'], function (exports) {
  'use strict';

  QUnit.module('ESLint - application/route.js');
  QUnit.test('should pass ESLint', function (assert) {
    assert.expect(1);
    assert.ok(true, 'application/route.js should pass ESLint.\n');
  });
});
define('dummy/tests/helpers/destroy-app', ['exports', 'ember'], function (exports, _ember) {
  exports['default'] = destroyApp;

  function destroyApp(application) {
    _ember['default'].run(application, 'destroy');
  }
});
define('dummy/tests/helpers/destroy-app.lint-test', ['exports'], function (exports) {
  'use strict';

  QUnit.module('ESLint - helpers/destroy-app.js');
  QUnit.test('should pass ESLint', function (assert) {
    assert.expect(1);
    assert.ok(true, 'helpers/destroy-app.js should pass ESLint.\n');
  });
});
define('dummy/tests/helpers/module-for-acceptance', ['exports', 'qunit', 'ember', 'dummy/tests/helpers/start-app', 'dummy/tests/helpers/destroy-app'], function (exports, _qunit, _ember, _dummyTestsHelpersStartApp, _dummyTestsHelpersDestroyApp) {
  var Promise = _ember['default'].RSVP.Promise;

  exports['default'] = function (name) {
    var options = arguments.length <= 1 || arguments[1] === undefined ? {} : arguments[1];

    (0, _qunit.module)(name, {
      beforeEach: function beforeEach() {
        this.application = (0, _dummyTestsHelpersStartApp['default'])();

        if (options.beforeEach) {
          return options.beforeEach.apply(this, arguments);
        }
      },

      afterEach: function afterEach() {
        var _this = this;

        var afterEach = options.afterEach && options.afterEach.apply(this, arguments);
        return Promise.resolve(afterEach).then(function () {
          return (0, _dummyTestsHelpersDestroyApp['default'])(_this.application);
        });
      }
    });
  };
});
define('dummy/tests/helpers/module-for-acceptance.lint-test', ['exports'], function (exports) {
  'use strict';

  QUnit.module('ESLint - helpers/module-for-acceptance.js');
  QUnit.test('should pass ESLint', function (assert) {
    assert.expect(1);
    assert.ok(true, 'helpers/module-for-acceptance.js should pass ESLint.\n');
  });
});
define('dummy/tests/helpers/resolver', ['exports', 'dummy/resolver', 'dummy/config/environment'], function (exports, _dummyResolver, _dummyConfigEnvironment) {

  var resolver = _dummyResolver['default'].create();

  resolver.namespace = {
    modulePrefix: _dummyConfigEnvironment['default'].modulePrefix,
    podModulePrefix: _dummyConfigEnvironment['default'].podModulePrefix
  };

  exports['default'] = resolver;
});
define('dummy/tests/helpers/resolver.lint-test', ['exports'], function (exports) {
  'use strict';

  QUnit.module('ESLint - helpers/resolver.js');
  QUnit.test('should pass ESLint', function (assert) {
    assert.expect(1);
    assert.ok(true, 'helpers/resolver.js should pass ESLint.\n');
  });
});
define('dummy/tests/helpers/start-app', ['exports', 'ember', 'dummy/app', 'dummy/config/environment'], function (exports, _ember, _dummyApp, _dummyConfigEnvironment) {
  exports['default'] = startApp;

  function startApp(attrs) {
    var application = undefined;

    var attributes = _ember['default'].merge({}, _dummyConfigEnvironment['default'].APP);
    attributes = _ember['default'].merge(attributes, attrs); // use defaults, but you can override;

    _ember['default'].run(function () {
      application = _dummyApp['default'].create(attributes);
      application.setupForTesting();
      application.injectTestHelpers();
    });

    return application;
  }
});
define('dummy/tests/helpers/start-app.lint-test', ['exports'], function (exports) {
  'use strict';

  QUnit.module('ESLint - helpers/start-app.js');
  QUnit.test('should pass ESLint', function (assert) {
    assert.expect(1);
    assert.ok(true, 'helpers/start-app.js should pass ESLint.\n');
  });
});
define('dummy/tests/helpers/torii', ['exports'], function (exports) {
  exports.stubValidSession = stubValidSession;

  function stubValidSession(application, sessionData) {
    var session = application.__container__.lookup('service:session');
    var sm = session.get('stateMachine');
    Ember.run(function () {
      sm.send('startOpen');
      sm.send('finishOpen', sessionData);
    });
  }
});
define('dummy/tests/index/route.lint-test', ['exports'], function (exports) {
  'use strict';

  QUnit.module('ESLint - index/route.js');
  QUnit.test('should pass ESLint', function (assert) {
    assert.expect(1);
    assert.ok(true, 'index/route.js should pass ESLint.\n');
  });
});
define('dummy/tests/integration/components/item-pager/component-test', ['exports', 'ember-qunit', 'dummy/instance-initializers/ember-intl'], function (exports, _emberQunit, _dummyInstanceInitializersEmberIntl) {

  (0, _emberQunit.moduleForComponent)('item-pager', 'Integration | Component | item pager', {
    integration: true,
    setup: function setup() {
      // manually invoke the ember-intl initializer
      _dummyInstanceInitializersEmberIntl['default'].initialize(this);
      var intl = this.container.lookup('service:intl');
      intl.setLocale('en-us');
    }
  });

  (0, _emberQunit.test)('it renders', function (assert) {
    var _this = this;

    this.setProperties({
      pageSize: 10,
      totalCount: 101,
      pageNumber: 1,
      changePage: function changePage(page) {
        _this.set('pageNumber', page);
      }
    });

    this.render(Ember.HTMLBars.template({
      'id': 'peXuuUmV',
      'block': '{"statements":[["append",["helper",["item-pager"],null,[["pageSize","totalCount","pageNumber","changePage"],[["get",["pageSize"]],["get",["totalCount"]],["get",["pageNumber"]],["helper",["action"],[["get",[null]],["get",["changePage"]]],null]]]],false]],"locals":[],"named":[],"yields":[],"blocks":[],"hasPartials":false}',
      'meta': {}
    }));
    var pagination = this.$('ul.pagination');
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
});
define('dummy/tests/integration/components/item-pager/component-test.lint-test', ['exports'], function (exports) {
  'use strict';

  QUnit.module('ESLint - integration/components/item-pager/component-test.js');
  QUnit.test('should pass ESLint', function (assert) {
    assert.expect(1);
    assert.ok(true, 'integration/components/item-pager/component-test.js should pass ESLint.\n');
  });
});
define('dummy/tests/integration/components/item-picker/component-test', ['exports', 'ember', 'ember-qunit', 'dummy/instance-initializers/ember-intl'], function (exports, _ember, _emberQunit, _dummyInstanceInitializersEmberIntl) {

  (0, _emberQunit.moduleForComponent)('item-picker', 'Integration | Component | item picker', {
    integration: true,
    setup: function setup() {
      // manually invoke the ember-intl initializer
      _dummyInstanceInitializersEmberIntl['default'].initialize(this);
      var intl = this.container.lookup('service:intl');
      intl.setLocale('en-us');
    }
  });

  (0, _emberQunit.test)('it renders', function (assert) {
    // Set any properties with this.set('myProperty', 'value');
    // Handle any actions with this.on('myAction', function(val) { ... });

    this.render(_ember['default'].HTMLBars.template({
      'id': 'I9uLVjag',
      'block': '{"statements":[["append",["unknown",["item-picker"]],false]],"locals":[],"named":[],"yields":[],"blocks":[],"hasPartials":false}',
      'meta': {}
    }));

    assert.equal(this.$().text().trim(), 'Search items:');
  });

  (0, _emberQunit.test)('it renders results', function (assert) {
    // Set any properties with this.set('myProperty', 'value');
    // Handle any actions with this.on('myAction', function(val) { ... });
    var item = {
      id: 'abc123',
      title: 'This is the name',
      description: 'This is the description',
      owner: 'jupe',
      modified: 1411060006000,
      type: 'Web Map'
    };
    var items = _ember['default'].A([item]);
    this.set('items', { results: items });
    this.render(_ember['default'].HTMLBars.template({
      'id': '7HgNYAVE',
      'block': '{"statements":[["append",["helper",["item-picker"],null,[["items"],[["get",["items"]]]]],false]],"locals":[],"named":[],"yields":[],"blocks":[],"hasPartials":false}',
      'meta': {}
    }));
    assert.equal(this.$('.item-picker-item-results-item').length, 1);
    assert.ok(!this.$('.item-picker-item-results-item').hasClass('is-selected'));
    assert.equal(this.$('.item-picker-current-item').length, 0);
  });
});
define('dummy/tests/integration/components/item-picker/component-test.lint-test', ['exports'], function (exports) {
  'use strict';

  QUnit.module('ESLint - integration/components/item-picker/component-test.js');
  QUnit.test('should pass ESLint', function (assert) {
    assert.expect(1);
    assert.ok(true, 'integration/components/item-picker/component-test.js should pass ESLint.\n');
  });
});
define('dummy/tests/integration/components/item-picker/item-preview/component-test', ['exports', 'ember-qunit', 'dummy/instance-initializers/ember-intl'], function (exports, _emberQunit, _dummyInstanceInitializersEmberIntl) {

  (0, _emberQunit.moduleForComponent)('item-picker/item-preview', 'Integration | Component | item picker/item preview', {
    integration: true,
    setup: function setup() {
      // manually invoke the ember-intl initializer
      _dummyInstanceInitializersEmberIntl['default'].initialize(this);
      var intl = this.container.lookup('service:intl');
      intl.setLocale('en-us');
    }
  });

  (0, _emberQunit.test)('it renders', function (assert) {
    // Set any properties with this.set('myProperty', 'value');
    // Handle any actions with this.on('myAction', function(val) { ... });
    var id = 'test-dataset-id';
    var model = {
      id: id,
      title: 'This is the name',
      description: 'This is the description',
      owner: 'jupe',
      modified: 1411060006000,
      type: 'Web Map'
    };
    this.set('model', model);
    this.render(Ember.HTMLBars.template({
      'id': 'bJwHjyL4',
      'block': '{"statements":[["append",["helper",["item-picker/item-preview"],null,[["model","_i18nScope"],[["get",["model"]],"ember-arcgis-portal-components.itemPicker."]]],false]],"locals":[],"named":[],"yields":[],"blocks":[],"hasPartials":false}',
      'meta': {}
    }));

    // assert.equal(this.$().text().trim(), '');
    var el = this.$('.item-picker-current-item-preview');
    assert.equal(el.find('h2').text().trim(), 'This is the name');
    assert.equal(el.find('span').text().trim(), 'Shared by: jupe');
    assert.equal(el.find('.item-picker-current-item-preview-description').text().trim(), 'This is the description');
    assert.equal(el.find('.item-picker-current-item-preview-meta > div').length, 2);
    assert.equal(el.find('.item-picker-current-item-preview-meta > div:nth-child(1)').text().trim(), '9/18/2014');
    assert.equal(el.find('.item-picker-current-item-preview-meta > div:nth-child(2)').text().trim(), 'Web Map');
  });
});
define('dummy/tests/integration/components/item-picker/item-preview/component-test.lint-test', ['exports'], function (exports) {
  'use strict';

  QUnit.module('ESLint - integration/components/item-picker/item-preview/component-test.js');
  QUnit.test('should pass ESLint', function (assert) {
    assert.expect(1);
    assert.ok(true, 'integration/components/item-picker/item-preview/component-test.js should pass ESLint.\n');
  });
});
define('dummy/tests/integration/components/item-picker/item-row/component-test', ['exports', 'ember-qunit'], function (exports, _emberQunit) {

  (0, _emberQunit.moduleForComponent)('item-picker/item-row', 'Integration | Component | item picker/item row', {
    integration: true
  });

  (0, _emberQunit.test)('it renders', function (assert) {
    // test double for the external action
    this.set('onClick', function () {
      // assert.equal(actual, expected, 'submitted value is passed to external action');
    });

    var id = 'test-item-id';
    var model = { id: id, title: 'This is the name' };
    this.setProperties({
      currentItemId: id + '-wrong',
      model: model
    });
    this.render(Ember.HTMLBars.template({
      'id': 'jCd3av/U',
      'block': '{"statements":[["append",["helper",["item-picker/item-row"],null,[["model","currentItemId","onClick"],[["get",["model"]],["get",["currentItemId"]],["helper",["action"],[["get",[null]],["get",["onClick"]],["get",["item"]]],null]]]],false]],"locals":[],"named":[],"yields":[],"blocks":[],"hasPartials":false}',
      'meta': {}
    }));

    assert.equal(this.$('h2').text().trim(), 'This is the name');
    assert.ok(!this.$('.item-picker-item-results-item').hasClass('is-selected'));
  });

  (0, _emberQunit.test)('it renders selected', function (assert) {
    // test double for the external action
    this.set('onClick', function () {
      // assert.equal(actual, expected, 'submitted value is passed to external action');
    });

    var id = 'test-item-id';
    var model = { id: id, title: 'This is the name' };
    this.setProperties({
      currentItemId: id,
      model: model
    });
    this.render(Ember.HTMLBars.template({
      'id': 'jCd3av/U',
      'block': '{"statements":[["append",["helper",["item-picker/item-row"],null,[["model","currentItemId","onClick"],[["get",["model"]],["get",["currentItemId"]],["helper",["action"],[["get",[null]],["get",["onClick"]],["get",["item"]]],null]]]],false]],"locals":[],"named":[],"yields":[],"blocks":[],"hasPartials":false}',
      'meta': {}
    }));

    assert.equal(this.$('h2').text().trim(), 'This is the name');
    assert.ok(this.$('.item-picker-item-results-item').hasClass('is-selected'));
  });

  (0, _emberQunit.test)('it properly handles click', function (assert) {
    var id = 'test-dataset-id';
    var model = { id: id, title: 'This is the name' };
    this.setProperties({
      currentItemId: id,
      model: model
    });

    // test double for the external action
    this.set('onClick', function (item) {
      assert.equal(item.id, id, 'submitted value is passed to external action');
    });

    this.render(Ember.HTMLBars.template({
      'id': 'yrTjoxzu',
      'block': '{"statements":[["append",["helper",["item-picker/item-row"],null,[["model","currentItemId","onClick"],[["get",["model"]],["get",["currentItemId"]],["helper",["action"],[["get",[null]],["get",["onClick"]]],null]]]],false]],"locals":[],"named":[],"yields":[],"blocks":[],"hasPartials":false}',
      'meta': {}
    }));
    this.$('li > a').click();
  });

  (0, _emberQunit.test)('multiple-mode: it renders', function (assert) {
    // test double for the external action
    this.set('onClick', function () {
      // assert.equal(actual, expected, 'submitted value is passed to external action');
    });

    var id = 'test-item-id';
    var model = { id: id, title: 'This is the name' };
    this.setProperties({
      model: model,
      itemsToAdd: []
    });
    this.render(Ember.HTMLBars.template({
      'id': 'Gm9gotRE',
      'block': '{"statements":[["append",["helper",["item-picker/item-row"],null,[["model","selectMultiple","itemsToAdd","currentItemId","onClick"],[["get",["model"]],true,["get",["itemsToAdd"]],["get",["currentItemId"]],["helper",["action"],[["get",[null]],["get",["onClick"]],["get",["item"]]],null]]]],false]],"locals":[],"named":[],"yields":[],"blocks":[],"hasPartials":false}',
      'meta': {}
    }));

    assert.equal(this.$('h2').text().trim(), 'This is the name');
    assert.equal(this.$('.item-picker-item-results-item span').length, 1);
    assert.equal(this.$('.item-picker-item-results-item a').length, 1);
    assert.equal(this.$('.item-picker-item-results-item a input').length, 1);
    assert.notOk(this.$('.item-picker-item-results-item a input').is(':checked'));
  });

  (0, _emberQunit.test)('multiple-mode: it renders checked', function (assert) {
    // test double for the external action
    this.set('onClick', function () {
      // assert.equal(actual, expected, 'submitted value is passed to external action');
    });

    var id = 'test-item-id';
    var model = { id: id, title: 'This is the name' };
    this.setProperties({
      model: model,
      itemsToAdd: [{ id: id }]
    });
    this.render(Ember.HTMLBars.template({
      'id': 'Gm9gotRE',
      'block': '{"statements":[["append",["helper",["item-picker/item-row"],null,[["model","selectMultiple","itemsToAdd","currentItemId","onClick"],[["get",["model"]],true,["get",["itemsToAdd"]],["get",["currentItemId"]],["helper",["action"],[["get",[null]],["get",["onClick"]],["get",["item"]]],null]]]],false]],"locals":[],"named":[],"yields":[],"blocks":[],"hasPartials":false}',
      'meta': {}
    }));

    assert.equal(this.$('h2').text().trim(), 'This is the name');
    assert.ok(this.$('.item-picker-item-results-item a input').is(':checked'));
  });

  (0, _emberQunit.test)('multiple-mode: it properly handles click', function (assert) {
    var id = 'test-dataset-id';
    var model = { id: id, title: 'This is the name' };
    this.setProperties({
      model: model,
      itemsToAdd: []
    });

    // test double for the external action
    this.set('onClick', function (item) {
      assert.equal(item.id, id, 'submitted value is passed to external action');
    });

    this.render(Ember.HTMLBars.template({
      'id': '8hEcjwgO',
      'block': '{"statements":[["append",["helper",["item-picker/item-row"],null,[["model","selectMultiple","itemsToAdd","currentItemId","onClick"],[["get",["model"]],true,["get",["itemsToAdd"]],["get",["currentItemId"]],["helper",["action"],[["get",[null]],["get",["onClick"]]],null]]]],false]],"locals":[],"named":[],"yields":[],"blocks":[],"hasPartials":false}',
      'meta': {}
    }));

    assert.notOk(this.$('.item-picker-item-results-item a input').is(':checked'));

    this.$('li > a').click();
  });
});
define('dummy/tests/integration/components/item-picker/item-row/component-test.lint-test', ['exports'], function (exports) {
  'use strict';

  QUnit.module('ESLint - integration/components/item-picker/item-row/component-test.js');
  QUnit.test('should pass ESLint', function (assert) {
    assert.expect(1);
    assert.ok(true, 'integration/components/item-picker/item-row/component-test.js should pass ESLint.\n');
  });
});
define('dummy/tests/itempicker/facets/controller.lint-test', ['exports'], function (exports) {
  'use strict';

  QUnit.module('ESLint - itempicker/facets/controller.js');
  QUnit.test('should pass ESLint', function (assert) {
    assert.expect(1);
    assert.ok(true, 'itempicker/facets/controller.js should pass ESLint.\n');
  });
});
define('dummy/tests/itempicker/facets/route.lint-test', ['exports'], function (exports) {
  'use strict';

  QUnit.module('ESLint - itempicker/facets/route.js');
  QUnit.test('should pass ESLint', function (assert) {
    assert.expect(1);
    assert.ok(true, 'itempicker/facets/route.js should pass ESLint.\n');
  });
});
define('dummy/tests/itempicker/index/controller.lint-test', ['exports'], function (exports) {
  'use strict';

  QUnit.module('ESLint - itempicker/index/controller.js');
  QUnit.test('should pass ESLint', function (assert) {
    assert.expect(1);
    assert.ok(true, 'itempicker/index/controller.js should pass ESLint.\n');
  });
});
define('dummy/tests/itempicker/index/route.lint-test', ['exports'], function (exports) {
  'use strict';

  QUnit.module('ESLint - itempicker/index/route.js');
  QUnit.test('should pass ESLint', function (assert) {
    assert.expect(1);
    assert.ok(true, 'itempicker/index/route.js should pass ESLint.\n');
  });
});
define('dummy/tests/itempicker/multiselect/controller.lint-test', ['exports'], function (exports) {
  'use strict';

  QUnit.module('ESLint - itempicker/multiselect/controller.js');
  QUnit.test('should pass ESLint', function (assert) {
    assert.expect(1);
    assert.ok(true, 'itempicker/multiselect/controller.js should pass ESLint.\n');
  });
});
define('dummy/tests/itempicker/multiselect/route.lint-test', ['exports'], function (exports) {
  'use strict';

  QUnit.module('ESLint - itempicker/multiselect/route.js');
  QUnit.test('should pass ESLint', function (assert) {
    assert.expect(1);
    assert.ok(true, 'itempicker/multiselect/route.js should pass ESLint.\n');
  });
});
define('dummy/tests/itempicker/route.lint-test', ['exports'], function (exports) {
  'use strict';

  QUnit.module('ESLint - itempicker/route.js');
  QUnit.test('should pass ESLint', function (assert) {
    assert.expect(1);
    assert.ok(true, 'itempicker/route.js should pass ESLint.\n');
  });
});
define('dummy/tests/resolver.lint-test', ['exports'], function (exports) {
  'use strict';

  QUnit.module('ESLint - resolver.js');
  QUnit.test('should pass ESLint', function (assert) {
    assert.expect(1);
    assert.ok(true, 'resolver.js should pass ESLint.\n');
  });
});
define('dummy/tests/router.lint-test', ['exports'], function (exports) {
  'use strict';

  QUnit.module('ESLint - router.js');
  QUnit.test('should pass ESLint', function (assert) {
    assert.expect(1);
    assert.ok(true, 'router.js should pass ESLint.\n');
  });
});
define('dummy/tests/test-helper', ['exports', 'dummy/tests/helpers/resolver', 'ember-qunit'], function (exports, _dummyTestsHelpersResolver, _emberQunit) {

  (0, _emberQunit.setResolver)(_dummyTestsHelpersResolver['default']);
});
define('dummy/tests/test-helper.lint-test', ['exports'], function (exports) {
  'use strict';

  QUnit.module('ESLint - test-helper.js');
  QUnit.test('should pass ESLint', function (assert) {
    assert.expect(1);
    assert.ok(true, 'test-helper.js should pass ESLint.\n');
  });
});
define('dummy/tests/unit/utils/query-helpers-test', ['exports', 'dummy/utils/query-helpers', 'qunit'], function (exports, _dummyUtilsQueryHelpers, _qunit) {

  (0, _qunit.module)('Unit | Utility | query helpers');

  // Replace this with your real tests.
  (0, _qunit.test)('it works', function (assert) {
    var facet = {
      name: 'Apps',
      params: {
        query: {
          type: ['Web Mapping Application'],
          typekeywords: ['-hubsite', '-story'],
          tags: ['-survey', '-storymap', '-site']
        }
      }
    };
    var query = 'Environment';
    var result = _dummyUtilsQueryHelpers['default'].createQuery(facet, query);
    assert.ok(result);
  });
});
define('dummy/tests/unit/utils/query-helpers-test.lint-test', ['exports'], function (exports) {
  'use strict';

  QUnit.module('ESLint - unit/utils/query-helpers-test.js');
  QUnit.test('should pass ESLint', function (assert) {
    assert.expect(1);
    assert.ok(true, 'unit/utils/query-helpers-test.js should pass ESLint.\n');
  });
});
/* jshint ignore:start */

require('dummy/tests/test-helper');
EmberENV.TESTS_FILE_LOADED = true;

/* jshint ignore:end */
//# sourceMappingURL=tests.map
