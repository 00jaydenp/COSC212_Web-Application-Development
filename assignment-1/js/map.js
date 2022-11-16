/**
 * Javascript for an interactive map
 * Jayden Prakash
 * University Of Otago
 * August 2020
 */


/*global $, L, window*/
var Location = ( function(){
    "use strict";
    var pub = {};
    var map, restauraunts, landmarks;

    /**
     * Function that shows/hides the restaurant and landmark markers.
     */
    function showHide(){
        /*jshint -W040*/
        if(this.className === "restaurants"){
            if (map.hasLayer(restauraunts)) {
                map.removeLayer(restauraunts);
            } else {
                map.addLayer(restauraunts);
            }
        } else if(this.className === "landmarks"){
            if (map.hasLayer(landmarks)) {
                map.removeLayer(landmarks);
            } else {
                map.addLayer(landmarks);
            }
        }
        /*jshint +W040*/
    }


    /**
     * This adds the map to the contact.html page
     */
    function addMap(){
        restauraunts = L.layerGroup();
        landmarks =  L.layerGroup();

        map = L.map('map').setView([-45.905, 170.515], 15);
        L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png',
            { maxZoom: 18,
                attribution: 'Map data &copy; ' +
                    '<a href = "http://www.openstreetmap.org/copyright">'  +
                    'OpenStreetMap contributors</a> CC-BY-SA'
            }).addTo(map);
        $.getJSON("./json/POI.geojson", function(data) {
           L.geoJson(data, {
                onEachFeature: function (feature, layer) {
                    if(feature.properties.type === "restaurant"){
                        restauraunts.addLayer(layer.bindPopup(feature.properties.name));
                    } else if(feature.properties.type === "landmark"){
                        landmarks.addLayer(layer.bindPopup(feature.properties.name));
                        window.console.log("Added to landmarks layer");
                    }
                    layer.bindPopup(feature.properties.name).addTo(map);

                    map.addLayer(landmarks);
                    map.addLayer(restauraunts);
                }


            });

    });
    }


    pub.setup= function(){
        addMap();
        $("button").click(showHide);

    };
    return pub;
}());

/** event handlers for the setup function so that multiple scripts can run their setup **/
$(document).ready(Location.setup);