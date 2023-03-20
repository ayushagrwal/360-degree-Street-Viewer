//jshint esversion:6

//Initializing the map.
const map = new ol.Map({                
    target: 'map',                  
    layers: [
      new ol.layer.Tile({
        source: new ol.source.OSM()
      })
    ],
    view: new ol.View({                                             //Initial View
      center: ol.proj.fromLonLat([10.93376479, 50.98380407]),
      zoom: 18
    })
  });

  
  //New Vector layer
  const vectorLayer = new ol.layer.Vector({
    source: new ol.source.Vector({
      url: 'sample.txt',
      format: new ol.format.GeoJSON()
    }),
    style: new ol.style.Style({
      image: new ol.style.Circle({
        radius: 5,
        fill: new ol.style.Fill({color: 'red'}),
        stroke: new ol.style.Stroke({color: 'yellow', width: 2})
      })
    })
  });
  
  map.addLayer(vectorLayer);

  //On clicking the Points on the map
  map.on('click', function(evt) {
    map.forEachFeatureAtPixel(evt.pixel, function(feature, layer){

      img_url=feature.values_.name;
      viewer.remove( panorama );

      newpanorama = new PANOLENS.ImagePanorama( img_url );

      viewer.add( newpanorama );
      viewer.setPanorama( newpanorama );
    });

  });


  //Initial Panorama Image
    let img_url='./img360/HMTpano_000001_000000.jpg';
    
    let panorama = new PANOLENS.ImagePanorama(img_url);
    let viewer = new PANOLENS.Viewer({
      container:document.querySelector('#pano')
    });

    viewer.add( panorama );











