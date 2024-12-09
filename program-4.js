// Write a JavaScript program that implements a function that performs a series of asynchronous operations in sequence using 'async/await'.

// note: here async operations refers to async functions. your task is to write multiple async functions using promises and call them in sequence in a function using async/await


'use strict';
const asyncOperation1 = async () => {
  return new Promise((resolve) => {
    setTimeout(() => {
      console.log("Async Operation 1 completed");
      resolve(`Result 1`);
    }, 1000);
  });
};

const asyncOperation2 = async (input) => {
  return new Promise((resolve) => {
    setTimeout(() => {
      console.log(`Operation 2 completed with input ${input} !`);
      resolve("Result 2");
    }, 1000);
  })
};

const asyncOperation3 = (input) => {
  return new Promise((resolve) => {
    setTimeout(() => {
      console.log(`Operation 3 completed with input ${input} !`);
      resolve("Result 3");
    }, 1000);
  })
};

const executeAsyncFunc = async () => {
  try {
    const result1 = await asyncOperation1();
    const result2 = await asyncOperation2(result1);
    const result3 = await asyncOperation3(result2);
    console.log(`All operations completed`);
    console.log(`Final result:`, result3);
  }
  catch (err) {
    console.error(`Can not complete the operations, ${err.message}`)
  }
};

executeAsyncFunc();


