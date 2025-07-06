import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import Courses from './pages/Courses';
import Dashboard from './pages/Dashboard';
import UploadCourse from './pages/UploadCourse';
import Certification from './pages/Certification';
import Profile from './pages/Profile';
import MyCourses from './pages/MyCourses';
import Mentors from './pages/Mentors';
import CreateProposal from './pages/CreateProposal';
import About from './pages/About';
import Login from './pages/Login';
import Register from './pages/Register';
import Layout from './components/Layout';

<Route element={<Layout />}>
  <Route path="/" element={<Home />} />
  <Route path="/courses" element={<Courses />} />
  <Route path="/dashboard" element={<Dashboard />} />
  {/* all other routes inside layout */}
</Route>









export default function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/courses" element={<Courses />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/upload" element={<UploadCourse />} />
        <Route path="/certification" element={<Certification />} />
        <Route path="/mentors" element={<Mentors />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/create-proposal" element={<CreateProposal />} />
        <Route path="/my-courses" element={<MyCourses />} />
        <Route path="/about" element={<About />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />



        
      </Routes>
    </Router>
  );
}
