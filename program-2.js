// Write a JavaScript a function that makes an HTTP GET request and returns a Promise that resolves with the response data.


// used this free api for this openweathermap.org

'use strict';

const getWeather = function (lat, long) {
  return new Promise((resolve, reject) => {
    const request = new XMLHttpRequest();
    request.open('GET', `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${long}&appid=89dd838d793402c73996acb7486c49b1`);

    request.onload = function () {
      if (request.status === 200) {
        resolve(JSON.parse(request.responseText)); // Parse the JSON response
      } else {
        reject(new Error(`Cannot get data! Failed with status ${request.status}`));
      }
    };

    request.onerror = function () {
      reject(new Error(`Please check your network connection`));
    };

    request.send();
  });
};


getWeather(20.33, 30.2)
  .then(res => {
    // console.log(res);
    console.log(`Weather in ${res.name}: ${res.weather[0].description}`);
  })
  .catch(err => console.error(err.message));
