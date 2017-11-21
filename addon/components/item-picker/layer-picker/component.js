import Ember from 'ember';
import layout from './template';

export default Ember.Component.extend({
  layout,
  didInsertElement (test) {
    console.log(test);
  },

  actions: {
    test: function (value) {
      console.log(value);
      console.log(this);
    }
  }
});
