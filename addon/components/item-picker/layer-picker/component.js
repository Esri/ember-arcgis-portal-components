import Ember from 'ember';
import layout from './template';

export default Ember.Component.extend({
  layout,

  actions: {
    test: function (value) {
      console.log(value);
      console.log(this);
    }
  }
});
