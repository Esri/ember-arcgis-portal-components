/*    Copyright 2017 Esri
  Licensed under the Apache License, Version 2.0 (the "License");
  you may not use this file except in compliance with the License.
  You may obtain a copy of the License at
      http://www.apache.org/licenses/LICENSE-2.0
  Unless required by applicable law or agreed to in writing, software
  distributed under the License is distributed on an "AS IS" BASIS,
  WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
  See the License for the specific language governing permissions and
  limitations under the License. */

import { computed } from '@ember/object';

import { notEmpty, reads } from '@ember/object/computed';
import { inject as service } from '@ember/service';
import Component from '@ember/component';
import layout from './template';

export default Component.extend({
  layout,
  intl: service(),
  items: service('items-service'),
  session: service(),

  classNames: [ 'item-picker-current-item-preview' ],

  didRender () {
    // Needed to jump to error message
    if (this.get('showError')) {
      this.element.scrollTop = 0;
    }
  },

  isValidating: false,
  selectAnyway: false,
  shouldValidate: false,
  showError: notEmpty('validationResult'),
  description: reads('model.item.description'),

  /**
   * Compute the translation scope
   */
  _i18nScope: computed('i18nScope', function () {
    return `${this.getWithDefault('i18nScope', 'addons.components.itemPicker')}.`;
  }),

  /**
   * What should the select button text be? we have variations depending on status
   */
  selectButtonText: computed('isValidating', 'selectAnyway', function () {
    const intl = this.get('intl');
    let key = 'buttons.select';
    if (this.get('isValidating')) {
      key = 'buttons.validating';
    } else if (this.get('selectAnyway')) {
      key = 'buttons.selectAnyway';
    }
    return intl.t(`${this.get('_i18nScope')}${key}`);
  }),

  /**
   * Get the translated form of the Item Type
   */
  itemType: computed('_i18nScope', 'model.item.type', function () {
    const itemType = this.get('model.item.type');
    let result = itemType;
    const key = `${this.get('_i18nScope')}shared.itemType.${itemType.camelize()}`;
    const intl = this.get('intl');
    // if we don't have a translation for it, just display it as-is
    if (intl.exists(key)) {
      result = intl.t(key);
    }
    return result;
  }),

  /**
   * Construct the preview url
   */
  previewUrl: computed('model.item', function () {
    const item = this.get('model.item');
    let previewURL;
    // if the item has a url property, use that...
    if (item.url) {
      previewURL = item.url;
    } else {
      // compute a url based on the type...
      const protocol = '//';
      let host = this.get('session.portalHostname');
      switch (item.type.toLowerCase()) {
        case 'web map':
          previewURL = `${protocol}${host}/home/webmap/viewer.html?webmap=${item.id}`;
          break;
        default:
          previewURL = `${protocol}${host}/home/item.html?id=${item.id}`;
      }
    }
    return previewURL;
  }),

  thumbnailUrl: computed('model.item', function () {
    const item = this.get('model.item');
    const portalUrl = this.get('items').getPortalRestUrl();
    let url = `${portalUrl}/content/items/${item.id}/info/${item.thumbnail}`;
    const notPublic = this.get('model.item.access') !== 'public';
    if (notPublic) {
      const token = this.get('item.session.token');
      url = url + '?token=' + token;
    }
    return url;
  }),

  /**
   * What class should be used for any messages
   */
  messageClass: computed('validationResult', function () {
    if (this.get('validationResult.status') === 'warning') {
      return 'alert-warning';
    } else if (this.get('validationResult.status') === 'error') {
      return 'alert-danger';
    }
  }),

  actions: {
    onItemSelected (item) {
      const validator = this.get('onSelectionValidator');

      if (validator && typeof validator === 'function' && !this.get('selectAnyway')) {
        this.set('isValidating', true);
        validator(item)
          .then((resp) => {
            this.set('isValidating', false);
            this.set('validationResult', resp.status);
            if (resp.status.status === 'error') {
              return;
            } else if (resp.status.status === 'warning') {
              this.set('selectAnyway', true);
              return;
            } else {
              this.get('onItemSelected')(item);
            }
          });
      } else {
        this.get('onItemSelected')(item);
      }
    }
  }

});
