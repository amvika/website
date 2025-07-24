import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight} from 'lucide-react';
import Lady from '../../Assets/Lady.png'
import underline from '../../Assets/HeroUnderline.png';
import { Link } from 'react-router-dom';
// import InfiniteLogoScroll from '../InfiniteLogoScroll/InfiniteLogoScroll';

const Hero = () => {
  const clientImgs = [
    "https://st2.depositphotos.com/1005682/11481/i/950/depositphotos_114818614-stock-photo-indian-man-working-at-office.jpg",
    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQdZdBeUrOpVfoNQEz4xYVUipSm4bamCMNOQg&s",
    "https://images.squarespace-cdn.com/content/v1/5a8a9449f43b552a84c6cca4/1543794726701-14W1N1TG1W6HT4R967IB/young+man+office+worker.jpg",
    "https://media.istockphoto.com/id/1149538393/photo/middle-eastern-man-holding-tablet.jpg?s=612x612&w=0&k=20&c=N_7DwQQln7yLG_cQ4KkUmoZssE7zAQa3KlNsnMx2BD4="
  ]
  return (
    <div className="min-h-screen bg-white mt-20 lg:mt-16 px-4 sm:px-6 lg:px-20 py-8 sm:py-12 lg:py-10 flex flex-col lg:flex-row items-center justify-between gap-6 lg:gap-10">
      {/* Left Content */}
      <motion.div 
        className="w-full lg:w-1/2 text-center lg:text-left"
        initial={{ opacity: 0, x: -50 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.5 }}
      >
        <h1 className="text-3xl text-black sm:text-4xl lg:text-5xl font-bold leading-tight mb-4 sm:mb-6">
          We Are Your Strategic Partner In Managing Good Finance <span className='relative inline-block'>Experiences
            <img src={underline} className='w-full absolute bottom-[-15px] sm:bottom-[-25px] left-0' alt="Underline decoration" />
          </span>
        </h1>
        <p className="text-gray-600 mb-6 sm:mb-8 text-sm sm:text-base">
          We are a passionate team of creative minds and developers driven to craft meaningful and result-oriented solutions for our clients. Our CA services include GST registration and filing, tax consultation, audit support, accounting services, and more.
        </p>
        
        {/* CTA Button */}
        <Link
          to="/contact-us"
          className="bg-orange-500 w-fit hover:bg-orange-600 text-white px-6 sm:px-8 py-2 sm:py-3 rounded-full flex items-center gap-2 transition-all duration-300 mx-auto lg:mx-0"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          Get Started <ArrowRight size={16} className="sm:w-[18px]" />
        </Link>
        
        {/* Rating */}
        <div className="mt-8 sm:mt-10 flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4">
          <div className="flex">
            {/* Avatar images */}
            {clientImgs.map((item, index) => (
              <div 
                key={item}
                className="w-6 h-6 sm:w-8 sm:h-8 rounded-full overflow-hidden bg-gray-300 border-2 border-white -ml-2 first:ml-0"
                style={{ zIndex: clientImgs.length - index }}
              >
                <img src={item} alt="" className="w-full h-full object-cover" />
              </div>
            ))}
          </div>
          <div className="flex items-center flex-wrap justify-center lg:justify-start">
            {/* Star rating */}
            <div className="flex">
              {[1, 2, 3, 4, 5].map((star) => (
                <svg key={star} className="w-3 h-3 sm:w-4 sm:h-4 text-yellow-400" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                </svg>
              ))}
            </div>
            <span className="ml-2 text-xs sm:text-sm font-semibold">4.8</span>
            <span className="ml-1 text-xs text-gray-500">from 100+ reviews</span>
          </div>
        </div>
      </motion.div>
      
      {/* Right Image */}
      <motion.div 
        className="w-full lg:w-1/2 mt-8 lg:mt-0"
        initial={{ opacity: 0, x: 50 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.5, delay: 0.2 }}
      >
        <div className="relative flex justify-center lg:justify-end">
          <img 
            src={Lady} 
            alt="Financial Professional" 
            className="w-auto h-[40vh] sm:h-[50vh] lg:h-[65vh] object-cover"
          />
          
          {/* Floating charts */}
          
        {/* <InfiniteLogoScroll/> */}
        </div>
      </motion.div>
    </div>
  );
};

export default Hero;