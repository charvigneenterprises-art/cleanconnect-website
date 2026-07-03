import { Metadata } from 'next';
import { motion } from 'framer-motion';
import FAQAccordion from '@/components/FAQAccordion';
import { SITE_CONFIG } from '@/config/constants';

export const metadata: Metadata = {
  title: 'FAQ - Charvigne CleanConnect',
  description: 'Frequently asked questions about Charvigne CleanConnect services.',
};

export default function FAQ() {
  return (
    <>
      {/* Hero */}
      <section className="py-20 bg-gradient-to-b from-primary-50 to-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-center"
          >
            <h1 className="text-5xl md:text-6xl font-poppins font-bold text-primary-900 mb-6">
              Frequently Asked Questions
            </h1>
            <p className="text-xl text-gray-700 max-w-3xl mx-auto font-inter">
              Find answers to common questions about our services.
            </p>
          </motion.div>
        </div>
      </section>

      {/* FAQ Sections */}
      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* For Customers */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="mb-16"
          >
            <h2 className="text-3xl font-poppins font-bold text-primary-900 mb-8">For Customers</h2>
            <FAQAccordion items={SITE_CONFIG.faqCustomer} />
          </motion.div>

          {/* For Cleaners */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
          >
            <h2 className="text-3xl font-poppins font-bold text-primary-900 mb-8">For Cleaners</h2>
            <FAQAccordion items={SITE_CONFIG.faqCleaner} />
          </motion.div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 bg-primary-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-poppins font-bold text-primary-900 mb-6">
            Still Have Questions?
          </h2>
          <p className="text-lg text-gray-700 font-inter mb-8">
            Contact our support team. We respond within 2 hours.
          </p>
          <a
            href="/contact"
            className="inline-block px-8 py-4 bg-gradient-to-r from-primary-600 to-accent-600 text-white font-poppins font-bold rounded-lg hover:shadow-lg transition-all"
          >
            Contact Us
          </a>
        </div>
      </section>
    </>
  );
}
