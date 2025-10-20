// ##################################################
// What is asyncronous programming?
// ##################################################

// Asyncronous programming is a technique that enables a program to start a potentially
// long-running task and still be able to be responsive to other events while that taks runs,
// rather than having to wait until the task has finished.

// Some functions already potentially take a long time, and therefore are already asyncronous, such as:
// 1. Making HTTP requests using fetch()
// 2. Accessing a user's camera or microphone using getUserMedia()
// 3. Asking a user to select files using showOpenFilePicker()

// Other functions may require implementing your own asynchronous functions

// ##################################################
// What is a Promise?
// ##################################################

// A Promise is a value not necessarily known when the promise is created.
// It allows you to associate handlers with an async action's eventual success or failure.
// This means that instead of returning the value straight away, the async method returns a promise to give the value at some point in the future.

// A Promise is i one of three states:
// 1. pending: initial state, not fulfilled or rejected (result is undefined)
// 2. fulfilled: meaning the operation was completed successfully (result is a value)
// 3. rejected: meaning the operation failed (result is an error object)

// Example of a promise:
let p = new Promise((resolve, reject) => {
  let a = 1 + 1;
  if (a == 2) {
    resolve("Success");
  } else {
    reject("Failed");
  }
}); // define the promise

p.then((message) => {
  console.log("This is in the then: " + message);
}).catch((message) => {
  console.log("This is in the catch: " + message);
}); // use the promise

// then is used as the callback when the promise is successful / resolved
// catch is used as the callback when the promise is failed / rejected

// Another example:
const recordVideoOne = new Promise((resolve, reject) => {
  resolve("Video 1 Recorded");
});

const recordVideoTwo = new Promise((resolve, reject) => {
  resolve("Video 2 Recorded");
});

const recordVideoThree = new Promise((resolve, reject) => {
  resolve("Video 3 Recorded");
});

Promise.all([recordVideoOne, recordVideoTwo, recordVideoThree])
  .then((messages) => {
    console.log(messages);
  })
  .finally(() => {
    console.log("Finished");
  });

// Promise.all is method that takes an array of promises and gives a single callback when all are resolved
// Promise.race is another method that takes an array but instead of waiting for all promises to be resolved, it gives a callback when any promise is resolved or rejected
// finally is a callback that is called whether the promise is a success or a failure

// ##################################################
// What is a the Event Loop?
// ##################################################

// JavaScript is single-threaded, which means it can only do one thing at a time.
// However, it can still handle asynchronous tasks like fetching data, waiting for times, or reacting to user input.
// This is because of the event loop

// The event loop is the mechanism that handles the execution of synchronous and asynchronous code by:
// 1. Running code from the call stack
// 2. Checking the task queue for any pending tasks
// 3. Pushing those tasks onto the call stack when it is empty
// 4. Repeating the process

// Event loop flow:
// 1. Execute all synchronous code first
// 2. Once the call stack is empty, check if there are any callbacks in the task queue
// 3. If there are, move one callback at a time from the queue to the call stack and execute it
// 4. Repeat forever

// Example:
console.log("1");

setTimeout(() => {
  console.log("2");
}, 0);

console.log("3");

// What happens?:
// 1. "1" is logged immediately
// 2. setTimeout(..., 0) schedules a callback to run after at least 0ms
// 3. "3" is logged immediately
// 4. After the main script is done and the stack is clear, the event loop picks the callback from the task queue and logs "2"

// Output:
// 1
// 3
// 2

// Despite setTimeout being set to 0 milliseconds, it doesnt run immediately because JS finishes the synchronous code first

// Another example, using promises:
console.log("A");

Promise.resolve().then(() => {
  console.log("B");
});

console.log("C");

// Output:
// A
// C
// B
