# ember-arcgis-portal-components



## Installation
```
ember install ember-arcgis-portal-components
```

## Components

### Item Picker

The item picker component allows a user to search a portal for items, see a preview of the item, and then get the item returned. While commonly used in a modal, the component can be used in any context.

#### Default Usage
```
{{item-picker
      selectAction=(action "onSelectItem")}}
```

### Search on Initialize
As soon as the component is rendered, it will execute a search and show the results
```
{{item-picker
  searchItemsOnInit=true
  selectAction=(action "onSelectItem")}}
```

### Multi-Select
In this mode, an array of items will be passed to the closure action.
```
{{item-picker
  selectMultiple=true
  selectAction=(action "onSelectItem")}}
```

### Facets
Passing a `catalog` array will allows the developer to control the search to a much higher degree.

```
// in the controller...
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
The entries in this array will be used to generate a AGO search. Documentation of this schema will be forthcoming.

```
// in template
{{item-picker
  searchItemsOnInit=true
  catalog=facets
  selectAction=(action "onSelectItem")}}
```

If more the `catalog` array has more than one entry, a "facets" list will be shown on the left of the component, and it will use the `name` property. So - the code above will have two facets called 'All' and 'Waste Water Apps'.

### Validation
Many times an application will need to do more in-depth interrogation of an item before it can use it. The validation system is designed to accomodate this need.

```
{{item-picker
      selectAction=(action "onSelectItem")
      onSelectionValidator=(action "selectionValidator") }}
```

```
// in controller...
actions: {
  selectionValidator(item) {
    // validation logic of whatever type...
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
#### Portal Options
In some applications we have need to search for items in different portals. To address this, we can pass `portalOpts` into the component.

```
// in Controller
portalOpts: {
  portalBaseUrl: 'https://someotherportal.com',
  token: 'cb12---TOKEN-FOR-PORTAL---34..'
}
```
```
{{item-picker
      selectAction=(action "onSelectItem")
      portalOpts=portalOpts }}
```


All of these options can be combined


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
