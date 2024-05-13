import React from 'react';
import { motion } from "framer-motion";

const Contact = () => {
  return (
    <motion.div       
    initial={{ opacity: 0 }}
    animate={{ opacity: 1 }}
    exit={{ opacity: 0 }}
    transition={{ duration: 1, ease: 'easeInOut' }}>
    <section id="contact">
      <h2>Contact</h2>
      <h1>Hi! You can contact me by email or LinkedIn!</h1>
      <a href="mailto:ahmedalhamrany@gmail.com">
      <h1>Email: ahmedalhamrany@gmail.com</h1>
      </a>
    </section>
    </motion.div>
  );
};

export default Contact;