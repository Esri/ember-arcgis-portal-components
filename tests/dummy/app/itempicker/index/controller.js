import { inject as service } from '@ember/service';
import Controller from '@ember/controller';

export default Controller.extend({
  selectedItem: null,

  itemService: service('items-service'),

  isModalOpen: false,

  actions: {
    onSelectItem (selected) {
      this.set('isModalOpen', false);
      this.set('selectedItem', selected);
    }
  }
});
