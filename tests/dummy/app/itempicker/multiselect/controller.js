import Controller from '@ember/controller';

export default Controller.extend({
  selectedItem: null,

  actions: {
    onSelectItem (selected) {
      this.set('selectedItem', selected);
    },
  }
});
