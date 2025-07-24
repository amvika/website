import React, { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { GraduationCap, Briefcase, Users, School } from 'lucide-react';

const Branding2 = () => {
  const leftContentRef = useRef(null);
  const rightContentRef = useRef(null);
  const isLeftInView = useInView(leftContentRef, { once: true });
  const isRightInView = useInView(rightContentRef, { once: true });

  return (
    <div className="py-16 px-6 md:px-20 bg-white">
      <div className="max-w-7xl mx-auto flex flex-col lg:flex-row items-center gap-12">
        {/* Left Content - Cards */}
        <motion.div 
          ref={leftContentRef}
          className="w-full lg:w-1/2 relative"
          initial={{ opacity: 0, x: -50 }}
          animate={isLeftInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -50 }}
          transition={{ duration: 0.5 }}
        >
          <div className="grid grid-cols-2 gap-4">
            <motion.div 
              className="bg-white p-6 rounded-xl  border border-gray-100"
              whileHover={{ scale: 1.05 }}
            >
              <div className="bg-[#066d73] p-3 rounded-full w-12 h-12 flex items-center justify-center mb-4">
                <GraduationCap className="text-white w-6 h-6" />
              </div>
              <h3 className="text-gray-800 font-semibold mb-2">Students</h3>
              <p className="text-sm text-gray-600">Subject and career guidance</p>
            </motion.div>

            <motion.div 
              className="bg-white p-6 rounded-xl  border border-gray-100"
              whileHover={{ scale: 1.05 }}
            >
              <div className="bg-[#066d73] p-3 rounded-full w-12 h-12 flex items-center justify-center mb-4">
                <Briefcase className="text-white w-6 h-6" />
              </div>
              <h3 className="text-gray-800 font-semibold mb-2">Job Seekers</h3>
              <p className="text-sm text-gray-600">Clarity on strengths</p>
            </motion.div>

            <motion.div 
              className="bg-white p-6 rounded-xl  border border-gray-100"
              whileHover={{ scale: 1.05 }}
            >
              <div className="bg-[#066d73] p-3 rounded-full w-12 h-12 flex items-center justify-center mb-4">
                <Users className="text-white w-6 h-6" />
              </div>
              <h3 className="text-gray-800 font-semibold mb-2">HR Departments</h3>
              <p className="text-sm text-gray-600">Hiring & training solutions</p>
            </motion.div>

            <motion.div 
              className="bg-white p-6 rounded-xl  border border-gray-100"
              whileHover={{ scale: 1.05 }}
            >
              <div className="bg-[#066d73] p-3 rounded-full w-12 h-12 flex items-center justify-center mb-4">
                <School className="text-white w-6 h-6" />
              </div>
              <h3 className="text-gray-800 font-semibold mb-2">Institutions</h3>
              <p className="text-sm text-gray-600">Schools, colleges & counselors</p>
            </motion.div>
          </div>
        </motion.div>

        {/* Right Content - Text */}
        <div 
          ref={rightContentRef}
          className="w-full lg:w-[52%]"
          initial={{ opacity: 0, x: 50 }}
          animate={isRightInView ? { opacity: 1, x: 0 } : { opacity: 0, x: 50 }}
          transition={{ duration: 0.6 }}
        >    
          <p className="text-[#066d73] font-semibold text-sm uppercase tracking-wider mb-3">
            Who Can Use It?
          </p>
         
          <h2 className="text-2xl md:text-3xl font-semibold text-gray-800 mb-4 leading-snug">
          Scope and Sphere of <span className="text-[#066d73]">Amvika Next Software </span>
          </h2>
          <p className="text-gray-600 text-base leading-relaxed mb-6">
          Our software is the latest technology that can be incorporated in different spheres. It is a revolutionary product that can change the way we think and pursue our life goals. Also, the use of software can help achieve financial stability, generating income by spending a few hours and working from home comfortably.
          </p>
          
          <ul className="space-y-4 text-sm text-gray-700 mb-6 list-disc pl-5">
            <li><strong>Workplaces:</strong> Organisations and offices can help employees and employers acknowledge their expertise. </li>
            <li><strong>Educational institutions:</strong>  Help students choose their subjects diligently and enhance their career potential.</li>
            <li><strong>HR departments:</strong> Utilise the AI power to hire and train the right talent.</li>
            <li><strong>Job Seekers and Entrepreneurs:</strong> Acknowledge their strengths and weakness and decide a career path. </li>
          </ul>

          <a 
          href='https://eye2i.ai/landing-page/jlwBTEtom4dvcsN6'
            target='_blank'
            className="bg-gradient-to-r from-[#066d73] to-[#025066] text-white px-6 py-3 rounded-full transition-all duration-300 text-sm font-medium"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            Explore Solutions
          </a>
        </div>
      </div>
    </div>
  );
};

export default Branding2;
