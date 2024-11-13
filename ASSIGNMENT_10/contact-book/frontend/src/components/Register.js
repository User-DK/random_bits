import React, { useState } from 'react';
import { useAuth } from './AuthContext';
import { TextField, Button, Typography, Box } from '@mui/material'; // Import MUI components
import { useNavigate } from 'react-router-dom'; // Import useNavigate for navigation

const Register = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const { register } = useAuth();
  const navigate = useNavigate(); // useNavigate for navigation to login

  const handleSubmit = async (e) => {
    e.preventDefault();
    await register({ email, password });
  };

  return (
    <Box
      component="form"
      onSubmit={handleSubmit}
      sx={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        gap: 2,
        width: '300px',
        margin: '0 auto',
        padding: '20px',
        boxShadow: '0px 4px 10px rgba(0, 0, 0, 0.1)',
        borderRadius: '8px',
        backgroundColor: 'white',
      }}
    >
      <Typography variant="h4" gutterBottom>
        Register
      </Typography>
      <TextField
        label="Email"
        variant="outlined"
        fullWidth
        type="email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        required
      />
      <TextField
        label="Password"
        variant="outlined"
        fullWidth
        type="password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
        required
      />
      <Button type="submit" variant="contained" color="secondary" fullWidth>
        Register
      </Button>
      <Button
        variant="text"
        onClick={() => navigate('/login')}
        sx={{ mt: 2, color: 'primary' }}
      >
        Already have an account? Login
      </Button>
    </Box>
  );
};

export default Register;