import { Metadata } from 'next';
import { motion } from 'framer-motion';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'How It Works - Charvigne CleanConnect',
  description: 'Learn how to book a cleaner or join as a cleaner with Charvigne CleanConnect.',
};

export default function HowItWorks() {
  const customerSteps = [
    {
      number: '1',
      title: 'Request Service',
      description: 'Tell us what you need: service type, location, date, and time. It takes less than 2 minutes.',
      icon: '📋',
    },
    {
      number: '2',
      title: 'Get Matched',
      description: 'We match you with a verified, professional cleaner who fits your needs. See their profile and ratings.',
      icon: '🔍',
    },
    {
      number: '3',
      title: 'Confirm & Prepare',
      description: 'Your cleaner will contact you 30 minutes before arrival. Track their location in real-time.',
      icon: '✅',
    },
    {
      number: '4',
      title: 'Service Delivered',
      description: 'Professional cleaning delivered. Our cleaners are trained, vetted, and insured.',
      icon: '✨',
    },
    {
      number: '5',
      title: 'Easy Payment',
      description: 'Pay via bank transfer, USSD, card, or cash on completion. Transparent pricing, no surprises.',
      icon: '💳',
    },
    {
      number: '6',
      title: 'Rate & Review',
      description: 'Share your experience. Your feedback helps us maintain high standards and reward great cleaners.',
      icon: '⭐',
    },
  ];

  const cleanerSteps = [
    {
      number: '1',
      title: 'Apply',
      description: 'Fill out our application form. Tell us about your experience and the services you offer.',
      icon: '📝',
    },
    {
      number: '2',
      title: 'Verification',
      description: 'We verify your background and qualifications. This ensures customer safety and trust.',
      icon: '🛡️',
    },
    {
      number: '3',
      title: 'Get Approved',
      description: 'Once approved, you\'ll get access to our cleaner platform with full onboarding support.',
      icon: '✅',
    },
    {
      number: '4',
      title: 'Set Your Schedule',
      description: 'Choose your own availability and the services you want to offer. Total flexibility.',
      icon: '📅',
    },
    {
      number: '5',
      title: 'Receive Bookings',
      description: 'Get notifications for matching requests. Accept the ones that work for you.',
      icon: '🔔',
    },
    {
      number: '6',
      title: 'Earn & Grow',
      description: 'Earn transparent rates for each service. Build your reputation and increase earnings.',
      icon: '💰',
    },
  ];

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
              How It Works
            </h1>
            <p className="text-xl text-gray-700 max-w-3xl mx-auto font-inter">
              Simple, transparent processes for both customers and cleaners.
            </p>
          </motion.div>
        </div>
      </section>

      {/* For Customers */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-poppins font-bold text-primary-900 mb-4">For Customers</h2>
            <p className="text-lg text-gray-700 font-inter">6 Simple Steps to Book Your Cleaner</p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {customerSteps.map((step, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                className="bg-primary-50 p-8 rounded-lg border-l-4 border-accent-600"
              >
                <div className="flex items-start space-x-4">
                  <div className="text-5xl">{step.icon}</div>
                  <div>
                    <div className="flex items-center space-x-2 mb-2">
                      <span className="w-8 h-8 bg-accent-600 text-white rounded-full flex items-center justify-center font-poppins font-bold">
                        {step.number}
                      </span>
                      <h3 className="text-xl font-poppins font-bold text-primary-900">{step.title}</h3>
                    </div>
                    <p className="text-gray-700 font-inter">{step.description}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          <div className="text-center mt-12">
            <a
              href="https://wa.me/234816013232?text=Hello%20I%20would%20like%20to%20book%20a%20cleaning%20service%20with%20Charvigne%20CleanConnect"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block px-8 py-4 bg-gradient-to-r from-primary-600 to-accent-600 text-white font-poppins font-bold rounded-lg hover:shadow-lg transition-all"
            >
              Book A Cleaner Now
            </a>
          </div>
        </div>
      </section>

      {/* For Cleaners */}
      <section className="py-20 bg-primary-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-poppins font-bold text-primary-900 mb-4">For Cleaners</h2>
            <p className="text-lg text-gray-700 font-inter">6 Steps to Start Earning</p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {cleanerSteps.map((step, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                className="bg-white p-8 rounded-lg border-l-4 border-primary-600"
              >
                <div className="flex items-start space-x-4">
                  <div className="text-5xl">{step.icon}</div>
                  <div>
                    <div className="flex items-center space-x-2 mb-2">
                      <span className="w-8 h-8 bg-primary-600 text-white rounded-full flex items-center justify-center font-poppins font-bold">
                        {step.number}
                      </span>
                      <h3 className="text-xl font-poppins font-bold text-primary-900">{step.title}</h3>
                    </div>
                    <p className="text-gray-700 font-inter">{step.description}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          <div className="text-center mt-12">
            <Link
              href="/become-a-cleaner"
              className="inline-block px-8 py-4 bg-white text-primary-600 font-poppins font-bold rounded-lg hover:shadow-lg transition-all border-2 border-primary-600"
            >
              Apply To Become A Cleaner
            </Link>
          </div>
        </div>
      </section>

      {/* Why Charvigne */}
      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            className="text-center"
          >
            <h2 className="text-4xl font-poppins font-bold text-primary-900 mb-8">
              Why Choose Charvigne CleanConnect?
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {[
                { icon: '🛡️', title: 'Safe & Secure', desc: 'Verified cleaners, secure payments, customer protection.' },
                { icon: '⚡', title: 'Fast & Easy', desc: 'Book in minutes, confirm in seconds, service on time.' },
                { icon: '💰', title: 'Transparent Pricing', desc: 'No hidden charges, see exact price before booking.' },
              ].map((item, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ delay: i * 0.1 }}
                  className="bg-primary-50 p-8 rounded-lg"
                >
                  <div className="text-5xl mb-4">{item.icon}</div>
                  <h3 className="text-xl font-poppins font-bold text-primary-900 mb-2">{item.title}</h3>
                  <p className="text-gray-700 font-inter">{item.desc}</p>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>
    </>
  );
}
