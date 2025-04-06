import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { FAQ } from './FAQ';
import { Footer } from './Footer';

interface Feature {
  name: string;
  included: boolean;
}

interface PlanProps {
  name: string;
  price: string;
  description: string;
  features: Feature[];
  buttonText: string;
  buttonLink: string;
  isEnterprise?: boolean;
}

const Plan = ({ name, price, description, features, buttonText, buttonLink, isEnterprise }: PlanProps) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
      className="bg-white rounded-2xl p-8 shadow-lg"
    >
      <div className="mb-8">
        <span className="text-sm text-gray-500">{name}</span>
        <div className="mt-2 mb-4">
          {price === 'Custom' ? (
            <h2 className="text-3xl font-bold text-gray-900">{price}</h2>
          ) : (
            <div className="flex items-baseline">
              <span className="text-2xl">₹</span>
              <h2 className="text-3xl font-bold text-gray-900">{price}</h2>
              {price !== 'Free' && <span className="text-gray-500 ml-1">/month</span>}
            </div>
          )}
        </div>
        <p className="text-gray-600 text-sm">{description}</p>
      </div>

      <Link
        to={buttonLink}
        className={`block w-full py-3 px-4 rounded-lg text-center mb-8 transition-colors ${
          isEnterprise
            ? 'bg-[#2A2F8F]/10 text-[#2A2F8F] hover:bg-[#2A2F8F]/20'
            : 'bg-[#6366F1] text-white hover:bg-[#6366F1]/90'
        }`}
      >
        {buttonText}
      </Link>

      <div className="space-y-4">
        <h3 className="font-medium text-gray-900">Features</h3>
        {features.map((feature, index) => (
          <div key={index} className="flex items-center gap-3">
            {feature.included ? (
              <svg className="w-5 h-5 text-[#6366F1]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
              </svg>
            ) : (
              <svg className="w-5 h-5 text-red-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            )}
            <span className={feature.included ? 'text-gray-700' : 'text-gray-400'}>{feature.name}</span>
          </div>
        ))}
      </div>
    </motion.div>
  );
};

const Screenshots = () => {
  return (
    <div className="py-32 bg-gradient-to-b from-[#2A2F8F] to-[#1a1f6f]">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="text-3xl font-bold text-white mb-4"
          >
            Available on Web & Mobile
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-white/80 text-lg"
          >
            Access your files anywhere, anytime
          </motion.p>
        </div>

        <div className="grid md:grid-cols-2 gap-12 items-center max-w-6xl mx-auto">
          {/* Dashboard Interface */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="rounded-2xl overflow-hidden shadow-2xl transform hover:scale-105 transition-transform duration-300"
          >
            <img
              src="/dashboard.png"
              alt="Dashboard Interface"
              className="w-full h-auto rounded-2xl border border-white/10"
            />
            <div className="bg-white/5 backdrop-blur-sm p-4 rounded-b-2xl">
              <h3 className="text-white font-semibold">Web Dashboard</h3>
              <p className="text-white/70 text-sm">Manage your files with our intuitive dashboard</p>
            </div>
          </motion.div>

          {/* Mobile App Interface */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="rounded-2xl overflow-hidden shadow-2xl transform hover:scale-105 transition-transform duration-300"
          >
            <img
              src="/mobile-app.png"
              alt="Mobile App Interface"
              className="w-full h-auto rounded-2xl border border-white/10"
            />
            <div className="bg-white/5 backdrop-blur-sm p-4 rounded-b-2xl">
              <h3 className="text-white font-semibold">Mobile App</h3>
              <p className="text-white/70 text-sm">Take your files on the go with our mobile app</p>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

const PricingPlans = () => {
  const plans = [
    {
      name: 'Basic',
      price: 'Free',
      description: 'A budget-friendly option for individuals and small businesses.',
      features: [
        { name: '10 GB storage', included: true },
        { name: 'Basic file collaboration', included: true },
        { name: 'Mobile app access', included: true },
        { name: 'File synchronization across devices', included: true },
        { name: 'Support for common file types', included: true },
        { name: 'Automatic file backup', included: false },
        { name: 'Advanced security features', included: false }
      ],
      buttonText: 'Get Started',
      buttonLink: '/signup'
    },
    {
      name: 'Professional',
      price: '500',
      description: 'A comprehensive option for businesses with more advanced needs.',
      features: [
        { name: '100 GB storage', included: true },
        { name: 'Advanced file collaboration', included: true },
        { name: 'Mobile app access', included: true },
        { name: 'File synchronization across devices', included: true },
        { name: 'Support for common file types', included: true },
        { name: 'Automatic file backup', included: true },
        { name: 'Advanced security features', included: true },
        { name: 'Purchase additional features', included: true }
      ],
      buttonText: 'Get Started',
      buttonLink: '/signup'
    },
    {
      name: 'Enterprise',
      price: 'Custom',
      description: 'A customizable plan for large organizations with specific needs.',
      features: [
        { name: 'Customizable storage capacity', included: true },
        { name: 'Advanced file collaboration', included: true },
        { name: 'Mobile app access', included: true },
        { name: 'File synchronization across devices', included: true },
        { name: 'Support for common file types', included: true },
        { name: 'Automatic file backup', included: true },
        { name: 'Advanced security features', included: true },
        { name: 'Customizable features', included: true },
        { name: 'Purchase additional features', included: true }
      ],
      buttonText: 'Contact Us',
      buttonLink: '/contact',
      isEnterprise: true
    }
  ];

  return (
    <div className="flex flex-col min-h-screen">
      {/* Pricing Section */}
      <section className="flex-none py-20 bg-[#2A2F8F]">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="text-4xl font-bold text-white mb-4"
            >
              Secure and Reliable Cloud Storage<br />for Your Data
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="text-white/80 text-lg"
            >
              Scalable storage solutions for businesses of all sizes
            </motion.p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
            {plans.map((plan) => (
              <Plan
                key={plan.name}
                {...plan}
              />
            ))}
          </div>
        </div>
      </section>

      {/* Screenshots Section */}
      <section className="flex-none">
        <Screenshots />
      </section>

      {/* FAQ Section */}
      <section className="flex-none bg-white">
        <FAQ />
      </section>

      {/* Footer Section */}
      <section className="flex-none">
        <Footer />
      </section>
    </div>
  );
};

export default PricingPlans; 