import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

const Branding2 = () => {
  const [isLeftVisible, setIsLeftVisible] = useState(false);
  const [isRightVisible, setIsRightVisible] = useState(false);

  useEffect(() => {
    // Set initial visibility after component mounts
    setIsLeftVisible(true);
    setTimeout(() => setIsRightVisible(true), 200);
  }, []);

  return (
    <div className="py-8 sm:py-12 md:py-16 px-4 sm:px-6 md:px-20 bg-white">
      <div className="max-w-7xl mx-auto flex flex-col lg:flex-row items-center gap-6 sm:gap-8 lg:gap-10">
        {/* Left Content - Woman with investment monitoring */}
        <motion.div 
          className="w-full lg:w-1/2 relative"
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: isLeftVisible ? 1 : 0, x: isLeftVisible ? 0 : -50 }}
          transition={{ duration: 0.5 }}
        >
          <div className="relative bg-gray-50 rounded-xl p-4 sm:p-6 overflow-hidden">
            {/* Main image of woman with tablet */}
            <div className="relative z-10 h-[50vh] sm:h-[60vh] md:h-[70vh] lg:h-[80vh]">
              <img 
                src="https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=776&q=80" 
                alt="Professional woman with tablet" 
                className="rounded-lg w-full h-full object-cover"
              />
            </div>
            
            {/* Investment monitoring UI element */}
            <div className="absolute top-12 sm:top-16 md:top-24 left-0 bg-white p-2 sm:p-3 rounded-lg shadow-md flex items-center gap-2 sm:gap-3 border border-gray-100 z-20 text-sm sm:text-base">
              <div className="bg-indigo-100 p-1.5 sm:p-2 rounded-md">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M8 16H6C4.89543 16 4 15.1046 4 14V6C4 4.89543 4.89543 4 6 4H18C19.1046 4 20 4.89543 20 6V14C20 15.1046 19.1046 16 18 16H16M12 20V10M12 10L16 14M12 10L8 14" stroke="#4F46E5" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </div>
              <div>
                <p className="text-xs text-gray-500">ETHUSDT</p>
                <p className="font-bold text-sm sm:text-base">₹276.00</p>
              </div>
              <div className="text-green-500 text-xs font-medium">
                +8.27%
              </div>
            </div>
            
            {/* Investment value UI element */}
            <div className="absolute bottom-12 sm:bottom-16 md:bottom-24 left-0 bg-white p-2 sm:p-3 rounded-lg shadow-md flex items-center gap-2 sm:gap-3 border border-gray-100 z-20 text-sm sm:text-base">
              <div>
                <p className="text-xs text-gray-500">Portfolio Value</p>
                <p className="font-bold text-sm sm:text-base">₹179,225</p>
              </div>
              <div className="text-green-500 text-xs font-medium">
                +32.04%
              </div>
            </div>
          </div>
        </motion.div>
        
        {/* Right Content */}
        <motion.div 
          className="w-full lg:w-1/2 text-left px-4 sm:px-6 lg:px-0"
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: isRightVisible ? 1 : 0, x: isRightVisible ? 0 : 50 }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-4 sm:mb-6 text-gray-800 leading-tight">
            Comprehensive <span className="text-orange-500">Taxation & Compliance</span> Solutions
          </h2>
          
          <p className="text-sm sm:text-base text-gray-600 mb-6 sm:mb-8 leading-relaxed">
            Amvika CA Services offers reliable and comprehensive taxation and compliance solutions tailored to meet the needs of individuals, small businesses, and growing enterprises. From GST registration and return filing to income tax filing, tax planning, and business registration services, we handle everything with professionalism and accuracy.
          </p>
          
          <div className="mb-6 sm:mb-8 space-y-3 sm:space-y-4">
            {['GST registration and return filing', 'Income tax filing and tax planning', 'Business registration services', 'Essential licenses (FSSAI, MSME, ISO)', 'Digital signature certificates'].map((text, index) => (
              <div key={index} className="flex items-start gap-2 sm:gap-3">
                <div className="bg-orange-100 p-1.5 sm:p-2 rounded-full mt-1">
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M5 13L9 17L19 7" stroke="#FF7E45" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </div>
                <p className="text-sm sm:text-base text-gray-600">{text}</p>
              </div>
            ))}
          </div>
          
          <Link
            to="/contact-us" 
            className="w-full sm:w-fit bg-gradient-to-r from-orange-500 to-orange-600 hover:from-orange-600 hover:to-orange-700 text-white px-4 sm:px-6 py-2.5 sm:py-3 rounded-full flex items-center justify-center sm:justify-start gap-2 transition-all duration-300 shadow-lg shadow-orange-200 font-medium text-sm sm:text-base"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            Get Started <ArrowRight size={16} />
          </Link>
            
        </motion.div>
      </div>
    </div>
  );
};

export default Branding2;