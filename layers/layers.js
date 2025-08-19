var wms_layers = [];


        var lyr_EsriWorldImagery_0 = new ol.layer.Tile({
            'title': 'Esri World Imagery',
            'type':'base',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
            attributions: ' &nbsp &middot; <a href="https://wiki.openstreetmap.org/wiki/Esri">Terms & Feedback</a>',
                url: 'https://services.arcgisonline.com/arcgis/rest/services/World_Imagery/MapServer/tile/{z}/{y}/{x}'
            })
        });

        var lyr_Basemap_1 = new ol.layer.Tile({
            'title': 'Basemap',
            'type':'base',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
            attributions: ' ',
                url: 'https://server.arcgisonline.com/ArcGIS/rest/services/World_Street_Map/MapServer/tile/{z}/{y}/{x}'
            })
        });
var lyr_BathymetryLayer_2 = new ol.layer.Image({
        opacity: 1,
        
    title: 'Bathymetry Layer<br />\
    <img src="styles/legend/BathymetryLayer_2_0.png" /> -5456<br />\
    <img src="styles/legend/BathymetryLayer_2_1.png" /> -5107<br />\
    <img src="styles/legend/BathymetryLayer_2_2.png" /> -4758<br />\
    <img src="styles/legend/BathymetryLayer_2_3.png" /> -4408<br />\
    <img src="styles/legend/BathymetryLayer_2_4.png" /> -4059<br />' ,
        
        
        source: new ol.source.ImageStatic({
            url: "./layers/BathymetryLayer_2.png",
            attributions: ' ',
            projection: 'EPSG:3857',
            alwaysInRange: true,
            imageExtent: [-17776795.017263, -2042426.131436, -17642747.797099, -1913550.884718]
        })
    });
var format_Trackplot_line_3 = new ol.format.GeoJSON();
var features_Trackplot_line_3 = format_Trackplot_line_3.readFeatures(json_Trackplot_line_3, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Trackplot_line_3 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Trackplot_line_3.addFeatures(features_Trackplot_line_3);
var lyr_Trackplot_line_3 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Trackplot_line_3, 
                style: style_Trackplot_line_3,
                popuplayertitle: 'Trackplot_line',
                interactive: false,
                title: '<img src="styles/legend/Trackplot_line_3.png" /> Trackplot_line'
            });
var format_Contour_4 = new ol.format.GeoJSON();
var features_Contour_4 = format_Contour_4.readFeatures(json_Contour_4, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Contour_4 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Contour_4.addFeatures(features_Contour_4);
var lyr_Contour_4 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Contour_4, 
                style: style_Contour_4,
                popuplayertitle: 'Contour',
                interactive: true,
                title: '<img src="styles/legend/Contour_4.png" /> Contour'
            });
var format_TrackPlotVesselTrack_5 = new ol.format.GeoJSON();
var features_TrackPlotVesselTrack_5 = format_TrackPlotVesselTrack_5.readFeatures(json_TrackPlotVesselTrack_5, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_TrackPlotVesselTrack_5 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_TrackPlotVesselTrack_5.addFeatures(features_TrackPlotVesselTrack_5);
var lyr_TrackPlotVesselTrack_5 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_TrackPlotVesselTrack_5, 
                style: style_TrackPlotVesselTrack_5,
                popuplayertitle: 'Track Plot (Vessel Track)',
                interactive: true,
                title: '<img src="styles/legend/TrackPlotVesselTrack_5.png" /> Track Plot (Vessel Track)'
            });
