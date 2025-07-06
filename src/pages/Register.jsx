import React, { useState } from 'react';
import { Navbar } from '../components/Navbar';
import { Footer } from '../components/Footer';
import { useNavigate } from 'react-router-dom';

export default function Register() {
  const [email, setEmail] = useState('');
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  const handleRegister = (e) => {
    e.preventDefault();
    alert('Account created successfully');
    navigate('/login');
  };

  return (
    <div className="bg-gray-950 text-white min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-1 px-6 py-12 max-w-md mx-auto">
        <h1 className="text-3xl font-bold mb-8 text-center">Register</h1>
        <form onSubmit={handleRegister} className="bg-gray-800 p-6 rounded-2xl shadow-lg space-y-4">
          <input
            type="text"
            className="w-full px-3 py-2 bg-gray-700 rounded-xl text-white"
            placeholder="Username"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            required
          />
          <input
            type="email"
            className="w-full px-3 py-2 bg-gray-700 rounded-xl text-white"
            placeholder="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
          <input
            type="password"
            className="w-full px-3 py-2 bg-gray-700 rounded-xl text-white"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
          <button type="submit" className="w-full bg-indigo-600 hover:bg-indigo-700 py-2 rounded-xl">
            Register
          </button>
        </form>
      </main>
      <Footer />
    </div>
  );
}
