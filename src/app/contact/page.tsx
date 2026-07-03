import { Metadata } from 'next';
import { motion } from 'framer-motion';
import ContactForm from '@/components/forms/ContactForm';
import { MapPin, Phone, Mail, Clock } from 'lucide-react';
import { SITE_CONFIG } from '@/config/constants';

export const metadata: Metadata = {
  title: 'Contact Us - Charvigne CleanConnect',
  description: 'Get in touch with Charvigne CleanConnect. We respond within 2 hours.',
};

export default function Contact() {
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
              Get In Touch
            </h1>
            <p className="text-xl text-gray-700 max-w-3xl mx-auto font-inter">
              Have questions? We're here to help. Response time: 2 hours max.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Contact Info & Form */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
            {/* Contact Information */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
            >
              <h2 className="text-3xl font-poppins font-bold text-primary-900 mb-8">
                Contact Information
              </h2>

              {/* Address */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                className="flex items-start space-x-4 mb-8"
              >
                <MapPin className="w-6 h-6 text-accent-600 mt-1 flex-shrink-0" />
                <div>
                  <h3 className="font-poppins font-semibold text-gray-900 mb-2">Address</h3>
                  <p className="text-gray-700 font-inter">{SITE_CONFIG.contact.address}</p>
                </div>
              </motion.div>

              {/* Phone */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.1 }}
                className="flex items-start space-x-4 mb-8"
              >
                <Phone className="w-6 h-6 text-accent-600 mt-1 flex-shrink-0" />
                <div>
                  <h3 className="font-poppins font-semibold text-gray-900 mb-2">Phone</h3>
                  <a
                    href={`tel:${SITE_CONFIG.contact.phone}`}
                    className="text-accent-600 hover:text-accent-700 font-inter"
                  >
                    {SITE_CONFIG.contact.phone}
                  </a>
                </div>
              </motion.div>

              {/* Email */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2 }}
                className="flex items-start space-x-4 mb-8"
              >
                <Mail className="w-6 h-6 text-accent-600 mt-1 flex-shrink-0" />
                <div>
                  <h3 className="font-poppins font-semibold text-gray-900 mb-2">Email</h3>
                  <a
                    href={`mailto:${SITE_CONFIG.contact.email}`}
                    className="text-accent-600 hover:text-accent-700 font-inter break-all"
                  >
                    {SITE_CONFIG.contact.email}
                  </a>
                </div>
              </motion.div>

              {/* Response Time */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3 }}
                className="flex items-start space-x-4 mb-8"
              >
                <Clock className="w-6 h-6 text-accent-600 mt-1 flex-shrink-0" />
                <div>
                  <h3 className="font-poppins font-semibold text-gray-900 mb-2">Response Time</h3>
                  <p className="text-gray-700 font-inter">Within 2 hours</p>
                </div>
              </motion.div>

              {/* WhatsApp CTA */}
              <motion.a
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4 }}
                href="https://wa.me/234816013232"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center space-x-2 px-6 py-3 bg-green-500 text-white font-poppins font-semibold rounded-lg hover:bg-green-600 transition-all"
              >
                <span>💱</span>
                <span>Chat on WhatsApp</span>
              </motion.a>
            </motion.div>

            {/* Contact Form */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              className="bg-primary-50 p-8 rounded-xl"
            >
              <h2 className="text-3xl font-poppins font-bold text-primary-900 mb-8">Send Us A Message</h2>
              <ContactForm />
            </motion.div>
          </div>
        </div>
      </section>

      {/* Map Section */}
      <section className="py-12 bg-primary-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
          >
            <h2 className="text-3xl font-poppins font-bold text-primary-900 mb-8 text-center">Visit Us</h2>
            <div className="bg-white rounded-xl overflow-hidden shadow-lg h-96">
              <iframe
                width="100%"
                height="100%"
                style={{ border: 0 }}
                loading="lazy"
                src={`https://www.google.com/maps/embed/v1/place?key=YOUR_GOOGLE_MAPS_KEY&q=13+Power+Line+Street+Oke+Ayo+Ishaga+Lagos+Nigeria`}
              />
            </div>
          </motion.div>
        </div>
      </section>
    </>
  );
}
