import React from 'react';
import { motion } from 'framer-motion';
import bgImage from '../assets/images/bg-image.png';
import arrow from '../assets/images/arrow.png';
import c1 from '../assets/images/c1.png';
import c2 from '../assets/images/c2.png';
import c3 from '../assets/images/c3.png';

const Hero = () => {
  return (
    <section className="relative min-h-screen w-full overflow-hidden bg-black">
      {/* Background Image - Right Side */}
      <motion.div 
        initial={{ opacity: 0, x: 100 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 1.2, ease: 'easeOut' }}
        className="absolute inset-0 z-0"
      >
        <motion.div 
          className="absolute inset-0 bg-gradient-to-r from-black via-black/60 to-transparent"
          animate={{ 
            background: [
              'linear-gradient(to right, #000 0%, rgba(0,0,0,0.6) 50%, transparent 100%)',
              'linear-gradient(to right, #000 0%, rgba(0,0,0,0.5) 50%, transparent 100%)',
              'linear-gradient(to right, #000 0%, rgba(0,0,0,0.6) 50%, transparent 100%)'
            ]
          }}
          transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut' }}
        />
        <motion.img 
          src={bgImage} 
          alt="Gym Background" 
          className="absolute right-0 sm:right-8 lg:right-16 xl:right-24 top-0 h-full w-auto max-w-none object-cover"
          style={{ maxHeight: '100vh' }}
          initial={{ scale: 1.1 }}
          animate={{ scale: 1 }}
          transition={{ duration: 1.5, ease: 'easeOut' }}
        />
      </motion.div>

      {/* Content */}
      <div className="relative z-10 container mx-auto px-4 sm:px-6 lg:px-16 pt-20 sm:pt-24 pb-16 sm:pb-20 min-h-screen flex items-center">
        <div className="max-w-4xl">
          {/* Main Heading */}
          <motion.h1 
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-[80px] 2xl:text-[90px] font-bold leading-[1.1] mb-4 sm:mb-6 tracking-tight"
          >
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.5 }}
            >
              <motion.span 
                className="text-primary"
                whileHover={{ scale: 1.05, display: 'inline-block' }}
              >
                Your{' '}
              </motion.span>
              <motion.span 
                className="text-white"
                whileHover={{ scale: 1.05, display: 'inline-block' }}
              >
                Fitness Journey
              </motion.span>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.7 }}
            >
              <motion.span 
                className="text-white"
                whileHover={{ scale: 1.05, display: 'inline-block' }}
              >
                Starts{' '}
              </motion.span>
              <motion.span 
                className="text-primary"
                whileHover={{ scale: 1.05, display: 'inline-block' }}
              >
                Here
              </motion.span>
            </motion.div>
          </motion.h1>

          {/* Description */}
          <motion.p 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.9 }}
            className="text-gray-400 text-sm sm:text-base md:text-lg mb-8 sm:mb-10 leading-relaxed max-w-lg"
          >
            Lorem ipsum dolor sit amet consectetur. Habitasse lacus a sit ultrices sem nulla donec pulvinar. Vitanam laoreet senectus porttitor aliquet.
          </motion.p>

          {/* CTA Buttons */}
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 1.1 }}
            className="flex flex-col sm:flex-row flex-wrap gap-4 mb-12 sm:mb-16"
          >
            <motion.button 
              className="bg-primary hover:bg-orange-600 text-white px-6 sm:px-8 py-3 sm:py-3.5 rounded-full font-semibold text-sm sm:text-base transition-all duration-300 shadow-lg hover:shadow-xl"
              whileHover={{ 
                scale: 1.05,
                boxShadow: '0 25px 50px -12px rgba(255, 107, 53, 0.5)'
              }}
              whileTap={{ scale: 0.95 }}
            >
              Get Start
            </motion.button>
            <motion.button 
              className="flex items-center gap-3 text-white hover:text-primary transition-colors duration-300 justify-center sm:justify-start"
              whileHover={{ x: 5 }}
            >
              <motion.div 
                className="w-12 h-12 bg-gray-700/50 hover:bg-gray-600/50 backdrop-blur-sm rounded-full flex items-center justify-center transition-all duration-300"
                whileHover={{ 
                  scale: 1.1,
                  backgroundColor: 'rgba(255, 107, 53, 0.3)'
                }}
                whileTap={{ scale: 0.9 }}
              >
                <svg className="w-5 h-5 ml-1 text-primary" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M8 5v14l11-7z"/>
                </svg>
              </motion.div>
              <span className="font-semibold text-sm sm:text-base">Watch Now</span>
            </motion.button>
          </motion.div>

          {/* Reviews Section */}
          <motion.div 
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 1.3 }}
            className="flex flex-col gap-4"
          >
            {/* User Avatars */}
            <motion.div 
              className="flex -space-x-3"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.8, delay: 1.5 }}
            >
              {[c1, c2, c3].map((img, index) => (
                <motion.div 
                  key={index}
                  className="w-10 h-10 sm:w-12 sm:h-12 rounded-full border-2 border-dark overflow-hidden"
                  initial={{ scale: 0, x: -20 * index }}
                  animate={{ scale: 1, x: 0 }}
                  transition={{ 
                    duration: 0.5, 
                    delay: 1.5 + (index * 0.1),
                    type: 'spring',
                    stiffness: 200
                  }}
                  whileHover={{ scale: 1.1, zIndex: 10 }}
                >
                  <img src={img} alt={`User ${index + 1}`} className="w-full h-full object-cover" />
                </motion.div>
              ))}
              <motion.div 
                className="w-10 h-10 sm:w-12 sm:h-12 rounded-full border-2 border-dark bg-primary flex items-center justify-center"
                initial={{ scale: 0, x: -60 }}
                animate={{ scale: 1, x: 0 }}
                transition={{ 
                  duration: 0.5, 
                  delay: 1.8,
                  type: 'spring',
                  stiffness: 200
                }}
                whileHover={{ scale: 1.1, zIndex: 10 }}
              >
                <span className="text-white font-bold text-xs sm:text-sm">4+</span>
              </motion.div>
            </motion.div>

            {/* Review Text */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 1.9 }}
            >
              <h3 className="text-white font-bold text-lg sm:text-xl mb-1">
                350k+<span className="text-primary">Review</span>
              </h3>
              <div className="flex gap-1">
                {[1, 2, 3, 4].map((star) => (
                  <motion.svg 
                    key={star} 
                    className="w-4 h-4 sm:w-5 sm:h-5 text-yellow-400 fill-current" 
                    viewBox="0 0 24 24"
                    initial={{ opacity: 0, rotate: -180 }}
                    animate={{ opacity: 1, rotate: 0 }}
                    transition={{ 
                      duration: 0.5, 
                      delay: 2 + (star * 0.1),
                      type: 'spring'
                    }}
                    whileHover={{ 
                      scale: 1.3, 
                      rotate: [0, -10, 10, -10, 0],
                      transition: { duration: 0.5 }
                    }}
                  >
                    <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/>
                  </motion.svg>
                ))}
                <motion.svg 
                  className="w-4 h-4 sm:w-5 sm:h-5 text-gray-600 fill-current" 
                  viewBox="0 0 24 24"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ duration: 0.5, delay: 2.4 }}
                >
                  <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/>
                </motion.svg>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>

      {/* Scroll Down Indicator */}
      <motion.div 
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ 
          duration: 0.8, 
          delay: 2.5, 
          repeat: Infinity, 
          repeatType: 'reverse', 
          repeatDelay: 0.5 
        }}
        className="absolute bottom-4 sm:bottom-8 right-4 sm:right-8 z-10"
      >
        <motion.button 
          className="w-12 h-12 sm:w-14 sm:h-14 flex items-center justify-center transition-all duration-300"
          whileHover={{ 
            scale: 1.2,
            rotate: 180
          }}
          whileTap={{ scale: 0.9 }}
        >
          <motion.img 
            src={arrow} 
            alt="Scroll Down" 
            className="w-6 h-6 sm:w-8 sm:h-8"
            animate={{ y: [0, 10, 0] }}
            transition={{ 
              duration: 1.5, 
              repeat: Infinity, 
              ease: 'easeInOut' 
            }}
          />
        </motion.button>
      </motion.div>
    </section>
  );
};

export default Hero;
