import React, { useState } from 'react';
import { Navbar } from '../components/Navbar';
import { Footer } from '../components/Footer';

export default function UploadCourse() {
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [stake, setStake] = useState('');
  const [category, setCategory] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Submitting course:', { title, description, stake, category });
    alert('Course submitted to DAO (mock)');
  };

  return (
    <div className="bg-gray-950 text-white min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-1 px-6 py-12 max-w-3xl mx-auto">
        <h1 className="text-3xl font-bold mb-8 text-center">Upload a New Course</h1>
        <form onSubmit={handleSubmit} className="space-y-6">
          <input
            className="w-full px-4 py-3 rounded-xl bg-gray-800 text-white border border-gray-700"
            type="text"
            placeholder="Course Title"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            required
          />
          <textarea
            className="w-full px-4 py-3 rounded-xl bg-gray-800 text-white border border-gray-700"
            placeholder="Course Description"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            rows={5}
            required
          />
          <input
            className="w-full px-4 py-3 rounded-xl bg-gray-800 text-white border border-gray-700"
            type="number"
            placeholder="Stake Amount (e.g. 50 ICP)"
            value={stake}
            onChange={(e) => setStake(e.target.value)}
            required
          />
          <select
            className="w-full px-4 py-3 rounded-xl bg-gray-800 text-white border border-gray-700"
            value={category}
            onChange={(e) => setCategory(e.target.value)}
            required
          >
            <option value="">Select Category</option>
            <option value="Blockchain">Blockchain</option>
            <option value="AI">AI</option>
            <option value="DAOs">DAOs</option>
          </select>
          <button
            type="submit"
            className="w-full bg-indigo-600 hover:bg-indigo-700 py-3 rounded-xl text-white font-semibold"
          >
            Submit to DAO
          </button>
        </form>
      </main>
      <Footer />
    </div>
  );
}
