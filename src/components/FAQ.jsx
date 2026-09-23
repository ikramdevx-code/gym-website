import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const FAQ = () => {
  const [openIndex, setOpenIndex] = useState(0);

  const faqs = [
    {
      id: 1,
      question: 'What membership plans do you offer?',
      answer: (
        <div className="space-y-2">
          <p><strong>Monthly Membership:</strong> Pay month-to-month with no long-term commitment. Perfect for short-term access or trying us out.</p>
          <p><strong>Annual Membership:</strong> Get the best value with a discounted rate when you commit for 12 months.</p>
          <p><strong>Day Pass / Weekly Pass:</strong> Great for visitors or anyone who wants to try the gym without a full membership.</p>
          <p><strong>Student / Senior Plans:</strong> Special pricing for students and seniors with valid ID.</p>
          <p><strong>Family or Group Plans:</strong> Save more when you sign up with a partner or family members.</p>
        </div>
      )
    },
    {
      id: 2,
      question: 'Is there a contract or cancellation fee?',
      answer: 'No long-term contracts required. Cancel anytime with 30 days notice.'
    },
    {
      id: 3,
      question: 'Can I freeze or pause my membership?',
      answer: 'Yes, you can freeze your membership for up to 3 months per year for medical or personal reasons.'
    },
    {
      id: 4,
      question: 'Do you offer a free trial or guest pass?',
      answer: 'Yes! We offer a complimentary 7-day trial pass for first-time visitors. Contact us to get started.'
    },
    {
      id: 5,
      question: 'Do you offer a free trial or guest pass?',
      answer: 'Yes! We offer a complimentary 7-day trial pass for first-time visitors. Contact us to get started.'
    },
    {
      id: 6,
      question: 'Do you offer a free trial or guest pass?',
      answer: 'Yes! We offer a complimentary 7-day trial pass for first-time visitors. Contact us to get started.'
    }
  ];

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="bg-black py-12 sm:py-16 lg:py-20">
      <div className="container mx-auto max-w-[1400px] px-4 sm:px-6 lg:px-20">
        {/* Section Header */}
        <motion.div 
          className="mb-10 sm:mb-12"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-[#3D3D3D] text-3xl sm:text-4xl lg:text-[50px] uppercase tracking-[0] font-bold leading-[100%]">
            FAQ
          </h2>
          <motion.div 
            className="h-[3px] w-12 sm:w-14 lg:w-16 bg-[#FF6B35] mt-2"
            initial={{ width: 0 }}
            whileInView={{ width: 'auto' }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.3 }}
          />
        </motion.div>

        {/* FAQ Items */}
        <div className="space-y-0 max-w-[900px]">
          {faqs.map((faq, index) => (
            <motion.div
              key={faq.id}
              className="border-b border-[#444444]"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              {/* Question */}
              <motion.button
                onClick={() => toggleFAQ(index)}
                className="w-full flex items-center justify-between py-5 sm:py-6 text-left group"
                whileHover={{ x: 5 }}
                whileTap={{ scale: 0.98 }}
              >
                <div className="flex items-start gap-2 sm:gap-3 flex-1">
                  <span className="text-white text-sm sm:text-[16px] font-bold">
                    Q{faq.id}.
                  </span>
                  <h3 className="text-white text-sm sm:text-[16px] font-bold">
                    {faq.question}
                  </h3>
                </div>
                
                {/* Toggle Icon */}
                <div className="ml-4 flex-shrink-0">
                  <motion.div
                    animate={{ rotate: openIndex === index ? 180 : 0 }}
                    transition={{ duration: 0.3 }}
                  >
                    {openIndex === index ? (
                      <motion.svg
                        width="18"
                        height="18"
                        viewBox="0 0 24 24"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                        className="text-[#FF6B35]"
                        initial={{ scale: 0.8 }}
                        animate={{ scale: 1 }}
                        transition={{ duration: 0.2 }}
                      >
                        <path
                          d="M5 12H19"
                          stroke="currentColor"
                          strokeWidth="2"
                          strokeLinecap="round"
                        />
                      </motion.svg>
                    ) : (
                      <motion.svg
                        width="18"
                        height="18"
                        viewBox="0 0 24 24"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                        className="text-[#FF6B35]"
                        initial={{ scale: 0.8 }}
                        animate={{ scale: 1 }}
                        transition={{ duration: 0.2 }}
                      >
                        <path
                          d="M12 5V19M5 12H19"
                          stroke="currentColor"
                          strokeWidth="2"
                          strokeLinecap="round"
                        />
                      </motion.svg>
                    )}
                  </motion.div>
                </div>
              </motion.button>

              {/* Answer */}
              <AnimatePresence>
                {openIndex === index && (
                  <motion.div 
                    className="overflow-hidden"
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: 'auto', opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.3, ease: 'easeInOut' }}
                  >
                    <motion.div 
                      className="pb-5 sm:pb-6 pl-5 sm:pl-7 pr-6 sm:pr-8"
                      initial={{ y: -10 }}
                      animate={{ y: 0 }}
                      transition={{ duration: 0.3 }}
                    >
                      <div className="text-white text-xs sm:text-[13px] leading-relaxed space-y-2">
                        {faq.answer}
                      </div>
                    </motion.div>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          ))}
          
          {/* Bottom Orange Line */}
          <motion.div 
            className="h-[3px] bg-[#FF6B35] mt-0"
            initial={{ scaleX: 0 }}
            whileInView={{ scaleX: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.5 }}
            style={{ transformOrigin: 'left' }}
          />
        </div>
      </div>
    </section>
  );
};

export default FAQ;
