const BASEURL = 'https://localhost:8080';
var highlightLayer;
function highlightFeature(e) {
    highlightLayer = e.target;
    highlightLayer.openPopup();
}
var map = L.map('map', {
    zoomControl:true, maxZoom:28, minZoom:10
}).fitBounds([[-7.132367633357802,107.01539751378728],[-6.676787036207802,107.75426640952874]]);
var hash = new L.Hash(map);
map.attributionControl.setPrefix('<a href="https://github.com/tomchadwin/qgis2web" target="_blank">qgis2web</a> &middot; <a href="https://leafletjs.com" title="A JS library for interactive maps">Leaflet</a> &middot; <a href="https://qgis.org">QGIS</a>');
var autolinker = new Autolinker({truncate: {length: 30, location: 'smart'}});
var bounds_group = new L.featureGroup([]);
function setBounds() {
}
map.createPane('pane_GoogleHybrid_0');
map.getPane('pane_GoogleHybrid_0').style.zIndex = 400;
var layer_GoogleHybrid_0 = L.tileLayer('https://mt1.google.com/vt/lyrs=y&x={x}&y={y}&z={z}', {
    pane: 'pane_GoogleHybrid_0',
    opacity: 1.0,
    attribution: '<a href="https://www.google.at/permissions/geoguidelines/attr-guide.html">Map data ©2015 Google</a>',
    minZoom: 10,
    maxZoom: 28,
    minNativeZoom: 0,
    maxNativeZoom: 20
});
layer_GoogleHybrid_0;
map.addLayer(layer_GoogleHybrid_0);
map.createPane('pane_GoogleTerrain_1');
map.getPane('pane_GoogleTerrain_1').style.zIndex = 401;
var layer_GoogleTerrain_1 = L.tileLayer('https://mt1.google.com/vt/lyrs=p&x={x}&y={y}&z={z}', {
    pane: 'pane_GoogleTerrain_1',
    opacity: 1.0,
    attribution: '<a href="https://www.google.at/permissions/geoguidelines/attr-guide.html">Map data ©2015 Google</a>',
    minZoom: 10,
    maxZoom: 28,
    minNativeZoom: 0,
    maxNativeZoom: 20
});
layer_GoogleTerrain_1;
map.addLayer(layer_GoogleTerrain_1);
function pop_BandungBarat_2(feature, layer) {
    layer.on({
        mouseout: function(e) {
            if (typeof layer.closePopup == 'function') {
                layer.closePopup();
            } else {
                layer.eachLayer(function(feature){
                    feature.closePopup()
                });
            }
        },
        mouseover: highlightFeature,
    });
    var popupContent = '<table>\
            <tr>\
                <td colspan="2">' + (feature.properties['nmkec'] !== null ? autolinker.link(feature.properties['nmkec'].toLocaleString()) : '') + '</td>\
            </tr>\
        </table>';
    layer.bindPopup(popupContent, {maxHeight: 400});
}

function style_BandungBarat_2_0() {
    return {
        pane: 'pane_BandungBarat_2',
        opacity: 1,
        color: 'rgba(0,0,0,1.0)',
        dashArray: '',
        lineCap: 'butt',
        lineJoin: 'miter',
        weight: 2.0, 
        fill: true,
        fillOpacity: 1,
        fillColor: 'rgba(231,113,72,0.0)',
        interactive: true,
    }
}
map.createPane('pane_BandungBarat_2');
map.getPane('pane_BandungBarat_2').style.zIndex = 402;
map.getPane('pane_BandungBarat_2').style['mix-blend-mode'] = 'normal';
var layer_BandungBarat_2 = new L.geoJson(json_BandungBarat_2, {
    attribution: '',
    interactive: true,
    dataVar: 'json_BandungBarat_2',
    layerName: 'layer_BandungBarat_2',
    pane: 'pane_BandungBarat_2',
    onEachFeature: pop_BandungBarat_2,
    style: style_BandungBarat_2_0,
});
bounds_group.addLayer(layer_BandungBarat_2);
map.addLayer(layer_BandungBarat_2);
map.createPane('pane_BeraLahanKosongNonVegetatif_3');
map.getPane('pane_BeraLahanKosongNonVegetatif_3').style.zIndex = 403;
var img_BeraLahanKosongNonVegetatif_3 = '/assets/peta_khusus/bandung_barat/data/BeraLahanKosongNonVegetatif_3.png';
var img_bounds_BeraLahanKosongNonVegetatif_3 = [[-7.122202899,107.181769472],[-6.688316616,107.726687524]];
var layer_BeraLahanKosongNonVegetatif_3 = new L.imageOverlay(img_BeraLahanKosongNonVegetatif_3,
                                      img_bounds_BeraLahanKosongNonVegetatif_3,
                                      {pane: 'pane_BeraLahanKosongNonVegetatif_3'});
