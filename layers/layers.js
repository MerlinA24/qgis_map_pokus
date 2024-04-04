ol.proj.proj4.register(proj4);
ol.proj.get("EPSG:5514").setExtent([-752591.772869, -1042254.701049, -751720.272869, -1041674.186835]);
var wms_layers = [];

var lyr_ZTM5_0 = new ol.layer.Tile({
                            source: new ol.source.TileWMS(({
                              url: "http://ags.cuzk.cz/arcgis1/services/ZTM/ZTM5/MapServer/WMSServer",
    attributions: ' ',
                              params: {
                                "LAYERS": "0",
                                "TILED": "true",
                                "VERSION": "1.3.0"},
                            })),
                            title: "ZTM5",
                            opacity: 0.255000,
                            
                            
                          });
              wms_layers.push([lyr_ZTM5_0, 0]);
var lyr_CadastralParcel_1 = new ol.layer.Tile({
                            source: new ol.source.TileWMS(({
                              url: "https://services.cuzk.cz/wms/inspire-cp-wms.asp",
    attributions: ' ',
                              params: {
                                "LAYERS": "CP.CadastralParcel",
                                "TILED": "true",
                                "VERSION": "1.3.0"},
                            })),
                            title: "Cadastral Parcel",
                            opacity: 0.253000,
                            
                            
                          });
              wms_layers.push([lyr_CadastralParcel_1, 0]);
var format_mapa_skrvka_2 = new ol.format.GeoJSON();
var features_mapa_skrvka_2 = format_mapa_skrvka_2.readFeatures(json_mapa_skrvka_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:5514'});
var jsonSource_mapa_skrvka_2 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_mapa_skrvka_2.addFeatures(features_mapa_skrvka_2);
var lyr_mapa_skrvka_2 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_mapa_skrvka_2, 
                style: style_mapa_skrvka_2,
                popuplayertitle: "mapa_skrývka",
                interactive: true,
                title: '<img src="styles/legend/mapa_skrvka_2.png" /> mapa_skrývka'
            });
var format_mapa_objekty_3 = new ol.format.GeoJSON();
var features_mapa_objekty_3 = format_mapa_objekty_3.readFeatures(json_mapa_objekty_3, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:5514'});
var jsonSource_mapa_objekty_3 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_mapa_objekty_3.addFeatures(features_mapa_objekty_3);
var lyr_mapa_objekty_3 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_mapa_objekty_3, 
                style: style_mapa_objekty_3,
                popuplayertitle: "mapa_objekty",
                interactive: true,
                title: '<img src="styles/legend/mapa_objekty_3.png" /> mapa_objekty'
            });
var format_Dm1_4 = new ol.format.GeoJSON();
var features_Dm1_4 = format_Dm1_4.readFeatures(json_Dm1_4, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:5514'});
var jsonSource_Dm1_4 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Dm1_4.addFeatures(features_Dm1_4);
var lyr_Dm1_4 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Dm1_4, 
                style: style_Dm1_4,
                popuplayertitle: "Dům 1",
                interactive: true,
                title: '<img src="styles/legend/Dm1_4.png" /> Dům 1'
            });
var group_CUZK = new ol.layer.Group({
                                layers: [lyr_ZTM5_0,lyr_CadastralParcel_1,],
                                fold: "open",
                                title: "CUZK"});

lyr_ZTM5_0.setVisible(true);lyr_CadastralParcel_1.setVisible(true);lyr_mapa_skrvka_2.setVisible(true);lyr_mapa_objekty_3.setVisible(true);lyr_Dm1_4.setVisible(true);
var layersList = [group_CUZK,lyr_mapa_skrvka_2,lyr_mapa_objekty_3,lyr_Dm1_4];
lyr_mapa_skrvka_2.set('fieldAliases', {'id': 'id', });
lyr_mapa_objekty_3.set('fieldAliases', {'id': 'id', 'typ': 'typ', 'niv.': 'niv.', 'datace': 'datace', });
lyr_Dm1_4.set('fieldAliases', {'id': 'id', 'typ': 'typ', });
lyr_mapa_skrvka_2.set('fieldImages', {'id': 'TextEdit', });
lyr_mapa_objekty_3.set('fieldImages', {'id': 'TextEdit', 'typ': 'TextEdit', 'niv.': 'TextEdit', 'datace': 'TextEdit', });
lyr_Dm1_4.set('fieldImages', {'id': 'TextEdit', 'typ': 'TextEdit', });
lyr_mapa_skrvka_2.set('fieldLabels', {'id': 'no label', });
lyr_mapa_objekty_3.set('fieldLabels', {'id': 'inline label - visible with data', 'typ': 'inline label - visible with data', 'niv.': 'inline label - visible with data', 'datace': 'inline label - visible with data', });
lyr_Dm1_4.set('fieldLabels', {'id': 'hidden field', 'typ': 'inline label - visible with data', });
lyr_Dm1_4.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});