var wms_layers = [];


        var lyr_GoogleSatelliteHybrid_0 = new ol.layer.Tile({
            'title': 'Google Satellite Hybrid',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
            attributions: ' ',
                url: 'https://mt1.google.com/vt/lyrs=y&x={x}&y={y}&z={z}'
            })
        });
var format_StatistikKependudukanKabupatenTuban_1 = new ol.format.GeoJSON();
var features_StatistikKependudukanKabupatenTuban_1 = format_StatistikKependudukanKabupatenTuban_1.readFeatures(json_StatistikKependudukanKabupatenTuban_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_StatistikKependudukanKabupatenTuban_1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_StatistikKependudukanKabupatenTuban_1.addFeatures(features_StatistikKependudukanKabupatenTuban_1);
var lyr_StatistikKependudukanKabupatenTuban_1 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_StatistikKependudukanKabupatenTuban_1, 
                style: style_StatistikKependudukanKabupatenTuban_1,
                popuplayertitle: 'Statistik Kependudukan Kabupaten Tuban',
                interactive: true,
    title: 'Statistik Kependudukan Kabupaten Tuban<br />\
    <img src="styles/legend/StatistikKependudukanKabupatenTuban_1_0.png" /> Sangat Rendah (30.370-44.606 Jiwa)<br />\
    <img src="styles/legend/StatistikKependudukanKabupatenTuban_1_1.png" /> Rendah (44.606-57.336 Jiwa)<br />\
    <img src="styles/legend/StatistikKependudukanKabupatenTuban_1_2.png" /> Sedang (57.336-61.717 Jiwa)<br />\
    <img src="styles/legend/StatistikKependudukanKabupatenTuban_1_3.png" /> Tinggi (61.717-84.775 Jiwa)<br />\
    <img src="styles/legend/StatistikKependudukanKabupatenTuban_1_4.png" /> Sangat Tinggi (84.775-121.121 Jiwa)<br />' });
var format_JaringanJalan_2 = new ol.format.GeoJSON();
var features_JaringanJalan_2 = format_JaringanJalan_2.readFeatures(json_JaringanJalan_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_JaringanJalan_2 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_JaringanJalan_2.addFeatures(features_JaringanJalan_2);
var lyr_JaringanJalan_2 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_JaringanJalan_2, 
                style: style_JaringanJalan_2,
                popuplayertitle: 'Jaringan Jalan',
                interactive: true,
                title: '<img src="styles/legend/JaringanJalan_2.png" /> Jaringan Jalan'
            });
var format_KantorKecamatan_3 = new ol.format.GeoJSON();
var features_KantorKecamatan_3 = format_KantorKecamatan_3.readFeatures(json_KantorKecamatan_3, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_KantorKecamatan_3 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_KantorKecamatan_3.addFeatures(features_KantorKecamatan_3);
var lyr_KantorKecamatan_3 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_KantorKecamatan_3, 
                style: style_KantorKecamatan_3,
                popuplayertitle: 'Kantor Kecamatan',
                interactive: true,
                title: '<img src="styles/legend/KantorKecamatan_3.png" /> Kantor Kecamatan'
            });

