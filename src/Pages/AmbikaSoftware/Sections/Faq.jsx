import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Plus, Minus } from 'lucide-react';
const Faq = () => {
  // FAQ data with questions and answers
  const faqData = [
    {
      id: 1,
      question: 'What is the Talent Connector model?',
      answer: 'The Talent Connector model is a revolutionary approach developed by Amvika NEXT that combines cutting-edge eye-based brain analysis with human connection to uncover individuals\' true potential. It enables you to guide people toward better educational and career decisions through personalized "Individual Brain Reports."'
    },
    {
      id: 2,
      question: 'How does the brain analysis technology work?',
      answer: 'Our non-invasive eye analysis technology captures data through the eyes to generate a detailed “Individual Brain Report.” This report reveals insights about a person’s natural talents, learning style, and career inclinations, helping them make smarter, more fulfilling choices about their future.'
    },
    {
      id: 3,
      question: 'Who can become a Talent Connector?',
      answer: 'Anyone with a passion for helping others and a commitment to creating impact can become a Talent Connector. Whether you are an educator, a student, a counselor, or simply someone who wants to empower your community, this opportunity is designed to be easy to start and scalable to grow.'
    },
    {
      id: 4,
      question: 'What makes this opportunity different?',
      answer: 'Unlike traditional franchises, this is a tech-enabled, service-driven movement. It offers low entry barriers, easy scalability, and a high impact model. With as little as 1 hour a day, you can make a difference in people’s lives while creating a potential income stream of ₹1 Crore to ₹5 Crore annually.'
    },
    {
      id: 5,
      question: 'Where can I operate as a Talent Connector?',
      answer: 'You can operate in your local community, schools, colleges, coaching centers, or workplaces—anywhere people can benefit from understanding their unique talents and career paths. The software platform simplifies the process, so you can focus on making an impact.'
    }
  ];
  

  // State to track which FAQ item is open
  const [activeIndex, setActiveIndex] = useState(null);

  // Toggle function for opening/closing FAQ items
  const toggleFaq = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <div className="py-16 px-6 md:px-20 bg-gray-50">
      <div className="max-w-4xl mx-auto">
        {/* Header */}
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-800 mb-2">
            Everything you need
            <br />
            to know about
          </h2>
        </div>

        {/* FAQ Items */}
        <div className="space-y-4">
          {faqData.map((faq, index) => (
            <div 
              key={faq.id} 
              className="border-b border-gray-200 pb-4"
            >
              {/* Question */}
              <button
                className="w-full flex justify-between items-center text-left py-4 focus:outline-none"
                onClick={() => toggleFaq(index)}
              >
                <div className="flex items-center">
                  <span className="text-gray-400 mr-4">{faq.id}</span>
                  <h3 className="text-lg font-medium text-gray-800">{faq.question}</h3>
                </div>
                <div>
                  {activeIndex === index ? 
                    <Minus className="text-gray-600" size={20} /> : 
                    <Plus className="text-gray-600" size={20} />
                  }
                </div>
              </button>

              {/* Answer */}
              <AnimatePresence>
                {activeIndex === index && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: 'auto', opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.3 }}
                    className="overflow-hidden"
                  >
                    <div className="pl-10 pr-4 pb-4 text-gray-600">
                      {faq.answer}
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          ))}
        </div>

       
      </div>
    </div>
  );
};

export default Faq;