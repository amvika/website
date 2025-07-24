import React from 'react';
import { motion } from 'framer-motion';

const OurFeatures = () => {
  const features = [
    {
      number: '01',
      title: 'Practical, Job-Focused Training',
      description: 'Learn real-world skills like Microsoft Excel and digital tools that employers need today.'
    },
    {
      number: '02',
      title: 'Expert Guidance',
      description: 'Our experienced mentors guide you step-by-step—from basics to advanced.'
    },
    {
      number: '03',
      title: 'Lifetime Access',
      description: 'Revisit sessions anytime to refresh your knowledge and stay up to date.'
    },
    {
      number: '04',
      title: 'Structured Curriculum',
      description: 'Clear, easy-to-follow syllabus tailored to beginners and job seekers.'
    }
  ];

  return (
    <div className="py-16 px-4 sm:px-6 lg:px-20 bg-white">
      <div className="max-w-7xl mx-auto">
        <div className=" flex-col lg:flex-row gap-10 lg:gap-16 items-start">
          {/* Left side - Title and description */}
          <motion.div 
            className="w-full"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
              Why Choose Amvika NEXT for Skill Development?
            </h2>
            <p className="text-gray-600 mb-8">
              Get hands-on training and support designed to help you earn from home and become job-ready.
            </p>
          </motion.div>

          {/* Right side - Feature grid */}
          <div className="w-full grid grid-cols-1 sm:grid-cols-2 gap-x-10 gap-y-8 bg-gray-50 rounded-lg p-10">
            {features.map((feature, index) => (
              <motion.div 
                key={index}
                className="p-6 transition-shadow duration-300"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                whileHover={{ y: -5 }}
              >
                <div className="flex flex-col gap-1">
                  <span className="text-amber-400 text-4xl sm:text-5xl font-bold mb-3">
                    {feature.number}
                  </span>
                  <div className="space-y-1">
                    <h3 className="text-base font-medium text-gray-900 mb-1">
                      {feature.title}
                    </h3>
                    <p className="text-gray-500 text-sm">
                      {feature.description}
                    </p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default OurFeatures;