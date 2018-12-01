// Output should include:
// - total number of employees
// - total number of units sold
// - avg units sold per employee
// - Then output should share employee production, ordered from highest to lowest # of units
// * Units   |     Full Name       |   Employee Number
// * 5             Bob Boberson        2


var reportContents = "Monthly Sales Report\nDate: 03-17-2015\nOffice: Codeup\n" +
    " ===================================================\n" +
    "Employee Number, First Name, Last Name, Sales Units\n" +
    "***************************************************\n\n" +
    "1, Jane, Janeway, 3\n" +
    "3, Tricia, Triciason, 5\n" +
    "4, Jeannette, Jeanson, 4\n" +
    "5, Charles Emmerson III, Winchester, 2\n" +
    "6, Chet, Chedderson, 8\n" +
    "7, Chaiam, Chaiamson, 12\n" +
    "8, Dale, Dalesinger, 1\n" +
    "9, Zig, Ziglar, 50\n" +
    "10, Henry, Kissinger, 1\n" +
    "11, Arthur Herbert, Fonzarelli, 23\n" +
    "12, Betty, Boop, 67";

var fileArray = reportContents.split('\n');



function numEmployees (array){
    var finalNum = 0;
    array.forEach(function(element){
        finalNum = array.length - 7;
    });
    return finalNum;
}
var numOfEmployees = numEmployees(fileArray);
console.log(fileArray);

console.log("Number of employees: " + numOfEmployees);

//---ALL MY WORK-----//

function empArray(array){
    var newArray= array.slice(7);
    //--below did not work---
    // var newArray = [];
    // for(var i = 0; i < array.length; i++){
    //     newArray += array[i + 7].slice();
    // }
    return newArray;
}
 var empsOnlyArray = empArray(fileArray);
console.log(empsOnlyArray);

//----AZIZ'S ANSWER MODIFIED--- ARRAY IN AN ARRAY ANSWER!!! ----
var empSplitArray = [];
for (var i =0; i < empsOnlyArray.length; i++){
    empSplitArray[i] = empsOnlyArray[i].split(",");
}
console.log(empSplitArray);


// ---------------total number of units sold----------------


// var totalUnitsSold = 0;
// for(var i = 0; i < empSplitArray.length; i++){
//     var toNumber = parseFloat([3]);
//     totalUnitsSold += empSplitArray[i[toNumber]];
// }

var unitsSold = 0;

empSplitArray.forEach(function(element){
    unitsSold += parseFloat(element[3]);
});

console.log(unitsSold);

//--------------- avg units sold per employee -----------------

console.log("Average units sold is: " + (unitsSold/numOfEmployees));

//--------employee production, listed highest to lowest ----------

function sortHighest(a,b){
    return b[3]- a[3];
}
console.log(empSplitArray.sort(sortHighest));








