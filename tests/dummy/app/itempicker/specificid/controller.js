import Ember from 'ember';

export default Ember.Controller.extend({
  selectedItem: null,

  url: 'http://dc.mapsqa.arcgis.com',

  actions: {
    onSelectItem (selected) {
      Ember.$('#myModal').modal('hide');
      this.set('selectedItem', selected);
    },
  }
});
