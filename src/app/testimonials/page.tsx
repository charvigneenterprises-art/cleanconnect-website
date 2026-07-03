import { Metadata } from 'next';
import { motion } from 'framer-motion';
import Link from 'next/link';
import { SITE_CONFIG } from '@/config/constants';
import { Star } from 'lucide-react';

export const metadata: Metadata = {
  title: 'Testimonials - Charvigne CleanConnect',
  description: 'Read reviews from our satisfied customers across Nigeria.',
};

export default function Testimonials() {
  const [filter, setFilter] = React.useState<string | null>(null);

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
              What Our Customers Say
            </h1>
            <p className="text-xl text-gray-700 max-w-3xl mx-auto font-inter">
              Real reviews from real customers across Nigeria.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Testimonials Grid */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {SITE_CONFIG.testimonials.map((testimonial, index) => (
              <motion.div
                key={testimonial.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                className="bg-gradient-to-br from-primary-50 to-accent-50 p-8 rounded-xl"
              >
                {/* Rating */}
                <div className="flex mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 fill-yellow-400 text-yellow-400" />
                  ))}
                </div>

                {/* Quote */}
                <p className="text-gray-800 font-inter text-lg mb-6 leading-relaxed italic">
                  "{testimonial.review}"
                </p>

                {/* Author */}
                <div className="flex items-center space-x-4 pt-6 border-t border-gray-200">
                  <div className="w-12 h-12 bg-gradient-to-br from-primary-600 to-accent-600 rounded-full flex items-center justify-center text-white font-poppins font-bold">
                    {testimonial.name.charAt(0)}
                  </div>
                  <div>
                    <p className="font-poppins font-semibold text-gray-900">
                      {testimonial.name}
                    </p>
                    <p className="text-sm text-gray-600 font-inter">
                      {testimonial.location} • {testimonial.service}
                    </p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 bg-primary-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-poppins font-bold text-primary-900 mb-6">
            Join Our Happy Customers
          </h2>
          <p className="text-lg text-gray-700 font-inter mb-8">
            Experience professional cleaning service you can trust.
          </p>
          <a
            href="https://wa.me/234816013232?text=Hello%20I%20would%20like%20to%20book%20a%20cleaning%20service%20with%20Charvigne%20CleanConnect"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block px-8 py-4 bg-gradient-to-r from-primary-600 to-accent-600 text-white font-poppins font-bold rounded-lg hover:shadow-lg transition-all"
          >
            Book A Cleaner Today
          </a>
        </div>
      </section>
    </>
  );
}

import React from 'react';
