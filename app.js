//Importing and Using the Custom Module
// Importing the custom module
const myModule = require('./myModule');

// Using the exported functions
const greeting = myModule.greet('Alice');
const sum = myModule.add(5, 3);

console.log(greeting); // Output: Hello, Alice!
console.log(sum);      // Output: 8
