import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';

const Hero = () => {
  // Sample client images - replace with actual client images when available
  const clientImgs = [
    "https://images.unsplash.com/photo-1560250097-0b93528c311a",
    "https://images.unsplash.com/photo-1573497491765-dccce02b29df",
    "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2",
    "https://images.unsplash.com/photo-1560250097-0b93528c311a"
  ];

  return (
    <div className="min-h-screen bg-white px-4 sm:px-6 lg:px-20 py-8 sm:py-12 lg:py-16 flex flex-col lg:flex-row items-center justify-between gap-6 lg:gap-10">
      {/* Left Content */}
      <motion.div 
        className="w-full lg:w-1/2 text-center lg:text-left"
        initial={{ opacity: 0, x: -50 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.5 }}
      >
        <h1 className="text-3xl text-black sm:text-4xl lg:text-5xl font-bold leading-tight mb-4 sm:mb-6">
          Build Your Future With Our Website Development 
          <span className="relative inline-block">
            <span className="bg-gradient-to-r from-[#066d73] to-[#044d52] bg-clip-text text-transparent">Franchise</span>
            <motion.div 
              className="absolute -bottom-1 left-0 w-full h-1 bg-[#066d73]"
              initial={{ width: 0 }}
              animate={{ width: '100%' }}
              transition={{ duration: 0.8, delay: 0.5 }}
            />
          </span>
        </h1>
        <p className="text-gray-600 mb-6 sm:mb-8 text-sm sm:text-base">
          Launch your own website development business with our proven franchise model. We provide the technology, training, and support you need to deliver exceptional websites to clients in your area. Join our network of successful franchise owners today.
        </p>
        
        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start mb-8">
          <motion.button 
            className="bg-[#066d73] hover:bg-[#055c61] text-white px-6 sm:px-8 py-2 sm:py-3 rounded-full flex items-center gap-2 transition-all duration-300"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            Get Started <ArrowRight size={16} className="sm:w-[18px]" />
          </motion.button>
          
          
        </div>
        
        {/* Rating */}
        <div className="mt-4 sm:mt-6 flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4">
          <div className="flex">
            {/* Avatar images */}
            {clientImgs.map((item, index) => (
              <div 
                key={index}
                className="w-6 h-6 sm:w-8 sm:h-8 rounded-full overflow-hidden bg-gray-300 border-2 border-white -ml-2 first:ml-0"
                style={{ zIndex: clientImgs.length - index }}
              >
                <img src={item} alt="Franchise Owner" className="w-full h-full object-cover" />
              </div>
            ))}
          </div>
          <div className="flex items-center flex-wrap justify-center lg:justify-start">
            {/* Star rating */}
            <div className="flex">
              {[1, 2, 3, 4, 5].map((star) => (
                <svg key={star} className="w-3 h-3 sm:w-4 sm:h-4 text-yellow-400" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                </svg>
              ))}
            </div>
            <span className="ml-2 text-xs sm:text-sm font-semibold">4.9</span>
            <span className="ml-1 text-xs text-gray-500">from 50+ franchise owners</span>
          </div>
        </div>
      </motion.div>
      
      {/* Right Image */}
      <motion.div 
        className="w-full lg:w-1/2 mt-8 lg:mt-0"
        initial={{ opacity: 0, x: 50 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.5, delay: 0.2 }}
      >
        <div className="relative flex justify-center lg:justify-end">
          {/* Main illustration */}
          <motion.div 
            className="w-full max-w-md h-[350px] sm:h-[400px] lg:h-[450px] bg-gradient-to-br from-[#066d73]/20 to-[#044d52]/20 rounded-2xl overflow-hidden relative"
            whileHover={{ y: -5 }}
          >
            {/* Website mockup */}
            <motion.div 
              className="absolute top-[10%] left-[10%] w-[80%] h-[80%] bg-white rounded-lg  overflow-hidden"
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.4, duration: 0.5 }}
            >
              {/* Website header */}
              <div className="h-[10%] bg-[#066d73] flex items-center px-4">
                <div className="w-3 h-3 rounded-full bg-red-500 mr-2"></div>
                <div className="w-3 h-3 rounded-full bg-yellow-500 mr-2"></div>
                <div className="w-3 h-3 rounded-full bg-green-500"></div>
                <div className="h-2 w-[60%] bg-[#066d73]/60 ml-auto rounded-full"></div>
              </div>
              
              {/* Website content */}
              <div className="p-4 h-[90%]">
                <div className="h-[30%] bg-gray-100 rounded-md mb-3"></div>
                <div className="h-2 w-[80%] bg-gray-200 mb-2 rounded-full"></div>
                <div className="h-2 w-[60%] bg-gray-200 mb-4 rounded-full"></div>
                <div className="flex gap-2 mb-4">
                  <div className="h-6 w-20 bg-[#066d73] rounded-md"></div>
                  <div className="h-6 w-20 bg-gray-200 rounded-md"></div>
                </div>
                <div className="grid grid-cols-2 gap-2">
                  <div className="h-16 bg-gray-100 rounded-md"></div>
                  <div className="h-16 bg-gray-100 rounded-md"></div>
                  <div className="h-16 bg-gray-100 rounded-md"></div>
                  <div className="h-16 bg-gray-100 rounded-md"></div>
                </div>
              </div>
            </motion.div>
            
            {/* Floating elements */}
            <motion.div 
              className="absolute -right-4 top-[15%] w-16 h-16 bg-[#066d73] rounded-full flex items-center justify-center text-white font-bold text-xl shadow-lg"
              animate={{ y: [0, -10, 0] }}
              transition={{ repeat: Infinity, duration: 2 }}
            >
              <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 21a4 4 0 01-4-4V5a2 2 0 012-2h4a2 2 0 012 2v12a4 4 0 01-4 4zm0 0h12a2 2 0 002-2v-4a2 2 0 00-2-2h-2.343M11 7.343l1.657-1.657a2 2 0 012.828 0l2.829 2.829a2 2 0 010 2.828l-8.486 8.485M7 17h.01" />
              </svg>
            </motion.div>
            
            <motion.div 
              className="absolute left-4 bottom-[20%] w-14 h-14 bg-[#044d52] rounded-lg flex items-center justify-center text-white font-bold text-xl shadow-lg"
              animate={{ y: [0, 10, 0] }}
              transition={{ repeat: Infinity, duration: 2.5, delay: 0.5 }}
            >
              <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
              </svg>
            </motion.div>
          </motion.div>
        </div>
      </motion.div>
    </div>
  );
};

export default Hero;