const express = require('express');
const app = express();

app.get('/', (req, res) => {
  res.send('Welcome to the Home Page');
});

app.get('/about', (req, res) => {
  res.send('This is the About Page');
});

app.get('/contact', (req, res) => {
  res.send('Contact us at: email@example.com');
});

app.get('/users/:id', (req, res) => {
  res.send(`User ID: ${req.params.id}`);
});

app.get('/products/:category/:productId', (req, res) => {
  res.json({ category: req.params.category, productId: req.params.productId });
});

app.use((req, res) => {
  res.status(404).send('Page Not Found');
});

app.listen(3000, () => {
  console.log('Server running on http://localhost:3000');
});
