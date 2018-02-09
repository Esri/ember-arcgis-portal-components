import Ember from 'ember';
import singleTemplate from './single/template';
import multipleTemplate from './multiple/template';

export default Ember.Component.extend({
  layout: Ember.computed('selectMultiple', function () {
    let layout = singleTemplate;
    if (this.get('selectMultiple')) {
      layout = multipleTemplate;
    }
    return layout;
  }),
  session: Ember.inject.service(),
  itemService: Ember.inject.service('items-service'),

  tagName: 'li',
  classNames: [ 'item-picker-item-results-item' ],
  classNameBindings: [ 'isSelected', 'selectMultiple' ],

  didInsertElement () {
    const el = this.$('[data-toggle="tooltip"]');
    if (el.tooltip) {
      el.tooltip();
    }
  },

  willDestroyElement () {
    const el = this.$('[data-toggle="tooltip"]');
    if (el.tooltip) {
      el.tooltip('destroy');
    }
  },

  isSelected: Ember.computed('currentItemId', 'model.id', function () {
    return this.get('currentItemId') === this.get('model.id');
  }),

  numberOfItems: Ember.computed('events', function () {
    let events = this.get('events');
    let item = this.get('model');

    // filter out only the initiative we want
    let filteredEvents = events.filter(event => {
      return event.initiativeId === item.id;
    });

    // send back that length, otherwise there are no events
    return (filteredEvents.length > 0) ? filteredEvents[0].events.length : 0;
  }),

  typeOfData: Ember.computed('model.type', function () {
    let type = this.get('model.type');
    switch (type) {
      case 'Feature Service':
      case 'Map Service':
        return 'Data';
      default:
        return type;
    }
  }),

  checked: Ember.computed('model.id', 'itemsToAdd.[]', function () {
    const itemsToAdd = this.get('itemsToAdd');
    return !!itemsToAdd.findBy('id', this.get('model.id'));
  }),

  url: Ember.computed('model.id', 'session.portalHostname', function () {
    return `https://${this.get('session.portalHostname')}/home/item.html?id=${this.get('model.id')}`;
  }),

  actions: {
    selectItem (item) {
      Ember.run.next(this, () => {
        this.get('onClick')(item);
      });
    },
  }

});
