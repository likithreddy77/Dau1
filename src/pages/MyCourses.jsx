import React from 'react';
import { Navbar } from '../components/Navbar';
import { Footer } from '../components/Footer';

const myCourses = [
  {
    id: 1,
    title: 'Introduction to DAOs',
    instructor: 'Vitalik Buterin',
    progress: 76,
  },
  {
    id: 2,
    title: 'ICP Smart Contracts',
    instructor: 'Dominic Williams',
    progress: 42,
  },
];

export default function MyCourses() {
  return (
    <div className="bg-gray-950 text-white min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-1 px-6 py-12 max-w-4xl mx-auto">
        <h1 className="text-3xl font-bold mb-8 text-center">My Enrolled Courses</h1>
        <div className="grid gap-6">
          {myCourses.length === 0 ? (
            <p className="text-gray-400 text-center">You're not enrolled in any courses yet.</p>
          ) : (
            myCourses.map((course) => (
              <div
                key={course.id}
                className="bg-gray-800 p-6 rounded-2xl shadow-lg flex justify-between items-center"
              >
                <div>
                  <h2 className="text-xl font-semibold">{course.title}</h2>
                  <p className="text-sm text-gray-400">Instructor: {course.instructor}</p>
                </div>
                <div className="text-sm text-indigo-300">
                  Progress: {course.progress}%
                </div>
              </div>
            ))
          )}
        </div>
      </main>
      <Footer />
    </div>
  );
}
