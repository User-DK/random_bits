import React, { useContext } from 'react';
import { BrowserRouter as Router, Routes, Route, Link, Navigate } from 'react-router-dom';
import { AuthProvider, AuthContext } from '../context/AuthContext';
import Login from './Auth/Login';
import Register from './Auth/Register';
import Profile from './Profile/Profile';
import ProfileEdit from './Profile/ProfileEdit';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import Container from '@mui/material/Container';
import './App.css'
import { useNavigate } from 'react-router-dom';

function App() {
  return (
    <AuthProvider>
      <Router>
        <AppBar position="static" sx={{ border: "solid 1px blue", borderRadius: "10px", backgroundColor: "#5232a8" }}>
          <Toolbar >
            <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
              User Profile Management System
            </Typography>
            <Button color="inherit" component={Link} to="/">Home</Button>
            <Button color="inherit" component={Link} to="/profile">Profile</Button>
            <Button color="inherit" component={Link} to="/profile/edit">Edit Profile</Button>
            <Button color="inherit" component={Link} to="/login">Login</Button>
            <Button color="inherit" component={Link} to="/register">Register</Button>
          </Toolbar>
        </AppBar>

        <Container sx={{ mt: 4 }}>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/profile" element={<ProtectedRoute component={Profile} />} />
            <Route path="/profile/edit" element={<ProtectedRoute component={ProfileEdit} />} />
            <Route path="/login" element={<Login />} />
            <Route path="/register" element={<Register />} />
            <Route path="*" element={<Navigate to="/" />} />
          </Routes>
        </Container>
      </Router>
    </AuthProvider>
  );
}

const Home = () => {
  const navigate = useNavigate();
  return (
    <div >
      <Typography variant="h4" gutterBottom>
        Welcome to the User Profile Management System
      </Typography>
      <Typography variant="body1">
        Please log in or register to manage your profile.
        
      </Typography>
      <Button
        variant="text"
        onClick={() => navigate('/login')}
        sx={{ mt: 2, color: 'primary' }}
      >
        Login
      </Button>
      <Button
        variant="text"
        onClick={() => navigate('/register')}
        sx={{ mt: 2, color: 'primary' }}
      >
        Register
      </Button>
    </div>
  );
};

const ProtectedRoute = ({ component: Component, ...rest }) => {
  const { user } = useContext(AuthContext);

  return user ? (
    <Component {...rest} />
  ) : (
    <Navigate to="/login" />
  );
};

export default App;