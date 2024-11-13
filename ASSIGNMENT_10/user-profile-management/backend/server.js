const express = require('express');
const bodyParser = require('body-parser');
const userRoutes = require('./routes/user');
const db = require('./config/db');
const dotenv = require('dotenv');
const cors = require('cors');

dotenv.config();

const corsOptions = {
  origin: 'http://localhost:3000',
  credentials: true,
};

const app = express();
app.use(cors(corsOptions));
app.use(bodyParser.json());
app.use('/api', userRoutes);

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});