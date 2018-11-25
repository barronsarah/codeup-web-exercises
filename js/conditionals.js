"use strict";

/**
 * TODO:
 * Write some JavaScript that uses a `confirm` dialog to ask the user if they
 * would like to enter a number. If they click 'Ok', prompt the user for a
 * number, then use 3 separate alerts to tell the user:
 *
 * - whether the number is even or odd
 * - what the number plus 100 is
 * - if the number is negative or positive
 *
 * if what the user enters is not a number, use an alert to tell them that, and
 * do *not* display any of the above information.
 *
 * Can you refactor your code to use functions?
 */

// function isEven() {
//     var even= number % 2 === 0;
//     return even;
// }
// function add100() {
//     var total = parseFloat(number) + 100;
//     return total;
// }
// function isPositive() {
//     var positive = number > 0;
//     return positive;
// }
//
// var enterIt = confirm("Would you like to enter a number?");
//
// if(enterIt){
//     var number = prompt("Enter a number:");
//
//     if(isNaN(number)) {
//         alert("You did not enter a numeric number.");
//     }
//
//     alert("You entered the number : " + number);
//
//     if(isEven){
//         alert("The number you entered is even.");
//     } else {
//         alert("The number you entered is odd.");
//     }
//
//     alert("Your number plus 100 is " + add100());
//
//     if(isPositive) {
//         alert("The number you entered is positive.");
//     } else {
//         alert("The number you entered is negative.");
//     }
// } else{
//     console.log("The user does not want to enter a number.")
//     alert("You did not want to enter a number.")
//     }



/* ########################################################################## */

/**
 * TODO:
 * Create a function named `analyzeColor` that accepts a string that is a color
 * name as input. This function should return a message that related to that
 * color. Only worry about the colors defined above, if the color passed is not
 * one of the ones defined above, return a message that says so
 *
 * Example:
 *  > analyzeColor('blue') // returns "blue is the color of the sky"
 *  > analyzeColor('red') // returns "Strawberries are red"
 *  > analyzeColor('cyan') // returns "I don't know anything about cyan"
 *
 * You should use an if-else-if-else block to return different messages.
 *
 * Test your function by passing various string literals to it and
 * console.logging the function's return value
 */

function analyzeColor(){
    switch(userColor) {
        case "red":
            return ("Cherries are red!");
        case "orange":
            return ("Oranges are orange.");
        case "yellow":
            return ("Bananas are yellow.");
        case "green":
            return ("Green is the color of grass.");
        case "blue":
            return ("Blue is the color of water.");
        case "indigo":
            return ("I don't know much about indigo colored things.");
        case "violet":
            return ("Hmph..Are violets Violet??");
        default:
            return  ("I don't know anything by that color.");
    }

}
// Don't change the next two lines!
// These lines create two variables for you:
// - `colors`: a list of the colors of the rainbow
// - `randomColor`: contains a single random color value from the list (this
//                  will contain a different color everytime the page loads)
var colors = ['red', 'orange', 'yellow', 'green', 'blue', 'indigo', 'violet'];
var randomColor = colors[Math.floor(Math.random() * colors.length)];
/**
 * TODO:
 * Pass the `randomColor` variable to your function and console.log the results.
 * You should see a different message everytime you refresh the page
 */
// console.log(analyzeColor(randomColor));

/**
 * TODO:
 * Refactor your above function to use a switch-case statement
 * ALREADY DID THAT!
 */

/**
 * TODO:
 * Prompt the user for a color when the page loads, and pass the input from the
 * user to your `analyzeColor` function. Alert the return value from your
 * function to show it to the user.
 */
// var userColor = prompt("Enter a color!");
// userColor = userColor.toLowerCase();
// alert("You entered the color " + userColor);
//
// alert(analyzeColor());

/* ########################################################################## */

/**
 * TODO:
 * Suppose there's a promotion in Walmart, each customer is given a randomly
 * generated "lucky number" between 0 and 5. If your lucky number is 0 you have
 * no discount, if your lucky number is 1 you'll get a 10% discount, if it's 2,
 * the discount is 25%, if it's 3, 35%, if it's 4, 50%, and if it's 5 you'll get
 * all for free!.
 *
 * Write a function named `calculateTotal` that accepts a lucky number and total
 * amount, and returns the discounted price.
 *
 * Example:
 * calculateTotal(0, 100) // returns 100
 * calculateTotal(4, 100) // returns 50
 * calculateTotal(5, 100) // returns 0
 *
 * Test your function by passing it various values and checking for the expected
 * return value.
 */



function calculateTotal() {
    switch(luckyNumber) {
        case luckyNumber = "0":
            return (total);
        case "1":
            var finalTotal = total - (total * .10);
            return finalTotal;

        case luckyNumber = "2":
             var finalTotal = total - (total * .25);
            return finalTotal;

        case luckyNumber = "3":
            var finalTotal = total - (total * .35);
            return finalTotal;

        case luckyNumber = "4":
            var finalTotal = total - (total * .5);
            return finalTotal;

        case luckyNumber = "5":
            var finalTotal = total - total;
            return finalTotal;
    }
}

function numberDiscount() {
    if (luckyNumber === 0) {
        return "Sorry, you don't get a discount"
    }
    if (luckyNumber === 1) {
        return "You get a discount of 10%!"
    }
    if (luckyNumber === 2) {
        return "You get a discount of 25%!"
    }
    if (luckyNumber === 3) {
        return "You get a discount of 35%"
    }
    if (luckyNumber === 4) {
        return "You get a discount of 50%"
    }
    if (luckyNumber === 5) {
        return "Lucky you! You're a winner. All of your items are on us!"
    }
}




/**
 * TODO:
 * Uncomment the line below to generate a random number between 0 and 6.
 * Prompt the user for their total bill, then use your `calculateTotal` function
 * and alerts to display to the user what their lucky number was, what their
 * price before the discount was, and what their price after the discount is.
 */
// Generate a random number between 0 and 6
var luckyNumber = Math.floor(Math.random() * 6);

var total = prompt("Enter the total price amount for your items: ");

alert("Your lucky number is " + luckyNumber + " ." + numberDiscount());
alert("Your total before the discount was $" + total + ". Your total price with the discount amount is $" + calculateTotal())




