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
define('dummy/tests/integration/components/image-with-fallback/component-test', ['qunit', 'ember-qunit', '@ember/test-helpers'], function (_qunit, _emberQunit, _testHelpers) {
  'use strict';

  function _asyncToGenerator(fn) {
    return function () {
      var gen = fn.apply(this, arguments);
      return new Promise(function (resolve, reject) {
        function step(key, arg) {
          try {
            var info = gen[key](arg);
            var value = info.value;
          } catch (error) {
            reject(error);
            return;
          }

          if (info.done) {
            resolve(value);
          } else {
            return Promise.resolve(value).then(function (value) {
              step("next", value);
            }, function (err) {
              step("throw", err);
            });
          }
        }

        return step("next");
      });
    };
  }

  (0, _qunit.module)('Integration | Component | image with fallback', function (hooks) {
    (0, _emberQunit.setupRenderingTest)(hooks);

    (0, _qunit.test)('it renders', function () {
      var _ref2 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee(assert) {
        return regeneratorRuntime.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                _context.next = 2;
                return (0, _testHelpers.render)(Ember.HTMLBars.template({
                  "id": "K7Frs3qt",
                  "block": "{\"symbols\":[],\"statements\":[[1,[25,\"image-with-fallback\",null,[[\"imgSrc\",\"fallbackSrc\"],[\"source\",\"fallback-source\"]]],false]],\"hasEval\":false}",
                  "meta": {}
                }));

              case 2:

                assert.equal((0, _testHelpers.find)('*').textContent.trim(), '');

              case 3:
              case 'end':
                return _context.stop();
            }
          }
        }, _callee, this);
      }));

      return function (_x) {
        return _ref2.apply(this, arguments);
      };
    }());
  });
});
define('dummy/tests/integration/components/item-pager/component-test', ['qunit', 'ember-qunit', '@ember/test-helpers'], function (_qunit, _emberQunit, _testHelpers) {
  'use strict';

  function _asyncToGenerator(fn) {
    return function () {
      var gen = fn.apply(this, arguments);
      return new Promise(function (resolve, reject) {
        function step(key, arg) {
          try {
            var info = gen[key](arg);
            var value = info.value;
          } catch (error) {
            reject(error);
            return;
          }

          if (info.done) {
            resolve(value);
          } else {
            return Promise.resolve(value).then(function (value) {
              step("next", value);
            }, function (err) {
              step("throw", err);
            });
          }
        }

        return step("next");
      });
    };
  }

  (0, _qunit.module)('Integration | Component | item pager', function (hooks) {
    (0, _emberQunit.setupRenderingTest)(hooks);

    hooks.beforeEach(function () {
      var intl = this.owner.lookup('service:intl');
      intl.setLocale('en-us');

      var session = Ember.Service.extend({});
      this.owner.register('service:session', session);
    });

    (0, _qunit.test)('it renders', function () {
      var _ref2 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee(assert) {
        var _this = this;

        var pagination;
        return regeneratorRuntime.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                this.setProperties({
                  pageSize: 10,
                  totalCount: 101,
                  pageNumber: 1,
                  changePage: function changePage(page) {
                    _this.set('pageNumber', page);
                  }
                });

                _context.next = 3;
                return (0, _testHelpers.render)(Ember.HTMLBars.template({
                  "id": "PqIWT/9Q",
                  "block": "{\"symbols\":[],\"statements\":[[1,[25,\"item-pager\",null,[[\"pageSize\",\"totalCount\",\"pageNumber\",\"changePage\"],[[20,[\"pageSize\"]],[20,[\"totalCount\"]],[20,[\"pageNumber\"]],[25,\"action\",[[19,0,[]],[20,[\"changePage\"]]],null]]]],false]],\"hasEval\":false}",
                  "meta": {}
                }));

              case 3:
                pagination = this.$('ul.pagination');

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

              case 59:
              case 'end':
                return _context.stop();
            }
          }
        }, _callee, this);
      }));

      return function (_x) {
        return _ref2.apply(this, arguments);
      };
    }());
  });
});
define('dummy/tests/integration/components/item-picker/component-test', ['qunit', 'ember-qunit', '@ember/test-helpers'], function (_qunit, _emberQunit, _testHelpers) {
  'use strict';

  function _asyncToGenerator(fn) {
    return function () {
      var gen = fn.apply(this, arguments);
      return new Promise(function (resolve, reject) {
        function step(key, arg) {
          try {
            var info = gen[key](arg);
            var value = info.value;
          } catch (error) {
            reject(error);
            return;
          }

          if (info.done) {
            resolve(value);
          } else {
            return Promise.resolve(value).then(function (value) {
              step("next", value);
            }, function (err) {
              step("throw", err);
            });
          }
        }

        return step("next");
      });
    };
  }

  (0, _qunit.module)('Integration | Component | item picker', function (hooks) {
    (0, _emberQunit.setupRenderingTest)(hooks);

    hooks.beforeEach(function () {
      var intl = this.owner.lookup('service:intl');
      intl.setLocale('en-us');

      var session = Ember.Service.extend({});
      this.owner.register('service:session', session);
    });

    (0, _qunit.test)('it renders', function () {
      var _ref2 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee(assert) {
        return regeneratorRuntime.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                _context.next = 2;
                return (0, _testHelpers.render)(Ember.HTMLBars.template({
                  "id": "fHXPd39b",
                  "block": "{\"symbols\":[],\"statements\":[[1,[18,\"item-picker\"],false]],\"hasEval\":false}",
                  "meta": {}
                }));

              case 2:

                assert.equal((0, _testHelpers.find)('*').textContent.trim(), 'Search items:');

              case 3:
              case 'end':
                return _context.stop();
            }
          }
        }, _callee, this);
      }));

      return function (_x) {
        return _ref2.apply(this, arguments);
      };
    }());

    (0, _qunit.test)('it renders results', function () {
      var _ref3 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee2(assert) {
        var item, items;
        return regeneratorRuntime.wrap(function _callee2$(_context2) {
          while (1) {
            switch (_context2.prev = _context2.next) {
              case 0:
                // Set any properties with this.set('myProperty', 'value');
                // Handle any actions with this.on('myAction', function(val) { ... });
                item = {
                  id: 'abc123',
                  title: 'This is the name',
                  description: 'This is the description',
                  owner: 'jupe',
                  modified: 1411060006000,
                  type: 'Web Map'
                };
                items = Ember.A([item]);

                this.set('items', { results: items });
                _context2.next = 5;
                return (0, _testHelpers.render)(Ember.HTMLBars.template({
                  "id": "+qq6bjQH",
                  "block": "{\"symbols\":[],\"statements\":[[1,[25,\"item-picker\",null,[[\"items\"],[[20,[\"items\"]]]]],false]],\"hasEval\":false}",
                  "meta": {}
                }));

              case 5:
                assert.equal((0, _testHelpers.findAll)('.item-picker-item-results-item').length, 1);
                assert.ok(!(0, _testHelpers.find)('.item-picker-item-results-item').classList.contains('is-selected'));
                assert.equal((0, _testHelpers.findAll)('.item-picker-current-item').length, 0);

              case 8:
              case 'end':
                return _context2.stop();
            }
          }
        }, _callee2, this);
      }));

      return function (_x2) {
        return _ref3.apply(this, arguments);
      };
    }());
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
      currentItem: { item: item },
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
    assert.equal(el.find('div.shared-by-owner').text().trim(), 'Shared by: jupe');
    assert.equal(el.find('.item-picker-current-item-preview-description').text().trim(), 'This is the description');
    assert.equal(el.find('.item-metadata-layer-count').text().trim(), '0');
    assert.equal(el.find('.item-metadata-date-modified').text().trim(), '9/18/2014');
    assert.equal(el.find('.item-metadata-item-type').text().trim(), 'Feature Service');
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
    var item = {
      id: id,
      title: 'This is the name',
      description: 'This is the description',
      owner: 'jupe',
      modified: 1411060006000,
      type: 'Web Map'
    };

    this.set('model', { item: item });
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
    assert.equal(el.find('div.shared-by-owner').text().trim(), 'Shared by: jupe');
    assert.equal(el.find('.item-picker-current-item-preview-description').text().trim(), 'This is the description');
    assert.equal(el.find('.item-date-modified').text().trim(), '9/18/2014');
    assert.equal(el.find('.item-item-type').text().trim(), 'Web Map');
  });
});
define('dummy/tests/integration/components/item-picker/item-row/component-test', ['qunit', 'ember-qunit', '@ember/test-helpers'], function (_qunit, _emberQunit, _testHelpers) {
  'use strict';

  function _asyncToGenerator(fn) {
    return function () {
      var gen = fn.apply(this, arguments);
      return new Promise(function (resolve, reject) {
        function step(key, arg) {
          try {
            var info = gen[key](arg);
            var value = info.value;
          } catch (error) {
            reject(error);
            return;
          }

          if (info.done) {
            resolve(value);
          } else {
            return Promise.resolve(value).then(function (value) {
              step("next", value);
            }, function (err) {
              step("throw", err);
            });
          }
        }

        return step("next");
      });
    };
  }

  (0, _qunit.module)('Integration | Component | item picker/item row', function (hooks) {
    (0, _emberQunit.setupRenderingTest)(hooks);

    hooks.beforeEach(function () {
      var intl = this.owner.lookup('service:intl');
      intl.setLocale('en-us');

      var session = Ember.Service.extend({});
      this.owner.register('service:session', session);
    });

    (0, _qunit.test)('it renders', function () {
      var _ref2 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee(assert) {
        var id, model;
        return regeneratorRuntime.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                // test double for the external action
                this.set('onClick', function () {
                  // assert.equal(actual, expected, 'submitted value is passed to external action');
                });

                id = 'test-item-id';
                model = { id: id, title: 'This is the name' };

                this.setProperties({
                  currentItemId: id + '-wrong',
                  model: model
                });
                _context.next = 6;
                return (0, _testHelpers.render)(Ember.HTMLBars.template({
                  "id": "wzeFveZJ",
                  "block": "{\"symbols\":[],\"statements\":[[1,[25,\"item-picker/item-row\",null,[[\"model\",\"currentItemId\",\"onClick\"],[[20,[\"model\"]],[20,[\"currentItemId\"]],[25,\"action\",[[19,0,[]],[20,[\"onClick\"]],[20,[\"item\"]]],null]]]],false]],\"hasEval\":false}",
                  "meta": {}
                }));

              case 6:

                assert.equal((0, _testHelpers.find)('h2').textContent.trim(), 'This is the name');
                assert.ok(!(0, _testHelpers.find)('.item-picker-item-results-item').classList.contains('is-selected'));

              case 8:
              case 'end':
                return _context.stop();
            }
          }
        }, _callee, this);
      }));

      return function (_x) {
        return _ref2.apply(this, arguments);
      };
    }());

    (0, _qunit.test)('it renders selected', function () {
      var _ref3 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee2(assert) {
        var id, model;
        return regeneratorRuntime.wrap(function _callee2$(_context2) {
          while (1) {
            switch (_context2.prev = _context2.next) {
              case 0:
                // test double for the external action
                this.set('onClick', function () {
                  // assert.equal(actual, expected, 'submitted value is passed to external action');
                });

                id = 'test-item-id';
                model = { id: id, title: 'This is the name' };

                this.setProperties({
                  currentItemId: id,
                  model: model
                });
                _context2.next = 6;
                return (0, _testHelpers.render)(Ember.HTMLBars.template({
                  "id": "wzeFveZJ",
                  "block": "{\"symbols\":[],\"statements\":[[1,[25,\"item-picker/item-row\",null,[[\"model\",\"currentItemId\",\"onClick\"],[[20,[\"model\"]],[20,[\"currentItemId\"]],[25,\"action\",[[19,0,[]],[20,[\"onClick\"]],[20,[\"item\"]]],null]]]],false]],\"hasEval\":false}",
                  "meta": {}
                }));

              case 6:

                assert.equal((0, _testHelpers.find)('h2').textContent.trim(), 'This is the name');
                assert.ok((0, _testHelpers.find)('.item-picker-item-results-item').classList.contains('is-selected'));

              case 8:
              case 'end':
                return _context2.stop();
            }
          }
        }, _callee2, this);
      }));

      return function (_x2) {
        return _ref3.apply(this, arguments);
      };
    }());

    (0, _qunit.test)('it properly handles click', function () {
      var _ref4 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee3(assert) {
        var id, item;
        return regeneratorRuntime.wrap(function _callee3$(_context3) {
          while (1) {
            switch (_context3.prev = _context3.next) {
              case 0:
                id = 'test-dataset-id';
                item = { id: id, title: 'This is the name' };

                this.setProperties({
                  currentItemId: id,
                  model: item
                });

                // test double for the external action
                this.set('onClick', function (model) {
                  assert.equal(item.id, model.item.id, 'submitted value is passed to external action');
                });

                _context3.next = 6;
                return (0, _testHelpers.render)(Ember.HTMLBars.template({
                  "id": "+w3pYHwt",
                  "block": "{\"symbols\":[],\"statements\":[[1,[25,\"item-picker/item-row\",null,[[\"model\",\"currentItemId\",\"onClick\"],[[20,[\"model\"]],[20,[\"currentItemId\"]],[25,\"action\",[[19,0,[]],[20,[\"onClick\"]]],null]]]],false]],\"hasEval\":false}",
                  "meta": {}
                }));

              case 6:
                _context3.next = 8;
                return (0, _testHelpers.click)('li > a');

              case 8:
              case 'end':
                return _context3.stop();
            }
          }
        }, _callee3, this);
      }));

      return function (_x3) {
        return _ref4.apply(this, arguments);
      };
    }());

    (0, _qunit.test)('multiple-mode: it renders', function () {
      var _ref5 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee4(assert) {
        var id, model;
        return regeneratorRuntime.wrap(function _callee4$(_context4) {
          while (1) {
            switch (_context4.prev = _context4.next) {
              case 0:
                // test double for the external action
                this.set('onClick', function () {
                  // assert.equal(actual, expected, 'submitted value is passed to external action');
                });

                id = 'test-item-id';
                model = { id: id, title: 'This is the name', type: 'Web Map', owner: 'vader' };

                this.setProperties({
                  model: model,
                  itemsToAdd: []
                });
                _context4.next = 6;
                return (0, _testHelpers.render)(Ember.HTMLBars.template({
                  "id": "yLB+N6sB",
                  "block": "{\"symbols\":[],\"statements\":[[1,[25,\"item-picker/item-row\",null,[[\"model\",\"selectMultiple\",\"itemsToAdd\",\"currentItemId\",\"onClick\"],[[20,[\"model\"]],true,[20,[\"itemsToAdd\"]],[20,[\"currentItemId\"]],[25,\"action\",[[19,0,[]],[20,[\"onClick\"]],[20,[\"item\"]]],null]]]],false]],\"hasEval\":false}",
                  "meta": {}
                }));

              case 6:

                assert.equal((0, _testHelpers.find)('h2').textContent.trim(), 'This is the name');
                assert.equal((0, _testHelpers.find)('.shared-by').textContent.trim(), 'vader');
                assert.equal((0, _testHelpers.findAll)('.checkbox-inline span').length, 1, 'should be one span');
                assert.equal((0, _testHelpers.findAll)('.item-picker-item-results-item a').length, 1, 'should be one a');
                assert.equal((0, _testHelpers.findAll)('.item-picker-item-results-item a input').length, 1, 'should be one a input');
                assert.notOk(this.$('.item-picker-item-results-item a input').is(':checked'), 'input should not be checked');

              case 12:
              case 'end':
                return _context4.stop();
            }
          }
        }, _callee4, this);
      }));

      return function (_x4) {
        return _ref5.apply(this, arguments);
      };
    }());

    (0, _qunit.test)('multiple-mode: it renders checked', function () {
      var _ref6 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee5(assert) {
        var id, model;
        return regeneratorRuntime.wrap(function _callee5$(_context5) {
          while (1) {
            switch (_context5.prev = _context5.next) {
              case 0:
                // test double for the external action
                this.set('onClick', function () {
                  // assert.equal(actual, expected, 'submitted value is passed to external action');
                });

                id = 'test-item-id';
                model = { id: id, title: 'This is the name', type: 'Web Map', owner: 'vader' };

                this.setProperties({
                  model: model,
                  itemsToAdd: [model]
                });
                _context5.next = 6;
                return (0, _testHelpers.render)(Ember.HTMLBars.template({
                  "id": "yLB+N6sB",
                  "block": "{\"symbols\":[],\"statements\":[[1,[25,\"item-picker/item-row\",null,[[\"model\",\"selectMultiple\",\"itemsToAdd\",\"currentItemId\",\"onClick\"],[[20,[\"model\"]],true,[20,[\"itemsToAdd\"]],[20,[\"currentItemId\"]],[25,\"action\",[[19,0,[]],[20,[\"onClick\"]],[20,[\"item\"]]],null]]]],false]],\"hasEval\":false}",
                  "meta": {}
                }));

              case 6:

                assert.equal((0, _testHelpers.find)('h2').textContent.trim(), 'This is the name');
                assert.equal((0, _testHelpers.find)('.shared-by').textContent.trim(), 'vader');
                assert.ok(this.$('.item-picker-item-results-item a input').is(':checked'), 'should be checked');

              case 9:
              case 'end':
                return _context5.stop();
            }
          }
        }, _callee5, this);
      }));

      return function (_x5) {
        return _ref6.apply(this, arguments);
      };
    }());

    (0, _qunit.test)('multiple-mode: it properly handles click', function () {
      var _ref7 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee6(assert) {
        var id, item;
        return regeneratorRuntime.wrap(function _callee6$(_context6) {
          while (1) {
            switch (_context6.prev = _context6.next) {
              case 0:
                id = 'test-dataset-id';
                item = { id: id, title: 'This is the name' };

                this.setProperties({
                  model: item,
                  itemsToAdd: []
                });

                // test double for the external action
                this.set('onClick', function (model) {
                  assert.equal(item.id, model.item.id, 'submitted value is passed to external action');
                });

                _context6.next = 6;
                return (0, _testHelpers.render)(Ember.HTMLBars.template({
                  "id": "LujJIB75",
                  "block": "{\"symbols\":[],\"statements\":[[1,[25,\"item-picker/item-row\",null,[[\"model\",\"selectMultiple\",\"itemsToAdd\",\"currentItemId\",\"onClick\"],[[20,[\"model\"]],true,[20,[\"itemsToAdd\"]],[20,[\"currentItemId\"]],[25,\"action\",[[19,0,[]],[20,[\"onClick\"]]],null]]]],false]],\"hasEval\":false}",
                  "meta": {}
                }));

              case 6:

                assert.notOk(this.$('.item-picker-item-results-item a input').is(':checked'));

                _context6.next = 9;
                return (0, _testHelpers.click)('li > a');

              case 9:
              case 'end':
                return _context6.stop();
            }
          }
        }, _callee6, this);
      }));

      return function (_x6) {
        return _ref7.apply(this, arguments);
      };
    }());
  });
});
define('dummy/tests/integration/components/item-picker/layer-picker-row/component-test', ['qunit', 'ember-qunit', '@ember/test-helpers'], function (_qunit, _emberQunit, _testHelpers) {
  'use strict';

  function _asyncToGenerator(fn) {
    return function () {
      var gen = fn.apply(this, arguments);
      return new Promise(function (resolve, reject) {
        function step(key, arg) {
          try {
            var info = gen[key](arg);
            var value = info.value;
          } catch (error) {
            reject(error);
            return;
          }

          if (info.done) {
            resolve(value);
          } else {
            return Promise.resolve(value).then(function (value) {
              step("next", value);
            }, function (err) {
              step("throw", err);
            });
          }
        }

        return step("next");
      });
    };
  }

  (0, _qunit.module)('Integration | Component | item picker/layer picker row', function (hooks) {
    (0, _emberQunit.setupRenderingTest)(hooks);

    hooks.beforeEach(function () {
      var intl = this.owner.lookup('service:intl');
      intl.setLocale('en-us');

      var session = Ember.Service.extend({});
      this.owner.register('service:session', session);
    });

    (0, _qunit.test)('it renders a layer with type', function () {
      var _ref2 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee(assert) {
        return regeneratorRuntime.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                this.set('layer', {
                  geometryType: 'esriGeometryPoint',
                  name: 'The Layer'
                });
                // Handle any actions with this.on('myAction', function(val) { ... });
                _context.next = 3;
                return (0, _testHelpers.render)(Ember.HTMLBars.template({
                  "id": "N8xKnr5/",
                  "block": "{\"symbols\":[],\"statements\":[[1,[25,\"item-picker/layer-picker-row\",null,[[\"layer\",\"selectable\"],[[20,[\"layer\"]],false]]],false]],\"hasEval\":false}",
                  "meta": {}
                }));

              case 3:
                assert.equal((0, _testHelpers.find)('label').textContent.trim(), 'The Layer (Point)');

              case 4:
              case 'end':
                return _context.stop();
            }
          }
        }, _callee, this);
      }));

      return function (_x) {
        return _ref2.apply(this, arguments);
      };
    }());

    (0, _qunit.test)('it renders a radio layer with type', function () {
      var _ref3 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee2(assert) {
        var layer;
        return regeneratorRuntime.wrap(function _callee2$(_context2) {
          while (1) {
            switch (_context2.prev = _context2.next) {
              case 0:
                layer = {
                  geometryType: 'esriGeometryPoint',
                  name: 'The Layer'
                };

                this.setProperties({
                  layer: layer,
                  onLayerSelected: function onLayerSelected() {}
                });
                // Handle any actions with this.on('myAction', function(val) { ... });
                _context2.next = 4;
                return (0, _testHelpers.render)(Ember.HTMLBars.template({
                  "id": "/cbPwrue",
                  "block": "{\"symbols\":[],\"statements\":[[1,[25,\"item-picker/layer-picker-row\",null,[[\"layer\",\"selectable\",\"onLayerSelected\"],[[20,[\"layer\"]],true,[25,\"action\",[[19,0,[]],[20,[\"onLayerSelected\"]]],null]]]],false]],\"hasEval\":false}",
                  "meta": {}
                }));

              case 4:
                assert.equal((0, _testHelpers.find)('label').textContent.trim(), 'The Layer (Point)');
                assert.equal((0, _testHelpers.findAll)('input[type=radio]').length, 1, 'Should be one input');

              case 6:
              case 'end':
                return _context2.stop();
            }
          }
        }, _callee2, this);
      }));

      return function (_x2) {
        return _ref3.apply(this, arguments);
      };
    }());
  });
});
define('dummy/tests/integration/components/item-picker/layer-picker/component-test', ['qunit', 'ember-qunit', '@ember/test-helpers'], function (_qunit, _emberQunit, _testHelpers) {
  'use strict';

  function _asyncToGenerator(fn) {
    return function () {
      var gen = fn.apply(this, arguments);
      return new Promise(function (resolve, reject) {
        function step(key, arg) {
          try {
            var info = gen[key](arg);
            var value = info.value;
          } catch (error) {
            reject(error);
            return;
          }

          if (info.done) {
            resolve(value);
          } else {
            return Promise.resolve(value).then(function (value) {
              step("next", value);
            }, function (err) {
              step("throw", err);
            });
          }
        }

        return step("next");
      });
    };
  }

  (0, _qunit.module)('Integration | Component | item picker/layer picker', function (hooks) {
    (0, _emberQunit.setupRenderingTest)(hooks);

    hooks.beforeEach(function () {
      // manually invoke the ember-intl initializer
      var intl = this.owner.lookup('service:intl');
      intl.setLocale('en-us');
      this.intl = this.owner.lookup('service:intl');
    });

    (0, _qunit.test)('it renders with layers', function () {
      var _ref2 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee(assert) {
        var item, itemArr;
        return regeneratorRuntime.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                item = {
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
                itemArr = [item];

                this.set('model', itemArr);
                this.set('onLayerSelected', function () {});
                _context.next = 6;
                return (0, _testHelpers.render)(Ember.HTMLBars.template({
                  "id": "CFx/qEuD",
                  "block": "{\"symbols\":[],\"statements\":[[1,[25,\"item-picker/layer-picker\",null,[[\"model\",\"selectable\",\"onLayerSelected\"],[[20,[\"model\"]],true,[20,[\"onLayerSelected\"]]]]],false]],\"hasEval\":false}",
                  "meta": {}
                }));

              case 6:

                assert.equal((0, _testHelpers.findAll)('.layer-picker-list').length, 1, 'Layer list is not empty');
                assert.equal((0, _testHelpers.findAll)('ul').length, 1, 'There is at least 1 layer in the list');

              case 8:
              case 'end':
                return _context.stop();
            }
          }
        }, _callee, this);
      }));

      return function (_x) {
        return _ref2.apply(this, arguments);
      };
    }());
  });
});
define('dummy/tests/integration/components/loading-indicator/component-test', ['qunit', 'ember-qunit', '@ember/test-helpers'], function (_qunit, _emberQunit, _testHelpers) {
  'use strict';

  function _asyncToGenerator(fn) {
    return function () {
      var gen = fn.apply(this, arguments);
      return new Promise(function (resolve, reject) {
        function step(key, arg) {
          try {
            var info = gen[key](arg);
            var value = info.value;
          } catch (error) {
            reject(error);
            return;
          }

          if (info.done) {
            resolve(value);
          } else {
            return Promise.resolve(value).then(function (value) {
              step("next", value);
            }, function (err) {
              step("throw", err);
            });
          }
        }

        return step("next");
      });
    };
  }

  (0, _qunit.module)('Integration | Component | loading indicator', function (hooks) {
    (0, _emberQunit.setupRenderingTest)(hooks);

    hooks.beforeEach(function () {
      var intl = this.owner.lookup('service:intl');
      return intl.setLocale('en-us');
    });

    (0, _qunit.test)('it renders', function () {
      var _ref2 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee(assert) {
        return regeneratorRuntime.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                assert.expect(1);
                _context.next = 3;
                return (0, _testHelpers.render)(Ember.HTMLBars.template({
                  "id": "dgBO95yD",
                  "block": "{\"symbols\":[],\"statements\":[[1,[18,\"loading-indicator\"],false]],\"hasEval\":false}",
                  "meta": {}
                }));

              case 3:
                assert.equal((0, _testHelpers.find)('*').textContent.trim(), 'Loading...');

              case 4:
              case 'end':
                return _context.stop();
            }
          }
        }, _callee, this);
      }));

      return function (_x) {
        return _ref2.apply(this, arguments);
      };
    }());
  });
});
define('dummy/tests/integration/components/search-form/component-test', ['qunit', 'ember-qunit', '@ember/test-helpers'], function (_qunit, _emberQunit, _testHelpers) {
  'use strict';

  function _asyncToGenerator(fn) {
    return function () {
      var gen = fn.apply(this, arguments);
      return new Promise(function (resolve, reject) {
        function step(key, arg) {
          try {
            var info = gen[key](arg);
            var value = info.value;
          } catch (error) {
            reject(error);
            return;
          }

          if (info.done) {
            resolve(value);
          } else {
            return Promise.resolve(value).then(function (value) {
              step("next", value);
            }, function (err) {
              step("throw", err);
            });
          }
        }

        return step("next");
      });
    };
  }

  (0, _qunit.module)('Integration | Component | search form', function (hooks) {
    (0, _emberQunit.setupRenderingTest)(hooks);

    hooks.beforeEach(function () {
      var _this = this;

      this.actions = {};
      this.send = function (actionName) {
        for (var _len = arguments.length, args = Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
          args[_key - 1] = arguments[_key];
        }

        return _this.actions[actionName].apply(_this, args);
      };
    });

    hooks.beforeEach(function () {
      var intl = this.owner.lookup('service:intl');
      intl.setLocale('en-us');
    });

    (0, _qunit.test)('it renders', function () {
      var _ref2 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee(assert) {
        var $input;
        return regeneratorRuntime.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                assert.expect(2);

                this.set('q', undefined);
                this.actions.search = function (val) {
                  assert.equal(val, 'test', 'it should have passed the value on submit');
                };

                _context.next = 5;
                return (0, _testHelpers.render)(Ember.HTMLBars.template({
                  "id": "3vPbR+10",
                  "block": "{\"symbols\":[],\"statements\":[[1,[25,\"search-form\",null,[[\"_q\",\"onSearch\"],[[20,[\"q\"]],[25,\"action\",[[19,0,[]],\"search\"],null]]]],false]],\"hasEval\":false}",
                  "meta": {}
                }));

              case 5:
                $input = this.$('input');

                assert.equal($input.val(), '', 'input should be empty');

                // enter term and search
                $input.val('test').trigger('change');
                assert.equal(this.get('q'), undefined, 'should not mutate q property');

              case 9:
              case 'end':
                return _context.stop();
            }
          }
        }, _callee, this);
      }));

      return function (_x) {
        return _ref2.apply(this, arguments);
      };
    }());
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

  QUnit.test('integration/components/item-picker/layer-picker-row/component-test.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'integration/components/item-picker/layer-picker-row/component-test.js should pass ESLint\n\n');
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

  (0, _qunit.module)('Unit | Utility | force https', function () {
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
});
define('dummy/tests/unit/utils/is-guid-test', ['dummy/utils/is-guid', 'qunit'], function (_isGuid, _qunit) {
  'use strict';

  (0, _qunit.module)('Unit | Utility | is guid', function () {
    // Replace this with your real tests.
    (0, _qunit.test)('it works', function (assert) {
      assert.notOk((0, _isGuid.default)(1234));
      assert.notOk((0, _isGuid.default)('1234'));
      assert.notOk((0, _isGuid.default)('imnotaguid'));
      assert.ok((0, _isGuid.default)('76c3db4812d44f0087850093837e7a90'));
      assert.ok((0, _isGuid.default)('{371acc8b-85cf-4251-8c01-7d0e48bac7e3}'));
    });
  });
});
define('dummy/tests/unit/utils/query-helpers-test', ['dummy/utils/query-helpers', 'qunit'], function (_queryHelpers, _qunit) {
  'use strict';

  (0, _qunit.module)('Unit | Utility | query helpers', function () {
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
});
require('dummy/tests/test-helper');
EmberENV.TESTS_FILE_LOADED = true;
//# sourceMappingURL=tests.map
