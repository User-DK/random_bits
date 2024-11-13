import React, { useEffect, useState } from 'react';
import { List, ListItem, ListItemText, Button, Typography, Box } from '@mui/material'; // Import MUI components
import api from '../api';

const ContactList = () => {
  const [contacts, setContacts] = useState([]);
  const token = localStorage.getItem('token');

  const fetchContacts = async () => {
    try {
      const response = await api.get('/contacts', {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      setContacts(response.data);
    } catch (error) {
      alert('Failed to fetch contacts');
    }
  };

  useEffect(() => {
    fetchContacts();
  }, []);

  const handleDelete = async (id) => {
    try {
      await api.delete(`/contacts/${id}`, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      setContacts(contacts.filter(contact => contact._id !== id));
    } catch (error) {
      alert('Failed to delete contact');
    }
  };

  return (
    <Box
      sx={{
        width: '400px',
        margin: '0 auto',
        padding: '20px',
        boxShadow: '0px 4px 10px rgba(0, 0, 0, 0.1)',
        borderRadius: '8px',
        backgroundColor: 'white',
      }}
    >
      <Typography variant="h4" gutterBottom>
        Contact List
      </Typography>
      <List>
        {contacts.map(contact => (
          <ListItem
            key={contact._id}
            sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}
          >
            <ListItemText
              primary={contact.name}
              secondary={`${contact.phone} - ${contact.email}`}
            />
            <Button
              variant="contained"
              color="secondary"
              onClick={() => handleDelete(contact._id)}
            >
              Delete
            </Button>
          </ListItem>
        ))}
      </List>
    </Box>
  );
};

export default ContactList;