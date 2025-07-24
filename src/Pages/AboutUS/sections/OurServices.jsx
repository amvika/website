import React, { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { ArrowRight, Users, Briefcase, Rocket } from 'lucide-react';
import talentConnectorImg from '../Assets/talent-connector.png';
import businessOwnerImg from '../assets/business-owner.png';
import skillBasedImg from '../assets/skill-based.png';

const OurServices = () => {
  const sectionRef = useRef(null);
  const isInView = useInView(sectionRef, { once: true });

  const serviceModels = [
    {
      id: 1,
      title: 'The Talent Connector',
      icon: Users,
      image: talentConnectorImg,
      role: 'Identify individuals in your network and introduce them to the brain analysis service, which provides an "Individual Brain Report" through eye analysis.',
      opportunity: 'Help others understand their unique capabilities and guide them towards fulfilling career paths.',
      earningPotential: 'Unlimited; dedicating as little as 1 hour per day can potentially yield significant earnings.'
    },
    {
      id: 2,
      title: 'Independent Business Owner',
      icon: Briefcase,
      image: businessOwnerImg,
      role: 'Launch your own business offering services like GST registration, tax consultation, audit support, accounting, and the brain report service.',
      opportunity: 'Even without prior expertise, a comprehensive 1-hour training equips you to offer these services effectively from home.',
      earningPotential: 'Substantial income with the potential to earn crores annually.'
    },
    {
      id: 3,
      title: 'Skill-Based Earning',
      icon: Rocket,
      image: skillBasedImg,
      role: 'Develop in-demand skills through Amvika NEXT\'s training programs and leverage them to earn a substantial income from home.',
      opportunity: 'Access training in high-demand skills that can be performed remotely, tapping into a vast market of opportunities.',
      earningPotential: 'By acquiring the right skills, you can earn lakhs of rupees per month working from the comfort of your home.'
    }
  ];

  return (
    <div className="py-16 px-4 sm:px-6 lg:px-20 bg-gray-50" ref={sectionRef}>
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <motion.div 
          className="text-center mb-12"
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="text-4xl font-bold text-gray-800 mb-4">
            Our Service <span className="bg-gradient-to-r from-[#049e8b] to-[#037c6d] bg-clip-text text-transparent">Models</span>
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            We provide skill development services and CA services through three flexible business models designed to help you succeed.
          </p>
        </motion.div>

        {/* Service Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {serviceModels.map((model, index) => (
            <motion.div
              key={model.id}
              className="bg-white  overflow-hidden  border duration-300 h-full"
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              transition={{ duration: 0.5, delay: 0.1 + (index * 0.1) }}
              whileHover={{ y: -5}}
            >
              {/* Model Header */}
              <div className="relative">
                <img 
                  src={model.image} 
                  alt={model.title}
                  className="w-full h-48 object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-r from-[#049e8b]/50 to-[#037c6d]/10 p-6 text-white flex flex-col justify-end">
                  <model.icon className="w-10 h-10 mb-3" />
                  <h3 className="text-xl font-bold mb-2">Model {model.id}: {model.title}</h3>
                </div>
              </div>

              {/* Model Content */}
              <div className="p-6">
                <div className="mb-4">
                  <h4 className="text-sm font-semibold text-gray-700 mb-2">Role:</h4>
                  <p className="text-gray-600 text-sm">{model.role}</p>
                </div>

                <div className="mb-4">
                  <h4 className="text-sm font-semibold text-gray-700 mb-2">Opportunity:</h4>
                  <p className="text-gray-600 text-sm">{model.opportunity}</p>
                </div>

                <div className="mb-6">
                  <h4 className="text-sm font-semibold text-gray-700 mb-2">Earning Potential:</h4>
                  <p className="text-gray-600 text-sm">{model.earningPotential}</p>
                </div>

                
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default OurServices;