import React from 'react';
import { motion } from "framer-motion";

const About = () => {
  return (
    <motion.div       
    initial={{ opacity: 0 }}
    animate={{ opacity: 1 }}
    exit={{ opacity: 0 }}
    transition={{ duration: 1, ease: 'easeInOut' }}>
    <section id="about">
      <h2>About Me!</h2>
      <h1>Hello, my name is Ahmed and I am currently going to Seneca Polytechnic taking Computer Programming. I am currently learning both front-end and back-end development.</h1>
    </section>
    </motion.div>
  );
};

export default About;
