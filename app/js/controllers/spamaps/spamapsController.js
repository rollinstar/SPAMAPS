function SpamapsCtrl(SpamapsService){
    'ngInject';

    //ViewModel

    const vm = this;
    vm.title = 'SPAMAPS';

    const $ = require("jquery");
    const ol = require("openlayers");
    const proj4 = require("proj4");

    // const map;
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
  const bounds = [179101.7691, 436263.7697, 216151.2494, 466550.406099999];     //EPSG:2097
  const X = bounds[0] + (bounds[2] - bounds[0])/2;
  const Y = bounds[1] + (bounds[3] - bounds[1])/2;

  // const lon = 211528.126;
  // const lat = 434748.759;
  const kcb = proj4('EPSG:4326');
  const wgs84 =proj4('EPSG:900913');
  const centerlonlat = new proj4.Point(X, Y);

  //EPSG:2097 -> EPSG:900913
  // proj4.transform(kcb, wgs84, centerlonlat);

  // const extent = ol.proj.transform(bounds, 'EPSG:2097','EPSG:900913');
  // const center = ol.proj.transform([X, Y], 'SR-ORG:6640', 'EPSG:3857');
  // const center = [14137257.692428203, 4516816.875427635];

  //OSM basemap
  const openSeaMapLayer = new ol.layer.Tile({
    source : new ol.source.OSM()
  });

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

  // const projection = new ol.proj.Projection({
  //   code : 'EPSG:900913',
  //   unit : 'm',
  //   axisOrientation : 'neu'
  // });

  const mousePositionControl = new ol.control.MousePosition({
    className : 'custom-mouse-position',
    target : document.getElementById('location'),
    coordinateFormat : ol.coordinate.createStringXY(5),
    undefinedHTML : '&nbsp;'
  })

  //map load
  const map = new ol.Map({
    control : ol.control.defaults({
      attribution : false
    }).extend([mousePositionControl]),
    target : 'map',
    layer : [
      openSeaMapLayer
    ],
    view : new ol.View({
      //projection : projection,
      maxZoom : 18,
      center : [centerlonlat.x, centerlonlat.y],
      zoom : 10
    })
  });

  map.on('singleclick', function(evt){
    alert('getFeatureInfo');
  });
}

export default {
  name : 'SpamapsCtrl',
  fn : SpamapsCtrl
};
