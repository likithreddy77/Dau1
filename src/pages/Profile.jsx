import React from 'react';
import { Navbar } from '../components/Navbar';
import { Footer } from '../components/Footer';

const profile = {
  name: 'likith.icp',
  email: 'likith@example.com',
  wallet: 'qo7jc...8hWz',
  enrolledCourses: 3,
  certificates: 2,
  proposals: 1,
  staked: '370 ICP',
};

export default function Profile() {
  return (
    <div className="bg-gray-950 text-white min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-1 max-w-3xl mx-auto px-6 py-12">
        <h1 className="text-3xl font-bold mb-8 text-center">My Profile</h1>

        <div className="bg-gray-800 p-6 rounded-2xl shadow-lg mb-10">
          <h2 className="text-xl font-semibold mb-2">Account Info</h2>
          <p className="text-gray-300 mb-1">👤 <strong>ID:</strong> {profile.name}</p>
          <p className="text-gray-300 mb-1">📩 <strong>Email:</strong> {profile.email}</p>
          <p className="text-gray-300 mb-1">🔗 <strong>Wallet:</strong> {profile.wallet}</p>
        </div>

        <div className="grid grid-cols-2 gap-6 text-center">
          <div className="bg-gray-800 p-6 rounded-2xl shadow-lg">
            <p className="text-4xl font-bold">{profile.enrolledCourses}</p>
            <p className="text-gray-400 mt-1">Enrolled Courses</p>
          </div>
          <div className="bg-gray-800 p-6 rounded-2xl shadow-lg">
            <p className="text-4xl font-bold">{profile.certificates}</p>
            <p className="text-gray-400 mt-1">Certificates</p>
          </div>
          <div className="bg-gray-800 p-6 rounded-2xl shadow-lg">
            <p className="text-4xl font-bold">{profile.proposals}</p>
            <p className="text-gray-400 mt-1">DAO Proposals</p>
          </div>
          <div className="bg-gray-800 p-6 rounded-2xl shadow-lg">
            <p className="text-4xl font-bold">{profile.staked}</p>
            <p className="text-gray-400 mt-1">Staked ICP</p>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}
