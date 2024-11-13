const express = require('express');

const app = express();

app.get('/', (req, res) => {
  res.send('Hello World');
});

app.listen(3000, () => {
  console.log('Server running on http://localhost:3000');
});

app.use((req, res, next) => {
  console.log(`${req.method} ${req.url}`);
  next();
});

const customMiddleware = (req, res, next) => {
  console.log('Custom Middleware');
  next();
};

app.use(customMiddleware);

//application level middleware
app.use((req, res, next) => {
  console.log('Application-level middleware');
  next();
});

// router level middleware

const router = express.Router();

router.use((req, res, next) => {
  console.log('Router-level middleware');
  next();
});

app.use('/api', router);

//7
app.get('/user/:id', (req, res) => {
  console.log(req.params.id); // Extract route parameter
  res.send('User ID: ' + req.params.id);
});

//8
app.get('/search', (req, res) => {
  const searchTerm = req.query.term;
  res.send(`Search Term: ${searchTerm}`);
});

//9
app.get('/user', (req, res) => {
  res.send('GET request to /user');
});

app.post('/user', (req, res) => {
  res.send('POST request to /user');
});

app.put('/user', (req, res) => {
  res.send('PUT request to /user');
});

app.delete('/user', (req, res) => {
  res.send('DELETE request to /user');
});


//10
app.get('/user/:id', (req, res) => {
  const userId = req.params.id;
  res.send(`User ID: ${userId}`);
});
