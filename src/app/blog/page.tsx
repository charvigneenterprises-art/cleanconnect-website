import { Metadata } from 'next';
import { motion } from 'framer-motion';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Blog - Charvigne CleanConnect',
  description: 'Tips, guides, and updates from the Charvigne CleanConnect blog.',
};

const blogPosts = [
  {
    id: 1,
    title: '10 Home Cleaning Tips for Busy Professionals',
    category: 'Home Tips',
    date: 'March 15, 2024',
    excerpt: 'Learn quick and effective cleaning hacks that fit your busy schedule.',
    image: '🏠',
  },
  {
    id: 2,
    title: 'Office Hygiene: Why It Matters for Productivity',
    category: 'Office Care',
    date: 'March 10, 2024',
    excerpt: 'Discover how a clean office environment boosts employee productivity and morale.',
    image: '🏢',
  },
  {
    id: 3,
    title: 'Deep Cleaning Checklist: Don\'t Miss These Areas',
    category: 'Deep Cleaning',
    date: 'March 5, 2024',
    excerpt: 'A comprehensive guide to deep cleaning your home like a professional.',
    image: '✨',
  },
  {
    id: 4,
    title: 'Becoming a Successful Cleaner: Your Guide',
    category: 'Company Updates',
    date: 'February 28, 2024',
    excerpt: 'Tips for new cleaners to succeed on the Charvigne platform.',
    image: '💼',
  },
];

export default function Blog() {
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
              Blog
            </h1>
            <p className="text-xl text-gray-700 max-w-3xl mx-auto font-inter">
              Tips, guides, and insights for a cleaner home and office.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Blog Posts */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {blogPosts.map((post, index) => (
              <motion.article
                key={post.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                className="bg-primary-50 rounded-xl overflow-hidden hover:shadow-lg transition-all group"
              >
                <div className="h-48 bg-gradient-to-br from-primary-200 to-accent-200 flex items-center justify-center text-6xl group-hover:scale-105 transition-transform">
                  {post.image}
                </div>
                <div className="p-6">
                  <div className="flex items-center justify-between mb-3">
                    <span className="text-xs font-poppins font-semibold text-accent-600 bg-accent-100 px-3 py-1 rounded-full">
                      {post.category}
                    </span>
                    <span className="text-xs text-gray-500 font-inter">{post.date}</span>
                  </div>
                  <h3 className="text-xl font-poppins font-bold text-primary-900 mb-3">
                    {post.title}
                  </h3>
                  <p className="text-gray-700 font-inter mb-4 leading-relaxed">{post.excerpt}</p>
                  <a
                    href="#"
                    className="text-accent-600 hover:text-accent-700 font-semibold font-inter inline-flex items-center space-x-1"
                  >
                    <span>Read More</span>
                    <span>→</span>
                  </a>
                </div>
              </motion.article>
            ))}
          </div>
        </div>
      </section>

      {/* Newsletter */}
      <section className="py-16 bg-primary-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
          >
            <h2 className="text-3xl font-poppins font-bold text-primary-900 mb-4">
              Stay Updated
            </h2>
            <p className="text-lg text-gray-700 font-inter mb-8">
              Subscribe to our newsletter for cleaning tips and platform updates.
            </p>
            <div className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto">
              <input
                type="email"
                placeholder="Enter your email"
                className="flex-1 px-4 py-3 border border-gray-300 rounded-lg font-inter focus:outline-none focus:ring-2 focus:ring-primary-600"
              />
              <button className="px-6 py-3 bg-gradient-to-r from-primary-600 to-accent-600 text-white font-poppins font-semibold rounded-lg hover:shadow-lg transition-all">
                Subscribe
              </button>
            </div>
          </motion.div>
        </div>
      </section>
    </>
  );
}
