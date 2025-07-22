var wms_layers = [];


        var lyr_OpenStreetMap_0 = new ol.layer.Tile({
            'title': 'OpenStreetMap',
            //'type': 'base',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
    attributions: ' ',
                url: 'https://tile.openstreetmap.org/{z}/{x}/{y}.png'
            })
        });

        var lyr_Satelite_1 = new ol.layer.Tile({
            'title': 'Satelite',
            //'type': 'base',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
    attributions: ' ',
                url: 'https://server.arcgisonline.com/ArcGIS/rest/services/World_Imagery/MapServer/tile/{z}/{y}/{x}'
            })
        });
var format_Limite_2 = new ol.format.GeoJSON();
var features_Limite_2 = format_Limite_2.readFeatures(json_Limite_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Limite_2 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Limite_2.addFeatures(features_Limite_2);
var lyr_Limite_2 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Limite_2, 
                style: style_Limite_2,
                popuplayertitle: "Limite",
                interactive: false,
                title: '<img src="styles/legend/Limite_2.png" /> Limite'
            });
var format_Veredasenmalestado_3 = new ol.format.GeoJSON();
var features_Veredasenmalestado_3 = format_Veredasenmalestado_3.readFeatures(json_Veredasenmalestado_3, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Veredasenmalestado_3 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Veredasenmalestado_3.addFeatures(features_Veredasenmalestado_3);
var lyr_Veredasenmalestado_3 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Veredasenmalestado_3, 
                style: style_Veredasenmalestado_3,
                popuplayertitle: "Veredas en mal estado",
                interactive: true,
                title: '<img src="styles/legend/Veredasenmalestado_3.png" /> Veredas en mal estado'
            });
var format_Fugadeagua_4 = new ol.format.GeoJSON();
var features_Fugadeagua_4 = format_Fugadeagua_4.readFeatures(json_Fugadeagua_4, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Fugadeagua_4 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Fugadeagua_4.addFeatures(features_Fugadeagua_4);
var lyr_Fugadeagua_4 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Fugadeagua_4, 
                style: style_Fugadeagua_4,
                popuplayertitle: "Fuga de agua",
                interactive: true,
                title: '<img src="styles/legend/Fugadeagua_4.png" /> Fuga de agua'
            });
var format_Basuraoescombros_5 = new ol.format.GeoJSON();
var features_Basuraoescombros_5 = format_Basuraoescombros_5.readFeatures(json_Basuraoescombros_5, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Basuraoescombros_5 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Basuraoescombros_5.addFeatures(features_Basuraoescombros_5);
var lyr_Basuraoescombros_5 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Basuraoescombros_5, 
                style: style_Basuraoescombros_5,
                popuplayertitle: "Basura o escombros",
                interactive: true,
                title: '<img src="styles/legend/Basuraoescombros_5.png" /> Basura o escombros'
            });

lyr_OpenStreetMap_0.setVisible(true);lyr_Satelite_1.setVisible(true);lyr_Limite_2.setVisible(true);lyr_Veredasenmalestado_3.setVisible(true);lyr_Fugadeagua_4.setVisible(true);lyr_Basuraoescombros_5.setVisible(true);
var layersList = [lyr_OpenStreetMap_0,lyr_Satelite_1,lyr_Limite_2,lyr_Veredasenmalestado_3,lyr_Fugadeagua_4,lyr_Basuraoescombros_5];
lyr_Limite_2.set('fieldAliases', {'id': 'id', });
lyr_Veredasenmalestado_3.set('fieldAliases', {'id': 'id', 'foto': 'foto', });
lyr_Fugadeagua_4.set('fieldAliases', {'id': 'id', 'Foto': 'Foto', });
lyr_Basuraoescombros_5.set('fieldAliases', {'id': 'id', 'Foto': 'Foto', });
lyr_Limite_2.set('fieldImages', {'id': 'TextEdit', });
lyr_Veredasenmalestado_3.set('fieldImages', {'id': 'TextEdit', 'foto': 'ExternalResource', });
lyr_Fugadeagua_4.set('fieldImages', {'id': 'TextEdit', 'Foto': 'ExternalResource', });
lyr_Basuraoescombros_5.set('fieldImages', {'id': 'TextEdit', 'Foto': 'ExternalResource', });
lyr_Limite_2.set('fieldLabels', {'id': 'no label', });
lyr_Veredasenmalestado_3.set('fieldLabels', {'id': 'no label', 'foto': 'inline label - always visible', });
lyr_Fugadeagua_4.set('fieldLabels', {'id': 'no label', 'Foto': 'inline label - always visible', });
lyr_Basuraoescombros_5.set('fieldLabels', {'id': 'no label', 'Foto': 'inline label - always visible', });
lyr_Basuraoescombros_5.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});