"use strict";

/* jshint ignore:start */



/* jshint ignore:end */

define('dummy/add-token/util', ['exports', 'ember-arcgis-server-services/add-token/util'], function (exports, _emberArcgisServerServicesAddTokenUtil) {
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function get() {
      return _emberArcgisServerServicesAddTokenUtil['default'];
    }
  });
});
define('dummy/app', ['exports', 'ember', 'dummy/resolver', 'ember-load-initializers', 'dummy/config/environment'], function (exports, _ember, _dummyResolver, _emberLoadInitializers, _dummyConfigEnvironment) {

  var App = undefined;

  _ember['default'].MODEL_FACTORY_INJECTIONS = true;

  App = _ember['default'].Application.extend({
    modulePrefix: _dummyConfigEnvironment['default'].modulePrefix,
    podModulePrefix: _dummyConfigEnvironment['default'].podModulePrefix,
    Resolver: _dummyResolver['default']
  });

  (0, _emberLoadInitializers['default'])(App, _dummyConfigEnvironment['default'].modulePrefix);

  exports['default'] = App;
});
define('dummy/application/route', ['exports', 'ember'], function (exports, _ember) {
  exports['default'] = _ember['default'].Route.extend({
    intl: _ember['default'].inject.service(),

    beforeModel: function beforeModel() {
      // start up the i18n service and rehydrate the session
      return _ember['default'].RSVP.hashSettled({
        sessionPromise: this._initSession(),
        i18nPromise: this.get('intl').setLocale('en-us')
      });
    },

    _initSession: function _initSession() {
      return this.get('session').fetch().then(function () {
        _ember['default'].debug('User has been automatically logged in... ');
      })['catch'](function () /* err */{
        // we want to catch this, otherwise Ember will redirect to an error route!
        _ember['default'].debug('No cookie was found, user is anonymous... ');
      });
    },
    actions: {
      signin: function signin() {
        var _this = this;

        this.get('session').open('arcgis-oauth-bearer').then(function (authorization) {
          _ember['default'].debug('AUTH SUCCESS: ', authorization);
          // transition to some secured route or... so whatever is needed
          _this.transitionTo('index');
        })['catch'](function (err) {
          _ember['default'].debug('AUTH ERROR: ', err);
        });
      },
      signout: function signout() {
        this.get('session').close();
      }
    }
  });
});
define("dummy/application/template", ["exports"], function (exports) {
  exports["default"] = Ember.HTMLBars.template({ "id": "8iVe7Diw", "block": "{\"statements\":[[\"open-element\",\"nav\",[]],[\"static-attr\",\"class\",\"navbar navbar-default\"],[\"flush-element\"],[\"text\",\"\\n  \"],[\"open-element\",\"div\",[]],[\"static-attr\",\"class\",\"container\"],[\"flush-element\"],[\"text\",\"\\n    \"],[\"open-element\",\"div\",[]],[\"static-attr\",\"class\",\"navbar-header\"],[\"flush-element\"],[\"text\",\"\\n      \"],[\"open-element\",\"button\",[]],[\"static-attr\",\"type\",\"button\"],[\"static-attr\",\"class\",\"navbar-toggle collapsed\"],[\"static-attr\",\"data-toggle\",\"collapse\"],[\"static-attr\",\"data-target\",\"#navbar\"],[\"static-attr\",\"aria-expanded\",\"false\"],[\"static-attr\",\"aria-controls\",\"navbar\"],[\"flush-element\"],[\"text\",\"\\n        \"],[\"open-element\",\"span\",[]],[\"static-attr\",\"class\",\"sr-only\"],[\"flush-element\"],[\"text\",\"Toggle navigation\"],[\"close-element\"],[\"text\",\"\\n        \"],[\"open-element\",\"span\",[]],[\"static-attr\",\"class\",\"icon-bar\"],[\"flush-element\"],[\"close-element\"],[\"text\",\"\\n        \"],[\"open-element\",\"span\",[]],[\"static-attr\",\"class\",\"icon-bar\"],[\"flush-element\"],[\"close-element\"],[\"text\",\"\\n        \"],[\"open-element\",\"span\",[]],[\"static-attr\",\"class\",\"icon-bar\"],[\"flush-element\"],[\"close-element\"],[\"text\",\"\\n      \"],[\"close-element\"],[\"text\",\"\\n        \"],[\"block\",[\"link-to\"],[\"index\"],[[\"class\"],[\"navbar-brand\"]],21],[\"text\",\"\\n    \"],[\"close-element\"],[\"text\",\"\\n    \"],[\"open-element\",\"div\",[]],[\"static-attr\",\"id\",\"navbar\"],[\"static-attr\",\"class\",\"navbar-collapse collapse\"],[\"flush-element\"],[\"text\",\"\\n      \"],[\"open-element\",\"ul\",[]],[\"static-attr\",\"class\",\"nav navbar-nav\"],[\"flush-element\"],[\"text\",\"\\n        \"],[\"block\",[\"active-link\"],null,null,20],[\"text\",\"\\n        \"],[\"open-element\",\"li\",[]],[\"static-attr\",\"class\",\"dropdown\"],[\"flush-element\"],[\"text\",\"\\n          \"],[\"open-element\",\"a\",[]],[\"static-attr\",\"href\",\"#\"],[\"static-attr\",\"class\",\"dropdown-toggle\"],[\"static-attr\",\"data-toggle\",\"dropdown\"],[\"static-attr\",\"role\",\"button\"],[\"static-attr\",\"aria-haspopup\",\"true\"],[\"static-attr\",\"aria-expanded\",\"false\"],[\"flush-element\"],[\"text\",\"Item Picker \"],[\"open-element\",\"span\",[]],[\"static-attr\",\"class\",\"caret\"],[\"flush-element\"],[\"close-element\"],[\"close-element\"],[\"text\",\"\\n          \"],[\"open-element\",\"ul\",[]],[\"static-attr\",\"class\",\"dropdown-menu\"],[\"flush-element\"],[\"text\",\"\\n              \"],[\"block\",[\"active-link\"],null,null,18],[\"text\",\"\\n              \"],[\"block\",[\"active-link\"],null,null,16],[\"text\",\"\\n              \"],[\"block\",[\"active-link\"],null,null,14],[\"text\",\"\\n              \"],[\"block\",[\"active-link\"],null,null,12],[\"text\",\"\\n              \"],[\"block\",[\"active-link\"],null,null,10],[\"text\",\"\\n              \"],[\"block\",[\"active-link\"],null,null,8],[\"text\",\"\\n              \"],[\"block\",[\"active-link\"],null,null,6],[\"text\",\"\\n              \"],[\"block\",[\"active-link\"],null,null,4],[\"text\",\"\\n          \"],[\"close-element\"],[\"text\",\"\\n        \"],[\"close-element\"],[\"text\",\"\\n      \"],[\"close-element\"],[\"text\",\"\\n      \"],[\"open-element\",\"ul\",[]],[\"static-attr\",\"class\",\"nav navbar-nav navbar-right\"],[\"flush-element\"],[\"text\",\"\\n\"],[\"block\",[\"if\"],[[\"get\",[\"session\",\"isAuthenticated\"]]],null,2,1],[\"text\",\"        \"],[\"open-element\",\"li\",[]],[\"flush-element\"],[\"open-element\",\"a\",[]],[\"static-attr\",\"href\",\"https://github.com/arcgis/ember-arcgis-portal-components\"],[\"flush-element\"],[\"text\",\"Github\"],[\"close-element\"],[\"close-element\"],[\"text\",\"\\n      \"],[\"close-element\"],[\"text\",\"\\n    \"],[\"close-element\"],[\"comment\",\"/.nav-collapse \"],[\"text\",\"\\n  \"],[\"close-element\"],[\"comment\",\"/.container-fluid \"],[\"text\",\"\\n\"],[\"close-element\"],[\"text\",\"\\n\"],[\"open-element\",\"div\",[]],[\"static-attr\",\"class\",\"container\"],[\"flush-element\"],[\"text\",\"\\n  \"],[\"append\",[\"unknown\",[\"outlet\"]],false],[\"text\",\"\\n\"],[\"close-element\"],[\"text\",\"\\n\"]],\"locals\":[],\"named\":[],\"yields\":[],\"blocks\":[{\"statements\":[[\"open-element\",\"a\",[]],[\"static-attr\",\"href\",\"#\"],[\"modifier\",[\"action\"],[[\"get\",[null]],\"signin\"]],[\"flush-element\"],[\"text\",\"Sign In\"],[\"close-element\"]],\"locals\":[]},{\"statements\":[[\"text\",\"        \"],[\"block\",[\"active-link\"],null,null,0],[\"text\",\"\\n\"]],\"locals\":[]},{\"statements\":[[\"text\",\"        \"],[\"open-element\",\"li\",[]],[\"static-attr\",\"class\",\"dropdown\"],[\"flush-element\"],[\"text\",\"\\n          \"],[\"open-element\",\"a\",[]],[\"static-attr\",\"href\",\"#\"],[\"static-attr\",\"class\",\"dropdown-toggle\"],[\"static-attr\",\"data-toggle\",\"dropdown\"],[\"static-attr\",\"role\",\"button\"],[\"static-attr\",\"aria-haspopup\",\"true\"],[\"static-attr\",\"aria-expanded\",\"false\"],[\"flush-element\"],[\"append\",[\"unknown\",[\"session\",\"currentUser\",\"fullName\"]],false],[\"text\",\" \"],[\"open-element\",\"span\",[]],[\"static-attr\",\"class\",\"caret\"],[\"flush-element\"],[\"close-element\"],[\"close-element\"],[\"text\",\"\\n          \"],[\"open-element\",\"ul\",[]],[\"static-attr\",\"class\",\"dropdown-menu\"],[\"flush-element\"],[\"text\",\"\\n            \"],[\"open-element\",\"li\",[]],[\"flush-element\"],[\"open-element\",\"a\",[]],[\"static-attr\",\"href\",\"#\"],[\"modifier\",[\"action\"],[[\"get\",[null]],\"signout\"]],[\"flush-element\"],[\"text\",\"Sign Out\"],[\"close-element\"],[\"close-element\"],[\"text\",\"\\n          \"],[\"close-element\"],[\"text\",\"\\n        \"],[\"close-element\"],[\"text\",\"\\n\"]],\"locals\":[]},{\"statements\":[[\"text\",\"Cross Portal\"]],\"locals\":[]},{\"statements\":[[\"block\",[\"link-to\"],[\"itempicker.portalopts\"],null,3]],\"locals\":[]},{\"statements\":[[\"text\",\"Specific ID\"]],\"locals\":[]},{\"statements\":[[\"block\",[\"link-to\"],[\"itempicker.specificid\"],null,5]],\"locals\":[]},{\"statements\":[[\"text\",\"Validation\"]],\"locals\":[]},{\"statements\":[[\"block\",[\"link-to\"],[\"itempicker.validation\"],null,7]],\"locals\":[]},{\"statements\":[[\"text\",\"Default Catalog\"]],\"locals\":[]},{\"statements\":[[\"block\",[\"link-to\"],[\"itempicker.defaultcatalog\"],null,9]],\"locals\":[]},{\"statements\":[[\"text\",\"Layer Picker\"]],\"locals\":[]},{\"statements\":[[\"block\",[\"link-to\"],[\"itempicker.layerpicker\"],null,11]],\"locals\":[]},{\"statements\":[[\"text\",\"Facets\"]],\"locals\":[]},{\"statements\":[[\"block\",[\"link-to\"],[\"itempicker.facets\"],null,13]],\"locals\":[]},{\"statements\":[[\"text\",\"Multi-Select\"]],\"locals\":[]},{\"statements\":[[\"block\",[\"link-to\"],[\"itempicker.multiselect\"],null,15]],\"locals\":[]},{\"statements\":[[\"text\",\"Default Usage\"]],\"locals\":[]},{\"statements\":[[\"block\",[\"link-to\"],[\"itempicker.index\"],null,17]],\"locals\":[]},{\"statements\":[[\"text\",\"Home\"]],\"locals\":[]},{\"statements\":[[\"block\",[\"link-to\"],[\"index\"],null,19]],\"locals\":[]},{\"statements\":[[\"text\",\"ember-arcgis-portal-components\"]],\"locals\":[]}],\"hasPartials\":false}", "meta": { "moduleName": "dummy/application/template.hbs" } });
});
define("dummy/cldrs/en", ["exports"], function (exports) {
  /*jslint eqeq: true*/
  exports["default"] = [{ "locale": "en-US", "parentLocale": "en" }, { "locale": "en", "pluralRuleFunction": function pluralRuleFunction(n, ord) {
      var s = String(n).split("."),
          v0 = !s[1],
          t0 = Number(s[0]) == n,
          n10 = t0 && s[0].slice(-1),
          n100 = t0 && s[0].slice(-2);if (ord) return n10 == 1 && n100 != 11 ? "one" : n10 == 2 && n100 != 12 ? "two" : n10 == 3 && n100 != 13 ? "few" : "other";return n == 1 && v0 ? "one" : "other";
    }, "fields": { "year": { "displayName": "year", "relative": { "0": "this year", "1": "next year", "-1": "last year" }, "relativeTime": { "future": { "one": "in {0} year", "other": "in {0} years" }, "past": { "one": "{0} year ago", "other": "{0} years ago" } } }, "month": { "displayName": "month", "relative": { "0": "this month", "1": "next month", "-1": "last month" }, "relativeTime": { "future": { "one": "in {0} month", "other": "in {0} months" }, "past": { "one": "{0} month ago", "other": "{0} months ago" } } }, "day": { "displayName": "day", "relative": { "0": "today", "1": "tomorrow", "-1": "yesterday" }, "relativeTime": { "future": { "one": "in {0} day", "other": "in {0} days" }, "past": { "one": "{0} day ago", "other": "{0} days ago" } } }, "hour": { "displayName": "hour", "relativeTime": { "future": { "one": "in {0} hour", "other": "in {0} hours" }, "past": { "one": "{0} hour ago", "other": "{0} hours ago" } } }, "minute": { "displayName": "minute", "relativeTime": { "future": { "one": "in {0} minute", "other": "in {0} minutes" }, "past": { "one": "{0} minute ago", "other": "{0} minutes ago" } } }, "second": { "displayName": "second", "relative": { "0": "now" }, "relativeTime": { "future": { "one": "in {0} second", "other": "in {0} seconds" }, "past": { "one": "{0} second ago", "other": "{0} seconds ago" } } } } }];
});
define('dummy/components/active-link', ['exports', 'ember-cli-active-link-wrapper/components/active-link'], function (exports, _emberCliActiveLinkWrapperComponentsActiveLink) {
  exports['default'] = _emberCliActiveLinkWrapperComponentsActiveLink['default'];
});
define("dummy/components/code-snippet", ["exports", "ember", "dummy/snippets"], function (exports, _ember, _dummySnippets) {

  /* global require */
  var Highlight = self.require('highlight.js');

  exports["default"] = _ember["default"].Component.extend({
    tagName: 'pre',
    classNameBindings: ['language'],
    unindent: true,

    _unindent: function _unindent(src) {
      if (!this.get('unindent')) {
        return src;
      }
      var match,
          min,
          lines = src.split("\n").filter(function (l) {
        return l !== '';
      });
      for (var i = 0; i < lines.length; i++) {
        match = /^[ \t]*/.exec(lines[i]);
        if (match && (typeof min === 'undefined' || min > match[0].length)) {
          min = match[0].length;
        }
      }
      if (typeof min !== 'undefined' && min > 0) {
        src = src.replace(new RegExp("^[ \t]{" + min + "}", 'gm'), "");
      }
      return src;
    },

    source: _ember["default"].computed('name', function () {
      return this._unindent((_dummySnippets["default"][this.get('name')] || "").replace(/^(\s*\n)*/, '').replace(/\s*$/, ''));
    }),

    didInsertElement: function didInsertElement() {
      Highlight.highlightBlock(this.get('element'));
    },

    language: _ember["default"].computed('name', function () {
      var m = /\.(\w+)$/i.exec(this.get('name'));
      if (m) {
        switch (m[1].toLowerCase()) {
          case 'js':
            return 'javascript';
          case 'coffee':
            return 'coffeescript';
          case 'hbs':
            return 'htmlbars';
          case 'css':
            return 'css';
          case 'scss':
            return 'scss';
          case 'less':
            return 'less';
          case 'emblem':
            return 'emblem';
          case 'ts':
            return 'typescript';
        }
      }
    })
  });
});
define('dummy/components/item-pager/component', ['exports', 'ember-arcgis-portal-components/components/item-pager/component'], function (exports, _emberArcgisPortalComponentsComponentsItemPagerComponent) {
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function get() {
      return _emberArcgisPortalComponentsComponentsItemPagerComponent['default'];
    }
  });
});
define('dummy/components/item-picker/component', ['exports', 'ember-arcgis-portal-components/components/item-picker/component'], function (exports, _emberArcgisPortalComponentsComponentsItemPickerComponent) {
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function get() {
      return _emberArcgisPortalComponentsComponentsItemPickerComponent['default'];
    }
  });
});
define('dummy/components/item-picker/feature-service-preview/component', ['exports', 'ember-arcgis-portal-components/components/item-picker/feature-service-preview/component'], function (exports, _emberArcgisPortalComponentsComponentsItemPickerFeatureServicePreviewComponent) {
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function get() {
      return _emberArcgisPortalComponentsComponentsItemPickerFeatureServicePreviewComponent['default'];
    }
  });
});
define('dummy/components/item-picker/item-preview/component', ['exports', 'ember-arcgis-portal-components/components/item-picker/item-preview/component'], function (exports, _emberArcgisPortalComponentsComponentsItemPickerItemPreviewComponent) {
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function get() {
      return _emberArcgisPortalComponentsComponentsItemPickerItemPreviewComponent['default'];
    }
  });
});
define('dummy/components/item-picker/item-row/component', ['exports', 'ember-arcgis-portal-components/components/item-picker/item-row/component'], function (exports, _emberArcgisPortalComponentsComponentsItemPickerItemRowComponent) {
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function get() {
      return _emberArcgisPortalComponentsComponentsItemPickerItemRowComponent['default'];
    }
  });
});
define('dummy/components/item-picker/item-thumbnail/component', ['exports', 'ember-arcgis-portal-components/components/item-picker/item-thumbnail/component'], function (exports, _emberArcgisPortalComponentsComponentsItemPickerItemThumbnailComponent) {
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function get() {
      return _emberArcgisPortalComponentsComponentsItemPickerItemThumbnailComponent['default'];
    }
  });
});
define('dummy/components/item-picker/layer-picker/component', ['exports', 'ember-arcgis-portal-components/components/item-picker/layer-picker/component'], function (exports, _emberArcgisPortalComponentsComponentsItemPickerLayerPickerComponent) {
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function get() {
      return _emberArcgisPortalComponentsComponentsItemPickerLayerPickerComponent['default'];
    }
  });
});
define('dummy/components/labeled-radio-button', ['exports', 'ember-radio-button/components/labeled-radio-button'], function (exports, _emberRadioButtonComponentsLabeledRadioButton) {
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function get() {
      return _emberRadioButtonComponentsLabeledRadioButton['default'];
    }
  });
});
define('dummy/components/loading-indicator/component', ['exports', 'ember-arcgis-portal-components/components/loading-indicator/component'], function (exports, _emberArcgisPortalComponentsComponentsLoadingIndicatorComponent) {
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function get() {
      return _emberArcgisPortalComponentsComponentsLoadingIndicatorComponent['default'];
    }
  });
});
define('dummy/components/radio-button-input', ['exports', 'ember-radio-button/components/radio-button-input'], function (exports, _emberRadioButtonComponentsRadioButtonInput) {
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function get() {
      return _emberRadioButtonComponentsRadioButtonInput['default'];
    }
  });
});
define('dummy/components/radio-button', ['exports', 'ember-radio-button/components/radio-button'], function (exports, _emberRadioButtonComponentsRadioButton) {
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function get() {
      return _emberRadioButtonComponentsRadioButton['default'];
    }
  });
});
define('dummy/components/search-form/component', ['exports', 'ember-arcgis-portal-components/components/search-form/component'], function (exports, _emberArcgisPortalComponentsComponentsSearchFormComponent) {
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function get() {
      return _emberArcgisPortalComponentsComponentsSearchFormComponent['default'];
    }
  });
});
define('dummy/components/torii-iframe-placeholder', ['exports', 'torii/components/torii-iframe-placeholder'], function (exports, _toriiComponentsToriiIframePlaceholder) {
  exports['default'] = _toriiComponentsToriiIframePlaceholder['default'];
});
define('dummy/ember-arcgis-portal-components/tests/modules/ember-arcgis-portal-components/components/item-pager/component.lint-test', ['exports'], function (exports) {
  QUnit.module('ESLint - modules/ember-arcgis-portal-components/components/item-pager/component.js');
  QUnit.test('should pass ESLint', function (assert) {
    assert.expect(1);
    assert.ok(true, 'modules/ember-arcgis-portal-components/components/item-pager/component.js should pass ESLint.\n');
  });
});
define('dummy/ember-arcgis-portal-components/tests/modules/ember-arcgis-portal-components/components/item-picker/component.lint-test', ['exports'], function (exports) {
  QUnit.module('ESLint - modules/ember-arcgis-portal-components/components/item-picker/component.js');
  QUnit.test('should pass ESLint', function (assert) {
    assert.expect(1);
    assert.ok(true, 'modules/ember-arcgis-portal-components/components/item-picker/component.js should pass ESLint.\n');
  });
});
define('dummy/ember-arcgis-portal-components/tests/modules/ember-arcgis-portal-components/components/item-picker/feature-service-preview/component.lint-test', ['exports'], function (exports) {
  QUnit.module('ESLint - modules/ember-arcgis-portal-components/components/item-picker/feature-service-preview/component.js');
  QUnit.test('should pass ESLint', function (assert) {
    assert.expect(1);
    assert.ok(true, 'modules/ember-arcgis-portal-components/components/item-picker/feature-service-preview/component.js should pass ESLint.\n');
  });
});
define('dummy/ember-arcgis-portal-components/tests/modules/ember-arcgis-portal-components/components/item-picker/item-preview/component.lint-test', ['exports'], function (exports) {
  QUnit.module('ESLint - modules/ember-arcgis-portal-components/components/item-picker/item-preview/component.js');
  QUnit.test('should pass ESLint', function (assert) {
    assert.expect(1);
    assert.ok(true, 'modules/ember-arcgis-portal-components/components/item-picker/item-preview/component.js should pass ESLint.\n');
  });
});
define('dummy/ember-arcgis-portal-components/tests/modules/ember-arcgis-portal-components/components/item-picker/item-row/component.lint-test', ['exports'], function (exports) {
  QUnit.module('ESLint - modules/ember-arcgis-portal-components/components/item-picker/item-row/component.js');
  QUnit.test('should pass ESLint', function (assert) {
    assert.expect(1);
    assert.ok(true, 'modules/ember-arcgis-portal-components/components/item-picker/item-row/component.js should pass ESLint.\n');
  });
});
define('dummy/ember-arcgis-portal-components/tests/modules/ember-arcgis-portal-components/components/item-picker/item-thumbnail/component.lint-test', ['exports'], function (exports) {
  QUnit.module('ESLint - modules/ember-arcgis-portal-components/components/item-picker/item-thumbnail/component.js');
  QUnit.test('should pass ESLint', function (assert) {
    assert.expect(1);
    assert.ok(true, 'modules/ember-arcgis-portal-components/components/item-picker/item-thumbnail/component.js should pass ESLint.\n');
  });
});
define('dummy/ember-arcgis-portal-components/tests/modules/ember-arcgis-portal-components/components/item-picker/layer-picker/component.lint-test', ['exports'], function (exports) {
  QUnit.module('ESLint - modules/ember-arcgis-portal-components/components/item-picker/layer-picker/component.js');
  QUnit.test('should pass ESLint', function (assert) {
    assert.expect(1);
    assert.ok(true, 'modules/ember-arcgis-portal-components/components/item-picker/layer-picker/component.js should pass ESLint.\n');
  });
});
define('dummy/ember-arcgis-portal-components/tests/modules/ember-arcgis-portal-components/components/loading-indicator/component.lint-test', ['exports'], function (exports) {
  QUnit.module('ESLint - modules/ember-arcgis-portal-components/components/loading-indicator/component.js');
  QUnit.test('should pass ESLint', function (assert) {
    assert.expect(1);
    assert.ok(true, 'modules/ember-arcgis-portal-components/components/loading-indicator/component.js should pass ESLint.\n');
  });
});
define('dummy/ember-arcgis-portal-components/tests/modules/ember-arcgis-portal-components/components/search-form/component.lint-test', ['exports'], function (exports) {
  QUnit.module('ESLint - modules/ember-arcgis-portal-components/components/search-form/component.js');
  QUnit.test('should pass ESLint', function (assert) {
    assert.expect(1);
    assert.ok(true, 'modules/ember-arcgis-portal-components/components/search-form/component.js should pass ESLint.\n');
  });
});
define('dummy/ember-arcgis-portal-components/tests/modules/ember-arcgis-portal-components/utils/is-guid.lint-test', ['exports'], function (exports) {
  QUnit.module('ESLint - modules/ember-arcgis-portal-components/utils/is-guid.js');
  QUnit.test('should pass ESLint', function (assert) {
    assert.expect(1);
    assert.ok(true, 'modules/ember-arcgis-portal-components/utils/is-guid.js should pass ESLint.\n');
  });
});
define('dummy/ember-arcgis-portal-components/tests/modules/ember-arcgis-portal-components/utils/query-helpers.lint-test', ['exports'], function (exports) {
  QUnit.module('ESLint - modules/ember-arcgis-portal-components/utils/query-helpers.js');
  QUnit.test('should pass ESLint', function (assert) {
    assert.expect(1);
    assert.ok(true, 'modules/ember-arcgis-portal-components/utils/query-helpers.js should pass ESLint.\n');
  });
});
define('dummy/ember-arcgis-server-services/tests/modules/ember-arcgis-server-services/mixins/ags-service-mixin', ['exports', 'ember', 'dummy/ember-arcgis-server-services/tests/modules/ember-arcgis-server-services/utils/request', 'dummy/ember-arcgis-server-services/tests/modules/ember-arcgis-server-services/utils/parse-url', 'dummy/ember-arcgis-server-services/tests/modules/ember-arcgis-server-services/utils/should-add-token'], function (exports, _ember, _dummyEmberArcgisServerServicesTestsModulesEmberArcgisServerServicesUtilsRequest, _dummyEmberArcgisServerServicesTestsModulesEmberArcgisServerServicesUtilsParseUrl, _dummyEmberArcgisServerServicesTestsModulesEmberArcgisServerServicesUtilsShouldAddToken) {
  exports['default'] = _ember['default'].Mixin.create({
    init: function init() {
      this._super(); // ensure a good citizen in the super chain
      this.set('shouldAddTokenCache', {});
    },

    session: _ember['default'].inject.service(),

    hostAppConfig: _ember['default'].computed(function () {
      return _ember['default'].getOwner(this).resolveRegistration('config:environment');
    }),

    // TODO consider removing this at a major version
    parseServiceUrl: _dummyEmberArcgisServerServicesTestsModulesEmberArcgisServerServicesUtilsParseUrl.parseType,

    /**
     * Make an arbitrary request to the server
     */
    request: function request(url) {
      var _this = this;

      var options = arguments.length <= 1 || arguments[1] === undefined ? {} : arguments[1];

      return this.shouldAddToken(url, this.get('session.portal')).then(function (shouldAddToken) {
        if (shouldAddToken) {
          options.token = _this.get('session.token');
        }
        options.method = options.method || 'GET';
        return (0, _dummyEmberArcgisServerServicesTestsModulesEmberArcgisServerServicesUtilsRequest['default'])(url, options);
      });
    },
    /**
     * Given a url, determine if we should send along a token
     */
    shouldAddToken: function shouldAddToken(url) {
      var portalInfo = arguments.length <= 1 || arguments[1] === undefined ? {} : arguments[1];

      var shouldAddTokenCache = this.get('shouldAddTokenCache');
      var key = (0, _dummyEmberArcgisServerServicesTestsModulesEmberArcgisServerServicesUtilsParseUrl.parseServerUrl)(url) || url;
      var cachedValue = shouldAddTokenCache[key];

      if (!_ember['default'].isBlank(cachedValue)) {
        return _ember['default'].RSVP.resolve(cachedValue);
      }

      return this.getAuthInfo(url).then(function (authInfo) {
        var result = (0, _dummyEmberArcgisServerServicesTestsModulesEmberArcgisServerServicesUtilsShouldAddToken['default'])(url, authInfo, portalInfo);
        shouldAddTokenCache[key] = result;
        return result;
      })['catch'](function (err) {
        _ember['default'].debug('Error occured checking authInfo for ' + url + '. Message: ' + err + '. Will not send token for ' + key);
        shouldAddTokenCache[key] = false;
        return false;
      });
    },

    getServiceInfo: function getServiceInfo(url, options) {
      _ember['default'].deprecate('use .getLayerInfo(url, options).', false, { id: 'getServiceInfoDeprecation', until: '10.0.0' });
      return this.getLayerInfo(url, options);
    },

    getLayerInfo: function getLayerInfo(url, options) {
      return this.request(url + '?f=json', options);
    },

    /**
    * Get the base server info.
    * Returns stuff like version, services and folders
     */
    getServerInfo: function getServerInfo(url, options) {
      var serviceUrl = (0, _dummyEmberArcgisServerServicesTestsModulesEmberArcgisServerServicesUtilsParseUrl.parseServiceUrl)(url);
      var service = url;
      if (serviceUrl) {
        service = serviceUrl;
      }
      return this.request(service + '?f=json', options);
    },

    /**
     * Get the authentication information from a server.
     */
    getAuthInfo: function getAuthInfo(url, options) {
      var server = url;
      var serverUrl = (0, _dummyEmberArcgisServerServicesTestsModulesEmberArcgisServerServicesUtilsParseUrl.parseServerUrl)(url);
      if (serverUrl) {
        server = serverUrl;
      }
      // we want to never send a token for this one so we use agoRequest directly
      return (0, _dummyEmberArcgisServerServicesTestsModulesEmberArcgisServerServicesUtilsRequest['default'])(server + '/info?f=json');
    }

  });
});
define('dummy/ember-arcgis-server-services/tests/modules/ember-arcgis-server-services/mixins/layers', ['exports', 'ember', 'dummy/ember-arcgis-server-services/tests/modules/ember-arcgis-server-services/utils/parse-url', 'dummy/ember-arcgis-server-services/tests/modules/ember-arcgis-server-services/utils/encode-form'], function (exports, _ember, _dummyEmberArcgisServerServicesTestsModulesEmberArcgisServerServicesUtilsParseUrl, _dummyEmberArcgisServerServicesTestsModulesEmberArcgisServerServicesUtilsEncodeForm) {
  function _toConsumableArray(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) arr2[i] = arr[i]; return arr2; } else { return Array.from(arr); } }

  exports['default'] = _ember['default'].Mixin.create({
    init: function init() {
      this._super(); // ensure a good citizen in the super chain
    },

    /**
     * Get the layer info
     */
    getLayerInfo: function getLayerInfo(url) {
      var options = arguments.length <= 1 || arguments[1] === undefined ? {} : arguments[1];

      var layerUrl = url;
      if (options && options.layer) {
        var serviceUrl = (0, _dummyEmberArcgisServerServicesTestsModulesEmberArcgisServerServicesUtilsParseUrl.parseServiceUrl)(url);
        layerUrl = serviceUrl + '/' + options.layer;
      }
      return this.request(layerUrl + '?f=json', options);
    },

    /**
     * Get info about all layers
     */
    getLayersInfo: function getLayersInfo(url, options) {
      var _this = this;

      var serviceUrl = (0, _dummyEmberArcgisServerServicesTestsModulesEmberArcgisServerServicesUtilsParseUrl.parseServiceUrl)(url);
      var layersUrl = serviceUrl + '/layers?f=json';
      // make the request
      return this.request(layersUrl, options).then(function (layerInfo) {
        var merged = [].concat(_toConsumableArray(layerInfo.layers), _toConsumableArray(layerInfo.tables));
        _this.set('layers', merged);
        return merged;
      })['catch'](function (e) {
        return Promise.reject(e);
      });
    },

    /**
     * Search for records
     */
    query: function query(url, options) {
      var encoded = (0, _dummyEmberArcgisServerServicesTestsModulesEmberArcgisServerServicesUtilsEncodeForm['default'])(options);
      url = url + '/query?f=json&' + encoded;
      return this.request(url, { method: 'GET' });
    },

    /**
     * Get a record by id
     */
    getById: function getById(url, id, options) {
      url = url + '/' + id + '?f=json';
      return this.request(url, options);
    }
  });
});
define('dummy/ember-arcgis-server-services/tests/modules/ember-arcgis-server-services/services/feature-service', ['exports', 'ember', 'dummy/ember-arcgis-server-services/tests/modules/ember-arcgis-server-services/mixins/ags-service-mixin', 'dummy/ember-arcgis-server-services/tests/modules/ember-arcgis-server-services/mixins/layers'], function (exports, _ember, _dummyEmberArcgisServerServicesTestsModulesEmberArcgisServerServicesMixinsAgsServiceMixin, _dummyEmberArcgisServerServicesTestsModulesEmberArcgisServerServicesMixinsLayers) {
  exports['default'] = _ember['default'].Service.extend(_dummyEmberArcgisServerServicesTestsModulesEmberArcgisServerServicesMixinsAgsServiceMixin['default'], _dummyEmberArcgisServerServicesTestsModulesEmberArcgisServerServicesMixinsLayers['default'], {

    /**
     * Get a record by id
     */
    getById: function getById(url, id) {
      url = url + '/' + id + '?f=json';
      return this.request(url, { method: 'GET' });
    },

    /**
     * Update a single feature
     */
    updateFeature: function updateFeature(url, feature, token) {
      return this.updateFeatures(url, [feature], token);
    },

    /**
     * Update a set of features
     */
    updateFeatures: function updateFeatures(url, features, token) {
      return this.applyEdits(url, [], features, [], token);
    },

    /**
     * Add an single feature
     */
    addFeature: function addFeature(url, feature, token) {
      // wrap into an array...
      var adds = [feature];
      // delegate to addFeatures
      return this.addFeatures(url, adds, token);
    },

    /**
     * Add a set of features
     */
    addFeatures: function addFeatures(url, features, token) {
      return this.applyEdits(url, features, [], [], token);
    },

    /**
     * Delete a single feature
     */
    deleteFeature: function deleteFeature(url, objectId, token) {
      return this.deleteFeatures(url, [objectId], token);
    },

    /**
     * Delete a set of features
     */
    deleteFeatures: function deleteFeatures(url, objectIds, token) {
      return this.applyEdits(url, [], [], objectIds, token);
    },

    /**
     * Actually send the edits to the Service
     */
    applyEdits: function applyEdits(url, adds, updates, deletes, token) {
      url = url + '/applyEdits';
      var options = {
        method: 'POST',
        data: {
          adds: JSON.stringify(adds),
          updates: JSON.stringify(updates),
          deletes: deletes.join(','),
          f: 'json'
        }
      };
      if (token) {
        options.data.token = token;
      }
      return this.request(url, options);
    }
  });
});
define('dummy/ember-arcgis-server-services/tests/modules/ember-arcgis-server-services/services/image-service', ['exports', 'ember', 'dummy/ember-arcgis-server-services/tests/modules/ember-arcgis-server-services/mixins/ags-service-mixin'], function (exports, _ember, _dummyEmberArcgisServerServicesTestsModulesEmberArcgisServerServicesMixinsAgsServiceMixin) {
  exports['default'] = _ember['default'].Service.extend(_dummyEmberArcgisServerServicesTestsModulesEmberArcgisServerServicesMixinsAgsServiceMixin['default'], {});
});
define('dummy/ember-arcgis-server-services/tests/modules/ember-arcgis-server-services/services/map-service', ['exports', 'ember', 'dummy/ember-arcgis-server-services/tests/modules/ember-arcgis-server-services/mixins/ags-service-mixin', 'dummy/ember-arcgis-server-services/tests/modules/ember-arcgis-server-services/mixins/layers'], function (exports, _ember, _dummyEmberArcgisServerServicesTestsModulesEmberArcgisServerServicesMixinsAgsServiceMixin, _dummyEmberArcgisServerServicesTestsModulesEmberArcgisServerServicesMixinsLayers) {
  exports['default'] = _ember['default'].Service.extend(_dummyEmberArcgisServerServicesTestsModulesEmberArcgisServerServicesMixinsLayers['default'], _dummyEmberArcgisServerServicesTestsModulesEmberArcgisServerServicesMixinsAgsServiceMixin['default'], {});
});
define('dummy/ember-arcgis-server-services/tests/modules/ember-arcgis-server-services/services/vector-service', ['exports', 'ember', 'dummy/ember-arcgis-server-services/tests/modules/ember-arcgis-server-services/mixins/ags-service-mixin', 'dummy/ember-arcgis-server-services/tests/modules/ember-arcgis-server-services/mixins/layers'], function (exports, _ember, _dummyEmberArcgisServerServicesTestsModulesEmberArcgisServerServicesMixinsAgsServiceMixin, _dummyEmberArcgisServerServicesTestsModulesEmberArcgisServerServicesMixinsLayers) {
  exports['default'] = _ember['default'].Service.extend(_dummyEmberArcgisServerServicesTestsModulesEmberArcgisServerServicesMixinsAgsServiceMixin['default'], _dummyEmberArcgisServerServicesTestsModulesEmberArcgisServerServicesMixinsLayers['default'], {});
});
define('dummy/ember-arcgis-server-services/tests/modules/ember-arcgis-server-services/utils/add-token', ['exports'], function (exports) {
  exports['default'] = addToken;

  function addToken(url, token) {
    // append the token
    if (token) {
      if (url.indexOf('?') > -1) {
        return url + '&token=' + token;
      } else {
        return url + '?token=' + token;
      }
    } else {
      return url;
    }
  }
});
define('dummy/ember-arcgis-server-services/tests/modules/ember-arcgis-server-services/utils/encode-form', ['exports'], function (exports) {
  exports['default'] = encodeForm;

  function encodeForm() {
    var form = arguments.length <= 0 || arguments[0] === undefined ? {} : arguments[0];

    return Object.keys(form).map(function (key) {
      return [key, form[key]].map(encodeURIComponent).join('=');
    }).join('&');
  }
});
define('dummy/ember-arcgis-server-services/tests/modules/ember-arcgis-server-services/utils/parse-url', ['exports', 'ember'], function (exports, _ember) {
  exports['default'] = parseUrl;
  exports.parseServiceUrl = parseServiceUrl;
  exports.parseServerUrl = parseServerUrl;

  /**
   * Parse up the url so we have a better idea what we are dealing with
   */

  function parseUrl(url) {
    var parsed = {
      url: url,
      layerId: null
    };
    // if there is a trailing slash, remove it
    url = url.replace(new RegExp('/$'), '');

    // get the last segment of the url
    var layerId = Number(url.split('/').pop());
    if (!isNaN(layerId)) {
      parsed.layerId = layerId;
      parsed.serviceUrl = url.replace(new RegExp('/' + parsed.layerId + '$'), '');
      // incase there were double slashes, nix any trailing slash
      parsed.serviceUrl = parsed.serviceUrl.replace(new RegExp('/$'), '');
    } else {
      parsed.serviceUrl = url.replace(new RegExp('/$'), '');
      // this url points at a service, not a layer
    }
    // get the type from the last part of the serviceUrl
    // parsed.serviceType = Ember.String.dasherize(parsed.serviceUrl.split('/').pop());
    // this is not reliable - MapServer can have extensions i.e. /WMSServer
    // so we should check for well-known server types
    parsed.serviceType = 'unknown';
    var wktypes = ['MapServer', 'FeatureServer', 'ImageServer', 'WMSServer'];
    wktypes.forEach(function (type) {
      if (url.toLowerCase().indexOf(type.toLowerCase()) > -1) {
        parsed.serviceType = _ember['default'].String.dasherize(type);
      }
    });
    _ember['default'].debug('Service Type: ' + parsed.serviceType);

    // if it's hosted, pull out the orgid
    if (url.indexOf('arcgis.com') > -1) {
      // extract out the org_id
      parsed.isHosted = true;
      parsed.orgId = url.split('/')[3];
    }

    // finally, if this is tiles, the org id is in another position
    if (url.indexOf('arcgis.com/tiles') > -1) {
      // extract out the org_id
      parsed.orgId = url.split('/')[4];
    }
    return parsed;
  }

  /**
   * Match the "service" part of the url
   */
  var serviceRegex = new RegExp(/.+(?:map|feature|image)server/i);
  /**
   * Return the service url. If not matched, returns what was passed in
   */

  function parseServiceUrl(url) {
    var match = url.match(serviceRegex);
    if (match) {
      return match[0];
    } else {
      return stripQuerystring(url);
    }
  }

  /**
   * Match the arcGIS server "root"
   * which always ends with /rest
   */
  var serverRegex = new RegExp(/(\/rest).+/i);
  /**
   * Return the server url, if not matched, returns null
   */

  function parseServerUrl(url) {
    var match = url.match(serverRegex);
    if (match) {
      return url.replace(serverRegex, '$1');
    } else {
      return stripQuerystring(url);
    }
  }

  function stripQuerystring(url) {
    var stripped = url;
    if (url.indexOf('?') > -1) {
      stripped = url.split('?')[0];
    }
    return stripped;
  }
});
define('dummy/ember-arcgis-server-services/tests/modules/ember-arcgis-server-services/utils/request', ['exports', 'ember', 'ember-network/fetch', 'dummy/ember-arcgis-server-services/tests/modules/ember-arcgis-server-services/utils/add-token', 'dummy/ember-arcgis-server-services/tests/modules/ember-arcgis-server-services/utils/encode-form'], function (exports, _ember, _emberNetworkFetch, _dummyEmberArcgisServerServicesTestsModulesEmberArcgisServerServicesUtilsAddToken, _dummyEmberArcgisServerServicesTestsModulesEmberArcgisServerServicesUtilsEncodeForm) {
  exports['default'] = request;

  /**
   * Fetch based request method
   */

  function request(url) {
    var opts = arguments.length <= 1 || arguments[1] === undefined ? {} : arguments[1];

    if (opts.method && opts.method === 'POST') {
      // if we are POSTing, we need to manually set the content-type because AGO
      // actually does care about this header
      if (!opts.headers) {
        opts.headers = {
          Accept: 'application/json, application/xml, text/plain, text/html, *.*',
          'Content-Type': 'application/x-www-form-urlencoded'
        };
      }
      // if a body was passed, we need to set the content type to multipart
      if (opts.body) {
        delete opts.headers['Content-Type']; // = 'multipart/form-data';
      }

      // if we have a data, create a formData from it
      if (opts.data) {
        var form = (0, _dummyEmberArcgisServerServicesTestsModulesEmberArcgisServerServicesUtilsEncodeForm['default'])(opts.data);
        opts.body = form;
      }
    }
    opts.redirect = 'follow';
    opts.mode = 'cors';
    url = (0, _dummyEmberArcgisServerServicesTestsModulesEmberArcgisServerServicesUtilsAddToken['default'])(url, opts.token);

    return (0, _emberNetworkFetch['default'])(url, opts).then(checkStatusAndParseJson);
    // TODO: try JSONP if GET request fails (to support older IE versions)
    // .catch((err) => {
    //   if (err.message === 'Network request failed' && opts.method === 'GET') {
    //     // need to install ember-ajax or fetch-jsonp to try a JSONP request
    //   }
    // });
  }

  /**
   * Fetch does not reject on non-200 responses, so we need to check this manually
   */
  function checkStatusAndParseJson(response) {
    var error;
    // Ember.debug('Fetch request status: ' + response.status);
    if (response.status >= 200 && response.status < 300) {
      // check if this is one of those groovy 200-but-a-400 things
      return response.json().then(function (json) {
        if (json.error) {
          // cook an error
          error = new Error(json.error.message);
          error.code = json.error.code || 404;
          error.response = response;
          _ember['default'].debug('Error in response:  ' + json.error.message);
          throw error;
        } else {
          return json;
        }
      });
    } else {
      // Response has non 200 http code
      error = new Error(response.statusText);
      error.response = response;
      throw error;
    }
  }
});
define('dummy/ember-arcgis-server-services/tests/modules/ember-arcgis-server-services/utils/should-add-token', ['exports', 'ember'], function (exports, _ember) {
  exports['default'] = shouldAddToken;

  /**
   * Logic to determine when we should attach a token to a ArcGIS Server / Hosted Service call
   */

  function shouldAddToken(url, serverInfo, portalInfo) {
    // default to not sending tokens
    var shouldSendToken = false;
    // check if the server even accepts tokens
    var acceptsTokens = _ember['default'].getWithDefault(serverInfo, 'authInfo.isTokenBasedSecurity', false);
    if (acceptsTokens) {
      var serverDomain = stripToDomain(url);
      var portalDomain = stripToDomain(portalInfo.portalHostname);
      var owningDomain = stripToDomain(serverInfo.owningSystemUrl);
      var authorizedCrossOriginDomains = portalInfo.authorizedCrossOriginDomains || [];
      var isAuthorizedUrl = authorizedCrossOriginDomains.indexOf(serverDomain) > -1;
      var isArcGisDomain = !!url.toLowerCase().match('.arcgis.com/');

      // if all three are the same domain... send it
      if (serverDomain === portalDomain === owningDomain) {
        shouldSendToken = true;
      } else if (portalDomain === owningDomain && isAuthorizedUrl) {
        shouldSendToken = true;
      } else if (portalDomain === owningDomain && isArcGisDomain) {
        shouldSendToken = true;
      }
    }

    return shouldSendToken;
  }

  function stripToDomain(url) {
    try {
      return url.replace(/^https?:\/\//, '').split(':')[0].split('/')[0];
    } catch (e) {
      return url;
    }
  }
});
define('dummy/encode-form/util', ['exports', 'ember-arcgis-server-services/encode-form/util'], function (exports, _emberArcgisServerServicesEncodeFormUtil) {
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function get() {
      return _emberArcgisServerServicesEncodeFormUtil['default'];
    }
  });
});
define('dummy/ext/torii-provider-arcgis', ['exports', 'torii/services/torii-session', 'torii-provider-arcgis/mixins/gatekeeper'], function (exports, _toriiServicesToriiSession, _toriiProviderArcgisMixinsGatekeeper) {

  _toriiServicesToriiSession['default'].reopen(_toriiProviderArcgisMixinsGatekeeper['default']);
});
/**
 * ext/torii-provider-arcgis.js
 *
 * This file simply re-opens the Torii Session object,
 * using the GateKeeper mixin
 */
