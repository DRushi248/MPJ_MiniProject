import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import Hero from './Hero';
import Features from './Features';
import Screenshots from './Screenshots';
import Navbar from './Navbar';
import PricingPlans from './PricingPlans';
import Benefits from './Benefits';

const LandingPage = () => {
  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      <main>
        <Hero />
        <PricingPlans />
        <Benefits />
        <Features />
        <Screenshots />
      </main>
    </div>
  );
};

export default LandingPage; 