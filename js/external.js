
"use strict";

console.log ("Hello from external JavaScript");

alert("Welcome to my Website!");

var favColor = prompt("What is your favorite color?");

alert("Wow! " + favColor + " is my favorite color too!");


// You have rented some movies for your kids: The little mermaid (for 3 days), Brother Bear (for 5 days, they love it), and Hercules (1 day, you don't know yet if they're going to like it). If price for a movie per day is $3, how much will you have to pay?
//     Suppose you're working as a contractor for 3 companies: Google, Amazon and Facebook, they pay you a different rate per hour. Google pays $400, Amazon $380, and Facebook $350. How much will you receive in payment for this week? You worked 10 hours for Facebook, 6 hours for Google and 4 hours for Amazon.
// A student can be enrolled to a class only if the class is not full and the class schedule does not conflict with her current schedule.
//     A product offer can be applied only if people buys more than 2 items, and the offer has not expired. Premium members do not need to buy a specific amount of products.//


var littleMermaidDays = prompt("How long are you wanting to rent The Little Mermaid?");

alert("You're renting The Little Mermaid for " + littleMermaidDays + " days.");

var brotherBearDays = prompt("How long are you wanting to rent Brother Bear for?");

alert("You're renting Brother Bear for " + brotherBearDays + " days.");

var herculesDays = prompt("How long are you wanting to rent Brother Bear for?");

alert("You're renting Hercules for " + herculesDays + " days.");

var total = 3 * (littleMermaidDays + brotherBearDays + herculesDays);

alert("Each movie costs $3 a day to rent. You're renting 3 movies for a total of $" + total + ". Is this right?");



