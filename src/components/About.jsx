import React from 'react';
import { motion } from 'framer-motion';
import rectangle23 from '../assets/images/Rectangle 23.png';
import aboutVideo from '../assets/images/about-video-TOkWIQ5V.png';
import polygon1 from '../assets/images/Polygon 1.png';
import ellipse1 from '../assets/images/Ellipse 1.png';
import rectangle45 from '../assets/images/Rectangle 45 (1).png';

const About = () => {
  const whyChoosePoints = [
    {
      title: 'The Gym That Gets You Results',
      description: 'Lorem ipsum dolor sit amet consectetur. Habitasse lacus a sit ultrices sem nulla donec pulvinar.'
    },
    {
      title: 'Your Fitness Journey Starts Here',
      description: 'Lorem ipsum dolor sit amet consectetur. Habitasse lacus a sit ultrices sem nulla donec pulvinar.'
    },
    {
      title: 'Train Smarter. Get Stronger.',
      description: 'Lorem ipsum dolor sit amet consectetur. Habitasse lacus a sit ultrices sem nulla donec pulvinar.'
    }
  ];

  const stats = [
    { number: '05', label: 'Years' },
    { number: '30K', label: 'Members' },
    { number: '50', label: 'Classes' },
    { number: '100', label: 'Trainers' }
  ];

  return (
    <>
      <section className="bg-black py-12 sm:py-16 lg:py-20 px-4 sm:px-6 lg:px-20">
        <div className="container mx-auto max-w-[1400px]">
          
          {/* Why Choose Us Section */}
          <div className="mb-20 sm:mb-24 lg:mb-32">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 sm:gap-12 lg:gap-16 items-start">
              
              {/* Left Content */}
              <motion.div 
                initial={{ opacity: 0, x: -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: '-100px' }}
                transition={{ duration: 0.8 }}
                className="max-w-[520px]"
              >
                {/* Section Label */}
                <motion.div 
                  className="mb-6 sm:mb-8"
                  initial={{ opacity: 0, y: -20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: 0.2 }}
                >
                  <h2 className="text-[#BEBEBE] text-3xl sm:text-4xl lg:text-[50px] uppercase tracking-[0] font-bold leading-[100%] opacity-20">
                    WHY CHOOSE US
                  </h2>
                  <motion.div 
                    className="h-[3px] w-20 sm:w-28 lg:w-32 bg-[#FF6B35] mt-2"
                    initial={{ width: 0 }}
                    whileInView={{ width: 'auto' }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8, delay: 0.4 }}
                  />
                </motion.div>

                {/* Main Heading */}
                <motion.h3 
                  className="text-[#EA6C36] font-semibold text-2xl sm:text-[26px] lg:text-[30px] leading-[110%] tracking-[0] mb-8 sm:mb-10 lg:mb-12"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: 0.3 }}
                >
                  From Day One to Your Personal Best Here's Why Our Gym Delivers Results That Last
                </motion.h3>

                {/* Points List */}
                <div className="space-y-6 sm:space-y-8">
                  {whyChoosePoints.map((point, index) => (
                    <motion.div 
                      key={index} 
                      className="flex gap-3 sm:gap-4"
                      initial={{ opacity: 0, x: -30 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.5, delay: 0.5 + (index * 0.1) }}
                      whileHover={{ x: 10 }}
                    >
                      <motion.div 
                        className="flex-shrink-0 mt-1.5"
                        whileHover={{ scale: 1.3 }}
                        transition={{ duration: 0.2 }}
                      >
                        <div className="w-3 h-3 bg-[#FF6B35] rounded-full"></div>
                      </motion.div>
                      <div>
                        <h4 className="text-white text-sm sm:text-[15px] lg:text-[16px] font-bold mb-2 leading-tight">
                          {point.title}
                        </h4>
                        <p className="text-[#9CA3AF] text-xs sm:text-[12px] lg:text-[13px] leading-relaxed">
                          {point.description}
                        </p>
                      </div>
                    </motion.div>
                  ))}
                </div>
              </motion.div>

              {/* Right Image - Layered Design */}
              <motion.div 
                initial={{ opacity: 0, x: 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: '-100px' }}
                transition={{ duration: 0.8 }}
                className="relative w-full flex justify-center lg:justify-end"
              >
                <div className="relative w-full max-w-[350px] sm:max-w-[400px] lg:max-w-[450px] h-[350px] sm:h-[400px] lg:h-[450px]">
                  {/* Orange Background Layer */}
                  <motion.div 
                    className="absolute bottom-0 right-0 w-[90%] sm:w-[400px] h-[90%] sm:h-[400px] bg-[#FF6B35] rounded-[40px] sm:rounded-[50px]"
                    initial={{ scale: 0.8, opacity: 0 }}
                    whileInView={{ scale: 1, opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: 0.3 }}
                    whileHover={{ scale: 1.05, rotate: 2 }}
                  />
                  
                  {/* Main Image Layer */}
                  <motion.div 
                    className="absolute top-0 left-0 w-[90%] sm:w-[400px] h-[90%] sm:h-[400px] z-10"
                    initial={{ scale: 0.8, opacity: 0 }}
                    whileInView={{ scale: 1, opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: 0.5 }}
                    whileHover={{ scale: 1.05, rotate: -2 }}
                  >
                    <img 
                      src={rectangle23} 
                      alt="Gym Training" 
                      className="w-full h-full object-cover rounded-[40px] sm:rounded-[50px] shadow-2xl"
                    />
                  </motion.div>
                </div>
              </motion.div>

            </div>
          </div>

          {/* About Us Section */}
          <motion.div 
            className="pt-8 sm:pt-10 lg:pt-12 mb-12 sm:mb-14 lg:mb-16"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-100px' }}
            transition={{ duration: 0.8 }}
          >
            {/* Section Label */}
            <motion.div 
              className="mb-6 sm:mb-8"
              initial={{ opacity: 0, y: -20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <h2 className="text-[#202020] text-3xl sm:text-4xl lg:text-[50px] uppercase tracking-[0] font-bold leading-[100%]">
                ABOUT US
              </h2>
              <motion.div 
                className="h-[3px] w-20 sm:w-28 lg:w-32 bg-[#FF6B35] mt-2"
                initial={{ width: 0 }}
                whileInView={{ width: 'auto' }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: 0.3 }}
              />
            </motion.div>

            {/* Main Heading */}
            <motion.h3 
              className="text-[#FF6B35] text-3xl sm:text-4xl lg:text-5xl xl:text-[52px] font-bold mb-4 sm:mb-5 lg:mb-6 leading-tight"
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              Fitness with Purpose Results with Support
            </motion.h3>

            {/* Description */}
            <motion.p 
              className="text-[#9CA3AF] text-sm sm:text-[14px] lg:text-[15px] leading-relaxed mb-8 sm:mb-10 lg:mb-12 max-w-[700px]"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.4 }}
            >
              Lorem ipsum dolor sit amet consectetur. Habitasse lacus a sit ultrices sem nulla donec pulvinar. Vitae nam laoreet senectus porttitor aliquet. Vel enim ut eu arcu scelerisque erat. A lorem curabitur consectetur in
            </motion.p>
          </motion.div>

        </div>
      </section>

      {/* Stats Grid - Full Width */}
      <motion.div 
        className="bg-[#1a1a1a] h-auto sm:h-[110px] lg:h-[126px] flex items-center py-6 sm:py-0"
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
      >
        <div className="container mx-auto max-w-[1400px] px-4 sm:px-6 lg:px-20">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 sm:gap-6">
            {stats.map((stat, index) => (
              <motion.div 
                key={index} 
                className="text-center"
                initial={{ opacity: 0, scale: 0.5 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ 
                  duration: 0.5, 
                  delay: index * 0.1,
                  type: 'spring',
                  stiffness: 200
                }}
                whileHover={{ 
                  scale: 1.1,
                  y: -5
                }}
              >
                <motion.h4 
                  className="text-[#FF6B35] text-4xl sm:text-5xl lg:text-[48px] xl:text-[56px] font-bold mb-1 leading-none"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: 0.2 + (index * 0.1) }}
                >
                  {stat.number}
                </motion.h4>
                <motion.p 
                  className="text-white text-sm sm:text-[14px] lg:text-[15px] font-semibold"
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: 0.4 + (index * 0.1) }}
                >
                  {stat.label}
                </motion.p>
              </motion.div>
            ))}
          </div>
        </div>
      </motion.div>

      {/* Video Section - Full Width */}
      <section className="bg-black py-12 sm:py-16 lg:py-20 px-4 sm:px-6 lg:px-20">
        <div className="container mx-auto max-w-[1400px]">
          <motion.div 
            className="relative w-full"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-100px' }}
            transition={{ duration: 0.8 }}
          >
            <motion.div 
              className="relative w-full h-[300px] sm:h-[400px] lg:h-[500px] rounded-2xl sm:rounded-[28px] lg:rounded-[32px] overflow-hidden group cursor-pointer"
              whileHover={{ scale: 1.02 }}
              transition={{ duration: 0.3 }}
            >
              {/* Video Thumbnail */}
              <motion.img 
                src={aboutVideo} 
                alt="About Video" 
                className="w-full h-full object-cover"
                whileHover={{ scale: 1.05 }}
                transition={{ duration: 0.6 }}
              />
              
              {/* Dark Overlay */}
              <div className="absolute inset-0 bg-black/20"></div>

              {/* Play Button - Center */}
              <motion.div 
                className="absolute inset-0 flex items-center justify-center z-10"
                initial={{ scale: 0.8, opacity: 0 }}
                whileInView={{ scale: 1, opacity: 1 }}
                viewport={{ once: true }}
                transition={{ 
                  duration: 0.6, 
                  delay: 0.3,
                  type: 'spring',
                  stiffness: 200
                }}
              >
                <motion.div 
                  className="relative w-[80px] h-[80px] sm:w-[100px] sm:h-[100px] lg:w-[120px] lg:h-[120px]"
                  whileHover={{ scale: 1.2 }}
                  whileTap={{ scale: 0.9 }}
                  animate={{ 
                    scale: [1, 1.05, 1],
                  }}
                  transition={{ 
                    duration: 2, 
                    repeat: Infinity, 
                    ease: 'easeInOut' 
                  }}
                >
                  {/* Ellipse Background */}
                  <motion.img 
                    src={ellipse1} 
                    alt="Play Background" 
                    className="absolute inset-0 w-full h-full object-contain opacity-80"
                    animate={{ 
                      rotate: 360,
                    }}
                    transition={{ 
                      duration: 20, 
                      repeat: Infinity, 
                      ease: 'linear' 
                    }}
                  />
                  {/* Play Icon */}
                  <div className="absolute inset-0 flex items-center justify-center">
                    <motion.img 
                      src={polygon1} 
                      alt="Play" 
                      className="w-[24px] h-[24px] sm:w-[30px] sm:h-[30px] lg:w-[36px] lg:h-[36px] ml-2"
                      whileHover={{ scale: 1.2 }}
                    />
                  </div>
                </motion.div>
              </motion.div>

              {/* Rectangle 45 Texture Overlay */}
              <img 
                src={rectangle45} 
                alt="Texture" 
                className="absolute inset-0 w-full h-full object-cover opacity-10 mix-blend-overlay pointer-events-none"
              />
            </motion.div>
          </motion.div>
        </div>
      </section>
    </>
  );
};

export default About;
