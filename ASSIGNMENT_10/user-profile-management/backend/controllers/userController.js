const db = require('../config/db');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');

const registerUser = (req, res) => {
  const { name, email, phone, address, password } = req.body;
  const hashedPassword = bcrypt.hashSync(password, 8);

  db.query('INSERT INTO users (name, email, phone, address, password) VALUES (?, ?, ?, ?, ?)',
    [name, email, phone, address, hashedPassword],
    (err, results) => {
      if (err) {
        return res.status(500).send({ message: 'Error registering user' });
      }
      res.status(201).send({ message: 'User registered successfully' });
    });
};

const loginUser = (req, res) => {
  const { email, password } = req.body;

  db.query('SELECT * FROM users WHERE email = ?', [email], (err, results) => {
    if (err || results.length === 0) {
      return res.status(404).send({ message: 'User not found' });
    }

    const user = results[0];
    const passwordIsValid = bcrypt.compareSync(password, user.password);

    if (!passwordIsValid) {
      return res.status(401).send({ accessToken: null, message: 'Invalid Password!' });
    }

    const token = jwt.sign({ id: user.id }, process.env.JWT_SECRET, { expiresIn: 86400 });
    res.status(200).send({ id: user.id, name: user.name, email: user.email, accessToken: token });
  });
};


const getUserProfile = (req, res) => {
  const userId = req.userId;

  db.query('SELECT id, name, email, phone, address, profile_picture FROM users WHERE id = ?',
    [userId], (err, results) => {
      if (err) return res.status(500).send({ message: 'Error retrieving user profile' });
      res.status(200).send(results[0]);
    });
};

const updateUserProfile = (req, res) => {
  const userId = req.userId;
  const { name, email, phone, address } = req.body;
  let profilePicturePath = null;

  if (req.file) {
    profilePicturePath = path.join('uploads', req.file.filename);
  }

  db.query('UPDATE users SET name = ?, email = ?, phone = ?, address = ?, profile_picture = ? WHERE id = ?',
    [name, email, phone, address, profilePicturePath, userId], (err) => {
      if (err) return res.status(500).send({ message: 'Error updating profile', error: err.message });
      res.status(200).send({ message: 'Profile updated successfully' });
    });
};

const deleteUserProfile = (req, res) => {
  const userId = req.userId;

  db.query('DELETE FROM users WHERE id = ?', [userId], (err) => {
    if (err) return res.status(500).send({ message: 'Error deleting profile' });
    res.status(200).send({ message: 'Profile deleted successfully' });
  });
};

module.exports = { registerUser, loginUser, getUserProfile, deleteUserProfile, updateUserProfile };
