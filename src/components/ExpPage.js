import React from 'react';
import { motion } from "framer-motion";

const experience = () => {
  return (
    <motion.div       
    initial={{ opacity: 0 }}
    animate={{ opacity: 1 }}
    exit={{ opacity: 0 }}
    transition={{ duration: 1, ease: 'easeInOut' }}>
<section id="experience" class="bg-gradient-to-b from-gray-800 to-gray-600 text-white py-10 px-4 mb-4 mt-4 rounded-lg transition-opacity opacity-100">
  <h2 class="font-bold text-2xl text-white">Education &amp; Experience</h2>
  <div className="space-y-3">
  <div class="flex justify-between items-center text-white">
    <p class="font-bold text-2xl text-white">Seneca Polytechnic</p>
    <p class="font-thin sm:font-normal md:text-lg text-white">January 2022 - August 2024</p></div>
  <p class="flex justify-between items-center text-white">Computer Programming &amp; Analysis (Co-op)</p>
  <p class="flex justify-between items-center text-white">Learning multiple coding languages for things such as, software development, web development, database management and analyzing and resolving issues with computers and software</p>
  <p class="flex justify-between items-center text-white">Current GPA: 3.6</p>
  </div>
  </section>
    </motion.div>
  );
};

export default experience;