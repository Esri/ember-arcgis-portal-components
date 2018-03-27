# ember-arcgis-portal-components

[![npm version][npm-img]][npm-url]
[![build status][travis-img]][travis-url]
[![apache licensed](https://img.shields.io/badge/license-Apache-green.svg?style=flat-square)](https://raw.githubusercontent.com/Esri/ember-arcgis-portal-components/master/LICENSE)

[npm-img]: https://img.shields.io/npm/v/ember-arcgis-portal-components.svg?style=flat-square
[npm-url]: https://www.npmjs.com/package/ember-arcgis-portal-components
[travis-img]: https://img.shields.io/travis/Esri/ember-arcgis-portal-components/master.svg?style=flat-square
[travis-url]: https://travis-ci.org/Esri/ember-arcgis-portal-components


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

### Layer Picker

Layer picker is part of the item picker. It allows for items with multiple layers to display them as radio buttons. This will then allow the user to select which layer they would like to use. The layer picker will display by default if the item is type `Feature Service` or `Map Service`.

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

## Options for Item Picker
| Flag | Type | Required | Purpose |
|----|:-------:|:-------:|----------|
|   [selectAction](#default-usage-selectaction)   |     Function<br><small>(Closure Action)</small>      |   Yes   | This action is run when the `Select` button inside the item picker is pressed. This should be a closure action.   |
|  [searchItemsOnInit](#search-on-initialize-searchitemsoninit)   |   Boolean   |No| Allows the item picker to execute a search and show the results as soon as it is rendered. This searches the active catalog on launch. If no active catalog is set, it will use the first available catalog. |
|   [selectMultiple](#multi-select-selectmultiple)   |   Boolean      |  No|  Allows the item picker to select multiple items at once. An <strong>array</strong> of items will be passed to the closure action.   |
|   [catalog](#facets-catalog)   |    Array         |   No   | Allows the item picker to be filtered based on ArcGIS Online (AGO) queries. If the `catalog` array has more than one entry, a "facets" list will be shown on the left of the component, and it will use the `name` property. |
|   [onSelectionValidator](#validation-onselectionvalidator)   |    Function<br><small>(Closure Action)</small>  |   No   |    Allows an application to do more in-depth validation of an item before using it.  |
|  [portalOpts](#portal-options-portalopts)    |   Object      |  No    |   Allows a different portal to be assigned to an item picker.       |
|  [previewParams](#preview-params)    |   Object      |  No    |   Pass parameters to the Preview components       |
|  [rowComponent](#custom-row-component-rowcomponent)    |   String<br><small>(Component)</small>      |  No    |   Allows a different row layout to be passed into the item picker.       |

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



#### Search on Initialize (searchItemsOnInit)

```js
{{item-picker
  searchItemsOnInit=true
  selectAction=(action "onSelectItem")}}
```

#### Multi-Select (selectMultiple)

```js
{{item-picker
  selectMultiple=true
  selectAction=(action "onSelectItem")}}
```

#### Facets (catalog)
This code will have two facets on the left hand side of the component. `All` and `Waste Water Apps`

In the controller:

```js
facets: [
  {
    name: 'All',
    params: {query: { access: 'public'}}
  },
  {
    name: 'Waste Water Apps',
    params: {
      query: {
        type: ['Web Mapping Application'],
        typekeywords: ['-story'],
        tags: ['Waste Water']
      }
    }
  }
]
```

In the template:

```js
{{item-picker
  searchItemsOnInit=true
  catalog=facets
  selectAction=(action "onSelectItem")}}
```

#### Preview Params
Different Preview components are used depending on the type of the item. The `previewParams` is a means to send in some parameters to these components.

| param | description |
| --- | --- |
| showLayers | Used by the `feature-service-preview` component, and will cause a list of layers to be shown. |
| forceLayerSelection | Used by the `feature-service-preview` component, and force the user to select a layer/table. |


#### Validation (onSelectionValidator)

Validation functions should use the following signature `validate(item, options)`, and should return a `Promise` even if they don't do async operations. The selected item will always be passed in, but depending on the context, the options hash may contain additional information. For example, if a Map Service or Feature Service item is selected, the options hash will contain a `layer` object, allowing the validator to work with both the item and the specific layer.

Valid status values are `ok`, `warning` and `error`. For warnings, the user will be given the option to select the item despite the warning. In the case of an error the item can not be selected.

The message returned should be translated - do not rely on the item picker to translate messages.

```js
actions: {
  selectionValidator(item, options) {
    // validation logic
    if (item.something) {
      return resolve({
        item: item,
        status: {
          status: 'error',
          message: 'This item can not be used because ...'
        }
      });
    } else {
      // you can also manipulate the item here if you want...
      return resolve({
        item: item,
        status: {
          status: 'ok'
        }
      });
    }
  }
}
```

In the template:

```js
{{item-picker
      selectAction=(action "onSelectItem")
      onSelectionValidator=(action "selectionValidator") }}
```


#### Portal Options (portalOpts)

In the controller:

```js
// in Controller
portalOpts: {
  portalBaseUrl: 'https://someotherportal.com',
  token: 'cb12---TOKEN-FOR-someotherportal.com---34..'
}
```
In the template:

```js
{{item-picker
      selectAction=(action "onSelectItem")
      portalOpts=portalOpts }}
```


#### Custom Row Component (rowComponent)

In the template:

```js
{{item-picker
      selectAction=(action "onSelectItem")
      rowComponent="name-of-custom-component" }}
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

Copyright 2017 Esri

Licensed under the Apache License, Version 2.0 (the "License");
you may not use this file except in compliance with the License.
You may obtain a copy of the License at

> http://www.apache.org/licenses/LICENSE-2.0

Unless required by applicable law or agreed to in writing, software distributed under the License is distributed on an "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.

See the License for the specific language governing permissions and limitations under the License.

A copy of the license is available in the repository's [LICENSE](./LICENSE) file.
