import React from 'react';
import { Link } from 'react-router-dom';
import { FaFacebook, FaTwitter, FaLinkedin, FaInstagram, FaPhone, FaPhoneSquare, FaEnvelope, FaMapMarkerAlt, FaYoutube } from 'react-icons/fa';
import logo from '../assets/logo.png';

const Footer = () => {
  const navLinks = [
    { name: 'Home', path: '/' },
    { name: 'Our Franchise', path: '/our-franchise' },
    { name: 'Skill Development', path: '/grow-with-us' },
    { name: 'About Us', path: '/about-us' },
    { name: 'Professional Compliance Services', path: '/c-a-services' },
    { name: 'Contact Us', path: '/contact-us' },
  ];

  const socialLinks = [
    { icon: <FaFacebook size={20} />, url: 'https://www.facebook.com/share/r/1AhEpiFB2w/' },
    { icon: <FaYoutube size={20} />, url: 'https://youtube.com/@amvikanext?si=j-a2Q7suE0UJ9QcE' },
    { icon: <FaLinkedin size={20} />, url: 'https://www.linkedin.com/in/amvika-next-640358361?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app' },
    { icon: <FaInstagram size={20} />, url: 'https://www.instagram.com/amvikanext?igsh=MTE2aXgxM2NzcHZzMA==' },
  ];

  const contactInfo = [
    { icon: <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-phone-icon lucide-phone"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"/></svg>, text: '+919407171421' },
    { icon: <FaEnvelope />, text: 'contact@amvikanext.com' },
    { icon: <FaMapMarkerAlt />, text: ' Plot No. 99 Main Road, Before Katangi Bypass, Jabalpur Madhya Pradesh, MP' },
  ];

  return (
    <footer className="bg-gradient-to-b from-white to-gray-100 text-black py-12">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12">
          <div className="flex flex-col items-start space-y-4">
            <img src={logo} alt="Amvika Logo" className="h-32 mb-4 object-cover" />
            <p className="text-sm text-gray-600 leading-relaxed max-w-xs">
              Your trusted partner in financial solutions. Providing excellence in accounting and financial services.
            </p>
          </div>
          
          <div className="col-span-2">
            <h3 className="text-xl font-bold mb-6 text-left">Quick Links</h3>
            <ul className="grid grid-cols-2 gap-6">
              {navLinks.map((link) => (
                <li key={link.path}>
                  <Link 
                    to={link.path} 
                    className="hover:font-semibold transition-all transition-colors duration-300 flex items-center space-x-2"
                  >
                    <span>→</span>
                    <span>{link.name}</span>
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div className="flex flex-col items-start space-y-6">
            <div>
              <h3 className="text-xl font-bold mb-6">Contact Info</h3>
              <ul className="space-y-4">
                {contactInfo.map((info, index) => (
                  <li key={index} className="flex items-center space-x-3 text-gray-600">
                    <span className="text-black">{info.icon}</span>
                    <span>{info.text}</span>
                  </li>
                ))}
              </ul>
            </div>
            
            <div>
              <h3 className="text-xl font-bold mb-4">Follow Us</h3>
              <div className="flex space-x-4">
                {socialLinks.map((social, index) => (
                  <a
                    key={index}
                    href={social.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-gray-600 hover:text-black transition-colors duration-300"
                  >
                    {social.icon}
                  </a>
                ))}
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-200 mt-12 pt-8">
          <div className="flex flex-col items-start md:flex-row md:justify-between md:items-center">
            <div className="flex flex-col w-full  md:flex-row md:justify-between">
              <p className="text-sm text-gray-600">
                © {new Date().getFullYear()} Amvika Next. All rights reserved.
              </p>
              <p className="text-sm text-gray-600 mt-2 md:mt-0 md:ml-3">
                Developed by <a href="https://ewithmarketing.com"  target="_blank" rel="noopener noreferrer" className="hover:font-semibold  underline transition-colors duration-300">Ewiths</a>
              </p>
            </div>
            {/* <div className="mt-4 md:mt-0">
              <a href="/privacy" className="text-sm text-gray-600 hover:font-semibold mx-3">Privacy Policy</a>
              <a href="/terms" className="text-sm text-gray-600 hover:font-semibold mx-3">Terms of Service</a>
            </div> */}
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
