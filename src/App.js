import './App.css';
import Header from './components/Header';
import AboutPage from './components/AboutPage';
import ProjectsPage from './components/ProjectsPage';
import ResumePage from './components/ResumePage';
import ContactPage from './components/ContactPage';
import './style.css';
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { AnimatePresence } from 'framer-motion';

function App() {
  return (
    <Router>
      <div className="App">
        <Header />
        <main>
        <AnimatePresence exitBeforeEnter={false} mode="wait">
          <Routes>
            <Route path="/about" element={<AboutPage />} />
            <Route path="/projects" element={<ProjectsPage />} />
            <Route path="/resume" element={<ResumePage />} />
            <Route path="/contact" element={<ContactPage />} />
          </Routes>
          </AnimatePresence>
        </main>
      </div>
    </Router>
  );
}

export default App;
