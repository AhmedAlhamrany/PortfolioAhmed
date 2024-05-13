import React from 'react';
import '../projectPage.css';
import { motion } from "framer-motion";

const Projects = () => {
  return (
    <motion.div       
    initial={{ opacity: 0 }}
    animate={{ opacity: 1 }}
    exit={{ opacity: 0 }}
    transition={{ duration: 1, ease: 'easeInOut' }}>
      <section id="projects">
        <h2>Museum Project</h2>
        <div className='project-card'>
          <a href="https://final-web-a6.vercel.app/" className="proj-link">
            <img src={require("../images/ProjectImage.JPG")} alt="Museum-project" className='proj-image'/>
          </a>
        </div>
      </section>
    </motion.div>
  );
};

export default Projects;
