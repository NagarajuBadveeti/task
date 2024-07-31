// Creating a Custom Module
// Importing the functions from another file
// Function to be exported
function greet(name) {
    return `Hello, ${name}!`;
  }
  
  // Another function to be exported
  function add(a, b) {
    return a + b;
  }
  
  // Exporting the functions
  module.exports = {
    greet,
    add
  };
  