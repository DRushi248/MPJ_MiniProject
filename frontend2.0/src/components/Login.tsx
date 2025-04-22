import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';

const Login = () => {
  const navigate = useNavigate();
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError('');

    try {
      const response = await fetch(`http://localhost:8083/users/login?username=${encodeURIComponent(username)}&password=${encodeURIComponent(password)}`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        }
      });

      const data = await response.json();
      console.log('Login response:', data); // Debug log

      if (response.ok) {
        if (data.token) {
          localStorage.setItem('token', data.token);
          console.log('Token stored:', data.token); // Debug log
          navigate('/profile');
        } else {
          setError('No token received from server');
          console.error('No token in response:', data);
        }
      } else {
        setError(data.message || 'Login failed');
        console.error('Login failed:', data);
      }
    } catch (error) {
      console.error('Login error:', error);
      setError('Login failed');
    }
  };

  return (
    <div className="min-h-screen grid grid-cols-1 md:grid-cols-2">
      {/* Left side - Background */}
      <div className="hidden md:block bg-[#2A2F8F] relative overflow-hidden">
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8 }}
          className="absolute inset-0 flex items-center justify-center"
        >
          {/* Add your background design or image here */}
          <div className="w-4 h-4 bg-white/20 rounded-full absolute top-20 left-20" />
        </motion.div>
      </div>

      {/* Right side - Login Form */}
      <div className="flex items-center justify-center p-8 bg-white">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="w-full max-w-md space-y-8"
        >
          <div className="text-center">
            <h2 className="text-3xl font-bold text-[#2A2F8F] mb-2">Login here</h2>
            <p className="text-gray-600">Welcome back you've been missed!</p>
          </div>

          {error && (
            <div className="bg-red-50 text-red-500 p-3 rounded-lg text-sm">
              {error}
            </div>
          )}

          <form onSubmit={handleSubmit} className="space-y-6">
            <div>
              <input
                type="text"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
                placeholder="Username"
                className="w-full px-4 py-3 rounded-lg bg-white text-gray-900 border border-gray-300 focus:border-[#2A2F8F] focus:ring-2 focus:ring-[#2A2F8F]/20 outline-none transition-all placeholder-gray-500"
                required
              />
            </div>

            <div>
              <input
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                placeholder="Password"
                className="w-full px-4 py-3 rounded-lg bg-white text-gray-900 border border-gray-300 focus:border-[#2A2F8F] focus:ring-2 focus:ring-[#2A2F8F]/20 outline-none transition-all placeholder-gray-500"
                required
              />
            </div>

            <div className="text-right">
              <Link to="/forgot-password" className="text-[#2A2F8F] hover:text-[#2A2F8F]/80 text-sm font-medium">
                Forgot your password?
              </Link>
            </div>

            <button
              type="submit"
              className="w-full bg-[#2A2F8F] text-white py-3 rounded-lg font-medium hover:bg-[#2A2F8F]/90 transition-all duration-200"
            >
              Get Started
            </button>

            <div className="text-center">
              <Link to="/signup" className="text-gray-600 hover:text-[#2A2F8F] font-medium">
                Create new account
              </Link>
            </div>

            <div className="relative">
              <div className="absolute inset-0 flex items-center">
                <div className="w-full border-t border-gray-300"></div>
              </div>
              <div className="relative flex justify-center text-sm">
                <span className="px-2 bg-white text-gray-500">Or continue with</span>
              </div>
            </div>

            <div className="grid grid-cols-3 gap-4">
              <button type="button" className="flex items-center justify-center p-3 rounded-lg border border-gray-300 hover:border-[#2A2F8F] transition-all duration-200">
                <img src="/google.svg" alt="Google" className="w-6 h-6 opacity-70 hover:opacity-100" />
              </button>
              <button type="button" className="flex items-center justify-center p-3 rounded-lg border border-gray-300 hover:border-[#2A2F8F] transition-all duration-200">
                <img src="/facebook.svg" alt="Facebook" className="w-6 h-6 opacity-70 hover:opacity-100" />
              </button>
              <button type="button" className="flex items-center justify-center p-3 rounded-lg border border-gray-300 hover:border-[#2A2F8F] transition-all duration-200">
                <img src="/apple.svg" alt="Apple" className="w-6 h-6 opacity-70 hover:opacity-100" />
              </button>
            </div>
          </form>
        </motion.div>
      </div>
    </div>
  );
};

export default Login; 