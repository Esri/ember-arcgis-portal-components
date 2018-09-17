module.exports = {
  root: true,
  parserOptions: {
    ecmaVersion: 2017,
    sourceType: 'module'
  },
  plugins: [
    'ember'
  ],
  extends: [
    'eslint:recommended',
    './node_modules/eslint-config-semistandard/index.js',
    'plugin:ember/recommended'
  ],
  env: {
    'browser': true
  },
  rules: {
    "comma-dangle": [2, "only-multiline"],
    "no-console": 0,
    "no-extra-boolean-cast": 0,
    // don't allow uses of jQuery
    "ember/no-jquery": 2,
    // don't allow use of the global fetch
    "no-restricted-globals": [2, {
      name: "fetch",
      message: "Use ember-fetch (import fetch from 'fetch') instead of the global."
    }]
  },
  globals: {
    "_": false,
    "moment": false,
    "Set": false,
    "Map": false,
    "md5": false
  },
  overrides: [
    // node files
    {
      files: [
        'index.js',
        'testem.js',
        'ember-cli-build.js',
        'config/**/*.js',
        'tests/dummy/config/**/*.js'
      ],
      excludedFiles: [
        'app/**',
        'addon/**',
        'tests/dummy/app/**'
      ],
      parserOptions: {
        sourceType: 'script',
        ecmaVersion: 2015
      },
      env: {
        browser: false,
        node: true
      },
      plugins: ['node'],
      rules: Object.assign({}, require('eslint-plugin-node').configs.recommended.rules, {
        // add your custom rules and overrides for node files here
      })
    },

    // test files
    {
      files: ['tests/**/*.js'],
      excludedFiles: ['tests/dummy/**/*.js'],
      env: {
        embertest: true
      },
      rules: {
        // warn against use of jQuery in tests
        "ember/no-jquery": 1
      }
    },

    // dummy app files
    {
      files: ['tests/dummy/**/*.js'],
      rules: {
        // warn against use of jQuery in the dummy app
        "ember/no-jquery": 1
      }
    }
  ]
};
