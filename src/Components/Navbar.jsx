import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, ChevronRight } from 'lucide-react';
import { useTheme } from '../context/ThemeContext';
import logo from '../assets/logo.png';


const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const { themeColor, updateTheme } = useTheme();
  const location = useLocation();

  // Update theme based on current route
  useEffect(() => {
    const currentPath = location.pathname.split('/')[1] || 'home';
    updateTheme(currentPath);
  }, [location, updateTheme]);

  // Toggle mobile menu
  const toggleMenu = () => setIsOpen(!isOpen);

  // Navigation links
  const navLinks = [
    { name: 'Home', path: '/' },
    { name: 'Professional Compliance Services', path: '/c-a-services' },
    { name: 'Skill Development', path: '/grow-with-us' },
    { name: 'Our Franchise', path: '/our-franchise' },
    { name: 'About Us', path: '/about-us' },
    { name: 'Contact Us', path: '/contact-us' },
  ];

  return (
    <>
      {/* Desktop Navbar */}
      <nav 
        className="fixed shadow-sm top-0 left-0 right-0 z-50 px-6 md:px-20 py-6 flex items-center justify-between"
        style={{ backgroundColor: themeColor }}
      >
        <div className="flex items-center">
          <Link to="/" className="text-black font-bold text-2xl"><img src={logo} className='h-20 w-auto'/></Link>
        </div>

        {/* Desktop Navigation Links */}
        <div className="hidden md:flex items-center space-x-8">
          {navLinks.map((link) => (
            <Link 
              key={link.path} 
              to={link.path} 
              className="text-black font-semibold relative group"
            >
              {link.name}
              <span className="absolute left-0 bottom-0 w-0 h-0.5 bg-black transition-all duration-300 group-hover:w-full"></span>
            </Link>
          ))}
        </div>

        {/* Auth Buttons */}
        

        {/* Mobile Menu Button */}
        <button 
          className="md:hidden text-black focus:outline-none" 
          onClick={toggleMenu}
          aria-label="Toggle menu"
        >
          <Menu size={24} />
        </button>
      </nav>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {isOpen && (
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="fixed inset-0 z-50 md:hidden"
            style={{ backgroundColor: themeColor }}
          >
            <div className="flex flex-col h-full p-6">
              <div className="flex justify-between items-center">
                <Link to="/" className="text-black font-bold text-2xl">Amvika Next</Link>
                <button 
                  className="text-black focus:outline-none" 
                  onClick={toggleMenu}
                  aria-label="Close menu"
                >
                  <X size={24} />
                </button>
              </div>

              <motion.div 
                className="flex flex-col space-y-8 mt-16"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.1, staggerChildren: 0.1 }}
              >
                {navLinks.map((link, index) => (
                  <motion.div
                    key={link.path}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.1 + (index * 0.1) }}
                  >
                    <Link 
                      to={link.path} 
                      className="text-black text-2xl font-medium flex items-center justify-between"
                      onClick={toggleMenu}
                    >
                      {link.name}
                      <ChevronRight size={24} />
                    </Link>
                  </motion.div>
                ))}
              </motion.div>

              
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default Navbar;