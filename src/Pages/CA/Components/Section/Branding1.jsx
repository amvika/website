import React from 'react';
import { motion, useInView } from 'framer-motion';
import { ArrowRight } from 'lucide-react';
import { useRef } from 'react';
import { Link } from 'react-router-dom';

const Branding1 = () => {
  const leftContentRef = useRef(null);
  const rightContentRef = useRef(null);
  const isLeftInView = useInView(leftContentRef, { once: true });
  const isRightInView = useInView(rightContentRef, { once: true });

  return (
    <div className="py-16 px-6 md:px-20 bg-gray-50">
      <div className="max-w-7xl mx-auto flex flex-col lg:flex-row items-center gap-10">
        {/* Left Content */}
        <motion.div 
          ref={leftContentRef}
          className="w-full lg:w-1/2 text-left relative z-10"
          initial={{ opacity: 0, x: -50 }}
          animate={isLeftInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -50 }}
          transition={{ duration: 0.5 }}
        >
          {/* Decorative element */}
          <div className="absolute -top-10 -left-10 w-20 h-20 bg-orange-100 rounded-full opacity-50 -z-10 hidden lg:block"></div>
          
          {/* Accent line */}
          <div className="w-20 h-1 bg-gradient-to-r from-orange-400 to-orange-600 rounded-full mb-4"></div>
          
          <h2 className="text-4xl font-extrabold mb-6 text-gray-800 leading-tight">
            Explore Our Suite <br /><span className="text-orange-500">of Financial Services</span>
          </h2>
          
          <p className="text-gray-600 mb-8 leading-relaxed max-w-lg">
            Launch your own business under your chosen name, offering a range of essential services including GST registration and filing, tax consultation, accounting services, and more.
          </p>
          
          <div className="mb-10 space-y-6">
            <motion.div 
              className="flex items-start gap-4 p-4 rounded-lg hover:bg-orange-50 transition-all duration-300"
              whileHover={{ x: 5 }}
            >
              <div className="bg-orange-100 p-3 rounded-full mt-1 shadow-sm">
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M5 13L9 17L19 7" stroke="#FF7E45" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </div>
              <div>
                <h3 className="font-bold text-lg text-gray-800">Be Your Own Boss</h3>
                <p className="text-gray-600 text-sm mt-1">Build your brand and operate your business from the comfort of your home.</p>
              </div>
            </motion.div>
            
            <motion.div 
              className="flex items-start gap-4 p-4 rounded-lg hover:bg-orange-50 transition-all duration-300"
              whileHover={{ x: 5 }}
            >
              <div className="bg-orange-100 p-3 rounded-full mt-1 shadow-sm">
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M5 13L9 17L19 7" stroke="#FF7E45" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </div>
              <div>
                <h3 className="font-bold text-lg text-gray-800">Comprehensive Training</h3>
                <p className="text-gray-600 text-sm mt-1">Our 1-hour training equips you with the knowledge to effectively offer these services.</p>
              </div>
            </motion.div>
            
            <motion.div 
              className="flex items-start gap-4 p-4 rounded-lg hover:bg-orange-50 transition-all duration-300"
              whileHover={{ x: 5 }}
            >
              <div className="bg-orange-100 p-3 rounded-full mt-1 shadow-sm">
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M5 13L9 17L19 7" stroke="#FF7E45" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </div>
              <div>
                <h3 className="font-bold text-lg text-gray-800">Significant Earning Potential</h3>
                <p className="text-gray-600 text-sm mt-1">Build a substantial income with the potential to earn crores of rupees annually.</p>
              </div>
            </motion.div>
          </div>
          
          {/* Decorative element */}
          <div className="absolute bottom-10 -right-5 w-16 h-16 bg-orange-100 rounded-full opacity-50 -z-10 hidden lg:block"></div>
          
          <Link 
            to="/contact-us"
            className="w-full sm:w-fit bg-gradient-to-r from-orange-500 to-orange-600 hover:from-orange-600 hover:to-orange-700 text-white px-4 sm:px-6 py-2.5 sm:py-3 rounded-full flex items-center justify-center sm:justify-start gap-2 transition-all duration-300 shadow-lg shadow-orange-200 font-medium text-sm sm:text-base"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            Get Started <ArrowRight size={16} />
          </Link>
        </motion.div>
        
        {/* Right Content - ATM Card */}
        <motion.div 
          ref={rightContentRef}
          className="w-full lg:w-1/2"
        //   initial={{ opacity: 0 }}
        //   animate={isRightInView ? { opacity: 1, x: 0 } : { opacity: 0, x: 50 }}
        //   transition={{ duration: 0.5, delay: 0.2 }}
        >
          <div className="relative bg-gradient-to-br from-orange-50 to-gray-100 p-8 rounded-2xl ">
            <div className="absolute top-6 left-6">
              <svg width="32" height="32" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M3 10H21M7 15H9M12 15H14M6 19H18C19.6569 19 21 17.6569 21 16V8C21 6.34315 19.6569 5 18 5H6C4.34315 5 3 6.34315 3 8V16C3 17.6569 4.34315 19 6 19Z" stroke="#FF7E45" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </div>
            
            <div className="mt-16 mb-8">
              <h3 className="text-2xl font-bold mb-2">Take Control of Your Financial Future</h3>
              <p className="text-gray-600">Become an Independent Business Owner with our comprehensive service provider model</p>
            </div>
            
            <div className="bg-gradient-to-r from-orange-400 to-orange-600 rounded-xl p-6 text-white shadow-md">
              <div className="flex justify-between items-start mb-10">
                <div>
                  <p className="text-xs opacity-80">Business Owner</p>
                  <p className="font-medium">Amvika NEXT</p>
                </div>
                <div>
                  <svg width="40" height="40" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M22 12C22 17.5228 17.5228 22 12 22C6.47715 22 2 17.5228 2 12C2 6.47715 6.47715 2 12 2C17.5228 2 22 6.47715 22 12Z" stroke="white" strokeWidth="2"/>
                    <path d="M15 8L9 16" stroke="white" strokeWidth="2" strokeLinecap="round"/>
                    <path d="M9 8L15 16" stroke="white" strokeWidth="2" strokeLinecap="round"/>
                  </svg>
                </div>
              </div>
              
              <div className="mb-4">
                <p className="text-xs opacity-80">Card Number</p>
                <p className="font-medium tracking-wider">**** **** **** 4589</p>
              </div>
              
              <div className="flex justify-between">
                <div>
                  <p className="text-xs opacity-80">Valid Thru</p>
                  <p className="font-medium">12/28</p>
                </div>
                <div className="text-right">
                  <p className="text-xs opacity-80">CVV</p>
                  <p className="font-medium">***</p>
                </div>
                <div className="text-right">
                  <p className="text-xs font-bold uppercase">VISA</p>
                </div>
              </div>
            </div>
            
            <div className="mt-6 flex justify-between items-center">
              <div>
                <p className="text-sm text-gray-500">Potential Monthly Earnings</p>
                <p className="text-2xl font-bold">₹1,50,000+</p>
              </div>
              <div className="bg-green-100 text-green-800 px-3 py-1 rounded-full text-sm font-medium">
                Unlimited Growth
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default Branding1;