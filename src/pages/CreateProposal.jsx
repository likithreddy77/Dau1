import React, { useState } from 'react';
import { Navbar } from '../components/Navbar';
import { Footer } from '../components/Footer';

export default function CreateProposal() {
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [type, setType] = useState('course');

  const handleSubmit = (e) => {
    e.preventDefault();
    alert(`Proposal submitted:\n\nType: ${type}\nTitle: ${title}\nDescription: ${description}`);
    // Future: send to backend or DAO canister
  };

  return (
    <div className="bg-gray-950 text-white min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-1 px-6 py-12 max-w-3xl mx-auto">
        <h1 className="text-3xl font-bold mb-8 text-center">Create DAO Proposal</h1>
        <form onSubmit={handleSubmit} className="bg-gray-800 p-6 rounded-2xl shadow-lg space-y-4">
          <div>
            <label className="block text-sm mb-1">Proposal Type</label>
            <select
              className="w-full px-3 py-2 bg-gray-700 rounded-xl text-white"
              value={type}
              onChange={(e) => setType(e.target.value)}
            >
              <option value="course">New Course</option>
              <option value="policy">Policy Change</option>
              <option value="funding">Funding Request</option>
            </select>
          </div>

          <div>
            <label className="block text-sm mb-1">Title</label>
            <input
              type="text"
              className="w-full px-3 py-2 bg-gray-700 rounded-xl text-white"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
              required
            />
          </div>

          <div>
            <label className="block text-sm mb-1">Description</label>
            <textarea
              className="w-full px-3 py-2 bg-gray-700 rounded-xl text-white"
              rows="5"
              value={description}
              onChange={(e) => setDescription(e.target.value)}
              required
            />
          </div>

          <button type="submit" className="w-full bg-indigo-600 hover:bg-indigo-700 py-2 rounded-xl">
            Submit Proposal
          </button>
        </form>
      </main>
      <Footer />
    </div>
  );
}
