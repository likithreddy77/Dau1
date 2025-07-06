import React from 'react';
import { Navbar } from '../components/Navbar';
import { Footer } from '../components/Footer';

const mentors = [
  {
    id: 1,
    name: 'Dr. Satoshi Nakamoto',
    title: 'Blockchain Architect',
    expertise: ['Bitcoin', 'Smart Contracts'],
    bio: 'Researcher and educator in decentralized systems. Loves teaching protocol-level logic.',
  },
  {
    id: 2,
    name: 'Vitalik Buterin',
    title: 'Ethereum Co-Founder',
    expertise: ['DAOs', 'Zero Knowledge Proofs'],
    bio: 'Core voice in Web3, DAOs and social governance models. Open to advanced discussions.',
  },
];

export default function Mentors() {
  return (
    <div className="bg-gray-950 text-white min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-1 px-6 py-12 max-w-4xl mx-auto">
        <h1 className="text-3xl font-bold mb-8 text-center">Meet Our Mentors</h1>
        <div className="grid gap-6">
          {mentors.map((mentor) => (
            <div
              key={mentor.id}
              className="bg-gray-800 p-6 rounded-2xl shadow-lg"
            >
              <h2 className="text-xl font-semibold">{mentor.name}</h2>
              <p className="text-sm text-gray-400">{mentor.title}</p>
              <p className="mt-2 text-sm text-gray-300">{mentor.bio}</p>
              <p className="mt-2 text-sm text-indigo-300">
                Expertise: {mentor.expertise.join(', ')}
              </p>
              <button className="mt-4 bg-indigo-600 hover:bg-indigo-700 px-4 py-2 rounded-xl text-sm">
                Book Session
              </button>
            </div>
          ))}
        </div>
      </main>
      <Footer />
    </div>
  );
}
