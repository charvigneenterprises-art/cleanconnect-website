import { Metadata } from 'next';
import { motion } from 'framer-motion';
import Link from 'next/link';
import { SITE_CONFIG } from '@/config/constants';

export const metadata: Metadata = {
  title: 'Services - Charvigne CleanConnect',
  description: 'Explore our range of professional cleaning services in Nigeria.',
};

export default function Services() {
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
              Our Services
            </h1>
            <p className="text-xl text-gray-700 max-w-3xl mx-auto font-inter">
              Professional cleaning solutions tailored to your needs.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="space-y-16">
            {SITE_CONFIG.services.map((service, index) => (
              <motion.div
                key={service.id}
                id={service.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center"
              >
                {/* Content */}
                <div className={index % 2 === 1 ? 'md:order-2' : ''}>
                  <h2 className="text-4xl font-poppins font-bold text-primary-900 mb-4">
                    {service.title}
                  </h2>
                  <p className="text-lg text-gray-700 font-inter mb-6 leading-relaxed">
                    {service.description}
                  </p>

                  {/* Features */}
                  <div className="mb-8">
                    <h3 className="text-xl font-poppins font-bold text-primary-900 mb-4">What's Included</h3>
                    <ul className="space-y-3">
                      {service.features.map((feature, i) => (
                        <li key={i} className="flex items-start space-x-3">
                          <span className="text-accent-600 font-bold text-lg">✓</span>
                          <span className="text-gray-700 font-inter">{feature}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Pricing */}
                  <div className="mb-8 p-6 bg-primary-50 rounded-lg">
                    <p className="text-sm text-gray-600 font-inter mb-2">Starting from</p>
                    <p className="text-3xl font-poppins font-bold text-primary-900 mb-4">
                      {service.startingPrice}
                    </p>
                    <p className="text-gray-700 font-inter text-sm">Pricing varies based on scope and frequency</p>
                  </div>

                  {/* CTA */}
                  <a
                    href="https://wa.me/234816013232?text=Hello%20I%20would%20like%20to%20book%20a%20cleaning%20service%20with%20Charvigne%20CleanConnect"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-block px-8 py-3 bg-gradient-to-r from-primary-600 to-accent-600 text-white font-poppins font-semibold rounded-lg hover:shadow-lg transition-all"
                  >
                    Book Now
                  </a>
                </div>

                {/* Image */}
                <div className={index % 2 === 1 ? 'md:order-1' : ''}>
                  <div className="h-96 bg-gradient-to-br from-primary-100 to-accent-100 rounded-2xl flex items-center justify-center text-6xl">
                    🧹
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Payment Methods */}
      <section className="py-16 bg-primary-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl font-poppins font-bold text-primary-900 mb-4">Payment Methods</h2>
            <p className="text-lg text-gray-700 font-inter">We accept multiple payment options for your convenience.</p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
            {['Bank Transfer', 'USSD', 'Card Payments', 'Cash on Completion'].map((method, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ delay: index * 0.1 }}
                className="bg-white p-6 rounded-lg text-center shadow-soft-md"
              >
                <div className="text-4xl mb-3">💳</div>
                <p className="font-poppins font-semibold text-gray-900">{method}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-poppins font-bold text-primary-900 mb-8">
            Ready to book a service?
          </h2>
          <a
            href="https://wa.me/234816013232?text=Hello%20I%20would%20like%20to%20book%20a%20cleaning%20service%20with%20Charvigne%20CleanConnect"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block px-8 py-4 bg-gradient-to-r from-primary-600 to-accent-600 text-white font-poppins font-bold rounded-lg hover:shadow-lg transition-all text-lg"
          >
            Get Started Now
          </a>
        </div>
      </section>
    </>
  );
}
