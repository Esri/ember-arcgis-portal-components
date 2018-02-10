import Ember from 'ember';
import layout from './template';

export default Ember.Component.extend({
  layout,
  tagName: 'form',
  classNames: ['portal-search-form', 'form-group-tsf'],

  i18nBase: 'ember-arcgis-portal-components.',

  inputElementId: Ember.computed('elementId', function () {
    return this.get('elementId') + 'Input';
  }),

  placeholderi18nKey: Ember.computed('i18nBase', 'placeholder', function () {
    return this.get('i18nBase') + 'itemPicker.searchItems';
  }),

  submit (e) {
    e.preventDefault();
    let query = this.get('_q');
    Ember.tryInvoke(this, 'onSearch', [query]);
  }
});
