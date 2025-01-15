const express = require('express');
const cors = require('cors');
const path = require('path');

const app = express();

app.use(cors());

// Serve static files from the React frontend app
const buildPath = path.join(__dirname, 'build'); // Adjust the path if necessary
app.use(express.static(buildPath));

// Serve the React app's index.html for the root route
app.get('/', (req, res) => {
  res.sendFile(path.join(buildPath, 'index.html'));
});

// Catch-all route to handle other requests (for React SPA routing)
app.get('*', (req, res) => {
  res.sendFile(path.join(buildPath, 'index.html'));
});

app.listen(5000, () => {
  console.log('Server is running on http://localhost:5000');
});
