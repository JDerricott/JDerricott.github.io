require(["esri/Map", 
	"esri/views/MapView",
	"esri/layers/MapImageLayer"], function(
  Map,
  MapView,
  MapImageLayer
) {
  var map = new Map({
    basemap: "streets-navigation-vector"
  });

  var view = new MapView({
    container: "viewDiv",
    map: map,
    zoom: 1,
    center: [-111.988844, 40.576267]
  });
  // points to the states layer in a service storing U.S. census data
  var layer = new MapImageLayer({
    url: "https://geoserver2.byu.edu/arcgis/rest/services/Motus/MOTUSServer/MapServer"
  });
  map.add(layer);  // adds the layer to the map
});
