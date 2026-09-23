import React from 'react';
import { motion } from 'framer-motion';
import member1 from '../assets/images/Ellipse 10.png';
import member2 from '../assets/images/Ellipse 13.png';
import member3 from '../assets/images/Ellipse 27.png';

const Testimonials = () => {
  const testimonials = [
    {
      id: 1,
      image: member1,
      name: 'Amelia',
      role: 'Student',
      rating: 5,
      text: 'Lorem ipsum dolor sit amet consectetur. Habitasse lacus a sit ultrices sem nulla donec pulvinar. Vitae nam laoreet senectus porttitor aliquet. Vel enim ut eu arcu scelerisque erat. A lorem curabitur consectetur in'
    },
    {
      id: 2,
      image: member2,
      name: 'Wallya',
      role: 'Student',
      rating: 5,
      text: 'Lorem ipsum dolor sit amet consectetur. Habitasse lacus a sit ultrices sem nulla donec pulvinar. Vitae nam laoreet senectus porttitor aliquet. Vel enim ut eu arcu scelerisque erat. A lorem curabitur consectetur in'
    },
    {
      id: 3,
      image: member3,
      name: 'Ezaz',
      role: 'Student',
      rating: 5,
      text: 'Lorem ipsum dolor sit amet consectetur. Habitasse lacus a sit ultrices sem nulla donec pulvinar. Vitae nam laoreet senectus porttitor aliquet. Vel enim ut eu arcu scelerisque erat. A lorem curabitur consectetur in'
    }
  ];

  return (
    <section className="bg-black py-12 sm:py-16 lg:py-20 px-4 sm:px-6 lg:px-20">
      <div className="container mx-auto max-w-[1400px]">
        {/* Section Header */}
        <motion.div 
          className="mb-10 sm:mb-12 lg:mb-16"
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
              MEMBER SAYING
            </h2>
            <motion.div 
              className="h-[3px] w-48 sm:w-64 lg:w-80 bg-[#FF6B35] mt-2"
              initial={{ width: 0 }}
              whileInView={{ width: 'auto' }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.3 }}
            />
          </motion.div>
        </motion.div>

        {/* Testimonials Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 lg:gap-10">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={testimonial.id}
              className="flex flex-col items-start"
              initial={{ opacity: 0, y: 50, scale: 0.9 }}
              whileInView={{ opacity: 1, y: 0, scale: 1 }}
              viewport={{ once: true, margin: '-100px' }}
              transition={{ 
                duration: 0.6, 
                delay: index * 0.2,
                type: 'spring',
                stiffness: 100
              }}
              whileHover={{ y: -10, scale: 1.02 }}
            >
              {/* Member Image */}
              <motion.div 
                className="mb-5 sm:mb-6"
                initial={{ opacity: 0, scale: 0.5 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ 
                  duration: 0.5, 
                  delay: 0.1 + (index * 0.2),
                  type: 'spring',
                  stiffness: 200
                }}
                whileHover={{ scale: 1.1, rotate: 5 }}
              >
                <img
                  src={testimonial.image}
                  alt={testimonial.name}
                  className="w-[80px] h-[80px] sm:w-[90px] sm:h-[90px] lg:w-[100px] lg:h-[100px] rounded-full object-cover border-4 border-[#2A2A2A]"
                />
              </motion.div>

              {/* Testimonial Text */}
              <motion.p 
                className="text-white text-[13px] sm:text-[14px] leading-relaxed mb-5 sm:mb-6"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.2 + (index * 0.2) }}
              >
                {testimonial.text}
              </motion.p>

              {/* Member Info */}
              <motion.div 
                className="mb-2 sm:mb-3"
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.3 + (index * 0.2) }}
              >
                <h4 className="text-white text-[18px] sm:text-[20px] font-bold mb-1">
                  {testimonial.name}
                </h4>
                <p className="text-[#9CA3AF] text-[13px] sm:text-[14px]">
                  {testimonial.role}
                </p>
              </motion.div>

              {/* Rating Stars */}
              <div className="flex gap-1">
                {[...Array(testimonial.rating)].map((_, starIndex) => (
                  <motion.svg
                    key={starIndex}
                    width="18"
                    height="18"
                    viewBox="0 0 20 20"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                    initial={{ opacity: 0, scale: 0, rotate: -180 }}
                    whileInView={{ opacity: 1, scale: 1, rotate: 0 }}
                    viewport={{ once: true }}
                    transition={{ 
                      duration: 0.5, 
                      delay: 0.4 + (index * 0.2) + (starIndex * 0.05),
                      type: 'spring',
                      stiffness: 200
                    }}
                    whileHover={{ 
                      scale: 1.3, 
                      rotate: [0, -10, 10, -10, 0],
                      transition: { duration: 0.5 }
                    }}
                  >
                    <path
                      d="M10 0L12.2451 6.90983H19.5106L13.6327 11.1803L15.8779 18.0902L10 13.8197L4.12215 18.0902L6.36729 11.1803L0.489435 6.90983H7.75486L10 0Z"
                      fill="#FFB800"
                    />
                  </motion.svg>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
