import { Metadata } from 'next';
import { motion } from 'framer-motion';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'About Us - Charvigne CleanConnect',
  description: 'Learn about Charvigne CleanConnect, our mission, vision, and the team behind Nigeria\'s leading cleaning marketplace.',
};

export default function About() {
  return (
    <>
      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-b from-primary-50 to-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-center mb-16"
          >
            <h1 className="text-5xl md:text-6xl font-poppins font-bold text-primary-900 mb-6">
              About Charvigne CleanConnect
            </h1>
            <p className="text-xl text-gray-700 max-w-3xl mx-auto font-inter">
              Building Nigeria's most trusted on-demand cleaning marketplace.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Company Story */}
      <section className="py-16 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
          >
            <h2 className="text-4xl font-poppins font-bold text-primary-900 mb-6">Our Story</h2>
            <p className="text-lg text-gray-700 font-inter mb-4 leading-relaxed">
              Charvigne CleanConnect was founded with a simple mission: to make professional cleaning services accessible, affordable, and reliable for every Nigerian home and business. We recognized a gap in the market where quality, vetted cleaners were hard to find, and customers couldn't trust the process.
            </p>
            <p className="text-lg text-gray-700 font-inter leading-relaxed">
              Today, we've built a platform that connects thousands of customers with verified, professional cleaners across Lagos, Abuja, and Port Harcourt. We're not just a cleaning service—we're a technology-enabled marketplace that puts trust, transparency, and convenience at the center of everything we do.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Mission, Vision, Values */}
      <section className="py-16 bg-primary-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              className="bg-white p-8 rounded-xl shadow-soft-lg"
            >
              <h3 className="text-2xl font-poppins font-bold text-primary-900 mb-4">Our Mission</h3>
              <p className="text-gray-700 font-inter leading-relaxed">
                To connect Nigerians with trusted, verified cleaners and make professional cleaning services accessible to everyone, every time.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
              className="bg-white p-8 rounded-xl shadow-soft-lg"
            >
              <h3 className="text-2xl font-poppins font-bold text-primary-900 mb-4">Our Vision</h3>
              <p className="text-gray-700 font-inter leading-relaxed">
                To become Nigeria's #1 on-demand cleaning marketplace, trusted by millions of customers and empowering thousands of cleaners to build sustainable livelihoods.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="bg-white p-8 rounded-xl shadow-soft-lg"
            >
              <h3 className="text-2xl font-poppins font-bold text-primary-900 mb-4">Our Values</h3>
              <ul className="space-y-2 text-gray-700 font-inter">
                <li>✓ Trust & Transparency</li>
                <li>✓ Excellence</li>
                <li>✓ Innovation</li>
                <li>✓ Community</li>
              </ul>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Leadership */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-poppins font-bold text-primary-900 mb-4">Meet Our Leadership</h2>
            <p className="text-xl text-gray-700 font-inter">Experienced leaders driving innovation in the cleaning industry.</p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            {/* Founder & CEO */}
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              className="bg-primary-50 rounded-xl overflow-hidden"
            >
              <div className="h-64 bg-gradient-to-br from-primary-200 to-accent-200 flex items-center justify-center text-6xl">
                👩‍💼
              </div>
              <div className="p-8">
                <h3 className="text-2xl font-poppins font-bold text-primary-900 mb-2">Charity Samuel</h3>
                <p className="text-accent-600 font-poppins font-semibold mb-4">Founder & CEO</p>
                <p className="text-gray-700 font-inter leading-relaxed">
                  Visionary entrepreneur with 10+ years of experience in marketplace platforms and service innovation. Charity leads Charvigne CleanConnect with a passion for empowering cleaners and serving customers.
                </p>
              </div>
            </motion.div>

            {/* Head of Operations */}
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.1 }}
              className="bg-accent-50 rounded-xl overflow-hidden"
            >
              <div className="h-64 bg-gradient-to-br from-accent-200 to-primary-200 flex items-center justify-center text-6xl">
                👨‍💼
              </div>
              <div className="p-8">
                <h3 className="text-2xl font-poppins font-bold text-primary-900 mb-2">Daniel James</h3>
                <p className="text-accent-600 font-poppins font-semibold mb-4">Head of Operations</p>
                <p className="text-gray-700 font-inter leading-relaxed">
                  Operations strategist with expertise in scaling service-based businesses. Daniel ensures every cleaner and customer experience exceeds expectations through operational excellence.
                </p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Company Info */}
      <section className="py-16 bg-primary-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            className="bg-white p-12 rounded-xl shadow-soft-lg"
          >
            <h2 className="text-3xl font-poppins font-bold text-primary-900 mb-8">Company Information</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div>
                <p className="text-sm text-gray-600 font-inter mb-2">Company Name</p>
                <p className="text-xl font-poppins font-semibold text-gray-900">Charvigne CleanConnect</p>
              </div>
              <div>
                <p className="text-sm text-gray-600 font-inter mb-2">Registration Number</p>
                <p className="text-xl font-poppins font-semibold text-gray-900">RC: 1234567</p>
              </div>
              <div>
                <p className="text-sm text-gray-600 font-inter mb-2">Headquarters</p>
                <p className="text-xl font-poppins font-semibold text-gray-900">Lagos, Nigeria</p>
              </div>
              <div>
                <p className="text-sm text-gray-600 font-inter mb-2">Founded</p>
                <p className="text-xl font-poppins font-semibold text-gray-900">2023</p>
              </div>
            </div>
            <div className="mt-8 pt-8 border-t border-gray-200">
              <p className="text-sm text-gray-600 font-inter mb-2">Address</p>
              <p className="text-lg font-poppins font-semibold text-gray-900">
                13, Power Line Street, Oke Ayo, Ishaga, Lagos, Nigeria
              </p>
            </div>
          </motion.div>
        </div>
      </section>
    </>
  );
}
