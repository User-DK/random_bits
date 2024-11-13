import React, { useState } from 'react';
import { TextField, Button, Typography, Box } from '@mui/material'; // Import MUI components
import api from '../api';

const ContactForm = ({ onContactAdded }) => {
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');
  const [email, setEmail] = useState('');
  const [address, setAddress] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    const token = localStorage.getItem('token');
    try {
      const response = await api.post(
        '/contacts',
        { name, phone, email, address },
        { headers: { Authorization: `Bearer ${token}` } }
      );
      if (typeof onContactAdded === 'function') {
        onContactAdded(response.data);
      }
      // Clear the form fields after submission
      setName('');
      setPhone('');
      setEmail('');
      setAddress('');
    } catch (error) {
      console.log('Failed to add contact', error);
    }
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
        width: '400px',
        margin: '0 auto',
        padding: '20px',
        boxShadow: '0px 4px 10px rgba(0, 0, 0, 0.1)',
        borderRadius: '8px',
        backgroundColor: 'white',
      }}
    >
      <Typography variant="h4" gutterBottom>
        Add Contact
      </Typography>
      <TextField
        label="Name"
        variant="outlined"
        fullWidth
        value={name}
        onChange={(e) => setName(e.target.value)}
        required
      />
      <TextField
        label="Phone"
        variant="outlined"
        fullWidth
        value={phone}
        onChange={(e) => setPhone(e.target.value)}
        required
      />
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
        label="Address"
        variant="outlined"
        fullWidth
        value={address}
        onChange={(e) => setAddress(e.target.value)}
      />
      <Button type="submit" variant="contained" color="secondary" fullWidth>
        Add Contact
      </Button>
    </Box>
  );
};

export default ContactForm;
