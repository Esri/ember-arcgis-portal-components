# ember-arcgis-portal-components



## Installation
```
ember install ember-arcgis-portal-components
```

## Components

### Item Picker

The item picker component allows a user to search a portal for items, see a preview of the item, and then get the item returned. While commonly used in a modal, the component can be used in any context. [Clone the repo locally and run the dummy application to see examples]()

### Layer Picker
Layer picker is part of the item picker. It allows for items with multiple layers to display them as radio buttons. This will then allow the user to select which layer they would like to use. The layer picker will display by default if the item is type `Feature Service` or `Map Service`.

### Generating a New Component
When generating a new component, please structure your files in the following order. This will help standardize the files and keep everything in an organized format:

1. Injections
2. Ember variables
  * (classNames, tagName, attributeBindings, init, didInsertElement, etc)
3. Properties and Computed Properties (CPs)
4. Functions
5. Actions


## Options for Item Picker
| Flag | Type | Required | Purpose |
|----|:-------:|:-------:|----------|
|   [selectAction]()   |     Function<br><small>(Closure Action)</small>      |   Yes   | This action is run when the `Select` button inside the item picker is pressed. This should be a closure action.   |
|  [searchItemsOnInit]()   |   Boolean   |No| Allows the item picker to execute a search and show the results as soon as it is rendered. This searches the active catalog on launch. If no active catalog is set, it will use the first available catalog. |
|   [selectMultiple]()   |   Boolean      |  No|  Allows the item picker to select multiple items at once. An <strong>array</strong> of items will be passed to the closure action.   |
|   [catalog]()   |    Array         |   No   | Allows the item picker to be filtered based on ArcGIS Online (AGO) queries. If the `catalog` array has more than one entry, a "facets" list will be shown on the left of the component, and it will use the `name` property. |
|   [onSelectionValidator]()   |    Function<br><small>(Closure Action)</small>  |   No   |    Allows an application to do more in-depth validation of an item before using it.  |
|  [portalOpts]()    |   Object      |  No    |   Allows a different portal to be assigned to an item picker.       |


## Examples
#### Default Usage (selectAction)
```
{{item-picker
      selectAction=(action "onSelectItem")}}
```

### Search on Initialize (searchItemsOnInit)

```
{{item-picker
  searchItemsOnInit=true
  selectAction=(action "onSelectItem")}}
```

### Multi-Select (selectMultiple)
```
{{item-picker
  selectMultiple=true
  selectAction=(action "onSelectItem")}}
```

### Facets (catalog)
This code will have two facets on the left hand side of the component. `All` and `Waste Water Apps`

In the controller:

```
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

```
{{item-picker
  searchItemsOnInit=true
  catalog=facets
  selectAction=(action "onSelectItem")}}
```



### Validation (onSelectionValidator)

In the controller:

```
actions: {
  selectionValidator(item) {
    // validation logic
    if (item.something) {
      return {
        item: item,
        status: 'error',
        message: 'This item can not be used because ...'
      }
    } else {
      // you can also manipulate the item here if you want...
      return {
        item: item,
        status: 'ok'
      };
    }
  }
}
```
In the template:

```
{{item-picker
      selectAction=(action "onSelectItem")
      onSelectionValidator=(action "selectionValidator") }}
```

#### Portal Options (portalOpts)

In the controller:

```
// in Controller
portalOpts: {
  portalBaseUrl: 'https://someotherportal.com',
  token: 'cb12---TOKEN-FOR-someotherportal.com---34..'
}
```
In the template:

```
{{item-picker
      selectAction=(action "onSelectItem")
      portalOpts=portalOpts }}
```



## Setup

* `git clone <repository-url>` this repository
* `cd ember-arcgis-portal-components`
* `npm install`
* `bower install`

## Running

* `ember serve`
* Visit your app at [http://localhost:4200](http://localhost:4200).

## Running Tests

* `npm test` (Runs `ember try:each` to test your addon against multiple Ember versions)
* `ember test`
* `ember test --server`

## Building

* `ember build`

For more information on using ember-cli, visit [https://ember-cli.com/](https://ember-cli.com/).
