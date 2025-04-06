import { motion } from 'framer-motion';

const Benefits = () => {
  return (
    <section className="py-16 md:py-24 bg-gray-50">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="max-w-3xl mx-auto mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
            Discover the Benefits of CloudFlux Storage
          </h2>
          <p className="text-gray-600 text-lg">
            CloudFlux offers secure storage solutions that keep your files safe. Enjoy easy access from anywhere and collaborate seamlessly with your team.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-12 max-w-5xl mx-auto">
          {[
            {
              title: 'Unmatched Security for Your Valuable Data',
              description: 'Protect your data with advanced encryption and secure backups.',
              icon: (
                <svg className="w-12 h-12 text-[#2A2F8F]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
                </svg>
              )
            },
            {
              title: 'Accessibility',
              description: 'Access your files from any device, making work and personal projects easier.',
              icon: (
                <svg className="w-12 h-12 text-[#2A2F8F]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 15a4 4 0 004 4h9a5 5 0 10-.1-9.999 5.002 5.002 0 10-9.78 2.096A4.001 4.001 0 003 15z" />
                </svg>
              )
            },
            {
              title: 'Seamless Collaboration with Your Team',
              description: 'Work together efficiently with real-time collaboration tools and easy file sharing.',
              icon: (
                <svg className="w-12 h-12 text-[#2A2F8F]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z" />
                </svg>
              )
            }
          ].map((benefit, index) => (
            <motion.div
              key={benefit.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              className="text-center"
            >
              <div className="flex justify-center mb-6">
                {benefit.icon}
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">{benefit.title}</h3>
              <p className="text-gray-600">{benefit.description}</p>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="max-w-3xl mx-auto mt-16 text-center"
        >
          <h3 className="text-2xl font-bold text-gray-900 mb-6">
            Start Your Free Trial Today
          </h3>
          <p className="text-gray-600 mb-8">
            Experience seamless cloud storage with our free trial.<br />
            No credit card required, just sign up!
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default Benefits; 