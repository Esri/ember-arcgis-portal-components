import Ember from 'ember';
import layout from './template';

export default Ember.Component.extend({
  layout,
  // TODO: ideally we'd remove the form tag from the template
  // but not sure how that would work w/ the actions
  // tagName: 'form',
  classNames: ['table-search-form'], // , 'form-group'],

  i18nBase: 'ember-arcgis-portal-components.',

  inputElementId: Ember.computed('elementId', function () {
    return this.get('elementId') + 'Input';
  }),

  placholderi18nKey: Ember.computed('i18nBase', function () {
    return this.get('i18nBase') + 'itemPicker.searchItems';
  })
});
