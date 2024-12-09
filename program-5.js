// Write a JavaScript function that fetches data from multiple APIs concurrently and returns a combined result using Promises and 'Promise.all()'.

'use strict';

const urlArr = [
  `https://jsonplaceholder.typicode.com/posts/1`,
  `https://jsonplaceholder.typicode.com/posts/2`,
  `https://jsonplaceholder.typicode.com/posts/3`,
];


const fetchData = async function (urls) {
  try {
    const res = await Promise.all(urls.map(
      url => fetch(url)
        .then(res => {
          if (!res.ok) {
            console.log(`Failed to fetch from ${url} with error ${res.status}`);
          }
          return res.json();
        })
    ))
    return res;
  }
  catch (err) {
    console.error(`Error while fetching data ${err.message}`);
    throw err;
  }
};

fetchData(urlArr).then(data => {
  console.log(`Combined data :`, data);
}).catch(err => {
  console.err(`Error while getting data from api. ${err.message}`);
})