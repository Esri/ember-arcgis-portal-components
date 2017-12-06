import Ember from 'ember';
import config from './config/environment';

const Router = Ember.Router.extend({
  location: config.locationType,
  rootURL: config.rootURL
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

  this.route('itemPicker', function() {});
});

export default Router;
