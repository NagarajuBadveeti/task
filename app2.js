
//Create a custom module and use it in your Express application.
//Create the Custom Module
const express = require('express');
const myModule = require('./myModule2');// Replace './myModule2' with the path to your custom module

const app = express();
const port = 3000;

// Using the custom module in an Express route
app.get('/greet/:name', (req, res) => {
  const name = req.params.name;
  const greeting = myModule.greet(name);
  res.send(greeting);
});

app.get('/add', (req, res) => {
  const { a, b } = req.query;
  const sum = myModule.add(Number(a), Number(b));
  res.send(`Sum: ${sum}`);
});

app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
