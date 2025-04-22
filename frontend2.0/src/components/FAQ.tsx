import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

interface FAQItem {
  question: string;
  answer: string;
}

export const FAQ = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const faqItems: FAQItem[] = [
    {
      question: 'What is subscription pricing or a subscription-based pricing model?',
      answer: 'Subscription pricing is a model where customers pay a recurring fee (monthly, yearly, etc.) to access a product or service instead of a one-time purchase. This allows continuous use, regular updates, and support as long as the subscription is active.'
    },
    {
      question: 'Why adopt a subscription business model?',
      answer: 'A subscription business model provides predictable revenue, improves customer retention, and allows users to access scalable services without large upfront costs. It offers flexibility, continuous updates, and enhanced customer experience while enabling businesses to build long-term relationships and optimize resource management.'
    },
    {
      question: 'How does a subscription management model work?',
      answer: 'A subscription management model for a cloud storage service handles the entire lifecycle of user subscriptions, including plan selection, billing, resource allocation, upgrades, downgrades, and cancellations. Users can subscribe to different tiers (e.g., Basic, Premium, Business) and access cloud storage and other features based on their plan. The system automatically manages usage tracking, invoicing, renewals, and scaling options, ensuring a seamless and flexible experience.'
    }
  ];

  return (
    <div className="w-full border-t border-white/10">
      <div className="container mx-auto px-4 py-20">
        <div className="text-center mb-12">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="text-3xl md:text-4xl font-bold text-black mb-4"
          >
            Frequently asked Questions
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-black/80 text-base md:text-lg max-w-2xl mx-auto"
          >
            Can't find the answer you're looking for? Reach out to customer support team.
          </motion.p>
        </div>

        <div className="max-w-3xl mx-auto space-y-4">
          {faqItems.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-white rounded-lg overflow-hidden shadow-sm"
            >
              <button
                onClick={() => setOpenIndex(openIndex === index ? null : index)}
                className="w-full px-6 py-4 text-left flex items-center justify-between hover:bg-gray-50 transition-colors"
              >
                <span className="font-medium text-gray-900">{item.question}</span>
                <svg
                  className={`w-5 h-5 text-gray-500 transition-transform duration-300 ${openIndex === index ? 'rotate-180' : ''
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
              <AnimatePresence>
                {openIndex === index && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: 'auto', opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.3 }}
                    className="border-t border-gray-100"
                  >
                    <p className="px-6 py-4 text-gray-600 text-sm md:text-base">
                      {item.answer}
                    </p>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default FAQ; 