"use strict";

function isOdd(number) {
    var even =  number % 2 === 0;
        return even;
}
function identity(input) {
    return input;
}
function isFive(input) {
    if(number === 5){
        return true;
    }else {
        return false;
    }
}
function addFive(number){
    var fiveTotal = number + 5;
    return fiveTotal;
}
function isMultipleOfFive(number){
    var multiplefive = number * 5;
    return multiplefive;
}
function isThree(number){
    if(number === 3){
        return true;
    } else {
        return false;
    }
}
function multipleOfThree(number) {
    var multiThree = number * 3;
    return multiThree;
}
function isMultipleOfThreeandFive(number){
    return multipleOfThree(), isMultipleOfFive();
    }
function isMultipleOf(number, n){
    if(parseInt(number) % parseInt(n) === 0){
        return true;
    } else false;
}
/// isVowel function comes before this
function isVowel(input){
    var vletter = input.toString().toLowerCase();
    if(vletter === "a" || "e" || "i" || "o" || "u"){
        return true
    } else {
        return false
    }
}


function isCapital(input){
    if(input.typeof() = "string"){
        return input.toUpperCase();
    } else{
        return "This is not a string";
    }

}



// start of simple drills
function returnTwo(){
    return 2;
}
function sayHowdy(){
    console.log("Howdy!");
}
function returnName(){
    var name = "Sarah";
    return name;
}
function sayString(){
    return input.toString();
}




// the plus one at the end tells the function to INCLUDE the max number
function randomNumber(min, max){
    return Math.floor(Math.random() * (max - min + 1) ) + min;
}
function first(string){
    return string.charAt(0);
}
function last(string){
    return string.charAt(string.length-1);
}
function rest(string){
    return string.substring(1, string.length-1);
}
function rest2(string){
    return string.substring(0);
}
function reverse(string){
    return string.split("").reverse().join("");
}
function isNumeric(input){
    if(Number.isInteger(input)){
        return true;
    } else {
        return false;
    }
}
function count(string){
    return string.length;
}
function add(a, b){
    var total = a + b;
    return total;
}