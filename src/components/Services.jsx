import React from 'react';
import { motion } from 'framer-motion';
import arrow1 from '../assets/images/Arrow 1.png';
import rectangle7 from '../assets/images/Rectangle 7.png';
import rectangle44 from '../assets/images/Rectangle 44.png';
import service1 from '../assets/images/service-1.png';
import service2 from '../assets/images/service-2.png';
import service3 from '../assets/images/service-3.png';
import service4 from '../assets/images/service-4.png';
import service5 from '../assets/images/service-5.png';
import service6 from '../assets/images/service-6.png';

const Services = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
        delayChildren: 0.3
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 50, scale: 0.9 },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: { 
        duration: 0.6,
        ease: 'easeOut'
      }
    }
  };

  const services = [
    { name: 'Transform', image: service1 },
    { name: 'Elevate', image: service2 },
    { name: 'Achieve', image: service3 },
    { name: 'Perform', image: service4 },
    { name: 'Push', image: service5 },
    { name: 'Train', image: service6 }
  ];

  return (
    <section className="relative py-12 sm:py-16 lg:py-20 px-4 sm:px-6 lg:px-16 overflow-hidden bg-black">
      {/* Gradient Overlay on left side */}
      <motion.div 
        className="absolute left-0 top-0 bottom-0 w-1/3 bg-gradient-to-r from-transparent via-gray-800/30 to-transparent z-0"
        animate={{ 
          opacity: [0.3, 0.5, 0.3] 
        }}
        transition={{ 
          duration: 4, 
          repeat: Infinity, 
          ease: 'easeInOut' 
        }}
      />
      
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <motion.img 
          src={rectangle44} 
          alt="Background" 
          className="w-full h-full object-cover opacity-20"
          animate={{ 
            scale: [1, 1.05, 1] 
          }}
          transition={{ 
            duration: 10, 
            repeat: Infinity, 
            ease: 'easeInOut' 
          }}
        />
      </div>

      <div className="container mx-auto max-w-[1400px] relative z-10">
        {/* Section Header */}
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.6 }}
          className="mb-10 sm:mb-12 lg:mb-16"
        >
          <motion.div 
            className="flex items-center gap-3 sm:gap-4 mb-4 sm:mb-6"
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <h2 className="text-gray-600 text-xs sm:text-sm lg:text-base uppercase tracking-[0.2em] sm:tracking-[0.3em] font-bold">
              OUR SERVICE
            </h2>
            <motion.div 
              className="h-[2px] w-16 sm:w-20 lg:w-28 bg-primary"
              initial={{ width: 0 }}
              whileInView={{ width: 'auto' }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.4 }}
            />
          </motion.div>
          
          <motion.h3 
            className="text-primary text-2xl sm:text-3xl lg:text-4xl xl:text-5xl 2xl:text-[56px] font-bold mb-4 sm:mb-6 leading-[1.2]"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.3 }}
          >
            Unlock Your Best Self with Our Full Range of<br className="hidden sm:block" />
            Fitness Services
          </motion.h3>
          
          <motion.p 
            className="text-gray-400 text-xs sm:text-sm lg:text-base leading-relaxed max-w-3xl"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            Lorem ipsum dolor sit amet consectetur. Habitasse lacus a sit ultrices sem nulla donec pulvinar. Vitae nam laoreet senectus porttitor aliquet. Vel enim ut eu arcu scelerisque erat. A lorem curabitur consectetur in
          </motion.p>
        </motion.div>

        {/* Services Grid */}
        <motion.div 
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-50px' }}
          className="grid grid-cols-1 lg:grid-cols-4 gap-4 sm:gap-5 lg:gap-6"
        >
          {/* Left Side - 2 columns with 6 cards (3x2 grid) */}
          <div className="lg:col-span-3 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-5 lg:gap-6">
            {services.map((service, index) => (
              <motion.div 
                key={service.name}
                variants={itemVariants}
                className="relative group overflow-hidden rounded-2xl h-48 sm:h-56 lg:h-60 bg-black cursor-pointer"
                whileHover={{ y: -10 }}
                transition={{ duration: 0.3 }}
              >
                {/* Service Image Background */}
                <motion.img
                  src={service.image}
                  alt={service.name}
                  className="absolute inset-0 w-full h-full object-cover"
                  whileHover={{ scale: 1.15 }}
                  transition={{ duration: 0.6, ease: 'easeOut' }}
                />
                {/* Rectangle 44 Overlay */}
                <motion.img
                  src={rectangle44}
                  alt="Overlay"
                  className="absolute inset-0 w-full h-full object-cover opacity-50"
                  whileHover={{ opacity: 0.2 }}
                  transition={{ duration: 0.4 }}
                />
                {/* Gradient Overlay */}
                <motion.div 
                  className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent"
                  initial={{ opacity: 0.7 }}
                  whileHover={{ opacity: 0.9 }}
                  transition={{ duration: 0.3 }}
                />
                <motion.div 
                  className="absolute bottom-4 sm:bottom-6 left-4 sm:left-6 right-4 sm:right-6 z-10"
                  initial={{ y: 0 }}
                  whileHover={{ y: -8 }}
                  transition={{ duration: 0.3 }}
                >
                  <h4 className="text-primary text-xl sm:text-2xl lg:text-[28px] font-bold flex items-center gap-2">
                    {service.name}
                    <motion.img 
                      src={arrow1} 
                      alt="arrow" 
                      className="w-3 h-3 sm:w-4 sm:h-4"
                      animate={{ 
                        x: [0, 5, 0],
                        y: [0, -5, 0]
                      }}
                      transition={{ 
                        duration: 1.5, 
                        repeat: Infinity, 
                        ease: 'easeInOut' 
                      }}
                    />
                  </h4>
                </motion.div>
              </motion.div>
            ))}
          </div>

          {/* Right Side - Large Unleash Card */}
          <motion.div 
            initial={{ opacity: 0, x: 100, scale: 0.9 }}
            whileInView={{ opacity: 1, x: 0, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.3 }}
            whileHover={{ y: -10 }}
            className="lg:col-span-1 relative group overflow-hidden rounded-2xl min-h-[300px] sm:min-h-[400px] lg:min-h-full bg-gray-900 cursor-pointer"
          >
            <motion.img
              src={rectangle7}
              alt="Unleash"
              className="w-full h-full object-cover"
              whileHover={{ scale: 1.1 }}
              transition={{ duration: 0.6, ease: 'easeOut' }}
            />
            <motion.div 
              className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent"
              initial={{ opacity: 0.8 }}
              whileHover={{ opacity: 1 }}
              transition={{ duration: 0.3 }}
            />
            <motion.div 
              className="absolute bottom-6 sm:bottom-8 left-6 sm:left-8 right-6 sm:right-8"
              initial={{ y: 0 }}
              whileHover={{ y: -10 }}
              transition={{ duration: 0.3 }}
            >
              <h4 className="text-white text-2xl sm:text-3xl lg:text-[40px] font-bold">
                Unleash
              </h4>
            </motion.div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default Services;
