/**
 * Implements a carousel affect with images
 * Jayden Prakash 2020
 * University of Otago
 */

/*global $*/
var Carousel =(function(){
    "use strict";
    var imageList, imageIndex;
    var pub = {};

    /**
     * Goes to next image for carousel
     */
    function nextImage() {
        if (imageIndex === imageList.length) {
            /** Makes sure that the index doesnt go off the end of the array **/
            imageIndex = 0;
        }
        $("#carousel").fadeIn(2500);
        $("#carousel").html("<a href = 'vehicles.html'><img src = '" + imageList[imageIndex] + "'> </a>");
        $("#carousel").fadeOut(2500);
        imageIndex += 1;
    }



    pub.setup = function(){
        /* Add images to an array so that they can be cycled through */
        imageIndex = 0;
        imageList = [];
        imageList.push("./images/largeCar.jpg");
        imageList.push("./images/luxuryCar.jpg");
        imageList.push("./images/mediumCar.jpg");
        imageList.push("./images/smallCar.jpg");
        $(document).ready("#carousel").hide();
        $("#carousel").fadeOut(5000);
        nextImage();
        setInterval(nextImage, 5000);


    };

    return pub;
}());

$(document).ready(Carousel.setup);
