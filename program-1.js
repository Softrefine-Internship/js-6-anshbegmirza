// Write a JavaScript function that takes a callback and invokes it after a delay of 2 second.

'use-strict';

const delayedInvoke = function (callbackFunc) {
  setTimeout(callbackFunc, 2000);
};

const getCoords = function () {
  if (navigator.geolocation)
    navigator.geolocation.getCurrentPosition(function (position) {
      console.log(position.coords);

      console.log(`Your location latitude :${position.coords.latitude} and longitude : ${position.coords.longitude}`);

    })
  else {
    console.log(`Please allow your location`);
  }
};

delayedInvoke(getCoords);