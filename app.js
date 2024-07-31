//Module creation: Learn how to create and export modules in Node.js.
// Importing the custom module
import { greet, add } from './myModule.js';

// Using the exported functions
const greeting = greet('Alice');
const sum = add(5, 3);

console.log(greeting); // Output: Hello, Alice!
console.log(sum);      // Output: 8



 