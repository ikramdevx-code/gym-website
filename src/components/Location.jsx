import React from 'react';
import { motion } from 'framer-motion';
import mapImage from '../assets/images/Group 42.png';

const Location = () => {
  return (
    <section className="bg-black py-12 sm:py-16 lg:py-20 px-4 sm:px-6 lg:px-20">
      <div className="container mx-auto max-w-[1400px]">
        {/* Section Header */}
        <motion.div 
          className="mb-10 sm:mb-12"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.8 }}
        >
          <motion.div 
            className="mb-4 sm:mb-6"
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-[#3D3D3D] text-3xl sm:text-4xl lg:text-[50px] uppercase tracking-[0] font-bold leading-[100%]">
              OUR LOCATION
            </h2>
            <motion.div 
              className="h-[3px] w-32 sm:w-40 lg:w-48 bg-[#FF6B35] mt-2"
              initial={{ width: 0 }}
              whileInView={{ width: 'auto' }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.3 }}
            />
          </motion.div>
          
          <motion.h3 
            className="text-[#FF6B35] text-2xl sm:text-3xl lg:text-4xl xl:text-5xl 2xl:text-[52px] font-bold leading-[1.2]"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            The Gym Next Door — With Results That Go the Distance
          </motion.h3>
        </motion.div>

        {/* Map Section */}
        <motion.div 
          className="relative w-full h-[300px] sm:h-[400px] lg:h-[500px] rounded-2xl sm:rounded-[20px] lg:rounded-[24px] overflow-hidden bg-[#0a0a0a]"
          initial={{ opacity: 0, y: 50, scale: 0.95 }}
          whileInView={{ opacity: 1, y: 0, scale: 1 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.8 }}
          whileHover={{ scale: 1.02 }}
        >
          {/* Map Image */}
          <motion.img 
            src={mapImage} 
            alt="Location Map" 
            className="w-full h-full object-cover"
            initial={{ scale: 1.1 }}
            whileInView={{ scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 1.2 }}
            whileHover={{ scale: 1.05 }}
          />
          
          {/* Dark Overlay for better contrast */}
          <motion.div 
            className="absolute inset-0 bg-black/20"
            whileHover={{ backgroundColor: 'rgba(0, 0, 0, 0.1)' }}
            transition={{ duration: 0.3 }}
          />
          
          {/* Animated Pin/Marker Indicator */}
          <motion.div 
            className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2"
            initial={{ opacity: 0, scale: 0 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ 
              duration: 0.6, 
              delay: 0.5,
              type: 'spring',
              stiffness: 200
            }}
            animate={{ 
              y: [0, -10, 0] 
            }}
            transition={{ 
              duration: 2, 
              repeat: Infinity, 
              ease: 'easeInOut' 
            }}
          >
            <div className="w-12 h-12 sm:w-16 sm:h-16 bg-[#FF6B35] rounded-full flex items-center justify-center shadow-lg">
              <svg 
                className="w-6 h-6 sm:w-8 sm:h-8 text-white" 
                fill="currentColor" 
                viewBox="0 0 20 20"
              >
                <path fillRule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clipRule="evenodd" />
              </svg>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default Location;
