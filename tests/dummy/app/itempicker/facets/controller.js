import Ember from 'ember';

export default Ember.Controller.extend({
  selectedItem: null,

  catalog: Ember.A([
    {
      name: 'All',
      query: {
        access: 'public'
      }
    },
    {
      name: 'Apps',
      query: {
        type: [
          'Web Mapping Application'
        ],
        typekeywords: [
          '-hubsite',
          '-story'
        ],
        tags: [
          '-survey',
          '-storymap',
          '-site'
        ]
      }
    },
    {
      name: 'Pages',
      query: {
        tags: [
          'page'
        ],
        typekeywords: [
          'hubsite'
        ]
      }
    },
    {
      name: 'Sites',
      query: {
        tags: [
          'site'
        ],
        typekeywords: [
          'hubSite'
        ]
      }
    },
    {
      name: 'Story Maps',
      query: {
        typekeywords: [
          'story'
        ],
        tags: [
          'storymap'
        ]
      }
    },
    {
      name: 'Surveys',
      query: {
        typekeywords: [
          'Registered App'
        ],
        tags: [
          'survey'
        ],
        type: [
          'Web Mapping Application'
        ]
      }
    },
    {
      name: 'Webmaps',
      query: {
        type: [
          'Web Map',
          '-Web Mapping Application'
        ],
        tags: [
          'WebMap'
        ]
      }
    },
    {
      name: 'My favorite enviro apps',
      query: {
        tags: [
          'environment',
          'hydrology'
        ],
        type: [
          'Web Mapping Applications'
        ]
      }
    }
  ]),

  actions: {
    onSelectItem (selected) {
      Ember.$('#myModal').modal('hide');
      this.set('selectedItem', selected);
    },
  }
});
