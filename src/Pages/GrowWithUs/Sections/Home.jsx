import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, User, User2Icon } from 'lucide-react';
import { Link } from 'react-router-dom';

const Home = ({ scrollToEnrollForm }) => {
  return (
    <div className="min-h-[90vh] px-4 bg-gray-100 sm:px-6 lg:px-20 py-24  flex flex-col lg:flex-row items-center justify-between gap-6 lg:gap-10  relative overflow-hidden">
      {/* Background decorative elements */}
      <div className="absolute top-20 right-10 text-amber-400 opacity-70 hidden sm:block">
        <span className="text-4xl"><User2Icon/></span>
      </div>
      
      {/* Left Content */}
      <motion.div 
        className="w-full lg:w-1/2 text-left z-10 px-4 sm:px-0"
        initial={{ opacity: 0, x: -50 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.5 }}
      >
        <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold leading-tight mb-4 sm:mb-6 text-gray-900">
          Get Skills Upliftment  <span className="inline-flex items-center"><span className="w-8 h-8 sm:w-10 sm:h-10 rounded-full bg-[#eaa72e] mr-1 overflow-hidden flex items-center justify-center text-white text-xs p-2"><User/></span></span>
          <span className="block">and Grow in careers with Microsoft Power BI. <span className="text-[#eaa72e]">♦</span></span>
        </h1>

        <p className="text-gray-600 mb-6 sm:mb-8 text-sm sm:text-base lg:text-lg max-w-lg">
          Unlock your potential with comprehensive Microsoft Power BI training. Master data visualization, analytics, and business intelligence skills to advance your career in the digital age.
        </p>

        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 w-full sm:w-auto">
          <motion.button 
            onClick={scrollToEnrollForm}
            className="w-full sm:w-auto bg-[#eaa72e] text-white px-4 sm:px-6 lg:px-8 py-2.5 sm:py-3 rounded-full flex items-center justify-center gap-2 transition-all duration-300 shadow-md text-sm sm:text-base"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            Get Started
          </motion.button>
          
         
        </div>
        
        {/* Rating Section */}
        <div className="mt-8 flex flex-col sm:flex-row items-start sm:items-center gap-4 sm:gap-0">
          <div className="bg-white p-2 rounded-lg sm:mr-4">
            <div className="flex">
              {[1, 2, 3, 4, 5].map((star) => (
                <svg key={star} className="w-3 h-3 sm:w-4 sm:h-4 text-amber-400" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                </svg>
              ))}
            </div>
          </div>
          <div>
            <p className="text-xs sm:text-sm font-medium">Over five thousand students have given</p>
            <p className="text-xs sm:text-sm text-gray-600">a 5 star review to their tutor</p>
          </div>
        </div>
      </motion.div>

      {/* Right Content - Image */}
      <motion.div 
        className="w-full lg:w-1/2 relative z-10  lg:mt-0"
        initial={{ opacity: 0, x: 50 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.5, delay: 0.2 }}
      >
        <div className="relative">
          {/* Main Image */}
          <div className="overflow-hidden ">
            <div className="aspect-w-4 aspect-h-3 relative">
              <div className="w-full h-full bg-gradient-to-br flex items-center justify-center">
                <img 
                  src='https://media.istockphoto.com/id/1372115128/photo/enjoy-music-together-happy-young-indian-couple-in-wireless-headphones-listening-songs-and.jpg?s=612x612&w=0&k=20&c=dcrfjkimO7HKqD64oDv3T7uNQ0pUm6B7ce4R4eKI45w=' 
                  alt="Students learning"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </div>
          
          {/* Decorative element - top right */}
          <div className="absolute -top-4 -right-4 bg-[#ffc133] p-3 sm:p-4 rounded-lg  hidden sm:block">
            <div className="text-white text-xs sm:text-sm">
              <div className="flex items-center mb-1">
                <span className="mr-1">✦</span>
                <span>Define your future</span>
              </div>
              <div>with finesse.</div>
            </div>
          </div>
          
          {/* Certified Members Card */}
          <motion.div 
            className="absolute -bottom-5 right-0 sm:right-10 bg-white p-2 sm:p-3 rounded-xl "
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.5 }}
          >
            <p className="text-[10px] sm:text-xs font-medium mb-2">99+ Certified Mentors</p>
            <div className="flex items-center">
              <div className="flex -space-x-2">
                <div className="w-6 h-6 sm:w-8 sm:h-8 rounded-full overflow-hidden bg-pink-300 border-2 border-white"><img src="https://assets.techcircle.in/uploads/article-image/2024/03/images/34456-sap.jpg" className='w-full h-full object-cover' alt="" /></div>
                <div className="w-6 h-6 sm:w-8 sm:h-8 rounded-full overflow-hidden bg-amber-300 border-2 border-white"><img src="https://s.yimg.com/ny/api/res/1.2/HKPvWF5wFvRZZHJGGYd6Fg--/YXBwaWQ9aGlnaGxhbmRlcjt3PTY0MDtoPTQyNw--/https://media.zenfs.com/en/aol_variety_168/b8bd3f87c0a2a24e62132b469bf57e18" className='w-full h-full object-cover' alt="" /></div>
                <div className="w-6 h-6 sm:w-8 sm:h-8 rounded-full overflow-hidden bg-red-300 border-2 border-white"><img src="https://images.firstpost.com/uploads/2025/01/rah-1-2025-01-bf41f271977a473f15110e0eeffb863d.jpg?im=FitAndFill=(596,336)" className='w-full h-full object-cover' alt="" /></div>
                <div className="w-6 h-6 sm:w-8 sm:h-8 rounded-full bg-white border-2 border-gray-200 flex items-center justify-center text-[10px] sm:text-xs">+</div>
              </div>
            </div>
          </motion.div>
        </div>
      </motion.div>
    </div>
  );
};

export default Home;