import { useState, useContext } from 'react';
import { AuthContext } from '../context/AuthContext';

const Login = () => {
  const { login } = useContext(AuthContext);
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    login(username, password);
  };

  return (
    <div className="flex h-screen justify-center items-center bg-gradient-to-br from-[#000] to-[#427aa1]">
      <form onSubmit={handleSubmit} className="bg-white p-8 rounded-lg shadow-lg max-w-sm w-full">
        <h1 className="text-3xl font-bold text-center text-[#000] mb-6">Login</h1>
        
        <input
          className="border border-[#427aa1] p-3 w-full mb-4 rounded focus:outline-none focus:ring-2 focus:ring-[#000]"
          type="text"
          placeholder="Username"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
        />
        
        <input
          className="border border-[#427aa1] p-3 w-full mb-4 rounded focus:outline-none focus:ring-2 focus:ring-[#000]"
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        
        <button type="submit" className="bg-[#000] text-white py-3 px-6 rounded hover:bg-[#427aa1] transition duration-200 w-full">
          Login
        </button>

        <p className="text-center text-gray-600 mt-4">Don't have an account? <a href="#" className="text-[#000] underline">Sign Up</a></p>
      </form>
    </div>
  );
};

export default Login;

