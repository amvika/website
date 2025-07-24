import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import courses from '../../../data/courses';

const EnrollForm = () => {
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    phone: '',
    courseId: '',
    
    agreeToTerms: true
  });

  const [errors, setErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [selectedCourse, setSelectedCourse] = useState(null);

  useEffect(() => {
    if (formData.courseId) {
      const course = courses.find(c => c.id.toString() === formData.courseId);
      setSelectedCourse(course);
    } else {
      setSelectedCourse(null);
    }
  }, [formData.courseId]);

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData({
      ...formData,
      [name]: type === 'checkbox' ? checked : value
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
    
    if (!formData.fullName.trim()) {
      newErrors.fullName = 'Full name is required';
    }
    
    if (!formData.email.trim()) {
      newErrors.email = 'Email is required';
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = 'Please enter a valid email';
    }
    
    if (!formData.phone.trim()) {
      newErrors.phone = 'Phone number is required';
    } else if (!/^[0-9]{10}$/.test(formData.phone.trim())) {
      newErrors.phone = 'Please enter a valid 10-digit phone number';
    }
    
    if (!formData.courseId) {
      newErrors.courseId = 'Please select a course';
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
      formDataToSend.append('fullName', formData.fullName);
      formDataToSend.append('email', formData.email);
      formDataToSend.append('phone', formData.phone);
      formDataToSend.append('course', selectedCourse ? selectedCourse.title : formData.courseId);
      
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
            fullName: '',
            email: '',
            phone: '',
            courseId: '',
            paymentMethod: 'creditCard',
            agreeToTerms: false
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

  if (isSubmitted) {
    return (
      <motion.div 
        className="max-w-3xl mx-auto my-12 p-8 bg-white rounded-lg  text-center"
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.5 }}
      >
        <motion.div 
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          transition={{ delay: 0.2, type: 'spring', stiffness: 200 }}
          className="w-20 h-20 bg-green-100 rounded-full mx-auto flex items-center justify-center mb-6"
        >
          <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10 text-green-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
          </svg>
        </motion.div>
        <h2 className="text-3xl font-bold text-gray-800 mb-4">Enrollment Successful!</h2>
        <p className="text-lg text-gray-600 mb-6">Thank you for enrolling with Amvika NEXT. We've sent a confirmation email with further details.</p>
        <motion.button 
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          className="px-6 py-3 bg-amber-400 text-white font-medium  hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50"
          onClick={() => setIsSubmitted(false)}
        >
          Enroll in Another Course
        </motion.button>
      </motion.div>
    );
  }

  return (
    <div className="max-w-6xl mx-auto py-12 px-4 sm:px-6 lg:px-8">
      <div className="text-center mb-12">
        <motion.h2 
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-3xl md:text-4xl font-bold text-gray-900 mb-4"
        >
          Enroll in Our Courses
        </motion.h2>
        <motion.p 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.2, duration: 0.5 }}
          className="text-lg text-gray-600 max-w-3xl mx-auto"
        >
          Take the next step in your career journey with Amvika NEXT's specialized courses designed to enhance your skills and boost your earning potential.
        </motion.p>
      </div>

      <div className="flex flex-col lg:flex-row gap-8">
        <motion.div 
          className="lg:w-2/3 bg-white rounded-lg  overflow-hidden"
          variants={formVariants}
          initial="hidden"
          animate="visible"
        >
          <div className="p-8">
            <h3 className="text-2xl font-semibold text-gray-800 mb-6">Personal Information</h3>
            
            <form onSubmit={handleSubmit}>
              <div className="space-y-6">
                {/* Full Name */}
                <motion.div variants={itemVariants}>
                  <label htmlFor="fullName" className="block text-sm font-medium text-gray-700 mb-1">Full Name</label>
                  <input
                    type="text"
                    id="fullName"
                    name="fullName"
                    value={formData.fullName}
                    onChange={handleChange}
                    className={`w-full px-4 py-3  border ${errors.fullName ? 'border-red-500' : 'border-gray-300'} focus:outline-none focus:ring-2 focus:ring-blue-500`}
                    placeholder="Enter your full name"
                  />
                  {errors.fullName && <p className="mt-1 text-sm text-red-600">{errors.fullName}</p>}
                </motion.div>

                {/* Email */}
                <motion.div variants={itemVariants}>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">Email Address</label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    className={`w-full px-4 py-3  border ${errors.email ? 'border-red-500' : 'border-gray-300'} focus:outline-none focus:ring-2 focus:ring-blue-500`}
                    placeholder="Enter your email address"
                  />
                  {errors.email && <p className="mt-1 text-sm text-red-600">{errors.email}</p>}
                </motion.div>

                {/* Phone */}
                <motion.div variants={itemVariants}>
                  <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-1">Phone Number</label>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    className={`w-full px-4 py-3  border ${errors.phone ? 'border-red-500' : 'border-gray-300'} focus:outline-none focus:ring-2 focus:ring-blue-500`}
                    placeholder="Enter your 10-digit phone number"
                  />
                  {errors.phone && <p className="mt-1 text-sm text-red-600">{errors.phone}</p>}
                </motion.div>

                {/* Course Selection */}
                <motion.div variants={itemVariants}>
                  <label htmlFor="courseId" className="block text-sm font-medium text-gray-700 mb-1">Select Course</label>
                  <select
                    id="courseId"
                    name="courseId"
                    value={formData.courseId}
                    onChange={handleChange}
                    className={`w-full px-4 py-3  border ${errors.courseId ? 'border-red-500' : 'border-gray-300'} focus:outline-none focus:ring-2 focus:ring-blue-500 bg-white`}
                  >
                    <option value="">-- Select a course --</option>
                    {courses.map(course => (
                      <option key={course.id} value={course.id.toString()}>
                        {course.title} 
                      </option>
                    ))}
                  </select>
                  {errors.courseId && <p className="mt-1 text-sm text-red-600">{errors.courseId}</p>}
                </motion.div>

                {/* Payment Method */}
               

                {/* Agree to Terms */}
               
                

                {/* Terms and Conditions */}
                

                {/* Submit Button */}
                <motion.div variants={itemVariants} className="pt-4">
                  <motion.button
                    type="submit"
                    className="w-full py-3 px-4 bg-amber-400 hover:bg-amber-500 transition-all text-white font-medium  focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 disabled:opacity-50 disabled:cursor-not-allowed"
                    disabled={isSubmitting}
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                  >
                    {isSubmitting ? (
                      <span className="flex items-center justify-center">
                        <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                          <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                          <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                        </svg>
                        Processing...
                      </span>
                    ) : 'Enroll Now'}
                  </motion.button>
                </motion.div>
              </div>
            </form>
          </div>
        </motion.div>

        {/* Course Summary */}
        <motion.div 
          className="lg:w-1/3"
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.3, duration: 0.5 }}
        >
          <div className="bg-white rounded-lg  overflow-hidden sticky top-8">
            <div className="p-6">
              <h3 className="text-xl font-semibold text-gray-800 mb-4">Course Summary</h3>
              
              {selectedCourse ? (
                <div className="space-y-4">
                  <div className="aspect-w-16 aspect-h-9 rounded-lg overflow-hidden">
                    <img 
                      src={selectedCourse.image} 
                      alt={selectedCourse.title} 
                      className="object-cover w-full h-48"
                    />
                  </div>
                  
                  <div>
                    <h4 className="text-lg font-medium text-gray-900">{selectedCourse.title}</h4>
                    <p className="text-sm text-gray-500">{selectedCourse.category} • {selectedCourse.duration}</p>
                  </div>
                  
                  <div>
                    <p className="text-sm font-medium text-gray-700">What you'll learn:</p>
                    <ul className="mt-2 space-y-1">
                      {selectedCourse.learn.map((item, index) => (
                        <li key={index} className="flex items-start">
                          <svg className="h-5 w-5 text-green-500 mr-2 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                          </svg>
                          <span className="text-sm text-gray-600">{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                  
                  
                </div>
              ) : (
                <div className="text-center py-8">
                  <svg className="mx-auto h-12 w-12 text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2" />
                  </svg>
                  <h3 className="mt-2 text-sm font-medium text-gray-900">No course selected</h3>
                  <p className="mt-1 text-sm text-gray-500">Select a course to see details</p>
                </div>
              )}
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default EnrollForm;