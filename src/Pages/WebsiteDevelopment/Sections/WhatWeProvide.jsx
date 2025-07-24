// WhatWeProvide.jsx
import React from "react";
import { CheckCircle2 } from "lucide-react";

const features = [
  "Personalized Website with your name, contact, and service details",
  "Mobile-friendly design for better user experience",
  "Custom domain name (e.g., yourname.Amvikanext.com or yourname.com)",
  "Showcase Your Services like brain analysis, GST filing, tax consultation, and more",
  "Client Inquiry Form to capture leads online",
  "SEO-optimized structure to help you appear in Google searches",
  "Fast & Secure Hosting included",
];

const WhatWeProvide = () => {
  return (
    <section className="py-20 px-6 bg-gradient-to-br from-[#066d73] to-[#044e4e] text-white">
      <div className="max-w-6xl mx-auto text-center">
        <h2 className="text-4xl font-bold mb-4">What You’ll Get</h2>
        <p className="text-lg text-gray-200 mb-12 max-w-3xl mx-auto">
          With every franchise, we give you your own website – customized, powerful, and designed to convert leads into clients.
        </p>
        <div className="grid md:grid-cols-2 gap-8">
          {features.map((feature, index) => (
            <div
              key={index}
              className="flex items-start backdrop-blur-md bg-white/10 border border-white/20 rounded-2xl p-6 hover:scale-[1.02] transition-transform duration-300 shadow-xl"
            >
              <CheckCircle2 className="text-white mt-1 mr-4 flex-shrink-0" size={26} />
              <p className="text-white text-base font-medium">{feature}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhatWeProvide;
