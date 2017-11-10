export default function isGuid (query) {
  // Regex taken from ember-arcgis-layout-services/addon/utils/is-guid.js
  var re = /^(\{){0,1}[0-9a-fA-F]{8}[-]?[0-9a-fA-F]{4}[-]?[0-9a-fA-F]{4}[-]?[0-9a-fA-F]{4}[-]?[0-9a-fA-F]{12}(\}){0,1}$/gi;
  return re.test(query);
}
