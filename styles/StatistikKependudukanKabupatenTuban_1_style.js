var size = 0;
var placement = 'point';

var style_StatistikKependudukanKabupatenTuban_1 = function(feature, resolution){
    var context = {
        feature: feature,
        variables: {}
    };
    
    var labelText = ""; 
    var value = feature.get("Join_Penduduk (ribu)");
    var labelFont = "10.4px \'Arial Rounded MT Bold\', sans-serif";
    var labelFill = "#323232";
    var bufferColor = "#fafafa";
    var bufferWidth = 3.0;
    var textAlign = 'center';
    var offsetX = 0;
    var offsetY = 0;
    var overflow = false;
    var repeat = 0;
    var placement = 'point';
    if (feature.get("WADMKC") !== null) {
        labelText = String(feature.get("WADMKC"));
    }
    if (value >= 30.370000 && value <= 44.606200) {
            style = [ new ol.style.Style({
        stroke: new ol.style.Stroke({color: 'rgba(71,71,71,1.0)', lineDash: [7.6,1.52,3.04,1.52,3.04,1.52], lineCap: 'butt', lineJoin: 'miter', width: 1.52}),fill: new ol.style.Fill({color: 'rgba(254,240,217,1.0)'}),
        text: createTextStyle(feature, resolution, labelText, labelFont,
                              labelFill, placement, bufferColor,
                              bufferWidth, textAlign, offsetX, offsetY, overflow, repeat)
    })]
                    } else if (value >= 44.606200 && value <= 57.335600) {
            style = [ new ol.style.Style({
        stroke: new ol.style.Stroke({color: 'rgba(71,71,71,1.0)', lineDash: [7.6,1.52,3.04,1.52,3.04,1.52], lineCap: 'butt', lineJoin: 'miter', width: 1.52}),fill: new ol.style.Fill({color: 'rgba(253,204,138,1.0)'}),
        text: createTextStyle(feature, resolution, labelText, labelFont,
                              labelFill, placement, bufferColor,
                              bufferWidth, textAlign, offsetX, offsetY, overflow, repeat)
    })]
                    } else if (value >= 57.335600 && value <= 61.716800) {
            style = [ new ol.style.Style({
        stroke: new ol.style.Stroke({color: 'rgba(71,71,71,1.0)', lineDash: [7.6,1.52,3.04,1.52,3.04,1.52], lineCap: 'butt', lineJoin: 'miter', width: 1.52}),fill: new ol.style.Fill({color: 'rgba(252,141,89,1.0)'}),
        text: createTextStyle(feature, resolution, labelText, labelFont,
                              labelFill, placement, bufferColor,
                              bufferWidth, textAlign, offsetX, offsetY, overflow, repeat)
    })]
                    } else if (value >= 61.716800 && value <= 84.775200) {
            style = [ new ol.style.Style({
        stroke: new ol.style.Stroke({color: 'rgba(71,71,71,1.0)', lineDash: [7.6,1.52,3.04,1.52,3.04,1.52], lineCap: 'butt', lineJoin: 'miter', width: 1.52}),fill: new ol.style.Fill({color: 'rgba(227,74,51,1.0)'}),
        text: createTextStyle(feature, resolution, labelText, labelFont,
                              labelFill, placement, bufferColor,
                              bufferWidth, textAlign, offsetX, offsetY, overflow, repeat)
    })]
                    } else if (value >= 84.775200 && value <= 121.121000) {
            style = [ new ol.style.Style({
        stroke: new ol.style.Stroke({color: 'rgba(71,71,71,1.0)', lineDash: [7.6,1.52,3.04,1.52,3.04,1.52], lineCap: 'butt', lineJoin: 'miter', width: 1.52}),fill: new ol.style.Fill({color: 'rgba(179,0,0,1.0)'}),
        text: createTextStyle(feature, resolution, labelText, labelFont,
                              labelFill, placement, bufferColor,
                              bufferWidth, textAlign, offsetX, offsetY, overflow, repeat)
    })]
                    };

    return style;
};
