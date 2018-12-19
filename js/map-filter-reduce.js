"use strict";
const users = [
    {
        id: 1,
        name: 'ryan',
        email: 'ryan@codeup.com',
        languages: ['clojure', 'javascript'],
        yearsOfExperience: 5
    },
    {
        id: 2,
        name: 'luis',
        email: 'luis@codeup.com',
        languages: ['java', 'scala', 'php'],
        yearsOfExperience: 6
    },
    {
        id: 3,
        name: 'zach',
        email: 'zach@codeup.com',
        languages: ['javascript', 'bash'],
        yearsOfExperience: 7
    },
    {
        id: 4,
        name: 'fernando',
        email: 'fernando@codeup.com',
        languages: ['java', 'php', 'sql'],
        yearsOfExperience: 8
    },
    {
        id: 5,
        name: 'justin',
        email: 'justin@codeup.com',
        languages: ['html', 'css', 'javascript', 'php'],
        yearsOfExperience: 9
    }
];

//Use .filter to create an array of user objects where each user object has at least 3 languages in the languages array.

const moreLanguages = users.filter(function (user) {
    if (user.languages.length >= 3)
        return user;
});
//ANOTHER WAY TO WRITE ABOVE SOLUTION USING ES6:
// const moreLanguages = users.filter((user) => user.langues.length >=3);

console.log(moreLanguages);

// Use .map to create an array of strings where each element is a user's email address
const emails = users.map(function(user){
     return user.email;
 });

console.log(emails);
// Use reduce to get the total years of experience from the list of users. Once you get the total of years you can use the result to calculate the average.

const experience = users.reduce((total, user) => {
    return total + user.yearsOfExperience/ users.length;

},0);

console.log(experience);

// Use reduce to get the longest email from the list of users.

const longestEmail = users.reduce((longestEmail, user) => {
    // console.log(longestEmail);
    // console.log(user);
       if(longestEmail.length < user.email.length){
           return user.email;
       } return longestEmail;
},"");
console.log(longestEmail);

// Use reduce to get the list of user's names in a single string. Example: Your instructors are: ryan, luis, zach, fernando, justin.

const instructors = users.reduce((stringMessage, user, index) => {
    console
    if(index === users.length-1){
        return `${stringMessage}${user.name}.`
      }
     return `${stringMessage}${user.name}, `

},"Your instructors are: ");

//BONUS EXERCISE--

// Use reduce to get the unique list of languages from the list of users.
const languagesList = users.map((user, index, array) => {
    return user.languages;
});
console.log(languagesList);

// languagesList.reduce(function (languages, languageList) {
// return languages;
// }, "");





