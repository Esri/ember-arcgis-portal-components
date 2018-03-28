# Item Picker

The Item Picker encapsulates the selection of Items. At first this seems like a relatively straight-forward task, but, as we will see, there are a great many permutations that need to be addressed.

## Concepts and Usage

### Internal Model
Internally, the item picker components use a `model` instead of just an `item`. The model has the format of:

```json
{
  "item": {...},
  "options": {...}
}
```

The options hash can contain many different things depending on the context.

### Basic Usage

Item selection is the main purpose of the item picker, so it's no surprise that we pass the component an action. Since these handlers run "outside" the item picker, they *are not* passed a `model`. Instead two parameters are passed - the `item`, and an `options` hash.

```hbs
{{item-picker
    selectAction=(action "onSelectItem")}}
```

The selectAction handler will be passed the selected item, and it may be passed a second `options` param which will contain contextually specific content. For example, if the item selected is a Feature Service, then the Preview will show a layer picker list. The selected layer will be pass in the options as `{layer: {...}}`

```js
actions: {
  onSelectItem(item, options) {
    // do something with the item
  }
}
```

By default, the item picker will wait for the user to enter a query before issuing a search. If you want it to issue a query as soon as it's displayed, set the `searchItemsOnInit` attribute to true.

```hbs
{{item-picker
    searchItemsOnInit=true
    selectAction=(action "onSelectItem")}}
```

### Multiple Selection

There are scenarios where a user needs to select multiple items. This is supported by passing in `selectMultiple=true`.

```hbs
{{item-picker
    selectMultiple=true
    selectAction=(action "onSelectItem")}}
```

In this mode, clicking on a row in the item picker will toggle that item's selected state. If a validator has been passed in, the validator will also fire.

Clicking "Select" at the bottom of the Item Picker UI will call the `selectAction` and pass in an array containing the selected items.

### Specifying Portal Instance

By default, item picker will search public items in ArcGIS Online. If you are using the `torii-provider-arcgis`, and the user is authenticated, it will search the portal the user is authenticated against. This covers the vast majority of scenarios. However, there are scenarions in ArcGIS Hub when we need to specify a different portal instance than what the current user (or anon user) is authenticated against. The item picker supports this via the `portalOpts` attribute.

In the controller setup an object like this...

```js
portalOpts: {
  portalBaseUrl: 'https://someotherportal.com',
  token: 'cb12---TOKEN-FOR-someotherportal.com---34..'
}
```

And pass that into the item picker via the `portalOpts` attribute.

```js
{{item-picker
      selectAction=(action "onSelectItem")
      portalOpts=portalOpts }}
```


### Filtering and Faceting

As a developer using the item picker we need to be able to pass the component some sort of filter - say restricting the selection to Web Maps. To do this we pass a hash into the item picker via the `catalog` attribute.

The `catalog` must be an array. If there are more than one entry, then the item picker UI will show a list of "facets" along the side. If only one element is passed in, then the "facets" panel is not shown, and the filter is applied to all queries.

#### Catalog Structure
The catalog structure is very flexible and allows the developer to use any ArcGIS Portal/Online Search parameter

```json
[
  {
    "name": "All",
    "params": {
      "query": {
        "access": "public"
      }
    }
  },
  {
    "name": "Waste Water Apps",
    "params": {
      "query": {
        "type": ["Web Mapping Application"],
        "typekeywords": ["-story"],
        "tags": ["Waste Water"]
      }
    }
  }
]
```

The `name` property will be shown in the facets panel, and thus should be internationalized when the catalog structure is created.

The child properties of the `query` property will be serialized into the ArcGIS Search API `q` property, along with the text string the user enters in the item picker. Please look at the [query-helpers.js](/addon/utils/query-helpers.js) for details about how this is all serialized.

### Item Validation

Although the ArcGIS Search API is quite powerful, there are times when we need to do additional inspection or validation of the selected item before we can allow the user to choose it. Since these validations are specific to the context in which the item picker is used, we allow the developer to pass in a validation function via the `onSelectionValidator` property.

#### Validation Function Signature