bounds_group.addLayer(layer_BeraLahanKosongNonVegetatif_3);
map.addLayer(layer_BeraLahanKosongNonVegetatif_3);
map.createPane('pane_BeraBadanAir_4');
map.getPane('pane_BeraBadanAir_4').style.zIndex = 404;
var img_BeraBadanAir_4 = '/assets/peta_khusus/bandung_barat/data/BeraBadanAir_4.png';
var img_bounds_BeraBadanAir_4 = [[-7.122202899,107.181769472],[-6.688316616,107.726687524]];
var layer_BeraBadanAir_4 = new L.imageOverlay(img_BeraBadanAir_4,
                                      img_bounds_BeraBadanAir_4,
                                      {pane: 'pane_BeraBadanAir_4'});
bounds_group.addLayer(layer_BeraBadanAir_4);
map.addLayer(layer_BeraBadanAir_4);
map.createPane('pane_BeraHutan_5');
map.getPane('pane_BeraHutan_5').style.zIndex = 405;
var img_BeraHutan_5 = '/assets/peta_khusus/bandung_barat/data/BeraHutan_5.png';
var img_bounds_BeraHutan_5 = [[-7.122202899,107.181769472],[-6.688316616,107.726687524]];
var layer_BeraHutan_5 = new L.imageOverlay(img_BeraHutan_5,
                                      img_bounds_BeraHutan_5,
                                      {pane: 'pane_BeraHutan_5'});
bounds_group.addLayer(layer_BeraHutan_5);
map.addLayer(layer_BeraHutan_5);
map.createPane('pane_BeraLahanTerbangun_6');
map.getPane('pane_BeraLahanTerbangun_6').style.zIndex = 406;
var img_BeraLahanTerbangun_6 = '/assets/peta_khusus/bandung_barat/data/BeraLahanTerbangun_6.png';
var img_bounds_BeraLahanTerbangun_6 = [[-7.122202899,107.181769472],[-6.688316616,107.726687524]];
var layer_BeraLahanTerbangun_6 = new L.imageOverlay(img_BeraLahanTerbangun_6,
                                      img_bounds_BeraLahanTerbangun_6,
                                      {pane: 'pane_BeraLahanTerbangun_6'});
bounds_group.addLayer(layer_BeraLahanTerbangun_6);
map.addLayer(layer_BeraLahanTerbangun_6);
map.createPane('pane_SawahLahanKosongNonVegetatif_7');
map.getPane('pane_SawahLahanKosongNonVegetatif_7').style.zIndex = 407;
var img_SawahLahanKosongNonVegetatif_7 = '/assets/peta_khusus/bandung_barat/data/SawahLahanKosongNonVegetatif_7.png';
var img_bounds_SawahLahanKosongNonVegetatif_7 = [[-7.122202899,107.181769472],[-6.688316616,107.726687524]];
var layer_SawahLahanKosongNonVegetatif_7 = new L.imageOverlay(img_SawahLahanKosongNonVegetatif_7,
                                      img_bounds_SawahLahanKosongNonVegetatif_7,
                                      {pane: 'pane_SawahLahanKosongNonVegetatif_7'});
