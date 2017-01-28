function SpamapsCtrl($scope, SpamapsService){
    'ngInject';

    //ViewModel

    const vm = this;
    vm.title = 'SPAMAPS';

    const $ = require("jquery");
    const ol = require("openlayers");
    const proj4 = require("proj4");

    // const source = new ol.source.TileJSON({
    //   url : 'http://api.tiles.mapbox.com/v3/mapbox.world-bright.json',
    //   crossOrigin : 'anonymous'
    // });

    // const pureCoverage = false;
    // const format = 'image/png';

    /**
     * ol.map.transform not working EPSG:2097
     * I wonder why
     */
    let bounds = [179101.7691, 436263.7697, 216151.2494, 466550.406099999];     //EPSG:2097
    let X = bounds[0] + (bounds[2] - bounds[0])/2;
    let Y = bounds[1] + (bounds[3] - bounds[1])/2;

    // const lon = 211528.126;
    // const lat = 434748.759;
    let kcb = proj4('EPSG:4326');
    let wgs84 =proj4('EPSG:900913');
    let centerlonlat = new proj4.Point(X, Y);

    console.log(centerlonlat);

    //OSM basemap
    let openSeaMapLayer = new ol.layer.Tile({
      source : new ol.source.OSM()
    });
    console.log(openSeaMapLayer);
    //Seoul-base map
    // const seoul_sgg_untiled = new ol.layer.Image({
    //   source : new ol.source.ImageWMS({
    //     ratio : 1,
    //     url : 'http://localhost:8080/geoserver/cite/wms',
    //     params : {
    //       'FORMAT' : format,
    //       'VERSION' : '1.3.0',
    //       LAYERS : 'cite:seoul_sgg',
    //       STYLES : ''
    //     }
    //   })
    // });

    // const seoul_sgg_tile = new ol.layer.Tile({
    //   visible : false,
    //   source : new ol.source.TileWMS({
    //     url : 'http://localhost:8080/geoserver/cite/wms',
    //     params : {
    //       'FORMAT' : format,
    //       'VERSION' : '1.3.0',
    //       LAYERS : 'cite:seoul_sgg',
    //       STYLES : ''
    //     }
    //   })
    // });

    let projection = new ol.proj.Projection({
      code : kcb,
      unit : 'm',
      axisOrientation : 'neu'
    });

    let mousePositionControl = new ol.control.MousePosition({
      className : 'custom-mouse-position',
      target : document.getElementById('location'),
      coordinateFormat : ol.coordinate.createStringXY(5),
      undefinedHTML : '&nbsp;'
    })

    let map = new ol.Map({
      /**
       * constructor 
       */
      target: 'map',                //map_container
      layers:[openSeaMapLayer],    //layer
      view: new ol.View({
        //projection: Projection
        center: ol.proj.transform([127,37], "EPSG:4326","EPSG:3857"),
        maxZoom: 18,
        minZoom: 5,
        zoom: 10
        // maxResolution: 2048,
        // minResolution: 2,
        // resolution:[],
        // rotation:0
      })
      /**
       * properties
       */
      // logo: 'SPAMAPS',    //default value is false
      // overlays:'',
      // renderer:'',
      // interactions:'',
      // controls: ol.control.defaults({
      //   attribution : false
      // }).extend([mousePositionControl])
    });

    // map.on('singleclick', function(evt){
    //   alert('getFeatureInfo');
    // });

    console.log(map);
}

export default {
  name : 'SpamapsCtrl',
  fn : SpamapsCtrl
};
