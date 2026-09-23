import React, { useState } from 'react';
import { motion } from 'framer-motion';
import logo from '../assets/images/logo.png';
import icon1 from '../assets/images/Group 53.png';
import icon2 from '../assets/images/Group 54.png';
import icon3 from '../assets/images/Group 55.png';
import icon4 from '../assets/images/Group 56.png';
import emailIcon from '../assets/images/people.png';
import phoneIcon from '../assets/images/call.png';
import locationIcon from '../assets/images/Frame (1).png';

const Footer = () => {
  const [email, setEmail] = useState('');

  const handleSubscribe = (e) => {
    e.preventDefault();
    console.log('Subscribed:', email);
    setEmail('');
  };

  const socialIcons = [
    { img: icon1, name: 'Social 1' },
    { img: icon2, name: 'Social 2' },
    { img: icon3, name: 'Social 3' },
    { img: icon4, name: 'Social 4' }
  ];

  const contactInfo = [
    { icon: emailIcon, text: 'Email: abc@design.com', alt: 'Email' },
    { icon: phoneIcon, text: 'Phone: +112 456 98765', alt: 'Phone' },
    { icon: locationIcon, text: 'Location: Dhaka,Bangladesh', alt: 'Location' }
  ];

  return (
    <footer className="bg-black py-0 px-0">
      <div className="w-full">
        <motion.div 
          className="bg-[#3A3A3A] rounded-t-2xl sm:rounded-t-[28px] lg:rounded-t-[32px] py-8 sm:py-10 lg:py-12"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8 lg:gap-12 items-start px-6 sm:px-8 lg:px-16 max-w-[1400px] mx-auto">
            
            {/* Left Section - Logo & Social Media */}
            <motion.div 
              className="flex flex-col items-start"
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              {/* Logo */}
              <motion.div 
                className="flex items-center gap-3 mb-5 sm:mb-6"
                whileHover={{ scale: 1.05 }}
                transition={{ duration: 0.2 }}
              >
                <img src={logo} alt="Gym Logo" className="w-8 h-8 sm:w-10 sm:h-10" />
                <span className="text-white text-2xl sm:text-[28px] font-bold"></span>
              </motion.div>

              {/* Social Media Icons */}
              <div className="flex gap-2 sm:gap-3">
                {socialIcons.map((social, index) => (
                  <motion.a 
                    key={index}
                    href="#" 
                    initial={{ opacity: 0, scale: 0 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ 
                      duration: 0.4, 
                      delay: 0.3 + (index * 0.1),
                      type: 'spring',
                      stiffness: 200
                    }}
                    whileHover={{ 
                      scale: 1.2, 
                      rotate: 360,
                      transition: { duration: 0.4 }
                    }}
                    whileTap={{ scale: 0.9 }}
                  >
                    <img src={social.img} alt={social.name} className="w-8 h-8 sm:w-10 sm:h-10" />
                  </motion.a>
                ))}
              </div>
            </motion.div>

            {/* Middle Section - Subscribe */}
            <motion.div 
              className="flex flex-col"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.3 }}
            >
              <h3 className="text-[#FF6B35] text-[18px] sm:text-[20px] font-bold mb-3 sm:mb-4">
                Subscribe with us
              </h3>
              <form onSubmit={handleSubscribe} className="relative flex">
                <motion.input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="Email"
                  className="flex-1 bg-[#E8E8E8] rounded-l-[12px] px-4 sm:px-6 py-3 sm:py-4 text-sm sm:text-[16px] text-gray-800 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-[#FF6B35] transition-all"
                  required
                  whileFocus={{ scale: 1.02 }}
                />
                <motion.button
                  type="submit"
                  className="w-16 sm:w-20 bg-[#FF6B35] rounded-r-[12px] flex items-center justify-center hover:bg-[#ff8555] transition-colors"
                  whileHover={{ scale: 1.05, backgroundColor: '#ff8555' }}
                  whileTap={{ scale: 0.95 }}
                >
                  <svg
                    width="20"
                    height="20"
                    viewBox="0 0 24 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                    className="text-white"
                  >
                    <path
                      d="M9 18l6-6-6-6"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </motion.button>
              </form>
            </motion.div>

            {/* Right Section - Contact Us */}
            <motion.div 
              className="flex flex-col"
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.4 }}
            >
              <h3 className="text-[#FF6B35] text-[18px] sm:text-[20px] font-bold mb-3 sm:mb-4">
                Contact Us
              </h3>
              <div className="space-y-2 sm:space-y-3">
                {contactInfo.map((contact, index) => (
                  <motion.div 
                    key={index}
                    className="flex items-center gap-2 sm:gap-3"
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: 0.5 + (index * 0.1) }}
                    whileHover={{ x: 5, transition: { duration: 0.2 } }}
                  >
                    <motion.img 
                      src={contact.icon} 
                      alt={contact.alt} 
                      className="w-6 h-6 sm:w-8 sm:h-8"
                      whileHover={{ scale: 1.2, rotate: 10 }}
                      transition={{ duration: 0.2 }}
                    />
                    <span className="text-white text-xs sm:text-[14px]">{contact.text}</span>
                  </motion.div>
                ))}
              </div>
            </motion.div>

          </div>
        </motion.div>
      </div>
    </footer>
  );
};

export default Footer;
