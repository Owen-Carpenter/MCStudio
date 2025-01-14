const express = require('express');
const cors = require('cors');
const path = require('path');

const app = express();

app.use(cors());

// Serve static files from the React app's build folder
app.use(express.static(path.join(__dirname, 'dist')));

// For any other routes, serve the index.html from the build folder
app.get("*", (req, res) => {
  res.sendFile(path.join(__dirname, 'dist', 'index.html'));
});

const PORT = 5000;

app.listen(PORT, () => {
  console.log(`Server is listening on port ${PORT}`);
});
