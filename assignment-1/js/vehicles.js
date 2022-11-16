/*global $*/
/*jslint browser */
/*global window */
var Vehicles = (function(){
    "use strict";
    var pub = {};


    /**
     * Displays an image depending on which preview was clicked
     */
    function displayImage(){
        /*jshint -W040*/
        if($(this).attr('class') === "previewSmall"){
            $("#image").html("<img src='./images/smallCar.jpg'>");
        }

        if($(this).attr('class') === "previewMedium"){
            $("#image").html("<img src='./images/mediumCar.jpg'>");
        }

        if($(this).attr('class') === "previewLarge"){
            $("#image").html("<img src='./images/largeCar.jpg'>");
        }

        if($(this).attr('class') === "previewLuxury"){
            $("#image").html("<img src='./images/luxuryCar.jpg'>");
        }

        $("#image").css('text-align', 'center');
        /*jshint +W040*/
    }

    /**
     * Parses the information inputted from vehicles.json
     * Adds the information of all the vehicles to a table.
     * @param data inputted from the json file
     */
    function parseVehicles(data) {
        var tableHTML = "<table style='margin:auto'> <tr><th> Registration</th><th>Vehicle type</th><th>Description</th>" +
            "<th>Price per day</th><th> Preview</th></tr>";

        data.fleet.vehicle.forEach(function (element) {
            tableHTML = tableHTML + "<tr><td>" + element.registration + "</td><td>" + element.vehicleType + "</td><td>" +
                element.description + "</td><td>$" + element.pricePerDay + "</td><td class='preview" + element.vehicleType + "'> Preview </td></tr>";



        });



        $("#vehicles").append(tableHTML);
        $("td").css('cursor','pointer');
        $("td").click(displayImage);

    }

    /**
     * Import data from json file
     */
    function showVehicles() {
        window.console.log("Show vehicles called");


        $.ajax({
            type: "GET",
            url: "./json/vehicles.json",
            cache: false,
            datatype: 'json',
            success: function(data) {

                parseVehicles(data);
            },
            error: function(){
                $("#vehicles").html("No vehicles available, sorry");
            }
        });

    }



    pub.setup = function(){
        showVehicles();

    };

    return pub;
}());

$(document).ready(Vehicles.setup);