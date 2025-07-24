import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

const Branding3 = () => {
  return (
    <div className="py-16 px-6 md:px-20 relative overflow-hidden">
      {/* Orange gradient background that matches the image */}
      <div className="absolute inset-0 bg-gradient-to-br from-orange-400 to-orange-600 -z-10"></div>
      
      {/* Decorative circles */}
      <div className="absolute top-10 left-10 w-32 h-32 bg-white opacity-5 rounded-full"></div>
      <div className="absolute bottom-10 right-10 w-40 h-40 bg-white opacity-5 rounded-full"></div>
      <div className="absolute top-1/2 right-1/4 w-24 h-24 bg-white opacity-5 rounded-full"></div>
      
      <div className="max-w-4xl mx-auto text-center relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="mb-8"
        >
          <h2 className="text-3xl md:text-4xl font-extrabold mb-6 text-white leading-tight">
            Ready To Experience The Benefits Of <br />
            <span className="text-white">Amvika CA Services?</span>
          </h2>
          
          <p className="text-white text-opacity-90 mb-10 max-w-2xl mx-auto">
            We're here to answer your questions, provide support, and help you
            navigate the complexities of taxation and compliance for financial success.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link 
              to="/contact-us"
              className="bg-white text-orange-600 hover:bg-orange-50 px-6 py-3 rounded-full flex items-center justify-center gap-2 transition-all duration-300 font-medium"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Get Started <ArrowRight size={16} />
            </Link>
            
            
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default Branding3;