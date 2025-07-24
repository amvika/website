import React from 'react';
import { motion } from 'framer-motion';
import { Brain, FileText, Target, Clock, Eye, Database, FileCheck, TrendingUp } from 'lucide-react';

const Branding1 = () => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      viewport={{ once: true }}
      className="py-20 px-6 md:px-24 bg-gradient-to-br from-white to-[#f0f9f8]"
    >
      <div className="max-w-5xl mx-auto text-center">
        <p className="text-[#066d73] font-semibold text-sm uppercase tracking-wider mb-3">
          Meet the Technology That Understands Your Brain
        </p>

        <h2 className="text-3xl md:text-3xl font-extrabold text-gray-800 leading-tight mb-6">
        A sneak peek into the technology Changing your growth perceptions.
Don't just Grow; Excel Career-wise knowing what 
          <span className="bg-gradient-to-r from-[#066d73] to-[#025066] bg-clip-text text-transparent"> stimulates your brain the most</span>
        </h2>

        <p className="text-gray-600 text-lg md:text-xl mb-10 max-w-3xl mx-auto">
        Amvika Next presents unique software that uses Iris scan technology to read the brain's capabilities and capacity. It generates a customised brain analysis report that reveals the cognitive abilities, learning styles, strengths, and weaknesses. The rare combination of neuroscience and technology opens the gateway to unlimited personal and financial growth. 
        </p>

        {/* Feature Cards */}
        <div className="grid md:grid-cols-2 gap-6 text-left">
          {[
            {
              title: '100% Non-invasive',
              desc: 'Fully safe and secure method. No physical contact, medical procedure or surgery needed.',
              icon: Brain,
            },
            {
              title: 'Age has no bar',
              desc: 'Works for every age group. ',
              icon: FileText,
            },
            {
              title: 'Instant and personalised Report',
              desc: 'No need to wait for the next-day-report deliveries. Hand-to-hand personalised report preparation.',
              icon: Target,
            },
            {
              title: 'Dynamic Application',
              desc: 'Suitable for various settings like educational institutes, corporate offices and family and friends.',
              icon: Clock,
            },
          ].map((item, index) => (
            <motion.div
              key={index}
              whileHover={{ scale: 1.03 }}
              className="bg-white p-6 border border-gray-100 transition"
            >
              <div className="flex items-start gap-3 mb-3">
                <item.icon size={24} className="text-[#025066] mt-1" />
                <h4 className="font-semibold text-[#025066] text-lg">{item.title}</h4>
              </div>
              <p className="text-gray-600 pl-7">{item.desc}</p>
            </motion.div>
          ))}
        </div>

        {/* How It Works Section */}
        <div className="mt-14 bg-white p-8 ">
          <h3 className="text-2xl font-bold text-[#025066] mb-8">How It Works</h3>
          
          <div className="grid md:grid-cols-4 gap-6">
            {[
              {
                step: 'Step 1',
                title: 'Eye Movement / Iris Scanning',
                desc: 'Our Software tracks the eye-ball/ Iris movement ',
                icon: Eye,
              },
              {
                step: 'Step 2',
                title: 'AI Analysis',
                desc: 'AI algorithms organises, analysis and interprets the data collected',
                icon: Database,
              },
              {
                step: 'Step 3',
                title: 'Brain Report preparation',
                desc: 'Customised Brain report is prepared powered by AI-algo accuracy',
                icon: FileCheck,
              },
              {
                step: 'Step 4',
                title: 'Application of Insights',
                desc: 'Insights collected helps with career planning, skill upscaling and financial growth.',
                icon: TrendingUp,
              },
            ].map((step, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="relative"
              >
                <div className="bg-[#f0f9f8] rounded-lg p-6 text-center h-full">
                  <step.icon size={32} className="text-[#066d73] mx-auto mb-3" />
                  <p className="text-sm font-semibold text-[#066d73] mb-2">{step.step}</p>
                  <h4 className="font-semibold text-[#025066] text-lg mb-2">{step.title}</h4>
                  <p className="text-gray-600 text-sm">{step.desc}</p>
                </div>
                {index < 3 && (
                  <div className="hidden md:block absolute top-1/2 -right-3 transform -translate-y-1/2">
                    <div className="w-6 h-0.5 bg-[#066d73]"></div>
                  </div>
                )}
              </motion.div>
            ))}
          </div>
        </div>

        {/* CTA Section */}
        <div className="mt-14">
          <motion.a
          href='https://eye2i.ai/landing-page/jlwBTEtom4dvcsN6'
            target='_blank'
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="mt-8 inline-block bg-gradient-to-r from-[#066d73] to-[#025066] text-white px-8 py-3 rounded-full font-semibold shadow-lg transition"
          >
            Get Your Brain Analysis Report
          </motion.a>
        </div>
      </div>
    </motion.div>
  );
};

export default Branding1;