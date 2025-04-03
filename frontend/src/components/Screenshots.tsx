import { motion } from 'framer-motion';

const Screenshots = () => {
  return (
    <section className="relative w-full py-16 overflow-hidden bg-gradient-to-b from-[#F8F9FF] to-white">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-[#2A2F8F] mb-4">
            Powerful Features for Your Business
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Experience our intuitive dashboard and mobile app designed to streamline your workflow
            and boost productivity.
          </p>
        </motion.div>

        <div className="relative">
          {/* Background decorative elements */}
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="w-[600px] h-[600px] bg-[#2A2F8F]/5 rounded-full blur-3xl" />
          </div>

          <div className="relative grid md:grid-cols-2 gap-8 items-center">
            {/* Dashboard Screenshot */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="rounded-2xl shadow-2xl overflow-hidden"
            >
              <img
                src="/dashboard.png"
                alt="Dashboard Interface"
                className="w-full h-auto"
              />
            </motion.div>

            {/* Mobile App Screenshot */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="rounded-2xl shadow-2xl overflow-hidden"
            >
              <img
                src="/mobile-app.png"
                alt="Mobile App Interface"
                className="w-full h-auto"
              />
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Screenshots; 