bounds_group.addLayer(layer_SawahLahanKosongNonVegetatif_7);
map.addLayer(layer_SawahLahanKosongNonVegetatif_7);
map.createPane('pane_SawahBadanAir_8');
map.getPane('pane_SawahBadanAir_8').style.zIndex = 408;
var img_SawahBadanAir_8 = '/assets/peta_khusus/bandung_barat/data/SawahBadanAir_8.png';
var img_bounds_SawahBadanAir_8 = [[-7.122202899,107.181769472],[-6.688316616,107.726687524]];
var layer_SawahBadanAir_8 = new L.imageOverlay(img_SawahBadanAir_8,
                                      img_bounds_SawahBadanAir_8,
                                      {pane: 'pane_SawahBadanAir_8'});
bounds_group.addLayer(layer_SawahBadanAir_8);
map.addLayer(layer_SawahBadanAir_8);
map.createPane('pane_SawahHutan_9');
map.getPane('pane_SawahHutan_9').style.zIndex = 409;
var img_SawahHutan_9 = '/assets/peta_khusus/bandung_barat/data/SawahHutan_9.png';
var img_bounds_SawahHutan_9 = [[-7.122202899,107.181769472],[-6.688316616,107.726687524]];
var layer_SawahHutan_9 = new L.imageOverlay(img_SawahHutan_9,
                                      img_bounds_SawahHutan_9,
                                      {pane: 'pane_SawahHutan_9'});
bounds_group.addLayer(layer_SawahHutan_9);
map.addLayer(layer_SawahHutan_9);
map.createPane('pane_SawahLahanTerbangun_10');
map.getPane('pane_SawahLahanTerbangun_10').style.zIndex = 410;
var img_SawahLahanTerbangun_10 = '/assets/peta_khusus/bandung_barat/data/SawahLahanTerbangun_10.png';
var img_bounds_SawahLahanTerbangun_10 = [[-7.122202899,107.181769472],[-6.688316616,107.726687524]];
var layer_SawahLahanTerbangun_10 = new L.imageOverlay(img_SawahLahanTerbangun_10,
                                      img_bounds_SawahLahanTerbangun_10,
                                      {pane: 'pane_SawahLahanTerbangun_10'});
bounds_group.addLayer(layer_SawahLahanTerbangun_10);
map.addLayer(layer_SawahLahanTerbangun_10);
var baseMaps = {};
L.control.layers(baseMaps,{'<img src="/assets/peta_khusus/bandung_barat/legend/SLT.jpg" /> : Sawah ke Lahan Terbangun ' : layer_SawahLahanTerbangun_10, '<img src="/assets/peta_khusus/bandung_barat/legend/SH.jpg" /> : Sawah ke Hutan ': layer_SawahHutan_9,'<img src="/assets/peta_khusus/bandung_barat/legend/SBA.jpg" /> : Sawah ke Badan Air ': layer_SawahBadanAir_8, '<img src="/assets/peta_khusus/bandung_barat/legend/SLK.jpg" /> : Sawah ke Lahan Kosong Non-Vegetatif ' : layer_SawahLahanKosongNonVegetatif_7, '<img src="/assets/peta_khusus/bandung_barat/legend/BLT.jpg" /> : Bera ke Lahan Terbangun ': layer_BeraLahanTerbangun_6,'<img src="/assets/peta_khusus/bandung_barat/legend/BH.jpg" /> : Bera ke Hutan ': layer_BeraHutan_5, '<img src="/assets/peta_khusus/bandung_barat/legend/BBA.jpg" /> : Bera ke Badan Air ' : layer_BeraBadanAir_4, '<img src="/assets/peta_khusus/bandung_barat/legend/BLK.jpg" /> : Bera ke Lahan Kosong Non-Vegetatif ': layer_BeraLahanKosongNonVegetatif_3,"Bandung Barat" : layer_BandungBarat_2,"Google Terrain": layer_GoogleTerrain_1, "Google Hybrid": layer_GoogleHybrid_0,},{collapsed:false}).addTo(map);
setBounds();
L.ImageOverlay.include({
    getBounds: function () {
        return this._bounds;
    }
});