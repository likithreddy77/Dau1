import React from 'react';
import { Link } from 'react-router-dom';

export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-[#0f172a] via-[#1e293b] to-[#334155] text-white">
      <div className="max-w-4xl mx-auto px-6 py-24 text-center">
        <h1 className="text-5xl font-extrabold leading-tight mb-6">
          Welcome to <span className="text-blue-400">Decentralized Autonomous University</span>
        </h1>

        <p className="text-lg text-gray-300 mb-10">
          Learn. Earn. Govern. Explore a new era of education on the Internet Computer Protocol — fully decentralized and community-managed.
        </p>

        <div className="flex flex-col sm:flex-row justify-center gap-6">
          <Link
            to="/courses"
            className="bg-blue-600 hover:bg-blue-700 transition px-6 py-3 rounded-lg font-semibold text-white shadow"
          >
            Explore Courses
          </Link>
          <Link
            to="/dashboard"
            className="bg-purple-600 hover:bg-purple-700 transition px-6 py-3 rounded-lg font-semibold text-white shadow"
          >
            DAO Dashboard
          </Link>
          <Link
            to="/upload"
            className="bg-green-600 hover:bg-green-700 transition px-6 py-3 rounded-lg font-semibold text-white shadow"
          >
            Upload a Course
          </Link>
        </div>
      </div>

      <footer className="text-center text-sm text-gray-400 pb-8">
        © 2025 Decentralized Autonomous University. All rights reserved.
      </footer>
    </div>
  );
}
