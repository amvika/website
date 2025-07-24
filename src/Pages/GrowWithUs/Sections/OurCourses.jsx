import React, { useState, useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import courses from '../../../data/courses';
import { ArrowRight } from 'lucide-react';

const OurCourses = ({ scrollToEnrollForm }) => {
  const [activeCategory, setActiveCategory] = useState('ALL CATEGORY');
  const sectionRef = useRef(null);
  const isInView = useInView(sectionRef, { once: true });

  const categories = [
    'UX/UI DESIGN',
    'DEVELOPMENT',
    'MARKETING',
    'BUSINESS',
    'TECHNOLOGY',
    'ALL CATEGORY'
  ];

  const filteredCourses = activeCategory === 'ALL CATEGORY' 
    ? courses 
    : courses.filter(course => course.category === activeCategory);

  return (
    <div className="py-16 px-6 md:px-20 bg-gray-50" ref={sectionRef}>
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <motion.div 
          className="text-center mb-12"
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="text-4xl font-bold text-gray-800 mb-4">
            Find the best course for <br /> your needs
          </h2>
        </motion.div>

        {/* Category Tabs */}
        

        {/* Course Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredCourses.map((course, index) => (
            <motion.div
              key={course.id}
              className="bg-white  overflow-hidden transition-shadow duration-300"
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              transition={{ duration: 0.5, delay: 0.1 + (index * 0.1) }}
              whileHover={{ y: -5 }}
            >
              {/* Course Image */}
              <div className="relative h-48 overflow-hidden">
                <img 
                  src={course.image} 
                  alt={course.title} 
                  className="w-full h-full object-cover"
                />
                <div className="absolute bottom-0 left-0 bg-amber-500 text-white text-xs font-bold px-3 py-1">
                  {course.category}
                </div>
              </div>

              {/* Course Content */}
              <div className="p-5">
                <h3 className="text-lg font-semibold text-gray-800 mb-2">{course.title}</h3>
                <p className="text-sm text-gray-500 mb-3">by {course.author}</p>
                
                <div className="flex items-center justify-between mb-4">
                  <div className="flex items-center space-x-3">
                    <div className="flex items-center">
                      <svg className="w-4 h-4 text-amber-500" fill="currentColor" viewBox="0 0 20 20">
                        <path d="M10 12a2 2 0 100-4 2 2 0 000 4z" />
                        <path fillRule="evenodd" d="M.458 10C1.732 5.943 5.522 3 10 3s8.268 2.943 9.542 7c-1.274 4.057-5.064 7-9.542 7S1.732 14.057.458 10zM14 10a4 4 0 11-8 0 4 4 0 018 0z" clipRule="evenodd" />
                      </svg>
                      <span className="text-xs text-gray-500 ml-1">2.5k views</span>
                    </div>
                    <div className="flex items-center">
                      <svg className="w-4 h-4 text-amber-500" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-12a1 1 0 10-2 0v4a1 1 0 00.293.707l2.828 2.829a1 1 0 101.415-1.415L11 9.586V6z" clipRule="evenodd" />
                      </svg>
                      <span className="text-xs text-gray-500 ml-1">{course.duration}</span>
                    </div>
                  </div>
                  <div className="text-xs font-medium bg-gray-100 text-gray-800 px-2 py-1 rounded">
                    {course.level}
                  </div>
                </div>

                <div className="mb-4">
                  <h4 className="text-sm font-semibold text-gray-700 mb-2">Learn:</h4>
                  <ul className="text-xs text-gray-600 space-y-1">
                    {course.learn.map((item, idx) => (
                      <li key={idx} className="flex items-start">
                        <span className="text-amber-500 mr-2">•</span>
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>

                <p className="text-xs text-gray-600 mb-4 flex items-center"><ArrowRight className='mr-2'/>{course.perfect_for}</p>

                <div className="flex items-center justify-between">
                  
                  <motion.button 
                    className="bg-amber-500 hover:bg-amber-600 text-white px-4 py-2 rounded-full text-sm font-medium"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    onClick={scrollToEnrollForm}
                  >
                    Enroll Now
                  </motion.button>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default OurCourses;