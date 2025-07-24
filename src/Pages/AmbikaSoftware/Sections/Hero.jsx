import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';
import wavePattern from '../Assets/wave-pattern.svg';

const Hero = () => {
  return (
    <div className="min-h-screen px-4 sm:px-6 lg:px-20 py-8 sm:py-12 lg:py-16 flex flex-col lg:flex-row items-center justify-between gap-6 lg:gap-10 bg-white relative overflow-hidden">
      {/* Background pattern */}
      <div className="absolute inset-0 z-0 opacity-10">
        <img src={wavePattern} alt="" className="w-full h-full object-cover" />
      </div>

      {/* Left Content */}
      <motion.div 
        className="w-full lg:w-1/2 text-left z-10"
        initial={{ opacity: 0, x: -50 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.5 }}
      >
        <h1 className="text-4xl sm:text-5xl lg:text-5xl font-bold leading-tight mb-4 sm:mb-6 text-gray-900">
        Leveraging the power of AI For Iris scan and Analysing
          <span className="bg-gradient-to-r ml-2 from-[#066d73] to-[#025066] bg-clip-text text-transparent">
          Mapping the Brain for Guided Growth 

</span>

        </h1>

        <p className="text-gray-600 mb-6 sm:mb-8 text-base sm:text-lg max-w-lg">
        Amvika Next revolutionaries the brain analyses through non-invasive and innovative cutting-edge software. 
        </p>

        {/* CTA Button */}
        <motion.a
          href="https://eye2i.ai/landing-page/jlwBTEtom4dvcsN6" 
          target='_blank'
          className="bg-[#066d73] text-white px-6 sm:px-8 py-2.5 sm:py-3 w-fit rounded-full flex items-center gap-2 transition-all duration-300 shadow-md"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          Generate Report <ArrowRight size={16} className="sm:w-[18px]" />
        </motion.a>
      </motion.div>

      {/* Right Content */}
      <motion.div 
        className="w-full lg:w-1/2 mb-20 lg:mt-0  relative z-10"
        initial={{ opacity: 0, x: 50 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.5, delay: 0.2 }}
      >
        <div className="relative flex justify-center items-center">
          {/* Brain Report Card */}
          <motion.div 
            className="absolute left-0 lg:left-10 top-0 w-[170px] sm:w-[200px] bg-black rounded-3xl p-3  z-20"
            initial={{ y: 20 }}
            animate={{ y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            whileHover={{ y: -5 }}
          >
            <div className="bg-gray-900 rounded-2xl p-3">
              <div className="mb-3">
                <h3 className="text-white text-xs sm:text-sm font-medium mb-1">Individual Brain Report</h3>
                <h3 className="text-white text-xs sm:text-sm font-medium">Eye-Based Insights</h3>
                <div className="flex mt-1">
                  <div className="flex items-center">
                    <div className="flex">
                      {[1, 2, 3, 4, 5].map((star) => (
                        <svg key={star} className="w-2 h-2 sm:w-3 sm:h-3 text-yellow-400" fill="currentColor" viewBox="0 0 20 20">
                          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                        </svg>
                      ))}
                    </div>
                    <span className="ml-1 text-white text-xs">5.0 (1000+)</span>
                  </div>
                </div>
              </div>

              {/* Brain Wave Pattern */}
              <div className="bg-gray-800 rounded-lg p-2 mb-3">
                <svg viewBox="0 0 100 30" xmlns="http://www.w3.org/2000/svg">
                  <path d="M0,15 Q5,5 10,15 T100,15" stroke="#066d73" strokeWidth="1.5" fill="none" />
                  <path d="M0,15 Q5,10 10,15 T100,15" stroke="#066d73" strokeWidth="1" fill="none" opacity="0.6" />
                </svg>
              </div>

              {/* Key Metrics */}
              <div className="flex justify-center space-x-1 mb-2">
                <div className="w-5 h-5 rounded-full bg-indigo-500 flex items-center justify-center text-white text-[8px]">IQ</div>
                <div className="w-5 h-5 rounded-full bg-green-500 flex items-center justify-center text-white text-[8px]">EQ</div>
                <div className="w-5 h-5 rounded-full bg-blue-500 flex items-center justify-center text-white text-[8px]">AQ</div>
                <div className="w-5 h-5 rounded-full bg-purple-500 flex items-center justify-center text-white text-[8px]">CQ</div>
              </div>

              {/* Earning Potential */}
              <div className="text-center">
                <h3 className="text-white text-xl font-bold">₹1-5 Cr</h3>
                <p className="text-gray-400 text-xs">Annual Potential</p>
              </div>
            </div>
          </motion.div>

          {/* Eye Analysis Visual */}
          <motion.div 
            className="relative ml-[100px] sm:ml-[120px] w-[200px] sm:w-[250px] h-[300px] sm:h-[350px] bg-gradient-to-r from-[#066d73] to-[#025066] rounded-3xl overflow-hidden  z-10"
            whileHover={{ y: -5 }}
            initial={{ y: -20 }}
            animate={{ y: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
          >
            <a href='https://eye2i.ai/landing-page/jlwBTEtom4dvcsN6' target='_blank' className="absolute bottom-2 right-2 bg-white rounded-full px-2 py-1 flex items-center shadow-md">
              <span className="text-xs font-medium">View Analysis</span>
              <svg className="w-4 h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"></path>
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z"></path>
              </svg>
            </a >
          </motion.div>
        </div>
      </motion.div>
    </div>
  );
};

export default Hero;
