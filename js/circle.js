(function() {
    "use strict";

    // create a circle object
    var circle = {
        radius: 5,

        getArea: function () {
            // TODO: complete this method
            // hint: area = pi * radius^2
        var area = Math.PI * Math.pow(this.radius,2);
            return area; // TODO: return the proper value
        },

        logInfo: function (doRounding) {
            // TODO: complete this method.
            var area = this.getArea();

            if(doRounding === true){
               var area = Math.round(this.get());
                return area
            }
            // If doRounding is true, round the result to the nearest integer.
            // Otherwise, output the complete value

            console.log("Area of a circle with radius: " + this.radius + ", is: " + this.getArea());
        }
    };

    // log info about the circle
    console.log("Raw circle information");
    circle.logInfo(false);
    console.log("Circle information rounded to the nearest whole number");
    circle.logInfo(true);

    console.log("=======================================================");
    // TODO: Change the radius of the circle to 5.

    // log info about the circle
    radius: 5

    console.log("Raw circle information");
    circle.logInfo(false);
    console.log("Circle information rounded to the nearest whole number");
    circle.logInfo(true);
})();
