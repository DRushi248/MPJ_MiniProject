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
            Secure Cloud Storage & Collaboration for Next-Gen Teams
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-lg md:text-xl mb-10 text-white/90"
          >
            Experience seamless cloud storage with CloudFlux, where your files are safe, accessible, and organized. Choose from our flexible plans tailored to meet your needs.
          </motion.p>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="flex items-center justify-center gap-4"
          >
            <Link
              to="/signup"
              className="inline-block bg-white text-[#2A2F8F] px-8 py-4 rounded-lg hover:bg-gray-100 transition-colors duration-200 text-lg font-medium"
            >
              Get Started
            </Link>
            <Link
              to="/pricing"
              className="inline-block bg-transparent text-white border border-white px-8 py-4 rounded-lg hover:bg-white/10 transition-colors duration-200 text-lg font-medium"
            >
              Pricing
            </Link>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Hero; 