import Controller from '@ember/controller';

export default Controller.extend({
  selectedItem: null,

  url: 'http://dc.mapsqa.arcgis.com',

  actions: {
    onSelectItem (selected) {
      this.set('selectedItem', selected);
    },
  }
});
