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

  placeholderi18nKey: Ember.computed('_i18nScope', function () {
    return this.get('_i18nScope') + 'searchItems';
  }),

  didReceiveAttrs () {
    this._super(...arguments);
    this.set('_q', this.get('q'));
  },

  submit (e) {
    e.preventDefault();
    let query = this.get('_q');
    Ember.tryInvoke(this, 'onSearch', [query]);
  },

  actions: {
    cancel () {
      this.set('_q', '');
      Ember.tryInvoke(this, 'onSearch', ['']);
    }
  }
});
