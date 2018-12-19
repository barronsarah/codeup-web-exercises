"use strict";

// Write a function named wait that accepts a number as a parameter, and returns a promise that resolves after the passed number of milliseconds.

function wait(number){
  return new Promise((resolve, reject) => {
    if (number > 0) {
      setTimeout(function () {
        console.log("You'll see this after " + number + " seconds!")
      },number *1000);
      resolve();
    } else {
      reject(console.log("This rejected!"));
    }
  });
}

wait(2);
wait(5);

//---------------SECOND PART OF EXERCISE ---------

// const gitHubPromise = fetch("https://api.github.com/users", {headers: {'Authorization': 'token 5e11f8e5e76dc90d282e049066fe5825a8e8e278'}});
//
// const userCommits = new Promise((resolve, reject) => {
//   if () {
//     console.log("Success");
//    resolve();
//   } else {
//     reject(console.log("This rejected."));
//   }
// });
//
// gitHubPromise.then(response => console.log(response));
// gitHubPromise.catch(error => console.error(error));

//----second try----

const gitHubPromise = fetch("https://api.github.com/users/barronsarah", {headers: {'Authorization': 'token 5e11f8e5e76dc90d282e049066fe5825a8e8e278'}})
  .then(
    function(response) {
      if (response.status !== 200) {
        console.log('Looks like there was a problem. Status Code: ' +
          response.status);
        return;
      }

      // Examine the text in the response
      response.json().then(function(data) {
        console.log(data);
      });
    }
  )
  .catch(function(err) {
    console.log('Fetch Error :-S', err);
  });

const repoPromise = fetch("https://api.github.com/users/barronsarah/repos", {headers: {'Authorization': 'token 5e11f8e5e76dc90d282e049066fe5825a8e8e278'}})
  .then(
    (response) => {
      if (response.status !== 200) {
        console.log('Looks like there was a problem. Status Code: ' +
          response.status);
        return;
      }

      // Examine the text in the response
      const repoData = response.json().then((repoData)=> {
        const
        console.log(repoData);
      });
    }
  )
  .catch(function(err) {
    console.log('Fetch Error :-S', err);
  });

// gitHubPromise.then(repoPromise).then(

