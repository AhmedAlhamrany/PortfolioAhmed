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
      <section id="projects" class="bg-gradient-to-b from-gray-800 to-gray-600 text-white py-10 px-4 mb-4 mt-4 rounded-lg transition-opacity opacity-100">
        <h2 class="font-bold text-2xl text-white">Museum Project</h2>
        <div class="project-card">
          <a href="https://final-web-a6.vercel.app/" className="proj-link">
            <img src={require("../images/ProjectImage.JPG")} alt="Museum-project" className='proj-image'/>
          </a>
        </div>
      </section>
    </motion.div>
  );
};

export default Projects;
