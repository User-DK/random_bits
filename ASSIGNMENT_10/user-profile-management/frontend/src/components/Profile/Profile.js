import React, { useContext, useEffect, useState } from 'react';
import { AuthContext } from '../../context/AuthContext';
import { Box, Typography, Avatar, Card, CardContent } from '@mui/material';
import api from '../../api';

const Profile = () => {
  const { user } = useContext(AuthContext);
  const [profileData, setProfileData] = useState({});

  useEffect(() => {
    const fetchProfile = async () => {
      try {
        const response = await api.get('/profile', {
          headers: { 'x-access-token': localStorage.getItem('token') },
        });
        setProfileData(response.data);
      } catch (error) {
        console.error('Failed to fetch profile:', error);
      }
    };

    fetchProfile();
  }, []);

  return (
    <Box sx={{ display: 'flex', justifyContent: 'center', mt: 4, backgroundColor: "white" }}>
      <Card sx={{ maxWidth: 400, p: 3 }}>
        <Box sx={{ display: 'flex', justifyContent: 'center', mb: 2, backgroundColor: "white" }}>
          <Avatar
            src={profileData.profile_picture}
            alt={profileData.name}
            sx={{ width: 100, height: 100 }}
          />
        </Box>
        <CardContent>
          <Typography variant="h5" gutterBottom>
            {profileData.name}
          </Typography>
          <Typography variant="body1" color="textSecondary">
            Email: {profileData.email}
          </Typography>
          <Typography variant="body1" color="textSecondary">
            Phone: {profileData.phone}
          </Typography>
          <Typography variant="body1" color="textSecondary">
            Address: {profileData.address}
          </Typography>
        </CardContent>
      </Card>
    </Box>
  );
};

export default Profile;
