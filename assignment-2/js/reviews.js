/*global $*/
/*jslint browser */
/*global window */
var Reviews = (function(){
    "use strict";
    var pub = {};

    /**
     * Parses the information inputted from reviews.json
     * Adds the information of all reviews to a div.
     * @param data inputted from the json file
     */
    function parseReviews(data) {

        if($("#review").text().length > 0){
            $("#review").html("");
            $("#review").css("border-style", "none");
        }else{
            data.forEach(function (element) {
                $("#review").append("<p> Title: " + element.title + ". <br> Author: " + element.author + ".<br> Review: " + element.reviewcontent);
                $("#review").css("border-style", "solid");

            });
        }

    }

    /**
     * Import data from json file
     */
    function showReviews() {
        window.console.log("Show vehicles called");


        $.ajax({
            type: "GET",
            url: "./json/reviews.json",
            cache: false,
            datatype: 'json',
            success: function(data) {
                parseReviews(data);
            },
            error: function(){
                $("#reviews").html("No reviews available, sorry");
            }
        });

    }



    pub.setup = function(){
        $(".showReviews").click(showReviews);

    };

    return pub;
}());

$(document).ready(Reviews.setup);
