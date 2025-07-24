import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, CheckCircle, TrendingUp, Users, Award } from 'lucide-react';
import { Link } from 'react-router-dom';

const Franchise = () => {
  // Success stories from the content
  const successStories = [
    {
      name: "Deepak Patel",
      background: "Was doing odd jobs after losing full-time employment. No prior experience in GST, tax, or accounting.",
      outcome: "Within a short period of setting up his home-based business, he started acquiring clients. Now earns lakhs of rupees monthly as a full-time independent service provider."
    },
    {
      name: "Kavita Singh",
      background: "Looking for significant income opportunity alongside existing commitments. Had basic administrative skills but no specialized knowledge.",
      outcome: "After Amvika NEXT training, she established her service business from home and now earns up to 3 lakhs monthly while maintaining work-life balance."
    }
  ];

  // Benefits of becoming a franchise partner
  const benefits = [
    "Be your own boss and build your brand",
    "Offer diverse range of in-demand services",
    "Comprehensive 1-hour training provided",
    "Work from anywhere with significant earning potential",
    "No prior expertise required in all service areas",
    "Potential to earn up to ₹3 Lakhs per month"
  ];

  // Stats to showcase the opportunity
  const stats = [
    { icon: <TrendingUp className="w-8 h-8 text-orange-600" />, value: "₹3 Lakhs+", label: "Monthly Earning Potential" },
    { icon: <Users className="w-8 h-8 text-orange-600" />, value: "100+", label: "Successful Partners" },
    { icon: <Award className="w-8 h-8 text-orange-600" />, value: "1 Hour", label: "Training Time" }
  ];

  return (
    <div className="py-16 px-6 md:px-20 bg-gray-50">
      {/* Section Header */}
      <motion.div 
        className="mb-12 text-center"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <h2 className="text-4xl font-bold mb-4 text-black">Become a Franchise Partner</h2>
        <p className="text-gray-600 max-w-3xl mx-auto">
          Launch your own business under your chosen name and earn up to <span className="text-orange-600 font-bold">₹3 Lakhs per month</span> with our comprehensive support system.
        </p>
      </motion.div>

      {/* Stats Section */}
      <motion.div 
        className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12"
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.2 }}
      >
        {stats.map((stat, index) => (
          <motion.div 
            key={index}
            className="bg-white p-8 rounded-lg shadow-sm text-center"
            whileHover={{ y: -5, boxShadow: '0 10px 25px -5px rgba(0, 0, 0, 0.1)' }}
            transition={{ duration: 0.3 }}
          >
            <div className="flex justify-center mb-4">{stat.icon}</div>
            <h3 className="text-2xl font-bold mb-2 text-black">{stat.value}</h3>
            <p className="text-gray-600">{stat.label}</p>
          </motion.div>
        ))}
      </motion.div>

      {/* Benefits and Success Stories */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
        {/* Benefits */}
        <motion.div
          className="bg-white p-8 rounded-lg shadow-sm"
          initial={{ opacity: 0, x: -30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5, delay: 0.3 }}
        >
          <h3 className="text-2xl font-bold mb-6 text-orange-600">Why Become Our Partner?</h3>
          <ul className="space-y-4">
            {benefits.map((benefit, index) => (
              <motion.li 
                key={index} 
                className="flex items-start gap-3"
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.3, delay: 0.4 + (index * 0.1) }}
              >
                <CheckCircle className="w-5 h-5 text-orange-600 mt-1 flex-shrink-0" />
                <span className='text-black'>{benefit}</span>
              </motion.li>
            ))}
          </ul>
          <Link
            to="/our-franchise"
            className="mt-8 w-fit bg-orange-600 hover:bg-orange-700 text-white px-6 py-3 rounded-full flex items-center gap-2 transition-all duration-300"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            Join as Partner <ArrowRight size={16} />
          </Link>
        </motion.div>

        {/* Success Stories */}
        <motion.div
          className="bg-white p-8 rounded-lg shadow-sm"
          initial={{ opacity: 0, x: 30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5, delay: 0.3 }}
        >
          <h3 className="text-2xl font-bold mb-6 text-orange-600">Success Stories</h3>
          <div className="space-y-6">
            {successStories.map((story, index) => (
              <motion.div 
                key={index} 
                className="border-l-4 border-orange-600 pl-4 py-2"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: 0.5 + (index * 0.2) }}
              >
                <h4 className="font-bold text-lg mb-2 text-black">{story.name}</h4>
                <p className="text-gray-600 text-sm mb-3"><span className="font-semibold">Background:</span> {story.background}</p>
                <p className="text-gray-800"><span className="font-semibold">Outcome:</span> {story.outcome}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>

      {/* Call to Action */}
      <motion.div 
        className="mt-16 text-center"
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.6 }}
      >
        <h3 className="text-2xl font-bold mb-4 text-black">Ready to Start Your Own Business?</h3>
        <p className="text-gray-600 max-w-2xl mx-auto mb-8">
          Join our network of successful franchise partners and start earning up to ₹3 Lakhs per month with minimal investment and complete training support.
        </p>
        <Link 
          to="/our-franchise"
          className="bg-orange-600 w-fit hover:bg-orange-700 text-white px-8 py-4 rounded-full flex items-center gap-2 transition-all duration-300 mx-auto text-lg font-semibold"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          Apply Now <ArrowRight size={20} />
        </Link>
      </motion.div>
    </div>
  );
};

export default Franchise;