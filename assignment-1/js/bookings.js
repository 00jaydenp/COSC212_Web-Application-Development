/*global $, window*/
var Bookings = (function(){
    "use strict";
    var pub = {};

    /**
     * Parses information input through json file
     * Adds information about current bookings into a table
     * @param data inputted from json file
     */
    function parseBookings(data){
        var tableHTML = "<table> <tr><th> Vehicle Registration</th><th>Customer Name</th><th>Pickup Date</th>" +
            "<th>Dropoff Date</th></tr>";

        data.bookings.booking.forEach(function(element){
            var pickDate = element.pickup.day + "/" + element.pickup.month + "/" + element.pickup.year;
            var dropDate = element.dropoff.day + "/" + element.dropoff.month + "/" + element.dropoff.year;
            tableHTML = tableHTML + "<tr><td>" + element.number + "</td><td>" + element.name + "</td><td>" +
                pickDate + "</td><td>" + dropDate + "</td></tr>";
        });

        $("#bookings").html(tableHTML);

    }

    /**
     * Imports information from bookings.json
     */
    function showBookings() {
        window.console.log("Show vehicles called");
        /*jshint -W040*/
        /*jshint +W040*/
        $.ajax({
            type: "GET",
            url: "./json/bookings.json",
            cache: false,
            datatype: 'json',
            success: function(data) {
                parseBookings(data);
            },
            error: function(){
                $(".bookings").html("No current bookings");
            }
        });

    }



    pub.setup = function(){
        showBookings();

    };

    return pub;
}());

$(document).ready(Bookings.setup);