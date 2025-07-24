import React, { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import certificate from "../Assets/certificate.png"
const OurProfile = () => {
  const sectionRef = useRef(null);
  const isInView = useInView(sectionRef, { once: true, margin: "-100px" });

  return (
    <div className="py-16 px-6 md:px-20 bg-white" ref={sectionRef}>
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <motion.div 
          className="text-center mb-12"
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.5 }}
        >
          <div className="w-20 h-1 bg-gradient-to-r from-[#066d73] to-[#049e8b] rounded-full mb-4 mx-auto"></div>
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">Our Leadership</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">Meet the visionary behind Amvika Next and our groundbreaking iris technology</p>
        </motion.div>

        {/* Profile Content */}
        <div className="flex flex-col lg:flex-row items-center gap-12">
          {/* Left Content - Image */}
          {/* <motion.div 
            className="w-full lg:w-2/5"
            initial={{ opacity: 0, x: -50 }}
            animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -50 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <div className="relative">
              
              <div className="aspect-w-4 aspect-h-5 bg-gradient-to-br from-[#066d73]/90 to-[#049e8b]/90 rounded-lg overflow-hidden shadow-xl">
                <div className="absolute inset-0 flex items-center justify-center">
                  <svg className="w-32 h-32 text-white/30" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                    <path fillRule="evenodd" d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z" clipRule="evenodd"></path>
                  </svg>
                </div>
                <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/70 to-transparent p-6">
                  <h3 className="text-xl font-bold text-white">Mr. Anubhav Dubey</h3>
                  <p className="text-white/80 text-sm">Founder & CEO, Amvika Next</p>
                </div>
              </div>
              
             
              <div className="absolute -top-4 -right-4 bg-[#066d73] text-white rounded-full px-4 py-2 shadow-lg">
                <span className="text-sm font-bold">12+ Years Experience</span>
              </div>
            </div>
          </motion.div> */}
          
          {/* Right Content - Bio */}
          <motion.div 
            className="w-full lg:w-full text-left"
            initial={{ opacity: 0, x: 50 }}
            animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: 50 }}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            <div className="space-y-6">
              <div className="bg-gray-50 p-6 rounded-lg border-l-4 border-[#066d73] shadow-sm">
                <h3 className="font-bold text-2xl text-gray-800 mb-3">Visionary Entrepreneur</h3>
                <p className="text-gray-700 leading-relaxed">
                  Mr. Anubhav Dubey, based in Madhya Pradesh, is a dynamic entrepreneur and seasoned professional with over 12 years of rich industry experience. As the visionary founder of Amvika Next, he has combined his deep knowledge, strategic mindset, and commitment to innovation to lead groundbreaking advancements in biometric technology.
                </p>
              </div>
              
              <div className="bg-gray-50 p-6 rounded-lg border-l-4 border-[#049e8b] shadow-sm">
                <h3 className="font-bold text-2xl text-gray-800 mb-3">Amvika Next: Innovation in Iris Technology</h3>
                <p className="text-gray-700 leading-relaxed mb-4">
                  Founded two years ago, Amvika Next has quickly established itself as a rising force in the field of iris-based technology, with a particular focus on the development of the Iris Scan Brain Report System—a revolutionary solution that blends biometric identification with neurological insights.
                </p>
                <p className="text-gray-700 leading-relaxed">
                  This cutting-edge technology is the result of a strong collaboration with Mr. Dubey's trusted partner, Mr. Sanjay Gautam, the chief architect behind the core scientific framework of the system.
                </p>
              </div>
              
              <div className="bg-gray-50 p-6 rounded-lg border-l-4 border-[#066d73] shadow-sm">
                <h3 className="font-bold text-2xl text-gray-800 mb-3">Leadership Philosophy</h3>
                <p className="text-gray-700 leading-relaxed">
                  Under Mr. Dubey's leadership, Amvika Next has embraced a vision grounded in precision, innovation, and ethical responsibility. His approach is rooted in delivering high-impact, technology-driven solutions that aim to transform healthcare diagnostics, security systems, and personalized wellness using the power of iris analytics.
                </p>
              </div>
              
             
            </div>
          </motion.div>
        </div>
        
        {/* Quote Section */}
        <motion.div
          className="mt-16 bg-gradient-to-r from-[#066d73] to-[#049e8b] p-8 rounded-lg text-white text-center relative overflow-hidden shadow-xl"
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.7, delay: 0.6 }}
        >
          <div className="absolute top-0 left-0 w-full h-full opacity-10">
            <svg className="w-full h-full" viewBox="0 0 100 100" preserveAspectRatio="none">
              <path d="M0,0 L100,0 L100,100 L0,100 Z" fill="url(#grid)" />
              <defs>
                <pattern id="grid" width="10" height="10" patternUnits="userSpaceOnUse">
                  <path d="M 10 0 L 0 0 0 10" fill="none" stroke="white" strokeWidth="0.5"/>
                </pattern>
              </defs>
            </svg>
          </div>
          <div className="relative z-10">
            <svg className="w-12 h-12 mx-auto mb-4 text-white/50" fill="currentColor" viewBox="0 0 24 24">
              <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z" />
            </svg>
            <p className="text-xl md:text-2xl font-medium italic mb-6">
              Mr. Dubey's entrepreneurial journey is marked by a relentless pursuit of excellence and a passion for meaningful innovation. His leadership continues to shape Amvika Next into a forward-thinking company.
            </p>
            <div className="w-16 h-1 bg-white/30 mx-auto mb-4"></div>
            <p className="font-bold">With a strong commitment to pushing boundaries, Mr. Anubhav Dubey is steering Amvika Next toward becoming a national and global name in the rapidly evolving iris tech ecosystem.</p>
          </div>
        </motion.div>
        <div className='flex justify-center items-center' >
            <img src={certificate} className='h-[50vh] mt-10' alt="" />
        </div>
      </div>
    </div>
  );
};

export default OurProfile;