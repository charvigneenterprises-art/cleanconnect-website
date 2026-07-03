import { Metadata } from 'next';
import Image from 'next/image';
import { motion } from 'framer-motion';
import BookingForm from '@/components/forms/BookingForm';
import Counter from '@/components/Counter';
import TestimonialCarousel from '@/components/TestimonialCarousel';
import { SITE_CONFIG } from '@/config/constants';
import Link from 'next/link';
import { CheckCircle, Users, Zap, TrendingUp } from 'lucide-react';

export const metadata: Metadata = {
  title: 'Home - Charvigne CleanConnect',
  description: 'Book trusted, verified cleaners for your home, office, or event in Nigeria.',
};

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6 },
  },
};

export default function Home() {
  return (
    <>
      {/* Hero Section */}
      <section className="relative min-h-[90vh] bg-gradient-to-b from-primary-50 via-bg-light to-white flex items-center py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            {/* Left Content */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
            >
              <h1 className="font-poppins font-bold text-5xl md:text-6xl text-primary-900 mb-6 leading-tight">
                Cleaning Made Easy, <span className="text-accent-600">Anytime, Anywhere.</span>
              </h1>
              <p className="text-xl text-gray-700 font-inter mb-8 leading-relaxed">
                {SITE_CONFIG.description}
              </p>

              {/* Trust Badges */}
              <div className="flex flex-col sm:flex-row gap-4 mb-8">
                <div className="flex items-center space-x-2">
                  <CheckCircle className="w-5 h-5 text-accent-600" />
                  <span className="font-inter text-gray-700">500+ Happy Customers</span>
                </div>
                <div className="flex items-center space-x-2">
                  <CheckCircle className="w-5 h-5 text-accent-600" />
                  <span className="font-inter text-gray-700">Verified Cleaners</span>
                </div>
                <div className="flex items-center space-x-2">
                  <CheckCircle className="w-5 h-5 text-accent-600" />
                  <span className="font-inter text-gray-700">7 Days Available</span>
                </div>
              </div>

              {/* CTAs */}
              <div className="flex flex-col sm:flex-row gap-4">
                <a
                  href="https://wa.me/234816013232?text=Hello%20I%20would%20like%20to%20book%20a%20cleaning%20service%20with%20Charvigne%20CleanConnect"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-8 py-3.5 bg-gradient-to-r from-primary-600 to-accent-600 text-white font-poppins font-semibold rounded-lg hover:shadow-lg transition-all text-center"
                >
                  Book A Cleaner Now
                </a>
                <Link
                  href="/how-it-works"
                  className="px-8 py-3.5 border-2 border-primary-600 text-primary-600 font-poppins font-semibold rounded-lg hover:bg-primary-50 transition-all text-center"
                >
                  Learn How It Works
                </Link>
              </div>
            </motion.div>

            {/* Right Image */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="relative h-96 md:h-full"
            >
              <div className="absolute inset-0 bg-gradient-to-br from-primary-200 to-accent-200 rounded-2xl blur-3xl opacity-60"></div>
              <div className="relative bg-gradient-to-br from-primary-100 to-accent-100 rounded-2xl h-96 flex items-center justify-center text-center p-8">
                <div>
                  <div className="text-6xl mb-4">🏠✨</div>
                  <p className="text-primary-900 font-poppins font-bold text-2xl">Professional Cleaning</p>
                  <p className="text-gray-700 font-inter mt-2">On Your Terms</p>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {SITE_CONFIG.stats.map((stat, index) => (
              <Counter
                key={index}
                number={stat.number}
                label={stat.label}
                suffix={stat.suffix}
              />
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-20 bg-primary-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-poppins font-bold text-primary-900 mb-4">
              Why Choose Charvigne CleanConnect?
            </h2>
            <p className="text-xl text-gray-700 max-w-2xl mx-auto font-inter">
              We combine technology, trust, and excellence to deliver the best cleaning experience.
            </p>
          </motion.div>

          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            className="grid grid-cols-1 md:grid-cols-2 gap-8"
          >
            {[
              {
                icon: Users,
                title: 'Verified Cleaners',
                description: 'All our cleaners are thoroughly vetted and rated by customers.',
              },
              {
                icon: Zap,
                title: 'Fast Response Time',
                description: 'Get matched with a cleaner within minutes of booking.',
              },
              {
                icon: TrendingUp,
                title: 'Affordable & Transparent',
                description: 'Know exactly what you\'re paying with no hidden charges.',
              },
              {
                icon: CheckCircle,
                title: 'Easy Booking',
                description: 'Simple, intuitive booking process on web or WhatsApp.',
              },
            ].map((feature, index) => {
              const Icon = feature.icon;
              return (
                <motion.div
                  key={index}
                  variants={itemVariants}
                  className="bg-white p-8 rounded-xl shadow-soft-lg hover:shadow-premium transition-all"
                >
                  <Icon className="w-12 h-12 text-accent-600 mb-4" />
                  <h3 className="text-2xl font-poppins font-bold text-primary-900 mb-3">
                    {feature.title}
                  </h3>
                  <p className="text-gray-700 font-inter">{feature.description}</p>
                </motion.div>
              );
            })}
          </motion.div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-poppins font-bold text-primary-900 mb-4">
              Our Services
            </h2>
            <p className="text-xl text-gray-700 max-w-2xl mx-auto font-inter">
              From basic cleaning to specialized services, we've got you covered.
            </p>
          </motion.div>

          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            className="grid grid-cols-1 md:grid-cols-3 gap-8"
          >
            {SITE_CONFIG.services.map((service, index) => (
              <motion.div
                key={service.id}
                variants={itemVariants}
                className="bg-gradient-to-br from-primary-50 to-accent-50 p-8 rounded-xl border border-primary-100 hover:shadow-lg transition-all"
              >
                <div className="text-4xl mb-4">🧹</div>
                <h3 className="text-xl font-poppins font-bold text-primary-900 mb-2">
                  {service.title}
                </h3>
                <p className="text-gray-700 font-inter mb-4 text-sm">{service.description}</p>
                <p className="text-accent-600 font-poppins font-bold text-lg mb-4">
                  From {service.startingPrice}
                </p>
                <Link
                  href={`/services#${service.id}`}
                  className="inline-block text-accent-600 hover:text-accent-700 font-semibold font-inter"
                >
                  Learn More →
                </Link>
              </motion.div>
            ))}
          </motion.div>

          <div className="text-center mt-12">
            <Link
              href="/services"
              className="px-8 py-3.5 bg-gradient-to-r from-primary-600 to-accent-600 text-white font-poppins font-semibold rounded-lg hover:shadow-lg transition-all inline-block"
            >
              View All Services
            </Link>
          </div>
        </div>
      </section>

      {/* How It Works Preview */}
      <section className="py-20 bg-primary-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-poppins font-bold text-primary-900 mb-4">
              How It Works
            </h2>
            <p className="text-xl text-gray-700 max-w-2xl mx-auto font-inter">
              Simple 4-step process to get your space cleaned.
            </p>
          </motion.div>

          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            className="grid grid-cols-1 md:grid-cols-4 gap-6"
          >
            {[
              { step: '1', title: 'Request Service', description: 'Tell us what you need' },
              { step: '2', title: 'Get Matched', description: 'We find the perfect cleaner' },
              { step: '3', title: 'Cleaning Done', description: 'Professional service delivered' },
              { step: '4', title: 'Pay & Rate', description: 'Easy payment and feedback' },
            ].map((item, index) => (
              <motion.div key={index} variants={itemVariants} className="text-center">
                <div className="w-16 h-16 bg-gradient-to-br from-primary-600 to-accent-600 text-white rounded-full flex items-center justify-center mx-auto mb-4 font-poppins font-bold text-2xl">
                  {item.step}
                </div>
                <h3 className="text-lg font-poppins font-bold text-primary-900 mb-2">
                  {item.title}
                </h3>
                <p className="text-gray-700 font-inter">{item.description}</p>
              </motion.div>
            ))}
          </motion.div>

          <div className="text-center mt-12">
            <Link
              href="/how-it-works"
              className="px-8 py-3.5 border-2 border-primary-600 text-primary-600 font-poppins font-semibold rounded-lg hover:bg-primary-100 transition-all inline-block"
            >
              See Full Guide
            </Link>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-poppins font-bold text-primary-900 mb-4">
              What Our Customers Say
            </h2>
            <p className="text-xl text-gray-700 max-w-2xl mx-auto font-inter">
              Join hundreds of satisfied customers across Nigeria.
            </p>
          </motion.div>

          <TestimonialCarousel />
        </div>
      </section>

      {/* Become A Cleaner CTA */}
      <section className="py-20 bg-gradient-to-r from-primary-600 to-accent-600">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
          >
            <h2 className="text-4xl md:text-5xl font-poppins font-bold text-white mb-6">
              Ready to Join Our Team?
            </h2>
            <p className="text-xl text-white/90 font-inter mb-8 max-w-2xl mx-auto">
              Become a verified cleaner and earn flexible income with Charvigne CleanConnect.
            </p>
            <Link
              href="/become-a-cleaner"
              className="inline-block px-8 py-4 bg-white text-primary-600 font-poppins font-bold rounded-lg hover:shadow-lg transition-all text-lg"
            >
              Apply To Become A Cleaner
            </Link>
          </motion.div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-20 bg-primary-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
          >
            <h2 className="text-4xl md:text-5xl font-poppins font-bold text-primary-900 mb-8">
              Ready For A Cleaner Home Or Office?
            </h2>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="https://wa.me/234816013232?text=Hello%20I%20would%20like%20to%20book%20a%20cleaning%20service%20with%20Charvigne%20CleanConnect"
                target="_blank"
                rel="noopener noreferrer"
                className="px-8 py-4 bg-gradient-to-r from-primary-600 to-accent-600 text-white font-poppins font-bold rounded-lg hover:shadow-lg transition-all text-lg"
              >
                Book A Cleaner
              </a>
              <a
                href="https://wa.me/234816013232?text=Hello%20I%20would%20like%20to%20book%20a%20cleaning%20service%20with%20Charvigne%20CleanConnect"
                target="_blank"
                rel="noopener noreferrer"
                className="px-8 py-4 border-2 border-primary-600 text-primary-600 font-poppins font-bold rounded-lg hover:bg-primary-100 transition-all text-lg"
              >
                Chat On WhatsApp
              </a>
            </div>
          </motion.div>
        </div>
      </section>
    </>
  );
}
