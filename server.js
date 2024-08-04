// Load environment variables from .env file
require('dotenv').config();

const express = require('express');
const app = express();

// Access environment variables
const port = process.env.PORT || 3000;
const message = process.env.MESSAGE || 'Hello, World!';

app.get('/', (req, res) => {
  res.send(message);
});

app.listen(port, () => {
  console.log(`Server is running at http://localhost:${port}`);
});
