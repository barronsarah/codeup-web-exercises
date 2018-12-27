"use strict";

// Write a function named wait that accepts a number as a parameter, and returns a promise that resolves after the passed number of milliseconds.
//
const wait = number => {
  return new Promise((resolve, reject) => {
    if (number > 0) {
      setTimeout(function () {
        console.log(`You'll see this after ${number} seconds!`)
      },number *1000);
      resolve();
    } else {
      reject(console.log("This rejected!"));
    }
  });
}
//
// WALTHRU:
// es5 in milliseconds:
// function wait(delay) {
//   return new Promise((resolve, reject) => {
//     setTimeout(resolve, delay)
//   })
// }
// es6 in milliseconds:
// const wait = delay => new Promise((resolve, reject) => setTimeout(resolve, delay));


wait(2);
wait(5);

//---------------SECOND PART OF EXERCISE ---------
// -------- DAY 1 ---------
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

//----second try--day 1--

// const gitHubPromise = fetch("https://api.github.com/users/barronsarah", {headers: {'Authorization': 'token 5e11f8e5e76dc90d282e049066fe5825a8e8e278'}})
//   .then(
//     function(response) {
//       if (response.status !== 200) {
//         console.log('Looks like there was a problem. Status Code: ' +
//           response.status);
//         return;
//       }
//
//       // Examine the text in the response
//       response.json().then(function(data) {
//         console.log(data);
//       });
//     }
//   )
//   .catch(function(err) {
//     console.log('Fetch Error :-S', err);
//   });
//
// const repoPromise = fetch("https://api.github.com/users/barronsarah/repos", {headers: {'Authorization': 'token 5e11f8e5e76dc90d282e049066fe5825a8e8e278'}})
//   .then(
//     (response) => {
//       if (response.status !== 200) {
//         console.log('Looks like there was a problem. Status Code: ' +
//           response.status);
//         return;
//       }
//
//       // Examine the text in the response
//       response.json().then((data)=>
//         console.log(data));
//     }
//   )
//   .catch(function(err) {
//     console.log('Fetch Error :-S', err);
//   });
//
// gitHubPromise.then(repoPromise);

// ----THIRD REDO OF EXERCISE -- DAY 2 ---------

const API_TOKEN = '';
const gitHubUser = 'barronsarah';
const url = `https://api.github.com/users/${gitHubUser}/events`;
const fetchOptions = {
  headers: {'Authorization': `token ${API_TOKEN}`}
}

const checkResponseForErrors = response => {
  console.group('checkResponseForErrors')
  console.log(response)
  console.groupEnd()
  if (response.status !== 200) {
    return Promise.reject(response);
  }
  return Promise.resolve(response);
}

const parseResponseAsJson = response => {
  console.group('parseResponseAsJson')
  console.log(response)
  console.groupEnd()
  const jsonResponse = response.json();
  return jsonResponse;
};


const getFirstElement= data => data[0];



// function getLastCommit(data) {
//   console.group('created_at')
//   console.log(data.created_at)
//   console.groupEnd()
//   return data.created_at;
// }

//this filters for only push events for commits only
function filterNonPushEvents(events){
  const onlyThePushEvents = []
  events.forEach(function(event){
    if(event.type === "PushEvent"){
      onlyThePushEvents.push(event)
    }
  });
  return onlyThePushEvents;
}

function logData(data) {
  console.group('logData')
  console.log(data);
  console.groupEnd();
}


function fetchJson(url) {
  return fetch(url, fetchOptions)
    .then(checkResponseForErrors)
    .then(parseResponseAsJson)
}


function getMostRecentCommitData(username){
  return fetchJson(url)
      .then(getFirstElement)
      // .then(getLastCommit) <-- this only gives back the last event on profile including forking and creating repos/etc..
      .then(filterNonPushEvents) //this filters for only created at
      // .then(events => events.filter(event => event.type === 'PushEvent'))
      .then(pushEvents => pushEvents[0])
      .then(mostRecentPushEvent => mostRecentPushEvent.created_at)
      // .then(logData) <-- we don't need this because this only logs the data and does not return data that can be used later if chaining another .then function.
}

// getMostRecentCommitData('barronsarah');

$('#submit-button').click(function () {
  let username = $('#username').val();
  $('#commit-info').text(`The last commit date of ${username} was ${getMostRecentCommitData(username)}.`)
});




