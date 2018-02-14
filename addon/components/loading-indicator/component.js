import Ember from 'ember';
import layout from './template';

/**
 * loading-indicator component
 *
 * Default Usage
 * {{loading-indicator}} - will pull in a default translated message
 *
 * Passing a custom message
 * {{loading-indicator message=(t 'some.translation.key')}}
 *
 * No Message - no message is shown
 * {{loading-indicator noMessage=true}}
 */

export default Ember.Component.extend({
  layout,
  intl: Ember.inject.service(),

  tagName: 'div',
  classNames: [ 'loader' ],
  classNameBindings: [ 'isActive' ],

  // default message
  message: '',
  isActive: true,

  msg: Ember.computed('message', function () {
    let message = this.getWithDefault('message', '');
    if (!message && !this.get('noMessage')) {
      message = this.get('intl').findTranslationByKey('addons.components.loadingIndicator.defaultMessage');
    }
    return message;
  })

});
