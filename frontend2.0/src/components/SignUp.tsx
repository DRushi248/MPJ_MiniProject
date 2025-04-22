import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import { authService } from '../services/api';

const SignUp = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    username: '',
    email: '',
    password: '',
    confirmPassword: '',
    phone: '',
    address: ''
  });
  const [error, setError] = useState('');
  const [isLoading, setIsLoading] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError('');
    setIsLoading(true);

    if (formData.password !== formData.confirmPassword) {
      setError('Passwords do not match');
      setIsLoading(false);
      return;
    }

    try {
      const { confirmPassword, ...registrationData } = formData;
      const response = await authService.register(registrationData);
      localStorage.setItem('token', response.token);
      navigate('/dashboard');
    } catch (err: any) {
      setError(err.response?.data?.message || 'Registration failed. Please try again.');
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="min-h-screen flex">
      {/* Left side - Background */}
      <div className="hidden md:flex md:w-1/2 bg-[#2A2F8F] relative overflow-hidden">
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8 }}
          className="absolute inset-0 flex items-center justify-center"
        >
          <div className="w-full h-full flex flex-col items-center justify-center p-8">
            <h1 className="text-4xl font-bold text-white mb-4">Welcome to CloudFlux</h1>
            <p className="text-white/80 text-lg text-center max-w-md">
              Your secure and reliable cloud storage solution. Store, share, and access your files from anywhere.
            </p>
            <div className="mt-8 grid grid-cols-3 gap-4">
              {[...Array(9)].map((_, i) => (
                <div key={i} className="w-4 h-4 bg-white/20 rounded-full" />
              ))}
            </div>
          </div>
        </motion.div>
      </div>

      {/* Right side - Sign Up Form */}
      <div className="w-full md:w-1/2 flex items-center justify-center p-8 bg-white">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="w-full max-w-md space-y-6"
        >
          <div className="text-center">
            <h2 className="text-3xl font-bold text-[#2A2F8F] mb-2">Create Account</h2>
            <p className="text-gray-600">
              Create an account and unlock seamless, secure, and limitless cloud storage for all your needs.
            </p>
          </div>

          {error && (
            <div className="bg-red-50 text-red-500 p-3 rounded-lg text-sm">
              {error}
            </div>
          )}

          <form onSubmit={handleSubmit} className="space-y-4">
            <div>
              <input
                type="text"
                name="username"
                value={formData.username}
                onChange={handleChange}
                placeholder="Username"
                className="w-full px-4 py-3 rounded-lg bg-white text-gray-900 border border-gray-300 focus:border-[#2A2F8F] focus:ring-2 focus:ring-[#2A2F8F]/20 outline-none transition-all placeholder-gray-500"
                required
              />
            </div>

            <div>
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                placeholder="Email"
                className="w-full px-4 py-3 rounded-lg bg-white text-gray-900 border border-gray-300 focus:border-[#2A2F8F] focus:ring-2 focus:ring-[#2A2F8F]/20 outline-none transition-all placeholder-gray-500"
                required
              />
            </div>

            <div>
              <input
                type="tel"
                name="phone"
                value={formData.phone}
                onChange={handleChange}
                placeholder="Phone"
                className="w-full px-4 py-3 rounded-lg bg-white text-gray-900 border border-gray-300 focus:border-[#2A2F8F] focus:ring-2 focus:ring-[#2A2F8F]/20 outline-none transition-all placeholder-gray-500"
                required
              />
            </div>

            <div>
              <input
                type="password"
                name="password"
                value={formData.password}
                onChange={handleChange}
                placeholder="Password"
                className="w-full px-4 py-3 rounded-lg bg-white text-gray-900 border border-gray-300 focus:border-[#2A2F8F] focus:ring-2 focus:ring-[#2A2F8F]/20 outline-none transition-all placeholder-gray-500"
                required
              />
            </div>

            <div>
              <input
                type="password"
                name="confirmPassword"
                value={formData.confirmPassword}
                onChange={handleChange}
                placeholder="Confirm Password"
                className="w-full px-4 py-3 rounded-lg bg-white text-gray-900 border border-gray-300 focus:border-[#2A2F8F] focus:ring-2 focus:ring-[#2A2F8F]/20 outline-none transition-all placeholder-gray-500"
                required
              />
            </div>

            <div>
              <input
                type="text"
                name="address"
                value={formData.address}
                onChange={handleChange}
                placeholder="Address"
                className="w-full px-4 py-3 rounded-lg bg-white text-gray-900 border border-gray-300 focus:border-[#2A2F8F] focus:ring-2 focus:ring-[#2A2F8F]/20 outline-none transition-all placeholder-gray-500"
                required
              />
            </div>

            <button
              type="submit"
              disabled={isLoading}
              className="w-full bg-[#2A2F8F] text-white py-3 rounded-lg font-medium hover:bg-[#2A2F8F]/90 transition-all duration-200 disabled:opacity-50"
            >
              {isLoading ? 'Creating Account...' : 'Get Started'}
            </button>

            <div className="text-center">
              <Link to="/login" className="text-gray-600 hover:text-[#2A2F8F] font-medium">
                Already have an account
              </Link>
            </div>
          </form>
        </motion.div>
      </div>
    </div>
  );
};

export default SignUp; 