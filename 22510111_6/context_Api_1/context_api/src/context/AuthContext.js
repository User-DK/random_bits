// src/context/AuthContext.js
import React, { createContext, useState } from 'react';
import { useNavigate } from 'react-router-dom'; // Import useNavigate

export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const navigate = useNavigate(); 

  const login = () => {
    setIsAuthenticated(true);
    navigate('/dashboard');
  };

  const logout = () => {
    setIsAuthenticated(false);
    navigate('/'); 
  };

  return (
    <AuthContext.Provider value={{ isAuthenticated, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
};
