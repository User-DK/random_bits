const express = require('express');
const app = express();

app.use(express.json()); // For parsing application/json

app.get('/', (req, res) => {
  res.send('Received GET request');
});

app.post('/', (req, res) => {
  res.send('Received POST request with data: ' + JSON.stringify(req.body));
});

app.listen(3000, () => {
  console.log('Server running at http://localhost:3000/');
});
