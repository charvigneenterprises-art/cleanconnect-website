import { Metadata } from 'next';
import CleanerApplicationForm from '@/components/forms/CleanerApplicationForm';
import { motion } from 'framer-motion';
import { TrendingUp, Users, Clock, CheckCircle } from 'lucide-react';

export const metadata: Metadata = {
  title: 'Become A Cleaner - Charvigne CleanConnect',
  description: 'Join our platform and start earning as a verified cleaner.',
};

export default function BecomeACleaner() {
  return (
    <>
      {/* Hero */}
      <section className="py-20 bg-gradient-to-r from-primary-600 to-accent-600 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-center"
          >
            <h1 className="text-5xl md:text-6xl font-poppins font-bold mb-6">
              Start Earning Today
            </h1>
            <p className="text-xl max-w-3xl mx-auto font-inter mb-8">
              Join thousands of cleaners earning flexible income with Charvigne CleanConnect.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Benefits */}
      <section className="py-20 bg-primary-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-poppins font-bold text-primary-900 mb-4">Why Join Us?</h2>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {[
              {
                icon: TrendingUp,
                title: 'Earn More',
                description: 'Competitive rates and bonuses. Most cleaners earn ₦100,000 - ₦500,000 monthly.',
              },
              {
                icon: Clock,
                title: 'Flexible Hours',
                description: 'Set your own schedule. Work as much or as little as you want.',
              },
              {
                icon: Users,
                title: 'Admin Support',
                description: 'We handle bookings, payments, and customer support for you.',
              },
              {
                icon: CheckCircle,
                title: 'Reputation Building',
                description: 'Build your profile and increase earnings as you get positive reviews.',
              },
            ].map((benefit, index) => {
              const Icon = benefit.icon;
              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1 }}
                  className="bg-white p-8 rounded-lg shadow-soft-lg"
                >
                  <Icon className="w-12 h-12 text-accent-600 mb-4" />
                  <h3 className="text-2xl font-poppins font-bold text-primary-900 mb-3">
                    {benefit.title}
                  </h3>
                  <p className="text-gray-700 font-inter">{benefit.description}</p>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Application Form */}
      <section className="py-20 bg-white">
        <div className="max-w-2xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            className="text-center mb-12"
          >
            <h2 className="text-4xl font-poppins font-bold text-primary-900 mb-4">
              Apply Now
            </h2>
            <p className="text-lg text-gray-700 font-inter">
              Fill out the form below. We\'ll review your application within 48 hours.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="bg-primary-50 p-8 rounded-xl"
          >
            <CleanerApplicationForm />
          </motion.div>
        </div>
      </section>

      {/* Requirements */}
      <section className="py-16 bg-primary-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
          >
            <h2 className="text-3xl font-poppins font-bold text-primary-900 mb-8">Requirements</h2>
            <div className="space-y-4">
              <div className="flex items-start space-x-4 bg-white p-6 rounded-lg">
                <span className="text-2xl">✓</span>
                <div>
                  <p className="font-poppins font-semibold text-gray-900">18+ years old with valid ID</p>
                  <p className="text-gray-700 font-inter text-sm">National identification for verification</p>
                </div>
              </div>
              <div className="flex items-start space-x-4 bg-white p-6 rounded-lg">
                <span className="text-2xl">✓</span>
                <div>
                  <p className="font-poppins font-semibold text-gray-900">Active Phone Number</p>
                  <p className="text-gray-700 font-inter text-sm">For communication and bookings</p>
                </div>
              </div>
              <div className="flex items-start space-x-4 bg-white p-6 rounded-lg">
                <span className="text-2xl">✓</span>
                <div>
                  <p className="font-poppins font-semibold text-gray-900">Cleaning Experience</p>
                  <p className="text-gray-700 font-inter text-sm">Any level welcome; certifications are a plus</p>
                </div>
              </div>
              <div className="flex items-start space-x-4 bg-white p-6 rounded-lg">
                <span className="text-2xl">✓</span>
                <div>
                  <p className="font-poppins font-semibold text-gray-900">Reliable Transport</p>
                  <p className="text-gray-700 font-inter text-sm">Access to transportation to reach customers</p>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>
    </>
  );
}
