
    "use strict";

    /**
     * TODO:
     * Create an object with firstName and lastName properties that are strings
     * with your first and last name. Store this object in a variable named
     * `person`.
     *
     * Example:
     *  > console.log(person.firstName) // "Rick"
     *  > console.log(person.lastName) // "Sanchez"
     */
    var person = {
        // key: value ---> keys do not need to be entered as strings; JS already converts
        // keys to strings so quotes are optional
        "firstName": "Sarah",
        "lastName": "Barron"
    };
    console.log(person.firstName);

    /**
     * TODO:
     * Add a sayHello method to the person object that returns a greeting using
     * the firstName and lastName properties.
     * console.log the returned message to check your work
     *
     * Example
     * > console.log(person.sayHello()) // "Hello from Rick Sanchez!"
     */
person.sayHello = function(){
    return "A big hello from " + person.firstName + ' '+  person.lastName + " !"
};
console.log(person.sayHello());

    /** TODO:
     * HEB has an offer for the shoppers that buy products amounting to
     * more than $200. If a shopper spends more than $200, they get a 12%
     * discount. Write a JS program, using conditionals, that logs to the
     * browser, how much Ryan, Cameron and George need to pay. We know that
     * Cameron bought $180, Ryan $250 and George $320. Your program will have to
     * display a line with the name of the person, the amount before the
     * discount, the discount, if any, and the amount after the discount.
     *
     * Uncomment the lines below to create an array of objects where each object
     * represents one shopper. Use a foreach loop to iterate through the array,
     * and console.log the relevant messages for each person
     */

  //----- for each person i need: ------
        // -name of person
        // -amt before discount
        // -discount amount
        // -amount after discount
        // -purchases above 200 get a 12% discount


    var shoppers = [
        {name: 'Cameron', amount: 180},
        {name: 'Ryan', amount: 250},
        {name: 'George', amount: 320}
    ];

    //--REWORKED CODE TO WORK CORRECTLY----

    shoppers.forEach(function(shopper){
    {
        if (shopper.amount > 200) {
            console.log(shopper.name + ". Amount before discount: $" + shopper.amount + " your discount amount is 12%. Your amount after discount is: " + (shopper.amount - (shopper.amount * .12)) + "!")
        } else {
            console.log(shopper.name + ". Does not qualify for a discount. The amount to pay is $" + shopper.amount)
            }
        }
    });

    // }
    // //----my code, before completing ----
    // // shoppers.discountAmt = function(shopper){
    // //     shoppers[0].name.forEach(function(){
    // //         if(shoppers.amount > 200) {
    // //             var total = +shoppers.amount - (shoppers.amount * .12);
    // //             return total;
    // //         } else {
    // //
    // //         }
    // //     })
    // // };
    // console.log(shopper.name + 'the amount of the purchase is ' + shopper.amount + " . The amount after your discount (if applicable) " + shoppers.discountAmt());








    /** TODO:
     * Create an array of objects that represent books and store it in a
     * variable named `books`. Each object should have a title and an author
     * property. The author property should be an object with properties
     * `firstName` and `lastName`. Be creative and add at least 5 books to the
     * array
     *
     * Example:
     * > console.log(books[0].title) // "The Salmon of Doubt"
     * > console.log(books[0].author.firstName) // "Douglas"
     * > console.log(books[0].author.lastName) // "Adams"
     */
