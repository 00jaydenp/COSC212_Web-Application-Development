/*global $*/
/*jslint browser */
/*global window */
var bookingStorage =( function(){
    "use strict";
    var pub = {};
    var regNumber, customerName, pickupDate, dropoffDate;
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
     * Adds the details of the form to localStorage
     */
    function addToStorage(){
        var bookings = [];
        var booking={};

        regNumber = $("#regNum").val();
        customerName = $("#customerName").val();
        pickupDate = $("#pickup").val();
        dropoffDate = $("#dropoff").val();

        if(window.localStorage.getItem("bookings") !== null){
            bookings = JSON.parse(window.localStorage.getItem("bookings"));
        }

        booking.registration = regNumber;
        booking.name = customerName;
        booking.pickup = {};
        booking.dropoff = {};
        booking.pickup.day = $("#pickup").datepicker('getDate').getDate();
        booking.pickup.month = $("#pickup").datepicker('getDate').getMonth() + 1;
        booking.pickup.year = $("#pickup").datepicker('getDate').getFullYear();
        booking.dropoff.day = $("#dropoff").datepicker('getDate').getDate();
        booking.dropoff.month = $("#dropoff").datepicker('getDate').getMonth() + 1;
        booking.dropoff.year = $("#dropoff").datepicker('getDate').getFullYear();
        window.localStorage.setItem("booking", JSON.stringify(bookings));


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
                if ((pBookingDate >= pickDate && pBookingDate <= dropDate) || (dBookingDate <= dropDate && dBookingDate >= pickDate)){
                    errors.push("This vehicle will be unavailable starting from " + pBookingDate + " to " + dBookingDate);
                }
            }

        });

        checkBookingDate(pickDate, dropDate, errors);
        if(errors.length === 0) {
            addToStorage();
            $("#form").html("Booking success! Thank you for using Otago Car Rental.");

        } else{
            displayError(errors);
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
        var today = new Date();
        $("#form").submit(validateForm);
        getJson();
        $("#pickup").datepicker().datepicker('setDate', today);
        $("#dropoff").datepicker().datepicker('setDate', new Date(today.getTime() + 86400000));

        window.console.log(window.localStorage.getItem("bookings"));

    };

        return pub;
}());

/** event handlers for the setup function so that multiple scripts can run their setup **/
$(document).ready(bookingStorage.setup);