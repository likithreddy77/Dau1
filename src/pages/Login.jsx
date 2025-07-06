import React, { useState } from 'react';
import { Navbar } from '../components/Navbar';
import { Footer } from '../components/Footer';
import { useNavigate } from 'react-router-dom';

export default function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  const handleLogin = (e) => {
    e.preventDefault();
    // Placeholder logic
    if (email && password) {
      alert('Login successful');
      navigate('/dashboard');
    }
  };

  return (
    <div className="bg-gray-950 text-white min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-1 px-6 py-12 max-w-md mx-auto">
        <h1 className="text-3xl font-bold mb-8 text-center">Login</h1>
        <form onSubmit={handleLogin} className="bg-gray-800 p-6 rounded-2xl shadow-lg space-y-4">
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
            Login
          </button>
        </form>
      </main>
      <Footer />
    </div>
  );
}
