"use strict";


//MULTIPLICATION TABLE EXERCISE 2:

// function showMultiplicationTable(number){
//     for(var i = 1; i < 11; i++) {
//         var total = number * i;
//         console.log(number + ' x ' + i + ' = ' + total)
//     }
// }
// showMultiplicationTable(7);


// FOR LOOP EXERCISE 3:
// var timeToStop = 10;
//
// for (var i = 1; i < 11; i++) {
//     var randomNumber = Math.floor(Math.random() * 201) + 20;
//     if (i === timeToStop) {
//         console.log('This is your stopping point. We\'ve logged all 10 random numbers.');
//         break;
//     } else {
//         if (randomNumber % 2 === 0) {
//             console.log(randomNumber + ' is an even number');
//
//         } else {
//             console.log(randomNumber + ' is an odd number');
//         }
//     }
// }
//
// FOR LOOP EXERCISE 4:

// for(var i = 1; i < 10; i++) {
//     console.log(String(i).repeat(i))
// }
// WALKTHROUGH ANSWER:
function numberTree(){
    for(var i = 1; i < 10; i++){
        var it = '';
        for(var j=0; j<i; j++){
            it = it + j;
        }
        console.log(it);
    }
}
numberTree();



for (var i = 100; i > 4; i -=5){
    console.log(i);
}

// WALKTHOUGH ANSWER:

var countBackwardsByFives = function(){
    for(var i=100;i>=5;i-=5){
        console.log(i)
    }
}

countBackwardsByFives();

