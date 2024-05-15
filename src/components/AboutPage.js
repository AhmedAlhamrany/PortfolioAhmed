import React from 'react';
import { motion } from "framer-motion";

const About = () => {
  return (
    <motion.div       
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 1, ease: 'easeInOut' }}
      className="container mx-auto py-8"
    >
      <section id="about" class="bg-gradient-to-b from-gray-800 to-gray-600 text-white py-10 px-4 mb-4 mt-4 rounded-lg transition-opacity opacity-100">
        <h2 className="text-3xl font-semibold text-white mb-4">About Me!</h2>
        <div className="flex justify-center mb-6">
         
        </div>
        <p className="text-lg text-white mb-8">
          Hello! I'm Ahmed, a passionate Computer Programming student at Seneca Polytechnic. I am deeply interested in both front-end and back-end development and constantly strive to expand my skills in these areas.
        </p>
        <p className="text-lg text-white mb-8">
          My journey in programming began when I discovered my fascination with creating digital solutions that make a positive impact on people's lives. Since then, I've been on a mission to learn and grow as a developer, tackling new challenges and embracing the ever-evolving tech landscape.
        </p>
        <p className="text-lg text-white mb-8">
          Outside of coding, you can find me exploring new technologies, reading books on software development, and occasionally indulging in some hobbies like working out and hiking.
        </p>
        <p className="text-lg text-white mb-8">
          Feel free to reach out if you'd like to connect!
        </p>
      </section>
    </motion.div>
  );
};

export default About;
