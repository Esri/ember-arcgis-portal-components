# ember-arcgis-portal-components

[![npm version][npm-img]][npm-url]
[![build status][travis-img]][travis-url]
[![apache licensed](https://img.shields.io/badge/license-Apache-green.svg?style=flat-square)](https://raw.githubusercontent.com/Esri/ember-arcgis-portal-components/master/LICENSE)

[npm-img]: https://img.shields.io/npm/v/ember-arcgis-portal-components.svg?style=flat-square
[npm-url]: https://www.npmjs.com/package/ember-arcgis-portal-components
[travis-img]: https://img.shields.io/travis/Esri/ember-arcgis-portal-components/master.svg?style=flat-square
[travis-url]: https://travis-ci.org/Esri/ember-arcgis-portal-components


> **DEPRECATED**: This addon is no longer in production use, nor maintained.

> Ember Components for interacting with ArcGIS Online/Enterprise items.

This repository contains standalone components from [ArcGIS Hub](https://hub.arcgis.com) for interacting with ArcGIS Online and Enterprise items, making it extremely simple to include a responsive search dialog in your own Ember, [Bootstrap](https://getbootstrap.com/) application.

Check out the [live demo](https://esri.github.io/ember-arcgis-portal-components/#/itempicker)

![screenshot](screenshot.png)

## Installation

```
ember install ember-arcgis-portal-components
```

## Components

### Item Picker

The item picker component allows a user to search a portal for items, see a preview of the item, and then get the item returned. While commonly used in a modal, the component can be used in any context.

[Documentation](./docs/item-picker.md)

## Contributing
The components in this addon are used in MANY MANY places. As such, changes made to existing components, especially any external API surfaces is prone to having catastrophic downstream effects. Thus - before making any changes, please read and understand the [design document](./docs/design-docs.md). We are working on adding more unit and integration tests, but this will be an on-going process. Until we have a very high-level of coverage, modifications to these components should be considered a high-risk activity.


### Generating a New Component

When generating a new component, please structure your files in the following order. This will help standardize the files and keep everything in an organized format:

1. Injections
2. Component stuff (classNames, tagName, etc)
3. Component lifecycle hooks (init, didInsertElement)
    * roughly in the order they happen
4. Properties
5. Computed properties
6. Functions
7. Actions


### Examples

#### Default Usage (selectAction)

```hbs
{{item-picker
      selectAction=(action "onSelectItem")}}
```

The selectAction handler will be passed the selected item, and it may be passed a second `options` param which will contain contextually specific content. For example, if the item selected is a Feature Service, then the Preview will show a layer picker list. The selected layer will be pass in the options as `{layer: {...}}`

```js
actions: {
  onSelectItem(item, options) {
    ...
  }
}
```

### Setup

* `git clone https://github.com/Esri/ember-arcgis-portal-components`
* `cd ember-arcgis-portal-components`
* `npm install`
* `bower install`

### Running

* `ember serve`
* Visit your app at [http://localhost:4200](http://localhost:4200).

### Running Tests

* `npm test` (Runs `ember try:each` to test your addon against multiple Ember versions)
* `ember test`
* `ember test --server`

### Building

* `ember build`

For more information on using ember-cli, visit [https://ember-cli.com/](https://ember-cli.com/).

### Contributing

Esri welcomes contributions from anyone and everyone. Please see our [guidelines for contributing](https://github.com/Esri/contributing/blob/master/CONTRIBUTING.md).

### License

Copyright (c) 2018 Esri

Licensed under the Apache License, Version 2.0 (the "License");
you may not use this file except in compliance with the License.
You may obtain a copy of the License at

> http://www.apache.org/licenses/LICENSE-2.0

Unless required by applicable law or agreed to in writing, software distributed under the License is distributed on an "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.

See the License for the specific language governing permissions and limitations under the License.

A copy of the license is available in the repository's [LICENSE](./LICENSE) file.