lyr_GoogleSatelliteHybrid_0.setVisible(true);lyr_StatistikKependudukanKabupatenTuban_1.setVisible(true);lyr_JaringanJalan_2.setVisible(true);lyr_KantorKecamatan_3.setVisible(true);
var layersList = [lyr_GoogleSatelliteHybrid_0,lyr_StatistikKependudukanKabupatenTuban_1,lyr_JaringanJalan_2,lyr_KantorKecamatan_3];
lyr_StatistikKependudukanKabupatenTuban_1.set('fieldAliases', {'fid': 'fid', 'WADMKC': 'Kecamatan', 'WADMKK': 'WADMKK', 'WADMPR': 'WADMPR', 'X': 'X', 'Y': 'Y', 'Join_No': 'Join_No', 'Join_Luas (ha)': 'Luas Wilayah (km²)', 'Join_Jumlah Desa/Kel': 'Jumlah Desa/Kel', 'Join_Penduduk (ribu)': 'Jumlah Penduduk', 'Join_Kepadatan Penduduk (per km2)': 'Kepadatan Penduduk/km²', 'Kantor Kecamatan': 'Kantor Kecamatan', });
lyr_JaringanJalan_2.set('fieldAliases', {'OBJECTID_1': 'OBJECTID_1', 'OBJECTID_2': 'OBJECTID_2', 'OBJECTID': 'OBJECTID', 'NAMOBJ': 'NAMOBJ', 'FCODE': 'FCODE', 'REMARK': 'REMARK', 'METADATA': 'METADATA', 'SRS_ID': 'SRS_ID', 'SHAPE_Leng': 'SHAPE_Leng', 'Shape_Le_1': 'Shape_Le_1', 'Shape_Le_2': 'Shape_Le_2', });
lyr_KantorKecamatan_3.set('fieldAliases', {'OID_': 'OID_', 'Name': 'Name', 'FolderPath': 'FolderPath', 'SymbolID': 'SymbolID', 'AltMode': 'AltMode', 'Base': 'Base', 'Snippet': 'Snippet', 'PopupInfo': 'PopupInfo', 'HasLabel': 'HasLabel', 'LabelID': 'LabelID', 'X': 'X', 'Y': 'Y', 'FID_1': 'FID_1', 'Nama_Kanto': 'Nama_Kanto', 'Provinsi': 'Provinsi', 'Kab_Kota': 'Kab_Kota', 'Kecamatan': 'Kecamatan', 'Desa_Kelur': 'Desa_Kelur', 'Alamat': 'Alamat', 'Kode_Pos': 'Kode_Pos', 'X_1': 'X_1', 'Y_1': 'Y_1', });
lyr_StatistikKependudukanKabupatenTuban_1.set('fieldImages', {'fid': 'Hidden', 'WADMKC': 'TextEdit', 'WADMKK': 'Hidden', 'WADMPR': 'Hidden', 'X': 'Hidden', 'Y': 'Hidden', 'Join_No': 'Hidden', 'Join_Luas (ha)': 'TextEdit', 'Join_Jumlah Desa/Kel': 'Range', 'Join_Penduduk (ribu)': 'TextEdit', 'Join_Kepadatan Penduduk (per km2)': 'TextEdit', 'Kantor Kecamatan': 'ExternalResource', });
lyr_JaringanJalan_2.set('fieldImages', {'OBJECTID_1': 'Hidden', 'OBJECTID_2': 'Hidden', 'OBJECTID': 'Hidden', 'NAMOBJ': 'Hidden', 'FCODE': 'Hidden', 'REMARK': 'Hidden', 'METADATA': 'Hidden', 'SRS_ID': 'Hidden', 'SHAPE_Leng': 'Hidden', 'Shape_Le_1': 'Hidden', 'Shape_Le_2': 'Hidden', });
lyr_KantorKecamatan_3.set('fieldImages', {'OID_': 'Hidden', 'Name': 'Hidden', 'FolderPath': 'Hidden', 'SymbolID': 'Hidden', 'AltMode': 'Hidden', 'Base': 'Hidden', 'Snippet': 'Hidden', 'PopupInfo': 'Hidden', 'HasLabel': 'Hidden', 'LabelID': 'Hidden', 'X': 'Hidden', 'Y': 'Hidden', 'FID_1': 'Hidden', 'Nama_Kanto': 'Hidden', 'Provinsi': 'Hidden', 'Kab_Kota': 'Hidden', 'Kecamatan': 'Hidden', 'Desa_Kelur': 'Hidden', 'Alamat': 'Hidden', 'Kode_Pos': 'Hidden', 'X_1': 'Hidden', 'Y_1': 'Hidden', });
lyr_StatistikKependudukanKabupatenTuban_1.set('fieldLabels', {'WADMKC': 'inline label - always visible', 'Join_Luas (ha)': 'inline label - always visible', 'Join_Jumlah Desa/Kel': 'inline label - always visible', 'Join_Penduduk (ribu)': 'inline label - always visible', 'Join_Kepadatan Penduduk (per km2)': 'inline label - always visible', 'Kantor Kecamatan': 'no label', });
lyr_JaringanJalan_2.set('fieldLabels', {});
lyr_KantorKecamatan_3.set('fieldLabels', {});
lyr_KantorKecamatan_3.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});