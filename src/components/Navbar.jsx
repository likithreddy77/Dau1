import React from 'react';
import { Link } from 'react-router-dom';

export function Navbar() {
  return (
    <nav className="bg-gray-900 text-white px-6 py-4 shadow-md flex justify-between items-center">
      <h1 className="text-xl font-bold">DAU</h1>
      <ul className="flex gap-6 text-sm">
        <li><Link to="/">Home</Link></li>
        <li><Link to="/courses">Courses</Link></li>
        <li><Link to="/dashboard">Dashboard</Link></li>
        <li><Link to="/upload">Upload</Link></li>
        <li><Link to="/my-courses">My Courses</Link></li>
        <li><Link to="/certification">Certification</Link></li>
        <li><Link to="/profile">Profile</Link></li>
        <li><Link to="/mentors">Mentors</Link></li>
        

      </ul>
    </nav>
  );
}
