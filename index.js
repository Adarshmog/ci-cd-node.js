const express = require('express');
const path = require('path');
const app = express();
const port = process.env.PORT || 3000;

// Middleware for static files
app.use(express.static(path.join(__dirname, 'public')));

// Routes
app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'views/index.html'));
});

app.get('/about', (req, res) => {
  res.sendFile(path.join(__dirname, 'views/about.html'));
});

app.get('/time', (req, res) => {
  const now = new Date();
  res.json({
    message: "Current server time",
    datetime: now.toISOString()
  });
});

// Start server
app.listen(port, () => {
  console.log(`🚀 App running at http://localhost:${port}`);
});

