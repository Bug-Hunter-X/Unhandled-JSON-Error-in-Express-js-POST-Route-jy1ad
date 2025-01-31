const express = require('express');
const app = express();
app.use(express.json({ strict: true })); // Enforce valid JSON
app.post('/users', (req, res, next) => {
  try {
    const user = req.body;
    // Validate user data
    if (!user.name || !user.email) {
      throw new Error('Name and email are required');
    }
    // ... further processing ...
    res.status(201).send(user);
  } catch (error) {
    next(error); // Pass the error to the error handler
  }
});

// Error handling middleware
app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).json({ error: 'Internal server error' });
});
app.listen(3000, () => console.log('Server listening on port 3000'));