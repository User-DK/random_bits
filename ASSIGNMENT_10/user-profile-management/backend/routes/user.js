const express = require('express');
const multer = require('multer');
const { registerUser, loginUser, getUserProfile, updateUserProfile, deleteUserProfile } = require('../controllers/userController');
const { verifyToken } = require('../middleware/auth');

const router = express.Router();
const upload = multer({ dest: 'uploads/' }); // Directory for uploaded files

router.post('/register', registerUser);
router.post('/login', loginUser);
router.get('/profile', verifyToken, getUserProfile);
router.put('/profile', verifyToken, upload.single('profile_picture'), (req, res) => {
  const profilePicturePath = req.file ? req.file.path : null;
  updateUserProfile(req, res, profilePicturePath);
});
router.delete('/profile', verifyToken, deleteUserProfile);

module.exports = router;