var format_BoxCore_6 = new ol.format.GeoJSON();
var features_BoxCore_6 = format_BoxCore_6.readFeatures(json_BoxCore_6, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_BoxCore_6 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_BoxCore_6.addFeatures(features_BoxCore_6);
cluster_BoxCore_6 = new ol.source.Cluster({
  distance: 30,
  source: jsonSource_BoxCore_6
});
var lyr_BoxCore_6 = new ol.layer.Vector({
                declutter: false,
                source:cluster_BoxCore_6, 
                style: style_BoxCore_6,
                popuplayertitle: 'Box Core',
                interactive: true,
                title: '<img src="styles/legend/BoxCore_6.png" /> Box Core'
            });
var group_Legend = new ol.layer.Group({
                                layers: [lyr_BathymetryLayer_2,lyr_Trackplot_line_3,lyr_Contour_4,lyr_TrackPlotVesselTrack_5,lyr_BoxCore_6,],
                                fold: 'open',
                                title: 'Legend'});

lyr_EsriWorldImagery_0.setVisible(true);lyr_Basemap_1.setVisible(true);lyr_BathymetryLayer_2.setVisible(true);lyr_Trackplot_line_3.setVisible(true);lyr_Contour_4.setVisible(true);lyr_TrackPlotVesselTrack_5.setVisible(true);lyr_BoxCore_6.setVisible(true);
var layersList = [lyr_EsriWorldImagery_0,lyr_Basemap_1,group_Legend];
lyr_Trackplot_line_3.set('fieldAliases', {'id': 'id', });
lyr_Contour_4.set('fieldAliases', {'fid': 'fid', 'ID': 'ID', 'ELEV': 'Water Depth', });
lyr_TrackPlotVesselTrack_5.set('fieldAliases', {'Date': 'Date', 'Time': 'Time', '(Knots)': '(Knots)', 'Hdg': 'Hdg', 'Z BCN1': 'Z BCN1', 'Z BCN2': 'Z BCN2', 'SOG BCN1': 'SOG BCN1', 'SOG BCN2': 'SOG BCN2', 'H STERN': 'H STERN', 'H BCN1': 'H BCN1', 'H BCN2': 'H BCN2', 'E STERN': 'E STERN', 'N STERN': 'N STERN', 'E BCN1': 'E BCN1', 'N BCN1': 'N BCN1', 'E BCN2': 'E BCN2', 'N BCN2': 'N BCN2', 'Lat STERN': 'Lat STERN', 'Lon STERN': 'Lon STERN', 'Lat BCN1': 'Lat BCN1', 'Lon BCN1': 'Lon BCN1', 'Lat BCN2': 'Lat BCN2', 'Lon BCN2': 'Lon BCN2', 'E AF': 'E AF', 'N AF': 'N AF', 'H AF': 'H AF', 'Lat AF': 'Lat AF', 'Lon AF': 'Lon AF', 'SOG AF': 'SOG AF', 'Easting': 'Easting', 'Northing': 'Northing', 'Height': 'Height', 'Knots': 'Knots', 'Longitude': 'Longitude', 'Latitude': 'Latitude', 'Heading': 'Heading', });
lyr_BoxCore_6.set('fieldAliases', {'No': 'No', 'Planned ID': 'Planned ID', 'Station ID': 'Station ID', 'Easting_Pl': 'Easting_Pl', 'Northing_P': 'Northing_P', 'Latitude_P': 'Latitude_P', 'Longitude_': 'Longitude_', 'Depth Plan': 'Depth Plan', 'BoxCore ID': 'BoxCore ID', 'Date': 'Date', 'Time': 'Time', 'Latitude_S': 'Latitude_S', 'Longitud_1': 'Longitud_1', 'Easting_Sh': 'Easting_Sh', 'Northing_S': 'Northing_S', 'Depth USBL': 'Depth USBL', 'Time on': 'Time on', 'Lat': 'Lat', 'Long': 'Long', 'E': 'E', 'N': 'N', 'Loc_Confid': 'Loc_Confid', 'Fixes Repo': 'Fixes Repo', 'Time off': 'Time off', 'Latitude_o': 'Latitude_o', 'Longitud_2': 'Longitud_2', 'Easting_of': 'Easting_of', 'Northing_o': 'Northing_o', 'Time(Recov': 'Time(Recov', 'Latitude_R': 'Latitude_R', 'Longitud_3': 'Longitud_3', 'Easting_Re': 'Easting_Re', 'Northing_R': 'Northing_R', 'File Name': 'File Name', 'Depth SVP': 'Depth SVP', 'Average SV': 'Average SV', 'Attempt': 'Attempt', 'Quantity': 'Quantity', 'Quality': 'Quality', 'Latitude': 'Latitude', 'Longitude': 'Longitude', 'Easting': 'Easting', 'Northing': 'Northing', 'Loc Diff': 'Loc Diff', 'Image': 'Image', 'MetoceanXL': 'MetoceanXL', });
lyr_Trackplot_line_3.set('fieldImages', {'id': '', });
lyr_Contour_4.set('fieldImages', {'fid': 'TextEdit', 'ID': 'Range', 'ELEV': 'ValueMap', });
lyr_TrackPlotVesselTrack_5.set('fieldImages', {'Date': 'TextEdit', 'Time': 'TextEdit', '(Knots)': 'TextEdit', 'Hdg': 'TextEdit', 'Z BCN1': 'TextEdit', 'Z BCN2': 'Range', 'SOG BCN1': 'TextEdit', 'SOG BCN2': 'Range', 'H STERN': 'TextEdit', 'H BCN1': 'TextEdit', 'H BCN2': 'Range', 'E STERN': 'TextEdit', 'N STERN': 'TextEdit', 'E BCN1': 'TextEdit', 'N BCN1': 'TextEdit', 'E BCN2': 'Range', 'N BCN2': 'Range', 'Lat STERN': 'TextEdit', 'Lon STERN': 'TextEdit', 'Lat BCN1': 'TextEdit', 'Lon BCN1': 'TextEdit', 'Lat BCN2': 'Range', 'Lon BCN2': 'Range', 'E AF': 'TextEdit', 'N AF': 'TextEdit', 'H AF': 'TextEdit', 'Lat AF': 'TextEdit', 'Lon AF': 'TextEdit', 'SOG AF': 'TextEdit', 'Easting': 'TextEdit', 'Northing': 'TextEdit', 'Height': 'TextEdit', 'Knots': 'TextEdit', 'Longitude': 'TextEdit', 'Latitude': 'TextEdit', 'Heading': 'TextEdit', });
lyr_BoxCore_6.set('fieldImages', {'No': 'TextEdit', 'Planned ID': 'TextEdit', 'Station ID': 'TextEdit', 'Easting_Pl': 'TextEdit', 'Northing_P': 'TextEdit', 'Latitude_P': 'TextEdit', 'Longitude_': 'TextEdit', 'Depth Plan': 'TextEdit', 'BoxCore ID': 'UniqueValues', 'Date': 'TextEdit', 'Time': 'TextEdit', 'Latitude_S': 'TextEdit', 'Longitud_1': 'TextEdit', 'Easting_Sh': 'TextEdit', 'Northing_S': 'TextEdit', 'Depth USBL': 'TextEdit', 'Time on': 'TextEdit', 'Lat': 'TextEdit', 'Long': 'TextEdit', 'E': 'TextEdit', 'N': 'TextEdit', 'Loc_Confid': 'TextEdit', 'Fixes Repo': 'TextEdit', 'Time off': 'TextEdit', 'Latitude_o': 'TextEdit', 'Longitud_2': 'TextEdit', 'Easting_of': 'TextEdit', 'Northing_o': 'TextEdit', 'Time(Recov': 'TextEdit', 'Latitude_R': 'TextEdit', 'Longitud_3': 'TextEdit', 'Easting_Re': 'TextEdit', 'Northing_R': 'TextEdit', 'File Name': 'TextEdit', 'Depth SVP': 'TextEdit', 'Average SV': 'TextEdit', 'Attempt': 'Range', 'Quantity': 'Range', 'Quality': 'TextEdit', 'Latitude': 'TextEdit', 'Longitude': 'TextEdit', 'Easting': 'TextEdit', 'Northing': 'TextEdit', 'Loc Diff': 'TextEdit', 'Image': 'ExternalResource', 'MetoceanXL': 'ExternalResource', });
lyr_Trackplot_line_3.set('fieldLabels', {'id': 'no label', });
lyr_Contour_4.set('fieldLabels', {'fid': 'no label', 'ID': 'no label', 'ELEV': 'header label - always visible', });
lyr_TrackPlotVesselTrack_5.set('fieldLabels', {'Date': 'inline label - visible with data', 'Time': 'inline label - visible with data', '(Knots)': 'inline label - visible with data', 'Hdg': 'inline label - visible with data', 'Z BCN1': 'hidden field', 'Z BCN2': 'hidden field', 'SOG BCN1': 'hidden field', 'SOG BCN2': 'hidden field', 'H STERN': 'hidden field', 'H BCN1': 'hidden field', 'H BCN2': 'hidden field', 'E STERN': 'hidden field', 'N STERN': 'hidden field', 'E BCN1': 'hidden field', 'N BCN1': 'hidden field', 'E BCN2': 'hidden field', 'N BCN2': 'hidden field', 'Lat STERN': 'hidden field', 'Lon STERN': 'hidden field', 'Lat BCN1': 'hidden field', 'Lon BCN1': 'hidden field', 'Lat BCN2': 'hidden field', 'Lon BCN2': 'hidden field', 'E AF': 'hidden field', 'N AF': 'hidden field', 'H AF': 'hidden field', 'Lat AF': 'hidden field', 'Lon AF': 'hidden field', 'SOG AF': 'hidden field', 'Easting': 'hidden field', 'Northing': 'hidden field', 'Height': 'hidden field', 'Knots': 'hidden field', 'Longitude': 'inline label - visible with data', 'Latitude': 'inline label - visible with data', 'Heading': 'hidden field', });
lyr_BoxCore_6.set('fieldLabels', {'No': 'hidden field', 'Planned ID': 'inline label - visible with data', 'Station ID': 'inline label - visible with data', 'Easting_Pl': 'hidden field', 'Northing_P': 'hidden field', 'Latitude_P': 'hidden field', 'Longitude_': 'hidden field', 'Depth Plan': 'inline label - visible with data', 'BoxCore ID': 'inline label - visible with data', 'Date': 'inline label - visible with data', 'Time': 'hidden field', 'Latitude_S': 'hidden field', 'Longitud_1': 'hidden field', 'Easting_Sh': 'hidden field', 'Northing_S': 'hidden field', 'Depth USBL': 'hidden field', 'Time on': 'inline label - visible with data', 'Lat': 'hidden field', 'Long': 'hidden field', 'E': 'hidden field', 'N': 'hidden field', 'Loc_Confid': 'hidden field', 'Fixes Repo': 'hidden field', 'Time off': 'inline label - visible with data', 'Latitude_o': 'hidden field', 'Longitud_2': 'hidden field', 'Easting_of': 'hidden field', 'Northing_o': 'hidden field', 'Time(Recov': 'hidden field', 'Latitude_R': 'hidden field', 'Longitud_3': 'hidden field', 'Easting_Re': 'hidden field', 'Northing_R': 'hidden field', 'File Name': 'hidden field', 'Depth SVP': 'hidden field', 'Average SV': 'inline label - visible with data', 'Attempt': 'inline label - visible with data', 'Quantity': 'hidden field', 'Quality': 'inline label - visible with data', 'Latitude': 'inline label - visible with data', 'Longitude': 'inline label - visible with data', 'Easting': 'inline label - visible with data', 'Northing': 'inline label - visible with data', 'Loc Diff': 'hidden field', 'Image': 'inline label - visible with data', 'MetoceanXL': 'hidden field', });
lyr_BoxCore_6.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});