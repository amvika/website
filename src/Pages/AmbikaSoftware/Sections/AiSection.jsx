import React, { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { Brain, Eye, Database, FileCheck, Shield, Clock, CheckCircle, ArrowRight } from 'lucide-react';

const AiSection = () => {
  const pipelineRef = useRef(null);
  const ethicsRef = useRef(null);
  const isPipelineInView = useInView(pipelineRef, { once: true });
  const isEthicsInView = useInView(ethicsRef, { once: true });

  // AI benefits
  const aiBenefits = [
    "Accurate, Fast, spot-on analysis",
    "No human intervention",
    "Consistent upgrading of the database",
    "Transparent and uncompromised report quality",
    "Data privacy and end-to-end encryption",
    "Clear Boundaries between diagnosis and guidance",
    
  ];

  // Ethical commitments
  const ethicalCommitments = [
    "Become a Talent Connector - Unleash Unlimited Earning Potential Utilise your interpersonal skills and network. Help people understand their unique capabilities and embrace their best-suited career path.",
    "Be an Entrepreneur - Start Your BusinessJoin our 1-hr training session, Launch your own business under your brand and earn from anywhere.",
    "Master the most in-demand skills - Learn, develop and enhance the most demanded skills from us and earn significantly.",
    
  ];

  return (
    <div className="py-16 px-6 md:px-20 bg-white">
      {/* Section Header */}
      <motion.div 
        className="mb-12 text-center "
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <h2 className="text-4xl font-bold mb-4  text-black">Know, Build, and Achieve -  <br className='hidden md:block'/>  <span className="text-[#066d73]">Learn from AI and Enhance Potentials</span>.</h2>
        <p className="text-gray-600 max-w-3xl mx-auto">
        Amvika Next Software is a modern but easy-to-use technology that reads eye movements and analyses the brain to reveal powerful insights. 
        </p>
      </motion.div>

      {/* AI Pipeline Section */}
      <motion.div 
        ref={pipelineRef}
        className="mb-16"
        initial={{ opacity: 0, y: 30 }}
        animate={isPipelineInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
        transition={{ duration: 0.6 }}
      >
        <h3 className="text-2xl font-bold mb-8 text-center text-[#066d73]">How AI powers the accuracy behind the Brain Analysis        </h3>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Step 1: Eye Tracking Input */}
          <motion.div 
            className="bg-white p-6 rounded-lg shadow-sm border border-gray-100"
            whileHover={{ y: -5, boxShadow: '0 10px 25px -5px rgba(0, 0, 0, 0.1)' }}
            transition={{ duration: 0.3 }}
          >
            <div className="bg-[#f0f9f8] p-3 rounded-full w-12 h-12 flex items-center justify-center mb-4">
              <Eye className="text-[#066d73] w-6 h-6" />
            </div>
            <h4 className="text-xl font-semibold mb-3 text-gray-800">1. Collect input from Individual Eyeballs</h4>
            <p className="text-gray-600">
            As each eyeball is different, unique data is collected for every individual 
            </p>
          </motion.div>

          {/* Step 2: AI Interpretation Engine */}
          <motion.div 
            className="bg-white p-6 rounded-lg shadow-sm border border-gray-100"
            whileHover={{ y: -5, boxShadow: '0 10px 25px -5px rgba(0, 0, 0, 0.1)' }}
            transition={{ duration: 0.3 }}
          >
            <div className="bg-[#f0f9f8] p-3 rounded-full w-12 h-12 flex items-center justify-center mb-4">
              <Database className="text-[#066d73] w-6 h-6" />
            </div>
            <h4 className="text-xl font-semibold mb-3 text-gray-800">2. AI Interpretation Engine            </h4>
            <p className="text-gray-600">
            Our Machine learning models are trained on thousands of data entries. The software analyzes:
            </p>
            <ul className="mt-3 space-y-2 text-gray-600">
              <li className="flex items-start gap-2">
                <div className="w-1.5 h-1.5 rounded-full bg-[#066d73] mt-2"></div>
                <span>Focus and attention span</span>
              </li>
              <li className="flex items-start gap-2">
                <div className="w-1.5 h-1.5 rounded-full bg-[#066d73] mt-2"></div>
                <span>Information retention speed</span>
              </li>
              <li className="flex items-start gap-2">
                <div className="w-1.5 h-1.5 rounded-full bg-[#066d73] mt-2"></div>
                <span>Visual processing patterns</span>
              </li>
              <li className="flex items-start gap-2">
                <div className="w-1.5 h-1.5 rounded-full bg-[#066d73] mt-2"></div>
                <span>Stress or emotional response</span>
              </li>
            </ul>
          </motion.div>

          {/* Step 3: Personalized Output */}
          <motion.div 
            className="bg-white p-6 rounded-lg shadow-sm border border-gray-100"
            whileHover={{ y: -5, boxShadow: '0 10px 25px -5px rgba(0, 0, 0, 0.1)' }}
            transition={{ duration: 0.3 }}
          >
            <div className="bg-[#f0f9f8] p-3 rounded-full w-12 h-12 flex items-center justify-center mb-4">
              <FileCheck className="text-[#066d73] w-6 h-6" />
            </div>
            <h4 className="text-xl font-semibold mb-3 text-gray-800">3. Personalized Output</h4>
            <p className="text-gray-600">
              AI converts that data into an actionable, easy-to-understand Brain Report with:
            </p>
            <ul className="mt-3 space-y-2 text-gray-600">
              <li className="flex items-start gap-2">
                <div className="w-1.5 h-1.5 rounded-full bg-[#066d73] mt-2"></div>
                <span>Cognitive profile</span>
              </li>
              <li className="flex items-start gap-2">
                <div className="w-1.5 h-1.5 rounded-full bg-[#066d73] mt-2"></div>
                <span>Learning style assessment</span>
              </li>
              <li className="flex items-start gap-2">
                <div className="w-1.5 h-1.5 rounded-full bg-[#066d73] mt-2"></div>
                <span>Career suggestions</span>
              </li>
              <li className="flex items-start gap-2">
                <div className="w-1.5 h-1.5 rounded-full bg-[#066d73] mt-2"></div>
                <span>Tips for self-development</span>
              </li>
            </ul>
          </motion.div>
        </div>

        {/* AI Pipeline Visualization */}
        <p className='text-center mt-12 w-full mb-8 font-bold text-[#066d73] text-2xl justify-center flex'> The iris report is accurate because the eyes are the only organ in the human body that is directly connected to the brain.</p>
        <motion.div 
          className=" bg-[#f0f9f8] p-6 rounded-lg flex justify-center items-center"
          initial={{ opacity: 0, y: 20 }}
          animate={isPipelineInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.5, delay: 0.3 }}
        >
               
          <div className="w-full max-w-3xl">
            <div className="flex flex-col md:flex-row justify-between items-center relative">
              {/* Input */}
              <div className="text-center mb-8 md:mb-0">
                <div className="bg-white p-4 rounded-lg shadow-sm mb-2">
                  <Eye className="w-8 h-8 text-[#066d73] mx-auto" />
                  <p className="text-sm font-medium mt-1">Eye Data Input</p>
                </div>
              </div>

              {/* Arrow Line */}
              <div className="hidden md:block absolute left-[20%] right-[20%] top-1/2 h-0.5 bg-[#066d73]"></div>
              <div className="block md:hidden h-16 w-0.5 bg-[#066d73] my-2"></div>

              {/* AI Processing */}
              <div className="text-center mb-8 md:mb-0 z-10">
                <div className="bg-white p-4 rounded-lg shadow-sm mb-2">
                  <Brain className="w-8 h-8 text-[#066d73] mx-auto" />
                  <p className="text-sm font-medium mt-1">AI Processing</p>
                </div>
              </div>

              {/* Arrow Line */}
              <div className="hidden md:block absolute left-[50%] right-[20%] top-1/2 h-0.5 bg-[#066d73]"></div>
              <div className="block md:hidden h-16 w-0.5 bg-[#066d73] my-2"></div>

              {/* Output */}
              <div className="text-center">
                <div className="bg-white p-4 rounded-lg shadow-sm mb-2">
                  <FileCheck className="w-8 h-8 text-[#066d73] mx-auto" />
                  <p className="text-sm font-medium mt-1">Brain Report</p>
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </motion.div>

      {/* Why AI Matters Section */}
      <motion.div
        className="bg-white p-8 rounded-lg shadow-sm mb-16"
        initial={{ opacity: 0, x: -30 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.5, delay: 0.3 }}
      >
        <h3 className="text-2xl font-bold mb-6 text-[#066d73]">🔍 Why Use the Power of AI in Brain Technology        </h3>
        <ul className="space-y-4">
          {aiBenefits.map((benefit, index) => (
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
      </motion.div>

      {/* Ethical AI Section */}
      <motion.div 
        ref={ethicsRef}
        className="bg-white p-8 rounded-lg shadow-sm mb-12"
        initial={{ opacity: 0, y: 30 }}
        animate={isEthicsInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
        transition={{ duration: 0.5 }}
      >
        <h3 className="text-2xl font-bold mb-6 text-[#066d73]">Our Three Working Models</h3>
       
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {ethicalCommitments.map((commitment, index) => (
            <motion.div 
              key={index}
              className="flex items-start gap-3"
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.3, delay: 0.2 + (index * 0.1) }}
            >
              <Shield className="w-5 h-5 text-[#066d73] mt-1 flex-shrink-0" />
              <span className="text-gray-800">{commitment}</span>
            </motion.div>
          ))}
        </div>
      </motion.div>

      {/* Call to Action */}
      <motion.div 
        className="mt-16 text-center"
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.6 }}
      >
        <h3 className="text-2xl font-bold mb-4 text-black">🎯 Ready to Experience AI Brain Tech?</h3>
        <p className="text-gray-600 max-w-2xl mx-auto mb-8">
          Discover your true potential with our AI-powered brain analysis technology.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <motion.a 
          href='https://eye2i.ai/landing-page/jlwBTEtom4dvcsN6'
            target='_blank'
            className="bg-[#066d73] hover:bg-[#057b6f] text-white px-8 py-4 rounded-full flex items-center gap-2 transition-all duration-300 mx-auto text-lg font-semibold"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            Generate Report <ArrowRight size={20} />
          </motion.a>
          
        </div>
      </motion.div>
    </div>
  );
};

export default AiSection;