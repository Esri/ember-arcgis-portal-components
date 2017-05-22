import Ember from 'ember';

export default Ember.Controller.extend({
  selectedItem: null,

  itemService: Ember.inject.service('items-service'),

  actions: {
    onSelectItem (selected) {
      Ember.$('#myModal').modal('hide');
      this.set('selectedItem', selected);
    }
  }
});
