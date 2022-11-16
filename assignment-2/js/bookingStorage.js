/*global $*/
/*jslint browser */
/*global window */
var bookingStorage =( function(){
    "use strict";
    var pub = {};
    var regNumber, customerName;
    var bookingData = [];

    function displayError(errors){
        //var errors = document.getElementById("errors");
        console.log(errors);
        $("#errors").html(" ");
        errors.forEach(function (list){
            $("#errors").append(" " + list + "<br>");
        });

    }





    /**
     * checks to make sure that the date entered is not in the past or present.
     * @param pickDate pickup date
     * @param dropDate dropoff date
     * @param errors array to pass errors to in case of an error
     */
    function checkBookingDate(pickDate, dropDate, errors) {
        var today;
        today = new Date();
        if(pickDate < today || dropDate < today){
            errors.push("Invalid date, please choose a date in the future");
        }
        if(pickDate > dropDate){
            errors.push("Pickup date must be before the dropoff date");
        }


    }

    /**
     * Validates form to check if the currently entered date conflicts with any of the bookings
     * @returns {boolean} to make sure the page doesnt refresh on submit
     */
    function validateForm() {
        var errors = [];
        var pickDate, dropDate;
        window.console.log("validateForm called");
        pickDate = new Date($("#pickup").val());
        dropDate = new Date($("#dropoff").val());
        var regNum = $("#regNum").val();
        bookingData.bookings.booking.forEach(function (element) {
            if (regNum === element.number) {
                var pBookingDate = new Date(element.pickup.year + "-" + element.pickup.month + "-" + element.pickup.day);
                var dBookingDate = new Date(element.dropoff.year + "-" + element.dropoff.month + "-" + element.dropoff.day);
                if ((pBookingDate >= pickDate && pBookingDate <= dropDate) || (dBookingDate >= dropDate && dBookingDate >= pickDate)){
                    errors.push("This vehicle will be unavailable starting from " + pBookingDate + " to " + dBookingDate);
                }
            }

        });

        checkBookingDate(pickDate, dropDate, errors);
        if(errors.length !== 0) {
            displayError(errors);
        }else{
            return true;
        }
        return false;
    }


    /**
     * Function to import vehicles.json into this file and then append the registration values to the form
     */


    function getJson() {

        $.ajax({
            type: "GET",
            url: "./json/vehicles.json",
            cache: false,
            datatype: 'json',
            success: function (data) {
                window.console.log("showVehicles did work");
                data.fleet.vehicle.forEach(function (element) {
                    $("#regNum").append("<option value='" + element.registration + "'> " + element.registration + " </option>");

                });
            },
            error: function () {

            }
        });

        $.getJSON("./json/bookings.json", function (data) {
            bookingData = data;

        });

    }









    pub.setup = function() {
        $("#form").submit(validateForm);
        getJson();

        window.console.log(window.localStorage.getItem("bookings"));

    };

    return pub;
}());

/** event handlers for the setup function so that multiple scripts can run their setup **/
$(document).ready(bookingStorage.setup);