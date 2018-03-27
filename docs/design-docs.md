# Design Docs

## Components

### Item Picker

`{{item-picker
  selectAction=(action "onSelectItem")
  selectMultiple=true
  searchItemsOnInit=true
  onSelectionValidator=(action "selectionValidator")
  }}`




Internally to the item picker components (including custom rows/preview components) use a model instead of just an item. The model has the format of `{item: {...}, options: {...}}`.

The options hash can contain many different things depending on the context.

For example - the `feature-service-preview` will use the `options` hash to pass forward the selected layer, along with the item to validation functions.