define('dummy/formats', ['exports'], function (exports) {
  exports['default'] = {
    time: {
      hhmmss: {
        hour: 'numeric',
        minute: 'numeric',
        second: 'numeric'
      }
    },
    date: {
      hhmmss: {
        hour: 'numeric',
        minute: 'numeric',
        second: 'numeric'
      }
    },
    number: {
      EUR: {
        style: 'currency',
        currency: 'EUR',
        minimumFractionDigits: 2,
        maximumFractionDigits: 2
      },
      USD: {
        style: 'currency',
        currency: 'USD',
        minimumFractionDigits: 2,
        maximumFractionDigits: 2
      }
    }
  };
});
define('dummy/helpers/app-version', ['exports', 'ember', 'dummy/config/environment', 'ember-cli-app-version/utils/regexp'], function (exports, _ember, _dummyConfigEnvironment, _emberCliAppVersionUtilsRegexp) {
  exports.appVersion = appVersion;
  var version = _dummyConfigEnvironment['default'].APP.version;

  function appVersion(_) {
    var hash = arguments.length <= 1 || arguments[1] === undefined ? {} : arguments[1];

    if (hash.hideSha) {
      return version.match(_emberCliAppVersionUtilsRegexp.versionRegExp)[0];
    }

    if (hash.hideVersion) {
      return version.match(_emberCliAppVersionUtilsRegexp.shaRegExp)[0];
    }

    return version;
  }

  exports['default'] = _ember['default'].Helper.helper(appVersion);
});
define('dummy/helpers/camelize', ['exports', 'ember-cli-string-helpers/helpers/camelize'], function (exports, _emberCliStringHelpersHelpersCamelize) {
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function get() {
      return _emberCliStringHelpersHelpersCamelize['default'];
    }
  });
  Object.defineProperty(exports, 'camelize', {
    enumerable: true,
    get: function get() {
      return _emberCliStringHelpersHelpersCamelize.camelize;
    }
  });
});
define('dummy/helpers/capitalize', ['exports', 'ember-cli-string-helpers/helpers/capitalize'], function (exports, _emberCliStringHelpersHelpersCapitalize) {
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function get() {
      return _emberCliStringHelpersHelpersCapitalize['default'];
    }
  });
  Object.defineProperty(exports, 'capitalize', {
    enumerable: true,
    get: function get() {
      return _emberCliStringHelpersHelpersCapitalize.capitalize;
    }
  });
});
define('dummy/helpers/classify', ['exports', 'ember-cli-string-helpers/helpers/classify'], function (exports, _emberCliStringHelpersHelpersClassify) {
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function get() {
      return _emberCliStringHelpersHelpersClassify['default'];
    }
  });
  Object.defineProperty(exports, 'classify', {
    enumerable: true,
    get: function get() {
      return _emberCliStringHelpersHelpersClassify.classify;
    }
  });
});
define('dummy/helpers/dasherize', ['exports', 'ember-cli-string-helpers/helpers/dasherize'], function (exports, _emberCliStringHelpersHelpersDasherize) {
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function get() {
      return _emberCliStringHelpersHelpersDasherize['default'];
    }
  });
  Object.defineProperty(exports, 'dasherize', {
    enumerable: true,
    get: function get() {
      return _emberCliStringHelpersHelpersDasherize.dasherize;
    }
  });
});
define('dummy/helpers/format-date', ['exports', 'ember-intl/helpers/format-date'], function (exports, _emberIntlHelpersFormatDate) {
  /**
   * Copyright 2015, Yahoo! Inc.
   * Copyrights licensed under the New BSD License. See the accompanying LICENSE file for terms.
   */

  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function get() {
      return _emberIntlHelpersFormatDate['default'];
    }
  });
});
define('dummy/helpers/format-html-message', ['exports', 'ember-intl/helpers/format-html-message'], function (exports, _emberIntlHelpersFormatHtmlMessage) {
  /**
   * Copyright 2015, Yahoo! Inc.
   * Copyrights licensed under the New BSD License. See the accompanying LICENSE file for terms.
   */

  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function get() {
      return _emberIntlHelpersFormatHtmlMessage['default'];
    }
  });
});
define('dummy/helpers/format-message', ['exports', 'ember-intl/helpers/format-message'], function (exports, _emberIntlHelpersFormatMessage) {
  /**
   * Copyright 2015, Yahoo! Inc.
   * Copyrights licensed under the New BSD License. See the accompanying LICENSE file for terms.
   */

  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function get() {
      return _emberIntlHelpersFormatMessage['default'];
    }
  });
});
define('dummy/helpers/format-number', ['exports', 'ember-intl/helpers/format-number'], function (exports, _emberIntlHelpersFormatNumber) {
  /**
   * Copyright 2015, Yahoo! Inc.
   * Copyrights licensed under the New BSD License. See the accompanying LICENSE file for terms.
   */

  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function get() {
      return _emberIntlHelpersFormatNumber['default'];
    }
  });
});
define('dummy/helpers/format-relative', ['exports', 'ember-intl/helpers/format-relative'], function (exports, _emberIntlHelpersFormatRelative) {
  /**
   * Copyright 2015, Yahoo! Inc.
   * Copyrights licensed under the New BSD License. See the accompanying LICENSE file for terms.
   */

  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function get() {
      return _emberIntlHelpersFormatRelative['default'];
    }
  });
});
define('dummy/helpers/format-time', ['exports', 'ember-intl/helpers/format-time'], function (exports, _emberIntlHelpersFormatTime) {
  /**
   * Copyright 2015, Yahoo! Inc.
   * Copyrights licensed under the New BSD License. See the accompanying LICENSE file for terms.
   */

  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function get() {
      return _emberIntlHelpersFormatTime['default'];
    }
  });
});
define('dummy/helpers/html-safe', ['exports', 'ember-cli-string-helpers/helpers/html-safe'], function (exports, _emberCliStringHelpersHelpersHtmlSafe) {
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function get() {
      return _emberCliStringHelpersHelpersHtmlSafe['default'];
    }
  });
  Object.defineProperty(exports, 'htmlSafe', {
    enumerable: true,
    get: function get() {
      return _emberCliStringHelpersHelpersHtmlSafe.htmlSafe;
    }
  });
});
define('dummy/helpers/humanize', ['exports', 'ember-cli-string-helpers/helpers/humanize'], function (exports, _emberCliStringHelpersHelpersHumanize) {
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function get() {
      return _emberCliStringHelpersHelpersHumanize['default'];
    }
  });
  Object.defineProperty(exports, 'humanize', {
    enumerable: true,
    get: function get() {
      return _emberCliStringHelpersHelpersHumanize.humanize;
    }
  });
});
define('dummy/helpers/intl-get', ['exports', 'ember-intl/helpers/intl-get'], function (exports, _emberIntlHelpersIntlGet) {
  /**
   * Copyright 2015, Yahoo! Inc.
   * Copyrights licensed under the New BSD License. See the accompanying LICENSE file for terms.
   */

  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function get() {
      return _emberIntlHelpersIntlGet['default'];
    }
  });
});
define('dummy/helpers/l', ['exports', 'ember-intl/helpers/l'], function (exports, _emberIntlHelpersL) {
  /**
   * Copyright 2015, Yahoo! Inc.
   * Copyrights licensed under the New BSD License. See the accompanying LICENSE file for terms.
   */

  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function get() {
      return _emberIntlHelpersL['default'];
    }
  });
});
define('dummy/helpers/lowercase', ['exports', 'ember-cli-string-helpers/helpers/lowercase'], function (exports, _emberCliStringHelpersHelpersLowercase) {
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function get() {
      return _emberCliStringHelpersHelpersLowercase['default'];
    }
  });
  Object.defineProperty(exports, 'lowercase', {
    enumerable: true,
    get: function get() {
      return _emberCliStringHelpersHelpersLowercase.lowercase;
    }
  });
});
define('dummy/helpers/sanitize-html', ['exports', 'ember-sanitize/utils/sanitize', 'ember-getowner-polyfill', 'ember'], function (exports, _emberSanitizeUtilsSanitize, _emberGetownerPolyfill, _ember) {
  exports['default'] = _ember['default'].Helper.extend({
    compute: function compute(params) {
      var config = undefined,
          configName = params[1];
      if (configName) {
        //lookup the config
        config = (0, _emberGetownerPolyfill['default'])(this).lookup('sanitizer:' + configName);
      }

      var sanitized = (0, _emberSanitizeUtilsSanitize.sanitize)(params[0], config);
      return new _ember['default'].String.htmlSafe(sanitized);
    }
  });
});
define('dummy/helpers/t', ['exports', 'ember-intl/helpers/t'], function (exports, _emberIntlHelpersT) {
  /**
   * Copyright 2015, Yahoo! Inc.
   * Copyrights licensed under the New BSD License. See the accompanying LICENSE file for terms.
   */

  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function get() {
      return _emberIntlHelpersT['default'];
    }
  });
});
define('dummy/helpers/titleize', ['exports', 'ember-cli-string-helpers/helpers/titleize'], function (exports, _emberCliStringHelpersHelpersTitleize) {
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function get() {
      return _emberCliStringHelpersHelpersTitleize['default'];
    }
  });
  Object.defineProperty(exports, 'titleize', {
    enumerable: true,
    get: function get() {
      return _emberCliStringHelpersHelpersTitleize.titleize;
    }
  });
});
define('dummy/helpers/truncate', ['exports', 'ember-cli-string-helpers/helpers/truncate'], function (exports, _emberCliStringHelpersHelpersTruncate) {
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function get() {
      return _emberCliStringHelpersHelpersTruncate['default'];
    }
  });
  Object.defineProperty(exports, 'truncate', {
    enumerable: true,
    get: function get() {
      return _emberCliStringHelpersHelpersTruncate.truncate;
    }
  });
});
define('dummy/helpers/underscore', ['exports', 'ember-cli-string-helpers/helpers/underscore'], function (exports, _emberCliStringHelpersHelpersUnderscore) {
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function get() {
      return _emberCliStringHelpersHelpersUnderscore['default'];
    }
  });
  Object.defineProperty(exports, 'underscore', {
    enumerable: true,
    get: function get() {
      return _emberCliStringHelpersHelpersUnderscore.underscore;
    }
  });
});
define('dummy/helpers/uppercase', ['exports', 'ember-cli-string-helpers/helpers/uppercase'], function (exports, _emberCliStringHelpersHelpersUppercase) {
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function get() {
      return _emberCliStringHelpersHelpersUppercase['default'];
    }
  });
  Object.defineProperty(exports, 'uppercase', {
    enumerable: true,
    get: function get() {
      return _emberCliStringHelpersHelpersUppercase.uppercase;
    }
  });
});
define('dummy/helpers/w', ['exports', 'ember-cli-string-helpers/helpers/w'], function (exports, _emberCliStringHelpersHelpersW) {
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function get() {
      return _emberCliStringHelpersHelpersW['default'];
    }
  });
  Object.defineProperty(exports, 'w', {
    enumerable: true,
    get: function get() {
      return _emberCliStringHelpersHelpersW.w;
    }
  });
});
define('dummy/index/route', ['exports', 'ember'], function (exports, _ember) {
  exports['default'] = _ember['default'].Route.extend({});
});
define("dummy/index/template", ["exports"], function (exports) {
  exports["default"] = Ember.HTMLBars.template({ "id": "buzqxsdP", "block": "{\"statements\":[[\"open-element\",\"div\",[]],[\"static-attr\",\"class\",\"row\"],[\"flush-element\"],[\"text\",\"\\n  \"],[\"open-element\",\"div\",[]],[\"static-attr\",\"class\",\"col-sm-12\"],[\"flush-element\"],[\"text\",\"\\n    \"],[\"open-element\",\"h1\",[]],[\"flush-element\"],[\"text\",\"Ember ArcGIS Portal Components\"],[\"close-element\"],[\"text\",\"\\n    \"],[\"open-element\",\"p\",[]],[\"flush-element\"],[\"text\",\"This addon contains a set of component that allows Ember developers to quickly work with ArcGIS Portal entities.\"],[\"close-element\"],[\"text\",\"\\n  \"],[\"close-element\"],[\"text\",\"\\n\"],[\"close-element\"],[\"text\",\"\\n\"],[\"open-element\",\"div\",[]],[\"static-attr\",\"class\",\"row\"],[\"flush-element\"],[\"text\",\"\\n  \"],[\"open-element\",\"div\",[]],[\"static-attr\",\"class\",\"col-sm-6\"],[\"flush-element\"],[\"text\",\"\\n    \"],[\"open-element\",\"h2\",[]],[\"flush-element\"],[\"text\",\"Installation\"],[\"close-element\"],[\"text\",\"\\n    \"],[\"open-element\",\"p\",[]],[\"flush-element\"],[\"text\",\"Install as you would any Ember addon...\"],[\"close-element\"],[\"text\",\"\\n    \"],[\"open-element\",\"pre\",[]],[\"flush-element\"],[\"text\",\"\\n      ember install ember-arcgis-portal-components\\n    \"],[\"close-element\"],[\"text\",\"\\n\\n\"],[\"open-element\",\"h3\",[]],[\"flush-element\"],[\"text\",\"Item Picker\"],[\"close-element\"],[\"text\",\"\\n\"],[\"open-element\",\"p\",[]],[\"flush-element\"],[\"text\",\"Allows you to easily search ArcGIS online or Portal for Items\"],[\"close-element\"],[\"text\",\"\\n\"],[\"open-element\",\"pre\",[]],[\"flush-element\"],[\"text\",\"\\n\"],[\"append\",\"{{item-picker\\n    selectAction=(action \\\"onSelectItem\\\")}}\",false],[\"text\",\"\\n\"],[\"close-element\"],[\"text\",\"\\n\\n\\n\"],[\"open-element\",\"h3\",[]],[\"flush-element\"],[\"text\",\"Group Picker\"],[\"close-element\"],[\"text\",\"\\n\"],[\"open-element\",\"p\",[]],[\"flush-element\"],[\"text\",\"Allows you to easily search ArcGIS online or Portal for Groups\"],[\"close-element\"],[\"text\",\"\\n\"],[\"open-element\",\"pre\",[]],[\"flush-element\"],[\"text\",\"\\n\"],[\"append\",\"{{group-picker\\n    selectAction=(action \\\"onSelectGroup\\\")}}\",false],[\"text\",\"\\n\"],[\"close-element\"],[\"text\",\"\\n\\n\\n\"],[\"open-element\",\"h3\",[]],[\"flush-element\"],[\"text\",\"User Picker\"],[\"close-element\"],[\"text\",\"\\n\"],[\"open-element\",\"p\",[]],[\"flush-element\"],[\"text\",\"Allows you to easily search ArcGIS online or Portal for Users\"],[\"close-element\"],[\"text\",\"\\n\"],[\"open-element\",\"pre\",[]],[\"flush-element\"],[\"text\",\"\\n\"],[\"append\",\"{{user-picker\\n    selectAction=(action \\\"onSelectUser\\\")}}\",false],[\"text\",\"\\n\"],[\"close-element\"],[\"text\",\"\\n\"],[\"close-element\"],[\"text\",\"\\n\\n\\n\"],[\"close-element\"],[\"text\",\"\\n\"]],\"locals\":[],\"named\":[],\"yields\":[],\"blocks\":[],\"hasPartials\":false}", "meta": { "moduleName": "dummy/index/template.hbs" } });
});
define('dummy/initializers/app-version', ['exports', 'ember-cli-app-version/initializer-factory', 'dummy/config/environment'], function (exports, _emberCliAppVersionInitializerFactory, _dummyConfigEnvironment) {
  var _config$APP = _dummyConfigEnvironment['default'].APP;
  var name = _config$APP.name;
  var version = _config$APP.version;
  exports['default'] = {
    name: 'App Version',
    initialize: (0, _emberCliAppVersionInitializerFactory['default'])(name, version)
  };
});
define('dummy/initializers/container-debug-adapter', ['exports', 'ember-resolver/container-debug-adapter'], function (exports, _emberResolverContainerDebugAdapter) {
  exports['default'] = {
    name: 'container-debug-adapter',

    initialize: function initialize() {
      var app = arguments[1] || arguments[0];

      app.register('container-debug-adapter:main', _emberResolverContainerDebugAdapter['default']);
      app.inject('container-debug-adapter:main', 'namespace', 'application:main');
    }
  };
});
define('dummy/initializers/export-application-global', ['exports', 'ember', 'dummy/config/environment'], function (exports, _ember, _dummyConfigEnvironment) {
  exports.initialize = initialize;

  function initialize() {
    var application = arguments[1] || arguments[0];
    if (_dummyConfigEnvironment['default'].exportApplicationGlobal !== false) {
      var theGlobal;
      if (typeof window !== 'undefined') {
        theGlobal = window;
      } else if (typeof global !== 'undefined') {
        theGlobal = global;
      } else if (typeof self !== 'undefined') {
        theGlobal = self;
      } else {
        // no reasonable global, just bail
        return;
      }

      var value = _dummyConfigEnvironment['default'].exportApplicationGlobal;
      var globalName;

      if (typeof value === 'string') {
        globalName = value;
      } else {
        globalName = _ember['default'].String.classify(_dummyConfigEnvironment['default'].modulePrefix);
      }

      if (!theGlobal[globalName]) {
        theGlobal[globalName] = application;

        application.reopen({
          willDestroy: function willDestroy() {
            this._super.apply(this, arguments);
            delete theGlobal[globalName];
          }
        });
      }
    }
  }

  exports['default'] = {
    name: 'export-application-global',

    initialize: initialize
  };
});
define('dummy/initializers/initialize-torii-callback', ['exports', 'torii/redirect-handler'], function (exports, _toriiRedirectHandler) {
  exports['default'] = {
    name: 'torii-callback',
    before: 'torii',
    initialize: function initialize(application) {
      if (arguments[1]) {
        // Ember < 2.1
        application = arguments[1];
      }
      application.deferReadiness();
      _toriiRedirectHandler['default'].handle(window)['catch'](function () {
        application.advanceReadiness();
      });
    }
  };
});
define('dummy/initializers/initialize-torii-session', ['exports', 'torii/bootstrap/session', 'torii/configuration'], function (exports, _toriiBootstrapSession, _toriiConfiguration) {
  exports['default'] = {
    name: 'torii-session',
    after: 'torii',

    initialize: function initialize(application) {
      if (arguments[1]) {
        // Ember < 2.1
        application = arguments[1];
      }
      var configuration = (0, _toriiConfiguration.getConfiguration)();
      if (!configuration.sessionServiceName) {
        return;
      }

      (0, _toriiBootstrapSession['default'])(application, configuration.sessionServiceName);

      var sessionFactoryName = 'service:' + configuration.sessionServiceName;
      application.inject('adapter', configuration.sessionServiceName, sessionFactoryName);
    }
  };
});
define('dummy/initializers/initialize-torii', ['exports', 'torii/bootstrap/torii', 'torii/configuration', 'dummy/config/environment'], function (exports, _toriiBootstrapTorii, _toriiConfiguration, _dummyConfigEnvironment) {

  var initializer = {
    name: 'torii',
    initialize: function initialize(application) {
      if (arguments[1]) {
        // Ember < 2.1
        application = arguments[1];
      }
      (0, _toriiConfiguration.configure)(_dummyConfigEnvironment['default'].torii || {});
      (0, _toriiBootstrapTorii['default'])(application);
      application.inject('route', 'torii', 'service:torii');
    }
  };

  exports['default'] = initializer;
});
define('dummy/initializers/setup-sanitizers', ['exports', 'ember'], function (exports, _ember) {
  exports['default'] = {
    name: 'ember-sanitize-setup-sanitizers',

    initialize: function initialize(container) {
      if (container.registerOptionsForType) {
        container.registerOptionsForType('sanitizer', { instantiate: false });
      } else {
        // Ember < 2
        container.optionsForType('sanitizer', { instantiate: false });
      }
    }
  };
});
define('dummy/initializers/torii-provider-arcgis', ['exports', 'dummy/ext/torii-provider-arcgis'], function (exports, _dummyExtToriiProviderArcgis) {
  exports.initialize = initialize;

  function initialize() {}
  // do nothing here...

  // we need to export this stuff...

  exports['default'] = {
    name: 'torii-provider-arcgis',
    initialize: initialize
  };
});
/**
 * initializers/torii-provider-arcgis.js
 *
 * This file is simply here so that it includes the extention file
 * which reopen's the Torii Session, and adds additional methods
 * to it which are useful for ArcGIS Online Sessions
 */
