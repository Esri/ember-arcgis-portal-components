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

import {isArray} from '@ember/array';
import {computed} from '@ember/object';
import {bind, run} from '@ember/runloop';
import Component from '@ember/component';
import forceHttps from 'ember-arcgis-portal-components/utils/force-https';

// NOTE: the test for this is in
// packages/opendata-ui/tests/integration/components/image-with-fallback/component-test.js
export default Component.extend({

  didInsertElement () {
    this.element.addEventListener('error', bind(this, this.onImageError));
  },

  willDestroyElement () {
    this.element.removeEventListener('error', bind(this, this.onImageError));
  },

  tagName: 'img',

  attributeBindings: ['src', 'title', 'alt'],

  imgIndex: 0,

  imgSrcAry: computed('imgSrc', 'fallbackSrc', function () {
    this.set('imgIndex', 0); // eslint-disable-line ember/no-side-effects
    const imgSrc = this.get('imgSrc');
    const result = isArray(imgSrc) ? imgSrc : [imgSrc];
    result.push(this.get('fallbackSrc'));
    return result;
  }),

  src: computed('imgSrcAry', 'imgIndex', function () {
    const imgSrc = this.get('imgSrcAry')[this.get('imgIndex')];
    let protocol = window.location.protocol || 'http';
    return forceHttps(imgSrc, protocol);
  }),

  onImageError: function () {
    run(() => {
      if (!this.get('isDestroyed') && !this.get('isDestroying')) {
        this.incrementProperty('imgIndex');
      }
    });
  }
});
