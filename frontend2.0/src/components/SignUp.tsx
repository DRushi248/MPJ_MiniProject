import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';

const SignUp = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    username: '',
    email: '',
    password: '',
    confirmPassword: '',
    phone: '',
    verificationCode: '',
    address: ''
  });
  const [error, setError] = useState('');

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

    if (formData.password !== formData.confirmPassword) {
      setError('Passwords do not match');
      return;
    }

    try {
      const response = await fetch(`http://localhost:8083/users/register?confirmPassword=${formData.confirmPassword}`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          ...formData,
          profilePicture: '/default-avatar.jpg'
        })
      });

      const data = await response.json();
      console.log('Registration response:', data); // Debug log

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
        setError(data.message || 'Registration failed');
        console.error('Registration failed:', data);
      }
    } catch (error) {
      console.error('Registration error:', error);
      setError('Registration failed');
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

      {/* Right side - Sign Up Form */}
      <div className="flex items-center justify-center p-8 bg-white">
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
                name="verificationCode"
                value={formData.verificationCode}
                onChange={handleChange}
                placeholder="Verify Phone Number"
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
              className="w-full bg-[#2A2F8F] text-white py-3 rounded-lg font-medium hover:bg-[#2A2F8F]/90 transition-all duration-200"
            >
              Get Started
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