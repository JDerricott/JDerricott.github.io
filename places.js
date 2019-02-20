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
  const banffString = "I want to see Banff to take a photo here" + 
    "<p><p><img src='https://magazine.northeast.aaa.com/wp-content/uploads/2018/05/banff-national-park-1-640x423.jpg' alt='Banff' height='auto'>";
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
      title: "Banff",
      content: banffString
    }
  });
  //Quayside
  const quaysideString = "Quayside will basically be a Mecca for Urban Planners and active transportation enthusiasts" + 
    "<p><p><img src='https://archinect.imgix.net/uploads/17/172730d7d9c25f39d0f754ed592b1abd.jpg?auto=compress%2Cformat' alt='Quayside' height='auto'>";
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
      title: "Quayside",
      content: quaysideString
    }
  });
  //San Francisco
  const sanFranString = "San Francisco's beautiful architecture and innovative companies are a major draw for me to visit or live here." + 
    "<p><p><img src='https://cdn.static-economist.com/sites/default/files/images/print-edition/20180602_USP001_0.jpg' alt='SanFran' height='auto'>";
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
      title: "San Francisco",
      content: sanFranString
    }
  });
  //Sainte-Chapelle
  const sainteChapString = "Built as the private cathedral for King Louis XIIIV, it encapuslates light and celestiality. It is one of the few cathedrals not damaged during WWI or WWII." + 
    "<p><p><img src='https://d39gusjpdm7p1o.cloudfront.net/data/layout_grouping/product_index_slideshow/49445/sainte-chapelle-interieur-circumnavigation.1000w.jpg?ver=1533741988' alt='Sainte-Chapelle' height='auto'>";
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
      title: "Sainte-Chapelle",
      content: sainteChapString
    }
  });
  //Patagonia
  const patagoniaString = "Patagonia is one of the most beautiful mountain ranges ever. Bucketlist item #21: Where Patagonia sweater in Patagonia." + 
    "<p><p><img src='https://c1.staticflickr.com/5/4161/34136738540_43e257f643_b.jpg' alt='Patagonia' height='auto'>";
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
      title: "Patagonia",
      content: patagoniaString
    }
  });
  //Dubai
  const dubaiString = "Which civil engineer doesn't want to go to Dubai????" + 
    "<p><p><img src='https://www.timeoutdubai.com/sites/default/files/tod/styles/full_img/public/images/2018/08/12/dubai_eid.jpg?itok=HS_YkfJm' alt='Dubai' height='auto'>";
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
      title: "Dubai",
      content: dubaiString
    }
  });
  //Stockholm
  const stockholmString = "For family history purposes...my great grandparents immigrated from Sweden!" + 
    "<p><p><img src='https://img.theculturetrip.com/970x440/smart//wp-content/uploads/2015/11/eur-sweden-stockholm.JPG' alt='Stockholm' height='auto'>";
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
      title: "Stockholm",
      content: stockholmString
    }
  });
  //Copenhagen
  const copenhagenString = "Also or family history purposes...my other great grandparents immigrated from Copenhagen!" + 
    "<p><p><img src='https://cdn-image.travelandleisure.com/sites/default/files/styles/1600x1000/public/header-facebook-copenhagen-cph0416.jpg?itok=-2LcgY1H' alt='Copenhagen' height='auto'>";
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
      title: "Copenhagen",
      content: copenhagenString
    }
  });
  //Taj Mahal
  const tajMahalString = "Bucket list item #14: visit the seven wonders of the world...which apparently change regularly in some sources." + 
    "<p><p><img src='https://thumbs-prod.si-cdn.com/Abm-e-V_cqdIqYDo_cXApagw8zI=/800x600/filters:no_upscale():focal(1471x1061:1472x1062)/https://public-media.si-cdn.com/filer/b6/30/b630b48b-7344-4661-9264-186b70531bdc/istock-478831658.jpg' alt='Taj Mahal' height='auto'>";
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
      title: "Taj Mahal",
      content: tajMahalString
    }
  });
  //Mt. Kilimanjaro
  const mtKString = "I love hiking and Kilimanjaro seems doable, but challenging!" + 
    "<p><p><img src='https://www.rei.com/adventures/assets/adventures/images/trip/core/africa/kil_hero' alt='Mt.Kilimanjaro' height='auto'>";
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
      title: "Mt. Kilimanjaro",
      content: mtKString
    }
  });





});
