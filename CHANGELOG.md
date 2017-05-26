# ember-arcgis-portal-components Change Log
All notable changes to this project will be documented in this file.
This project adheres to [Semantic Versioning](http://semver.org/).

## Unreleased
### Fixed
- Once a warning appeared select anyway button would never revert to select.

## [0.2.0]
### Added
- A validator can be passed in to validate the viability of an item

## [0.1.1]
### Fixed
- No search results now properly display No datasets found messages.

## [0.1.0]
### Added
- Item picker now takes a catalog spec by way of `catalog`. A query will be generated from anything within catalog.params.query. Other param handling (bbox, etc) will come later.
- Catalog facet tabs
- Number of search result rows can now be set by: `rowCount`
- item-preview pane now has a preview button which links out to the item in question.
