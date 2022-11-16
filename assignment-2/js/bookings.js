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
        var id = 0;
        var tableHTML ="<table style='margin:auto'><tr><th> Booking ID</th><th>Vehicle Registration</th><th>Customer Name</th>" +
            "<th>Pickup Date</th><th> Dropoff date</th></tr>";

        data.bookings.booking.forEach(function(element){
            var pickDate = element.pickup.day + "/" + element.pickup.month + "/" + element.pickup.year;
            var dropDate = element.dropoff.day + "/" + element.dropoff.month + "/" + element.dropoff.year;
            tableHTML = tableHTML + "<tr><td>"+id+"</td><td>" + element.number + "</td><td>" + element.name + "</td><td>" +
                pickDate + "</td><td>" + dropDate + "</td></tr>";
            id += 1;
        });


        $("#bookingInfo").append(tableHTML);

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
