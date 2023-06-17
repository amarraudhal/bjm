var wms_layers = [];


        var lyr_GoogleSatellite_0 = new ol.layer.Tile({
            'title': 'Google Satellite',
            'type': 'base',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
    attributions: ' ',
                url: 'https://mt1.google.com/vt/lyrs=s&x={x}&y={y}&z={z}'
            })
        });
var format_JALAN_LN_50K_1 = new ol.format.GeoJSON();
var features_JALAN_LN_50K_1 = format_JALAN_LN_50K_1.readFeatures(json_JALAN_LN_50K_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_JALAN_LN_50K_1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_JALAN_LN_50K_1.addFeatures(features_JALAN_LN_50K_1);
var lyr_JALAN_LN_50K_1 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_JALAN_LN_50K_1, 
                style: style_JALAN_LN_50K_1,
                interactive: true,
    title: 'JALAN_LN_50K<br />\
    <img src="styles/legend/JALAN_LN_50K_1_0.png" /> Jalan Arteri<br />\
    <img src="styles/legend/JALAN_LN_50K_1_1.png" /> Jalan Kolektor<br />\
    <img src="styles/legend/JALAN_LN_50K_1_2.png" /> Jalan Lain<br />'
        });
var format_ADMINISTRASIKECAMATAN_AR_50K_2 = new ol.format.GeoJSON();
var features_ADMINISTRASIKECAMATAN_AR_50K_2 = format_ADMINISTRASIKECAMATAN_AR_50K_2.readFeatures(json_ADMINISTRASIKECAMATAN_AR_50K_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_ADMINISTRASIKECAMATAN_AR_50K_2 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_ADMINISTRASIKECAMATAN_AR_50K_2.addFeatures(features_ADMINISTRASIKECAMATAN_AR_50K_2);
var lyr_ADMINISTRASIKECAMATAN_AR_50K_2 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_ADMINISTRASIKECAMATAN_AR_50K_2, 
                style: style_ADMINISTRASIKECAMATAN_AR_50K_2,
                interactive: true,
                title: '<img src="styles/legend/ADMINISTRASIKECAMATAN_AR_50K_2.png" /> ADMINISTRASIKECAMATAN_AR_50K'
            });
var format_SUNGAI_3 = new ol.format.GeoJSON();
var features_SUNGAI_3 = format_SUNGAI_3.readFeatures(json_SUNGAI_3, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_SUNGAI_3 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_SUNGAI_3.addFeatures(features_SUNGAI_3);
var lyr_SUNGAI_3 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_SUNGAI_3, 
                style: style_SUNGAI_3,
                interactive: true,
                title: '<img src="styles/legend/SUNGAI_3.png" /> SUNGAI'
            });
var format_TITIK_KUMPUL_4 = new ol.format.GeoJSON();
var features_TITIK_KUMPUL_4 = format_TITIK_KUMPUL_4.readFeatures(json_TITIK_KUMPUL_4, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_TITIK_KUMPUL_4 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_TITIK_KUMPUL_4.addFeatures(features_TITIK_KUMPUL_4);
var lyr_TITIK_KUMPUL_4 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_TITIK_KUMPUL_4, 
                style: style_TITIK_KUMPUL_4,
                interactive: true,
    title: 'TITIK_KUMPUL<br />\
    <img src="styles/legend/TITIK_KUMPUL_4_0.png" /> Balai Hiperkes dan Keselamatan Kerja<br />\
    <img src="styles/legend/TITIK_KUMPUL_4_1.png" /> Gedung Kesehatan Jiwa Anak dan Remaja Gambut<br />\
    <img src="styles/legend/TITIK_KUMPUL_4_2.png" /> IGD Kampus Unitra Unit Detox Gambut<br />\
    <img src="styles/legend/TITIK_KUMPUL_4_3.png" /> Kantor PMI Kalimantan Selatan<br />'
        });
