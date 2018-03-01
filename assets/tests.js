'use strict';

define('dummy/tests/app.lint-test', [], function () {
  'use strict';

  QUnit.module('ESLint | app');

  QUnit.test('app.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'app.js should pass ESLint\n\n');
  });

  QUnit.test('application/route.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'application/route.js should pass ESLint\n\n');
  });

  QUnit.test('index/route.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'index/route.js should pass ESLint\n\n');
  });

  QUnit.test('itempicker/defaultcatalog/controller.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'itempicker/defaultcatalog/controller.js should pass ESLint\n\n');
  });

  QUnit.test('itempicker/defaultcatalog/route.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'itempicker/defaultcatalog/route.js should pass ESLint\n\n');
  });

  QUnit.test('itempicker/facets/controller.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'itempicker/facets/controller.js should pass ESLint\n\n');
  });

  QUnit.test('itempicker/facets/route.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'itempicker/facets/route.js should pass ESLint\n\n');
  });

  QUnit.test('itempicker/index/controller.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'itempicker/index/controller.js should pass ESLint\n\n');
  });

  QUnit.test('itempicker/index/route.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'itempicker/index/route.js should pass ESLint\n\n');
  });

  QUnit.test('itempicker/layerpicker/controller.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'itempicker/layerpicker/controller.js should pass ESLint\n\n');
  });

  QUnit.test('itempicker/multiselect/controller.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'itempicker/multiselect/controller.js should pass ESLint\n\n');
  });

  QUnit.test('itempicker/multiselect/route.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'itempicker/multiselect/route.js should pass ESLint\n\n');
  });

  QUnit.test('itempicker/portalopts/controller.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'itempicker/portalopts/controller.js should pass ESLint\n\n');
  });

  QUnit.test('itempicker/portalopts/route.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'itempicker/portalopts/route.js should pass ESLint\n\n');
  });

  QUnit.test('itempicker/route.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'itempicker/route.js should pass ESLint\n\n');
  });

  QUnit.test('itempicker/specificid/controller.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'itempicker/specificid/controller.js should pass ESLint\n\n');
  });

  QUnit.test('itempicker/specificid/route.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'itempicker/specificid/route.js should pass ESLint\n\n');
  });

  QUnit.test('itempicker/validation/controller.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'itempicker/validation/controller.js should pass ESLint\n\n');
  });

  QUnit.test('itempicker/validation/route.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'itempicker/validation/route.js should pass ESLint\n\n');
  });

  QUnit.test('resolver.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'resolver.js should pass ESLint\n\n');
  });

  QUnit.test('router.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'router.js should pass ESLint\n\n');
  });
});
define('dummy/tests/helpers/destroy-app', ['exports'], function (exports) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = destroyApp;
  function destroyApp(application) {
    Ember.run(application, 'destroy');
  }
});
define('dummy/tests/helpers/module-for-acceptance', ['exports', 'qunit', 'dummy/tests/helpers/start-app', 'dummy/tests/helpers/destroy-app'], function (exports, _qunit, _startApp, _destroyApp) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });

  exports.default = function (name) {
    var options = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};

    (0, _qunit.module)(name, {
      beforeEach: function beforeEach() {
        this.application = (0, _startApp.default)();

        if (options.beforeEach) {
          return options.beforeEach.apply(this, arguments);
        }
      },
      afterEach: function afterEach() {
        var _this = this;

        var afterEach = options.afterEach && options.afterEach.apply(this, arguments);
        return Ember.RSVP.resolve(afterEach).then(function () {
          return (0, _destroyApp.default)(_this.application);
        });
      }
    });
  };
});
define('dummy/tests/helpers/start-app', ['exports', 'dummy/app', 'dummy/config/environment'], function (exports, _app, _environment) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = startApp;
  function startApp(attrs) {
    var attributes = Ember.merge({}, _environment.default.APP);
    attributes.autoboot = true;
    attributes = Ember.merge(attributes, attrs); // use defaults, but you can override;

    return Ember.run(function () {
      var application = _app.default.create(attributes);
      application.setupForTesting();
      application.injectTestHelpers();
      return application;
    });
  }
});
define('dummy/tests/helpers/torii', ['exports'], function (exports) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
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
define('dummy/tests/integration/components/image-with-fallback/component-test', ['ember-qunit'], function (_emberQunit) {
  'use strict';

  // NOTE: this component is in ember-arcgis-layout-cards
  (0, _emberQunit.moduleForComponent)('image-with-fallback', 'Integration | Component | image with fallback', {
    integration: true
  });

  (0, _emberQunit.test)('it renders', function (assert) {
    // Set any properties with this.set('myProperty', 'value');
    // Handle any actions with this.on('myAction', function(val) { ... });" + EOL + EOL +

    this.render(Ember.HTMLBars.template({
      "id": "K7Frs3qt",
      "block": "{\"symbols\":[],\"statements\":[[1,[25,\"image-with-fallback\",null,[[\"imgSrc\",\"fallbackSrc\"],[\"source\",\"fallback-source\"]]],false]],\"hasEval\":false}",
      "meta": {}
    }));

    assert.equal(this.$().text().trim(), '');
  });
});
define('dummy/tests/integration/components/item-pager/component-test', ['ember-qunit'], function (_emberQunit) {
  'use strict';

  (0, _emberQunit.moduleForComponent)('item-pager', 'Integration | Component | item pager', {
    integration: true,
    setup: function setup() {
      var intl = this.container.lookup('service:intl');
      intl.setLocale('en-us');

      var session = Ember.Service.extend({});
      this.register('service:session', session);
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
      "id": "PqIWT/9Q",
      "block": "{\"symbols\":[],\"statements\":[[1,[25,\"item-pager\",null,[[\"pageSize\",\"totalCount\",\"pageNumber\",\"changePage\"],[[20,[\"pageSize\"]],[20,[\"totalCount\"]],[20,[\"pageNumber\"]],[25,\"action\",[[19,0,[]],[20,[\"changePage\"]]],null]]]],false]],\"hasEval\":false}",
      "meta": {}
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
define('dummy/tests/integration/components/item-picker/component-test', ['ember-qunit'], function (_emberQunit) {
  'use strict';

  (0, _emberQunit.moduleForComponent)('item-picker', 'Integration | Component | item picker', {
    integration: true,
    setup: function setup() {
      var intl = this.container.lookup('service:intl');
      intl.setLocale('en-us');

      var session = Ember.Service.extend({});
      this.register('service:session', session);
    }
  });

  (0, _emberQunit.test)('it renders', function (assert) {
    // Set any properties with this.set('myProperty', 'value');
    // Handle any actions with this.on('myAction', function(val) { ... });

    this.render(Ember.HTMLBars.template({
      "id": "fHXPd39b",
      "block": "{\"symbols\":[],\"statements\":[[1,[18,\"item-picker\"],false]],\"hasEval\":false}",
      "meta": {}
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
    var items = Ember.A([item]);
    this.set('items', { results: items });
    this.render(Ember.HTMLBars.template({
      "id": "+qq6bjQH",
      "block": "{\"symbols\":[],\"statements\":[[1,[25,\"item-picker\",null,[[\"items\"],[[20,[\"items\"]]]]],false]],\"hasEval\":false}",
      "meta": {}
    }));
    assert.equal(this.$('.item-picker-item-results-item').length, 1);
    assert.ok(!this.$('.item-picker-item-results-item').hasClass('is-selected'));
    assert.equal(this.$('.item-picker-current-item').length, 0);
  });
});
define('dummy/tests/integration/components/item-picker/feature-service-preview/component-test', ['ember-qunit'], function (_emberQunit) {
  'use strict';

  (0, _emberQunit.moduleForComponent)('item-picker/feature-service-preview', 'Integration | Component | item picker/feature service preview', {
    integration: true,
    setup: function setup() {
      var intl = this.container.lookup('service:intl');
      intl.setLocale('en-us');

      var session = Ember.Service.extend({});
      this.register('service:session', session);
    },
    beforeEach: function beforeEach() {
      var featureService = Ember.Service.extend({
        getLayerInfo: function getLayerInfo() {
          return Ember.RSVP.resolve(2);
        }
      });
      this.register('service:feature-service', featureService);
    }
  });

  (0, _emberQunit.test)('it renders', function (assert) {
    var id = 'test-dataset-id';
    var item = {
      id: id,
      title: 'This is the name',
      description: 'This is the description',
      owner: 'jupe',
      modified: 1411060006000,
      type: 'Feature Service',
      url: 'https://foo.bar.baz'
    };

    this.setProperties({
      currentItem: item,
      isLoading: false,
      layerList: [],
      selectedLayer: null,
      onSelectionValidator: function onSelectionValidator() {},
      onPreviewSelected: function onPreviewSelected() {},
      cancelAction: function cancelAction() {}
    });

    this.render(Ember.HTMLBars.template({
      "id": "ODCNaYog",
      "block": "{\"symbols\":[],\"statements\":[[1,[25,\"item-picker/feature-service-preview\",null,[[\"model\",\"onSelectionValidator\",\"onItemSelected\",\"onCancel\"],[[20,[\"currentItem\"]],[20,[\"onSelectionValidator\"]],[20,[\"onPreviewSelected\"]],[20,[\"cancelAction\"]]]]],false]],\"hasEval\":false}",
      "meta": {}
    }));

    var el = this.$('.item-picker-current-item-preview');
    assert.equal(el.find('h4').text().trim(), 'This is the name');
    assert.equal(el.find('span').text().trim(), 'Shared by: jupe');
    assert.equal(el.find('.item-picker-current-item-preview-description').text().trim(), 'This is the description');
    assert.equal(el.find('.item-picker-current-item-preview-meta > div').length, 3);
    assert.equal(el.find('.item-picker-current-item-preview-meta > div:nth-child(2)').text().trim(), '9/18/2014');
    assert.equal(el.find('.item-picker-current-item-preview-meta > div:nth-child(3)').text().trim(), 'Feature Service');
  });
});
define('dummy/tests/integration/components/item-picker/item-preview/component-test', ['ember-qunit'], function (_emberQunit) {
  'use strict';

  (0, _emberQunit.moduleForComponent)('item-picker/item-preview', 'Integration | Component | item picker/item preview', {
    integration: true,
    setup: function setup() {
      var intl = this.container.lookup('service:intl');
      intl.setLocale('en-us');
    }
  });

  (0, _emberQunit.test)('it renders', function (assert) {
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
    this.set('onSelectionValidator', function () {});
    this.set('onItemSelected', function () {});
    this.set('cancelAction', function () {});
    this.set('isLoading', true);

    this.render(Ember.HTMLBars.template({
      "id": "1rzVdQ/f",
      "block": "{\"symbols\":[],\"statements\":[[1,[25,\"item-picker/item-preview\",null,[[\"model\",\"onSelectionValidator\",\"onItemSelected\",\"onCancel\"],[[20,[\"model\"]],[20,[\"onSelectionValidator\"]],[20,[\"onItemSelected\"]],[20,[\"cancelAction\"]]]]],false]],\"hasEval\":false}",
      "meta": {}
    }));

    // assert.equal(this.$().text().trim(), '');
    var el = this.$('.item-picker-current-item-preview');
    assert.equal(el.find('h4').text().trim(), 'This is the name');
    assert.equal(el.find('span').text().trim(), 'Shared by: jupe');
    assert.equal(el.find('.item-picker-current-item-preview-description').text().trim(), 'This is the description');
    assert.equal(el.find('.item-picker-current-item-preview-meta > div').length, 2);
    assert.equal(el.find('.item-picker-current-item-preview-meta > div:nth-child(1)').text().trim(), '9/18/2014');
    assert.equal(el.find('.item-picker-current-item-preview-meta > div:nth-child(2)').text().trim(), 'Web Map');
  });
});
define('dummy/tests/integration/components/item-picker/item-row/component-test', ['ember-qunit'], function (_emberQunit) {
  'use strict';

  (0, _emberQunit.moduleForComponent)('item-picker/item-row', 'Integration | Component | item picker/item row', {
    integration: true,
    setup: function setup() {
      var intl = this.container.lookup('service:intl');
      intl.setLocale('en-us');

      var session = Ember.Service.extend({});
      this.register('service:session', session);
    }
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
      "id": "wzeFveZJ",
      "block": "{\"symbols\":[],\"statements\":[[1,[25,\"item-picker/item-row\",null,[[\"model\",\"currentItemId\",\"onClick\"],[[20,[\"model\"]],[20,[\"currentItemId\"]],[25,\"action\",[[19,0,[]],[20,[\"onClick\"]],[20,[\"item\"]]],null]]]],false]],\"hasEval\":false}",
      "meta": {}
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
      "id": "wzeFveZJ",
      "block": "{\"symbols\":[],\"statements\":[[1,[25,\"item-picker/item-row\",null,[[\"model\",\"currentItemId\",\"onClick\"],[[20,[\"model\"]],[20,[\"currentItemId\"]],[25,\"action\",[[19,0,[]],[20,[\"onClick\"]],[20,[\"item\"]]],null]]]],false]],\"hasEval\":false}",
      "meta": {}
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
      "id": "+w3pYHwt",
      "block": "{\"symbols\":[],\"statements\":[[1,[25,\"item-picker/item-row\",null,[[\"model\",\"currentItemId\",\"onClick\"],[[20,[\"model\"]],[20,[\"currentItemId\"]],[25,\"action\",[[19,0,[]],[20,[\"onClick\"]]],null]]]],false]],\"hasEval\":false}",
      "meta": {}
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
      "id": "yLB+N6sB",
      "block": "{\"symbols\":[],\"statements\":[[1,[25,\"item-picker/item-row\",null,[[\"model\",\"selectMultiple\",\"itemsToAdd\",\"currentItemId\",\"onClick\"],[[20,[\"model\"]],true,[20,[\"itemsToAdd\"]],[20,[\"currentItemId\"]],[25,\"action\",[[19,0,[]],[20,[\"onClick\"]],[20,[\"item\"]]],null]]]],false]],\"hasEval\":false}",
      "meta": {}
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
      "id": "yLB+N6sB",
      "block": "{\"symbols\":[],\"statements\":[[1,[25,\"item-picker/item-row\",null,[[\"model\",\"selectMultiple\",\"itemsToAdd\",\"currentItemId\",\"onClick\"],[[20,[\"model\"]],true,[20,[\"itemsToAdd\"]],[20,[\"currentItemId\"]],[25,\"action\",[[19,0,[]],[20,[\"onClick\"]],[20,[\"item\"]]],null]]]],false]],\"hasEval\":false}",
      "meta": {}
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
      "id": "LujJIB75",
      "block": "{\"symbols\":[],\"statements\":[[1,[25,\"item-picker/item-row\",null,[[\"model\",\"selectMultiple\",\"itemsToAdd\",\"currentItemId\",\"onClick\"],[[20,[\"model\"]],true,[20,[\"itemsToAdd\"]],[20,[\"currentItemId\"]],[25,\"action\",[[19,0,[]],[20,[\"onClick\"]]],null]]]],false]],\"hasEval\":false}",
      "meta": {}
    }));

    assert.notOk(this.$('.item-picker-item-results-item a input').is(':checked'));

    this.$('li > a').click();
  });
});
define('dummy/tests/integration/components/item-picker/layer-picker/component-test', ['ember-qunit'], function (_emberQunit) {
  'use strict';

  (0, _emberQunit.moduleForComponent)('item-picker/layer-picker', 'Integration | Component | item picker/layer picker', {
    integration: true,
    setup: function setup() {
      // manually invoke the ember-intl initializer
      var intl = this.container.lookup('service:intl');
      intl.setLocale('en-us');
      this.inject.service('intl', { as: 'intl' });
    }
  });

  (0, _emberQunit.test)('it renders with layers', function (assert) {
    var item = {
      checked: true,
      defaultVisibility: true,
      geometryType: 'esriGeometryPoint',
      id: 0,
      maxScale: 0,
      minScale: 0,
      name: 'test',
      parentLayerId: -1,
      subLayerIds: null
    };

    var itemArr = [item];
    this.set('model', itemArr);
    this.set('onLayerSelected', function () {});
    this.render(Ember.HTMLBars.template({
      "id": "CFx/qEuD",
      "block": "{\"symbols\":[],\"statements\":[[1,[25,\"item-picker/layer-picker\",null,[[\"model\",\"selectable\",\"onLayerSelected\"],[[20,[\"model\"]],true,[20,[\"onLayerSelected\"]]]]],false]],\"hasEval\":false}",
      "meta": {}
    }));

    assert.equal(this.$('.layer-picker-list').length, 1, 'Layer list is not empty');
    assert.equal(this.$('ul').length, 1, 'There is at least 1 layer in the list');
  });
});
define('dummy/tests/integration/components/loading-indicator/component-test', ['ember-qunit'], function (_emberQunit) {
  'use strict';

  (0, _emberQunit.moduleForComponent)('loading-indicator', 'Integration | Component | loading indicator', {
    integration: true,
    setup: function setup() {
      var intl = this.container.lookup('service:intl');
      intl.setLocale('en-us');
    }
  });

  (0, _emberQunit.test)('it renders', function (assert) {
    assert.expect(1);
    this.render(Ember.HTMLBars.template({
      "id": "dgBO95yD",
      "block": "{\"symbols\":[],\"statements\":[[1,[18,\"loading-indicator\"],false]],\"hasEval\":false}",
      "meta": {}
    }));
    assert.equal(this.$().text().trim(), 'Loading...');
  });
});
define('dummy/tests/integration/components/search-form/component-test', ['ember-qunit'], function (_emberQunit) {
  'use strict';

  (0, _emberQunit.moduleForComponent)('search-form', 'Integration | Component | search form', {
    integration: true,
    beforeEach: function beforeEach() {
      var intl = this.container.lookup('service:intl');
      intl.setLocale('en-us');
    }
  });

  (0, _emberQunit.test)('it renders', function (assert) {
    assert.expect(2);

    this.set('q', undefined);
    this.on('search', function (val) {
      assert.equal(val, 'test', 'it should have passed the value on submit');
    });

    this.render(Ember.HTMLBars.template({
      "id": "3vPbR+10",
      "block": "{\"symbols\":[],\"statements\":[[1,[25,\"search-form\",null,[[\"_q\",\"onSearch\"],[[20,[\"q\"]],[25,\"action\",[[19,0,[]],\"search\"],null]]]],false]],\"hasEval\":false}",
      "meta": {}
    }));

    var $input = this.$('input');
    assert.equal($input.val(), '', 'input should be empty');

    // enter term and search
    $input.val('test').trigger('change');
    assert.equal(this.get('q'), undefined, 'should not mutate q property');
  });
});
define('dummy/tests/test-helper', ['dummy/app', 'dummy/config/environment', '@ember/test-helpers', 'ember-qunit'], function (_app, _environment, _testHelpers, _emberQunit) {
  'use strict';

  (0, _testHelpers.setApplication)(_app.default.create(_environment.default.APP));

  (0, _emberQunit.start)();
});
define('dummy/tests/tests.lint-test', [], function () {
  'use strict';

  QUnit.module('ESLint | tests');

  QUnit.test('helpers/destroy-app.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'helpers/destroy-app.js should pass ESLint\n\n');
  });

  QUnit.test('helpers/module-for-acceptance.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'helpers/module-for-acceptance.js should pass ESLint\n\n');
  });

  QUnit.test('helpers/start-app.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'helpers/start-app.js should pass ESLint\n\n');
  });

  QUnit.test('integration/components/image-with-fallback/component-test.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'integration/components/image-with-fallback/component-test.js should pass ESLint\n\n');
  });

  QUnit.test('integration/components/item-pager/component-test.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'integration/components/item-pager/component-test.js should pass ESLint\n\n');
  });

  QUnit.test('integration/components/item-picker/component-test.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'integration/components/item-picker/component-test.js should pass ESLint\n\n');
  });

  QUnit.test('integration/components/item-picker/feature-service-preview/component-test.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'integration/components/item-picker/feature-service-preview/component-test.js should pass ESLint\n\n');
  });

  QUnit.test('integration/components/item-picker/item-preview/component-test.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'integration/components/item-picker/item-preview/component-test.js should pass ESLint\n\n');
  });

  QUnit.test('integration/components/item-picker/item-row/component-test.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'integration/components/item-picker/item-row/component-test.js should pass ESLint\n\n');
  });

  QUnit.test('integration/components/item-picker/layer-picker/component-test.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'integration/components/item-picker/layer-picker/component-test.js should pass ESLint\n\n');
  });

  QUnit.test('integration/components/loading-indicator/component-test.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'integration/components/loading-indicator/component-test.js should pass ESLint\n\n');
  });

  QUnit.test('integration/components/search-form/component-test.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'integration/components/search-form/component-test.js should pass ESLint\n\n');
  });

  QUnit.test('test-helper.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'test-helper.js should pass ESLint\n\n');
  });

  QUnit.test('unit/utils/force-https-test.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'unit/utils/force-https-test.js should pass ESLint\n\n');
  });

  QUnit.test('unit/utils/is-guid-test.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'unit/utils/is-guid-test.js should pass ESLint\n\n');
  });

  QUnit.test('unit/utils/query-helpers-test.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'unit/utils/query-helpers-test.js should pass ESLint\n\n');
  });
});
define('dummy/tests/unit/utils/force-https-test', ['ember-arcgis-portal-components/utils/force-https', 'qunit'], function (_forceHttps, _qunit) {
  'use strict';

  (0, _qunit.module)('Unit | Utility | force https');

  // Replace this with your real tests.
  (0, _qunit.test)('it upgrades http to https for arcgis.com if protocol is https', function (assert) {
    var result = (0, _forceHttps.default)('http://foo.arcgis.com/some-path?query=string', 'https');
    assert.equal(result, 'https://foo.arcgis.com/some-path?query=string');
  });

  (0, _qunit.test)('it always upgrades for arcgis.com urls to https', function (assert) {
    var result = (0, _forceHttps.default)('http://foo.arcgis.com/some-path?query=string', 'http');
    assert.equal(result, 'https://foo.arcgis.com/some-path?query=string');
  });

  (0, _qunit.test)('it does upgrade non-arcgis.com urls to https if protocol is https', function (assert) {
    var result = (0, _forceHttps.default)('http://foo.com', 'https');
    assert.equal(result, 'https://foo.com');
  });

  (0, _qunit.test)('it returns https', function (assert) {
    var result = (0, _forceHttps.default)('https://foo.com');
    assert.equal(result, 'https://foo.com');
  });
});
define('dummy/tests/unit/utils/is-guid-test', ['dummy/utils/is-guid', 'qunit'], function (_isGuid, _qunit) {
  'use strict';

  (0, _qunit.module)('Unit | Utility | is guid');

  // Replace this with your real tests.
  (0, _qunit.test)('it works', function (assert) {
    assert.notOk((0, _isGuid.default)(1234));
    assert.notOk((0, _isGuid.default)('1234'));
    assert.notOk((0, _isGuid.default)('imnotaguid'));
    assert.ok((0, _isGuid.default)('76c3db4812d44f0087850093837e7a90'));
    assert.ok((0, _isGuid.default)('{371acc8b-85cf-4251-8c01-7d0e48bac7e3}'));
  });
});
define('dummy/tests/unit/utils/query-helpers-test', ['dummy/utils/query-helpers', 'qunit'], function (_queryHelpers, _qunit) {
  'use strict';

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
    var result = _queryHelpers.default.createQuery(facet, query);
    assert.ok(result);
  });
});
require('dummy/tests/test-helper');
EmberENV.TESTS_FILE_LOADED = true;
//# sourceMappingURL=tests.map
