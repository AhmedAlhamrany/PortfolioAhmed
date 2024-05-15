import React from 'react';
import { motion } from "framer-motion";

const Contact = () => {
  return (
    <motion.div       
    initial={{ opacity: 0 }}
    animate={{ opacity: 1 }}
    exit={{ opacity: 0 }}
    transition={{ duration: 1, ease: 'easeInOut' }}>
    <section id="contact" class="bg-gradient-to-b from-gray-800 to-gray-600 text-white py-10 px-4 mb-4 mt-4 rounded-lg transition-opacity opacity-100">
      <h2 class="text-3xl font-semibold text-white mb-4">Contact</h2>
      <h1 class="text-lg text-white mb-8">Hi! You can contact me by email or on LinkedIn!</h1>
      <div class="flex justify-center items-center space-x-4">
          <a
            href="mailto:ahmedalhamrany@gmail.com"
            class="bg-gray-800 hover:bg-blue-600 text-white py-2 px-6 rounded-lg text-lg font-semibold transition duration-300"
          >
            Email
          </a>
          <a
            href="https://www.linkedin.com/in/ahmed-alhamrany-a01931238/"
            target="_blank"
            rel="noopener noreferrer"
            class="bg-gray-800 hover:bg-blue-600 text-white py-2 px-6 rounded-lg text-lg font-semibold transition duration-300"
          >
            LinkedIn
          </a>
          </div>
    </section>
    </motion.div>
  );
};

export default Contact;