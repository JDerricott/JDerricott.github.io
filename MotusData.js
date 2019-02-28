require(["esri/Map", 
	"esri/views/MapView",
	"esri/layers/MapImageLayer"], function(
  Map,
  MapView,
  MapImageLayer
) {
  const map = new Map({
    basemap: "streets-navigation-vector"
  });

  const view = new MapView({
    container: "viewDiv",
    map: map,
    zoom: 1,
    center: {
        latitude: 40.576267,
        longitude: -111.988844
    }
  });
  // points to the states layer in a service storing U.S. census data
  var layer = new MapImageLayer({
    url: "https://geoserver2.byu.edu/arcgis/rest/services/Motus/MOTUSServer/MapServer"
  });
  map.add(layer);  // adds the layer to the map
});