define('dummy/instance-initializers/ember-intl', ['exports', 'dummy/config/environment'], function (exports, _dummyConfigEnvironment) {
  exports.instanceInitializer = instanceInitializer;

  function filterBy(type) {
    return Object.keys(requirejs._eak_seen).filter(function (key) {
      return key.indexOf(_dummyConfigEnvironment['default'].modulePrefix + '/' + type + '/') === 0;
    });
  }

  function instanceInitializer(instance) {
    var service = undefined;

    if (typeof instance.lookup === 'function') {
      service = instance.lookup('service:intl');
    } else {
      service = instance.container.lookup('service:intl');
    }

    filterBy('cldrs').map(function (cldr) {
      return require(cldr, null, null, true)['default'];
    }).forEach(function (lang) {
      return lang.forEach(service.addLocaleData);
    });

    filterBy('translations').forEach(function (key) {
      var localeSplit = key.split('\/');
      var localeName = localeSplit[localeSplit.length - 1];
      service.addTranslations(localeName, require(key, null, null, true)['default']);
    });
  }

  exports['default'] = {
    name: 'ember-intl',
    initialize: instanceInitializer
  };
});
/* globals requirejs */

/**
 * Copyright 2015, Yahoo! Inc.
 * Copyrights licensed under the New BSD License. See the accompanying LICENSE file for terms.
 */