var format_PENGUNGSIAN_BANJARMASIN_5 = new ol.format.GeoJSON();
var features_PENGUNGSIAN_BANJARMASIN_5 = format_PENGUNGSIAN_BANJARMASIN_5.readFeatures(json_PENGUNGSIAN_BANJARMASIN_5, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_PENGUNGSIAN_BANJARMASIN_5 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_PENGUNGSIAN_BANJARMASIN_5.addFeatures(features_PENGUNGSIAN_BANJARMASIN_5);
var lyr_PENGUNGSIAN_BANJARMASIN_5 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_PENGUNGSIAN_BANJARMASIN_5, 
                style: style_PENGUNGSIAN_BANJARMASIN_5,
                interactive: true,
    title: 'PENGUNGSIAN_BANJARMASIN<br />\
    <img src="styles/legend/PENGUNGSIAN_BANJARMASIN_5_0.png" /> Klinik PPKS Sungailakum<br />\
    <img src="styles/legend/PENGUNGSIAN_BANJARMASIN_5_1.png" /> Poskesdes Belitung Utara<br />\
    <img src="styles/legend/PENGUNGSIAN_BANJARMASIN_5_2.png" /> Poskesdes Manarap Baru<br />\
    <img src="styles/legend/PENGUNGSIAN_BANJARMASIN_5_3.png" /> Poskesdes Pejambuan<br />\
    <img src="styles/legend/PENGUNGSIAN_BANJARMASIN_5_4.png" /> Poskesdes Pemangkih Laut<br />\
    <img src="styles/legend/PENGUNGSIAN_BANJARMASIN_5_5.png" /> Poskesdes Tanjungpandan Pulau Bromo<br />\
    <img src="styles/legend/PENGUNGSIAN_BANJARMASIN_5_6.png" /> Poskesdes Tinggiran 2 Luar<br />\
    <img src="styles/legend/PENGUNGSIAN_BANJARMASIN_5_7.png" /> Posyandu Bunipah<br />\
    <img src="styles/legend/PENGUNGSIAN_BANJARMASIN_5_8.png" /> Posyandu Podok<br />\
    <img src="styles/legend/PENGUNGSIAN_BANJARMASIN_5_9.png" /> <br />'
        });

