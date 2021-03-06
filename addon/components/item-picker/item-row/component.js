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

import {inject as service} from '@ember/service';
import {computed} from '@ember/object';
import Component from '@ember/component';
import singleTemplate from './single/template';
import multipleTemplate from './multiple/template';
import {tryInvoke} from '@ember/utils';
import {next} from '@ember/runloop';

export default Component.extend({
  layout: computed('selectMultiple', function () {
    let layout = singleTemplate;
    if (this.get('selectMultiple')) {
      layout = multipleTemplate;
    }
    return layout;
  }),
  session: service(),
  itemService: service('items-service'),

  tagName: 'li',
  classNames: ['item-picker-item-results-item'],
  classNameBindings: ['isSelected', 'selectMultiple'],

  isSelected: computed('currentItemId', 'model.id', function () {
    return this.get('currentItemId') === this.get('model.id');
  }),

  typeOfData: computed('model.type', function () {
    let type = this.get('model.type');
    switch (type) {
      case 'Feature Service':
      case 'Map Service':
        return 'Data';
      default:
        return type;
    }
  }),

  checked: computed('model.id', 'itemsToAdd.[]', function () {
    return this.get('itemsToAdd').findBy('id', this.get('model.id'));
  }),

  url: computed('model.id', 'session.portalHostname', function () {
    return `https://${this.get('session.portalHostname')}/home/item.html?id=${this.get('model.id')}`;
  }),

  actions: {
    selectItem (item) {
      // this is needed because of what appears to be a glimmer race condition.
      // if not present, the checked state of the checkbox will be out of sync
      next(this, () => {
        tryInvoke(this, 'onClick', [{item}]);
      });
    }
  }

});
