import React from 'react';
import { Navbar } from '../components/Navbar';
import { Footer } from '../components/Footer';

export default function About() {
  return (
    <div className="bg-gray-950 text-white min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-1 px-6 py-12 max-w-4xl mx-auto">
        <h1 className="text-3xl font-bold mb-8 text-center">About Decentralized Autonomous University</h1>

        <section className="mb-8">
          <h2 className="text-xl font-semibold mb-2">🌍 Our Mission</h2>
          <p className="text-gray-300">
            DAU is an Internet Computer-based global learning platform where education is decentralized,
            DAO-governed, and open to everyone. Our mission is to break down barriers to quality education using
            transparent, community-driven systems.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-xl font-semibold mb-2">🏗️ Tech Stack</h2>
          <ul className="list-disc pl-6 text-gray-300">
            <li>Frontend: React.js + Tailwind CSS</li>
            <li>Backend: Internet Computer Canisters</li>
            <li>Governance: DAO-powered proposal engine</li>
            <li>Authentication: Internet Identity</li>
          </ul>
        </section>

        <section className="mb-8">
          <h2 className="text-xl font-semibold mb-2">⚖️ DAO Governance</h2>
          <p className="text-gray-300">
            Proposals for new courses, platform updates, and certifications are voted on by community token holders.
            Smart contracts handle approvals, rejections, and updates.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-xl font-semibold mb-2">🎓 Open Access</h2>
          <p className="text-gray-300">
            All course materials, certifications, and governance logs are open and transparent — forever on-chain.
            Students earn credentials and tokens for learning and teaching.
          </p>
        </section>

        <section>
          <h2 className="text-xl font-semibold mb-2">🤝 Join Us</h2>
          <p className="text-gray-300">
            Become a contributor, mentor, developer, or student. This is your university — shaped by you, governed by you.
          </p>
        </section>
      </main>
      <Footer />
    </div>
  );
}