lyr_GoogleSatellite_0.setVisible(true);lyr_JALAN_LN_50K_1.setVisible(true);lyr_ADMINISTRASIKECAMATAN_AR_50K_2.setVisible(true);lyr_SUNGAI_3.setVisible(true);lyr_TITIK_KUMPUL_4.setVisible(true);lyr_PENGUNGSIAN_BANJARMASIN_5.setVisible(true);
var layersList = [lyr_GoogleSatellite_0,lyr_JALAN_LN_50K_1,lyr_ADMINISTRASIKECAMATAN_AR_50K_2,lyr_SUNGAI_3,lyr_TITIK_KUMPUL_4,lyr_PENGUNGSIAN_BANJARMASIN_5];
lyr_JALAN_LN_50K_1.set('fieldAliases', {'NAMRJL': 'NAMRJL', 'KONRJL': 'KONRJL', 'MATRJL': 'MATRJL', 'FGSRJL': 'FGSRJL', 'UTKRJL': 'UTKRJL', 'TOLRJL': 'TOLRJL', 'WLYRJL': 'WLYRJL', 'AUTRJL': 'AUTRJL', 'KLSRJL': 'KLSRJL', 'SPCRJL': 'SPCRJL', 'JPARJL': 'JPARJL', 'ARHRJL': 'ARHRJL', 'STARJL': 'STARJL', 'KLLRJL': 'KLLRJL', 'MEDRJL': 'MEDRJL', 'LOCRJL': 'LOCRJL', 'JARRJL': 'JARRJL', 'FCODE': 'FCODE', 'REMARK': 'REMARK', 'SRS_ID': 'SRS_ID', 'LCODE': 'LCODE', 'METADATA': 'METADATA', 'SHAPE_Leng': 'SHAPE_Leng', });
lyr_ADMINISTRASIKECAMATAN_AR_50K_2.set('fieldAliases', {'KDPPUM': 'KDPPUM', 'NAMOBJ': 'NAMOBJ', 'REMARK': 'REMARK', 'KDPBPS': 'KDPBPS', 'FCODE': 'FCODE', 'LUASWH': 'LUASWH', 'UUPP': 'UUPP', 'SRS_ID': 'SRS_ID', 'LCODE': 'LCODE', 'METADATA': 'METADATA', 'KDEBPS': 'KDEBPS', 'KDEPUM': 'KDEPUM', 'KDCBPS': 'KDCBPS', 'KDCPUM': 'KDCPUM', 'KDBBPS': 'KDBBPS', 'KDBPUM': 'KDBPUM', 'WADMKD': 'WADMKD', 'WIADKD': 'WIADKD', 'WADMKC': 'WADMKC', 'WIADKC': 'WIADKC', 'WADMKK': 'WADMKK', 'WIADKK': 'WIADKK', 'WADMPR': 'WADMPR', 'WIADPR': 'WIADPR', 'TIPADM': 'TIPADM', 'SHAPE_Leng': 'SHAPE_Leng', 'SHAPE_Area': 'SHAPE_Area', });
lyr_SUNGAI_3.set('fieldAliases', {'NAMOBJ': 'NAMOBJ', 'JNSSNG': 'JNSSNG', 'KLSSNG': 'KLSSNG', 'FCODE': 'FCODE', 'REMARK': 'REMARK', 'SRS_ID': 'SRS_ID', 'LCODE': 'LCODE', 'METADATA': 'METADATA', 'NAMWS': 'NAMWS', 'NAMDAS': 'NAMDAS', 'SHAPE_Leng': 'SHAPE_Leng', 'SHAPE_Area': 'SHAPE_Area', });
lyr_TITIK_KUMPUL_4.set('fieldAliases', {'NAMOBJ': 'NAMOBJ', 'LUAS': 'LUAS', 'REMARK': 'REMARK', 'TIPSHT': 'TIPSHT', 'FCODE': 'FCODE', 'SRS_ID': 'SRS_ID', 'LCODE': 'LCODE', 'METADATA': 'METADATA', 'FSKADD': 'FSKADD', });
lyr_PENGUNGSIAN_BANJARMASIN_5.set('fieldAliases', {'NAMOBJ': 'NAMOBJ', 'FCODE': 'FCODE', 'LCODE': 'LCODE', 'REMARK': 'REMARK', 'SRS_ID': 'SRS_ID', 'METADATA': 'METADATA', 'LKALMT': 'LKALMT', 'TPLYST': 'TPLYST', });
lyr_JALAN_LN_50K_1.set('fieldImages', {'NAMRJL': 'TextEdit', 'KONRJL': 'Range', 'MATRJL': 'Range', 'FGSRJL': 'Range', 'UTKRJL': 'Range', 'TOLRJL': 'Range', 'WLYRJL': 'Range', 'AUTRJL': 'Range', 'KLSRJL': 'Range', 'SPCRJL': 'Range', 'JPARJL': 'Range', 'ARHRJL': 'Range', 'STARJL': 'Range', 'KLLRJL': 'TextEdit', 'MEDRJL': 'Range', 'LOCRJL': 'Range', 'JARRJL': 'Range', 'FCODE': 'TextEdit', 'REMARK': 'TextEdit', 'SRS_ID': 'TextEdit', 'LCODE': 'TextEdit', 'METADATA': 'TextEdit', 'SHAPE_Leng': 'TextEdit', });
lyr_ADMINISTRASIKECAMATAN_AR_50K_2.set('fieldImages', {'KDPPUM': 'TextEdit', 'NAMOBJ': 'TextEdit', 'REMARK': 'TextEdit', 'KDPBPS': 'TextEdit', 'FCODE': 'TextEdit', 'LUASWH': 'TextEdit', 'UUPP': 'TextEdit', 'SRS_ID': 'TextEdit', 'LCODE': 'TextEdit', 'METADATA': 'TextEdit', 'KDEBPS': 'TextEdit', 'KDEPUM': 'TextEdit', 'KDCBPS': 'TextEdit', 'KDCPUM': 'TextEdit', 'KDBBPS': 'TextEdit', 'KDBPUM': 'TextEdit', 'WADMKD': 'TextEdit', 'WIADKD': 'TextEdit', 'WADMKC': 'TextEdit', 'WIADKC': 'TextEdit', 'WADMKK': 'TextEdit', 'WIADKK': 'TextEdit', 'WADMPR': 'TextEdit', 'WIADPR': 'TextEdit', 'TIPADM': 'Range', 'SHAPE_Leng': 'TextEdit', 'SHAPE_Area': 'TextEdit', });
lyr_SUNGAI_3.set('fieldImages', {'NAMOBJ': 'TextEdit', 'JNSSNG': 'Range', 'KLSSNG': 'Range', 'FCODE': 'TextEdit', 'REMARK': 'TextEdit', 'SRS_ID': 'TextEdit', 'LCODE': 'TextEdit', 'METADATA': 'TextEdit', 'NAMWS': 'TextEdit', 'NAMDAS': 'TextEdit', 'SHAPE_Leng': 'TextEdit', 'SHAPE_Area': 'TextEdit', });
lyr_TITIK_KUMPUL_4.set('fieldImages', {'NAMOBJ': 'TextEdit', 'LUAS': 'TextEdit', 'REMARK': 'TextEdit', 'TIPSHT': 'Range', 'FCODE': 'TextEdit', 'SRS_ID': 'TextEdit', 'LCODE': 'TextEdit', 'METADATA': 'TextEdit', 'FSKADD': 'TextEdit', });
lyr_PENGUNGSIAN_BANJARMASIN_5.set('fieldImages', {'NAMOBJ': 'TextEdit', 'FCODE': 'TextEdit', 'LCODE': 'TextEdit', 'REMARK': 'TextEdit', 'SRS_ID': 'TextEdit', 'METADATA': 'TextEdit', 'LKALMT': 'TextEdit', 'TPLYST': 'Range', });
lyr_JALAN_LN_50K_1.set('fieldLabels', {'NAMRJL': 'no label', 'KONRJL': 'no label', 'MATRJL': 'no label', 'FGSRJL': 'no label', 'UTKRJL': 'no label', 'TOLRJL': 'no label', 'WLYRJL': 'no label', 'AUTRJL': 'no label', 'KLSRJL': 'no label', 'SPCRJL': 'no label', 'JPARJL': 'no label', 'ARHRJL': 'no label', 'STARJL': 'no label', 'KLLRJL': 'no label', 'MEDRJL': 'no label', 'LOCRJL': 'no label', 'JARRJL': 'no label', 'FCODE': 'no label', 'REMARK': 'no label', 'SRS_ID': 'no label', 'LCODE': 'no label', 'METADATA': 'no label', 'SHAPE_Leng': 'no label', });
lyr_ADMINISTRASIKECAMATAN_AR_50K_2.set('fieldLabels', {'KDPPUM': 'no label', 'NAMOBJ': 'no label', 'REMARK': 'no label', 'KDPBPS': 'no label', 'FCODE': 'no label', 'LUASWH': 'no label', 'UUPP': 'no label', 'SRS_ID': 'no label', 'LCODE': 'no label', 'METADATA': 'no label', 'KDEBPS': 'no label', 'KDEPUM': 'no label', 'KDCBPS': 'no label', 'KDCPUM': 'no label', 'KDBBPS': 'no label', 'KDBPUM': 'no label', 'WADMKD': 'no label', 'WIADKD': 'no label', 'WADMKC': 'no label', 'WIADKC': 'no label', 'WADMKK': 'no label', 'WIADKK': 'no label', 'WADMPR': 'no label', 'WIADPR': 'no label', 'TIPADM': 'no label', 'SHAPE_Leng': 'no label', 'SHAPE_Area': 'no label', });
lyr_SUNGAI_3.set('fieldLabels', {'NAMOBJ': 'no label', 'JNSSNG': 'no label', 'KLSSNG': 'no label', 'FCODE': 'no label', 'REMARK': 'no label', 'SRS_ID': 'no label', 'LCODE': 'no label', 'METADATA': 'no label', 'NAMWS': 'no label', 'NAMDAS': 'no label', 'SHAPE_Leng': 'no label', 'SHAPE_Area': 'no label', });
lyr_TITIK_KUMPUL_4.set('fieldLabels', {'NAMOBJ': 'no label', 'LUAS': 'no label', 'REMARK': 'no label', 'TIPSHT': 'no label', 'FCODE': 'no label', 'SRS_ID': 'no label', 'LCODE': 'no label', 'METADATA': 'no label', 'FSKADD': 'no label', });
lyr_PENGUNGSIAN_BANJARMASIN_5.set('fieldLabels', {'NAMOBJ': 'no label', 'FCODE': 'no label', 'LCODE': 'no label', 'REMARK': 'no label', 'SRS_ID': 'no label', 'METADATA': 'no label', 'LKALMT': 'no label', 'TPLYST': 'no label', });
lyr_PENGUNGSIAN_BANJARMASIN_5.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});