import React from 'react';
import { motion } from 'framer-motion';

const Pricing = () => {
  const plans = [
    {
      name: 'Basic Plan',
      price: '$50',
      period: '/Monthly',
      description: 'Perfect for beginners & casual gym-goers',
      features: [
        'Full gym access (off-peak hours)',
        'Access to cardio & weight areas',
        'Locker & shower use',
        'No commitment – cancel anytime'
      ],
      isPopular: false,
      bgColor: 'bg-[#C5C5C5]',
      textColor: 'text-black'
    },
    {
      name: 'Standard Plan',
      price: '$60',
      period: '/Monthly',
      description: 'Our most popular plan – great value!',
      features: [
        '24/7 gym access',
        'Unlimited group fitness classes',
        'Access to all equipment & facilities',
        '1 free personal training session/month',
        'Member mobile app access'
      ],
      isPopular: true,
      bgColor: 'bg-[#FF6B35]',
      textColor: 'text-white'
    },
    {
      name: 'Premium Plan',
      price: '$70',
      period: '/Monthly',
      description: 'For serious athletes or those wanting more',
      features: [
        'All Standard Plan features',
        'Unlimited personal training sessions',
        'Nutrition coaching included',
        'Sauna & recovery room access',
        'Priority class booking'
      ],
      isPopular: false,
      bgColor: 'bg-[#C5C5C5]',
      textColor: 'text-black'
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
            <h2 className="text-[#6B7280] text-3xl sm:text-4xl lg:text-[50px] uppercase tracking-[0] font-bold leading-[100%]">
              PRICING
            </h2>
            <motion.div 
              className="h-[3px] w-20 sm:w-28 lg:w-32 bg-[#FF6B35] mt-2"
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
            FLEXIBLE PLANS FOR EVERY GOAL
          </motion.h3>
        </motion.div>

        {/* Pricing Cards Grid */}
        <div className="flex flex-col md:flex-row justify-center items-center md:items-end gap-6 lg:gap-8">
          {plans.map((plan, index) => (
            <motion.div
              key={index}
              className={`${plan.bgColor} ${plan.textColor} flex flex-col ${
                plan.isPopular 
                  ? 'w-full md:w-[340px] lg:w-[400px] h-auto md:h-[580px] lg:h-[620px] p-8 lg:p-10 rounded-[24px] lg:rounded-[30px] shadow-2xl' 
                  : 'w-full md:w-[300px] lg:w-[350px] h-auto md:h-[500px] lg:h-[540px] p-6 lg:p-8 rounded-[16px] lg:rounded-[20px]'
              }`}
              initial={{ opacity: 0, y: 50, scale: 0.9 }}
              whileInView={{ opacity: 1, y: 0, scale: 1 }}
              viewport={{ once: true, margin: '-100px' }}
              transition={{ 
                duration: 0.6, 
                delay: index * 0.2,
                type: 'spring',
                stiffness: 100
              }}
              whileHover={{ 
                y: plan.isPopular ? -15 : -10,
                scale: plan.isPopular ? 1.03 : 1.02,
                boxShadow: plan.isPopular 
                  ? '0 25px 50px -12px rgba(255, 107, 53, 0.5)' 
                  : '0 20px 40px -12px rgba(0, 0, 0, 0.3)'
              }}
            >
              {/* Plan Name */}
              <motion.h4 
                className={`font-bold mb-3 sm:mb-4 ${
                  plan.isPopular ? 'text-[24px] sm:text-[26px] lg:text-[28px]' : 'text-[20px] sm:text-[22px] lg:text-[24px]'
                }`}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.1 + (index * 0.2) }}
              >
                {plan.name}
              </motion.h4>

              {/* Price */}
              <motion.div 
                className="mb-3 sm:mb-4"
                initial={{ opacity: 0, scale: 0.5 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ 
                  duration: 0.5, 
                  delay: 0.2 + (index * 0.2),
                  type: 'spring',
                  stiffness: 200
                }}
              >
                <span className={`font-bold ${
                  plan.isPopular ? 'text-[36px] sm:text-[38px] lg:text-[40px]' : 'text-[28px] sm:text-[30px] lg:text-[32px]'
                }`}>{plan.price}</span>
                <span className={`font-normal ${
                  plan.isPopular ? 'text-[14px] sm:text-[15px] lg:text-[16px]' : 'text-[12px] sm:text-[13px] lg:text-[14px]'
                }`}>{plan.period}</span>
              </motion.div>

              {/* Description */}
              <motion.p 
                className={`font-normal mb-5 sm:mb-6 leading-relaxed ${
                  plan.isPopular ? 'text-[13px] sm:text-[14px]' : 'text-[12px] sm:text-[13px]'
                } ${plan.isPopular ? 'text-white' : 'text-black'}`}
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.3 + (index * 0.2) }}
              >
                {plan.description}
              </motion.p>

              {/* Features List */}
              <ul className="space-y-2 sm:space-y-2.5 mb-6 sm:mb-8 flex-grow">
                {plan.features.map((feature, featureIndex) => (
                  <motion.li
                    key={featureIndex}
                    className={`flex items-start gap-2 leading-relaxed ${
                      plan.isPopular ? 'text-[12px] sm:text-[13px]' : 'text-[11px] sm:text-[12px]'
                    } ${plan.isPopular ? 'text-white' : 'text-black'}`}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.4, delay: 0.4 + (index * 0.2) + (featureIndex * 0.05) }}
                    whileHover={{ x: 5 }}
                  >
                    <span className="mt-0.5 text-[10px]">•</span>
                    <span className="flex-1">{feature}</span>
                  </motion.li>
                ))}
              </ul>

              {/* CTA Button */}
              <motion.button
                className={`w-full py-3 sm:py-3.5 rounded-full font-bold transition-all duration-300 ${
                  plan.isPopular ? 'text-[15px] sm:text-[16px]' : 'text-[14px] sm:text-[15px]'
                } ${
                  plan.isPopular
                    ? 'bg-white text-[#FF6B35] hover:bg-gray-100'
                    : 'bg-transparent border-2 border-[#FF6B35] text-[#FF6B35] hover:bg-[#FF6B35] hover:text-white'
                }`}
                whileHover={{ 
                  scale: 1.05,
                  boxShadow: plan.isPopular 
                    ? '0 10px 25px -5px rgba(255, 255, 255, 0.3)' 
                    : '0 10px 25px -5px rgba(255, 107, 53, 0.3)'
                }}
                whileTap={{ scale: 0.95 }}
              >
                By This Plan
              </motion.button>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Pricing;
