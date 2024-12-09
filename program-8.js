// Write a JavaScript function that fetches data from an API and cancels the request if it takes longer than a specified time.


'use strict';
// const api = 'https://jsonplaceholder.typicode.com/posts/1';
const api = `https://restcountries.com/v3.1/name/USA`;

const fetchData = async function (url, timeout) {
  const controller = new AbortController(); // to abort async function
  const signal = controller.signal; // its boolean value true / false
  // console.log(controller, signal);

  const timeoutId = setTimeout(() => {
    controller.abort();
  }, timeout);

  try {
    const res = await fetch(url, { signal });
    if (!res.ok) {
      throw new Error(`Failed to fetch data ${res.status}`);
    }
    clearTimeout(timeoutId);
    const data = await res.json();
    return data;
  }
  catch (err) {
    if (err.name === `AbortError`) {
      console.log(`Request Timed Out !`);
    }
    else
      throw new Error(`Fetch error ${err.message}`)
  }
}

fetchData(api, 1)
  .then(data => {
    console.log(`Fetched data :`, data);
  })
  .catch(err => {
    console.error(`Failed to fetch data, ${err.message}`)
  })