var books = [
        {   id:1,
            title: "Girl Wash Your Face",
            author: {
                firstName: "Rachel",
                lastName: "Hollis"
            },
            available: true,
            keywords: [
                "Motivational",
                "Self Help",
                "Christian Literature"
                ]
        },
        {
            id:2,
            title: "To Kill a Mockingbird",
            author: {
                firstName: "Harper",
                lastName: "Lee"
            },
            available: true,
            keywords: [
                "Drama",
                "Coming Of Age",
                "Novel",
                "Fiction"
                ]
        },
        {
            id: 3,
            title: "Harry Potter",
            author: {
                firstName: "J K",
                lastName: "Rowling"
            },
            available: true,
            keywords: [
                "Fiction",
                "Novel",
                "Young Adult Fiction",
                "Fantasy Fiction",
                "Mystery",
                "Thriller"
                ]
        },
        {
            id: 4,
            title: "The Great Gatsby",
            author: {
                firstName: "F Scott",
                lastName: "Fitzgerald"
            },
            available: true,
            keywords: [
                "Fiction",
                "Drama",
                "Thriller",
                "Historical Fiction",
                "Period Novel"
                ]
        },
        {
            id:5,
            title: "Gone with the Wind",
            author: {
                firstName: "Margaret",
                lastName: "Mitchell"
            },
            available: true,
            keywords: [
                "Drama",
                "Novel",
                "Historical Fiction",
                "Period Novel"
                ]
        }
    ];
    /**
     * TODO:
     * Loop through the books array and output the following information about
     * each book:
     * - the book number (use the index of the book in the array)
     * - the book title
     * - author's full name (first name + last name)
     *
     * Example Console Output:
     *
     *      Book # 1
     *      Title: The Salmon of Doubt
     *      Author: Douglas Adams
     *      ---
     *      Book # 2
     *      Title: Walkaway
     *      Author: Cory Doctorow
     *      ---
     *      Book # 3
     *      Title: A Brief History of Time
     *      Author: Stephen Hawking
     *      ---
     *      ...
     */
// books.forEach(function(book, index){
//     console.log("Book # " + [index +1]);
//     console.log("Title: " + book.title);
//     console.log("Author: " + book.author.firstName + book.author.lastName);
//     console.log("---");
//     });

    /**
     * Bonus:
     * - Create a function named `createBook` that accepts a title and author
     *   name and returns a book object with the properties described
     *   previously. Refactor your code that creates the books array to instead
     *   use your function.
     * - Create a function named `showBookInfo` that accepts a book object and
     *   outputs the information described above. Refactor your loop to use your
     *   `showBookInfo` function.
     */
books.createBook = function(bookTitle, authorFirstName, authorLastName){
    return books.push({title: bookTitle, author: {firstName: authorFirstName, lastName: authorLastName}})
};

// console.log(books.createBook("Girl Wash Your Face","Rachel","Hollis"));
// console.log(books.createBook("To Kill A Mockingbird", "Harper", "Lee"));
// console.log(books.createBook("Harry Potter", "JK", "Rowling"));
// console.log(books.createBook("The Great Gatsby", "F Scott", "Fitzgerald"));
// console.log(books.createBook("Gone with the Wind", "Margaret", "Mitchell"));

var showBookInfo = function(books){
    for(var i = 0; i < books.length; i++) {
        // books.forEach(function(book){
        //     console.log("Title: " + book.title + ". Author: " + book.author.firstName + " " + book.author.lastName);
        // })
        console.log("Book # "+ [i+ 1] + ". Title: " + books[i].title + ". Author: " + books[i].author.firstName + " " + books[i].author.lastName);
    }
};

showBookInfo(books);

    // BONUS 2 (expanding on the books object exercise):
    //     Add a property "keywords" that contains an array of possible genres the book may be categorized by
    //     Add a boolean property "available" and set it to true
    //     Add a dateAvailable property that has a string of the date/time when the book will be available
    //     Add a method lend() that...
    //         - changes the available property to false if it is not already false
    //         - sets the dateAvailable to a date exactly two weeks from when the lend() method is called
    //         (to do this, research the JS Date object and use methods from it in your code)
    //     Add a method receive() that...
    //         - changes the available property to true
    //         - changes the dateAvailable property to the string "now"


books.dateAvailable = "December 15 2018, 1pm";
books.lend = function(index){
    if(books[index].available === true){
        var twoWeek = (books[index].date.available = new Date(Date.now() + 12096e5));
        var available = (books[index].available = false);
        return [twoWeek, available];
    }
};
books.receive = function(index){
    var available = (books[index].available = true);
    var dateAvail = (books[index].available = "now");
    return [available, dateAvail];
};