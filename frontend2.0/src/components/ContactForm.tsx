import { useState } from 'react';
import { motion } from 'framer-motion';
import { X } from 'lucide-react'; // You can use any icon library or an SVG

const ContactForm = () => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        company: '',
        message: '',
        phone: '',
        serviceType: 'general'
    });

    const [isSubmitting, setIsSubmitting] = useState(false);
    const [submitStatus, setSubmitStatus] = useState<{ type: 'success' | 'error' | null; message: string }>({ type: null, message: '' });

    const [isOpen, setIsOpen] = useState(true); // 👈 Toggle visibility

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
        const { name, value } = e.target;
        setFormData(prev => ({
            ...prev,
            [name]: value
        }));
    };

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setIsSubmitting(true);
        setSubmitStatus({ type: null, message: '' });

        try {
            await new Promise(resolve => setTimeout(resolve, 1000));

            setSubmitStatus({
                type: 'success',
                message: 'Thank you for your inquiry! Our team will get back to you.'
            });
            setFormData({
                name: '',
                email: '',
                company: '',
                message: '',
                phone: '',
                serviceType: 'general'
            });
        } catch (error) {
            setSubmitStatus({
                type: 'error',
                message: 'Something went wrong. Please try again later.'
            });
        } finally {
            setIsSubmitting(false);
        }
    };

    if (!isOpen) return null;

    return (
        <div className="fixed inset-0 z-50 bg-black/30 flex items-center justify-center px-4">
            <div className="relative bg-white rounded-2xl p-6 w-full max-w-lg max-h-[90vh] overflow-y-auto shadow-2xl">
                {/* ❌ Close button */}
                <button
                    onClick={() => setIsOpen(false)}
                    className="absolute top-3 right-3 text-gray-500 hover:text-gray-800 transition"
                    aria-label="Close form"
                >
                    <X className="w-5 h-5" />
                </button>

                <div className="text-center mb-6">
                    <h2 className="text-2xl font-bold text-[#2A2F8F] mb-2">Get in Touch</h2>
                    <p className="text-gray-600 text-sm">
                        Have questions about our Enterprise plan? Drop us a message and we'll get back to you.
                    </p>
                </div>

                {submitStatus.type && (
                    <motion.div
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        className={`p-3 rounded-lg mb-4 text-sm ${submitStatus.type === 'success'
                            ? 'bg-green-50 text-green-700'
                            : 'bg-red-50 text-red-700'
                            }`}
                    >
                        {submitStatus.message}
                    </motion.div>
                )}

                <form onSubmit={handleSubmit} className="space-y-4">
                    <div className="grid grid-cols-1 gap-4">
                        {['name', 'email', 'company', 'phone'].map((field) => (
                            <div key={field}>
                                <label htmlFor={field} className="block text-sm font-medium text-gray-700 mb-1 capitalize">
                                    {field === 'phone' ? 'Phone Number' : field === 'company' ? 'Company Name' : `Your ${field}`}
                                </label>
                                <input
                                    type={field === 'email' ? 'email' : field === 'phone' ? 'tel' : 'text'}
                                    id={field}
                                    name={field}
                                    value={(formData as any)[field]}
                                    onChange={handleChange}
                                    className="w-full px-3 py-2 rounded-lg border border-gray-300 bg-white focus:border-[#2A2F8F] focus:ring-2 focus:ring-[#2A2F8F]/20 outline-none transition-all text-sm"
                                    required
                                />
                            </div>
                        ))}

                        <div>
                            <label htmlFor="serviceType" className="block text-sm font-medium text-gray-700 mb-1">
                                Service Type
                            </label>
                            <select
                                id="serviceType"
                                name="serviceType"
                                value={formData.serviceType}
                                onChange={handleChange}
                                className="w-full px-3 py-2 rounded-lg border border-gray-300 bg-white focus:border-[#2A2F8F] focus:ring-2 focus:ring-[#2A2F8F]/20 outline-none transition-all text-sm"
                                required
                            >
                                <option value="general">General Inquiry</option>
                                <option value="enterprise">Enterprise Plan</option>
                                <option value="support">Technical Support</option>
                                <option value="partnership">Partnership</option>
                            </select>
                        </div>

                        <div>
                            <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">
                                Your Message
                            </label>
                            <textarea
                                id="message"
                                name="message"
                                value={formData.message}
                                onChange={handleChange}
                                rows={3}
                                className="w-full px-3 py-2 rounded-lg border border-gray-300 bg-white focus:border-[#2A2F8F] focus:ring-2 focus:ring-[#2A2F8F]/20 outline-none transition-all text-sm"
                                placeholder="Tell us about your requirements and any questions you have..."
                                required
                            />
                        </div>
                    </div>

                    <div className="flex justify-end">
                        <button
                            type="submit"
                            disabled={isSubmitting}
                            className="bg-[#2A2F8F] text-white px-6 py-2 rounded-lg text-sm font-medium hover:bg-[#2A2F8F]/90 transition-all duration-200 disabled:opacity-50 disabled:cursor-not-allowed"
                        >
                            {isSubmitting ? 'Sending...' : 'Send Message'}
                        </button>
                    </div>
                </form>

                <div className="mt-8 pt-8 border-t border-gray-200">
                    <h3 className="text-lg font-semibold text-gray-900 mb-4">Our Response Time</h3>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                        <div className="bg-gray-50 p-4 rounded-lg">
                            <h4 className="font-medium text-gray-900">General Inquiries</h4>
                            <p className="text-gray-600">Within 24 hours</p>
                        </div>
                        <div className="bg-gray-50 p-4 rounded-lg">
                            <h4 className="font-medium text-gray-900">Technical Support</h4>
                            <p className="text-gray-600">Within 4 hours</p>
                        </div>
                        <div className="bg-gray-50 p-4 rounded-lg">
                            <h4 className="font-medium text-gray-900">Enterprise Plans</h4>
                            <p className="text-gray-600">Within 2 hours</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ContactForm;
