(function(){
    "use strict";

    /**
     * TODO:
     * Create an array of 4 people's names and store it in a variable called
     * 'names'.
     */
var names= ["Lori", "Nicole", "Gustavo", "Ashley"];
    /**
     * TODO:
     * Create a log statement that will log the number of elements in the names
     * array.
     */
console.log(names.length);
    /**
     * TODO:
     * Create log statements that will print each of the names individually by
     * accessing each element's index.
     */
    console.log(names[0]);
    console.log(names[1]);
    console.log(names[2]);
    console.log(names[3]);

    /**
     * TODO:
     * Write some code that uses a for loop to log every item in the names
     * array.
     */
for(var i =0; i < names.length; i++){
    console.log("The name at index " + i + " is " + names[i]);
}
    /**
     * TODO:
     * Refactor your above code to use a `forEach` loop
     */
names.forEach(function(name){
    console.log('Here is a name: ' + name);
})
    /**
     * TODO:
     * Create the following three functions, each will accept an array and
     * return an an element from it
     * - first: returns the first item in the array
     * - second: returns the second item in the array
     * - last: returns the last item in the array
     *
     * Example:
     *  > first([1, 2, 3, 4, 5]) // returns 1
     *  > second([1, 2, 3, 4, 5]) // returns 2
     *  > last([1, 2, 3, 4, 5]) // return 5
     */
    var foods = ["pizza", "burgers", "tacos", "salad"];
    function first(array){
        return(array[0]);
    }
    console.log(first(foods));

    function second(array){
        return(array[1]);
    }

    console.log(second(foods));

    function last(array){
        return(array[array.length -1]);
    }
    console.log(last(foods));

    // -----BONUS CHALLENGES-----
//Exercise 1:
// Write a function named oneHundred() that returns an array with integers starting at 1 and ending at 100
var newArray= [];
function oneHundred(){
    for(var i =1; i <=100; i++){
       newArray.push(i);
    }
    console.log(newArray);
}

//-walkthru answer--
//     function oneHundred(){
//         for(var i =1; i <=100; i++){
//             array[i] = i+1;
//         }
//         return array;
//     }

oneHundred();

//Exercise 2:
// Write a function named reverse() that takes in an array and returns a reversed copy of the provided array. This function should not alter the orignal array sent into it.
 var shoes = ['vans', 'heels', 'boots', 'flats', 'chanclas', 'platforms'];

 var reverseArray= [];
function reverse(){
    for(var i = shoes.length; i > 0; i--){
       reverseArray.push(shoes[i-1]);
        // console.log(shoes[i-1]); <--- this only returns each element of the array separately on each line
    } return(reverseArray);

    //--WALKTHRU ANSWER--
//     function reverse(input){
//         var output = [];
//         for(var i = input.length -1; i>= 0; i--){
//             output.push(input[i]);
//         }
//     } return output;
}
console.log(reverse());
console.log(shoes.toString());

    // Exercise 3:
    // Write a function named sumAll() that takes in an array of numbers and returns the sum of all the numbers. Use sumAll() on oneHundred() to get the sum of all numbers 1 + 2 + 3... + 100
var numbers = [2, 3, 4];
// ---MY CODE---
//  var total=0;
// function sumAll(array){
//     for(var i = 0; i >= array.length; i+2){
//         var total = total + total[i];
//     } console.log(total);
// }
// ----walkthrough answer--
function sumAll(number){
    var sum =0;
    number.forEach(function(number){
        sum= sum + number;
    });
    return sum;
}
console.log(sumAll(numbers));

//Write a function named multiplyAll() that takes in an array of numbers and returns the product of all numbers. Use multiplyAll on oneOnehundred() to get the product of 1*2*3*...100
// --WALKTHROUGH ANSWER--
function multiplyAll(numbers){
    var product = 1;
    numbers.forEach(function(number){
        product *= number;
    });
    return product;
}

console.log(multiplyAll(numbers));

})();

