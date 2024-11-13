import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const AboutUsPage = () => {
  // Team data
  const team = [
    "Mohammad Tauqeer Ansari",
    "Kirti Dixit",
    "Ariba Anis",
    "Anuja Katiyar",
    "Atah Ur Rehman",
    "Amay Mishra",
  ];

  return (
    <div className="bg-gradient-to-r from-orange-100 to-yellow-200">

      {/* About Us Section */}
      <section className="text-center px-8 py-16">
        <motion.h2 
          className="text-3xl font-semibold text-gray-800 mb-4"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1 }}
        >
          About DHAAGA
        </motion.h2>
        <motion.p
          className="text-lg text-gray-700 max-w-4xl mx-auto"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1.5, delay: 0.5 }}
        >
          DHAAGA is more than just an e-commerce platform; it's a celebration of India's rich cultural heritage. We aim to bring authentic, handcrafted products from local artisans directly to your doorstep. From Banarasi sarees to handwoven carpets, our mission is to empower artisans, uplift their traditional skills, and connect them to a global audience.
          Our products reflect the dedication, love, and passion of the artisans who have passed down their craft through generations. Every item you purchase from DHAAGA tells a story—a story of artistry, heritage, and the timeless beauty of Indian traditions.
        </motion.p>
      </section>

      {/* Customer Reviews Section */}
      <section className="bg-gray-100 py-16">
        <motion.h2
          className="text-3xl font-semibold text-center text-gray-800 mb-8"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1 }}
        >
          Customer Reviews
        </motion.h2>
        <div className="flex justify-center space-x-8">
          {/* Review 1 */}
          <motion.div 
            className="bg-white p-8 rounded-lg shadow-lg w-80"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 0.5 }}
          >
            <p className="text-lg text-gray-700 mb-4">
              "I absolutely love the Banarasi saree I purchased from DHAAGA. The quality is unmatched, and it arrived beautifully packaged. Truly an exceptional shopping experience!"
            </p>
            <p className="font-semibold text-gray-800">Anjali Sharma</p>
            <p className="text-gray-600">Banaras, India</p>
          </motion.div>

          {/* Review 2 */}
          <motion.div 
            className="bg-white p-8 rounded-lg shadow-lg w-80"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 1 }}
          >
            <p className="text-lg text-gray-700 mb-4">
              "The wooden crafts I bought were absolutely stunning! I could see the effort and passion that went into every piece. Will definitely be back for more!"
            </p>
            <p className="font-semibold text-gray-800">Ravi Kumar</p>
            <p className="text-gray-600">Delhi, India</p>
          </motion.div>

          {/* Review 3 */}
          <motion.div 
            className="bg-white p-8 rounded-lg shadow-lg w-80"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 1.5 }}
          >
            <p className="text-lg text-gray-700 mb-4">
              "DHAAGA offers a seamless online shopping experience. I’m so happy with my purchase of handcrafted pottery. It’s even more beautiful in person!"
            </p>
            <p className="font-semibold text-gray-800">Neha Singh</p>
            <p className="text-gray-600">Mumbai, India</p>
          </motion.div>
        </div>
      </section>

      {/* Meet the Team Section */}
      <section className="px-8 py-16 text-center">
        <motion.h2 
          className="text-3xl font-semibold text-gray-800 mb-8"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1 }}
        >
          Meet Our Team
        </motion.h2>

        <div className="grid md:grid-cols-3 gap-8">
          {team.map((member, index) => (
            <AnimatePresence key={index}>
              <motion.div 
                className="bg-white p-8 rounded-lg shadow-lg"
                initial={{ opacity: 0, x: 100 }}  // Start from the right
                whileInView={{ opacity: 1, x: 0 }} // Slide in and fade in
                exit={{ opacity: 0, x: -100 }} // Slide out when leaving view
                transition={{ duration: 1, delay: index * 0.5 }} // Staggered animation
                viewport={{ once: false }}  // Keep animating when it comes in and out of view
              >
                <div className="mb-4">
                  <img 
                    src="/path-to-team-member-image.jpg" 
                    alt={member} 
                    className="w-24 h-24 object-cover rounded-full mx-auto"
                  />
                </div>
                <h3 className="text-xl font-semibold text-gray-800">{member}</h3>
                <p className="text-gray-600">Team Member</p>
              </motion.div>
            </AnimatePresence>
          ))}
        </div>
      </section>
    </div>
  );
};

export default AboutUsPage;
