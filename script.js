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
