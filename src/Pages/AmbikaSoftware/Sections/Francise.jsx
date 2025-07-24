import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, CheckCircle, TrendingUp, Users, Award} from 'lucide-react';
import { Link } from 'react-router-dom';


const Franchise = () => {
  // Benefits of becoming a Talent Connector
  const benefits = [
    "Be a changemaker transforming lives",
    "Share non-invasive, tech-based brain reports",
    "Easy to start with software-backed analysis",
    "Work in schools, colleges, communities, or workplaces",
    "1 hour a day can create significant impact",
    "Potential to earn ₹1 Cr to ₹5 Cr annually"
  ];

  // Key stats or features
  const stats = [
    { icon: <TrendingUp className="w-8 h-8 text-[#066d73]" />, value: "₹5 Crore", label: "Annual Earning Potential" },
    { icon: <Users className="w-8 h-8 text-[#066d73]" />, value: "1 Hour+", label: "Scalable Time Commitment" },
    { icon: <Award className="w-8 h-8 text-[#066d73]" />, value: "Tech-Driven", label: "Brain Analysis Model" }
  ];

  return (
    <div className="py-16 px-6 md:px-20 bg-gray-50">
      {/* Section Header */}
      <motion.div 
        className="mb-12 text-center"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <h2 className="text-4xl font-bold mb-4 text-black">Join The Tech Movement - <span className="text-[#066d73]">Become A Part Of Growing Team        </span></h2>
        <p className="text-gray-600 max-w-3xl mx-auto">
        Innovative Amvika Next software is dedicated to bringing about a revolution with our Talent Connector model. Join the team and unlock the potential of unlimited earning and working from anywhere.
        </p>
      </motion.div>

      {/* Stats Section */}
      <motion.div 
        className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12"
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.2 }}
      >
        {stats.map((stat, index) => (
          <motion.div 
            key={index}
            className="bg-white p-8 rounded-lg  text-center"
            whileHover={{ y: -5, boxShadow: '0 10px 25px -5px rgba(0, 0, 0, 0.1)' }}
            transition={{ duration: 0.3 }}
          >
            <div className="flex justify-center mb-4">{stat.icon}</div>
            <h3 className="text-2xl font-bold mb-2 text-black">{stat.value}</h3>
            <p className="text-gray-600">{stat.label}</p>
          </motion.div>
        ))}
      </motion.div>

      {/* Benefits Section */}
      <motion.div
        className="bg-white p-8 rounded-lg shadow-sm mb-12"
        initial={{ opacity: 0, x: -30 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.5, delay: 0.3 }}
      >
        <h3 className="text-2xl font-bold mb-6 text-[#066d73]">Why Become a Talent Connector?</h3>
        <ul className="space-y-4">
          {benefits.map((benefit, index) => (
            <motion.li 
              key={index} 
              className="flex items-start gap-3"
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.3, delay: 0.4 + (index * 0.1) }}
            >
              <CheckCircle className="w-5 h-5 text-[#066d73] mt-1 flex-shrink-0" />
              <span className='text-black'>{benefit}</span>
            </motion.li>
          ))}
        </ul>
        <Link
          to="/contact-us"
          className="mt-8 w-fit bg-[#066d73] hover:bg-[#057b6f] text-white px-6 py-3 rounded-full flex items-center gap-2 transition-all duration-300"
          whileHover={{ scale: 1.05 }}
         
          whileTap={{ scale: 0.95 }}
        >
          Join the Movement <ArrowRight size={16} />
        </Link>
      </motion.div>

      {/* Description Section */}
      <motion.div 
        className="bg-white p-8 rounded-lg shadow-sm text-center max-w-4xl mx-auto"
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.5 }}
      >
        <h3 className="text-2xl font-bold mb-4 text-[#066d73]">How It Works</h3>
        <p className="text-gray-700 mb-4">
          As a Talent Connector, you introduce individuals to our unique <span className="font-semibold text-black">“Individual Brain Report”</span>—
          a non-invasive, software-powered eye analysis that reveals their natural talents, learning style, and career inclinations.
        </p>
        <p className="text-gray-700 mb-4">
          Whether you're working in your community, in schools, colleges, or offices, your role is more than informational—it's transformational.
        </p>
        <p className="text-gray-800 font-semibold italic">
          This isn't just a service. It’s a movement—powered by software, driven by purpose, and led by changemakers like you.
        </p>
      </motion.div>

      {/* Call to Action */}
      <motion.div 
        className="mt-16 text-center"
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.6 }}
      >
        <h3 className="text-2xl font-bold mb-4 text-black">Ready to Make a Difference?</h3>
        <p className="text-gray-600 max-w-2xl mx-auto mb-8">
          Join Amvika NEXT’s mission to uncover potential and shape futures—while building your own high-impact career as a Talent Connector.
        </p>
        <Link 
          to="/contact-us"
          className="bg-[#066d73] w-fit hover:bg-[#057b6f] text-white px-8 py-4 rounded-full flex items-center gap-2 transition-all duration-300 mx-auto text-lg font-semibold"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          Apply Now <ArrowRight size={20} />
        </Link>
      </motion.div>
    </div>
  );
};

export default Franchise;
