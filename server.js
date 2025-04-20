// server.js

const express = require('express');
const app = express();
const PORT = process.env.PORT || 5000;

// Middleware (optional)
app.use(express.json());

// Routes
app.get('/', (req, res) => {
  res.send('Server is running!');
});

// Start server
app.listen(PORT, () => {
  console.log(`Server is listening on port ${PORT}`);
  console.log("Hello, World!");
  console.log("This is a simple Express server.");
  
});
