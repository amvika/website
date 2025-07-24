import React, { useState } from "react";
import { ChevronDown, ChevronUp } from "lucide-react";

const faqs = [
  {
    question: "Do I need to know coding or tech stuff?",
    answer: "Not at all! Our team handles everything from setup to updates. You just focus on your business.",
  },
  {
    question: "Can I choose my own domain name?",
    answer: "Yes! You can use a subdomain like yourname.Amvikanext.com or even a custom domain like yourname.com.",
  },
  {
    question: "Is the website mobile-friendly?",
    answer: "Absolutely! All our websites are responsive and optimized for mobile users.",
  },
  {
    question: "How do I get client inquiries from the site?",
    answer: "Your site will include a lead capture form so clients can reach you directly through the website.",
  },
];

const FaqSection = () => {
  const [activeIndex, setActiveIndex] = useState(null);

  const toggle = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <section className="bg-[#044e4e] text-white py-20 px-6">
      <div className="max-w-5xl mx-auto">
        <h2 className="text-4xl font-bold text-center mb-10">❓ Frequently Asked Questions</h2>
        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <div
              key={index}
              className="bg-white/10 border border-white/20 rounded-xl p-5 backdrop-blur-md cursor-pointer"
              onClick={() => toggle(index)}
            >
              <div className="flex justify-between items-center">
                <h3 className="text-lg font-semibold">{faq.question}</h3>
                {activeIndex === index ? (
                  <ChevronUp className="text-white" />
                ) : (
                  <ChevronDown className="text-white" />
                )}
              </div>
              {activeIndex === index && (
                <p className="mt-4 text-gray-200">{faq.answer}</p>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FaqSection;
