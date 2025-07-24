import React from 'react';
import { motion } from 'framer-motion';
import { BookOpen, Users, Briefcase, DollarSign } from 'lucide-react';

const ExtraSection = () => {
  const steps = [
    {
      icon: <BookOpen className="w-8 h-8 text-amber-500" />,
      title: 'Choose a skill',
      description: 'Choose a skill you want to train-in after our talent connector recommends the best based on your brain report.'
    },
    {
      icon: <Users className="w-8 h-8 text-amber-500" />,
      title: 'Join training sessions',
      description: 'Join our training session to learn and enhance the skills best suited for you.'
    },
    {
      icon: <Briefcase className="w-8 h-8 text-amber-500" />,
      title: 'Practice with live projects',
      description: 'Get training by managing and practicing on live projects.'
    },
    {
      icon: <DollarSign className="w-8 h-8 text-amber-500" />,
      title: 'Start earning or apply for jobs',
      description: 'Earn by starting your venture or apply for your desired jobs with upscaled skill sets.'
    }
  ];

  return (
    <div className="py-16 px-4 sm:px-6 lg:px-20 bg-gray-50">
      <div className="max-w-7xl mx-auto">
        <motion.div 
          className="text-center mb-12"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
        >
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
             How It Works
          </h2>
          <p className="text-gray-600 max-w-3xl mx-auto">
            Step-by-step or a flowchart:
          </p>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {steps.map((step, index) => (
            <motion.div 
              key={index}
              className="bg-white p-8 text-center"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              whileHover={{ y: -5}}
            >
              <div className="flex justify-center mb-4">{step.icon}</div>
              <h3 className="text-xl font-bold mb-2 text-gray-900">{step.title}</h3>
              <p className="text-gray-600 text-sm">{step.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ExtraSection;