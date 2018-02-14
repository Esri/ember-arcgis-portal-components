import Ember from 'ember';
import layout from './template';

export default Ember.Component.extend({
  layout,
  tagName: 'form',
  classNames: ['portal-search-form', 'form-group-tsf'],

  /**
   * Compute the translation scope
   */
  _i18nScope: Ember.computed('i18nScope', function () {
    return `${this.getWithDefault('i18nScope', 'addons.components.searchForm')}.`;
  }),

  inputElementId: Ember.computed('elementId', function () {
    return this.get('elementId') + 'Input';
  }),

  clearElementId: Ember.computed('elementId', function () {
    return this.get('elementId') + 'Clear';
  }),

  placeholderi18nKey: Ember.computed('i18nBase', function () {
    return this.get('i18nBase') + 'itemPicker.searchItems';
  }),

  submit (e) {
    e.preventDefault();
    let query = this.get('_q');
    Ember.tryInvoke(this, 'onSearch', [query]);
  },

  actions: {
    cancel () {
      this.set('q', '');
      this.set('_q', '');
      Ember.tryInvoke(this, 'onSearch', ['']);
    }
  }
});
