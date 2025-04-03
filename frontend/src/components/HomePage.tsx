import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { useState } from 'react';

// Feature card animation variants
const cardVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: (custom: number) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: custom * 0.2,
      duration: 0.5,
    },
  }),
};

const FAQSection = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const faqs = [
    {
      question: "What is subscription pricing or a subscription-based pricing model?",
      answer: "Subscription pricing is a model where customers pay a recurring fee (monthly, yearly, etc.) to access a product or service instead of a one-time purchase. This allows continuous use, regular updates, and support as long as the subscription is active."
    },
    {
      question: "Why adopt a subscription business model?",
      answer: "A subscription business model provides predictable revenue, improves customer retention, and allows users to access scalable services without large upfront costs. It offers flexibility, continuous updates, and enhanced customer experience while enabling businesses to build long-term relationships and optimize resource management."
    },
    {
      question: "How does a subscription management model work?",
      answer: "A subscription management model for a cloud storage service handles the entire lifecycle of user subscriptions, including plan selection, billing, resource allocation, upgrades, downgrades, and cancellations. Users can subscribe to different tiers (e.g., Basic, Premium, Business) and access cloud storage and other features based on their plan. The system automatically manages usage tracking, invoicing, renewals, and scaling options, ensuring a seamless and flexible experience."
    }
  ];

  return (
    <section className="bg-[#1a237e] py-16 px-4 md:px-8">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Frequently asked Questions</h2>
          <p className="text-gray-300">Can't find the answer you're looking for? Reach out to customer support team.</p>
        </div>
        
        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <div
              key={index}
              className="bg-white rounded-lg overflow-hidden transition-all duration-300"
            >
              <button
                onClick={() => setOpenIndex(openIndex === index ? null : index)}
                className="w-full px-6 py-4 text-left flex justify-between items-center hover:bg-gray-50"
              >
                <span className="font-medium text-gray-900">{faq.question}</span>
                <svg
                  className={`w-5 h-5 transform transition-transform ${
                    openIndex === index ? 'rotate-180' : ''
                  }`}
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M19 9l-7 7-7-7"
                  />
                </svg>
              </button>
              <div
                className={`px-6 transition-all duration-300 ease-in-out ${
                  openIndex === index ? 'py-4' : 'h-0 py-0'
                }`}
              >
                <p className="text-gray-600">{faq.answer}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

const Footer = () => {
  return (
    <footer className="bg-[#1a237e] text-white pt-16 pb-8">
      <div className="max-w-6xl mx-auto px-4 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8">
        <div>
          <h3 className="font-semibold mb-4">Quick Links</h3>
          <ul className="space-y-2">
            <li><a href="/" className="text-gray-300 hover:text-white">Home</a></li>
            <li><a href="/features" className="text-gray-300 hover:text-white">Features</a></li>
            <li><a href="/pricing" className="text-gray-300 hover:text-white">Pricing</a></li>
            <li><a href="/about" className="text-gray-300 hover:text-white">About Us</a></li>
            <li><a href="/contact" className="text-gray-300 hover:text-white">Contact Us</a></li>
            <li><a href="/faqs" className="text-gray-300 hover:text-white">FAQs</a></li>
          </ul>
        </div>

        <div>
          <h3 className="font-semibold mb-4">Products</h3>
          <ul className="space-y-2">
            <li><a href="/cloud-storage" className="text-gray-300 hover:text-white">Cloud Storage</a></li>
            <li><a href="/file-sharing" className="text-gray-300 hover:text-white">File Sharing</a></li>
            <li><a href="/data-backup" className="text-gray-300 hover:text-white">Data Backup</a></li>
            <li><a href="/collaboration" className="text-gray-300 hover:text-white">Collaboration Tools</a></li>
            <li><a href="/security" className="text-gray-300 hover:text-white">Security & Encryption</a></li>
            <li><a href="/api" className="text-gray-300 hover:text-white">APIs & Integrations</a></li>
          </ul>
        </div>

        <div>
          <h3 className="font-semibold mb-4">Business</h3>
          <ul className="space-y-2">
            <li><a href="/small" className="text-gray-300 hover:text-white">Small</a></li>
            <li><a href="/medium" className="text-gray-300 hover:text-white">Medium</a></li>
            <li><a href="/large" className="text-gray-300 hover:text-white">Large</a></li>
          </ul>
        </div>

        <div>
          <h3 className="font-semibold mb-4">Resources</h3>
          <ul className="space-y-2">
            <li><a href="/partner" className="text-gray-300 hover:text-white">Find a Partner</a></li>
            <li><a href="/program" className="text-gray-300 hover:text-white">Join Our Program</a></li>
            <li><a href="/docs" className="text-gray-300 hover:text-white">Documentation</a></li>
            <li><a href="/blog" className="text-gray-300 hover:text-white">Blog & Insights</a></li>
          </ul>
        </div>

        <div>
          <h3 className="font-semibold mb-4">Legal</h3>
          <ul className="space-y-2">
            <li><a href="/terms" className="text-gray-300 hover:text-white">Terms</a></li>
            <li><a href="/privacy" className="text-gray-300 hover:text-white">Privacy Policy</a></li>
            <li><a href="/cookie" className="text-gray-300 hover:text-white">Cookie Policy</a></li>
            <li><a href="/security-compliance" className="text-gray-300 hover:text-white">Security and compliance</a></li>
          </ul>
        </div>
      </div>

      <div className="max-w-6xl mx-auto px-4 mt-16 pt-8 border-t border-gray-700">
        <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
          <div className="flex items-center space-x-4">
            <p>Join thousands of users securing their data with us. Start today!</p>
            <div className="flex items-center">
              <span className="mr-2">Get In Touch</span>
              <a href="mailto:cloudrand@gmail.com" className="text-gray-300 hover:text-white">cloudrand@gmail.com</a>
            </div>
          </div>
          
          <div className="flex space-x-4">
            <a href="#" className="text-gray-300 hover:text-white">
              <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                <path d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z"/>
              </svg>
            </a>
            <a href="#" className="text-gray-300 hover:text-white">
              <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                <path d="M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012.8 9.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84"/>
              </svg>
            </a>
            <a href="#" className="text-gray-300 hover:text-white">
              <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
              </svg>
            </a>
            <a href="#" className="text-gray-300 hover:text-white">
              <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                <path d="M12.315 2c2.43 0 2.784.013 3.808.06 1.064.049 1.791.218 2.427.465a4.902 4.902 0 011.772 1.153 4.902 4.902 0 011.153 1.772c.247.636.416 1.363.465 2.427.048 1.067.06 1.407.06 4.123v.08c0 2.643-.012 2.987-.06 4.043-.049 1.064-.218 1.791-.465 2.427a4.902 4.902 0 01-1.153 1.772 4.902 4.902 0 01-1.772 1.153c-.636.247-1.363.416-2.427.465-1.067.048-1.407.06-4.123.06h-.08c-2.643 0-2.987-.012-4.043-.06-1.064-.049-1.791-.218-2.427-.465a4.902 4.902 0 01-1.772-1.153 4.902 4.902 0 01-1.153-1.772c-.247-.636-.416-1.363-.465-2.427-.047-1.024-.06-1.379-.06-3.808v-.63c0-2.43.013-2.784.06-3.808.049-1.064.218-1.791.465-2.427a4.902 4.902 0 011.153-1.772A4.902 4.902 0 015.45 2.525c.636-.247 1.363-.416 2.427-.465C8.901 2.013 9.256 2 11.685 2h.63zm-.081 1.802h-.468c-2.456 0-2.784.011-3.807.058-.975.045-1.504.207-1.857.344-.467.182-.8.398-1.15.748-.35.35-.566.683-.748 1.15-.137.353-.3.882-.344 1.857-.047 1.023-.058 1.351-.058 3.807v.468c0 2.456.011 2.784.058 3.807.045.975.207 1.504.344 1.857.182.466.399.8.748 1.15.35.35.683.566 1.15.748.353.137.882.3 1.857.344 1.054.048 1.37.058 4.041.058h.08c2.597 0 2.917-.01 3.96-.058.976-.045 1.505-.207 1.858-.344.466-.182.8-.398 1.15-.748.35-.35.566-.683.748-1.15.137-.353.3-.882.344-1.857.048-1.055.058-1.37.058-4.041v-.08c0-2.597-.01-2.917-.058-3.96-.045-.976-.207-1.505-.344-1.858a3.097 3.097 0 00-.748-1.15 3.098 3.098 0 00-1.15-.748c-.353-.137-.882-.3-1.857-.344-1.023-.047-1.351-.058-3.807-.058zM12 6.865a5.135 5.135 0 110 10.27 5.135 5.135 0 010-10.27zm0 1.802a3.333 3.333 0 100 6.666 3.333 3.333 0 000-6.666zm5.338-3.205a1.2 1.2 0 110 2.4 1.2 1.2 0 010-2.4z"/>
              </svg>
            </a>
          </div>
        </div>
        
        <div className="text-center mt-8 text-sm text-gray-400">
          © 2025 Cloudrand . Secure. Reliable. Scalable.
        </div>
      </div>
    </footer>
  );
};

const HomePage = () => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-white to-gray-50">
      {/* Main Content */}
      <main className="relative pt-20 lg:pt-28">
        {/* Hero Section */}
        <section className="relative overflow-hidden px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <div className="relative z-10 py-8 sm:py-16 md:py-20 lg:py-28 lg:max-w-2xl lg:w-full">
              <div className="relative text-left">
                <motion.h1 
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6 }}
                  className="text-4xl tracking-tight font-extrabold text-gray-900 sm:text-5xl md:text-6xl lg:text-5xl xl:text-6xl"
                >
                  <span className="block">Secure Cloud Storage</span>
                  <span className="block text-[#2A2F8F]">for Next-Gen Teams</span>
                </motion.h1>
                <motion.p
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.2 }}
                  className="mt-6 text-base text-gray-500 sm:text-lg md:text-xl max-w-md"
                >
                  Store, share, and collaborate on files with military-grade encryption. Access your data anytime, anywhere, with guaranteed 99.9% uptime.
                </motion.p>
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.4 }}
                  className="mt-8 sm:mt-10 flex flex-col sm:flex-row gap-4 sm:gap-6"
                >
                  <Link
                    to="/signup"
                    className="inline-flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-lg text-white bg-[#2A2F8F] hover:bg-[#232873] transition-all duration-200 shadow-sm hover:shadow-lg"
                  >
                    Start Free Trial
                  </Link>
                  <Link
                    to="/demo"
                    className="inline-flex items-center justify-center px-8 py-3 border border-gray-200 text-base font-medium rounded-lg text-gray-700 bg-white hover:bg-gray-50 transition-all duration-200"
                  >
                    Live Demo
                  </Link>
                </motion.div>
                
                {/* Trust Indicators */}
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ duration: 0.8, delay: 0.6 }}
                  className="mt-12 flex flex-col sm:flex-row items-start sm:items-center gap-6"
                >
                  <div className="flex items-center gap-2">
                    <svg className="w-5 h-5 text-green-500" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                    </svg>
                    <span className="text-sm text-gray-500">SOC 2 Type II Certified</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <svg className="w-5 h-5 text-green-500" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                    </svg>
                    <span className="text-sm text-gray-500">GDPR Compliant</span>
                  </div>
                </motion.div>
              </div>
            </div>
          </div>

          {/* Hero Image Section */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="relative lg:absolute lg:inset-y-0 lg:right-0 lg:w-1/2 mt-16 lg:mt-0"
          >
            <div className="relative h-64 sm:h-72 md:h-96 lg:h-full lg:w-full">
              <img
                src="/dashboard-interface.png"
                alt="CloudRand Dashboard Interface"
                className="absolute inset-0 w-full h-full object-cover rounded-lg shadow-xl"
              />
              
              {/* Floating UI Elements */}
              <motion.div
                animate={{
                  y: [0, -12, 0],
                }}
                transition={{
                  duration: 4,
                  repeat: Infinity,
                  repeatType: "reverse",
                }}
                className="absolute -left-6 top-1/4 hidden lg:block"
              >
                <img
                  src="/share-ui.png"
                  alt="Share Interface"
                  className="w-48 rounded-lg shadow-lg"
                />
              </motion.div>

              <motion.div
                animate={{
                  y: [0, 12, 0],
                }}
                transition={{
                  duration: 4,
                  repeat: Infinity,
                  repeatType: "reverse",
                  delay: 1,
                }}
                className="absolute -right-6 bottom-1/4 hidden lg:block"
              >
                <img
                  src="/folder-ui.png"
                  alt="Folder Interface"
                  className="w-48 rounded-lg shadow-lg"
                />
              </motion.div>
            </div>
          </motion.div>

          {/* Background Decorations */}
          <div className="absolute inset-0 -z-10 overflow-hidden">
            <div className="absolute top-1/4 left-1/4 w-48 h-48 bg-[#2A2F8F]/5 rounded-full blur-3xl"></div>
            <div className="absolute bottom-1/4 right-1/4 w-64 h-64 bg-cyan-500/5 rounded-full blur-3xl"></div>
          </div>
        </section>

        {/* Features Section */}
        <section className="relative py-16 sm:py-24 px-4 sm:px-6 lg:px-8" id="features">
          <div className="max-w-7xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="text-center mb-16"
            >
              <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
                Blazing speed. Enhanced privacy. Smarter pricing
              </h2>
              <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                You can continue using traditional cloud storage, but CloudRand offers a smarter, more secure, and efficient way to store and share your files—built for the future
              </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {/* Secured Feature */}
              <motion.div
                variants={cardVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                custom={0}
                className="bg-[#1a237e] rounded-2xl p-8 text-white transform transition-transform hover:scale-105"
              >
                <div className="mb-6">
                  <div className="w-12 h-12 bg-white/10 rounded-lg flex items-center justify-center mb-4">
                    <svg className="w-6 h-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
                    </svg>
                  </div>
                  <h3 className="text-xl font-semibold mb-2">Secured</h3>
                  <p className="text-white/80">
                    Built with security at its core, CloudRand protects your files with advanced encryption, ensuring safe storage and sharing at all times.
                  </p>
                </div>
              </motion.div>

              {/* Fast Feature */}
              <motion.div
                variants={cardVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                custom={1}
                className="bg-[#1a237e] rounded-2xl p-8 text-white transform transition-transform hover:scale-105"
              >
                <div className="mb-6">
                  <div className="w-12 h-12 bg-white/10 rounded-lg flex items-center justify-center mb-4">
                    <svg className="w-6 h-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                    </svg>
                  </div>
                  <h3 className="text-xl font-semibold mb-2">Fast</h3>
                  <p className="text-white/80">
                    Experience ultra-fast cloud storage with optimized upload speeds, instant file access, and seamless real-time syncing and sharing between devices.
                  </p>
                </div>
              </motion.div>

              {/* Automatic Backups Feature */}
              <motion.div
                variants={cardVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                custom={2}
                className="bg-[#1a237e] rounded-2xl p-8 text-white transform transition-transform hover:scale-105"
              >
                <div className="mb-6">
                  <div className="w-12 h-12 bg-white/10 rounded-lg flex items-center justify-center mb-4">
                    <svg className="w-6 h-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-8l-4-4m0 0L8 8m4-4v12" />
                    </svg>
                  </div>
                  <h3 className="text-xl font-semibold mb-2">Automatic Backups</h3>
                  <p className="text-white/80">
                    With automatic file backups, your data is always safe and up-to-date. Never worry about losing important files again.
                  </p>
                </div>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Benefits Section */}
        <section className="relative py-16 sm:py-24 px-4 sm:px-6 lg:px-8" id="benefits">
          <div className="max-w-7xl mx-auto">
            <div className="lg:grid lg:grid-cols-2 lg:gap-16 items-center">
              {/* Left Column - Sign Up */}
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6 }}
                viewport={{ once: true }}
                className="mb-12 lg:mb-0"
              >
                <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-6">
                  Secure Your Files with CloudRand Today
                </h2>
                <p className="text-lg text-gray-600 mb-8">
                  Experience seamless cloud storage with CloudRand, where your files are safe, accessible, and organized. Choose from our flexible plans tailored to meet your needs.
                </p>
                <Link
                  to="/signup"
                  className="inline-flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-lg text-white bg-[#1a237e] hover:bg-[#151b60] transition-all duration-200 shadow-sm hover:shadow-lg"
                >
                  Sign Up
                </Link>
              </motion.div>

              {/* Right Column - Plans */}
              <motion.div
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6 }}
                viewport={{ once: true }}
                className="bg-white rounded-2xl shadow-xl p-8"
              >
                <h3 className="text-2xl font-bold text-gray-900 mb-6">
                  Choose Your Perfect Cloud Storage Plan
                </h3>
                <p className="text-gray-600 mb-8">
                  Discover the ideal storage solution for your needs. Our plans offer flexibility, security, and scalability.
                </p>
                
                {/* Plan Types */}
                <div className="space-y-6">
                  <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.4, delay: 0.2 }}
                    viewport={{ once: true }}
                    className="flex items-start gap-4"
                  >
                    <div className="w-8 h-8 rounded-full bg-[#1a237e]/10 flex items-center justify-center flex-shrink-0 mt-1">
                      <svg className="w-4 h-4 text-[#1a237e]" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                      </svg>
                    </div>
                    <div>
                      <h4 className="text-lg font-semibold text-gray-900">Basic</h4>
                      <p className="text-gray-600">Ideal for personal use and small files.</p>
                    </div>
                  </motion.div>

                  <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.4, delay: 0.3 }}
                    viewport={{ once: true }}
                    className="flex items-start gap-4"
                  >
                    <div className="w-8 h-8 rounded-full bg-[#1a237e]/10 flex items-center justify-center flex-shrink-0 mt-1">
                      <svg className="w-4 h-4 text-[#1a237e]" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                      </svg>
                    </div>
                    <div>
                      <h4 className="text-lg font-semibold text-gray-900">Premium</h4>
                      <p className="text-gray-600">Enhanced features for power users and teams.</p>
                    </div>
                  </motion.div>

                  <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.4, delay: 0.4 }}
                    viewport={{ once: true }}
                    className="flex items-start gap-4"
                  >
                    <div className="w-8 h-8 rounded-full bg-[#1a237e]/10 flex items-center justify-center flex-shrink-0 mt-1">
                      <svg className="w-4 h-4 text-[#1a237e]" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                      </svg>
                    </div>
                    <div>
                      <h4 className="text-lg font-semibold text-gray-900">Business</h4>
                      <p className="text-gray-600">Comprehensive solutions for organizations and enterprises.</p>
                    </div>
                  </motion.div>
                </div>
              </motion.div>
            </div>

            {/* Additional Benefits */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="mt-20 text-center"
            >
              <h3 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-6">
                Discover the Benefits of CloudRand Storage
              </h3>
              <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                CloudRand offers secure storage solutions that keep your files safe. Enjoy easy access from anywhere and collaborate seamlessly with your team.
              </p>
            </motion.div>
          </div>
        </section>

        {/* Security Features Section */}
        <section className="relative py-16 sm:py-24 px-4 sm:px-6 lg:px-8 bg-gray-50">
          <div className="max-w-7xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-20">
              {/* Unmatched Security */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                viewport={{ once: true }}
                className="text-left"
              >
                <h3 className="text-2xl font-bold text-gray-900 mb-4">
                  Unmatched Security for Your Valuable Data
                </h3>
                <p className="text-gray-600">
                  State-of-the-art encryption and security measures protect your sensitive information at all times.
                </p>
              </motion.div>

              {/* Security for Your Data */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.2 }}
                viewport={{ once: true }}
                className="text-left"
              >
                <h3 className="text-2xl font-bold text-gray-900 mb-4">
                  Unmatched Security for Your Valuable Data
                </h3>
                <p className="text-gray-600">
                  Advanced encryption protocols and secure infrastructure ensure your data remains protected.
                </p>
              </motion.div>

              {/* Seamless Collaboration */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.4 }}
                viewport={{ once: true }}
                className="text-left"
              >
                <h3 className="text-2xl font-bold text-gray-900 mb-4">
                  Seamless Collaboration with Your Team
                </h3>
                <p className="text-gray-600">
                  Work together efficiently with real-time updates and seamless file sharing capabilities.
                </p>
              </motion.div>
            </div>

            {/* Cloud Storage Power Section */}
            <div className="text-center max-w-3xl mx-auto mb-16">
              <motion.h2
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                viewport={{ once: true }}
                className="text-3xl sm:text-4xl font-bold text-gray-900 mb-6"
              >
                Unlock the Power of Cloud Storage Today
              </motion.h2>
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                viewport={{ once: true }}
                className="text-lg text-gray-600 mb-12"
              >
                Experience seamless access to your files anytime, anywhere. Cloud storage enhances collaboration and ensures data security for both personal and business needs.
              </motion.p>

              {/* Feature List */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8 text-left mb-16">
                <motion.div
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.5 }}
                  viewport={{ once: true }}
                  className="flex items-start gap-4"
                >
                  <div className="w-8 h-8 rounded-full bg-[#1a237e]/10 flex items-center justify-center flex-shrink-0 mt-1">
                    <svg className="w-4 h-4 text-[#1a237e]" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                  </div>
                  <div>
                    <h4 className="text-lg font-semibold text-gray-900">Accessibility</h4>
                    <p className="text-gray-600">Access your files from any device, making work and personal projects easier.</p>
                  </div>
                </motion.div>

                <motion.div
                  initial={{ opacity: 0, x: 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.5, delay: 0.2 }}
                  viewport={{ once: true }}
                  className="flex items-start gap-4"
                >
                  <div className="w-8 h-8 rounded-full bg-[#1a237e]/10 flex items-center justify-center flex-shrink-0 mt-1">
                    <svg className="w-4 h-4 text-[#1a237e]" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                  </div>
                  <div>
                    <h4 className="text-lg font-semibold text-gray-900">Security</h4>
                    <p className="text-gray-600">Protect your data with advanced encryption and secure backups.</p>
                  </div>
                </motion.div>
              </div>

              {/* Free Trial Section */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                viewport={{ once: true }}
                className="bg-white rounded-2xl shadow-xl p-8 text-left"
              >
                <h3 className="text-2xl font-bold text-gray-900 mb-4">
                  Start Your Free Trial Today
                </h3>
                <p className="text-gray-600 mb-6">
                  Experience seamless cloud storage with our free trial. No credit card required, just sign up!
                </p>
                <Link
                  to="/signup"
                  className="inline-flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-lg text-white bg-[#1a237e] hover:bg-[#151b60] transition-all duration-200 shadow-sm hover:shadow-lg"
                >
                  Start Free Trial
                </Link>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Pricing Section */}
        <section className="relative py-16 sm:py-24 px-4 sm:px-6 lg:px-8 bg-[#1a237e] text-white" id="pricing">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl sm:text-4xl font-bold mb-4">
                Secure and Reliable Cloud Storage for Your Data
              </h2>
              <p className="text-lg text-white/80">
                Scalable storage solutions for businesses of all sizes
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {/* Basic Plan */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                viewport={{ once: true }}
                className="bg-white rounded-2xl p-6 text-gray-900"
              >
                <h3 className="text-xl font-semibold mb-2">Basic</h3>
                <div className="text-3xl font-bold mb-4">Free</div>
                <p className="text-gray-600 mb-6">A budget-friendly option for individuals and small businesses.</p>
                <button className="w-full bg-[#7c4dff] text-white py-2 rounded-lg hover:bg-[#6c3fff] transition-colors mb-8">
                  Get Started
                </button>
                <div className="space-y-3">
                  <div className="flex items-center gap-2">
                    <svg className="w-5 h-5 text-[#7c4dff]" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" />
                    </svg>
                    <span>10 GB storage</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <svg className="w-5 h-5 text-[#7c4dff]" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" />
                    </svg>
                    <span>Basic file collaboration</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <svg className="w-5 h-5 text-[#7c4dff]" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" />
                    </svg>
                    <span>Mobile app access</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <svg className="w-5 h-5 text-[#7c4dff]" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" />
                    </svg>
                    <span>File synchronization across devices</span>
                  </div>
                </div>
              </motion.div>

              {/* Professional Plan */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.2 }}
                viewport={{ once: true }}
                className="bg-white rounded-2xl p-6 text-gray-900"
              >
                <h3 className="text-xl font-semibold mb-2">Professional</h3>
                <div className="text-3xl font-bold mb-4">₹500 <span className="text-lg font-normal text-gray-600">/month</span></div>
                <p className="text-gray-600 mb-6">A comprehensive option for businesses with more advanced needs.</p>
                <button className="w-full bg-[#7c4dff] text-white py-2 rounded-lg hover:bg-[#6c3fff] transition-colors mb-8">
                  Get Started
                </button>
                <div className="space-y-3">
                  <div className="flex items-center gap-2">
                    <svg className="w-5 h-5 text-[#7c4dff]" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" />
                    </svg>
                    <span>100 GB storage</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <svg className="w-5 h-5 text-[#7c4dff]" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" />
                    </svg>
                    <span>Advanced file collaboration</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <svg className="w-5 h-5 text-[#7c4dff]" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" />
                    </svg>
                    <span>Advanced security features</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <svg className="w-5 h-5 text-[#7c4dff]" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" />
                    </svg>
                    <span>Automatic file backup</span>
                  </div>
                </div>
              </motion.div>

              {/* Enterprise Plan */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.4 }}
                viewport={{ once: true }}
                className="bg-white rounded-2xl p-6 text-gray-900"
              >
                <h3 className="text-xl font-semibold mb-2">Enterprise</h3>
                <div className="text-3xl font-bold mb-4">Custom</div>
                <p className="text-gray-600 mb-6">A customizable plan for large organizations with specific needs.</p>
                <button className="w-full bg-[#7c4dff] text-white py-2 rounded-lg hover:bg-[#6c3fff] transition-colors mb-8">
                  Contact Us
                </button>
                <div className="space-y-3">
                  <div className="flex items-center gap-2">
                    <svg className="w-5 h-5 text-[#7c4dff]" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" />
                    </svg>
                    <span>Customizable storage capacity</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <svg className="w-5 h-5 text-[#7c4dff]" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" />
                    </svg>
                    <span>Advanced security features</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <svg className="w-5 h-5 text-[#7c4dff]" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" />
                    </svg>
                    <span>Priority support</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <svg className="w-5 h-5 text-[#7c4dff]" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" />
                    </svg>
                    <span>Custom integration options</span>
                  </div>
                </div>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Placeholder sections for the rest of the content */}
        <section className="relative" id="faq">
          {/* FAQ content will be added here */}
        </section>

        <section className="relative" id="cta">
          {/* CTA content will be added here */}
        </section>

        <FAQSection />
        <Footer />
      </main>
    </div>
  );
};

export default HomePage; 