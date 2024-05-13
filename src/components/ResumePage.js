import React from 'react';
import { motion } from "framer-motion";

const Resume = () => {
  return (
    <motion.div       
    initial={{ opacity: 0 }}
    animate={{ opacity: 1 }}
    exit={{ opacity: 0 }}
    transition={{ duration: 1, ease: 'easeInOut' }}>
    <section id="resume">
      <h2>Resume</h2>
    </section>
    </motion.div>
  );
};

export default Resume;