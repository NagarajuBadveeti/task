const express = require('express');
const { register, login, authenticateToken } = require('./auth');
const { add, subtract, multiply, divide } = require('./mathOperations');

const app = express();
const PORT = 3007;

// Middleware for parsing JSON bodies
app.use(express.json());

// Register Route
app.post('/register', async (req, res) => {
  try {
    const { username, password } = req.body;
    const user = await register(username, password);
    res.status(201).json({ message: `User ${user.username} registered successfully` });
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
});

// Login Route
app.post('/login', async (req, res) => {
  try {
    const { username, password } = req.body;
    const token = await login(username, password);
    res.status(200).json({ auth: true, token });
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
});

// Protected Route for Addition
app.get('/add', authenticateToken, (req, res) => {
  const { a, b } = req.query;
  const numA = parseFloat(a);
  const numB = parseFloat(b);

  if (isNaN(numA) || isNaN(numB)) {
    return res.status(400).json({ error: 'Invalid numbers provided' });
  }

  const result = add(numA, numB);
  res.json({ result });
});

// Middleware for handling 404 errors
app.use((req, res) => {
  res.status(404).json({ error: 'Page Not Found' });
});

// Middleware for handling errors
app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).json({ error: 'Something went wrong!' });
});

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
