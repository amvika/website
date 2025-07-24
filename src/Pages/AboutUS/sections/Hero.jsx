import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';


const Hero = () => {
  return (
    <div className=" px-4 sm:px-6 lg:px-20 py-8 sm:py-12 lg:py-16 flex flex-col lg:flex-row items-center justify-between gap-6 lg:gap-10 bg-white relative overflow-hidden">
      {/* Background decorative elements */}
      <div className="absolute top-20 right-10 text-[#049e8b] opacity-20 hidden sm:block">
        <span className="text-6xl">●</span>
      </div>
      <div className="absolute bottom-20 left-10 text-[#049e8b] opacity-20 hidden sm:block">
        <span className="text-6xl">■</span>
      </div>
      
      {/* Left Content */}
      <motion.div 
        className="w-full lg:w-1/2 text-left z-10"
        initial={{ opacity: 0, x: -50 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.5 }}
      >
        <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold leading-tight mb-4 sm:mb-6 text-gray-900">
          About <span className="bg-gradient-to-r from-[#049e8b] to-[#037c6d] bg-clip-text text-transparent">Amvika Next</span>
          <span className="block mt-2">Empowering Careers</span>
        </h1>

        <p className="text-gray-600 mb-6 sm:mb-8 text-base sm:text-lg max-w-lg">
          We are a modern educational initiative bridging the gap between academic knowledge and real-world skills. Our mission is to empower students and professionals through high-quality, skill-based education that leads to meaningful careers.
        </p>

        {/* CTA Button */}
        {/* <motion.button 
          className="bg-[#049e8b] text-white px-6 sm:px-8 py-2.5 sm:py-3 rounded-full flex items-center gap-2 transition-all duration-300 shadow-md"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          Explore Courses <ArrowRight size={16} className="sm:w-[18px]" />
        </motion.button> */}
        
        {/* Stats Section */}
        
          
      </motion.div>

      {/* Right Content - Image */}
      <motion.div 
        className="w-full lg:w-1/2 relative z-10 lg:mt-0"
        initial={{ opacity: 0, x: 50 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.5, delay: 0.2 }}
      >
        <div className="relative">
          {/* Main Image */}
          <div className="overflow-hidden rounded-2xl ">
            <div className="aspect-w-4 aspect-h-3 relative">
              <div className="w-full h-full bg-gradient-to-br from-[#e6f7f5] to-[#c5ebe7] flex items-center justify-center">
                <img 
                  src='https://images.unsplash.com/photo-1524178232363-1fb2b075b655?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80' 
                  alt="Students learning in classroom"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </div>
          
          {/* Decorative element - top right */}
          <motion.div 
            className="absolute -top-4 -right-4 bg-[#049e8b] p-3 sm:p-4 rounded-lg shadow-lg hidden sm:block"
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.5 }}
          >
            <div className="text-white text-xs sm:text-sm">
              <div className="flex items-center mb-1">
                <span className="mr-1">✦</span>
                <span>Learning</span>
              </div>
              <div>that matters</div>
            </div>
          </motion.div>
          
          {/* Expert Trainers Card */}
          <motion.div 
            className="absolute -bottom-5 left-2 sm:left-10 bg-white p-2 sm:p-3 rounded-xl shadow-lg"
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.7 }}
          >
            <p className="text-[10px] sm:text-xs font-medium mb-2">Expert Trainers</p>
            <div className="flex items-center">
              <div className="flex -space-x-2">
                <div className="w-6 h-6 sm:w-8 sm:h-8 rounded-full overflow-hidden bg-[#049e8b] border-2 border-white">
                  <img src="https://randomuser.me/api/portraits/men/32.jpg" className='w-full h-full object-cover' alt="Trainer" />
                </div>
                <div className="w-6 h-6 sm:w-8 sm:h-8 rounded-full overflow-hidden bg-[#049e8b] border-2 border-white">
                  <img src="https://randomuser.me/api/portraits/women/44.jpg" className='w-full h-full object-cover' alt="Trainer" />
                </div>
                <div className="w-6 h-6 sm:w-8 sm:h-8 rounded-full overflow-hidden bg-[#049e8b] border-2 border-white">
                  <img src="https://randomuser.me/api/portraits/men/46.jpg" className='w-full h-full object-cover' alt="Trainer" />
                </div>
                <div className="w-6 h-6 sm:w-8 sm:h-8 rounded-full bg-white border-2 border-gray-200 flex items-center justify-center text-[10px] sm:text-xs">+12</div>
              </div>
            </div>
          </motion.div>
        </div>
      </motion.div>
    </div>
  );
};

export default Hero;