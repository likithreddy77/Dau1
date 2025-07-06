// components/Navbar.jsx
import { Link } from 'react-router-dom';

export default function Navbar() {
  return (
    <nav className="bg-gray-900 text-white px-6 py-4 flex justify-between items-center shadow-md">
      <h1 className="text-2xl font-bold">DAU</h1>
      <ul className="flex space-x-6 text-sm">
        <li><Link to="/" className="hover:text-blue-400">Home</Link></li>
        <li><Link to="/courses" className="hover:text-blue-400">Courses</Link></li>
        <li><Link to="/dashboard" className="hover:text-blue-400">Dashboard</Link></li>
        <li><Link to="/upload" className="hover:text-blue-400">Upload</Link></li>
        <li><Link to="/my-courses" className="hover:text-blue-400">My Courses</Link></li>
        <li><Link to="/certification" className="hover:text-blue-400">Certification</Link></li>
        <li><Link to="/profile" className="hover:text-blue-400">Profile</Link></li>
        <li><Link to="/mentors" className="hover:text-blue-400">Mentors</Link></li>
        <li><Link to="/proposal" className="hover:text-blue-400">Create Proposal</Link></li>
        <li><Link to="/about" className="hover:text-blue-400">About</Link></li>
      </ul>
    </nav>
  );
}
