import Ember from 'ember';
import layout from './template';

export default Ember.Component.extend({
  layout,

  actions: {
    selectLayer: function (value) {
      const model = this.get('model');
      let selectedLayer = model.filter(layer => layer.name === value);
      this.set('model.selectedLayer', selectedLayer[0]);
    }
  }
});
