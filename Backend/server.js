// Importing required modules
const express = require("express");

// Creating an Express application
const app = express();

// Define a route
app.get("/", (req, res) => {
  res.send("Hello, this is your Express server!");
});

// Set up the server to listen on a specific port (e.g., 3000)
const port = 3000;
app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
