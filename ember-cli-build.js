'use strict';

const EmberAddon = require('ember-cli/lib/broccoli/ember-addon');

module.exports = function (defaults) {
  let app = new EmberAddon(defaults, {
    snippetPaths: ['snippets'],

    sassOptions: {
      includePaths: [
        // NOTE: I'm pretty sure this isn't needed
        'node_modules/bootstrap-sass/assets/stylesheets',
        'node_modules/calcite-bootstrap/dist/sass'
      ],
      sourceMap: true,
    },

    'ember-bootstrap': {
      'bootstrapVersion': 3,
      'importBootstrapFont': true
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
