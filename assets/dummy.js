"use strict";



define('dummy/add-token/util', ['exports', 'ember-arcgis-server-services/add-token/util'], function (exports, _util) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function () {
      return _util.default;
    }
  });
});
define('dummy/app', ['exports', 'dummy/resolver', 'ember-load-initializers', 'dummy/config/environment'], function (exports, _resolver, _emberLoadInitializers, _environment) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });


  var App = Ember.Application.extend({
    modulePrefix: _environment.default.modulePrefix,
    podModulePrefix: _environment.default.podModulePrefix,
    Resolver: _resolver.default
  });

  (0, _emberLoadInitializers.default)(App, _environment.default.modulePrefix);

  exports.default = App;
});
define('dummy/application/route', ['exports'], function (exports) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = Ember.Route.extend({
    intl: Ember.inject.service(),

    beforeModel: function beforeModel() {
      // start up the i18n service and rehydrate the session
      return Ember.RSVP.hashSettled({
        sessionPromise: this._initSession(),
        i18nPromise: this.get('intl').setLocale('en-us')
      });
    },
    _initSession: function _initSession() {
      return this.get('session').fetch().then(function () {
        Ember.debug('User has been automatically logged in... ');
      }).catch(function () /* err */{
        // we want to catch this, otherwise Ember will redirect to an error route!
        Ember.debug('No cookie was found, user is anonymous... ');
      });
    },

    actions: {
      signin: function signin() {
        var _this = this;

        this.get('session').open('arcgis-oauth-bearer').then(function (authorization) {
          Ember.debug('AUTH SUCCESS: ', authorization);
          // transition to some secured route or... so whatever is needed
          _this.transitionTo('index');
        }).catch(function (err) {
          Ember.debug('AUTH ERROR: ', err);
        });
      },
      signout: function signout() {
        this.get('session').close();
      }
    }
  });
});
define("dummy/application/template", ["exports"], function (exports) {
  "use strict";

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = Ember.HTMLBars.template({ "id": "OKqEt/gD", "block": "{\"symbols\":[],\"statements\":[[6,\"nav\"],[9,\"class\",\"navbar navbar-default\"],[7],[0,\"\\n  \"],[6,\"div\"],[9,\"class\",\"container\"],[7],[0,\"\\n    \"],[6,\"div\"],[9,\"class\",\"navbar-header\"],[7],[0,\"\\n      \"],[6,\"button\"],[9,\"type\",\"button\"],[9,\"class\",\"navbar-toggle collapsed\"],[9,\"data-toggle\",\"collapse\"],[9,\"data-target\",\"#navbar\"],[9,\"aria-expanded\",\"false\"],[9,\"aria-controls\",\"navbar\"],[7],[0,\"\\n        \"],[6,\"span\"],[9,\"class\",\"sr-only\"],[7],[0,\"Toggle navigation\"],[8],[0,\"\\n        \"],[6,\"span\"],[9,\"class\",\"icon-bar\"],[7],[8],[0,\"\\n        \"],[6,\"span\"],[9,\"class\",\"icon-bar\"],[7],[8],[0,\"\\n        \"],[6,\"span\"],[9,\"class\",\"icon-bar\"],[7],[8],[0,\"\\n      \"],[8],[0,\"\\n        \"],[4,\"link-to\",[\"index\"],[[\"class\"],[\"navbar-brand\"]],{\"statements\":[[0,\"ember-arcgis-portal-components\"]],\"parameters\":[]},null],[0,\"\\n    \"],[8],[0,\"\\n    \"],[6,\"div\"],[9,\"id\",\"navbar\"],[9,\"class\",\"navbar-collapse collapse\"],[7],[0,\"\\n      \"],[6,\"ul\"],[9,\"class\",\"nav navbar-nav\"],[7],[0,\"\\n        \"],[4,\"active-link\",null,null,{\"statements\":[[4,\"link-to\",[\"index\"],null,{\"statements\":[[0,\"Home\"]],\"parameters\":[]},null]],\"parameters\":[]},null],[0,\"\\n        \"],[6,\"li\"],[9,\"class\",\"dropdown\"],[7],[0,\"\\n          \"],[6,\"a\"],[9,\"href\",\"#\"],[9,\"class\",\"dropdown-toggle\"],[9,\"data-toggle\",\"dropdown\"],[9,\"role\",\"button\"],[9,\"aria-haspopup\",\"true\"],[9,\"aria-expanded\",\"false\"],[7],[0,\"Item Picker \"],[6,\"span\"],[9,\"class\",\"caret\"],[7],[8],[8],[0,\"\\n          \"],[6,\"ul\"],[9,\"class\",\"dropdown-menu\"],[7],[0,\"\\n              \"],[4,\"active-link\",null,null,{\"statements\":[[4,\"link-to\",[\"itempicker.index\"],null,{\"statements\":[[0,\"Default Usage\"]],\"parameters\":[]},null]],\"parameters\":[]},null],[0,\"\\n              \"],[4,\"active-link\",null,null,{\"statements\":[[4,\"link-to\",[\"itempicker.multiselect\"],null,{\"statements\":[[0,\"Multi-Select\"]],\"parameters\":[]},null]],\"parameters\":[]},null],[0,\"\\n              \"],[4,\"active-link\",null,null,{\"statements\":[[4,\"link-to\",[\"itempicker.facets\"],null,{\"statements\":[[0,\"Facets\"]],\"parameters\":[]},null]],\"parameters\":[]},null],[0,\"\\n              \"],[4,\"active-link\",null,null,{\"statements\":[[4,\"link-to\",[\"itempicker.layerpicker\"],null,{\"statements\":[[0,\"Layer Picker\"]],\"parameters\":[]},null]],\"parameters\":[]},null],[0,\"\\n              \"],[4,\"active-link\",null,null,{\"statements\":[[4,\"link-to\",[\"itempicker.defaultcatalog\"],null,{\"statements\":[[0,\"Default Catalog\"]],\"parameters\":[]},null]],\"parameters\":[]},null],[0,\"\\n              \"],[4,\"active-link\",null,null,{\"statements\":[[4,\"link-to\",[\"itempicker.validation\"],null,{\"statements\":[[0,\"Validation\"]],\"parameters\":[]},null]],\"parameters\":[]},null],[0,\"\\n              \"],[4,\"active-link\",null,null,{\"statements\":[[4,\"link-to\",[\"itempicker.specificid\"],null,{\"statements\":[[0,\"Specific ID\"]],\"parameters\":[]},null]],\"parameters\":[]},null],[0,\"\\n              \"],[4,\"active-link\",null,null,{\"statements\":[[4,\"link-to\",[\"itempicker.portalopts\"],null,{\"statements\":[[0,\"Cross Portal\"]],\"parameters\":[]},null]],\"parameters\":[]},null],[0,\"\\n          \"],[8],[0,\"\\n        \"],[8],[0,\"\\n      \"],[8],[0,\"\\n      \"],[6,\"ul\"],[9,\"class\",\"nav navbar-nav navbar-right\"],[7],[0,\"\\n\"],[4,\"if\",[[20,[\"session\",\"isAuthenticated\"]]],null,{\"statements\":[[0,\"        \"],[6,\"li\"],[9,\"class\",\"dropdown\"],[7],[0,\"\\n          \"],[6,\"a\"],[9,\"href\",\"#\"],[9,\"class\",\"dropdown-toggle\"],[9,\"data-toggle\",\"dropdown\"],[9,\"role\",\"button\"],[9,\"aria-haspopup\",\"true\"],[9,\"aria-expanded\",\"false\"],[7],[1,[20,[\"session\",\"currentUser\",\"fullName\"]],false],[0,\" \"],[6,\"span\"],[9,\"class\",\"caret\"],[7],[8],[8],[0,\"\\n          \"],[6,\"ul\"],[9,\"class\",\"dropdown-menu\"],[7],[0,\"\\n            \"],[6,\"li\"],[7],[6,\"a\"],[9,\"href\",\"#\"],[3,\"action\",[[19,0,[]],\"signout\"]],[7],[0,\"Sign Out\"],[8],[8],[0,\"\\n          \"],[8],[0,\"\\n        \"],[8],[0,\"\\n\"]],\"parameters\":[]},{\"statements\":[[0,\"        \"],[4,\"active-link\",null,null,{\"statements\":[[6,\"a\"],[9,\"href\",\"#\"],[3,\"action\",[[19,0,[]],\"signin\"]],[7],[0,\"Sign In\"],[8]],\"parameters\":[]},null],[0,\"\\n\"]],\"parameters\":[]}],[0,\"        \"],[6,\"li\"],[7],[6,\"a\"],[9,\"href\",\"https://github.com/arcgis/ember-arcgis-portal-components\"],[7],[0,\"Github\"],[8],[8],[0,\"\\n      \"],[8],[0,\"\\n    \"],[8],[2,\"/.nav-collapse \"],[0,\"\\n  \"],[8],[2,\"/.container-fluid \"],[0,\"\\n\"],[8],[0,\"\\n\"],[6,\"div\"],[9,\"class\",\"container\"],[7],[0,\"\\n  \"],[1,[18,\"outlet\"],false],[0,\"\\n\"],[8],[0,\"\\n\"]],\"hasEval\":false}", "meta": { "moduleName": "dummy/application/template.hbs" } });
});
define("dummy/cldrs/en", ["exports"], function (exports) {
  "use strict";

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = [{ "locale": "en-US", "parentLocale": "en" }, { "locale": "en", "pluralRuleFunction": function pluralRuleFunction(n, ord) {
      var s = String(n).split("."),
          v0 = !s[1],
          t0 = Number(s[0]) == n,
          n10 = t0 && s[0].slice(-1),
          n100 = t0 && s[0].slice(-2);if (ord) return n10 == 1 && n100 != 11 ? "one" : n10 == 2 && n100 != 12 ? "two" : n10 == 3 && n100 != 13 ? "few" : "other";return n == 1 && v0 ? "one" : "other";
    }, "fields": { "year": { "displayName": "year", "relative": { "0": "this year", "1": "next year", "-1": "last year" }, "relativeTime": { "future": { "one": "in {0} year", "other": "in {0} years" }, "past": { "one": "{0} year ago", "other": "{0} years ago" } } }, "month": { "displayName": "month", "relative": { "0": "this month", "1": "next month", "-1": "last month" }, "relativeTime": { "future": { "one": "in {0} month", "other": "in {0} months" }, "past": { "one": "{0} month ago", "other": "{0} months ago" } } }, "day": { "displayName": "day", "relative": { "0": "today", "1": "tomorrow", "-1": "yesterday" }, "relativeTime": { "future": { "one": "in {0} day", "other": "in {0} days" }, "past": { "one": "{0} day ago", "other": "{0} days ago" } } }, "hour": { "displayName": "hour", "relativeTime": { "future": { "one": "in {0} hour", "other": "in {0} hours" }, "past": { "one": "{0} hour ago", "other": "{0} hours ago" } } }, "minute": { "displayName": "minute", "relativeTime": { "future": { "one": "in {0} minute", "other": "in {0} minutes" }, "past": { "one": "{0} minute ago", "other": "{0} minutes ago" } } }, "second": { "displayName": "second", "relative": { "0": "now" }, "relativeTime": { "future": { "one": "in {0} second", "other": "in {0} seconds" }, "past": { "one": "{0} second ago", "other": "{0} seconds ago" } } } } }];
});
define('dummy/components/active-link', ['exports', 'ember-cli-active-link-wrapper/components/active-link'], function (exports, _activeLink) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = _activeLink.default;
});
define("dummy/components/code-snippet", ["exports", "dummy/snippets"], function (exports, _snippets) {
  "use strict";

  Object.defineProperty(exports, "__esModule", {
    value: true
  });


  /* global require */
  var Highlight = self.require('highlight.js');

  exports.default = Ember.Component.extend({
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

    source: Ember.computed('name', function () {
      return this._unindent((_snippets.default[this.get('name')] || "").replace(/^(\s*\n)*/, '').replace(/\s*$/, ''));
    }),

    didInsertElement: function didInsertElement() {
      Highlight.highlightBlock(this.get('element'));
    },

    language: Ember.computed('name', function () {
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
define('dummy/components/image-with-fallback/component', ['exports', 'ember-arcgis-portal-components/components/image-with-fallback/component'], function (exports, _component) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function () {
      return _component.default;
    }
  });
});
define('dummy/components/item-pager/component', ['exports', 'ember-arcgis-portal-components/components/item-pager/component'], function (exports, _component) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function () {
      return _component.default;
    }
  });
});
define('dummy/components/item-picker/component', ['exports', 'ember-arcgis-portal-components/components/item-picker/component'], function (exports, _component) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function () {
      return _component.default;
    }
  });
});
define('dummy/components/item-picker/feature-service-preview/component', ['exports', 'ember-arcgis-portal-components/components/item-picker/feature-service-preview/component'], function (exports, _component) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function () {
      return _component.default;
    }
  });
});
define('dummy/components/item-picker/item-preview/component', ['exports', 'ember-arcgis-portal-components/components/item-picker/item-preview/component'], function (exports, _component) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function () {
      return _component.default;
    }
  });
});
define('dummy/components/item-picker/item-row/component', ['exports', 'ember-arcgis-portal-components/components/item-picker/item-row/component'], function (exports, _component) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function () {
      return _component.default;
    }
  });
});
define('dummy/components/item-picker/layer-picker/component', ['exports', 'ember-arcgis-portal-components/components/item-picker/layer-picker/component'], function (exports, _component) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function () {
      return _component.default;
    }
  });
});
define('dummy/components/labeled-radio-button', ['exports', 'ember-radio-button/components/labeled-radio-button'], function (exports, _labeledRadioButton) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function () {
      return _labeledRadioButton.default;
    }
  });
});
define('dummy/components/loading-indicator/component', ['exports', 'ember-arcgis-portal-components/components/loading-indicator/component'], function (exports, _component) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function () {
      return _component.default;
    }
  });
});
define('dummy/components/radio-button-input', ['exports', 'ember-radio-button/components/radio-button-input'], function (exports, _radioButtonInput) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function () {
      return _radioButtonInput.default;
    }
  });
});
define('dummy/components/radio-button', ['exports', 'ember-radio-button/components/radio-button'], function (exports, _radioButton) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function () {
      return _radioButton.default;
    }
  });
});
define('dummy/components/search-form/component', ['exports', 'ember-arcgis-portal-components/components/search-form/component'], function (exports, _component) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function () {
      return _component.default;
    }
  });
});
define('dummy/components/torii-iframe-placeholder', ['exports', 'torii/components/torii-iframe-placeholder'], function (exports, _toriiIframePlaceholder) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = _toriiIframePlaceholder.default;
});
define('dummy/ember-arcgis-portal-components/tests/addon.lint-test', [], function () {
  'use strict';

  QUnit.module('ESLint | addon');

  QUnit.test('addon/components/image-with-fallback/component.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'addon/components/image-with-fallback/component.js should pass ESLint\n\n');
  });

  QUnit.test('addon/components/item-pager/component.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'addon/components/item-pager/component.js should pass ESLint\n\n');
  });

  QUnit.test('addon/components/item-picker/component.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'addon/components/item-picker/component.js should pass ESLint\n\n');
  });

  QUnit.test('addon/components/item-picker/feature-service-preview/component.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'addon/components/item-picker/feature-service-preview/component.js should pass ESLint\n\n');
  });

  QUnit.test('addon/components/item-picker/item-preview/component.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'addon/components/item-picker/item-preview/component.js should pass ESLint\n\n');
  });

  QUnit.test('addon/components/item-picker/item-row/component.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'addon/components/item-picker/item-row/component.js should pass ESLint\n\n');
  });

  QUnit.test('addon/components/item-picker/layer-picker/component.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'addon/components/item-picker/layer-picker/component.js should pass ESLint\n\n');
  });

  QUnit.test('addon/components/loading-indicator/component.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'addon/components/loading-indicator/component.js should pass ESLint\n\n');
  });

  QUnit.test('addon/components/search-form/component.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'addon/components/search-form/component.js should pass ESLint\n\n');
  });

  QUnit.test('addon/utils/force-https.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'addon/utils/force-https.js should pass ESLint\n\n');
  });

  QUnit.test('addon/utils/is-guid.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'addon/utils/is-guid.js should pass ESLint\n\n');
  });

  QUnit.test('addon/utils/query-helpers.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'addon/utils/query-helpers.js should pass ESLint\n\n');
  });
});
define('dummy/ember-arcgis-portal-components/tests/app.lint-test', [], function () {
  'use strict';

  QUnit.module('ESLint | app');

  QUnit.test('app/components/image-with-fallback/component.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'app/components/image-with-fallback/component.js should pass ESLint\n\n');
  });

  QUnit.test('app/components/item-pager/component.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'app/components/item-pager/component.js should pass ESLint\n\n');
  });

  QUnit.test('app/components/item-picker/component.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'app/components/item-picker/component.js should pass ESLint\n\n');
  });

  QUnit.test('app/components/item-picker/feature-service-preview/component.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'app/components/item-picker/feature-service-preview/component.js should pass ESLint\n\n');
  });

  QUnit.test('app/components/item-picker/item-preview/component.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'app/components/item-picker/item-preview/component.js should pass ESLint\n\n');
  });

  QUnit.test('app/components/item-picker/item-row/component.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'app/components/item-picker/item-row/component.js should pass ESLint\n\n');
  });

  QUnit.test('app/components/item-picker/layer-picker/component.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'app/components/item-picker/layer-picker/component.js should pass ESLint\n\n');
  });

  QUnit.test('app/components/loading-indicator/component.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'app/components/loading-indicator/component.js should pass ESLint\n\n');
  });

  QUnit.test('app/components/search-form/component.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'app/components/search-form/component.js should pass ESLint\n\n');
  });

  QUnit.test('app/force-https/util.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'app/force-https/util.js should pass ESLint\n\n');
  });

  QUnit.test('app/formats.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'app/formats.js should pass ESLint\n\n');
  });

  QUnit.test('app/utils/is-guid.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'app/utils/is-guid.js should pass ESLint\n\n');
  });

  QUnit.test('app/utils/query-helpers.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'app/utils/query-helpers.js should pass ESLint\n\n');
  });
});
define("dummy/ember-arcgis-server-services/tests/addon.lint-test", [], function () {
  "use strict";
});
define("dummy/ember-arcgis-server-services/tests/app.lint-test", [], function () {
  "use strict";
});
define('dummy/encode-form/util', ['exports', 'ember-arcgis-server-services/encode-form/util'], function (exports, _util) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function () {
      return _util.default;
    }
  });
});
define('dummy/ext/torii-provider-arcgis', ['torii/services/torii-session', 'torii-provider-arcgis/mixins/gatekeeper'], function (_toriiSession, _gatekeeper) {
  'use strict';

  /**
   * ext/torii-provider-arcgis.js
   *
   * This file simply re-opens the Torii Session object,
   * using the GateKeeper mixin
   */
  _toriiSession.default.reopen(_gatekeeper.default);
});
define('dummy/force-https/util', ['exports', 'ember-arcgis-portal-components/force-https/util'], function (exports, _util) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function () {
      return _util.default;
    }
  });
});
define('dummy/formats', ['exports'], function (exports) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = {
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
define('dummy/helpers/app-version', ['exports', 'dummy/config/environment', 'ember-cli-app-version/utils/regexp'], function (exports, _environment, _regexp) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.appVersion = appVersion;
  var version = _environment.default.APP.version;
  function appVersion(_) {
    var hash = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};

    if (hash.hideSha) {
      return version.match(_regexp.versionRegExp)[0];
    }

    if (hash.hideVersion) {
      return version.match(_regexp.shaRegExp)[0];
    }

    return version;
  }

  exports.default = Ember.Helper.helper(appVersion);
});
define('dummy/helpers/camelize', ['exports', 'ember-cli-string-helpers/helpers/camelize'], function (exports, _camelize) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function () {
      return _camelize.default;
    }
  });
  Object.defineProperty(exports, 'camelize', {
    enumerable: true,
    get: function () {
      return _camelize.camelize;
    }
  });
});
define('dummy/helpers/capitalize', ['exports', 'ember-cli-string-helpers/helpers/capitalize'], function (exports, _capitalize) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function () {
      return _capitalize.default;
    }
  });
  Object.defineProperty(exports, 'capitalize', {
    enumerable: true,
    get: function () {
      return _capitalize.capitalize;
    }
  });
});
define('dummy/helpers/classify', ['exports', 'ember-cli-string-helpers/helpers/classify'], function (exports, _classify) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function () {
      return _classify.default;
    }
  });
  Object.defineProperty(exports, 'classify', {
    enumerable: true,
    get: function () {
      return _classify.classify;
    }
  });
});
define('dummy/helpers/dasherize', ['exports', 'ember-cli-string-helpers/helpers/dasherize'], function (exports, _dasherize) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function () {
      return _dasherize.default;
    }
  });
  Object.defineProperty(exports, 'dasherize', {
    enumerable: true,
    get: function () {
      return _dasherize.dasherize;
    }
  });
});
define('dummy/helpers/format-date', ['exports', 'ember-intl/helpers/format-date'], function (exports, _formatDate) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function () {
      return _formatDate.default;
    }
  });
});
define('dummy/helpers/format-html-message', ['exports', 'ember-intl/helpers/format-html-message'], function (exports, _formatHtmlMessage) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function () {
      return _formatHtmlMessage.default;
    }
  });
});
define('dummy/helpers/format-message', ['exports', 'ember-intl/helpers/format-message'], function (exports, _formatMessage) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function () {
      return _formatMessage.default;
    }
  });
});
define('dummy/helpers/format-number', ['exports', 'ember-intl/helpers/format-number'], function (exports, _formatNumber) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function () {
      return _formatNumber.default;
    }
  });
});
define('dummy/helpers/format-relative', ['exports', 'ember-intl/helpers/format-relative'], function (exports, _formatRelative) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function () {
      return _formatRelative.default;
    }
  });
});
define('dummy/helpers/format-time', ['exports', 'ember-intl/helpers/format-time'], function (exports, _formatTime) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function () {
      return _formatTime.default;
    }
  });
});
define('dummy/helpers/html-safe', ['exports', 'ember-cli-string-helpers/helpers/html-safe'], function (exports, _htmlSafe) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function () {
      return _htmlSafe.default;
    }
  });
  Object.defineProperty(exports, 'htmlSafe', {
    enumerable: true,
    get: function () {
      return _htmlSafe.htmlSafe;
    }
  });
});
define('dummy/helpers/humanize', ['exports', 'ember-cli-string-helpers/helpers/humanize'], function (exports, _humanize) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function () {
      return _humanize.default;
    }
  });
  Object.defineProperty(exports, 'humanize', {
    enumerable: true,
    get: function () {
      return _humanize.humanize;
    }
  });
});
define('dummy/helpers/intl-get', ['exports', 'ember-intl/helpers/intl-get'], function (exports, _intlGet) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function () {
      return _intlGet.default;
    }
  });
});
define('dummy/helpers/l', ['exports', 'ember-intl/helpers/l'], function (exports, _l) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function () {
      return _l.default;
    }
  });
});
define('dummy/helpers/lowercase', ['exports', 'ember-cli-string-helpers/helpers/lowercase'], function (exports, _lowercase) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function () {
      return _lowercase.default;
    }
  });
  Object.defineProperty(exports, 'lowercase', {
    enumerable: true,
    get: function () {
      return _lowercase.lowercase;
    }
  });
});
define('dummy/helpers/sanitize-html', ['exports', 'ember-sanitize/utils/sanitize', 'ember-getowner-polyfill'], function (exports, _sanitize, _emberGetownerPolyfill) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = Ember.Helper.extend({
    compute: function compute(params) {
      var config = void 0,
          configName = params[1];
      if (configName) {
        //lookup the config
        config = (0, _emberGetownerPolyfill.default)(this).lookup('sanitizer:' + configName);
      }

      var sanitized = (0, _sanitize.sanitize)(params[0], config);
      return new Ember.String.htmlSafe(sanitized);
    }
  });
});
define('dummy/helpers/t-html', ['exports', 'ember-intl/helpers/format-html-message'], function (exports, _formatHtmlMessage) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function () {
      return _formatHtmlMessage.default;
    }
  });
});
define('dummy/helpers/t', ['exports', 'ember-intl/helpers/t'], function (exports, _t) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function () {
      return _t.default;
    }
  });
});
define('dummy/helpers/titleize', ['exports', 'ember-cli-string-helpers/helpers/titleize'], function (exports, _titleize) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function () {
      return _titleize.default;
    }
  });
  Object.defineProperty(exports, 'titleize', {
    enumerable: true,
    get: function () {
      return _titleize.titleize;
    }
  });
});
define('dummy/helpers/truncate', ['exports', 'ember-cli-string-helpers/helpers/truncate'], function (exports, _truncate) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function () {
      return _truncate.default;
    }
  });
  Object.defineProperty(exports, 'truncate', {
    enumerable: true,
    get: function () {
      return _truncate.truncate;
    }
  });
});
define('dummy/helpers/underscore', ['exports', 'ember-cli-string-helpers/helpers/underscore'], function (exports, _underscore) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function () {
      return _underscore.default;
    }
  });
  Object.defineProperty(exports, 'underscore', {
    enumerable: true,
    get: function () {
      return _underscore.underscore;
    }
  });
});
define('dummy/helpers/uppercase', ['exports', 'ember-cli-string-helpers/helpers/uppercase'], function (exports, _uppercase) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function () {
      return _uppercase.default;
    }
  });
  Object.defineProperty(exports, 'uppercase', {
    enumerable: true,
    get: function () {
      return _uppercase.uppercase;
    }
  });
});
define('dummy/helpers/w', ['exports', 'ember-cli-string-helpers/helpers/w'], function (exports, _w) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function () {
      return _w.default;
    }
  });
  Object.defineProperty(exports, 'w', {
    enumerable: true,
    get: function () {
      return _w.w;
    }
  });
});
define('dummy/index/route', ['exports'], function (exports) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = Ember.Route.extend({
    beforeModel: function beforeModel() {
      this.transitionTo('itempicker');
    }
  });
});
define("dummy/index/template", ["exports"], function (exports) {
  "use strict";

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = Ember.HTMLBars.template({ "id": "9wi8Q+CL", "block": "{\"symbols\":[],\"statements\":[[6,\"div\"],[9,\"class\",\"row\"],[7],[0,\"\\n  \"],[6,\"div\"],[9,\"class\",\"col-sm-12\"],[7],[0,\"\\n    \"],[6,\"h1\"],[7],[0,\"Ember ArcGIS Portal Components\"],[8],[0,\"\\n    \"],[6,\"p\"],[7],[0,\"This addon contains a set of component that allows Ember developers to quickly work with ArcGIS Portal entities.\"],[8],[0,\"\\n  \"],[8],[0,\"\\n\"],[8],[0,\"\\n\"],[6,\"div\"],[9,\"class\",\"row\"],[7],[0,\"\\n  \"],[6,\"div\"],[9,\"class\",\"col-sm-6\"],[7],[0,\"\\n    \"],[6,\"h2\"],[7],[0,\"Installation\"],[8],[0,\"\\n    \"],[6,\"p\"],[7],[0,\"Install as you would any Ember addon...\"],[8],[0,\"\\n    \"],[6,\"pre\"],[7],[0,\"\\n      ember install ember-arcgis-portal-components\\n    \"],[8],[0,\"\\n\\n\"],[6,\"h3\"],[7],[0,\"Item Picker\"],[8],[0,\"\\n\"],[6,\"p\"],[7],[0,\"Allows you to easily search ArcGIS online or Portal for Items\"],[8],[0,\"\\n\"],[6,\"pre\"],[7],[0,\"\\n\"],[1,\"{{item-picker\\n    selectAction=(action \\\"onSelectItem\\\")}}\",false],[0,\"\\n\"],[8],[0,\"\\n\\n\\n\"],[6,\"h3\"],[7],[0,\"Group Picker\"],[8],[0,\"\\n\"],[6,\"p\"],[7],[0,\"Allows you to easily search ArcGIS online or Portal for Groups\"],[8],[0,\"\\n\"],[6,\"pre\"],[7],[0,\"\\n\"],[1,\"{{group-picker\\n    selectAction=(action \\\"onSelectGroup\\\")}}\",false],[0,\"\\n\"],[8],[0,\"\\n\\n\\n\"],[6,\"h3\"],[7],[0,\"User Picker\"],[8],[0,\"\\n\"],[6,\"p\"],[7],[0,\"Allows you to easily search ArcGIS online or Portal for Users\"],[8],[0,\"\\n\"],[6,\"pre\"],[7],[0,\"\\n\"],[1,\"{{user-picker\\n    selectAction=(action \\\"onSelectUser\\\")}}\",false],[0,\"\\n\"],[8],[0,\"\\n\"],[8],[0,\"\\n\\n\"],[1,[25,\"search-form\",null,[[\"q\",\"onSearch\"],[[20,[\"q\"]],[25,\"action\",[[19,0,[]],[25,\"mut\",[[20,[\"q\"]]],null]],null]]]],false],[0,\"\\n\\n\\n\"],[8],[0,\"\\n\"]],\"hasEval\":false}", "meta": { "moduleName": "dummy/index/template.hbs" } });
});
define('dummy/initializers/app-version', ['exports', 'ember-cli-app-version/initializer-factory', 'dummy/config/environment'], function (exports, _initializerFactory, _environment) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });


  var name = void 0,
      version = void 0;
  if (_environment.default.APP) {
    name = _environment.default.APP.name;
    version = _environment.default.APP.version;
  }

  exports.default = {
    name: 'App Version',
    initialize: (0, _initializerFactory.default)(name, version)
  };
});
define('dummy/initializers/container-debug-adapter', ['exports', 'ember-resolver/resolvers/classic/container-debug-adapter'], function (exports, _containerDebugAdapter) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = {
    name: 'container-debug-adapter',

    initialize: function initialize() {
      var app = arguments[1] || arguments[0];

      app.register('container-debug-adapter:main', _containerDebugAdapter.default);
      app.inject('container-debug-adapter:main', 'namespace', 'application:main');
    }
  };
});
define('dummy/initializers/export-application-global', ['exports', 'dummy/config/environment'], function (exports, _environment) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.initialize = initialize;
  function initialize() {
    var application = arguments[1] || arguments[0];
    if (_environment.default.exportApplicationGlobal !== false) {
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

      var value = _environment.default.exportApplicationGlobal;
      var globalName;

      if (typeof value === 'string') {
        globalName = value;
      } else {
        globalName = Ember.String.classify(_environment.default.modulePrefix);
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

  exports.default = {
    name: 'export-application-global',

    initialize: initialize
  };
});
define('dummy/initializers/initialize-torii-callback', ['exports', 'torii/redirect-handler'], function (exports, _redirectHandler) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = {
    name: 'torii-callback',
    before: 'torii',
    initialize: function initialize(application) {
      if (arguments[1]) {
        // Ember < 2.1
        application = arguments[1];
      }
      application.deferReadiness();
      _redirectHandler.default.handle(window).catch(function () {
        application.advanceReadiness();
      });
    }
  };
});
define('dummy/initializers/initialize-torii-session', ['exports', 'torii/bootstrap/session', 'torii/configuration'], function (exports, _session, _configuration) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = {
    name: 'torii-session',
    after: 'torii',

    initialize: function initialize(application) {
      if (arguments[1]) {
        // Ember < 2.1
        application = arguments[1];
      }
      var configuration = (0, _configuration.getConfiguration)();
      if (!configuration.sessionServiceName) {
        return;
      }

      (0, _session.default)(application, configuration.sessionServiceName);

      var sessionFactoryName = 'service:' + configuration.sessionServiceName;
      application.inject('adapter', configuration.sessionServiceName, sessionFactoryName);
    }
  };
});
define('dummy/initializers/initialize-torii', ['exports', 'torii/bootstrap/torii', 'torii/configuration', 'dummy/config/environment'], function (exports, _torii, _configuration, _environment) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });


  var initializer = {
    name: 'torii',
    initialize: function initialize(application) {
      if (arguments[1]) {
        // Ember < 2.1
        application = arguments[1];
      }
      (0, _configuration.configure)(_environment.default.torii || {});
      (0, _torii.default)(application);
      application.inject('route', 'torii', 'service:torii');
    }
  };

  exports.default = initializer;
});
define('dummy/initializers/setup-sanitizers', ['exports'], function (exports) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = {
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
define('dummy/initializers/torii-provider-arcgis', ['exports', 'dummy/ext/torii-provider-arcgis'], function (exports, _toriiProviderArcgis) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.initialize = initialize;
  function initialize() {}
  // do nothing here...


  // we need to export this stuff...
  /**
   * initializers/torii-provider-arcgis.js
   *
   * This file is simply here so that it includes the extention file
   * which reopen's the Torii Session, and adds additional methods
   * to it which are useful for ArcGIS Online Sessions
   */

  exports.default = {
    name: 'torii-provider-arcgis',
    initialize: initialize
  };
});
define('dummy/instance-initializers/ember-intl', ['exports', 'ember-intl/initializer'], function (exports, _initializer) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.instanceInitializer = undefined;
  exports.instanceInitializer = _initializer.instanceInitializer;
  exports.default = _initializer.default;
});
define('dummy/instance-initializers/setup-routes', ['exports', 'torii/bootstrap/routing', 'torii/configuration', 'torii/compat/get-router-instance', 'torii/compat/get-router-lib', 'torii/router-dsl-ext'], function (exports, _routing, _configuration, _getRouterInstance, _getRouterLib) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = {
    name: 'torii-setup-routes',
    initialize: function initialize(applicationInstance, registry) {
      var configuration = (0, _configuration.getConfiguration)();

      if (!configuration.sessionServiceName) {
        return;
      }

      var router = (0, _getRouterInstance.default)(applicationInstance);
      var setupRoutes = function setupRoutes() {
        var routerLib = (0, _getRouterLib.default)(router);
        var authenticatedRoutes = routerLib.authenticatedRoutes;
        var hasAuthenticatedRoutes = !Ember.isEmpty(authenticatedRoutes);
        if (hasAuthenticatedRoutes) {
          (0, _routing.default)(applicationInstance, authenticatedRoutes);
        }
        router.off('willTransition', setupRoutes);
      };
      router.on('willTransition', setupRoutes);
    }
  };
});
define('dummy/instance-initializers/walk-providers', ['exports', 'torii/lib/container-utils', 'torii/configuration'], function (exports, _containerUtils, _configuration) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = {
    name: 'torii-walk-providers',
    initialize: function initialize(applicationInstance) {
      var configuration = (0, _configuration.getConfiguration)();
      // Walk all configured providers and eagerly instantiate
      // them. This gives providers with initialization side effects
      // like facebook-connect a chance to load up assets.
      for (var key in configuration.providers) {
        if (configuration.providers.hasOwnProperty(key)) {
          (0, _containerUtils.lookup)(applicationInstance, 'torii-provider:' + key);
        }
      }
    }
  };
});
define('dummy/itempicker/defaultcatalog/controller', ['exports'], function (exports) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = Ember.Controller.extend({
    selectedItem: null,

    url: 'http://dc.mapsqa.arcgis.com',

    catalog: Ember.A([{
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
        Ember.$('#myModal').modal('hide');
        this.set('selectedItem', selected);
      }
    }
  });
});
define('dummy/itempicker/defaultcatalog/route', ['exports'], function (exports) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = Ember.Route.extend({});
});
define("dummy/itempicker/defaultcatalog/template", ["exports"], function (exports) {
  "use strict";

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = Ember.HTMLBars.template({ "id": "MtZT6JbS", "block": "{\"symbols\":[],\"statements\":[[6,\"div\"],[9,\"class\",\"row\"],[7],[0,\"\\n  \"],[6,\"div\"],[9,\"class\",\"col-sm-12\"],[7],[0,\"\\n    \"],[6,\"h2\"],[7],[0,\"Specify starting catalog\"],[8],[0,\"\\n  \"],[8],[0,\"\\n\\n  \"],[6,\"div\"],[9,\"class\",\"col-sm-12\"],[7],[0,\"\\n    \"],[6,\"h3\"],[7],[0,\"Inline Panel Example\"],[8],[0,\"\\n    \"],[6,\"div\"],[9,\"class\",\"panel panel-default\"],[7],[0,\"\\n      \"],[6,\"div\"],[9,\"class\",\"panel-heading\"],[7],[0,\"\\n        \"],[6,\"h3\"],[9,\"class\",\"panel-title\"],[7],[0,\"Search ArcGIS.com for Items\"],[8],[0,\"\\n      \"],[8],[0,\"\\n      \"],[6,\"div\"],[9,\"class\",\"panel-body\"],[7],[0,\"\\n        \"],[1,[25,\"item-picker\",null,[[\"catalog\",\"portalHostName\",\"searchItemsOnInit\",\"selectAction\"],[[20,[\"catalog\"]],[20,[\"url\"]],true,[25,\"action\",[[19,0,[]],\"onSelectItem\"],null]]]],false],[0,\"\\n      \"],[8],[0,\"\\n    \"],[8],[0,\"\\n  \"],[8],[0,\"\\n\"],[8],[0,\"\\n\"]],\"hasEval\":false}", "meta": { "moduleName": "dummy/itempicker/defaultcatalog/template.hbs" } });
});
define('dummy/itempicker/facets/controller', ['exports'], function (exports) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = Ember.Controller.extend({
    selectedItem: null,

    url: 'http://dc.mapsqa.arcgis.com',

    catalog: Ember.A([{
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

    init: function init() {
      this._super.apply(this, arguments);
      this.set('previewParams', {
        showLayers: true,
        forceLayerSelection: true
      });
    },


    actions: {
      onSelectItem: function onSelectItem(selected) {
        Ember.$('#myModal').modal('hide');
        this.set('selectedItem', selected);
      }
    }
  });
});
define('dummy/itempicker/facets/route', ['exports'], function (exports) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = Ember.Route.extend({});
});
define("dummy/itempicker/facets/template", ["exports"], function (exports) {
  "use strict";

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = Ember.HTMLBars.template({ "id": "VGdsRC1y", "block": "{\"symbols\":[],\"statements\":[[6,\"div\"],[9,\"class\",\"row\"],[7],[0,\"\\n  \"],[6,\"div\"],[9,\"class\",\"col-sm-12\"],[7],[0,\"\\n    \"],[6,\"h2\"],[7],[0,\"Faceting by type\"],[8],[0,\"\\n  \"],[8],[0,\"\\n\\n  \"],[6,\"div\"],[9,\"class\",\"col-sm-12\"],[7],[0,\"\\n    \"],[6,\"h3\"],[7],[0,\"Inline Panel Example\"],[8],[0,\"\\n    \"],[6,\"div\"],[9,\"class\",\"panel panel-default\"],[7],[0,\"\\n      \"],[6,\"div\"],[9,\"class\",\"panel-heading\"],[7],[0,\"\\n        \"],[6,\"h3\"],[9,\"class\",\"panel-title\"],[7],[0,\"Search ArcGIS.com for Items\"],[8],[0,\"\\n      \"],[8],[0,\"\\n      \"],[6,\"div\"],[9,\"class\",\"panel-body\"],[7],[0,\"\\n        \"],[1,[25,\"item-picker\",null,[[\"catalog\",\"portalHostName\",\"searchItemsOnInit\",\"previewParams\",\"selectAction\"],[[20,[\"catalog\"]],[20,[\"url\"]],true,[20,[\"previewParams\"]],[25,\"action\",[[19,0,[]],\"onSelectItem\"],null]]]],false],[0,\"\\n      \"],[8],[0,\"\\n    \"],[8],[0,\"\\n  \"],[8],[0,\"\\n\"],[8],[0,\"\\n\"]],\"hasEval\":false}", "meta": { "moduleName": "dummy/itempicker/facets/template.hbs" } });
});
define('dummy/itempicker/index/controller', ['exports'], function (exports) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = Ember.Controller.extend({
    selectedItem: null,

    itemService: Ember.inject.service('items-service'),

    actions: {
      onSelectItem: function onSelectItem(selected) {
        Ember.$('#myModal').modal('hide');
        this.set('selectedItem', selected);
      }
    }
  });
});
define('dummy/itempicker/index/route', ['exports'], function (exports) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = Ember.Route.extend({});
});
define("dummy/itempicker/index/template", ["exports"], function (exports) {
  "use strict";

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = Ember.HTMLBars.template({ "id": "9pPwROG2", "block": "{\"symbols\":[],\"statements\":[[6,\"div\"],[9,\"class\",\"row\"],[7],[0,\"\\n  \"],[6,\"div\"],[9,\"class\",\"col-sm-12\"],[7],[0,\"\\n    \"],[6,\"h2\"],[7],[0,\"Picking Items\"],[8],[0,\"\\n  \"],[8],[0,\"\\n  \"],[6,\"div\"],[9,\"class\",\"col-sm-6\"],[7],[0,\"\\n    \"],[6,\"h3\"],[7],[0,\"Default Usage\"],[8],[0,\"\\n    \"],[6,\"p\"],[7],[0,\"To simply add the component into your template and wire up the \"],[6,\"code\"],[7],[0,\"selectAction\"],[8],[0,\" closure action.\\n      By default, the component will search public items in ArcGIS Online, or whatever portal your app is configured to use. \"],[8],[0,\"\\n\\n      \"],[6,\"pre\"],[7],[0,\"\\n\"],[1,\"{{item-picker\\n      selectAction=(action \\\"onSelectItem\\\")}}\",false],[0,\"\\n    \"],[8],[0,\"\\n    \"],[6,\"p\"],[7],[0,\"If you need to search against another portal, you can pass \"],[6,\"code\"],[7],[0,\"portalOpts\"],[8],[0,\" to the component.\"],[8],[0,\"\\n  \"],[8],[0,\"\\n  \"],[6,\"div\"],[9,\"class\",\"col-sm-6\"],[7],[0,\"\\n    \"],[6,\"h3\"],[7],[0,\"Selected Item \"],[8],[0,\"\\n\"],[4,\"if\",[[20,[\"selectedItem\"]]],null,{\"statements\":[[0,\"      \"],[6,\"div\"],[9,\"class\",\"panel panel-default\"],[7],[0,\"\\n        \"],[6,\"div\"],[9,\"class\",\"panel-heading\"],[7],[6,\"h3\"],[9,\"class\",\"panel-title\"],[7],[1,[20,[\"selectedItem\",\"title\"]],false],[8],[8],[0,\"\\n        \"],[6,\"div\"],[9,\"class\",\"panel-body\"],[7],[0,\"\\n          \"],[1,[25,\"sanitize-html\",[[20,[\"selectedItem\",\"description\"]]],null],false],[0,\"\\n        \"],[8],[0,\"\\n      \"],[8],[0,\"\\n\"]],\"parameters\":[]},{\"statements\":[[0,\"      \"],[6,\"div\"],[9,\"class\",\"alert alert-warning\"],[9,\"role\",\"alert\"],[7],[0,\"\\n        \"],[6,\"p\"],[9,\"class\",\"text-center\"],[7],[0,\"No Item Selected\"],[8],[0,\"\\n      \"],[8],[0,\"\\n\"]],\"parameters\":[]}],[0,\"  \"],[8],[0,\"\\n\\n  \"],[6,\"div\"],[9,\"class\",\"col-sm-12\"],[7],[0,\"\\n    \"],[6,\"h3\"],[7],[0,\"Modal Example \"],[8],[0,\"\\n    \"],[6,\"button\"],[9,\"type\",\"button\"],[9,\"class\",\"btn btn-primary\"],[9,\"data-toggle\",\"modal\"],[9,\"data-target\",\"#myModal\"],[7],[0,\"Select an Item\"],[8],[0,\"\\n  \"],[8],[0,\"\\n  \"],[6,\"div\"],[9,\"class\",\"col-sm-12\"],[7],[0,\"\\n    \"],[6,\"h3\"],[7],[0,\"Inline Panel Example\"],[8],[0,\"\\n    \"],[6,\"div\"],[9,\"class\",\"panel panel-default\"],[7],[0,\"\\n      \"],[6,\"div\"],[9,\"class\",\"panel-heading\"],[7],[0,\"\\n        \"],[6,\"h3\"],[9,\"class\",\"panel-title\"],[7],[0,\"Search ArcGIS.com for Items\"],[8],[0,\"\\n      \"],[8],[0,\"\\n      \"],[6,\"div\"],[9,\"class\",\"panel-body\"],[7],[0,\"\\n        \"],[1,[25,\"item-picker\",null,[[\"selectAction\"],[[25,\"action\",[[19,0,[]],\"onSelectItem\"],null]]]],false],[0,\"\\n      \"],[8],[0,\"\\n    \"],[8],[0,\"\\n  \"],[8],[0,\"\\n\"],[8],[0,\"\\n\\n\"],[2,\" Modal \"],[0,\"\\n\"],[6,\"div\"],[9,\"class\",\"modal fade\"],[9,\"id\",\"myModal\"],[9,\"tabindex\",\"-1\"],[9,\"role\",\"dialog\"],[9,\"aria-labelledby\",\"myModalLabel\"],[7],[0,\"\\n  \"],[6,\"div\"],[9,\"class\",\"modal-dialog modal-lg\"],[9,\"role\",\"document\"],[7],[0,\"\\n    \"],[6,\"div\"],[9,\"class\",\"modal-content\"],[7],[0,\"\\n      \"],[6,\"div\"],[9,\"class\",\"modal-header\"],[7],[0,\"\\n        \"],[6,\"button\"],[9,\"type\",\"button\"],[9,\"class\",\"close\"],[9,\"data-dismiss\",\"modal\"],[9,\"aria-label\",\"Close\"],[7],[6,\"span\"],[9,\"aria-hidden\",\"true\"],[7],[0,\"×\"],[8],[8],[0,\"\\n        \"],[6,\"h4\"],[9,\"class\",\"modal-title\"],[9,\"id\",\"myModalLabel\"],[7],[0,\"Default Usage\"],[8],[0,\"\\n      \"],[8],[0,\"\\n      \"],[6,\"div\"],[9,\"class\",\"modal-body\"],[7],[0,\"\\n        \"],[1,[25,\"item-picker\",null,[[\"selectAction\"],[[25,\"action\",[[19,0,[]],\"onSelectItem\"],null]]]],false],[0,\"\\n      \"],[8],[0,\"\\n    \"],[8],[0,\"\\n  \"],[8],[0,\"\\n\"],[8],[0,\"\\n\"]],\"hasEval\":false}", "meta": { "moduleName": "dummy/itempicker/index/template.hbs" } });
});
define('dummy/itempicker/layerpicker/controller', ['exports'], function (exports) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = Ember.Controller.extend({
    selectedItem: null,
    itemService: Ember.inject.service('items-service'),
    url: 'http://dc.mapsqa.arcgis.com',
    init: function init() {
      this._super.apply(this, arguments);
      this.setProperties({
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
        }
      });
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

      var copyItem = Ember.copy(item, true);
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
      var tempState = Ember.copy(state, true);
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
        Ember.$('#myModal').modal('hide');
        this.set('selectedItem', selected);
      },
      selectionValidator: function selectionValidator(item) {
        return this._validator(item);
      }
    }
  });
});
define("dummy/itempicker/layerpicker/template", ["exports"], function (exports) {
  "use strict";

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = Ember.HTMLBars.template({ "id": "cbI7Zvlj", "block": "{\"symbols\":[],\"statements\":[[6,\"div\"],[9,\"class\",\"row\"],[7],[0,\"\\n  \"],[6,\"div\"],[9,\"class\",\"col-sm-12\"],[7],[0,\"\\n    \"],[6,\"h2\"],[7],[0,\"Layer Picker with Validator\"],[8],[0,\"\\n    \"],[6,\"p\"],[7],[0,\"We can force the item picker to return an item and a layer. To do this, we setup a catalog that only returns Map or Feature Service items.\\n    We also pass it \"],[6,\"code\"],[7],[0,\"previewParams\"],[8],[0,\" which tell the feature-service-preview component to force a layer selection.\"],[8],[0,\"\\n  \"],[8],[0,\"\\n  \"],[6,\"div\"],[9,\"class\",\"col-sm-6\"],[7],[0,\"\\n    \"],[6,\"h3\"],[7],[0,\"Validator\"],[8],[0,\"\\n    \"],[6,\"p\"],[7],[0,\"To validate items simply add an action \"],[6,\"code\"],[7],[0,\"onSelectionValidator\"],[8],[8],[0,\"\\n\\n      \"],[6,\"pre\"],[7],[0,\"\\n\"],[1,\"{{item-picker\\n      catalog=catalog\\n      selectAction=(action \\\"onSelectItem\\\")\\n      previewParams=previewParams\\n      onSelectionValidator=(action \\\"selectionValidator\\\") }}\",false],[0,\"\\n    \"],[8],[0,\"\\n  \"],[8],[0,\"\\n  \"],[6,\"div\"],[9,\"class\",\"col-sm-6\"],[7],[0,\"\\n    \"],[6,\"h3\"],[7],[0,\"Selected Item \"],[8],[0,\"\\n\"],[4,\"if\",[[20,[\"selectedItem\"]]],null,{\"statements\":[[0,\"      \"],[6,\"div\"],[9,\"class\",\"panel panel-default\"],[7],[0,\"\\n        \"],[6,\"div\"],[9,\"class\",\"panel-heading\"],[7],[6,\"h3\"],[9,\"class\",\"panel-title\"],[7],[1,[20,[\"selectedItem\",\"title\"]],false],[8],[8],[0,\"\\n        \"],[6,\"div\"],[9,\"class\",\"panel-body\"],[7],[0,\"\\n          \"],[1,[25,\"sanitize-html\",[[20,[\"selectedItem\",\"description\"]]],null],false],[0,\"\\n        \"],[8],[0,\"\\n      \"],[8],[0,\"\\n\"]],\"parameters\":[]},{\"statements\":[[0,\"      \"],[6,\"div\"],[9,\"class\",\"alert alert-warning\"],[9,\"role\",\"alert\"],[7],[0,\"\\n        \"],[6,\"p\"],[9,\"class\",\"text-center\"],[7],[0,\"No Item Selected\"],[8],[0,\"\\n      \"],[8],[0,\"\\n\"]],\"parameters\":[]}],[0,\"  \"],[8],[0,\"\\n\\n  \"],[6,\"div\"],[9,\"class\",\"col-sm-12\"],[7],[0,\"\\n    \"],[6,\"h3\"],[7],[0,\"Modal Example \"],[8],[0,\"\\n    \"],[6,\"button\"],[9,\"type\",\"button\"],[9,\"class\",\"btn btn-primary\"],[9,\"data-toggle\",\"modal\"],[9,\"data-target\",\"#myModal\"],[7],[0,\"Select an Item\"],[8],[0,\"\\n  \"],[8],[0,\"\\n  \"],[6,\"div\"],[9,\"class\",\"col-sm-12\"],[7],[0,\"\\n    \"],[6,\"h3\"],[7],[0,\"Inline Panel Example\"],[8],[0,\"\\n    \"],[6,\"div\"],[9,\"class\",\"panel panel-default\"],[7],[0,\"\\n      \"],[6,\"div\"],[9,\"class\",\"panel-heading\"],[7],[0,\"\\n        \"],[6,\"h3\"],[9,\"class\",\"panel-title\"],[7],[0,\"Search ArcGIS.com for Items\"],[8],[0,\"\\n      \"],[8],[0,\"\\n      \"],[6,\"div\"],[9,\"class\",\"panel-body\"],[7],[0,\"\\n        \"],[1,[25,\"item-picker\",null,[[\"catalog\",\"selectAction\",\"previewParams\",\"onSelectionValidator\",\"rowCount\"],[[20,[\"catalog\"]],[25,\"action\",[[19,0,[]],\"onSelectItem\"],null],[20,[\"previewParams\"]],[25,\"action\",[[19,0,[]],\"selectionValidator\"],null],5]]],false],[0,\"\\n      \"],[8],[0,\"\\n    \"],[8],[0,\"\\n  \"],[8],[0,\"\\n\"],[8],[0,\"\\n\\n\"],[2,\" Modal \"],[0,\"\\n\"],[6,\"div\"],[9,\"class\",\"modal fade\"],[9,\"id\",\"myModal\"],[9,\"tabindex\",\"-1\"],[9,\"role\",\"dialog\"],[9,\"aria-labelledby\",\"myModalLabel\"],[7],[0,\"\\n  \"],[6,\"div\"],[9,\"class\",\"modal-dialog modal-lg\"],[9,\"role\",\"document\"],[7],[0,\"\\n    \"],[6,\"div\"],[9,\"class\",\"modal-content\"],[7],[0,\"\\n      \"],[6,\"div\"],[9,\"class\",\"modal-header\"],[7],[0,\"\\n        \"],[6,\"button\"],[9,\"type\",\"button\"],[9,\"class\",\"close\"],[9,\"data-dismiss\",\"modal\"],[9,\"aria-label\",\"Close\"],[7],[6,\"span\"],[9,\"aria-hidden\",\"true\"],[7],[0,\"×\"],[8],[8],[0,\"\\n        \"],[6,\"h4\"],[9,\"class\",\"modal-title\"],[9,\"id\",\"myModalLabel\"],[7],[0,\"Default Usage\"],[8],[0,\"\\n      \"],[8],[0,\"\\n      \"],[6,\"div\"],[9,\"class\",\"modal-body\"],[7],[0,\"\\n        \"],[1,[25,\"item-picker\",null,[[\"catalog\",\"selectAction\",\"previewParams\",\"onSelectionValidator\"],[[20,[\"catalog\"]],[25,\"action\",[[19,0,[]],\"onSelectItem\"],null],[20,[\"previewParams\"]],[25,\"action\",[[19,0,[]],\"selectionValidator\"],null]]]],false],[0,\"\\n      \"],[8],[0,\"\\n    \"],[8],[0,\"\\n  \"],[8],[0,\"\\n\"],[8],[0,\"\\n\"]],\"hasEval\":false}", "meta": { "moduleName": "dummy/itempicker/layerpicker/template.hbs" } });
});
define('dummy/itempicker/multiselect/controller', ['exports'], function (exports) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = Ember.Controller.extend({
    selectedItem: null,

    actions: {
      onSelectItem: function onSelectItem(selected) {
        Ember.$('#myModal').modal('hide');
        this.set('selectedItem', selected);
      }
    }
  });
});
define('dummy/itempicker/multiselect/route', ['exports'], function (exports) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = Ember.Route.extend({});
});
define("dummy/itempicker/multiselect/template", ["exports"], function (exports) {
  "use strict";

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = Ember.HTMLBars.template({ "id": "rKLHMQwz", "block": "{\"symbols\":[],\"statements\":[[6,\"div\"],[9,\"class\",\"row\"],[7],[0,\"\\n  \"],[6,\"div\"],[9,\"class\",\"col-sm-12\"],[7],[0,\"\\n    \"],[6,\"h2\"],[7],[0,\"Picking multiple items\"],[8],[0,\"\\n  \"],[8],[0,\"\\n\\n  \"],[6,\"div\"],[9,\"class\",\"col-sm-12\"],[7],[0,\"\\n    \"],[6,\"h3\"],[7],[0,\"Inline Panel Example\"],[8],[0,\"\\n    \"],[6,\"div\"],[9,\"class\",\"panel panel-default\"],[7],[0,\"\\n      \"],[6,\"div\"],[9,\"class\",\"panel-heading\"],[7],[0,\"\\n        \"],[6,\"h3\"],[9,\"class\",\"panel-title\"],[7],[0,\"Search ArcGIS.com for Items\"],[8],[0,\"\\n      \"],[8],[0,\"\\n      \"],[6,\"div\"],[9,\"class\",\"panel-body\"],[7],[0,\"\\n        \"],[1,[25,\"item-picker\",null,[[\"selectMultiple\",\"searchItemsOnInit\",\"selectAction\"],[true,true,[25,\"action\",[[19,0,[]],\"onSelectItem\"],null]]]],false],[0,\"\\n      \"],[8],[0,\"\\n    \"],[8],[0,\"\\n  \"],[8],[0,\"\\n\"],[8],[0,\"\\n\"]],\"hasEval\":false}", "meta": { "moduleName": "dummy/itempicker/multiselect/template.hbs" } });
});
define('dummy/itempicker/portalopts/controller', ['exports', 'ember-network/fetch'], function (exports, _fetch) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = Ember.Controller.extend({
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
      var form = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};

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
      return (0, _fetch.default)(url, opts).then(this.checkStatusAndParseJson);
    },

    /**
     * Fetch does not reject on non-200 responses, so we need to check this manually
     */
    checkStatusAndParseJson: function checkStatusAndParseJson(response) {
      var error = void 0;
      if (response.status >= 200 && response.status < 300) {
        // check if this is one of those groovy 200-but-a-400 things
        return response.json().then(function (json) {
          if (json.error) {
            // cook an error
            error = new Error(json.error.message);
            error.code = json.error.code || 404;
            error.response = response;
            Ember.debug('Error in response:  ' + json.error.message);
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

    expires: Ember.computed('model.expiresAt', function () {
      if (this.get('model.expiresAt')) {
        return new Date(this.get('model.expiresAt')).toISOString();
      } else {
        return 'Not Set';
      }
    }),

    portalOpts: Ember.computed('model.token', function () {
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
define('dummy/itempicker/portalopts/route', ['exports'], function (exports) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = Ember.Route.extend({
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
  "use strict";

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = Ember.HTMLBars.template({ "id": "9F7Q4Bc6", "block": "{\"symbols\":[],\"statements\":[[6,\"div\"],[9,\"class\",\"row\"],[7],[0,\"\\n  \"],[6,\"div\"],[9,\"class\",\"col-sm-12\"],[7],[0,\"\\n    \"],[6,\"h2\"],[7],[0,\"Searching other Portals\"],[8],[0,\"\\n    \"],[6,\"p\"],[7],[0,\"Sometimes it is useful to search across portals - to import items etc.\"],[8],[0,\"\\n  \"],[8],[0,\"\\n  \"],[6,\"div\"],[9,\"class\",\"col-sm-12\"],[7],[0,\"\\n    \"],[6,\"div\"],[9,\"class\",\"panel panel-default\"],[7],[0,\"\\n      \"],[6,\"div\"],[9,\"class\",\"panel-heading\"],[7],[0,\"Portal Information\"],[8],[0,\"\\n      \"],[6,\"div\"],[9,\"class\",\"panel-body\"],[7],[0,\"\\n        \"],[6,\"div\"],[9,\"class\",\"col-sm-4 form\"],[7],[0,\"\\n          \"],[6,\"div\"],[9,\"class\",\"form-group\"],[7],[0,\"\\n            \"],[6,\"label\"],[9,\"for\",\"exampleInputEmail1\"],[7],[0,\"Username\"],[8],[0,\"\\n            \"],[1,[25,\"input\",null,[[\"value\",\"class\",\"placeholder\"],[[20,[\"username\"]],\"form-control\",\"username\"]]],false],[0,\"\\n          \"],[8],[0,\"\\n          \"],[6,\"div\"],[9,\"class\",\"form-group\"],[7],[0,\"\\n            \"],[6,\"label\"],[9,\"for\",\"exampleInputPassword1\"],[7],[0,\"Password\"],[8],[0,\"\\n            \"],[1,[25,\"input\",null,[[\"value\",\"type\",\"class\",\"placeholder\"],[[20,[\"password\"]],\"password\",\"form-control\",\"password\"]]],false],[0,\"\\n          \"],[8],[0,\"\\n          \"],[6,\"div\"],[9,\"class\",\"form-group\"],[7],[0,\"\\n            \"],[6,\"label\"],[9,\"for\",\"exampleInputPassword1\"],[7],[0,\"Portal Url\"],[8],[0,\"\\n            \"],[1,[25,\"input\",null,[[\"value\",\"class\",\"placeholder\"],[[20,[\"model\",\"portalBaseUrl\"]],\"form-control\",\"www.arcgis.com\"]]],false],[0,\"\\n          \"],[8],[0,\"\\n          \"],[6,\"button\"],[9,\"class\",\"btn btn-default\"],[3,\"action\",[[19,0,[]],\"getToken\"]],[7],[0,\"Get Token\"],[8],[0,\"\\n        \"],[8],[0,\"\\n        \"],[6,\"div\"],[9,\"class\",\"col-sm-8\"],[7],[0,\"\\n          \"],[6,\"h5\"],[7],[0,\"Current Token\"],[8],[0,\"\\n          \"],[6,\"p\"],[9,\"style\",\"word-wrap: break-word;\"],[7],[1,[20,[\"model\",\"token\"]],false],[8],[0,\"\\n          \"],[6,\"p\"],[9,\"class\",\"small\"],[7],[0,\"Expires at: \"],[1,[18,\"expires\"],false],[8],[0,\"\\n        \"],[8],[0,\"\\n      \"],[8],[0,\"\\n    \"],[8],[0,\"\\n  \"],[8],[0,\"\\n  \"],[6,\"div\"],[9,\"class\",\"col-sm-12\"],[7],[0,\"\\n    \"],[6,\"h2\"],[7],[0,\"Searching against: \"],[1,[20,[\"portalOpts\",\"portalHostname\"]],false],[8],[0,\"\\n    \"],[1,[25,\"item-picker\",null,[[\"portalOpts\",\"selectAction\"],[[20,[\"portalOpts\"]],[25,\"action\",[[19,0,[]],\"onSelectItem\"],null]]]],false],[0,\"\\n  \"],[8],[0,\"\\n\"],[8],[0,\"\\n\"]],\"hasEval\":false}", "meta": { "moduleName": "dummy/itempicker/portalopts/template.hbs" } });
});
define('dummy/itempicker/route', ['exports'], function (exports) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = Ember.Route.extend({});
});
define('dummy/itempicker/specificid/controller', ['exports'], function (exports) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = Ember.Controller.extend({
    selectedItem: null,

    url: 'http://dc.mapsqa.arcgis.com',

    actions: {
      onSelectItem: function onSelectItem(selected) {
        Ember.$('#myModal').modal('hide');
        this.set('selectedItem', selected);
      }
    }
  });
});
define('dummy/itempicker/specificid/route', ['exports'], function (exports) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = Ember.Route.extend({});
});
define("dummy/itempicker/specificid/template", ["exports"], function (exports) {
  "use strict";

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = Ember.HTMLBars.template({ "id": "YyOIv5r5", "block": "{\"symbols\":[],\"statements\":[[6,\"div\"],[9,\"class\",\"row\"],[7],[0,\"\\n  \"],[6,\"div\"],[9,\"class\",\"col-sm-12\"],[7],[0,\"\\n    \"],[6,\"h2\"],[7],[0,\"Specific ID\"],[8],[0,\"\\n    \"],[6,\"p\"],[7],[0,\"Users can search for specific items by inputting the ID\"],[8],[0,\"\\n    \"],[6,\"br\"],[7],[8],[0,\"\\n    \"],[6,\"h5\"],[7],[0,\"Example IDs:\"],[8],[0,\"\\n    \"],[6,\"ul\"],[7],[0,\"\\n      \"],[6,\"li\"],[7],[6,\"code\"],[7],[0,\"3da54bcb4ff0416c9f78821eea210b14\"],[8],[0,\" - Recent Earthquakes (with popups)\"],[8],[0,\"\\n      \"],[6,\"li\"],[7],[6,\"code\"],[7],[0,\"0ad2e8245e2f4147a059af0431d2eff2\"],[8],[0,\" - Story Map Crowdsource (beta)\"],[8],[0,\"\\n      \"],[6,\"li\"],[7],[6,\"code\"],[7],[0,\"56fd2f554f444f6597b1f9c30bfa8c68\"],[8],[0,\" - ESS QA Org\"],[8],[0,\"\\n    \"],[8],[0,\"\\n  \"],[8],[0,\"\\n\\n  \"],[6,\"div\"],[9,\"class\",\"col-sm-12\"],[7],[0,\"\\n    \"],[6,\"br\"],[7],[8],[0,\"\\n    \"],[6,\"div\"],[9,\"class\",\"panel panel-default\"],[7],[0,\"\\n      \"],[6,\"div\"],[9,\"class\",\"panel-heading\"],[7],[0,\"\\n        \"],[6,\"h3\"],[9,\"class\",\"panel-title\"],[7],[0,\"Search ArcGIS.com for Items\"],[8],[0,\"\\n      \"],[8],[0,\"\\n      \"],[6,\"div\"],[9,\"class\",\"panel-body\"],[7],[0,\"\\n        \"],[1,[25,\"item-picker\",null,[[\"portalHostName\",\"searchItemsOnInit\",\"selectAction\"],[[20,[\"url\"]],true,[25,\"action\",[[19,0,[]],\"onSelectItem\"],null]]]],false],[0,\"\\n      \"],[8],[0,\"\\n    \"],[8],[0,\"\\n  \"],[8],[0,\"\\n\"],[8],[0,\"\\n\"]],\"hasEval\":false}", "meta": { "moduleName": "dummy/itempicker/specificid/template.hbs" } });
});
define("dummy/itempicker/template", ["exports"], function (exports) {
  "use strict";

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = Ember.HTMLBars.template({ "id": "Du37k7C3", "block": "{\"symbols\":[],\"statements\":[[1,[18,\"outlet\"],false],[0,\"\\n\"]],\"hasEval\":false}", "meta": { "moduleName": "dummy/itempicker/template.hbs" } });
});
define('dummy/itempicker/validation/controller', ['exports', 'ember-network/fetch'], function (exports, _fetch) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = Ember.Controller.extend({
    selectedItem: null,

    itemService: Ember.inject.service('items-service'),

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

      var copyItem = Ember.copy(item, true);
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
      var tempState = Ember.copy(state, true);
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
      return (0, _fetch.default)(url).then(this.get('itemService').checkStatusAndParseJson);
    },


    actions: {
      onSelectItem: function onSelectItem(selected) {
        Ember.$('#myModal').modal('hide');
        this.set('selectedItem', selected);
      },
      selectionValidator: function selectionValidator(item) {
        return this._validator(item);
      }
    }
  });
});
define('dummy/itempicker/validation/route', ['exports'], function (exports) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = Ember.Route.extend({});
});
define("dummy/itempicker/validation/template", ["exports"], function (exports) {
  "use strict";

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = Ember.HTMLBars.template({ "id": "4YURxxG/", "block": "{\"symbols\":[],\"statements\":[[6,\"div\"],[9,\"class\",\"row\"],[7],[0,\"\\n  \"],[6,\"div\"],[9,\"class\",\"col-sm-12\"],[7],[0,\"\\n    \"],[6,\"h2\"],[7],[0,\"Validate Items\"],[8],[0,\"\\n  \"],[8],[0,\"\\n  \"],[6,\"div\"],[9,\"class\",\"col-sm-6\"],[7],[0,\"\\n    \"],[6,\"h3\"],[7],[0,\"Validator\"],[8],[0,\"\\n    \"],[6,\"p\"],[7],[0,\"To validate items simply add an action \"],[6,\"code\"],[7],[0,\"onSelectionValidator\"],[8],[8],[0,\"\\n\\n      \"],[6,\"pre\"],[7],[0,\"\\n\"],[1,\"{{item-picker\\n      selectAction=(action \\\"onSelectItem\\\")\\n      onSelectionValidator=(action \\\"selectionValidator\\\") }}\",false],[0,\"\\n    \"],[8],[0,\"\\n  \"],[8],[0,\"\\n  \"],[6,\"div\"],[9,\"class\",\"col-sm-6\"],[7],[0,\"\\n    \"],[6,\"h3\"],[7],[0,\"Selected Item \"],[8],[0,\"\\n\"],[4,\"if\",[[20,[\"selectedItem\"]]],null,{\"statements\":[[0,\"      \"],[6,\"div\"],[9,\"class\",\"panel panel-default\"],[7],[0,\"\\n        \"],[6,\"div\"],[9,\"class\",\"panel-heading\"],[7],[6,\"h3\"],[9,\"class\",\"panel-title\"],[7],[1,[20,[\"selectedItem\",\"title\"]],false],[8],[8],[0,\"\\n        \"],[6,\"div\"],[9,\"class\",\"panel-body\"],[7],[0,\"\\n          \"],[1,[25,\"sanitize-html\",[[20,[\"selectedItem\",\"description\"]]],null],false],[0,\"\\n        \"],[8],[0,\"\\n      \"],[8],[0,\"\\n\"]],\"parameters\":[]},{\"statements\":[[0,\"      \"],[6,\"div\"],[9,\"class\",\"alert alert-warning\"],[9,\"role\",\"alert\"],[7],[0,\"\\n        \"],[6,\"p\"],[9,\"class\",\"text-center\"],[7],[0,\"No Item Selected\"],[8],[0,\"\\n      \"],[8],[0,\"\\n\"]],\"parameters\":[]}],[0,\"  \"],[8],[0,\"\\n\\n  \"],[6,\"div\"],[9,\"class\",\"col-sm-12\"],[7],[0,\"\\n    \"],[6,\"h3\"],[7],[0,\"Modal Example \"],[8],[0,\"\\n    \"],[6,\"button\"],[9,\"type\",\"button\"],[9,\"class\",\"btn btn-primary\"],[9,\"data-toggle\",\"modal\"],[9,\"data-target\",\"#myModal\"],[7],[0,\"Select an Item\"],[8],[0,\"\\n  \"],[8],[0,\"\\n  \"],[6,\"div\"],[9,\"class\",\"col-sm-12\"],[7],[0,\"\\n    \"],[6,\"h3\"],[7],[0,\"Inline Panel Example\"],[8],[0,\"\\n    \"],[6,\"div\"],[9,\"class\",\"panel panel-default\"],[7],[0,\"\\n      \"],[6,\"div\"],[9,\"class\",\"panel-heading\"],[7],[0,\"\\n        \"],[6,\"h3\"],[9,\"class\",\"panel-title\"],[7],[0,\"Search ArcGIS.com for Items\"],[8],[0,\"\\n      \"],[8],[0,\"\\n      \"],[6,\"div\"],[9,\"class\",\"panel-body\"],[7],[0,\"\\n        \"],[1,[25,\"item-picker\",null,[[\"selectAction\",\"onSelectionValidator\",\"rowCount\"],[[25,\"action\",[[19,0,[]],\"onSelectItem\"],null],[25,\"action\",[[19,0,[]],\"selectionValidator\"],null],5]]],false],[0,\"\\n      \"],[8],[0,\"\\n    \"],[8],[0,\"\\n  \"],[8],[0,\"\\n\"],[8],[0,\"\\n\\n\"],[2,\" Modal \"],[0,\"\\n\"],[6,\"div\"],[9,\"class\",\"modal fade\"],[9,\"id\",\"myModal\"],[9,\"tabindex\",\"-1\"],[9,\"role\",\"dialog\"],[9,\"aria-labelledby\",\"myModalLabel\"],[7],[0,\"\\n  \"],[6,\"div\"],[9,\"class\",\"modal-dialog modal-lg\"],[9,\"role\",\"document\"],[7],[0,\"\\n    \"],[6,\"div\"],[9,\"class\",\"modal-content\"],[7],[0,\"\\n      \"],[6,\"div\"],[9,\"class\",\"modal-header\"],[7],[0,\"\\n        \"],[6,\"button\"],[9,\"type\",\"button\"],[9,\"class\",\"close\"],[9,\"data-dismiss\",\"modal\"],[9,\"aria-label\",\"Close\"],[7],[6,\"span\"],[9,\"aria-hidden\",\"true\"],[7],[0,\"×\"],[8],[8],[0,\"\\n        \"],[6,\"h4\"],[9,\"class\",\"modal-title\"],[9,\"id\",\"myModalLabel\"],[7],[0,\"Default Usage\"],[8],[0,\"\\n      \"],[8],[0,\"\\n      \"],[6,\"div\"],[9,\"class\",\"modal-body\"],[7],[0,\"\\n        \"],[1,[25,\"item-picker\",null,[[\"selectAction\",\"onSelectionValidator\"],[[25,\"action\",[[19,0,[]],\"onSelectItem\"],null],[25,\"action\",[[19,0,[]],\"selectionValidator\"],null]]]],false],[0,\"\\n      \"],[8],[0,\"\\n    \"],[8],[0,\"\\n  \"],[8],[0,\"\\n\"],[8],[0,\"\\n\"]],\"hasEval\":false}", "meta": { "moduleName": "dummy/itempicker/validation/template.hbs" } });
});
define('dummy/mixins/active-link', ['exports', 'ember-cli-active-link-wrapper/mixins/active-link'], function (exports, _activeLink) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = _activeLink.default;
});
define('dummy/parse-url/util', ['exports', 'ember-arcgis-server-services/parse-url/util'], function (exports, _util) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function () {
      return _util.default;
    }
  });
});
define('dummy/request/util', ['exports', 'ember-arcgis-server-services/request/util'], function (exports, _util) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function () {
      return _util.default;
    }
  });
});
define('dummy/resolver', ['exports', 'ember-resolver'], function (exports, _emberResolver) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = _emberResolver.default;
});
define('dummy/router', ['exports', 'dummy/config/environment'], function (exports, _environment) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });


  var Router = Ember.Router.extend({
    location: _environment.default.locationType,
    rootURL: _environment.default.rootURL
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
  });

  exports.default = Router;
});
define('dummy/services/feature-service', ['exports', 'ember-arcgis-server-services/services/feature-service'], function (exports, _featureService) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function () {
      return _featureService.default;
    }
  });
});
define('dummy/services/folders-service', ['exports', 'ember-arcgis-portal-services/services/folders-service'], function (exports, _foldersService) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function () {
      return _foldersService.default;
    }
  });
});
define('dummy/services/geocode-service', ['exports', 'ember-arcgis-portal-services/services/geocode-service'], function (exports, _geocodeService) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function () {
      return _geocodeService.default;
    }
  });
});
define('dummy/services/groups-service', ['exports', 'ember-arcgis-portal-services/services/groups-service'], function (exports, _groupsService) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function () {
      return _groupsService.default;
    }
  });
});
define('dummy/services/hosted-service', ['exports', 'ember-arcgis-portal-services/services/hosted-service'], function (exports, _hostedService) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function () {
      return _hostedService.default;
    }
  });
});
define('dummy/services/image-service', ['exports', 'ember-arcgis-server-services/services/image-service'], function (exports, _imageService) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function () {
      return _imageService.default;
    }
  });
});
define('dummy/services/intl', ['exports', 'ember-intl/services/intl'], function (exports, _intl) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function () {
      return _intl.default;
    }
  });
});
define('dummy/services/items-service', ['exports', 'ember-arcgis-portal-services/services/items-service'], function (exports, _itemsService) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function () {
      return _itemsService.default;
    }
  });
});
define('dummy/services/map-service', ['exports', 'ember-arcgis-server-services/services/map-service'], function (exports, _mapService) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function () {
      return _mapService.default;
    }
  });
});
define('dummy/services/oauth-service', ['exports', 'ember-arcgis-portal-services/services/oauth-service'], function (exports, _oauthService) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function () {
      return _oauthService.default;
    }
  });
});
define('dummy/services/popup', ['exports', 'torii/services/popup'], function (exports, _popup) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function () {
      return _popup.default;
    }
  });
});
define('dummy/services/portal-service', ['exports', 'ember-arcgis-portal-services/services/portal-service'], function (exports, _portalService) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function () {
      return _portalService.default;
    }
  });
});
define('dummy/services/sharing-service', ['exports', 'ember-arcgis-portal-services/services/sharing-service'], function (exports, _sharingService) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function () {
      return _sharingService.default;
    }
  });
});
define('dummy/services/torii-session', ['exports', 'torii/services/session'], function (exports, _session) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function () {
      return _session.default;
    }
  });
});
define('dummy/services/torii', ['exports', 'torii/services/torii'], function (exports, _torii) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function () {
      return _torii.default;
    }
  });
});
define('dummy/services/user-service', ['exports', 'ember-arcgis-portal-services/services/user-service'], function (exports, _userService) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function () {
      return _userService.default;
    }
  });
});
define('dummy/services/vector-service', ['exports', 'ember-arcgis-server-services/services/vector-service'], function (exports, _vectorService) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function () {
      return _vectorService.default;
    }
  });
});
define('dummy/should-add-token/util', ['exports', 'ember-arcgis-server-services/should-add-token/util'], function (exports, _util) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function () {
      return _util.default;
    }
  });
});
define("dummy/snippets", ["exports"], function (exports) {
  "use strict";

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = {};
});
define("dummy/templates/application", ["exports"], function (exports) {
  "use strict";

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = Ember.HTMLBars.template({ "id": "FA4tI0u5", "block": "{\"symbols\":[],\"statements\":[[1,[18,\"welcome-page\"],false],[0,\"\\n\"],[0,\"\\n\"],[1,[18,\"outlet\"],false]],\"hasEval\":false}", "meta": { "moduleName": "dummy/templates/application.hbs" } });
});
define("dummy/templates/components/code-snippet", ["exports"], function (exports) {
  "use strict";

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = Ember.HTMLBars.template({ "id": "I3g5LP0b", "block": "{\"symbols\":[],\"statements\":[[1,[18,\"source\"],false],[0,\"\\n\"]],\"hasEval\":false}", "meta": { "moduleName": "dummy/templates/components/code-snippet.hbs" } });
});
define('dummy/torii-adapters/application', ['exports', 'dummy/torii-adapters/arcgis-oauth-bearer'], function (exports, _arcgisOauthBearer) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = _arcgisOauthBearer.default;
});
define('dummy/torii-adapters/arcgis-oauth-bearer', ['exports', 'dummy/config/environment'], function (exports, _environment) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = Ember.Object.extend({

    authCookieName: 'esri_auth',

    portalBaseUrl: 'https://www.arcgis.com/',

    signoutUrl: Ember.computed('portalBaseUrl', function () {
      // baseURL is basically deprecated, in preference of rootURL.
      // So, we will use baseURL if present, but prefer rootURL
      var base = _environment.default.baseURL || _environment.default.rootURL;
      return this.get('portalBaseUrl') + '/sharing/rest/oauth2/signout?redirect_uri=' + window.location.protocol + '//' + window.location.host + base;
    }),

    /**
     * Initialize the adapter
     * As it starts up we basically check for various configuration
     * options, and update the defaults
     */
    init: function init() {
      this._super.init && this._super.init.apply(this, arguments);
      if (_environment.default.APP.authCookieName) {
        this.set('authCookieName', _environment.default.APP.authCookieName);
      }
      // Unless working against a portal instance, this can be left as the default
      if (_environment.default.torii.providers['arcgis-oauth-bearer'].portalUrl) {
        this.set('portalBaseUrl', _environment.default.torii.providers['arcgis-oauth-bearer'].portalUrl);
      } else {
        Ember.warn('ENV.torii.providers[\'arcgis-oauth-bearer\'].portalUrl not defined. Defaulting to https://www.arcgis.com');
      }
    },


    /**
     * Promisified getJson
     */
    _getJson: function _getJson(url) {
      return new Ember.RSVP.Promise(function (resolve, reject) {
        Ember.$.ajax({
          url: url,
          dataType: 'json',
          success: Ember.run.bind(null, function (data) {
            if (data.error) {
              Ember.debug('torii:adapter:arcgis-oauth-bearer:open portals/self call shows token was not valid.');
              reject(data);
            } else {
              resolve(data);
            }
          }),
          error: Ember.run.bind(null, reject)
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
        Ember.debug('torii:adapter:arcgis-oauth-bearer:open got response from portal/self & assigning to session');

        if (_environment.default.torii.providers['arcgis-oauth-bearer'].loadGroups) {
          // make a request to get user's groups
          var username = portal.user.username;
          var userUrl = _this.get('portalBaseUrl') + '/sharing/rest/community/users/' + username + '?f=json&token=' + token;
          return Ember.RSVP.hash({
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

        // always store the information
        var cookieData = _this._createCookieData(token, expires, user, portal);
        _this._store('torii-provider-arcgis', cookieData);

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
      var _this2 = this;

      return new Ember.RSVP.Promise(function (resolve /*, reject */) {
        // always nuke the localStorage things
        if (window.localStorage) {
          window.localStorage.removeItem('torii-provider-arcgis');
        }
        // TODO find a cleaner means to handle this iframe jiggery pokery
        if (_environment.default.torii.providers['arcgis-oauth-bearer'].display && _environment.default.torii.providers['arcgis-oauth-bearer'].display === 'iframe') {
          throw new Error('To log out of ArcGIS Online, you should redirect the browser to ' + _this2.get('signoutUrl'));
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
      return new Ember.RSVP.Promise(function (resolve, reject) {
        // try for a cookie...
        var result = self._checkCookie(self.get('authCookieName'));
        // failing that look in localStorage
        if (!result.valid) {
          result = self._checkLocalStorage('torii-provider-arcgis');
        }

        if (result.valid) {
          // degate to the ope function to do the work...
          Ember.debug('Fetch has valid client-side information... opening session...');

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
          Ember.debug('Fetch did not find valid client-side information... rejecting');
          reject();
        }
      });
    },


    /**
     * Checks local storage for auth data
     */
    _checkLocalStorage: function _checkLocalStorage(keyName) {
      Ember.debug('torii:adapter:arcgis-oauth-bearer:checkLocalStorage keyName ' + keyName);
      var result = {
        valid: false
      };

      if (window.localStorage) {
        var stored = window.localStorage.getItem(keyName);
        if (stored) {
          result.authData = JSON.parse(stored);
          if (new Date(result.authData.expires) > new Date()) {
            Ember.debug('torii:adapter:arcgis-oauth-bearer:checkLocalStorage authdata has not expired yet ');
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
          Ember.debug('torii:adapter:arcgis-oauth-bearer:checkCookie: cookie has not expired yet...');
        } else {
          // There is an occasional bug where it seems that we can have valid tokens
          // with expires values in the past. Where this gets really odd is that
          // when we make a call to /authorize ahd this borked cookie is sent along
          // the cookie is not overwritten w/ an updated cookie.
          // Thus, we return the auth data in either case
          Ember.debug('torii:adapter:arcgis-oauth-bearer:checkCookie: cookie has expired - but we are still going to try to use it');
        }
        result.authData = cookieData;
        result.valid = true;
      }
      return result;
    }
  });
});
define("dummy/torii-provider-arcgis/tests/addon.lint-test", [], function () {
  "use strict";
});
define("dummy/torii-provider-arcgis/tests/app.lint-test", [], function () {
  "use strict";
});
define('dummy/torii-providers/arcgis-oauth-bearer', ['exports', 'torii/providers/oauth2-bearer', 'torii/configuration', 'dummy/torii-providers/query-string', 'dummy/config/environment'], function (exports, _oauth2Bearer, _configuration, _queryString, _environment) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  /**
   * arcgis-oauth.js
   *
   * torii provider that works with ArcGIS.com oauth
   */
  var ArcGISOAuth = _oauth2Bearer.default.extend({
    name: 'arcgis-oauth-bearer',

    // Allow the portalUrl to be passed in, but default to ago
    portalUrl: (0, _configuration.configurable)('portalUrl', 'https://www.arcgis.com'),

    path: '/sharing/oauth2/authorize',

    // construct the authorize end-point url based on the portalUrl
    baseUrl: (0, _configuration.configurable)('baseUrl', function () {
      return '' + this.get('portalUrl') + this.get('path');
    }),

    showSocialLogins: (0, _configuration.configurable)('showSocialLogins', false),

    display: (0, _configuration.configurable)('display', 'default'),

    expiration: (0, _configuration.configurable)('expiration', 20160),

    locale: (0, _configuration.configurable)('locale', 'en-us'),

    // These params must be present in on the provider
    requiredUrlParams: ['response_type', 'showSocialLogins', 'display', 'expiration', 'locale'],
    // additional params that this provider accepts
    optionalUrlParams: ['client', 'parent', 'autoAccountCreateForSocial', 'socialLoginProviderName'],
    // params the provider will extract from the redirected url
    responseParams: ['token', 'state', 'expires_in'],

    customRedirectUri: (0, _configuration.configurable)('customRedirectUri', ''),

    _currentBaseUrl: function _currentBaseUrl() {
      return [window.location.protocol, '//', window.location.host].join('');
    },

    buildQueryString: function buildQueryString(options) {
      var requiredParams = this.get('requiredUrlParams');
      var optionalParams = this.get('optionalUrlParams');

      var qs = _queryString.default.create({
        provider: this,
        requiredParams: requiredParams,
        optionalParams: optionalParams,
        options: options
      });

      return qs.toString();
    },

    buildUrl: function buildUrl(options) {
      var base = this.get('baseUrl');
      if (options.portalUrl || options.path) {
        base = options.portalUrl || this.get('portalUrl');
        var path = options.path || this.get('path');
        base = '' + base + path;
      }
      delete options.portalUrl;
      delete options.path;

      var qs = this.buildQueryString(options);

      return [base, qs].join('?');
    },

    /**
     * shows the pop-up/iframe - we override the base implementation so
     * we can merge the passed in options into the object before we show
     * the login
     */
    open: function open(options) {
      options = options || {};

      if (options.remoteServiceName) {
        // torii uses this to determine whether a popout or an iframe is used
        // we need to be able to pass this option in at runtime
        this.set('configuredRemoteServiceName', options.remoteServiceName);
        delete options.remoteServiceName;
      }

      var display = options.display || this.get('display');
      if (display === 'iframe') {
        // the display parameter is sent on the url querystring
        // if we are using an iframe, we need to set the parent to the current domain
        options.parent = this._currentBaseUrl(); // window.location.protocol + '//' + window.location.hostname;
      }

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
        if (_environment.default.baseURL || _environment.default.rootURL) {
          var path = _environment.default.baseURL || _environment.default.rootURL;
          uri = this._currentBaseUrl() + path + 'torii-provider-arcgis/redirect.html';
        } else {
          uri = this._currentBaseUrl() + '/' + 'torii-provider-arcgis/redirect.html';
        }
      }

      this.set('redirectUri', uri);

      var name = this.get('name');
      var url = this.buildUrl(options);
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
        Ember.debug('session.open is returning with data...');
        return {
          authorizationToken: authData,
          provider: name,
          redirectUri: redirectUri
        };
      });
    }

  });

  exports.default = ArcGISOAuth;
});
define('dummy/torii-providers/query-string', ['exports'], function (exports) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });


  /*
    NOTE: this is mostly the same implementation as the default torii implementation
            the difference is that it takes an `options` which it uses when constructing the querystring
  */

  var camelize = Ember.String.camelize,
      get = Ember.get;

  function isValue(value) {
    return value || value === false;
  }

  function getParamValue(obj, paramName, optional) {
    var camelizedName = camelize(paramName),
        value = get(obj, camelizedName);

    if (!optional) {
      if (!isValue(value) && isValue(get(obj, paramName))) {
        throw new Error('Use camelized versions of url params. (Did not find ' + '"' + camelizedName + '" property but did find ' + '"' + paramName + '".');
      }

      if (!isValue(value)) {
        throw new Error('Missing url param: "' + paramName + '". (Looked for: property named "' + camelizedName + '".');
      }
    }

    return isValue(value) ? encodeURIComponent(value) : undefined;
  }

  function getOptionalParamValue(obj, paramName) {
    return getParamValue(obj, paramName, true);
  }

  exports.default = Ember.Object.extend({
    init: function init() {
      this.obj = this.provider;
      this.urlParams = Ember.A(this.requiredParams).uniq();
      this.optionalUrlParams = Ember.A(this.optionalParams || []).uniq();

      this.optionalUrlParams.forEach(function (param) {
        if (this.urlParams.indexOf(param) > -1) {
          throw new Error("Required parameters cannot also be optional: '" + param + "'");
        }
      }, this);
    },

    toString: function toString() {
      var urlParams = this.urlParams;
      var optionalUrlParams = this.optionalUrlParams;
      var obj = this.obj;
      var keyValuePairs = Ember.A([]);

      var options = this.get('options');
      var optionsKeys = Object.keys(options);

      urlParams.forEach(function (paramName) {
        if (!optionsKeys.includes(paramName)) {
          var paramValue = getParamValue(obj, paramName);
          keyValuePairs.push([paramName, paramValue]);
        }
      });

      optionalUrlParams.forEach(function (paramName) {
        if (!optionsKeys.includes(paramName)) {
          var paramValue = getOptionalParamValue(obj, paramName);
          if (isValue(paramValue)) {
            keyValuePairs.push([paramName, paramValue]);
          }
        }
      });

      optionsKeys.forEach(function (paramName) {
        keyValuePairs.push([paramName, encodeURIComponent(options[paramName])]);
      });

      return keyValuePairs.map(function (pair) {
        return pair.join('=');
      }).join('&');
    }
  });
});
define("dummy/translations/en-us", ["exports"], function (exports) {
  "use strict";

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = { "addons": { "components": { "itemPicker": { "aria": { "chartable-icon": "Attribute can be charted", "disabled": "Disabled", "first_pg": "First Page", "last_pg": "Last Page", "next": "Next", "prev": "Previous" }, "buttons": { "back": "Back", "preview": "Preview", "select": "Select", "selectAnyway": "Select Anyway", "selectMultiple": "Select", "validating": "Validating data..." }, "datasets": "Datasets", "deselectAll": "Deselect All", "errors": { "httpsNotSupported": "This service does not support HTTPS. Please update your server settings and try again." }, "itemDetails": "Item Details", "items": "Items", "layerList": "Layers and Tables", "licenses": { "custom": "Custom License", "none": "No license specified" }, "loading": "loading", "loadingLayers": "Loading Layers...", "noItems": { "withQuery": "No items matched your search.", "withoutQuery": "No items found." }, "rows": "{count} Rows", "searchDatasets": "Search datasets", "searchItems": "Search items", "selectedCount": "Total Selected: {count}", "shared": { "content_types": { "document": "Document", "raster": "Raster Dataset", "spatial": "Spatial Dataset", "storymap": "Story Map", "table": "Tabular Dataset", "webmap": "Web Map", "webmappingapp": "Web Mapping Application" }, "fieldType": { "esriFieldTypeBlob": "Blob", "esriFieldTypeDate": "Date or Time", "esriFieldTypeDouble": "Number", "esriFieldTypeGUID": "Unique ID", "esriFieldTypeGeometry": "Geometry", "esriFieldTypeGlobalID": "Unique ID", "esriFieldTypeInteger": "Number", "esriFieldTypeOID": "Unique ID", "esriFieldTypeRaster": "Raster", "esriFieldTypeSingle": "Number", "esriFieldTypeSmallInteger": "Number", "esriFieldTypeString": "Text" }, "itemType": { "featureService": "Feature Service", "imageService": "Image Service", "mapService": "Map Service", "webMap": "Web Map", "webMappingApplication": "Web Mapping Application" } }, "sharedBy": "Shared by" }, "loadingIndicator": { "defaultMessage": "Loading..." }, "searchForm": { "searchItems": "Search items" } } } };
});
define('dummy/utils/intl/missing-message', ['exports', 'ember-intl/utils/missing-message'], function (exports, _missingMessage) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function () {
      return _missingMessage.default;
    }
  });
});
define('dummy/utils/is-guid', ['exports', 'ember-arcgis-portal-components/utils/is-guid'], function (exports, _isGuid) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function () {
      return _isGuid.default;
    }
  });
});
define('dummy/utils/query-helpers', ['exports', 'ember-arcgis-portal-components/utils/query-helpers'], function (exports, _queryHelpers) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function () {
      return _queryHelpers.default;
    }
  });
});
define('dummy/utils/titleize', ['exports', 'ember-cli-string-helpers/utils/titleize'], function (exports, _titleize) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function () {
      return _titleize.default;
    }
  });
});


define('dummy/config/environment', [], function() {
  var prefix = 'dummy';
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

});

if (!runningTests) {
  require("dummy/app")["default"].create({"name":"ember-arcgis-portal-components","version":"0.9.0+951c68f3"});
}
//# sourceMappingURL=dummy.map