Since validation functions operate "internal" to the item-picker, they work with the `model` structure outlined above.
Validation functions should use the following signature `validate(model)`, and should return a `Promise` even if it is not doing async operations. The `model.item` will always be present in, but depending on the context, `model.options` hash may contain additional information. For example, if a Map Service or Feature Service item is selected, the `model.options` hash will contain a `layer` object, allowing the validator to work with both the item and the specific layer.

#### Validation Return Values

Validation functions must return a `Promise`, and should return an object with the following structure:

```json
{
  "model": {
    "item": {...},
    "options": {...}
  },
  "status": {
    "status": "ok|warning|error",
    "message": "Message shown to user in the ui"
  }
}
```

Valid status values are `ok`, `warning` and `error`.

For warnings, the user will be given the option to select the item despite the warning.

In the case of an error the item can not be selected.

*Note:* The message returned should be translated - do not rely on the item picker to translate messages.

#### Example Code

In the template of a component that is using an item picker...

```hbs
{{item-picker
    selectAction=(action "onSelectItem")
    onSelectionValidator=(action "selectionValidator") }}
```

Then, in that component's js file, we'd have an action...

```js
actions: {
  selectionValidator(model) {
    // validation logic
    if (model.item.something) {
      return resolve({
        model: model,
        status: {
          status: 'error',
          message: 'This item can not be used because ...'
        }
      });
    } else {
      // you can also manipulate the item here if you want...
      return resolve({
        model: model,
        status: {
          status: 'ok'
        }
      });
    }
  }
}
```

### Type-Specific Preview

When not in multi-select mode, clicking on an item in the result list, will show the "Preview". The item picker has two built-in Preview components.

#### Generic Item Preview

This is the default preview component, and it simply shows basic info about the item. Any validation errors/warnings will be injected into the UI.

#### Feature Service Preview

This component is used for Map Service, Feature Service or Feature Layer items. It also shows basic Item information, but it can also list the layers in the service and/or force the user to choose a layer. When this is used, the validation function will recieve the selected layer in the `model.options` hash.

#### Layer Selection

Many places in the Hub workflows, the user needs to select a layer. The Feature Service Preview allows us to require a layer selection. This is done using the `previewParams` attribute.

| param | description |
| --- | --- |
| showLayers | Used by the `feature-service-preview` component, and will cause a list of layers to be shown. |
| forceLayerSelection | Used by the `feature-service-preview` component, and force the user to select a layer/table. |


```hbs
{{item-picker
    selectAction=(action "onSelectItem")
    previewParams=params
    onSelectionValidator=(action "selectionValidator") }}
```

 and in the component...

```js
  ...
  params = {
    showLayers: true,
    forceLayerSelection: true
  }
  ...
```

## Extending Item Picker

Since it is impossible to for-see all the possible permutations of how an item picker could be used, the component exposes some extensibility points.

### Custom Row Components

If you need to customize how a row in the results list is displayed, you can create your own component and then tell the item picker to use that by setting the `rowComponent` attribute to the name of the component you want to use.


```hbs
{{item-picker
    selectAction=(action "onSelectItem")
    rowComponent="name-of-custom-component" }}
```

The component will be used in the following context, and developers should refer to the `item-row` component for details

```hbs
{{component rowComponent
  selectMultiple=selectMultiple // select multiple flag
  itemsToAdd=itemsToAdd // array that you can add the item
  _i18nScope=_i18nScope // i18n scope
  onSelectionValidator=onSelectionValidator // validator
  model=item // the item
  currentItemId=currentModel.item.id // for non-multi-select, this is the currently selected itemid
  onClick=(action "onItemClick") // action you can fire to inform the rest of the item picker of a selection
  }}
```

#### Handling Multiple Selection

Multiple selection is usually handled by showing a `<input type="checkbox"...` and there are some idiosyncrasies with getting event handlers and the checked state to be in sync.

What we've found is that the use of a `next` in the component's `selectItem` action solves this. This example code is from the `item-row` component.

```js
actions: {
  selectItem (item) {
    // this is needed because of what appears to be a glimmer race condition.
    // if not present, the checked state of the checkbox will be out of sync
    next(this, () => {
      tryInvoke(this, 'onClick', [{item}]);
    });
  }
}
```
