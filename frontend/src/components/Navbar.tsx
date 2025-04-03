import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <nav className="bg-[#1a237e] w-full fixed top-0 left-0 right-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <Link to="/" className="flex items-center">
            <span className="text-white text-2xl font-semibold">Cloudrand</span>
          </Link>

          {/* Right Side - Auth Buttons */}
          <div className="flex items-center space-x-6">
            <Link
              to="/login"
              className="text-white hover:text-gray-200 font-medium transition-colors duration-200"
            >
              Log In
            </Link>
            <Link
              to="/signup"
              className="px-5 py-2 bg-white text-[#1a237e] hover:bg-gray-100 rounded-lg font-medium transition-colors duration-200"
            >
              Get Started
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar; 