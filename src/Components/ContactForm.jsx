import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { FaUser, FaEnvelope, FaPhone, FaComment, FaMapMarkerAlt, FaClock, FaPaperPlane, FaFacebook, FaYoutube, FaLinkedin, FaInstagram } from 'react-icons/fa';

const ContactForm = () => {
  const socialLinks = [
    { icon: <FaFacebook size={20} />, url: 'https://www.facebook.com/share/r/1AhEpiFB2w/' },
    { icon: <FaYoutube size={20} />, url: 'https://youtube.com/@amvikanext?si=j-a2Q7suE0UJ9QcE' },
    { icon: <FaLinkedin size={20} />, url: 'https://www.linkedin.com/in/amvika-next-640358361?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app' },
    { icon: <FaInstagram size={20} />, url: 'https://www.instagram.com/amvikanext?igsh=MTE2aXgxM2NzcHZzMA==' },
  ];

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: ''
  });

  const [errors, setErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });

    // Clear error when field is edited
    if (errors[name]) {
      setErrors({
        ...errors,
        [name]: ''
      });
    }
  };

  const validateForm = () => {
    const newErrors = {};
    
    if (!formData.name.trim()) {
      newErrors.name = 'Name is required';
    }
    
    if (!formData.email.trim()) {
      newErrors.email = 'Email is required';
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = 'Please enter a valid email';
    }
    
    if (!formData.message.trim()) {
      newErrors.message = 'Message is required';
    }
    
    if (formData.phone && !/^[0-9]{10}$/.test(formData.phone.trim())) {
      newErrors.phone = 'Please enter a valid 10-digit phone number';
    }
    
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    
    if (validateForm()) {
      setIsSubmitting(true);
      
      // Create form data for w3forms
      const formDataToSend = new FormData();
      formDataToSend.append('access_key', '315e83c8-b15d-46f1-9c3f-058caaafac7e');
      formDataToSend.append('name', formData.name);
      formDataToSend.append('email', formData.email);
      formDataToSend.append('phone', formData.phone);
      formDataToSend.append('message', formData.message);
      
      // Send data to w3forms
      fetch('https://api.web3forms.com/submit', {
        method: 'POST',
        body: formDataToSend,
        headers: {
          'Accept': 'application/json'
        }
      })
      .then(response => response.json())
      .then(data => {
        if (data.success) {
          setIsSubmitted(true);
          // Reset form after submission
          setFormData({
            name: '',
            email: '',
            phone: '',
            message: ''
          });
        } else {
          console.error('Form submission error:', data);
          alert('There was an error submitting the form. Please try again.');
        }
        setIsSubmitting(false);
      })
      .catch(error => {
        console.error('Form submission error:', error);
        alert('There was an error submitting the form. Please try again.');
        setIsSubmitting(false);
      });
    }
  };

  const formVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: { 
        duration: 0.5,
        staggerChildren: 0.1
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 10 },
    visible: { opacity: 1, y: 0 }
  };

  const inputClasses = "w-full px-4 py-3 rounded-md border focus:outline-none focus:ring-2 focus:ring-opacity-50 transition-all duration-300 bg-white";
  const labelClasses = "block text-sm font-medium text-gray-700 mb-1";
  const iconClasses = "absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400";

  if (isSubmitted) {
    return (
      <motion.div 
        className="max-w-3xl  mx-auto my-12 p-8 bg-white text-center relative overflow-hidden "
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.5 }}
      >
        <div className="absolute top-0 right-0 w-64 h-64 bg-teal-50 rounded-full -z-10 opacity-70 blur-xl"></div>
        <div className="absolute -bottom-20 -left-20 w-64 h-64 bg-teal-50 rounded-full -z-10 opacity-70 blur-xl"></div>
        
        <motion.div 
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          transition={{ delay: 0.2, type: 'spring', stiffness: 200 }}
          className="w-24 h-24 bg-gradient-to-br from-teal-100 to-teal-200 rounded-full mx-auto flex items-center justify-center mb-8"
        >
          <svg xmlns="http://www.w3.org/2000/svg" className="h-12 w-12 text-[#066d73]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
          </svg>
        </motion.div>
        
        <motion.h2 
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3, duration: 0.5 }}
          className="text-3xl font-bold text-gray-800 mb-4"
        >
          Message Sent Successfully!
        </motion.h2>
        
        <motion.p 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.4, duration: 0.5 }}
          className="text-lg text-gray-600 mb-8"
        >
          Thank you for contacting us. We'll get back to you as soon as possible.
        </motion.p>
      </motion.div>
    );
  }

  return (
    <div className="max-w-6xl mx-auto py-12 px-4 sm:px-6 lg:px-8 relative">
      <div className="absolute top-0 right-0 w-64 h-64 bg-teal-50 rounded-full -z-10 opacity-70 blur-3xl"></div>
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-teal-50 rounded-full -z-10 opacity-70 blur-3xl"></div>
      
      <div className="text-center mb-12">
        <motion.h2 
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-3xl md:text-4xl font-bold text-gray-900 mb-4"
        >
          Get In Touch
        </motion.h2>
        <motion.p 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.2, duration: 0.5 }}
          className="text-lg text-gray-600 max-w-3xl mx-auto"
        >
          Have questions or need assistance? Fill out the form below and we'll get back to you as soon as possible.
        </motion.p>
      </div>

      <div className="bg-white rounded-xl overflow-hidden border border-gray-100">
        <div className="flex flex-col lg:flex-row">
          <div className="lg:w-2/5 bg-gradient-to-br from-[#066d73] to-teal-800 p-8 text-white">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
            >
              <h3 className="text-2xl font-bold mb-6">Contact Information</h3>
              <p className="mb-8 opacity-90">Fill up the form and our team will get back to you within 24 hours.</p>
              
              <div className="space-y-6">
                <div className="flex items-start space-x-4">
                  <div className="mt-1">
                    <FaMapMarkerAlt className="text-teal-300" />
                  </div>
                  <div>
                    <h4 className="font-medium">Our Location</h4>
                    <p className="opacity-80 mt-1"> Plot No. 99 Main Road, Before Katangi Bypass, Jabalpur Madhya Pradesh, MP</p>
                  </div>
                </div>
                
                <div className="flex items-start space-x-4">
                  <div className="mt-1">
                  <svg className='text-teal-300' xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-phone-icon lucide-phone"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"/></svg>
                  </div>
                  <div>
                    <h4 className="font-medium">Phone Number</h4>
                    <p className="opacity-80 mt-1">+919407171421</p>
                  </div>
                </div>
                
                <div className="flex items-start space-x-4">
                  <div className="mt-1">
                    <FaEnvelope className="text-teal-300" />
                  </div>
                  <div>
                    <h4 className="font-medium">Email Address</h4>
                    <p className="opacity-80 mt-1">contact@amvikanext.com</p>
                  </div>
                </div>
              </div>
              
              <div className="mt-12 flex space-x-4">
                {socialLinks.map((link, index) => (
                  <a
                    key={index}
                    href={link.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-10 h-10 rounded-full bg-teal-700 flex items-center justify-center hover:bg-teal-600 transition-colors cursor-pointer"
                  >
                    <div className="text-white">
                      {link.icon}
                    </div>
                  </a>
                ))}
              </div>
            </motion.div>
          </div>
          
          <div className="lg:w-3/5 p-8">
            <motion.form 
              onSubmit={handleSubmit}
              variants={formVariants}
              initial="hidden"
              animate="visible"
              className="space-y-6"
            >
              <motion.div variants={itemVariants} className="relative">
                <label htmlFor="name" className={`${labelClasses} text-gray-800 font-medium`}>Full Name</label>
                <div className="relative group">
                  <FaUser className={`${iconClasses} group-hover:text-[#066d73] transition-colors duration-300`} />
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    className={`${inputClasses} ${errors.name ? 'border-red-500 focus:ring-red-500' : 'border-gray-200 hover:border-[#066d73] focus:ring-[#066d73]'} pl-10`}
                    placeholder="Enter your full name"
                  />
                </div>
                {errors.name && <p className="mt-1 text-sm text-red-600">{errors.name}</p>}
              </motion.div>

              <motion.div variants={itemVariants} className="relative">
                <label htmlFor="email" className={`${labelClasses} text-gray-800 font-medium`}>Email Address</label>
                <div className="relative group">
                  <FaEnvelope className={`${iconClasses} group-hover:text-[#066d73] transition-colors duration-300`} />
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    className={`${inputClasses} ${errors.email ? 'border-red-500 focus:ring-red-500' : 'border-gray-200 hover:border-[#066d73] focus:ring-[#066d73]'} pl-10`}
                    placeholder="Enter your email address"
                  />
                </div>
                {errors.email && <p className="mt-1 text-sm text-red-600">{errors.email}</p>}
              </motion.div>

              <motion.div variants={itemVariants} className="relative">
                <label htmlFor="phone" className={`${labelClasses} text-gray-800 font-medium`}>Phone Number </label>
                <div className="relative group">
                  <svg 
                    className={`${iconClasses} group-hover:text-[#066d73] transition-colors duration-300`} 
                    xmlns="http://www.w3.org/2000/svg" 
                    width="20" 
                    height="20" 
                    viewBox="0 0 24 24" 
                    fill="none" 
                    stroke="currentColor" 
                    strokeWidth="2" 
                    strokeLinecap="round" 
                    strokeLinejoin="round"
                  >
                    <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"/>
                  </svg>
                  <input
                    required={true}
                    type="tel"
                    id="phone"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    className={`${inputClasses} ${errors.phone ? 'border-red-500 focus:ring-red-500' : 'border-gray-200 hover:border-[#066d73] focus:ring-[#066d73]'} pl-10`}
                    placeholder="Enter your phone number"
                  />
                </div>
                {errors.phone && <p className="mt-1 text-sm text-red-600">{errors.phone}</p>}
              </motion.div>

              <motion.div variants={itemVariants} className="relative">
                <label htmlFor="message" className={`${labelClasses} text-gray-800 font-medium`}>Message</label>
                <div className="relative group">
                  <FaComment className={`absolute left-3 top-5 text-gray-400 group-hover:text-[#066d73] transition-colors duration-300`} />
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    rows="5"
                    className={`${inputClasses} ${errors.message ? 'border-red-500 focus:ring-red-500' : 'border-gray-200 hover:border-[#066d73] focus:ring-[#066d73]'} pl-10 resize-none`}
                    placeholder="Enter your message"
                  ></textarea>
                </div>
                {errors.message && <p className="mt-1 text-sm text-red-600">{errors.message}</p>}
              </motion.div>

              <motion.div variants={itemVariants} className="text-center pt-2">
                <motion.button
                  type="submit"
                  disabled={isSubmitting}
                  whileHover={{ scale: 1.03 }}
                  whileTap={{ scale: 0.97 }}
                  className="w-full md:w-auto px-8 py-3.5 bg-gradient-to-r from-[#066d73] to-teal-700 text-white font-medium rounded-full hover:shadow-lg focus:outline-none focus:ring-2 focus:ring-[#066d73] focus:ring-opacity-50 transition-all duration-300 flex items-center justify-center space-x-2"
                >
                  {isSubmitting ? (
                    <>
                      <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                        <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                        <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                      </svg>
                      <span>Sending...</span>
                    </>
                  ) : (
                    <>
                      <FaPaperPlane className="mr-2" />
                      <span>Send Message</span>
                    </>
                  )}
                </motion.button>
              </motion.div>
            </motion.form>
          </div>
        </div>
      </div>
      
      <div className="absolute bottom-12 right-12 hidden lg:block">
        <div className="grid grid-cols-3 gap-2">
          {[...Array(9)].map((_, i) => (
            <motion.div 
              key={i}
              initial={{ opacity: 0 }}
              animate={{ opacity: 0.7 }}
              transition={{ delay: 0.5 + (i * 0.1) }}
              className="w-2 h-2 rounded-full bg-[#066d73]"
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default ContactForm;