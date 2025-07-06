import React from 'react';
import { Navbar } from '../components/Navbar';
import { Footer } from '../components/Footer';

const sampleCourses = [
  {
    id: 1,
    title: 'Blockchain Fundamentals',
    educator: 'Satoshi Nakamoto',
    rating: 4.8,
    stake: '150 ICP',
    enrolled: 421
  },
  {
    id: 2,
    title: 'DAOs and Governance',
    educator: 'Vitalik Buterin',
    rating: 4.9,
    stake: '200 ICP',
    enrolled: 312
  },
  {
    id: 3,
    title: 'Intro to Internet Computer',
    educator: 'Dominic Williams',
    rating: 4.7,
    stake: '100 ICP',
    enrolled: 503
  }
];

export default function Courses() {
  return (
    <div className="bg-gray-950 text-white min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-1 px-6 py-12">
        <h1 className="text-3xl font-bold mb-8 text-center">Explore Courses</h1>
        <div className="max-w-6xl mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
          {sampleCourses.map(course => (
            <div key={course.id} className="bg-gray-800 p-6 rounded-2xl shadow hover:shadow-indigo-600 transition">
              <h2 className="text-xl font-semibold">{course.title}</h2>
              <p className="text-sm text-gray-400">Educator: {course.educator}</p>
              <p className="text-sm text-gray-400">Stake: {course.stake}</p>
              <p className="text-sm text-gray-400">Rating: ⭐ {course.rating}</p>
              <p className="text-sm text-gray-400">Enrolled: {course.enrolled} students</p>
              <button className="mt-4 w-full bg-indigo-600 hover:bg-indigo-700 px-4 py-2 rounded-xl">
                Enroll
              </button>
            </div>
          ))}
        </div>
      </main>
      <Footer />
    </div>
  );
}
