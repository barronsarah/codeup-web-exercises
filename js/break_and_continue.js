"use strict";


function isNumeric(input){
    input = parseFloat(input);
    return !isNaN(input);
}
function isEven(input){
    input = parseFloat(input);
    return input % 2 === 0;
}
//STARTING AS IF/ELSE STATEMENT
// var numberEntered = prompt("Hey there! Enter an odd number between 1 and 50: ");
//
//     if ((isNumeric(numberEntered) !== true) || (numberEntered === '') || (isEven(numberEntered)) || (parseFloat(numberEntered) >= 50)) {
//         prompt('You did not enter an odd number. Try again. Enter an odd number between 1 and 50:');
//     } else {
//         console.log("Number to skip: " + numberEntered)
//         alert('You entered the number ' + numberEntered);
//         ;
//     }
//BELOW was an infinite loop due to having '-->!isNumeric(numberEntered) - this needs to be true '
do {
    prompt('You did not enter an odd number. Try again. Enter an odd number between 1 and 50:');

} while((isNumeric(numberEntered)  || (numberEntered === '') || (isEven(numberEntered)) || (parseFloat(numberEntered) > 50)));

// --- BELOW: this did not work----
// // var numberEntered= 0;
// // do {
// //     numberEntered = prompt("Hey there! Enter an odd number between 1 and 50: ");
// //     if (parseFloat(numberEntered) === (isNumeric(numberEntered) && numberEntered !== '' && !isEven(numberEntered))) {
// //         numberEntered += 1;
// //         break;
// //     }
// // } while (numberEntered < 5);
//
// ----SECOND PART OF EXERCISE----
for(var i =1; i <=50; i+=2){
    // if(isEven(i)){   ---this not needed
    //     continue;}

    if(i === parseFloat(numberEntered)){
        console.log("Yikes! Skipping number: " + i);
        continue;
    } else {
        console.log('Here is an odd number: ' + i);
    }
}

// WALKTHROUGH ANSWER:

// var userInput;
//
// do {
//     userInput = prompt("please enter an odd number between 1 and 50");
//     userInput = parseFloat(userInput);
//     if(isNumeric(userInput) && !isEven(userInput) && userInput =>1 && userInput <=50);
// break;
// } while(true);
