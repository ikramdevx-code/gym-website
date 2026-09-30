import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';

const Login = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    email: '',
    password: '',
    rememberMe: false
  });
  const [showPassword, setShowPassword] = useState(false);
  const [error, setError] = useState('');

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: type === 'checkbox' ? checked : value
    }));
    setError('');
  };

  const handleLogin = (e) => {
    e.preventDefault();
    
    // Check credentials
    const storedUsers = JSON.parse(localStorage.getItem('gymUsers') || '[]');
    const user = storedUsers.find(u => u.email === formData.email && u.password === formData.password);

    if (user) {
      // Store logged in user
      localStorage.setItem('loggedInUser', JSON.stringify(user));
      if (formData.rememberMe) {
        localStorage.setItem('rememberMe', 'true');
      }
      navigate('/');
    } else {
      setError('Invalid email or password');
    }
  };

  const handleGoogleLogin = () => {
    // Simulate Google login
    const googleUser = {
      fullName: 'Google User',
      email: 'user@google.com',
      loginMethod: 'google'
    };
    localStorage.setItem('loggedInUser', JSON.stringify(googleUser));
    navigate('/');
  };

  return (
    <motion.div 
      className="min-h-screen bg-[#0A0A0A] flex items-center justify-center px-4 py-8 sm:py-12 lg:py-16"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
    >
      <div className="w-full max-w-6xl flex flex-col lg:flex-row items-center gap-8 lg:gap-12 xl:gap-16">
        {/* Left Side - Branding */}
        <motion.div 
          className="flex-1 text-white text-center lg:text-left"
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          <motion.h1 
            className="text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-bold mb-4 sm:mb-6"
            initial={{ opacity: 0, y: -30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
          >
            <span className="text-white">GYM</span>
          </motion.h1>
          <motion.h2 
            className="text-3xl sm:text-4xl lg:text-5xl xl:text-6xl font-bold mb-4 sm:mb-6 leading-tight"
            initial={{ opacity: 0, y: -30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            Your Fitness Journey <span className="text-[#FF5722]">Starts Here</span>
          </motion.h2>
          <motion.p 
            className="text-gray-400 text-base sm:text-lg lg:text-xl mb-6 max-w-lg mx-auto lg:mx-0"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.5 }}
          >
            Log in to continue your plan, or create an account to book your first session.
          </motion.p>
        </motion.div>

        {/* Right Side - Login Form */}
        <motion.div 
          className="flex-1 w-full max-w-md"
          initial={{ opacity: 0, x: 50, scale: 0.95 }}
          animate={{ opacity: 1, x: 0, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.3 }}
        >
          <motion.div 
            className="bg-[#1A1D29] rounded-3xl p-6 sm:p-8 lg:p-10 shadow-2xl"
            whileHover={{ boxShadow: '0 25px 50px -12px rgba(255, 87, 34, 0.3)' }}
            transition={{ duration: 0.3 }}
          >
            {/* Tab Buttons */}
            <motion.div 
              className="flex gap-2 mb-6 sm:mb-8"
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.5 }}
            >
              <motion.button 
                className="flex-1 bg-[#FF5722] text-white py-3 px-4 sm:px-6 rounded-full font-semibold text-sm sm:text-base"
                whileHover={{ scale: 1.05, boxShadow: '0 10px 25px -5px rgba(255, 87, 34, 0.5)' }}
                whileTap={{ scale: 0.95 }}
              >
                Log in
              </motion.button>
              <Link to="/signup" className="flex-1">
                <motion.button 
                  className="w-full bg-transparent border border-gray-700 text-white py-3 px-4 sm:px-6 rounded-full font-semibold text-sm sm:text-base hover:border-[#FF5722] transition-colors"
                  whileHover={{ scale: 1.05, borderColor: '#FF5722' }}
                  whileTap={{ scale: 0.95 }}
                >
                  Sign up
                </motion.button>
              </Link>
            </motion.div>

            {/* Welcome Text */}
            <motion.div 
              className="mb-6"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.6 }}
            >
              <h3 className="text-white text-xl sm:text-2xl font-bold mb-2">Welcome back</h3>
              <p className="text-gray-400 text-xs sm:text-sm">Log in to your account.</p>
            </motion.div>

            {/* Login Form */}
            <form onSubmit={handleLogin}>
              <AnimatePresence>
                {error && (
                  <motion.div 
                    className="mb-4 p-3 bg-red-500/10 border border-red-500 rounded-lg text-red-500 text-xs sm:text-sm"
                    initial={{ opacity: 0, scale: 0.9, y: -10 }}
                    animate={{ opacity: 1, scale: 1, y: 0 }}
                    exit={{ opacity: 0, scale: 0.9, y: -10 }}
                    transition={{ duration: 0.3 }}
                  >
                    {error}
                  </motion.div>
                )}
              </AnimatePresence>

              {/* Email Field */}
              <motion.div 
                className="mb-4"
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: 0.7 }}
              >
                <label className="block text-gray-400 text-xs sm:text-sm mb-2">Email</label>
                <motion.input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="you@example.com"
                  className="w-full bg-[#0F1117] text-white px-4 py-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#FF5722] text-sm sm:text-base transition-all"
                  required
                  whileFocus={{ scale: 1.02, boxShadow: '0 0 0 2px rgba(255, 87, 34, 0.3)' }}
                />
              </motion.div>

              {/* Password Field */}
              <motion.div 
                className="mb-4"
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: 0.8 }}
              >
                <label className="block text-gray-400 text-xs sm:text-sm mb-2">Password</label>
                <div className="relative">
                  <motion.input
                    type={showPassword ? 'text' : 'password'}
                    name="password"
                    value={formData.password}
                    onChange={handleChange}
                    placeholder="Your password"
                    className="w-full bg-[#0F1117] text-white px-4 py-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#FF5722] text-sm sm:text-base transition-all"
                    required
                    whileFocus={{ scale: 1.02, boxShadow: '0 0 0 2px rgba(255, 87, 34, 0.3)' }}
                  />
                  <motion.button
                    type="button"
                    onClick={() => setShowPassword(!showPassword)}
                    className="absolute right-4 top-1/2 -translate-y-1/2 text-gray-400 text-xs sm:text-sm hover:text-white transition-colors"
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.9 }}
                  >
                    {showPassword ? 'Hide' : 'Show'}
                  </motion.button>
                </div>
              </motion.div>

              {/* Remember Me & Forgot Password */}
              <motion.div 
                className="flex items-center justify-between mb-6 flex-wrap gap-2"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.9 }}
              >
                <label className="flex items-center gap-2 text-gray-400 text-xs sm:text-sm cursor-pointer">
                  <input
                    type="checkbox"
                    name="rememberMe"
                    checked={formData.rememberMe}
                    onChange={handleChange}
                    className="w-4 h-4 bg-[#0F1117] border border-gray-600 rounded focus:ring-[#FF5722] cursor-pointer"
                  />
                  Remember me
                </label>
                <motion.button 
                  type="button" 
                  className="text-[#FF5722] text-xs sm:text-sm hover:underline"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  Forgot password?
                </motion.button>
              </motion.div>

              {/* Login Button */}
              <motion.button
                type="submit"
                className="w-full bg-[#FF5722] text-white py-3 rounded-full font-semibold hover:bg-[#E64A19] transition-colors mb-6 text-sm sm:text-base"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 1.0 }}
                whileHover={{ scale: 1.02, boxShadow: '0 10px 25px -5px rgba(255, 87, 34, 0.5)' }}
                whileTap={{ scale: 0.98 }}
              >
                Log in
              </motion.button>

              {/* Divider */}
              <motion.div 
                className="flex items-center gap-4 mb-6"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.5, delay: 1.1 }}
              >
                <div className="flex-1 h-px bg-gray-700"></div>
                <span className="text-gray-500 text-xs sm:text-sm">or</span>
                <div className="flex-1 h-px bg-gray-700"></div>
              </motion.div>

              {/* Google Login */}
              <motion.button
                type="button"
                onClick={handleGoogleLogin}
                className="w-full bg-transparent border border-gray-700 text-white py-3 rounded-full font-semibold hover:border-[#FF5722] transition-colors flex items-center justify-center gap-2 text-sm sm:text-base"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 1.2 }}
                whileHover={{ scale: 1.02, borderColor: '#FF5722' }}
                whileTap={{ scale: 0.98 }}
              >
                <svg className="w-4 h-4 sm:w-5 sm:h-5" viewBox="0 0 24 24">
                  <path
                    fill="currentColor"
                    d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"
                  />
                  <path
                    fill="currentColor"
                    d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"
                  />
                  <path
                    fill="currentColor"
                    d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"
                  />
                  <path
                    fill="currentColor"
                    d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"
                  />
                </svg>
                Continue with Google
              </motion.button>

              {/* Sign Up Link */}
              <motion.p 
                className="text-center text-gray-400 text-xs sm:text-sm mt-6"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.5, delay: 1.3 }}
              >
                New here?{' '}
                <Link to="/signup" className="text-[#FF5722] hover:underline">
                  Create an account
                </Link>
              </motion.p>
            </form>
          </motion.div>
        </motion.div>
      </div>
    </motion.div>
  );
};

export default Login;