define('dummy/instance-initializers/setup-routes', ['exports', 'torii/bootstrap/routing', 'torii/configuration', 'torii/router-dsl-ext'], function (exports, _toriiBootstrapRouting, _toriiConfiguration, _toriiRouterDslExt) {
  exports['default'] = {
    name: 'torii-setup-routes',
    initialize: function initialize(applicationInstance, registry) {
      var configuration = (0, _toriiConfiguration.getConfiguration)();

      if (!configuration.sessionServiceName) {
        return;
      }

      var router = applicationInstance.get('router');
      var setupRoutes = function setupRoutes() {
        var authenticatedRoutes = router.router.authenticatedRoutes;
        var hasAuthenticatedRoutes = !Ember.isEmpty(authenticatedRoutes);
        if (hasAuthenticatedRoutes) {
          (0, _toriiBootstrapRouting['default'])(applicationInstance, authenticatedRoutes);
        }
        router.off('willTransition', setupRoutes);
      };
      router.on('willTransition', setupRoutes);
    }
  };
});
define('dummy/instance-initializers/walk-providers', ['exports', 'torii/lib/container-utils', 'torii/configuration'], function (exports, _toriiLibContainerUtils, _toriiConfiguration) {
  exports['default'] = {
    name: 'torii-walk-providers',
    initialize: function initialize(applicationInstance) {
      var configuration = (0, _toriiConfiguration.getConfiguration)();
      // Walk all configured providers and eagerly instantiate
      // them. This gives providers with initialization side effects
      // like facebook-connect a chance to load up assets.
      for (var key in configuration.providers) {
        if (configuration.providers.hasOwnProperty(key)) {
          (0, _toriiLibContainerUtils.lookup)(applicationInstance, 'torii-provider:' + key);
        }
      }
    }
  };
});
define('dummy/itempicker/defaultcatalog/controller', ['exports', 'ember'], function (exports, _ember) {
  exports['default'] = _ember['default'].Controller.extend({
    selectedItem: null,

    url: 'http://dc.mapsqa.arcgis.com',

    catalog: _ember['default'].A([{
      name: 'All',
      params: {
        query: {
          access: 'public'
        }
      }
    }, {
      name: 'Apps',
      params: {
        query: {
          type: ['Web Mapping Application'],
          typekeywords: ['-hubsite', '-story'],
          tags: ['-survey', '-storymap', '-site']
        }
      }
    }, {
      name: 'Pages',
      params: {
        query: {
          tags: ['page'],
          typekeywords: ['hubsite']
        }
      }
    }, {
      name: 'Sites',
      params: {
        query: {
          tags: ['site'],
          typekeywords: ['hubSite']
        }
      },
      active: true
    }, {
      name: 'Story Maps',
      params: {
        query: {
          typekeywords: ['story'],
          tags: ['storymap']
        }
      }
    }, {
      name: 'Surveys',
      params: {
        query: {
          typekeywords: ['Registered App'],
          tags: ['survey'],
          type: ['Web Mapping Application']
        }
      }
    }, {
      name: 'Webmaps',
      params: {
        query: {
          type: ['Web Map', '-Web Mapping Application'],
          tags: ['WebMap']
        }
      }
    }, {
      name: 'My favorite enviro apps',
      params: {
        query: {
          tags: ['environment', 'hydrology'],
          type: ['Web Mapping Applications']
        }
      }
    }]),

    actions: {
      onSelectItem: function onSelectItem(selected) {
        _ember['default'].$('#myModal').modal('hide');
        this.set('selectedItem', selected);
      }
    }
  });
});
define('dummy/itempicker/defaultcatalog/route', ['exports', 'ember'], function (exports, _ember) {
  exports['default'] = _ember['default'].Route.extend({});
});
define("dummy/itempicker/defaultcatalog/template", ["exports"], function (exports) {
  exports["default"] = Ember.HTMLBars.template({ "id": "46H+R4h+", "block": "{\"statements\":[[\"open-element\",\"div\",[]],[\"static-attr\",\"class\",\"row\"],[\"flush-element\"],[\"text\",\"\\n  \"],[\"open-element\",\"div\",[]],[\"static-attr\",\"class\",\"col-sm-12\"],[\"flush-element\"],[\"text\",\"\\n    \"],[\"open-element\",\"h2\",[]],[\"flush-element\"],[\"text\",\"Specify starting catalog\"],[\"close-element\"],[\"text\",\"\\n  \"],[\"close-element\"],[\"text\",\"\\n\\n  \"],[\"open-element\",\"div\",[]],[\"static-attr\",\"class\",\"col-sm-12\"],[\"flush-element\"],[\"text\",\"\\n    \"],[\"open-element\",\"h3\",[]],[\"flush-element\"],[\"text\",\"Inline Panel Example\"],[\"close-element\"],[\"text\",\"\\n    \"],[\"open-element\",\"div\",[]],[\"static-attr\",\"class\",\"panel panel-default\"],[\"flush-element\"],[\"text\",\"\\n      \"],[\"open-element\",\"div\",[]],[\"static-attr\",\"class\",\"panel-heading\"],[\"flush-element\"],[\"text\",\"\\n        \"],[\"open-element\",\"h3\",[]],[\"static-attr\",\"class\",\"panel-title\"],[\"flush-element\"],[\"text\",\"Search ArcGIS.com for Items\"],[\"close-element\"],[\"text\",\"\\n      \"],[\"close-element\"],[\"text\",\"\\n      \"],[\"open-element\",\"div\",[]],[\"static-attr\",\"class\",\"panel-body\"],[\"flush-element\"],[\"text\",\"\\n        \"],[\"append\",[\"helper\",[\"item-picker\"],null,[[\"catalog\",\"portalHostName\",\"searchItemsOnInit\",\"selectAction\"],[[\"get\",[\"catalog\"]],[\"get\",[\"url\"]],true,[\"helper\",[\"action\"],[[\"get\",[null]],\"onSelectItem\"],null]]]],false],[\"text\",\"\\n      \"],[\"close-element\"],[\"text\",\"\\n    \"],[\"close-element\"],[\"text\",\"\\n  \"],[\"close-element\"],[\"text\",\"\\n\"],[\"close-element\"],[\"text\",\"\\n\"]],\"locals\":[],\"named\":[],\"yields\":[],\"blocks\":[],\"hasPartials\":false}", "meta": { "moduleName": "dummy/itempicker/defaultcatalog/template.hbs" } });
});
define('dummy/itempicker/facets/controller', ['exports', 'ember'], function (exports, _ember) {
  exports['default'] = _ember['default'].Controller.extend({
    selectedItem: null,

    url: 'http://dc.mapsqa.arcgis.com',

    catalog: _ember['default'].A([{
      name: 'All',
      params: {
        query: {
          access: 'public'
        }
      }
    }, {
      name: 'Services',
      params: {
        query: {
          type: ['Feature Service', 'Map Service']
        }
      }
    }, {
      name: 'Apps',
      params: {
        query: {
          type: ['Web Mapping Application'],
          typekeywords: ['-hubsite', '-story'],
          tags: ['-survey', '-storymap', '-site']
        }
      }
    }, {
      name: 'Pages',
      params: {
        query: {
          tags: ['page'],
          typekeywords: ['hubsite']
        }
      }
    }, {
      name: 'Sites',
      params: {
        query: {
          tags: ['site'],
          typekeywords: ['hubSite']
        }
      }
    }, {
      name: 'Story Maps',
      params: {
        query: {
          typekeywords: ['story'],
          tags: ['storymap']
        }
      }
    }, {
      name: 'Surveys',
      params: {
        query: {
          typekeywords: ['Registered App'],
          tags: ['survey'],
          type: ['Web Mapping Application']
        }
      }
    }, {
      name: 'Webmaps',
      params: {
        query: {
          type: ['Web Map', '-Web Mapping Application'],
          tags: ['WebMap']
        }
      }
    }, {
      name: 'My favorite enviro apps',
      params: {
        query: {
          tags: ['environment', 'hydrology'],
          type: ['Web Mapping Applications']
        }
      }
    }]),

    previewParams: {
      showLayers: true,
      forceLayerSelection: true
    },

    actions: {
      onSelectItem: function onSelectItem(selected) {
        _ember['default'].$('#myModal').modal('hide');
        this.set('selectedItem', selected);
      }
    }
  });
});
define('dummy/itempicker/facets/route', ['exports', 'ember'], function (exports, _ember) {
  exports['default'] = _ember['default'].Route.extend({});
});
define("dummy/itempicker/facets/template", ["exports"], function (exports) {
  exports["default"] = Ember.HTMLBars.template({ "id": "LN5iywjo", "block": "{\"statements\":[[\"open-element\",\"div\",[]],[\"static-attr\",\"class\",\"row\"],[\"flush-element\"],[\"text\",\"\\n  \"],[\"open-element\",\"div\",[]],[\"static-attr\",\"class\",\"col-sm-12\"],[\"flush-element\"],[\"text\",\"\\n    \"],[\"open-element\",\"h2\",[]],[\"flush-element\"],[\"text\",\"Faceting by type\"],[\"close-element\"],[\"text\",\"\\n  \"],[\"close-element\"],[\"text\",\"\\n\\n  \"],[\"open-element\",\"div\",[]],[\"static-attr\",\"class\",\"col-sm-12\"],[\"flush-element\"],[\"text\",\"\\n    \"],[\"open-element\",\"h3\",[]],[\"flush-element\"],[\"text\",\"Inline Panel Example\"],[\"close-element\"],[\"text\",\"\\n    \"],[\"open-element\",\"div\",[]],[\"static-attr\",\"class\",\"panel panel-default\"],[\"flush-element\"],[\"text\",\"\\n      \"],[\"open-element\",\"div\",[]],[\"static-attr\",\"class\",\"panel-heading\"],[\"flush-element\"],[\"text\",\"\\n        \"],[\"open-element\",\"h3\",[]],[\"static-attr\",\"class\",\"panel-title\"],[\"flush-element\"],[\"text\",\"Search ArcGIS.com for Items\"],[\"close-element\"],[\"text\",\"\\n      \"],[\"close-element\"],[\"text\",\"\\n      \"],[\"open-element\",\"div\",[]],[\"static-attr\",\"class\",\"panel-body\"],[\"flush-element\"],[\"text\",\"\\n        \"],[\"append\",[\"helper\",[\"item-picker\"],null,[[\"catalog\",\"portalHostName\",\"searchItemsOnInit\",\"previewParams\",\"selectAction\"],[[\"get\",[\"catalog\"]],[\"get\",[\"url\"]],true,[\"get\",[\"previewParams\"]],[\"helper\",[\"action\"],[[\"get\",[null]],\"onSelectItem\"],null]]]],false],[\"text\",\"\\n      \"],[\"close-element\"],[\"text\",\"\\n    \"],[\"close-element\"],[\"text\",\"\\n  \"],[\"close-element\"],[\"text\",\"\\n\"],[\"close-element\"],[\"text\",\"\\n\"]],\"locals\":[],\"named\":[],\"yields\":[],\"blocks\":[],\"hasPartials\":false}", "meta": { "moduleName": "dummy/itempicker/facets/template.hbs" } });
});
define('dummy/itempicker/index/controller', ['exports', 'ember'], function (exports, _ember) {
  exports['default'] = _ember['default'].Controller.extend({
    selectedItem: null,

    itemService: _ember['default'].inject.service('items-service'),

    actions: {
      onSelectItem: function onSelectItem(selected) {
        _ember['default'].$('#myModal').modal('hide');
        this.set('selectedItem', selected);
      }
    }
  });
});
define('dummy/itempicker/index/route', ['exports', 'ember'], function (exports, _ember) {
  exports['default'] = _ember['default'].Route.extend({});
});
define("dummy/itempicker/index/template", ["exports"], function (exports) {
  exports["default"] = Ember.HTMLBars.template({ "id": "jxKT5Nk1", "block": "{\"statements\":[[\"open-element\",\"div\",[]],[\"static-attr\",\"class\",\"row\"],[\"flush-element\"],[\"text\",\"\\n  \"],[\"open-element\",\"div\",[]],[\"static-attr\",\"class\",\"col-sm-12\"],[\"flush-element\"],[\"text\",\"\\n    \"],[\"open-element\",\"h2\",[]],[\"flush-element\"],[\"text\",\"Picking Items\"],[\"close-element\"],[\"text\",\"\\n  \"],[\"close-element\"],[\"text\",\"\\n  \"],[\"open-element\",\"div\",[]],[\"static-attr\",\"class\",\"col-sm-6\"],[\"flush-element\"],[\"text\",\"\\n    \"],[\"open-element\",\"h3\",[]],[\"flush-element\"],[\"text\",\"Default Usage\"],[\"close-element\"],[\"text\",\"\\n    \"],[\"open-element\",\"p\",[]],[\"flush-element\"],[\"text\",\"To simply add the component into your template and wire up the \"],[\"open-element\",\"code\",[]],[\"flush-element\"],[\"text\",\"selectAction\"],[\"close-element\"],[\"text\",\" closure action.\\n      By default, the component will search public items in ArcGIS Online, or whatever portal your app is configured to use. \"],[\"close-element\"],[\"text\",\"\\n\\n      \"],[\"open-element\",\"pre\",[]],[\"flush-element\"],[\"text\",\"\\n\"],[\"append\",\"{{item-picker\\n      selectAction=(action \\\"onSelectItem\\\")}}\",false],[\"text\",\"\\n    \"],[\"close-element\"],[\"text\",\"\\n    \"],[\"open-element\",\"p\",[]],[\"flush-element\"],[\"text\",\"If you need to search against another portal, you can pass \"],[\"open-element\",\"code\",[]],[\"flush-element\"],[\"text\",\"portalOpts\"],[\"close-element\"],[\"text\",\" to the component.\"],[\"close-element\"],[\"text\",\"\\n  \"],[\"close-element\"],[\"text\",\"\\n  \"],[\"open-element\",\"div\",[]],[\"static-attr\",\"class\",\"col-sm-6\"],[\"flush-element\"],[\"text\",\"\\n    \"],[\"open-element\",\"h3\",[]],[\"flush-element\"],[\"text\",\"Selected Item \"],[\"close-element\"],[\"text\",\"\\n\"],[\"block\",[\"if\"],[[\"get\",[\"selectedItem\"]]],null,1,0],[\"text\",\"  \"],[\"close-element\"],[\"text\",\"\\n\\n  \"],[\"open-element\",\"div\",[]],[\"static-attr\",\"class\",\"col-sm-12\"],[\"flush-element\"],[\"text\",\"\\n    \"],[\"open-element\",\"h3\",[]],[\"flush-element\"],[\"text\",\"Modal Example \"],[\"close-element\"],[\"text\",\"\\n    \"],[\"open-element\",\"button\",[]],[\"static-attr\",\"type\",\"button\"],[\"static-attr\",\"class\",\"btn btn-primary\"],[\"static-attr\",\"data-toggle\",\"modal\"],[\"static-attr\",\"data-target\",\"#myModal\"],[\"flush-element\"],[\"text\",\"Select an Item\"],[\"close-element\"],[\"text\",\"\\n  \"],[\"close-element\"],[\"text\",\"\\n  \"],[\"open-element\",\"div\",[]],[\"static-attr\",\"class\",\"col-sm-12\"],[\"flush-element\"],[\"text\",\"\\n    \"],[\"open-element\",\"h3\",[]],[\"flush-element\"],[\"text\",\"Inline Panel Example\"],[\"close-element\"],[\"text\",\"\\n    \"],[\"open-element\",\"div\",[]],[\"static-attr\",\"class\",\"panel panel-default\"],[\"flush-element\"],[\"text\",\"\\n      \"],[\"open-element\",\"div\",[]],[\"static-attr\",\"class\",\"panel-heading\"],[\"flush-element\"],[\"text\",\"\\n        \"],[\"open-element\",\"h3\",[]],[\"static-attr\",\"class\",\"panel-title\"],[\"flush-element\"],[\"text\",\"Search ArcGIS.com for Items\"],[\"close-element\"],[\"text\",\"\\n      \"],[\"close-element\"],[\"text\",\"\\n      \"],[\"open-element\",\"div\",[]],[\"static-attr\",\"class\",\"panel-body\"],[\"flush-element\"],[\"text\",\"\\n        \"],[\"append\",[\"helper\",[\"item-picker\"],null,[[\"selectAction\"],[[\"helper\",[\"action\"],[[\"get\",[null]],\"onSelectItem\"],null]]]],false],[\"text\",\"\\n      \"],[\"close-element\"],[\"text\",\"\\n    \"],[\"close-element\"],[\"text\",\"\\n  \"],[\"close-element\"],[\"text\",\"\\n\"],[\"close-element\"],[\"text\",\"\\n\\n\"],[\"comment\",\" Modal \"],[\"text\",\"\\n\"],[\"open-element\",\"div\",[]],[\"static-attr\",\"class\",\"modal fade\"],[\"static-attr\",\"id\",\"myModal\"],[\"static-attr\",\"tabindex\",\"-1\"],[\"static-attr\",\"role\",\"dialog\"],[\"static-attr\",\"aria-labelledby\",\"myModalLabel\"],[\"flush-element\"],[\"text\",\"\\n  \"],[\"open-element\",\"div\",[]],[\"static-attr\",\"class\",\"modal-dialog modal-lg\"],[\"static-attr\",\"role\",\"document\"],[\"flush-element\"],[\"text\",\"\\n    \"],[\"open-element\",\"div\",[]],[\"static-attr\",\"class\",\"modal-content\"],[\"flush-element\"],[\"text\",\"\\n      \"],[\"open-element\",\"div\",[]],[\"static-attr\",\"class\",\"modal-header\"],[\"flush-element\"],[\"text\",\"\\n        \"],[\"open-element\",\"button\",[]],[\"static-attr\",\"type\",\"button\"],[\"static-attr\",\"class\",\"close\"],[\"static-attr\",\"data-dismiss\",\"modal\"],[\"static-attr\",\"aria-label\",\"Close\"],[\"flush-element\"],[\"open-element\",\"span\",[]],[\"static-attr\",\"aria-hidden\",\"true\"],[\"flush-element\"],[\"text\",\"×\"],[\"close-element\"],[\"close-element\"],[\"text\",\"\\n        \"],[\"open-element\",\"h4\",[]],[\"static-attr\",\"class\",\"modal-title\"],[\"static-attr\",\"id\",\"myModalLabel\"],[\"flush-element\"],[\"text\",\"Default Usage\"],[\"close-element\"],[\"text\",\"\\n      \"],[\"close-element\"],[\"text\",\"\\n      \"],[\"open-element\",\"div\",[]],[\"static-attr\",\"class\",\"modal-body\"],[\"flush-element\"],[\"text\",\"\\n        \"],[\"append\",[\"helper\",[\"item-picker\"],null,[[\"selectAction\"],[[\"helper\",[\"action\"],[[\"get\",[null]],\"onSelectItem\"],null]]]],false],[\"text\",\"\\n      \"],[\"close-element\"],[\"text\",\"\\n    \"],[\"close-element\"],[\"text\",\"\\n  \"],[\"close-element\"],[\"text\",\"\\n\"],[\"close-element\"],[\"text\",\"\\n\"]],\"locals\":[],\"named\":[],\"yields\":[],\"blocks\":[{\"statements\":[[\"text\",\"      \"],[\"open-element\",\"div\",[]],[\"static-attr\",\"class\",\"alert alert-warning\"],[\"static-attr\",\"role\",\"alert\"],[\"flush-element\"],[\"text\",\"\\n        \"],[\"open-element\",\"p\",[]],[\"static-attr\",\"class\",\"text-center\"],[\"flush-element\"],[\"text\",\"No Item Selected\"],[\"close-element\"],[\"text\",\"\\n      \"],[\"close-element\"],[\"text\",\"\\n\"]],\"locals\":[]},{\"statements\":[[\"text\",\"      \"],[\"open-element\",\"div\",[]],[\"static-attr\",\"class\",\"panel panel-default\"],[\"flush-element\"],[\"text\",\"\\n        \"],[\"open-element\",\"div\",[]],[\"static-attr\",\"class\",\"panel-heading\"],[\"flush-element\"],[\"open-element\",\"h3\",[]],[\"static-attr\",\"class\",\"panel-title\"],[\"flush-element\"],[\"append\",[\"unknown\",[\"selectedItem\",\"title\"]],false],[\"close-element\"],[\"close-element\"],[\"text\",\"\\n        \"],[\"open-element\",\"div\",[]],[\"static-attr\",\"class\",\"panel-body\"],[\"flush-element\"],[\"text\",\"\\n          \"],[\"append\",[\"helper\",[\"sanitize-html\"],[[\"get\",[\"selectedItem\",\"description\"]]],null],false],[\"text\",\"\\n        \"],[\"close-element\"],[\"text\",\"\\n      \"],[\"close-element\"],[\"text\",\"\\n\"]],\"locals\":[]}],\"hasPartials\":false}", "meta": { "moduleName": "dummy/itempicker/index/template.hbs" } });
});
define('dummy/itempicker/layerpicker/controller', ['exports', 'ember'], function (exports, _ember) {
  exports['default'] = _ember['default'].Controller.extend({
    selectedItem: null,
    itemService: _ember['default'].inject.service('items-service'),
    url: 'http://dc.mapsqa.arcgis.com',
    catalog: [{
      name: 'Map Services',
      params: {
        query: {
          type: ['Map Service']
        }
      }
    }, {
      name: 'Feature Services',
      params: {
        query: {
          type: ['Feature Service']
        }
      }
    }],
    previewParams: {
      showLayers: true,
      forceLayerSelection: true
    },

    _isPublic: function _isPublic(item) {
      if (item.access && item.access !== 'public') {
        return {
          item: item,
          status: {
            status: 'warning',
            message: 'Warning! This dataset is privately shared. Your applications and data will not be visible to the public'
          }
        };
      } else {
        return {
          item: item,
          status: 'ok'
        };
      }
    },

    _validator: function _validator(item) {
      var _this = this;

      var copyItem = _ember['default'].copy(item, true);
      var isHttp = /^(http:)\/\//;
      var url = copyItem.url.replace(/\s+/g, '') + '?f=json';

      if (isHttp.test(url)) {
        var state = this._isPublic(copyItem);
        state.item.url = url;
        return this._useHttpsIfPossible(state);
      }
      return this._request(url).then(function (resp) {
        return _this._isPublic(copyItem);
      }, function (err) {
        if (err) {
          if (err.code === 499) {
            return {
              item: copyItem,
              status: {
                status: 'error',
                message: 'Error! The underlying service is secured. At this time we do not support secured datasets.'
              }
            };
          } else {
            return {
              item: copyItem,
              status: {
                status: 'error',
                message: 'Error! Requests to this dataset are timing out. Please check the service'
              }
            };
          }
        }
      });
    },

    _useHttpsIfPossible: function _useHttpsIfPossible(state) {
      var tempState = _ember['default'].copy(state, true);
      var httpsUrl = 'https' + tempState.item.url.substring(4);
      return this._request(httpsUrl).then(function (response) {
        tempState.item.url = httpsUrl;
        return tempState;
      }, function (err) {
        if (err.code === 499) {
          tempState.status = {
            status: 'error',
            message: 'Error! The underlying service is secured. At this time we do not support secured datasets.'
          };
        } else {
          tempState.status = {
            status: 'error',
            message: 'Error! This dataset uses HTTP. We only support using HTTPS'
          };
        }
        return tempState;
      });
    },

    _request: function _request(url) {
      return fetch(url).then(this.get('itemService').checkStatusAndParseJson);
    },
    actions: {
      onSelectItem: function onSelectItem(selected) {
        _ember['default'].$('#myModal').modal('hide');
        this.set('selectedItem', selected);
      },
      selectionValidator: function selectionValidator(item) {
        return this._validator(item);
      }
    }
  });
});
define('dummy/itempicker/layerpicker/route', ['exports', 'ember'], function (exports, _ember) {
  exports['default'] = _ember['default'].Route.extend({});
});
define("dummy/itempicker/layerpicker/template", ["exports"], function (exports) {
  exports["default"] = Ember.HTMLBars.template({ "id": "41LMSGCe", "block": "{\"statements\":[[\"open-element\",\"div\",[]],[\"static-attr\",\"class\",\"row\"],[\"flush-element\"],[\"text\",\"\\n  \"],[\"open-element\",\"div\",[]],[\"static-attr\",\"class\",\"col-sm-12\"],[\"flush-element\"],[\"text\",\"\\n    \"],[\"open-element\",\"h2\",[]],[\"flush-element\"],[\"text\",\"Layer Picker with Validator\"],[\"close-element\"],[\"text\",\"\\n    \"],[\"open-element\",\"p\",[]],[\"flush-element\"],[\"text\",\"We can force the item picker to return an item and a layer. To do this, we setup a catalog that only returns Map or Feature Service items.\\n    We also pass it \"],[\"open-element\",\"code\",[]],[\"flush-element\"],[\"text\",\"previewParams\"],[\"close-element\"],[\"text\",\" which tell the feature-service-preview component to force a layer selection.\"],[\"close-element\"],[\"text\",\"\\n  \"],[\"close-element\"],[\"text\",\"\\n  \"],[\"open-element\",\"div\",[]],[\"static-attr\",\"class\",\"col-sm-6\"],[\"flush-element\"],[\"text\",\"\\n    \"],[\"open-element\",\"h3\",[]],[\"flush-element\"],[\"text\",\"Validator\"],[\"close-element\"],[\"text\",\"\\n    \"],[\"open-element\",\"p\",[]],[\"flush-element\"],[\"text\",\"To validate items simply add an action \"],[\"open-element\",\"code\",[]],[\"flush-element\"],[\"text\",\"onSelectionValidator\"],[\"close-element\"],[\"close-element\"],[\"text\",\"\\n\\n      \"],[\"open-element\",\"pre\",[]],[\"flush-element\"],[\"text\",\"\\n\"],[\"append\",\"{{item-picker\\n      catalog=catalog\\n      selectAction=(action \\\"onSelectItem\\\")\\n      previewParams=previewParams\\n      onSelectionValidator=(action \\\"selectionValidator\\\") }}\",false],[\"text\",\"\\n    \"],[\"close-element\"],[\"text\",\"\\n  \"],[\"close-element\"],[\"text\",\"\\n  \"],[\"open-element\",\"div\",[]],[\"static-attr\",\"class\",\"col-sm-6\"],[\"flush-element\"],[\"text\",\"\\n    \"],[\"open-element\",\"h3\",[]],[\"flush-element\"],[\"text\",\"Selected Item \"],[\"close-element\"],[\"text\",\"\\n\"],[\"block\",[\"if\"],[[\"get\",[\"selectedItem\"]]],null,1,0],[\"text\",\"  \"],[\"close-element\"],[\"text\",\"\\n\\n  \"],[\"open-element\",\"div\",[]],[\"static-attr\",\"class\",\"col-sm-12\"],[\"flush-element\"],[\"text\",\"\\n    \"],[\"open-element\",\"h3\",[]],[\"flush-element\"],[\"text\",\"Modal Example \"],[\"close-element\"],[\"text\",\"\\n    \"],[\"open-element\",\"button\",[]],[\"static-attr\",\"type\",\"button\"],[\"static-attr\",\"class\",\"btn btn-primary\"],[\"static-attr\",\"data-toggle\",\"modal\"],[\"static-attr\",\"data-target\",\"#myModal\"],[\"flush-element\"],[\"text\",\"Select an Item\"],[\"close-element\"],[\"text\",\"\\n  \"],[\"close-element\"],[\"text\",\"\\n  \"],[\"open-element\",\"div\",[]],[\"static-attr\",\"class\",\"col-sm-12\"],[\"flush-element\"],[\"text\",\"\\n    \"],[\"open-element\",\"h3\",[]],[\"flush-element\"],[\"text\",\"Inline Panel Example\"],[\"close-element\"],[\"text\",\"\\n    \"],[\"open-element\",\"div\",[]],[\"static-attr\",\"class\",\"panel panel-default\"],[\"flush-element\"],[\"text\",\"\\n      \"],[\"open-element\",\"div\",[]],[\"static-attr\",\"class\",\"panel-heading\"],[\"flush-element\"],[\"text\",\"\\n        \"],[\"open-element\",\"h3\",[]],[\"static-attr\",\"class\",\"panel-title\"],[\"flush-element\"],[\"text\",\"Search ArcGIS.com for Items\"],[\"close-element\"],[\"text\",\"\\n      \"],[\"close-element\"],[\"text\",\"\\n      \"],[\"open-element\",\"div\",[]],[\"static-attr\",\"class\",\"panel-body\"],[\"flush-element\"],[\"text\",\"\\n        \"],[\"append\",[\"helper\",[\"item-picker\"],null,[[\"catalog\",\"selectAction\",\"previewParams\",\"onSelectionValidator\",\"rowCount\"],[[\"get\",[\"catalog\"]],[\"helper\",[\"action\"],[[\"get\",[null]],\"onSelectItem\"],null],[\"get\",[\"previewParams\"]],[\"helper\",[\"action\"],[[\"get\",[null]],\"selectionValidator\"],null],5]]],false],[\"text\",\"\\n      \"],[\"close-element\"],[\"text\",\"\\n    \"],[\"close-element\"],[\"text\",\"\\n  \"],[\"close-element\"],[\"text\",\"\\n\"],[\"close-element\"],[\"text\",\"\\n\\n\"],[\"comment\",\" Modal \"],[\"text\",\"\\n\"],[\"open-element\",\"div\",[]],[\"static-attr\",\"class\",\"modal fade\"],[\"static-attr\",\"id\",\"myModal\"],[\"static-attr\",\"tabindex\",\"-1\"],[\"static-attr\",\"role\",\"dialog\"],[\"static-attr\",\"aria-labelledby\",\"myModalLabel\"],[\"flush-element\"],[\"text\",\"\\n  \"],[\"open-element\",\"div\",[]],[\"static-attr\",\"class\",\"modal-dialog modal-lg\"],[\"static-attr\",\"role\",\"document\"],[\"flush-element\"],[\"text\",\"\\n    \"],[\"open-element\",\"div\",[]],[\"static-attr\",\"class\",\"modal-content\"],[\"flush-element\"],[\"text\",\"\\n      \"],[\"open-element\",\"div\",[]],[\"static-attr\",\"class\",\"modal-header\"],[\"flush-element\"],[\"text\",\"\\n        \"],[\"open-element\",\"button\",[]],[\"static-attr\",\"type\",\"button\"],[\"static-attr\",\"class\",\"close\"],[\"static-attr\",\"data-dismiss\",\"modal\"],[\"static-attr\",\"aria-label\",\"Close\"],[\"flush-element\"],[\"open-element\",\"span\",[]],[\"static-attr\",\"aria-hidden\",\"true\"],[\"flush-element\"],[\"text\",\"×\"],[\"close-element\"],[\"close-element\"],[\"text\",\"\\n        \"],[\"open-element\",\"h4\",[]],[\"static-attr\",\"class\",\"modal-title\"],[\"static-attr\",\"id\",\"myModalLabel\"],[\"flush-element\"],[\"text\",\"Default Usage\"],[\"close-element\"],[\"text\",\"\\n      \"],[\"close-element\"],[\"text\",\"\\n      \"],[\"open-element\",\"div\",[]],[\"static-attr\",\"class\",\"modal-body\"],[\"flush-element\"],[\"text\",\"\\n        \"],[\"append\",[\"helper\",[\"item-picker\"],null,[[\"catalog\",\"selectAction\",\"previewParams\",\"onSelectionValidator\"],[[\"get\",[\"catalog\"]],[\"helper\",[\"action\"],[[\"get\",[null]],\"onSelectItem\"],null],[\"get\",[\"previewParams\"]],[\"helper\",[\"action\"],[[\"get\",[null]],\"selectionValidator\"],null]]]],false],[\"text\",\"\\n      \"],[\"close-element\"],[\"text\",\"\\n    \"],[\"close-element\"],[\"text\",\"\\n  \"],[\"close-element\"],[\"text\",\"\\n\"],[\"close-element\"],[\"text\",\"\\n\"]],\"locals\":[],\"named\":[],\"yields\":[],\"blocks\":[{\"statements\":[[\"text\",\"      \"],[\"open-element\",\"div\",[]],[\"static-attr\",\"class\",\"alert alert-warning\"],[\"static-attr\",\"role\",\"alert\"],[\"flush-element\"],[\"text\",\"\\n        \"],[\"open-element\",\"p\",[]],[\"static-attr\",\"class\",\"text-center\"],[\"flush-element\"],[\"text\",\"No Item Selected\"],[\"close-element\"],[\"text\",\"\\n      \"],[\"close-element\"],[\"text\",\"\\n\"]],\"locals\":[]},{\"statements\":[[\"text\",\"      \"],[\"open-element\",\"div\",[]],[\"static-attr\",\"class\",\"panel panel-default\"],[\"flush-element\"],[\"text\",\"\\n        \"],[\"open-element\",\"div\",[]],[\"static-attr\",\"class\",\"panel-heading\"],[\"flush-element\"],[\"open-element\",\"h3\",[]],[\"static-attr\",\"class\",\"panel-title\"],[\"flush-element\"],[\"append\",[\"unknown\",[\"selectedItem\",\"title\"]],false],[\"close-element\"],[\"close-element\"],[\"text\",\"\\n        \"],[\"open-element\",\"div\",[]],[\"static-attr\",\"class\",\"panel-body\"],[\"flush-element\"],[\"text\",\"\\n          \"],[\"append\",[\"helper\",[\"sanitize-html\"],[[\"get\",[\"selectedItem\",\"description\"]]],null],false],[\"text\",\"\\n        \"],[\"close-element\"],[\"text\",\"\\n      \"],[\"close-element\"],[\"text\",\"\\n\"]],\"locals\":[]}],\"hasPartials\":false}", "meta": { "moduleName": "dummy/itempicker/layerpicker/template.hbs" } });
});
define('dummy/itempicker/multiselect/controller', ['exports', 'ember'], function (exports, _ember) {
  exports['default'] = _ember['default'].Controller.extend({
    selectedItem: null,

    actions: {
      onSelectItem: function onSelectItem(selected) {
        _ember['default'].$('#myModal').modal('hide');
        this.set('selectedItem', selected);
      }
    }
  });
});
define('dummy/itempicker/multiselect/route', ['exports', 'ember'], function (exports, _ember) {
  exports['default'] = _ember['default'].Route.extend({});
});
define("dummy/itempicker/multiselect/template", ["exports"], function (exports) {
  exports["default"] = Ember.HTMLBars.template({ "id": "NM4ieOD/", "block": "{\"statements\":[[\"open-element\",\"div\",[]],[\"static-attr\",\"class\",\"row\"],[\"flush-element\"],[\"text\",\"\\n  \"],[\"open-element\",\"div\",[]],[\"static-attr\",\"class\",\"col-sm-12\"],[\"flush-element\"],[\"text\",\"\\n    \"],[\"open-element\",\"h2\",[]],[\"flush-element\"],[\"text\",\"Picking multiple items\"],[\"close-element\"],[\"text\",\"\\n  \"],[\"close-element\"],[\"text\",\"\\n\\n  \"],[\"open-element\",\"div\",[]],[\"static-attr\",\"class\",\"col-sm-12\"],[\"flush-element\"],[\"text\",\"\\n    \"],[\"open-element\",\"h3\",[]],[\"flush-element\"],[\"text\",\"Inline Panel Example\"],[\"close-element\"],[\"text\",\"\\n    \"],[\"open-element\",\"div\",[]],[\"static-attr\",\"class\",\"panel panel-default\"],[\"flush-element\"],[\"text\",\"\\n      \"],[\"open-element\",\"div\",[]],[\"static-attr\",\"class\",\"panel-heading\"],[\"flush-element\"],[\"text\",\"\\n        \"],[\"open-element\",\"h3\",[]],[\"static-attr\",\"class\",\"panel-title\"],[\"flush-element\"],[\"text\",\"Search ArcGIS.com for Items\"],[\"close-element\"],[\"text\",\"\\n      \"],[\"close-element\"],[\"text\",\"\\n      \"],[\"open-element\",\"div\",[]],[\"static-attr\",\"class\",\"panel-body\"],[\"flush-element\"],[\"text\",\"\\n        \"],[\"append\",[\"helper\",[\"item-picker\"],null,[[\"selectMultiple\",\"searchItemsOnInit\",\"selectAction\"],[true,true,[\"helper\",[\"action\"],[[\"get\",[null]],\"onSelectItem\"],null]]]],false],[\"text\",\"\\n      \"],[\"close-element\"],[\"text\",\"\\n    \"],[\"close-element\"],[\"text\",\"\\n  \"],[\"close-element\"],[\"text\",\"\\n\"],[\"close-element\"],[\"text\",\"\\n\"]],\"locals\":[],\"named\":[],\"yields\":[],\"blocks\":[],\"hasPartials\":false}", "meta": { "moduleName": "dummy/itempicker/multiselect/template.hbs" } });
});
define('dummy/itempicker/portalopts/controller', ['exports', 'ember', 'ember-network/fetch'], function (exports, _ember, _emberNetworkFetch) {
  exports['default'] = _ember['default'].Controller.extend({

    getToken: function getToken(username, password, portalBaseUrl) {
      var url = 'https://' + portalBaseUrl + '/sharing/rest/generateToken?f=json';
      var referer = window.location.origin;
      var options = {
        method: 'POST',
        data: {
          username: username,
          password: password,
          expiration: 21600,
          referer: referer
        }
      };
      return this.requestUrl(url, options);
    },

    encodeForm: function encodeForm() {
      var form = arguments.length <= 0 || arguments[0] === undefined ? {} : arguments[0];

      // Ember.merge(form, this.get('defaultParams'));
      return Object.keys(form).map(function (key) {
        return [key, form[key]].map(encodeURIComponent).join('=');
      }).join('&');
    },
    /**
     * Make a request using a fully-formed url. This was added to allow
     * the hosted-fs-service to make calls to the hosted service using
     * its fully qualifed url.
     */
    requestUrl: function requestUrl(url, options, portalOpts) {
      var opts = options || {};
      if (opts.method && opts.method === 'POST') {
        // if we are POSTing, we need to manually set the content-type because AGO
        // actually does care about this header
        if (!opts.headers) {
          opts.headers = {
            'Accept': 'application/json, application/xml, text/plain, text/html, *.*',
            'Content-Type': 'application/x-www-form-urlencoded'
          };
        }
        // if a body was passed, we need to set the content type to multipart
        if (opts.body) {
          delete opts.headers['Content-Type']; // = 'multipart/form-data';
        }

        // if we have a data, create a formData from it
        if (opts.data) {
          var form = this.encodeForm(opts.data);
          opts.body = form;
        }
      }

      // append in the token
      // if portalOpts was provided use it even if it is undefined
      // this is so we can make unauthenticated requests by passing portalOpts without a token
      var token = portalOpts ? portalOpts.token : this.get('session.token');
      if (token) {
        // add a token
        if (url.indexOf('?') > -1) {
          url = url + '&token=' + token;
        } else {
          url = url + '?token=' + token;
        }
      }
      // Ember.debug('Portal Services making request to: ' + url);
      return (0, _emberNetworkFetch['default'])(url, opts).then(this.checkStatusAndParseJson);
    },
    /**
     * Fetch does not reject on non-200 responses, so we need to check this manually
     */
    checkStatusAndParseJson: function checkStatusAndParseJson(response) {
      var error = undefined;
      if (response.status >= 200 && response.status < 300) {
        // check if this is one of those groovy 200-but-a-400 things
        return response.json().then(function (json) {
          if (json.error) {
            // cook an error
            error = new Error(json.error.message);
            error.code = json.error.code || 404;
            error.response = response;
            _ember['default'].debug('Error in response:  ' + json.error.message);
            throw error;
          } else {
            return json;
          }
        });
      } else {
        // Response has non 200 http code
        error = new Error('Got ' + response.status + ' ' + response.statusText);
        throw error;
      }
    },
    expires: _ember['default'].computed('model.expiresAt', function () {
      if (this.get('model.expiresAt')) {
        return new Date(this.get('model.expiresAt')).toISOString();
      } else {
        return 'Not Set';
      }
    }),

    portalOpts: _ember['default'].computed('model.token', function () {
      if (this.get('model.token')) {
        return {
          portalHostname: this.get('model.portalBaseUrl'),
          token: this.get('model.token')
        };
      } else {
        return {
          portalHostname: this.get('session.portalHostname'),
          token: this.get('session.token')
        };
      }
    }),

    actions: {
      getToken: function getToken() {
        var _this = this;

        var un = this.get('username');
        var pw = this.get('password');
        var portalBaseUrl = this.get('model.portalBaseUrl');
        return this.getToken(un, pw, portalBaseUrl).then(function (result) {
          _this.set('model.token', result.token);
          _this.set('model.expiresAt', result.expires);
        });
      },
      onSelectItem: function onSelectItem(item) {
        alert('wat');
      }
    }
  });
});
define('dummy/itempicker/portalopts/route', ['exports', 'ember'], function (exports, _ember) {
  exports['default'] = _ember['default'].Route.extend({
    model: function model() {
      return {
        portalBaseUrl: '',
        username: '',
        password: ''
      };
    }
  });
});
define("dummy/itempicker/portalopts/template", ["exports"], function (exports) {
  exports["default"] = Ember.HTMLBars.template({ "id": "Hvy+t3pH", "block": "{\"statements\":[[\"open-element\",\"div\",[]],[\"static-attr\",\"class\",\"row\"],[\"flush-element\"],[\"text\",\"\\n  \"],[\"open-element\",\"div\",[]],[\"static-attr\",\"class\",\"col-sm-12\"],[\"flush-element\"],[\"text\",\"\\n    \"],[\"open-element\",\"h2\",[]],[\"flush-element\"],[\"text\",\"Searching other Portals\"],[\"close-element\"],[\"text\",\"\\n    \"],[\"open-element\",\"p\",[]],[\"flush-element\"],[\"text\",\"Sometimes it is useful to search across portals - to import items etc.\"],[\"close-element\"],[\"text\",\"\\n  \"],[\"close-element\"],[\"text\",\"\\n  \"],[\"open-element\",\"div\",[]],[\"static-attr\",\"class\",\"col-sm-12\"],[\"flush-element\"],[\"text\",\"\\n    \"],[\"open-element\",\"div\",[]],[\"static-attr\",\"class\",\"panel panel-default\"],[\"flush-element\"],[\"text\",\"\\n      \"],[\"open-element\",\"div\",[]],[\"static-attr\",\"class\",\"panel-heading\"],[\"flush-element\"],[\"text\",\"Portal Information\"],[\"close-element\"],[\"text\",\"\\n      \"],[\"open-element\",\"div\",[]],[\"static-attr\",\"class\",\"panel-body\"],[\"flush-element\"],[\"text\",\"\\n        \"],[\"open-element\",\"div\",[]],[\"static-attr\",\"class\",\"col-sm-4 form\"],[\"flush-element\"],[\"text\",\"\\n          \"],[\"open-element\",\"div\",[]],[\"static-attr\",\"class\",\"form-group\"],[\"flush-element\"],[\"text\",\"\\n            \"],[\"open-element\",\"label\",[]],[\"static-attr\",\"for\",\"exampleInputEmail1\"],[\"flush-element\"],[\"text\",\"Username\"],[\"close-element\"],[\"text\",\"\\n            \"],[\"append\",[\"helper\",[\"input\"],null,[[\"value\",\"class\",\"placeholder\"],[[\"get\",[\"username\"]],\"form-control\",\"username\"]]],false],[\"text\",\"\\n          \"],[\"close-element\"],[\"text\",\"\\n          \"],[\"open-element\",\"div\",[]],[\"static-attr\",\"class\",\"form-group\"],[\"flush-element\"],[\"text\",\"\\n            \"],[\"open-element\",\"label\",[]],[\"static-attr\",\"for\",\"exampleInputPassword1\"],[\"flush-element\"],[\"text\",\"Password\"],[\"close-element\"],[\"text\",\"\\n            \"],[\"append\",[\"helper\",[\"input\"],null,[[\"value\",\"type\",\"class\",\"placeholder\"],[[\"get\",[\"password\"]],\"password\",\"form-control\",\"password\"]]],false],[\"text\",\"\\n          \"],[\"close-element\"],[\"text\",\"\\n          \"],[\"open-element\",\"div\",[]],[\"static-attr\",\"class\",\"form-group\"],[\"flush-element\"],[\"text\",\"\\n            \"],[\"open-element\",\"label\",[]],[\"static-attr\",\"for\",\"exampleInputPassword1\"],[\"flush-element\"],[\"text\",\"Portal Url\"],[\"close-element\"],[\"text\",\"\\n            \"],[\"append\",[\"helper\",[\"input\"],null,[[\"value\",\"class\",\"placeholder\"],[[\"get\",[\"model\",\"portalBaseUrl\"]],\"form-control\",\"www.arcgis.com\"]]],false],[\"text\",\"\\n          \"],[\"close-element\"],[\"text\",\"\\n          \"],[\"open-element\",\"button\",[]],[\"static-attr\",\"class\",\"btn btn-default\"],[\"modifier\",[\"action\"],[[\"get\",[null]],\"getToken\"]],[\"flush-element\"],[\"text\",\"Get Token\"],[\"close-element\"],[\"text\",\"\\n        \"],[\"close-element\"],[\"text\",\"\\n        \"],[\"open-element\",\"div\",[]],[\"static-attr\",\"class\",\"col-sm-8\"],[\"flush-element\"],[\"text\",\"\\n          \"],[\"open-element\",\"h5\",[]],[\"flush-element\"],[\"text\",\"Current Token\"],[\"close-element\"],[\"text\",\"\\n          \"],[\"open-element\",\"p\",[]],[\"static-attr\",\"style\",\"word-wrap: break-word;\"],[\"flush-element\"],[\"append\",[\"unknown\",[\"model\",\"token\"]],false],[\"close-element\"],[\"text\",\"\\n          \"],[\"open-element\",\"p\",[]],[\"static-attr\",\"class\",\"small\"],[\"flush-element\"],[\"text\",\"Expires at: \"],[\"append\",[\"unknown\",[\"expires\"]],false],[\"close-element\"],[\"text\",\"\\n        \"],[\"close-element\"],[\"text\",\"\\n      \"],[\"close-element\"],[\"text\",\"\\n    \"],[\"close-element\"],[\"text\",\"\\n  \"],[\"close-element\"],[\"text\",\"\\n  \"],[\"open-element\",\"div\",[]],[\"static-attr\",\"class\",\"col-sm-12\"],[\"flush-element\"],[\"text\",\"\\n    \"],[\"open-element\",\"h2\",[]],[\"flush-element\"],[\"text\",\"Searching against: \"],[\"append\",[\"unknown\",[\"portalOpts\",\"portalHostname\"]],false],[\"close-element\"],[\"text\",\"\\n    \"],[\"append\",[\"helper\",[\"item-picker\"],null,[[\"portalOpts\",\"selectAction\"],[[\"get\",[\"portalOpts\"]],[\"helper\",[\"action\"],[[\"get\",[null]],\"onSelectItem\"],null]]]],false],[\"text\",\"\\n  \"],[\"close-element\"],[\"text\",\"\\n\"],[\"close-element\"],[\"text\",\"\\n\"]],\"locals\":[],\"named\":[],\"yields\":[],\"blocks\":[],\"hasPartials\":false}", "meta": { "moduleName": "dummy/itempicker/portalopts/template.hbs" } });
});
define('dummy/itempicker/route', ['exports', 'ember'], function (exports, _ember) {
  exports['default'] = _ember['default'].Route.extend({});
});
define('dummy/itempicker/specificid/controller', ['exports', 'ember'], function (exports, _ember) {
  exports['default'] = _ember['default'].Controller.extend({
    selectedItem: null,

    url: 'http://dc.mapsqa.arcgis.com',

    actions: {
      onSelectItem: function onSelectItem(selected) {
        _ember['default'].$('#myModal').modal('hide');
        this.set('selectedItem', selected);
      }
    }
  });
});
define('dummy/itempicker/specificid/route', ['exports', 'ember'], function (exports, _ember) {
  exports['default'] = _ember['default'].Route.extend({});
});
define("dummy/itempicker/specificid/template", ["exports"], function (exports) {
  exports["default"] = Ember.HTMLBars.template({ "id": "ZxuOK0B+", "block": "{\"statements\":[[\"open-element\",\"div\",[]],[\"static-attr\",\"class\",\"row\"],[\"flush-element\"],[\"text\",\"\\n  \"],[\"open-element\",\"div\",[]],[\"static-attr\",\"class\",\"col-sm-12\"],[\"flush-element\"],[\"text\",\"\\n    \"],[\"open-element\",\"h2\",[]],[\"flush-element\"],[\"text\",\"Specific ID\"],[\"close-element\"],[\"text\",\"\\n    \"],[\"open-element\",\"p\",[]],[\"flush-element\"],[\"text\",\"Users can search for specific items by inputting the ID\"],[\"close-element\"],[\"text\",\"\\n    \"],[\"open-element\",\"br\",[]],[\"flush-element\"],[\"close-element\"],[\"text\",\"\\n    \"],[\"open-element\",\"h5\",[]],[\"flush-element\"],[\"text\",\"Example IDs:\"],[\"close-element\"],[\"text\",\"\\n    \"],[\"open-element\",\"ul\",[]],[\"flush-element\"],[\"text\",\"\\n      \"],[\"open-element\",\"li\",[]],[\"flush-element\"],[\"open-element\",\"code\",[]],[\"flush-element\"],[\"text\",\"3da54bcb4ff0416c9f78821eea210b14\"],[\"close-element\"],[\"text\",\" - Recent Earthquakes (with popups)\"],[\"close-element\"],[\"text\",\"\\n      \"],[\"open-element\",\"li\",[]],[\"flush-element\"],[\"open-element\",\"code\",[]],[\"flush-element\"],[\"text\",\"0ad2e8245e2f4147a059af0431d2eff2\"],[\"close-element\"],[\"text\",\" - Story Map Crowdsource (beta)\"],[\"close-element\"],[\"text\",\"\\n      \"],[\"open-element\",\"li\",[]],[\"flush-element\"],[\"open-element\",\"code\",[]],[\"flush-element\"],[\"text\",\"56fd2f554f444f6597b1f9c30bfa8c68\"],[\"close-element\"],[\"text\",\" - ESS QA Org\"],[\"close-element\"],[\"text\",\"\\n    \"],[\"close-element\"],[\"text\",\"\\n  \"],[\"close-element\"],[\"text\",\"\\n\\n  \"],[\"open-element\",\"div\",[]],[\"static-attr\",\"class\",\"col-sm-12\"],[\"flush-element\"],[\"text\",\"\\n    \"],[\"open-element\",\"br\",[]],[\"flush-element\"],[\"close-element\"],[\"text\",\"\\n    \"],[\"open-element\",\"div\",[]],[\"static-attr\",\"class\",\"panel panel-default\"],[\"flush-element\"],[\"text\",\"\\n      \"],[\"open-element\",\"div\",[]],[\"static-attr\",\"class\",\"panel-heading\"],[\"flush-element\"],[\"text\",\"\\n        \"],[\"open-element\",\"h3\",[]],[\"static-attr\",\"class\",\"panel-title\"],[\"flush-element\"],[\"text\",\"Search ArcGIS.com for Items\"],[\"close-element\"],[\"text\",\"\\n      \"],[\"close-element\"],[\"text\",\"\\n      \"],[\"open-element\",\"div\",[]],[\"static-attr\",\"class\",\"panel-body\"],[\"flush-element\"],[\"text\",\"\\n        \"],[\"append\",[\"helper\",[\"item-picker\"],null,[[\"portalHostName\",\"searchItemsOnInit\",\"selectAction\"],[[\"get\",[\"url\"]],true,[\"helper\",[\"action\"],[[\"get\",[null]],\"onSelectItem\"],null]]]],false],[\"text\",\"\\n      \"],[\"close-element\"],[\"text\",\"\\n    \"],[\"close-element\"],[\"text\",\"\\n  \"],[\"close-element\"],[\"text\",\"\\n\"],[\"close-element\"],[\"text\",\"\\n\"]],\"locals\":[],\"named\":[],\"yields\":[],\"blocks\":[],\"hasPartials\":false}", "meta": { "moduleName": "dummy/itempicker/specificid/template.hbs" } });
});
define("dummy/itempicker/template", ["exports"], function (exports) {
  exports["default"] = Ember.HTMLBars.template({ "id": "CareZKVd", "block": "{\"statements\":[[\"append\",[\"unknown\",[\"outlet\"]],false],[\"text\",\"\\n\"]],\"locals\":[],\"named\":[],\"yields\":[],\"blocks\":[],\"hasPartials\":false}", "meta": { "moduleName": "dummy/itempicker/template.hbs" } });
});
define('dummy/itempicker/validation/controller', ['exports', 'ember', 'ember-network/fetch'], function (exports, _ember, _emberNetworkFetch) {
  exports['default'] = _ember['default'].Controller.extend({
    selectedItem: null,

    itemService: _ember['default'].inject.service('items-service'),

    _isPublic: function _isPublic(item) {
      if (item.access && item.access !== 'public') {
        return {
          item: item,
          status: {
            status: 'warning',
            message: 'Warning! This dataset is privately shared. Your applications and data will not be visible to the public'
          }
        };
      } else {
        return {
          item: item,
          status: 'ok'
        };
      }
    },

    _validator: function _validator(item) {
      var _this = this;

      var copyItem = _ember['default'].copy(item, true);
      var isHttp = /^(http:)\/\//;
      var url = copyItem.url.replace(/\s+/g, '') + '?f=json';

      if (isHttp.test(url)) {
        var state = this._isPublic(copyItem);
        state.item.url = url;
        return this._useHttpsIfPossible(state);
      }
      return this._request(url).then(function (resp) {
        return _this._isPublic(copyItem);
      }, function (err) {
        if (err) {
          if (err.code === 499) {
            return {
              item: copyItem,
              status: {
                status: 'error',
                message: 'Error! The underlying service is secured. At this time we do not support secured datasets.'
              }
            };
          } else {
            return {
              item: copyItem,
              status: {
                status: 'error',
                message: 'Error! Requests to this dataset are timing out. Please check the service'
              }
            };
          }
        }
      });
    },

    _useHttpsIfPossible: function _useHttpsIfPossible(state) {
      var tempState = _ember['default'].copy(state, true);
      var httpsUrl = 'https' + tempState.item.url.substring(4);
      return this._request(httpsUrl).then(function (response) {
        tempState.item.url = httpsUrl;
        return tempState;
      }, function (err) {
        if (err.code === 499) {
          tempState.status = {
            status: 'error',
            message: 'Error! The underlying service is secured. At this time we do not support secured datasets.'
          };
        } else {
          tempState.status = {
            status: 'error',
            message: 'Error! This dataset uses HTTP. We only support using HTTPS'
          };
        }
        return tempState;
      });
    },

    _request: function _request(url) {
      return (0, _emberNetworkFetch['default'])(url).then(this.get('itemService').checkStatusAndParseJson);
    },

    actions: {
      onSelectItem: function onSelectItem(selected) {
        _ember['default'].$('#myModal').modal('hide');
        this.set('selectedItem', selected);
      },

      selectionValidator: function selectionValidator(item) {
        return this._validator(item);
      }
    }
  });
});
define('dummy/itempicker/validation/route', ['exports', 'ember'], function (exports, _ember) {
  exports['default'] = _ember['default'].Route.extend({});
});
define("dummy/itempicker/validation/template", ["exports"], function (exports) {
  exports["default"] = Ember.HTMLBars.template({ "id": "dzVa4068", "block": "{\"statements\":[[\"open-element\",\"div\",[]],[\"static-attr\",\"class\",\"row\"],[\"flush-element\"],[\"text\",\"\\n  \"],[\"open-element\",\"div\",[]],[\"static-attr\",\"class\",\"col-sm-12\"],[\"flush-element\"],[\"text\",\"\\n    \"],[\"open-element\",\"h2\",[]],[\"flush-element\"],[\"text\",\"Validate Items\"],[\"close-element\"],[\"text\",\"\\n  \"],[\"close-element\"],[\"text\",\"\\n  \"],[\"open-element\",\"div\",[]],[\"static-attr\",\"class\",\"col-sm-6\"],[\"flush-element\"],[\"text\",\"\\n    \"],[\"open-element\",\"h3\",[]],[\"flush-element\"],[\"text\",\"Validator\"],[\"close-element\"],[\"text\",\"\\n    \"],[\"open-element\",\"p\",[]],[\"flush-element\"],[\"text\",\"To validate items simply add an action \"],[\"open-element\",\"code\",[]],[\"flush-element\"],[\"text\",\"onSelectionValidator\"],[\"close-element\"],[\"close-element\"],[\"text\",\"\\n\\n      \"],[\"open-element\",\"pre\",[]],[\"flush-element\"],[\"text\",\"\\n\"],[\"append\",\"{{item-picker\\n      selectAction=(action \\\"onSelectItem\\\")\\n      onSelectionValidator=(action \\\"selectionValidator\\\") }}\",false],[\"text\",\"\\n    \"],[\"close-element\"],[\"text\",\"\\n  \"],[\"close-element\"],[\"text\",\"\\n  \"],[\"open-element\",\"div\",[]],[\"static-attr\",\"class\",\"col-sm-6\"],[\"flush-element\"],[\"text\",\"\\n    \"],[\"open-element\",\"h3\",[]],[\"flush-element\"],[\"text\",\"Selected Item \"],[\"close-element\"],[\"text\",\"\\n\"],[\"block\",[\"if\"],[[\"get\",[\"selectedItem\"]]],null,1,0],[\"text\",\"  \"],[\"close-element\"],[\"text\",\"\\n\\n  \"],[\"open-element\",\"div\",[]],[\"static-attr\",\"class\",\"col-sm-12\"],[\"flush-element\"],[\"text\",\"\\n    \"],[\"open-element\",\"h3\",[]],[\"flush-element\"],[\"text\",\"Modal Example \"],[\"close-element\"],[\"text\",\"\\n    \"],[\"open-element\",\"button\",[]],[\"static-attr\",\"type\",\"button\"],[\"static-attr\",\"class\",\"btn btn-primary\"],[\"static-attr\",\"data-toggle\",\"modal\"],[\"static-attr\",\"data-target\",\"#myModal\"],[\"flush-element\"],[\"text\",\"Select an Item\"],[\"close-element\"],[\"text\",\"\\n  \"],[\"close-element\"],[\"text\",\"\\n  \"],[\"open-element\",\"div\",[]],[\"static-attr\",\"class\",\"col-sm-12\"],[\"flush-element\"],[\"text\",\"\\n    \"],[\"open-element\",\"h3\",[]],[\"flush-element\"],[\"text\",\"Inline Panel Example\"],[\"close-element\"],[\"text\",\"\\n    \"],[\"open-element\",\"div\",[]],[\"static-attr\",\"class\",\"panel panel-default\"],[\"flush-element\"],[\"text\",\"\\n      \"],[\"open-element\",\"div\",[]],[\"static-attr\",\"class\",\"panel-heading\"],[\"flush-element\"],[\"text\",\"\\n        \"],[\"open-element\",\"h3\",[]],[\"static-attr\",\"class\",\"panel-title\"],[\"flush-element\"],[\"text\",\"Search ArcGIS.com for Items\"],[\"close-element\"],[\"text\",\"\\n      \"],[\"close-element\"],[\"text\",\"\\n      \"],[\"open-element\",\"div\",[]],[\"static-attr\",\"class\",\"panel-body\"],[\"flush-element\"],[\"text\",\"\\n        \"],[\"append\",[\"helper\",[\"item-picker\"],null,[[\"selectAction\",\"onSelectionValidator\",\"rowCount\"],[[\"helper\",[\"action\"],[[\"get\",[null]],\"onSelectItem\"],null],[\"helper\",[\"action\"],[[\"get\",[null]],\"selectionValidator\"],null],5]]],false],[\"text\",\"\\n      \"],[\"close-element\"],[\"text\",\"\\n    \"],[\"close-element\"],[\"text\",\"\\n  \"],[\"close-element\"],[\"text\",\"\\n\"],[\"close-element\"],[\"text\",\"\\n\\n\"],[\"comment\",\" Modal \"],[\"text\",\"\\n\"],[\"open-element\",\"div\",[]],[\"static-attr\",\"class\",\"modal fade\"],[\"static-attr\",\"id\",\"myModal\"],[\"static-attr\",\"tabindex\",\"-1\"],[\"static-attr\",\"role\",\"dialog\"],[\"static-attr\",\"aria-labelledby\",\"myModalLabel\"],[\"flush-element\"],[\"text\",\"\\n  \"],[\"open-element\",\"div\",[]],[\"static-attr\",\"class\",\"modal-dialog modal-lg\"],[\"static-attr\",\"role\",\"document\"],[\"flush-element\"],[\"text\",\"\\n    \"],[\"open-element\",\"div\",[]],[\"static-attr\",\"class\",\"modal-content\"],[\"flush-element\"],[\"text\",\"\\n      \"],[\"open-element\",\"div\",[]],[\"static-attr\",\"class\",\"modal-header\"],[\"flush-element\"],[\"text\",\"\\n        \"],[\"open-element\",\"button\",[]],[\"static-attr\",\"type\",\"button\"],[\"static-attr\",\"class\",\"close\"],[\"static-attr\",\"data-dismiss\",\"modal\"],[\"static-attr\",\"aria-label\",\"Close\"],[\"flush-element\"],[\"open-element\",\"span\",[]],[\"static-attr\",\"aria-hidden\",\"true\"],[\"flush-element\"],[\"text\",\"×\"],[\"close-element\"],[\"close-element\"],[\"text\",\"\\n        \"],[\"open-element\",\"h4\",[]],[\"static-attr\",\"class\",\"modal-title\"],[\"static-attr\",\"id\",\"myModalLabel\"],[\"flush-element\"],[\"text\",\"Default Usage\"],[\"close-element\"],[\"text\",\"\\n      \"],[\"close-element\"],[\"text\",\"\\n      \"],[\"open-element\",\"div\",[]],[\"static-attr\",\"class\",\"modal-body\"],[\"flush-element\"],[\"text\",\"\\n        \"],[\"append\",[\"helper\",[\"item-picker\"],null,[[\"selectAction\",\"onSelectionValidator\"],[[\"helper\",[\"action\"],[[\"get\",[null]],\"onSelectItem\"],null],[\"helper\",[\"action\"],[[\"get\",[null]],\"selectionValidator\"],null]]]],false],[\"text\",\"\\n      \"],[\"close-element\"],[\"text\",\"\\n    \"],[\"close-element\"],[\"text\",\"\\n  \"],[\"close-element\"],[\"text\",\"\\n\"],[\"close-element\"],[\"text\",\"\\n\"]],\"locals\":[],\"named\":[],\"yields\":[],\"blocks\":[{\"statements\":[[\"text\",\"      \"],[\"open-element\",\"div\",[]],[\"static-attr\",\"class\",\"alert alert-warning\"],[\"static-attr\",\"role\",\"alert\"],[\"flush-element\"],[\"text\",\"\\n        \"],[\"open-element\",\"p\",[]],[\"static-attr\",\"class\",\"text-center\"],[\"flush-element\"],[\"text\",\"No Item Selected\"],[\"close-element\"],[\"text\",\"\\n      \"],[\"close-element\"],[\"text\",\"\\n\"]],\"locals\":[]},{\"statements\":[[\"text\",\"      \"],[\"open-element\",\"div\",[]],[\"static-attr\",\"class\",\"panel panel-default\"],[\"flush-element\"],[\"text\",\"\\n        \"],[\"open-element\",\"div\",[]],[\"static-attr\",\"class\",\"panel-heading\"],[\"flush-element\"],[\"open-element\",\"h3\",[]],[\"static-attr\",\"class\",\"panel-title\"],[\"flush-element\"],[\"append\",[\"unknown\",[\"selectedItem\",\"title\"]],false],[\"close-element\"],[\"close-element\"],[\"text\",\"\\n        \"],[\"open-element\",\"div\",[]],[\"static-attr\",\"class\",\"panel-body\"],[\"flush-element\"],[\"text\",\"\\n          \"],[\"append\",[\"helper\",[\"sanitize-html\"],[[\"get\",[\"selectedItem\",\"description\"]]],null],false],[\"text\",\"\\n        \"],[\"close-element\"],[\"text\",\"\\n      \"],[\"close-element\"],[\"text\",\"\\n\"]],\"locals\":[]}],\"hasPartials\":false}", "meta": { "moduleName": "dummy/itempicker/validation/template.hbs" } });
});
define('dummy/mixins/active-link', ['exports', 'ember-cli-active-link-wrapper/mixins/active-link'], function (exports, _emberCliActiveLinkWrapperMixinsActiveLink) {
  exports['default'] = _emberCliActiveLinkWrapperMixinsActiveLink['default'];
});
define('dummy/parse-url/util', ['exports', 'ember-arcgis-server-services/parse-url/util'], function (exports, _emberArcgisServerServicesParseUrlUtil) {
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function get() {
      return _emberArcgisServerServicesParseUrlUtil['default'];
    }
  });
});
define('dummy/request/util', ['exports', 'ember-arcgis-server-services/request/util'], function (exports, _emberArcgisServerServicesRequestUtil) {
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function get() {
      return _emberArcgisServerServicesRequestUtil['default'];
    }
  });
});
define('dummy/resolver', ['exports', 'ember-resolver'], function (exports, _emberResolver) {
  exports['default'] = _emberResolver['default'];
});
define('dummy/router', ['exports', 'ember', 'dummy/config/environment'], function (exports, _ember, _dummyConfigEnvironment) {

  var Router = _ember['default'].Router.extend({
    location: _dummyConfigEnvironment['default'].locationType,
    rootURL: _dummyConfigEnvironment['default'].rootURL
  });

  Router.map(function () {
    this.route('itempicker', function () {
      this.route('multiselect');
      this.route('facets');
      this.route('validation');
      this.route('portalopts');
      this.route('defaultcatalog');
      this.route('specificid');
      this.route('layerpicker');
    });

    this.route('itemPicker', function () {});
  });

  exports['default'] = Router;
});
define('dummy/services/feature-service', ['exports', 'ember-arcgis-server-services/services/feature-service'], function (exports, _emberArcgisServerServicesServicesFeatureService) {
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function get() {
      return _emberArcgisServerServicesServicesFeatureService['default'];
    }
  });
});
define('dummy/services/folders-service', ['exports', 'ember-arcgis-portal-services/services/folders-service'], function (exports, _emberArcgisPortalServicesServicesFoldersService) {
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function get() {
      return _emberArcgisPortalServicesServicesFoldersService['default'];
    }
  });
});
define('dummy/services/geocode-service', ['exports', 'ember-arcgis-portal-services/services/geocode-service'], function (exports, _emberArcgisPortalServicesServicesGeocodeService) {
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function get() {
      return _emberArcgisPortalServicesServicesGeocodeService['default'];
    }
  });
});
define('dummy/services/groups-service', ['exports', 'ember-arcgis-portal-services/services/groups-service'], function (exports, _emberArcgisPortalServicesServicesGroupsService) {
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function get() {
      return _emberArcgisPortalServicesServicesGroupsService['default'];
    }
  });
});
define('dummy/services/hosted-service', ['exports', 'ember-arcgis-portal-services/services/hosted-service'], function (exports, _emberArcgisPortalServicesServicesHostedService) {
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function get() {
      return _emberArcgisPortalServicesServicesHostedService['default'];
    }
  });
});
define('dummy/services/image-service', ['exports', 'ember-arcgis-server-services/services/image-service'], function (exports, _emberArcgisServerServicesServicesImageService) {
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function get() {
      return _emberArcgisServerServicesServicesImageService['default'];
    }
  });
});
define('dummy/services/intl', ['exports', 'ember-intl/services/intl'], function (exports, _emberIntlServicesIntl) {
  /**
   * Copyright 2015, Yahoo! Inc.
   * Copyrights licensed under the New BSD License. See the accompanying LICENSE file for terms.
   */

  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function get() {
      return _emberIntlServicesIntl['default'];
    }
  });
});
define('dummy/services/items-service', ['exports', 'ember-arcgis-portal-services/services/items-service'], function (exports, _emberArcgisPortalServicesServicesItemsService) {
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function get() {
      return _emberArcgisPortalServicesServicesItemsService['default'];
    }
  });
});
define('dummy/services/map-service', ['exports', 'ember-arcgis-server-services/services/map-service'], function (exports, _emberArcgisServerServicesServicesMapService) {
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function get() {
      return _emberArcgisServerServicesServicesMapService['default'];
    }
  });
});
define('dummy/services/oauth-service', ['exports', 'ember-arcgis-portal-services/services/oauth-service'], function (exports, _emberArcgisPortalServicesServicesOauthService) {
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function get() {
      return _emberArcgisPortalServicesServicesOauthService['default'];
    }
  });
});
define('dummy/services/popup', ['exports', 'torii/services/popup'], function (exports, _toriiServicesPopup) {
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function get() {
      return _toriiServicesPopup['default'];
    }
  });
});
define('dummy/services/portal-service', ['exports', 'ember-arcgis-portal-services/services/portal-service'], function (exports, _emberArcgisPortalServicesServicesPortalService) {
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function get() {
      return _emberArcgisPortalServicesServicesPortalService['default'];
    }
  });
});
define('dummy/services/sharing-service', ['exports', 'ember-arcgis-portal-services/services/sharing-service'], function (exports, _emberArcgisPortalServicesServicesSharingService) {
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function get() {
      return _emberArcgisPortalServicesServicesSharingService['default'];
    }
  });
});
define('dummy/services/torii-session', ['exports', 'torii/services/session'], function (exports, _toriiServicesSession) {
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function get() {
      return _toriiServicesSession['default'];
    }
  });
});
define('dummy/services/torii', ['exports', 'torii/services/torii'], function (exports, _toriiServicesTorii) {
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function get() {
      return _toriiServicesTorii['default'];
    }
  });
});
define('dummy/services/user-service', ['exports', 'ember-arcgis-portal-services/services/user-service'], function (exports, _emberArcgisPortalServicesServicesUserService) {
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function get() {
      return _emberArcgisPortalServicesServicesUserService['default'];
    }
  });
});
define('dummy/services/vector-service', ['exports', 'ember-arcgis-server-services/services/vector-service'], function (exports, _emberArcgisServerServicesServicesVectorService) {
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function get() {
      return _emberArcgisServerServicesServicesVectorService['default'];
    }
  });
});
define('dummy/should-add-token/util', ['exports', 'ember-arcgis-server-services/should-add-token/util'], function (exports, _emberArcgisServerServicesShouldAddTokenUtil) {
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function get() {
      return _emberArcgisServerServicesShouldAddTokenUtil['default'];
    }
  });
});
define("dummy/snippets", ["exports"], function (exports) {
  exports["default"] = {};
});
define("dummy/templates/components/code-snippet", ["exports"], function (exports) {
  exports["default"] = Ember.HTMLBars.template({ "id": "mJxgtHOS", "block": "{\"statements\":[[\"append\",[\"unknown\",[\"source\"]],false],[\"text\",\"\\n\"]],\"locals\":[],\"named\":[],\"yields\":[],\"blocks\":[],\"hasPartials\":false}", "meta": { "moduleName": "dummy/templates/components/code-snippet.hbs" } });
});
define('dummy/torii-adapters/application', ['exports', 'dummy/torii-adapters/arcgis-oauth-bearer'], function (exports, _dummyToriiAdaptersArcgisOauthBearer) {
  exports['default'] = _dummyToriiAdaptersArcgisOauthBearer['default'];
});
define('dummy/torii-adapters/arcgis-oauth-bearer', ['exports', 'ember', 'dummy/config/environment'], function (exports, _ember, _dummyConfigEnvironment) {
  exports['default'] = _ember['default'].Object.extend({

    authCookieName: 'esri_auth',

    portalBaseUrl: 'https://www.arcgis.com/',

    signoutUrl: _ember['default'].computed('portalBaseUrl', function () {
      // baseURL is basically deprecated, in preference of rootURL.
      // So, we will use baseURL if present, but prefer rootURL
      var base = _dummyConfigEnvironment['default'].baseURL || _dummyConfigEnvironment['default'].rootURL;
      return this.get('portalBaseUrl') + '/sharing/rest/oauth2/signout?redirect_uri=' + window.location.protocol + '//' + window.location.host + base;
    }),

    /**
     * Initialize the adapter
     * As it starts up we basically check for various configuration
     * options, and update the defaults
     */
    init: function init() {
      this._super.init && this._super.init.apply(this, arguments);
      if (_dummyConfigEnvironment['default'].APP.authCookieName) {
        this.set('authCookieName', _dummyConfigEnvironment['default'].APP.authCookieName);
      }
      // Unless working against a portal instance, this can be left as the default
      if (_dummyConfigEnvironment['default'].torii.providers['arcgis-oauth-bearer'].portalUrl) {
        this.set('portalBaseUrl', _dummyConfigEnvironment['default'].torii.providers['arcgis-oauth-bearer'].portalUrl);
      } else {
        _ember['default'].warn('ENV.torii.providers[\'arcgis-oauth-bearer\'].portalUrl not defined. Defaulting to https://www.arcgis.com');
      }
    },

    /**
     * Promisified getJson
     */
    _getJson: function _getJson(url) {
      return new _ember['default'].RSVP.Promise(function (resolve, reject) {
        _ember['default'].$.ajax({
          url: url,
          dataType: 'json',
          success: _ember['default'].run.bind(null, function (data) {
            if (data.error) {
              _ember['default'].debug('torii:adapter:arcgis-oauth-bearer:open portals/self call shows token was not valid.');
              reject(data);
            } else {
              resolve(data);
            }
          }),
          error: _ember['default'].run.bind(null, reject)
        });
      });
    },

    /**
     * Open a session by fetching portal/self from
     * the portal
     */
    open: function open(authentication) {
      var _this = this;

      var token = authentication.authorizationToken.token;
      var expires = Date.now() + authentication.authorizationToken.expires_in * 1000; // seconds from now

      // Ember.debug('torii:adapter:arcgis-oauth-bearer:open token...' + token);
      var portalSelfUrl = this.get('portalBaseUrl') + '/sharing/rest/portals/self?f=json&token=' + token;

      var signoutUrl = this.get('signoutUrl');
      // Ember.debug('signoutUrl ' + signoutUrl);
      // now use the token to call portal self
      // TODO: If we have a cookie but the token is invalid (i.e. for a different portal)
      // then this call will return a 499-in-a-200.
      return this._getJson(portalSelfUrl).then(function (portal) {
        _ember['default'].debug('torii:adapter:arcgis-oauth-bearer:open got response from portal/self & assigning to session');

        if (_dummyConfigEnvironment['default'].torii.providers['arcgis-oauth-bearer'].loadGroups) {
          // make a request to get user's groups
          var username = portal.user.username;
          var userUrl = _this.get('portalBaseUrl') + '/sharing/rest/community/users/' + username + '?f=json&token=' + token;
          return _ember['default'].RSVP.hash({
            portalResponse: portal,
            userResponse: _this._getJson(userUrl)
          });
        } else {
          return {
            portalResponse: portal,
            userResponse: portal.user
          };
        }
      }).then(function (result) {
        // separate the portal and user so they are separate props on the session object
        var user = result.userResponse;
        var portal = result.portalResponse;
        // drop the user node from the portalSelf response
        delete portal.user;

        // TODO find a cleaner means to handle this iframe jiggery pokery
        if (!_dummyConfigEnvironment['default'].torii.providers['arcgis-oauth-bearer'].display || _dummyConfigEnvironment['default'].torii.providers['arcgis-oauth-bearer'].display !== 'iframe') {
          // basically - if we are not using the iframe, we need to handle the
          // login persistence ourselves so cook up an object and stuff it
          // in localStorage
          var cookieData = _this._createCookieData(token, expires, user, portal);
          _this._store('torii-provider-arcgis', cookieData);
        }

        return {
          portal: portal,
          currentUser: user,
          token: token,
          signoutUrl: signoutUrl
        };
      });
    },

    /**
     * Close a session (aka log out the user)
     */
    close: function close() {
      return new _ember['default'].RSVP.Promise(function (resolve /*, reject */) {
        // always nuke the localStorage things
        if (window.localStorage) {
          window.localStorage.removeItem('torii-provider-arcgis');
        }
        // TODO find a cleaner means to handle this iframe jiggery pokery
        if (_dummyConfigEnvironment['default'].torii.providers['arcgis-oauth-bearer'].display && _dummyConfigEnvironment['default'].torii.providers['arcgis-oauth-bearer'].display === 'iframe') {
          throw new Error('To log out of ArcGIS Online, you should redirect the browser to ' + this.get('signoutUrl'));
        }
        resolve();
      });
    },

    /**
     * Rehydrate a session by looking for the esri_auth cookie
     */
    fetch: function fetch() {
      console.debug('torii-provider-arcgis.fetch called...');
      var self = this;
      return new _ember['default'].RSVP.Promise(function (resolve, reject) {
        // try for a cookie...
        var result = self._checkCookie(self.get('authCookieName'));
        // failing that look in localStorage
        if (!result.valid) {
          result = self._checkLocalStorage('torii-provider-arcgis');
        }

        if (result.valid) {
          // degate to the ope function to do the work...
          _ember['default'].debug('Fetch has valid client-side information... opening session...');

          // calcuate expires_in based on current timestamp
          var now = Date.now();
          var expiresIn = (result.authData.expires - now) / 1000;

          // create the expected object for open
          var authData = {
            authorizationToken: {
              token: result.authData.token,
              expires_in: expiresIn
            }
          };
          resolve(self.open(authData));
        } else {
          _ember['default'].debug('Fetch did not find valid client-side information... rejecting');
          reject();
        }
      });
    },

    /**
     * Checks local storage for auth data
     */
    _checkLocalStorage: function _checkLocalStorage(keyName) {
      _ember['default'].debug('torii:adapter:arcgis-oauth-bearer:checkLocalStorage keyName ' + keyName);
      var result = {
        valid: false
      };

      if (window.localStorage) {
        var stored = window.localStorage.getItem(keyName);
        if (stored) {
          result.authData = JSON.parse(stored);
          if (new Date(result.authData.expires) > new Date()) {
            _ember['default'].debug('torii:adapter:arcgis-oauth-bearer:checkLocalStorage authdata has not expired yet ');
            result.valid = true;
          }
        }
      }
      return result;
    },

    /**
     * Stores auth data in local storage
     */
    _store: function _store(keyName, object) {
      if (window.localStorage) {
        window.localStorage.setItem(keyName, JSON.stringify(object));
      }
    },

    /**
     * Helper to ensure consisten serialization
     */
    _createCookieData: function _createCookieData(token, expires, user, portal) {
      var data = {
        token: token,
        accountId: user.orgId,
        create: user.created,
        culture: user.culture,
        customBaseUrl: portal.customBaseUrl,
        email: user.username,
        expires: expires,
        persistent: false,
        region: user.region,
        role: user.role
      };
      return data;
    },

    /**
     * Check for and validate a cookie by name
     */
    _checkCookie: function _checkCookie(cookieName) {
      var result = {
        valid: false
      };

      var cookieString = decodeURIComponent(document.cookie.replace(new RegExp('(?:(?:^|.*;)\\s*' + encodeURIComponent(cookieName).replace(/[\-\.\+\*]/g, '\\$&') + '\\s*\\=\\s*([^;]*).*$)|^.*$'), '$1')) || null; // eslint-disable-line

      if (cookieString) {
        // Ember.debug('torii:adapter:arcgis-oauth-bearer:checkCookie: Found cookie...');
        // parse it
        var cookieData = JSON.parse(cookieString);
        // check if it has expired

        if (new Date(cookieData.expires) > new Date()) {
          // ok it's still valid... we still don't know if
          // it is valid for the env we are working with so but we will return it
          _ember['default'].debug('torii:adapter:arcgis-oauth-bearer:checkCookie: cookie has not expired yet...');
        } else {
          // There is an occasional bug where it seems that we can have valid tokens
          // with expires values in the past. Where this gets really odd is that
          // when we make a call to /authorize ahd this borked cookie is sent along
          // the cookie is not overwritten w/ an updated cookie.
          // Thus, we return the auth data in either case
          _ember['default'].debug('torii:adapter:arcgis-oauth-bearer:checkCookie: cookie has expired - but we are still going to try to use it');
        }
        result.authData = cookieData;
        result.valid = true;
      }
      return result;
    }

  });
});
define('dummy/torii-provider-arcgis/tests/modules/torii-provider-arcgis/mixins/gatekeeper', ['exports', 'ember'], function (exports, _ember) {
  exports['default'] = _ember['default'].Mixin.create({

    /**
     * Org Admins must have the org_admin role and
     * NO roleId
     */
    isAdmin: function isAdmin() {
      var user = this.get('currentUser');
      var val = false;
      if (user && user.role === 'org_admin' && !user.roleId) {
        val = true;
      }
      return val;
    },

    /**
     * Check if the current user is in a specific role
     * In ArcGIS Online, users can only have a single role.
     */
    isInRole: function isInRole(role) {
      var user = this.get('currentUser');

      if (user) {
        return user.role === role;
      } else {
        return false;
      }
    },

    /**
     * Check if the user is a member of a group
     */
    isGroupMember: function isGroupMember(groupId) {
      var user = this.get('currentUser');
      if (!_ember['default'].isArray(user.groups)) {
        // if the provider has not been configured to load groups, show a warning...
        _ember['default'].debug('Session.isGroupMember was called, but torii-provider-arcgis has not been configured to fetch user groups. Please see documentation. (https://github.com/dbouwman/torii-provider-arcgis#ember-cli-torii-provider-arcgis)');
        return false;
      } else {
        // look up the group in the groups array by it's Id
        var group = user.groups.find(function (g) {
          return g.id === groupId;
        });
        if (group) {
          return true;
        } else {
          return false;
        }
      }
    },

    /**
     * Is the specified priviledge is the list of priviledges
     * assigned to the current user?
     */
    hasPrivilege: function hasPrivilege(privilege) {
      var user = this.get('currentUser');
      if (user) {
        return user.privileges.indexOf(privilege) > -1;
      } else {
        return false;
      }
    },

    /**
     * Does the current user have any of the passed in privileges
     */
    hasAnyPrivilege: function hasAnyPrivilege(privileges) {
      var result = false;
      // check that we have an array
      if (_ember['default'].isArray(privileges)) {
        for (var i = 0; i < privileges.length; i++) {
          if (this.hasPrivilege(privileges[i])) {
            result = true;
          }
        }
      } else {
        _ember['default'].warn('Session.hasAnyPrivilege was not passed an array. Please use .hasPrivilege instead.');
      }
      return result;
    },

    /**
     * Does the current user have ALL the passed in privileges
     */
    hasAllPrivileges: function hasAllPrivileges(privileges) {
      var result = false;
      // check that we have an array
      if (_ember['default'].isArray(privileges)) {
        var chks = privileges.map(this.hasPrivilege, this);
        // ensure that all checks return true...
        result = chks.indexOf(false) === -1;
      } else {
        _ember['default'].warn('Session.hasAllPrivileges was not passed an array. Please use .hasPrivilege instead.');
      }
      return result;
    },

    /**
     * Allows for quick check if a user is in a set of roles
     */
    isInAnyRole: function isInAnyRole(roles) {
      var result = false;
      // check that we have an array
      if (_ember['default'].isArray(roles)) {
        for (var i = 0; i < roles.length; i++) {
          if (this.isInRole(roles[i])) {
            result = true;
          }
        }
      } else {
        _ember['default'].warn('Session.isInAnyRole was not passed an array. Please use .isInRole instead.');
      }
      return result;
    },

    /**
     * Check if the user is in a specific org.
     * This is used in conjunction with feature flags
     * to control access to features under development
     */
    isInOrg: function isInOrg(orgId) {
      var portal = this.get('portal');
      if (portal) {
        return portal.id === orgId;
      } else {
        return false;
      }
    },

    /**
     * Allows for a quick check if a user is a member of
     * any of a set of orgs
     */
    isInAnyOrg: function isInAnyOrg(orgs) {
      var result = false;
      // check that we have an array
      if (_ember['default'].isArray(orgs)) {
        for (var i = 0; i < orgs.length; i++) {
          if (this.isInOrg(orgs[i])) {
            result = true;
          }
        }
      } else {
        _ember['default'].warn('Session.isInAnyOrg was not passed an array. Please use .isInOrg instead.');
      }
      return result;
    },

    /**
     * Returns a protocol-less hostname for the Portal
     */
    portalHostname: _ember['default'].computed('isAuthenticated', function () {
      var result = undefined;
      if (this.get('isAuthenticated')) {
        var portal = this.get('portal');
        var urlKey = portal.urlKey;
        result = portal.portalHostname;

        if (urlKey) {
          result = urlKey + '.' + portal.customBaseUrl;
        }
      } else {
        var config = _ember['default'].getOwner(this).resolveRegistration('config:environment');
        result = config.torii.providers['arcgis-oauth-bearer'].portalUrl;
        result = result.replace(/https?:\/\//, '');
      }
      return result;
    }),

    isLevelOne: _ember['default'].computed.equal('currentUser.level', '1'),

    isLevelTwo: _ember['default'].computed.equal('currentUser.level', '2'),

    portalHostName: _ember['default'].computed.deprecatingAlias('portalHostname', {
      id: 'torii-provider-arcgis::portalHostName',
      until: '10.0.0'
    }),

    /**
     * Deprecated - use portalHostName
     */
    orgPortalUrl: _ember['default'].computed.deprecatingAlias('portalHostName', {
      id: 'torii-provider-arcgis::orgPortalUrl',
      until: '10.0.0'
    })
  });
});
/**
 * mixins/gatekeeper.js
 *
 * Used to extend the ToriiSession with ArcGIS specific helper methods
 *
 */
define('dummy/torii-providers/arcgis-oauth-bearer', ['exports', 'torii/providers/oauth2-bearer', 'torii/configuration', 'dummy/config/environment', 'ember'], function (exports, _toriiProvidersOauth2Bearer, _toriiConfiguration, _dummyConfigEnvironment, _ember) {

  var ArcGISOAuth = _toriiProvidersOauth2Bearer['default'].extend({
    name: 'arcgis-oauth-bearer',

    // Allow the portalUrl to be passed in, but default to ago
    portalUrl: (0, _toriiConfiguration.configurable)('portalUrl', 'https://www.arcgis.com'),

    // construct the authorize end-point url based on the portalUrl
    baseUrl: (0, _toriiConfiguration.configurable)('baseUrl', function () {
      return this.get('portalUrl') + '/sharing/oauth2/authorize';
    }),

    showSocialLogins: (0, _toriiConfiguration.configurable)('showSocialLogins', false),

    display: (0, _toriiConfiguration.configurable)('display', 'default'),

    expiration: (0, _toriiConfiguration.configurable)('expiration', 20160),

    locale: (0, _toriiConfiguration.configurable)('locale', 'en-us'),

    // These params must be present in on the provider
    requiredUrlParams: ['response_type', 'showSocialLogins', 'display', 'expiration', 'locale'],
    // additional params that this provider accepts
    optionalUrlParams: ['client', 'parent'],
    // params the provider will extract from the redirected url
    responseParams: ['token', 'state', 'expires_in'],

    customRedirectUri: (0, _toriiConfiguration.configurable)('customRedirectUri', ''),

    _currentBaseUrl: function _currentBaseUrl() {
      return [window.location.protocol, '//', window.location.host].join('');
    },
    /**
     * shows the pop-up/iframe - we override the base implementation so
     * we can merge the passed in options into the object before we show
     * the login
     */
    open: function open(options) {
      options = options || {};

      if (this.get('display') === 'iframe') {
        // if we are using an iframe, we need to set the parent to the current domain
        options.parent = window.location.protocol + '//' + window.location.hostname;
      }

      // since we want any passed in options to map up to the optional params...
      this.setProperties(options);

      var uri = '';
      // Check for a customized redirect uri. This can be useful if your app
      // is hosted by rails or some other server-side rendering system, or
      // if you have multiple apps fronted by nginx and you want to centralize
      // the redirects.
      if (this.get('customRedirectUri')) {
        uri = this.get('customRedirectUri');
      } else {
        // Set the redirectUri to the redirect.html that's in the addon's public
        // folder and exposed at /<addon-name>/redirect.html
        // By default torii redirects to the whole ember app, which can be really slow
        // given that it's just 10 lines of js that's needed
        if (_dummyConfigEnvironment['default'].baseURL || _dummyConfigEnvironment['default'].rootURL) {
          var path = _dummyConfigEnvironment['default'].baseURL || _dummyConfigEnvironment['default'].rootURL;
          uri = this._currentBaseUrl() + path + 'torii-provider-arcgis/redirect.html';
        } else {
          uri = this._currentBaseUrl() + '/' + 'torii-provider-arcgis/redirect.html';
        }
      }

      this.set('redirectUri', uri);

      var name = this.get('name');
      var url = this.buildUrl();
      var redirectUri = this.get('redirectUri');
      var responseParams = this.get('responseParams');

      return this.get('popup').open(url, responseParams, options).then(function (authData) {
        var missingResponseParams = [];

        responseParams.forEach(function (param) {
          if (authData[param] === undefined) {
            missingResponseParams.push(param);
          }
        });

        if (missingResponseParams.length) {
          throw new Error('The response from the provider is missing ' + 'these required response params: ' + missingResponseParams.join(', '));
        }
        _ember['default'].debug('session.open is returning with data...');
        return {
          authorizationToken: authData,
          provider: name,
          redirectUri: redirectUri
        };
      });
    }

  });

  exports['default'] = ArcGISOAuth;
});
/**
 * arcgis-oauth.js
 *
 * torii provider that works with ArcGIS.com oauth
 */
define("dummy/translations/en-us", ["exports"], function (exports) {
  exports["default"] = { "ember-arcgis-portal-components": { "itemPicker": { "aria": { "chartable-icon": "Attribute can be charted", "disabled": "Disabled", "first_pg": "First Page", "last_pg": "Last Page", "next": "Next", "prev": "Previous" }, "buttons": { "back": "Back", "preview": "Preview", "select": "Select", "selectAnyway": "Select Anyway", "selectMultiple": "Select", "validating": "Validating data..." }, "datasets": "Datasets", "itemDetails": "Item Details", "items": "Items", "layerList": "Layers and Tables", "licenses": { "custom": "Custom License", "none": "No license specified" }, "loading": "loading", "loadingLayers": "Loading Layers...", "noItems": { "withQuery": "No items matched your search.", "withoutQuery": "No items found." }, "rows": "{count} Rows", "searchDatasets": "Search datasets", "searchItems": "Search items", "selectedCount": "Total Datasets Selected: {count}", "shared": { "content_types": { "document": "Document", "raster": "Raster Dataset", "spatial": "Spatial Dataset", "storymap": "Story Map", "table": "Tabular Dataset", "webmap": "Web Map", "webmappingapp": "Web Mapping Application" }, "fieldType": { "esriFieldTypeBlob": "Blob", "esriFieldTypeDate": "Date or Time", "esriFieldTypeDouble": "Number", "esriFieldTypeGUID": "Unique ID", "esriFieldTypeGeometry": "Geometry", "esriFieldTypeGlobalID": "Unique ID", "esriFieldTypeInteger": "Number", "esriFieldTypeOID": "Unique ID", "esriFieldTypeRaster": "Raster", "esriFieldTypeSingle": "Number", "esriFieldTypeSmallInteger": "Number", "esriFieldTypeString": "Text" }, "itemType": { "featureService": "Feature Service", "imageService": "Image Service", "mapService": "Map Service", "webMap": "Web Map", "webMappingApplication": "Web Mapping Application" } }, "sharedBy": "Shared by" } } };
});
define('dummy/utils/intl/missing-message', ['exports', 'ember', 'ember-intl/utils/links'], function (exports, _ember, _emberIntlUtilsLinks) {
  exports['default'] = missingMessage;
  var logger = _ember['default'].Logger;

  function missingMessage(key, locales) {
    if (!locales) {
      logger.warn('ember-intl: no locale has been set. Documentation: ' + _emberIntlUtilsLinks['default'].unsetLocale);
    } else {
      logger.warn('ember-intl: translation: \'' + key + '\' on locale: \'' + locales.join(', ') + '\' was not found.');
    }

    return 'Missing translation: ' + key;
  }
});
define('dummy/utils/is-guid', ['exports', 'ember-arcgis-portal-components/utils/is-guid'], function (exports, _emberArcgisPortalComponentsUtilsIsGuid) {
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function get() {
      return _emberArcgisPortalComponentsUtilsIsGuid['default'];
    }
  });
});
define('dummy/utils/query-helpers', ['exports', 'ember-arcgis-portal-components/utils/query-helpers'], function (exports, _emberArcgisPortalComponentsUtilsQueryHelpers) {
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function get() {
      return _emberArcgisPortalComponentsUtilsQueryHelpers['default'];
    }
  });
});
define('dummy/utils/titleize', ['exports', 'ember-cli-string-helpers/utils/titleize'], function (exports, _emberCliStringHelpersUtilsTitleize) {
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function get() {
      return _emberCliStringHelpersUtilsTitleize['default'];
    }
  });
});
/* jshint ignore:start */



/* jshint ignore:end */

/* jshint ignore:start */

define('dummy/config/environment', ['ember'], function(Ember) {
  var prefix = 'dummy';
/* jshint ignore:start */

try {
  var metaName = prefix + '/config/environment';
  var rawConfig = document.querySelector('meta[name="' + metaName + '"]').getAttribute('content');
  var config = JSON.parse(unescape(rawConfig));

  var exports = { 'default': config };

  Object.defineProperty(exports, '__esModule', { value: true });

  return exports;
}
catch(err) {
  throw new Error('Could not read config from meta tag with name "' + metaName + '".');
}

/* jshint ignore:end */

});

/* jshint ignore:end */

/* jshint ignore:start */

if (!runningTests) {
  require("dummy/app")["default"].create({"name":"ember-arcgis-portal-components","version":"0.4.2+e6604ded"});
}

/* jshint ignore:end */
//# sourceMappingURL=dummy.map
