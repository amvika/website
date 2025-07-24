import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { ArrowRight, Brain, Users, TrendingUp, CheckCircle } from 'lucide-react';

const FranchiseHero = () => {
  // Key features of our franchise opportunities
  const keyFeatures = [
    "Transform lives with cutting-edge brain analysis technology",
    "Build your own business with our proven model",
    "Earn significant income with flexible working hours",
    "Comprehensive training and ongoing support provided"
  ];

  return (
    <div className="relative  overflow-hidden bg-gradient-to-b from-white to-[#f0f9f8] py-10 px-6 md:px-20">
        
      {/* Background Elements */}
      <div className="absolute top-0 right-0 w-full h-full overflow-hidden opacity-10 z-0">
        <div className="absolute -right-24 -top-24 w-96 h-96 rounded-full bg-[#066d73] blur-3xl"></div>
        <div className="absolute left-1/2 top-1/2 w-96 h-96 rounded-full bg-[#066d73] blur-3xl"></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7 }}
          >
            <div className="inline-block bg-[#066d73] bg-opacity-10 px-4 py-2 rounded-full mb-4">
              <p className="text-[#066d73] font-semibold">Franchise Opportunities</p>
            </div>
            
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight mb-6 text-gray-900">
              Join Our <span className="text-[#066d73]">Growing Network</span> of Success
            </h1>
            
            <p className="text-lg text-gray-600 mb-8 max-w-xl">
              Partner with Amvika NEXT and be part of a revolutionary movement that's transforming lives while creating exceptional business opportunities.
            </p>
            
            {/* Key Features */}
            <div className="mb-8">
              <ul className="space-y-3">
                {keyFeatures.map((feature, index) => (
                  <motion.li
                    key={index}
                    className="flex items-start gap-3"
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.3, delay: 0.1 + (index * 0.1) }}
                  >
                    <CheckCircle className="w-5 h-5 text-[#066d73] mt-1 flex-shrink-0" />
                    <span className="text-gray-700">{feature}</span>
                  </motion.li>
                ))}
              </ul>
            </div>
            
            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4">
              
              
              <Link to="/contact-us">
                <motion.button
                  className="border-2 border-[#066d73] text-[#066d73] hover:bg-[#066d73] hover:text-white px-8 py-4 rounded-full flex items-center gap-2 transition-all duration-300 text-lg font-semibold"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  Contact Us <ArrowRight size={18} />
                </motion.button>
              </Link>
            </div>
          </motion.div>
          
          {/* Right Content - Stats Cards */}
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="relative"
          >
            {/* Decorative Element */}
            <div className="absolute -z-10 w-72 h-72 bg-[#066d73] opacity-5 rounded-full -top-10 -right-10"></div>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              {/* Card 1 */}
              <motion.div
                className="bg-white p-8 rounded-xl  border border-gray-100"
                whileHover={{ y: -10, boxShadow: '0 20px 25px -5px rgba(0, 0, 0, 0.1)' }}
                transition={{ duration: 0.3 }}
              >
                <div className="bg-[#f0f9f8] p-4 rounded-full w-16 h-16 flex items-center justify-center mb-6">
                  <Brain className="text-[#066d73] w-8 h-8" />
                </div>
                <h3 className="text-2xl font-bold mb-2 text-gray-800">Talent Connector</h3>
                <p className="text-gray-600 mb-4">Transform lives by connecting people with their true potential through our brain analysis technology.</p>
                <p className="text-[#066d73] font-bold text-xl">₹1-5 Cr</p>
                <p className="text-gray-500 text-sm">Annual Earning Potential</p>
              </motion.div>
              
              {/* Card 2 */}
              <motion.div
                className="bg-white p-8 rounded-xl  border border-gray-100 sm:mt-10"
                whileHover={{ y: -10, boxShadow: '0 20px 25px -5px rgba(0, 0, 0, 0.1)' }}
                transition={{ duration: 0.3 }}
              >
                <div className="bg-[#f0f9f8] p-4 rounded-full w-16 h-16 flex items-center justify-center mb-6">
                  <Users className="text-[#066d73] w-8 h-8" />
                </div>
                <h3 className="text-2xl font-bold mb-2 text-gray-800">Business Owner</h3>
                <p className="text-gray-600 mb-4">Launch your own business with our comprehensive training and support system.</p>
                <p className="text-[#066d73] font-bold text-xl">₹3 Lakhs+</p>
                <p className="text-gray-500 text-sm">Monthly Earning Potential</p>
              </motion.div>
              
              {/* Card 3 */}
              <motion.div
                className="bg-white p-8 rounded-xl  border border-gray-100"
                whileHover={{ y: -10, boxShadow: '0 20px 25px -5px rgba(0, 0, 0, 0.1)' }}
                transition={{ duration: 0.3 }}
              >
                <div className="bg-[#f0f9f8] p-4 rounded-full w-16 h-16 flex items-center justify-center mb-6">
                  <TrendingUp className="text-[#066d73] w-8 h-8" />
                </div>
                <h3 className="text-2xl font-bold mb-2 text-gray-800">Minimal Investment</h3>
                <p className="text-gray-600 mb-4">Start with minimal investment and scale your business with our proven model.</p>
                <p className="text-[#066d73] font-bold text-xl">100+</p>
                <p className="text-gray-500 text-sm">Successful Partners</p>
              </motion.div>
              
              {/* Join Now Button */}
              <div className="flex items-center justify-center sm:mt-10">
                <Link
                    to="/contact-us"
                  className="bg-[#066d73] hover:bg-[#055a5f] text-white px-6 py-8 rounded-xl flex items-center justify-center gap-2 transition-all duration-300 w-full h-full"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <div className="text-center">
                    <p className="text-xl font-bold mb-1">Join Now</p>
                    <p className="text-sm">Limited Positions Available</p>
                  </div>
                </Link>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default FranchiseHero;