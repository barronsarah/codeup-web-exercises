(function(){
    "use strict";

    var planetsString = "Mercury|Venus|Earth|Mars|Jupiter|Saturn|Uranus|Neptune";
    // var planetsArray;

    /**
     * TODO:
     * Convert planetsString to an array, and save it in a variable named
     * planetsArray.
     * console.log planetsArray to check your work
     */
    var  planetsArray = planetsString.split("|");
    console.log(planetsArray);

    /**
     * TODO:
     * Create a string with <br> tags between each planet. console.log() your
     * results. Why might this be useful?

     * BONUS:
     * Create another string that would display your planets in an undordered
     * list. You will need an opening AND closing <ul> tags around the entire
     * string, and <li> tags around each planet.
     */
    var brPlanetsArray = planetsArray.join("<br>");
    console.log(brPlanetsArray);

    function list(array){
        var str = "<ul>";

        array.forEach(function(elem){
            str = str + "<li>" + elem + "</li>";
        });
        str += "</ul>";
        return str;
    }

    console.log(list(planetsArray));

    // WALKTHROUGH ANSWER:
 var htmlString= "<ul><li>";

 htmlString += planetsArray.join("</li><li>");

 htmlString += "</li></ul>";

 // or!!
    var htmlString= "<ul><li>" + planetsArray.join("</li><li>") + "</li></ul>";

 document.body.innerHTML += htmlString;

})();
