require(["esri/Map", "esri/views/MapView"], function(
  Map,
  MapView
) {
  const map = new Map({
    basemap: "streets-navigation-vector"
  });

  const view = new MapView({
    container: "viewDiv",
    map: map,
    zoom: 1,
    center: {
        latitude: 40.178428,
        longitude: -111.667391
    }
  });
  
  //Banff
  view.graphics.add({
    symbol: {
      type: "text",
        color: "#7A003C",
        text: "\ue61d", // esri-icon-map-pin
        font: {
            size: 30,
            family: "CalciteWebCoreIcons"
        }
    },
    geometry: {
      type: "point",
      longitude: -115.565838,
      latitude: 51.179848
    },
    popupTemplate: {
      title: "Banff"
    }
  });
  //Quayside
  view.graphics.add({
    symbol: {
      type: "text",
        color: "#7A003C",
        text: "\ue61d", // esri-icon-map-pin
        font: {
            size: 30,
            family: "CalciteWebCoreIcons"
        }
    },
    geometry: {
      type: "point",
      longitude: -79.348088,
      latitude: 43.644587
    },
    popupTemplate: {
      title: "Quayside"
    }
  });
  //San Francisco
  view.graphics.add({
    symbol: {
      type: "text",
        color: "#7A003C",
        text: "\ue61d", // esri-icon-map-pin
        font: {
            size: 30,
            family: "CalciteWebCoreIcons"
        }
    },
    geometry: {
      type: "point",
      longitude: -122.434844,
      latitude: 37.766886
    },
    popupTemplate: {
      title: "San Francisco"
    }
  });
  //Sante-Chapelle
  view.graphics.add({
    symbol: {
      type: "text",
        color: "#7A003C",
        text: "\ue61d", // esri-icon-map-pin
        font: {
            size: 30,
            family: "CalciteWebCoreIcons"
        }
    },
    geometry: {
      type: "point",
      longitude: 2.344966,
      latitude: 48.855462
    },
    popupTemplate: {
      title: "Sainte-Chapelle"
    }
  });
  //Patagonia
  view.graphics.add({
    symbol: {
      type: "text",
        color: "#7A003C",
        text: "\ue61d", // esri-icon-map-pin
        font: {
            size: 30,
            family: "CalciteWebCoreIcons"
        }
    },
    geometry: {
      type: "point",
      longitude: -73.235370,
      latitude: -50.238937
    },
    popupTemplate: {
      title: "Patagonia"
    }
  });
  //Dubai
  view.graphics.add({
    symbol: {
      type: "text",
        color: "#7A003C",
        text: "\ue61d", // esri-icon-map-pin
        font: {
            size: 30,
            family: "CalciteWebCoreIcons"
        }
    },
    geometry: {
      type: "point",
      longitude: 55.266599,
      latitude: 25.217819
    },
    popupTemplate: {
      title: "Dubai"
    }
  });
  //Stockholm
  view.graphics.add({
    symbol: {
      type: "text",
        color: "#7A003C",
        text: "\ue61d", // esri-icon-map-pin
        font: {
            size: 30,
            family: "CalciteWebCoreIcons"
        }
    },
    geometry: {
      type: "point",
      longitude: 18.067266,
      latitude: 59.334280
    },
    popupTemplate: {
      title: "Stockholm"
    }
  });
  //Copenhagen
  view.graphics.add({
    symbol: {
      type: "text",
        color: "#7A003C",
        text: "\ue61d", // esri-icon-map-pin
        font: {
            size: 30,
            family: "CalciteWebCoreIcons"
        }
    },
    geometry: {
      type: "point",
      longitude: 12.557936,
      latitude: 55.683022
    },
    popupTemplate: {
      title: "Copenhagen"
    }
  });
  //Taj Mahal
  view.graphics.add({
    symbol: {
      type: "text",
        color: "#7A003C",
        text: "\ue61d", // esri-icon-map-pin
        font: {
            size: 30,
            family: "CalciteWebCoreIcons"
        }
    },
    geometry: {
      type: "point",
      longitude: 78.072982,
      latitude: 28.034752
    },
    popupTemplate: {
      title: "Taj Mahal"
    }
  });
  //Mt. Kilimanjaro
  view.graphics.add({
    symbol: {
      type: "text",
        color: "#7A003C",
        text: "\ue61d", // esri-icon-map-pin
        font: {
            size: 30,
            family: "CalciteWebCoreIcons"
        }
    },
    geometry: {
      type: "point",
      longitude: 37.356448,
      latitude: -3.061921
    },
    popupTemplate: {
      title: "Mt. Kilimanjaro"
    }
  });





});
