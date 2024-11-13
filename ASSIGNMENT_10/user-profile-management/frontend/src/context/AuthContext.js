import React, { createContext, useState } from 'react';
import api from '../api';

export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [error, setError] = useState(null);

  const login = async (email, password) => {
    try {
      const response = await api.post('/login', { email, password });
      setUser(response.data);
      localStorage.setItem('token', response.data.accessToken);
      setError(null); // Clear any previous errors
    } catch (error) {
      console.error('Login failed:', error);
      setError('Login failed. Please check your credentials and try again.');
    }
  };

  const register = async (name, email, phone, address, password) => {
    try {
      await api.post('/register', { name, email, phone, address, password });
      setError(null); // Clear any previous errors
    } catch (error) {
      console.error('Registration failed:', error);
      setError('Registration failed. Please try again.');
    }
  };

  const logout = () => {
    setUser(null);
    localStorage.removeItem('token');
    setError(null); // Clear any previous errors
  };

  return (
    <AuthContext.Provider value={{ user, login, register, logout, error }}>
      {children}
    </AuthContext.Provider>
  );
};