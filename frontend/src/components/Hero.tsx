import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';

const Hero = () => {
  return (
    <section className="bg-[#2A2F8F] text-white pt-32 pb-24 md:pt-40 md:pb-32">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto">
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-4xl md:text-5xl font-bold mb-8"
          >
            Secure Your Files with CloudRand Today
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-lg md:text-xl mb-10 text-white/90"
          >
            Experience seamless cloud storage with CloudRand, where your files are safe, accessible, and organized. Choose from our flexible plans tailored to meet your needs.
          </motion.p>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            <Link
              to="/signup"
              className="inline-block bg-black text-white px-8 py-4 rounded-lg hover:bg-black/90 transition-colors duration-200 text-lg font-medium"
            >
              Sign Up
            </Link>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Hero; 