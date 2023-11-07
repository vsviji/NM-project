const express = require('express');
const cors = require('cors');

const app = express();
const port = 3000;

// Middleware to parse JSON requests
app.use(express.json());

// Enable CORS for your Vue app's origin
app.use(cors({
  origin: 'http://localhost:5173',
}));

// Handle POST request to '/api/wishes'
app.post('/api/wishes', (req, res) => {
  const { name, wish } = req.body;
  // Save the wish to the database or perform any other desired actions
  console.log('Received a wish:', name, wish);
  res.json({ message: 'Wish saved successfully' });
});

// Start the server
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
