import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, CheckCircle, TrendingUp, Users, Award, Brain, FileText } from 'lucide-react';
import { Link } from 'react-router-dom';

const OurFrancises = () => {
  // Model 1: Talent Connector details
  const talentConnectorDetails = {
    role: "Identify individuals in your network and introduce them to the brain analysis service, which provides an 'Individual Brain Report' through eye analysis.",
    opportunity: "Help others understand their unique capabilities and guide them towards fulfilling career paths.",
    earningPotential: "Unlimited; dedicating as little as 1 hour per day can potentially yield significant earnings.",
    benefits: [
      "Be a changemaker transforming lives",
      "Share non-invasive, tech-based brain reports",
      "Easy to start with software-backed analysis",
      "Work in schools, colleges, communities, or workplaces",
      "1 hour a day can create significant impact",
      "Potential to earn ₹1 Cr to ₹5 Cr annually"
    ],
    stats: [
      { icon: <TrendingUp className="w-8 h-8 text-[#066d73]" />, value: "₹5 Crore", label: "Annual Earning Potential" },
      { icon: <Users className="w-8 h-8 text-[#066d73]" />, value: "1 Hour+", label: "Daily Time Investment" },
      { icon: <Brain className="w-8 h-8 text-[#066d73]" />, value: "Tech-Driven", label: "Brain Analysis Model" }
    ]
  };

  // Model 2: Independent Business Owner details
  const businessOwnerDetails = {
    role: "Launch your own business offering services like GST registration, tax consultation, audit support, accounting, and the brain report service.",
    opportunity: "Even without prior expertise, a comprehensive 1-hour training equips you to offer these services effectively from home.",
    earningPotential: "Substantial income with the potential to earn crores annually.",
    benefits: [
      "Be your own boss and build your brand",
      "Offer diverse range of in-demand services",
      "Comprehensive 1-hour training provided",
      "Work from anywhere with significant earning potential",
      "No prior expertise required in all service areas",
      "Potential to earn up to ₹3 Lakhs per month"
    ],
    stats: [
      { icon: <TrendingUp className="w-8 h-8 text-[#066d73]" />, value: "₹3 Lakhs+", label: "Monthly Earning Potential" },
      { icon: <Users className="w-8 h-8 text-[#066d73]" />, value: "100+", label: "Successful Partners" },
      { icon: <Award className="w-8 h-8 text-[#066d73]" />, value: "1 Hour", label: "Training Time" }
    ]
  };

  return (
    <div className="py-16 px-6 md:px-20 bg-gray-50">
      {/* Section Header */}
      <motion.div 
        className="mb-12 text-center"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <h2 className="text-4xl font-bold mb-4 text-black">Our Franchise Models</h2>
        <p className="text-gray-600 max-w-3xl mx-auto">
          Choose the path that aligns with your goals and aspirations. Whether you want to transform lives through talent connection or build your own business empire, we have the perfect model for you.
        </p>
      </motion.div>

      {/* Model 1: Talent Connector */}
      <motion.div
        className="mb-16 bg-white p-8 rounded-lg shadow-sm"
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.2 }}
      >
        <div className="flex flex-col lg:flex-row gap-8">
          {/* Left Content */}
          <div className="w-full lg:w-1/2">
            <div className="mb-4 inline-block bg-[#066d73] bg-opacity-10 px-4 py-2 rounded-full">
              <h3 className="text-[#066d73] font-bold text-lg">Model 1</h3>
            </div>
            <h3 className="text-3xl font-bold mb-6 text-black">The <span className="text-[#066d73]">Talent Connector</span></h3>
            
            <div className="mb-6">
              <h4 className="font-semibold text-lg mb-2 text-gray-800">Role:</h4>
              <p className="text-gray-600">{talentConnectorDetails.role}</p>
            </div>
            
            <div className="mb-6">
              <h4 className="font-semibold text-lg mb-2 text-gray-800">Opportunity:</h4>
              <p className="text-gray-600">{talentConnectorDetails.opportunity}</p>
            </div>
            
            <div className="mb-6">
              <h4 className="font-semibold text-lg mb-2 text-gray-800">Earning Potential:</h4>
              <p className="text-gray-600">{talentConnectorDetails.earningPotential}</p>
            </div>
          </div>
          
          {/* Right Content - Stats & Benefits */}
          <div className="w-full lg:w-1/2">
            {/* Stats */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-8">
              {talentConnectorDetails.stats.map((stat, index) => (
                <motion.div 
                  key={index}
                  className="bg-white p-4 rounded-lg border border-gray-100 text-center"
                  whileHover={{ y: -5, boxShadow: '0 10px 25px -5px rgba(0, 0, 0, 0.1)' }}
                  transition={{ duration: 0.3 }}
                >
                  <div className="flex justify-center mb-3">{stat.icon}</div>
                  <h3 className="text-xl font-bold mb-1 text-black">{stat.value}</h3>
                  <p className="text-gray-600 text-sm">{stat.label}</p>
                </motion.div>
              ))}
            </div>
            
            {/* Benefits */}
            <div className="bg-gray-50 p-6 rounded-lg">
              <h4 className="font-semibold text-lg mb-4 text-[#066d73]">Key Benefits:</h4>
              <ul className="space-y-3">
                {talentConnectorDetails.benefits.map((benefit, index) => (
                  <motion.li 
                    key={index} 
                    className="flex items-start gap-3"
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.3, delay: 0.1 + (index * 0.1) }}
                  >
                    <CheckCircle className="w-5 h-5 text-[#066d73] mt-1 flex-shrink-0" />
                    <span className='text-gray-700'>{benefit}</span>
                  </motion.li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </motion.div>

      {/* Model 2: Independent Business Owner */}
      <motion.div
        className="mb-16 bg-white p-8 rounded-lg shadow-sm"
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.4 }}
      >
        <div className="flex flex-col lg:flex-row gap-8">
          {/* Left Content */}
          <div className="w-full lg:w-1/2">
            <div className="mb-4 inline-block bg-[#066d73] bg-opacity-10 px-4 py-2 rounded-full">
              <h3 className="text-[#066d73] font-bold text-lg">Model 2</h3>
            </div>
            <h3 className="text-3xl font-bold mb-6 text-black">Independent <span className="text-[#066d73]">Business Owner</span></h3>
            
            <div className="mb-6">
              <h4 className="font-semibold text-lg mb-2 text-gray-800">Role:</h4>
              <p className="text-gray-600">{businessOwnerDetails.role}</p>
            </div>
            
            <div className="mb-6">
              <h4 className="font-semibold text-lg mb-2 text-gray-800">Opportunity:</h4>
              <p className="text-gray-600">{businessOwnerDetails.opportunity}</p>
            </div>
            
            <div className="mb-6">
              <h4 className="font-semibold text-lg mb-2 text-gray-800">Earning Potential:</h4>
              <p className="text-gray-600">{businessOwnerDetails.earningPotential}</p>
            </div>
            
            
          </div>
          
          {/* Right Content - Stats & Benefits */}
          <div className="w-full lg:w-1/2">
            {/* Stats */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-8">
              {businessOwnerDetails.stats.map((stat, index) => (
                <motion.div 
                  key={index}
                  className="bg-white p-4 rounded-lg border border-gray-100 text-center"
                  whileHover={{ y: -5, boxShadow: '0 10px 25px -5px rgba(0, 0, 0, 0.1)' }}
                  transition={{ duration: 0.3 }}
                >
                  <div className="flex justify-center mb-3">{stat.icon}</div>
                  <h3 className="text-xl font-bold mb-1 text-black">{stat.value}</h3>
                  <p className="text-gray-600 text-sm">{stat.label}</p>
                </motion.div>
              ))}
            </div>
            
            {/* Benefits */}
            <div className="bg-gray-50 p-6 rounded-lg">
              <h4 className="font-semibold text-lg mb-4 text-[#066d73]">Key Benefits:</h4>
              <ul className="space-y-3">
                {businessOwnerDetails.benefits.map((benefit, index) => (
                  <motion.li 
                    key={index} 
                    className="flex items-start gap-3"
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.3, delay: 0.1 + (index * 0.1) }}
                  >
                    <CheckCircle className="w-5 h-5 text-[#066d73] mt-1 flex-shrink-0" />
                    <span className='text-gray-700'>{benefit}</span>
                  </motion.li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </motion.div>

      {/* Call to Action */}
      <motion.div 
        className="mt-16 text-center"
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.6 }}
      >
        <h3 className="text-2xl font-bold mb-4 text-black">Ready to Join Our Franchise Network?</h3>
        <p className="text-gray-600 max-w-2xl mx-auto mb-8">
          Whether you choose to become a Talent Connector or an Independent Business Owner, we provide comprehensive training and support to ensure your success.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link 
            to="/contact-us"
            className="bg-[#066d73] hover:bg-[#057b6f] text-white px-6 py-3 rounded-full flex items-center justify-center gap-2 transition-all duration-300 text-lg font-semibold"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            Become a Talent Connector <ArrowRight size={20} />
          </Link>
          
        </div>
      </motion.div>
    </div>
  );
};

export default OurFrancises;