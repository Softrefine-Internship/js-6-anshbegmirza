// Write a JavaScript program to implement a function that executes a given function repeatedly at a fixed interval using 'setInterval()'.

'use strict';

const repeatAfterTseconds = function (callbackFunc, secs) {
  setInterval(callbackFunc, secs);
}

const printName = function () {
  console.log('JavaScript');
};

repeatAfterTseconds(printName, 1000);