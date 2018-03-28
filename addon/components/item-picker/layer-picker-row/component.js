import Component from '@ember/component';
import layout from './template';
import { computed } from '@ember/object';
import { inject as service } from '@ember/service';
export default Component.extend({
  layout,
  intl: service(),
  /**
   * Compute the translation scope
   */
  _i18nScope: computed('i18nScope', function () {
    return `${this.getWithDefault('i18nScope', 'addons.components.itemPicker')}.`;
  }),
  /**
   * Compute the i18n key for the geometry type and return that
   */
  geometryTypeKey: computed('layer', function () {
    let layer = this.get('layer');
    let type = layer.geometryType || 'table';
    let key = `${this.get('_i18nScope')}shared.geometryType.${type}`;
    console.debug(`Key is ${key}`);
    return key;
  })
});
