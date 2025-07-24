import React, { useRef } from 'react';
import { motion, useInView } from 'framer-motion';

const OurBestProduct = () => {
  const sectionRef = useRef(null);
  const isInView = useInView(sectionRef, { once: true, margin: "-100px" });

  return (
    <div className="py-16 px-6 md:px-20 bg-gray-50" ref={sectionRef}>
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div 
          className="text-center mb-12"
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.5 }}
        >
          <div className="w-20 h-1 bg-gradient-to-r from-[#049e8b] to-[#037c6d] rounded-full mb-4 mx-auto"></div>
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">Brain Analysis Software</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">Advanced AI-powered technology that analyzes eye movement to reveal cognitive patterns</p>
        </div>

        {/* Main Content */}
        <div className="flex flex-col lg:flex-row items-center gap-10">
          {/* Left Content - Image */}
          <div 
            className="w-full lg:w-1/2"
            initial={{ opacity: 0, x: -50 }}
            animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -50 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <div className="relative rounded-2xl overflow-hidden ">
              <div className="aspect-w-16 aspect-h-9 bg-gradient-to-br from-[#049e8b]/20 to-[#037c6d]/20 p-6">
                <div className="flex items-center justify-center h-full">
                  <div className="relative w-full max-w-md mx-auto">
                    {/* Brain Analysis Illustration */}
                    <div className="bg-white  p-6 ">
                      <div className="flex justify-between items-center mb-6">
                        <div className="bg-[#049e8b]/20 p-3 rounded-full">
                          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M12 17C14.7614 17 17 14.7614 17 12C17 9.23858 14.7614 7 12 7C9.23858 7 7 9.23858 7 12C7 14.7614 9.23858 17 12 17Z" stroke="#049e8b" strokeWidth="2" />
                            <path d="M12 7V3M12 21V17M7 12H3M21 12H17M18.364 18.364L15.536 15.536M18.364 5.63603L15.536 8.46447M5.63603 18.364L8.46447 15.536M5.63603 5.63603L8.46447 8.46447" stroke="#049e8b" strokeWidth="2" strokeLinecap="round" />
                          </svg>
                        </div>
                        <h3 className="text-lg font-bold text-gray-800">Neural Pattern Analysis</h3>
                      </div>
                      
                      <div className="mb-6">
                        <div className="relative">
                          <div className="bg-gray-100 rounded-lg p-4 flex items-center justify-center">
                            <svg width="120" height="120" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                              <path d="M12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22Z" stroke="#049e8b" strokeWidth="2" />
                              <path d="M12 17C14.7614 17 17 14.7614 17 12C17 9.23858 14.7614 7 12 7C9.23858 7 7 9.23858 7 12C7 14.7614 9.23858 17 12 17Z" fill="#049e8b" />
                              <path d="M12 15C13.6569 15 15 13.6569 15 12C15 10.3431 13.6569 9 12 9C10.3431 9 9 10.3431 9 12C9 13.6569 10.3431 15 12 15Z" fill="white" />
                              <path d="M12 13C12.5523 13 13 12.5523 13 12C13 11.4477 12.5523 11 12 11C11.4477 11 11 11.4477 11 12C11 12.5523 11.4477 13 12 13Z" fill="black" />
                            </svg>
                          </div>
                          <div className="absolute top-2 right-2 bg-[#049e8b] text-white text-xs font-bold px-2 py-1 rounded-full">Eye Analysis</div>
                        </div>
                      </div>
                      
                      <div className="space-y-3">
                        <div className="flex items-center gap-2">
                          <div className="w-3 h-3 bg-[#049e8b] rounded-full"></div>
                          <div className="flex-1 h-2 bg-gray-200 rounded-full overflow-hidden">
                            <div className="h-full bg-[#049e8b] rounded-full" style={{ width: '85%' }}></div>
                          </div>
                          <span className="text-xs font-medium">85%</span>
                        </div>
                        <div className="flex items-center gap-2">
                          <div className="w-3 h-3 bg-[#037c6d] rounded-full"></div>
                          <div className="flex-1 h-2 bg-gray-200 rounded-full overflow-hidden">
                            <div className="h-full bg-[#037c6d] rounded-full" style={{ width: '70%' }}></div>
                          </div>
                          <span className="text-xs font-medium">70%</span>
                        </div>
                        <div className="flex items-center gap-2">
                          <div className="w-3 h-3 bg-[#049e8b] rounded-full"></div>
                          <div className="flex-1 h-2 bg-gray-200 rounded-full overflow-hidden">
                            <div className="h-full bg-[#049e8b] rounded-full" style={{ width: '92%' }}></div>
                          </div>
                          <span className="text-xs font-medium">92%</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          
          {/* Right Content - Text */}
          <div 
            className="w-full lg:w-1/2 text-left"
            initial={{ opacity: 0, x: 50 }}
            animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: 50 }}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            <div className="space-y-6">
              <div className="bg-white p-6    transition-shadow duration-300">
                <div className="flex items-start gap-4">
                  <div className="bg-[#049e8b]/20 p-3 rounded-full mt-1">
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M9 3H15M9 3V5M9 3H5C3.89543 3 3 3.89543 3 5V19C3 20.1046 3.89543 21 5 21H19C20.1046 21 21 20.1046 21 19V5C21 3.89543 20.1046 3 19 3H15M15 3V5M7 7H17M7 11H17M7 15H13" stroke="#049e8b" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                  </div>
                  <div>
                    <h3 className="font-bold text-xl text-gray-800 mb-2">Advanced Algorithms</h3>
                    <p className="text-gray-600">Our software utilizes machine learning algorithms trained on thousands of data points to analyze eye movement patterns with exceptional accuracy.</p>
                  </div>
                </div>
              </div>
              
              <div className="bg-white p-6    transition-shadow duration-300">
                <div className="flex items-start gap-4">
                  <div className="bg-[#049e8b]/20 p-3 rounded-full mt-1">
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M12 15C13.6569 15 15 13.6569 15 12C15 10.3431 13.6569 9 12 9C10.3431 9 9 10.3431 9 12C9 13.6569 10.3431 15 12 15Z" stroke="#049e8b" strokeWidth="2" />
                      <path d="M2 12H9M15 12H22" stroke="#049e8b" strokeWidth="2" strokeLinecap="round" />
                      <path d="M12 2V9M12 15V22" stroke="#049e8b" strokeWidth="2" strokeLinecap="round" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="font-bold text-xl text-gray-800 mb-2">Real-time Processing</h3>
                    <p className="text-gray-600">Our software processes eye movement data in real-time, providing immediate insights into cognitive patterns and learning preferences without delay.</p>
                  </div>
                </div>
              </div>
              
              <div className="bg-white p-6    transition-shadow duration-300">
                <div className="flex items-start gap-4">
                  <div className="bg-[#049e8b]/20 p-3 rounded-full mt-1">
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22Z" stroke="#049e8b" strokeWidth="2" />
                      <path d="M12 16V12" stroke="#049e8b" strokeWidth="2" strokeLinecap="round" />
                      <path d="M12 8H12.01" stroke="#049e8b" strokeWidth="2" strokeLinecap="round" />
                      <path d="M9 12L15 12" stroke="#049e8b" strokeWidth="2" strokeLinecap="round" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="font-bold text-xl text-gray-800 mb-2">Data Security</h3>
                    <p className="text-gray-600">Our software implements end-to-end encryption and strict privacy protocols to ensure all user data remains secure and confidential throughout the analysis process.</p>
                  </div>
                </div>
              </div>
              
              <button 
                className="mt-6 w-full sm:w-auto bg-gradient-to-r from-[#049e8b] to-[#037c6d] hover:from-[#037c6d] hover:to-[#037c6d] text-white px-6 py-3  flex items-center justify-center gap-2 transition-all duration-300 shadow-lg shadow-[#049e8b]/20 font-medium"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                Explore Our Software
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M5 12H19" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  <path d="M12 5L19 12L12 19" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default OurBestProduct;