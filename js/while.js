"use strict";

var i =1;

while(i < 60000){
    console.log(i *2);
    i *= 2;
}
//example:
// var i = 10;
//
// do {
//     console.log('while loop iteration #' + i);
//     i++;
// } while (i < 10);

// different way of writing function:
// var iceCream = function(){
//
// }

var allCones = Math.floor(Math.random() * 50) + 50;

do{
    var conesSold = Math.floor(Math.random() * 5) + 1;
    console.log(conesSold + " cones sold...");
    var totalCones = allCones - conesSold;
    console.log(totalCones);
    allCones = allCones - conesSold;
    if(conesSold > allCones){
        console.log('I only have ' + allCones + ' cones left. I don\'t have enough cones to sell you ' + conesSold + ' cones.');
        break;
    }
} while(allCones > 0)
    console.log("Sold them all!");