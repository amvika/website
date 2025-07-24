import React, { useRef } from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import testimonials from '../../../data/testimonials';
import { motion, useInView } from 'framer-motion';
import { Quote } from 'lucide-react';

const Testimonials = () => {
  const sectionRef = useRef(null);
  const isInView = useInView(sectionRef, { once: true });

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 5000,
    pauseOnHover: true,
    arrows: false,
    responsive: [
      {
        breakpoint: 768,
        settings: {
          arrows: false
        }
      }
    ],
    appendDots: dots => (
      <div style={{ bottom: "-40px" }}>
        <ul style={{ 
          display: "flex",
          gap: "10px",
          justifyContent: "center",
          margin: "0",
          padding: "0",
          listStyle: "none"
        }}> 
          {dots} 
        </ul>
      </div>
    ),
    
    dotsClass: "slick-dots custom-dots"
  };

  return (
    <div className="py-16 px-6 md:px-20 bg-gray-50" ref={sectionRef}>
      <div className="max-w-7xl mx-auto">
        <motion.div 
          className="text-center mb-12"
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="text-4xl font-bold text-gray-800 mb-4">
            What they say about the course
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Hear from our students about their experience with our courses
          </p>
        </motion.div>

        <motion.div
          className="testimonial-slider mb-12"
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : { opacity: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          <Slider {...settings}>
            {testimonials.map((testimonial) => (
              <div key={testimonial.id} className="outline-none">
                <div className="bg-white p-8 md:p-10 mx-2">
                  <div className="flex flex-col md:flex-row gap-8">
                    <div className="w-full md:w-3/4">
                      <div className="mb-6 text-amber-500">
                        <Quote size={40} />
                      </div>
                      <p className="text-gray-700 text-lg mb-6 italic leading-relaxed">
                        "{testimonial.text}"
                      </p>
                      <div className="flex items-center gap-4">
                        <div className="w-12 h-12 rounded-full overflow-hidden">
                          <img 
                            src={testimonial.avatar} 
                            alt={testimonial.name} 
                            className="w-full h-full object-cover"
                          />
                        </div>
                        <div>
                          <h4 className="font-bold text-gray-800">{testimonial.name}</h4>
                          <p className="text-gray-600 text-sm">{testimonial.position}</p>
                        </div>
                      </div>
                    </div>

                    <div className="w-full md:w-1/4 flex flex-col justify-between">
                      <div className="bg-amber-50 p-4 rounded-lg mb-6">
                        <h3 className="font-bold text-amber-600">{testimonial.course}</h3>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </Slider>
        </motion.div>
      </div>

      <style jsx>{`
        /* Custom styles for the testimonial slider */
        :global(.testimonial-slider .slick-dots) {
          bottom: -40px;
          display: flex;
          justify-content: center;
          gap: 8px;
        }

        :global(.testimonial-slider .slick-dots li) {
          width: 10px;
          height: 10px;
          margin: 0;
        }

        :global(.testimonial-slider .slick-dots li button) {
          width: 10px;
          height: 10px;
          padding: 0;
        }

        :global(.testimonial-slider .slick-dots li button:before) {
          font-size: 0;
          width: 10px;
          height: 10px;
          content: '';
          background-color: #d1d5db; /* gray-300 */
          border-radius: 50%;
          opacity: 1;
        }

        :global(.testimonial-slider .slick-dots li.slick-active button:before) {
          background-color: #f59e0b; /* amber-500 */
          opacity: 1;
        }

        /* Style the arrows */
        :global(.testimonial-slider .slick-prev),
        :global(.testimonial-slider .slick-next) {
          width: 40px;
          height: 40px;
          background-color: #e5e7eb; /* gray-200 */
          border-radius: 50%;
          z-index: 1;
          transition: background-color 0.3s ease;
        }

        :global(.testimonial-slider .slick-prev:hover),
        :global(.testimonial-slider .slick-next:hover) {
          background-color: #d1d5db; /* gray-300 */
        }

        :global(.testimonial-slider .slick-prev) {
          left: -20px;
        }

        :global(.testimonial-slider .slick-next) {
          right: -20px;
        }

        :global(.testimonial-slider .slick-prev:before),
        :global(.testimonial-slider .slick-next:before) {
          color: #4b5563; /* gray-600 */
          font-size: 20px;
          opacity: 1;
        }

        /* Add padding to the slider container */
        :global(.testimonial-slider) {
          padding: 0 20px 40px;
        }

        /* Responsive adjustments */
        @media (max-width: 768px) {
          :global(.testimonial-slider .slick-prev),
          :global(.testimonial-slider .slick-next) {
            display: none !important;
          }
          
          :global(.testimonial-slider) {
            padding: 0 0 40px;
          }
        }
      `}</style>
    </div>
  );
};

export default Testimonials;