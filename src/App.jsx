import React, { useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Services from './components/Services';
import About from './components/About';
import Pricing from './components/Pricing';
import Location from './components/Location';
import Testimonials from './components/Testimonials';
import FAQ from './components/FAQ';
import Footer from './components/Footer';
import ScrollToTop from './components/ScrollToTop';
import Login from './components/Login';
import Signup from './components/Signup';
import ProtectedRoute from './components/ProtectedRoute';
import './App.css';

// Main Website Component
const MainWebsite = () => {
  return (
    <ProtectedRoute>
      <div className="min-h-screen bg-dark">
        <Navbar />
        <div id="home">
          <Hero />
        </div>
        <div id="services">
          <Services />
        </div>
        <div id="about">
          <About />
        </div>
        <div id="pricing">
          <Pricing />
        </div>
        <div id="location">
          <Location />
        </div>
        <div id="testimonials">
          <Testimonials />
        </div>
        <div id="faq">
          <FAQ />
        </div>
        <div id="contact">
          <Footer />
        </div>
        <ScrollToTop />
      </div>
    </ProtectedRoute>
  );
};

function App() {
  // Initialize default user
  useEffect(() => {
    const storedUsers = JSON.parse(localStorage.getItem('gymUsers') || '[]');
    const defaultUser = storedUsers.find(u => u.email === 'ikram@gmail.com');
    
    if (!defaultUser) {
      // Add default user
      storedUsers.push({
        fullName: 'Ikram',
        email: 'ikram@gmail.com',
        password: 'ikram123',
        loginMethod: 'email',
        createdAt: new Date().toISOString()
      });
      localStorage.setItem('gymUsers', JSON.stringify(storedUsers));
    }
  }, []);

  return (
    <Router>
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/" element={<MainWebsite />} />
        <Route path="*" element={<Navigate to="/login" replace />} />
      </Routes>
    </Router>
  );
}

export default App;
