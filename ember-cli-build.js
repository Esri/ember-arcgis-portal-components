'use strict';

const EmberAddon = require('ember-cli/lib/broccoli/ember-addon');

module.exports = function (defaults) {
  let app = new EmberAddon(defaults, {
    snippetPaths: ['snippets'],

    sassOptions: {
      includePaths: [
        'node_modules/bootstrap-sass/assets/stylesheets',
        'node_modules/calcite-bootstrap/dist/sass'
      ],
      sourceMap: true,
    },

    'ember-cli-bootstrap-sassy': {
      // don't import bootstrap JS, use ember-bootstrap instead
      'js': false
    },

    'ember-bootstrap': {
      'bootstrapVersion': 3,
      // NOTE: for now we are going to let ember-cli-bootstrap-sassy continue to deal w/ CSS/fonts
      'importBootstrapFont': false,
      'importBootstrapCSS': false
    }
  });

  /*
    This build file specifies the options for the dummy test app of this
    addon, located in `/tests/dummy`
    This build file does *not* influence how the addon or the app using it
    behave. You most likely want to be modifying `./index.js` or app's build file
  */

  return app.toTree();
};
