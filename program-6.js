// Write a JavaScript function that fetches data from an API and retries the request a specified number of times if it fails.


'use strict';

// const api = 'https://jsonplaceholder.typicode.com/posts/1';
const api = `https://restcountries.com/v3.1/name/USA`;

const fetchData = async function (url, retries = 3, delay = 1000) {
  return new Promise((resolve, reject) => {
    let attempts = 0;

    const attemptFetch = () => {
      attempts++;
      fetch(url)
        .then(res => {
          if (!res.ok) {
            throw new Error(`Failed to retrieve data with status ${res.status}`);
          }
          return res.json();
        })
        .then(resolve)
        .catch(err => {
          if (attempts < retries) {
            console.log(`Attempts ${attempts}, failed ! ${err.message}`);
            console.log(`Retrying in ${delay}ms`);
          }
          else {
            console.log(`All attempts failed !`);
            reject(err);
          }
        })
    };
    attemptFetch();
  })
};

fetchData(api, 3, 2000)
  .then(data => {
    console.log(`Retrieved data :`, data);
  })
  .catch(error => {
    console.error(`Failed to fetch data ${error.message}`)
  })