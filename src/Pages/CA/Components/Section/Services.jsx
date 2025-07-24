import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import serviceData from '../../Assets/serviceData';
import ServiceIcons from '../../Assets/ServiceIcons';
import { X } from 'lucide-react';
import { Link } from 'react-router-dom';


// Service Detail Popup Component
const ServiceDetailPopup = ({ service, onClose }) => {
  return (
    <motion.div 
      className="fixed inset-0 bg-black bg-opacity-50 z-50 flex items-center justify-center p-4"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      onClick={onClose}
    >
      <motion.div 
        className="bg-white rounded-xl max-w-3xl w-full max-h-[90vh] overflow-y-auto"
        initial={{ scale: 0.9, y: 20 }}
        animate={{ scale: 1, y: 0 }}
        exit={{ scale: 0.9, y: 20 }}
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header with image */}
        <div className="relative h-48 sm:h-64 overflow-hidden rounded-t-xl">
          <img 
            src={service.image} 
            alt={service.title} 
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent flex items-end p-6">
            <h2 className="text-white text-2xl sm:text-3xl font-bold">{service.title}</h2>
          </div>
          <button 
            onClick={onClose}
            className="absolute top-4 right-4 bg-white/20 backdrop-blur-sm p-2 rounded-full hover:bg-white/40 transition-colors"
          >
            <X size={20} className="text-white" />
          </button>
        </div>
        
        {/* Content */}
        <div className="p-6">
          <p className="text-gray-700 mb-6">{service.detailedDescription}</p>
          
          {/* Benefits */}
          <div className="mb-6">
            <h3 className="text-lg font-semibold mb-3 text-gray-900">Benefits</h3>
            <ul className="list-disc pl-5 space-y-1">
              {service.benefits.map((benefit, index) => (
                <li key={index} className="text-gray-600">{benefit}</li>
              ))}
            </ul>
          </div>
          
          {/* Process */}
          <div className="mb-6">
            <h3 className="text-lg font-semibold mb-3 text-gray-900">Our Process</h3>
            <ol className="list-decimal pl-5 space-y-2">
              {service.process.map((step, index) => (
                <li key={index} className="text-gray-600">{step}</li>
              ))}
            </ol>
          </div>
          
          {/* Pricing & Timeline */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 bg-gray-50 p-4 rounded-lg">
            <div>
              <h3 className="text-md font-semibold mb-1 text-gray-900">Pricing</h3>
              <p className="text-orange-500 font-medium">{service.pricing}</p>
            </div>
            <div>
              <h3 className="text-md font-semibold mb-1 text-gray-900">Timeline</h3>
              <p className="text-gray-600">{service.timeline}</p>
            </div>
          </div>
          
          {/* CTA Button */}
          <div className="mt-6 text-center">
            <Link to="/contact-us" className="bg-orange-500 hover:bg-orange-600 text-white px-6 py-3 rounded-full font-medium transition-colors">
              Enquire Now
            </Link>
          </div>
        </div>
      </motion.div>
    </motion.div>
  );
};

const Services = () => {
  const [selectedService, setSelectedService] = useState(null);
  
  // Map the icon names from serviceData to actual SVG components
  const services = serviceData.map(service => ({
    ...service,
    icon: ServiceIcons[service.icon]
  }));

  const handleCardClick = (service) => {
    setSelectedService(service);
  };

  const closePopup = () => {
    setSelectedService(null);
  };

  return (
    <div className="py-16 px-6 md:px-20 bg-white">
      <motion.div 
        className="mb-16"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <h2 className="text-4xl font-bold mb-4 text-left text-black">Amvika Professional Legal & Taxation Services</h2>
        <p className="text-gray-500 max-w-3xl text-left">
          Empowering businesses with reliable financial and legal solutions.
        </p>
      </motion.div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {services.map((service, index) => (
          <motion.div 
            key={service.id}
            className="bg-gray-100 p-8 rounded-lg shadow-sm cursor-pointer hover:shadow-md transition-shadow"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            onClick={() => handleCardClick(service)}
            whileHover={{ y: -5 }}
          >
            <div className="text-orange-500 mb-4 bg-white w-fit p-2 rounded-full">
              {service.icon}
            </div>
            <h3 className="text-xl font-semibold mb-3 text-black">{service.title}</h3>
            <p className="text-gray-600">{service.description}</p>
            <div className="mt-4 text-orange-500 font-medium text-sm">
              Click to view details
            </div>
          </motion.div>
        ))}
      </div>

      {/* Service Detail Popup */}
      <AnimatePresence>
        {selectedService && (
          <ServiceDetailPopup 
            service={selectedService} 
            onClose={closePopup} 
          />
        )}
      </AnimatePresence>
    </div>
  );
};

export default Services;