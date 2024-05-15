import './App.css';
import Header from './components/Header';
import AboutPage from './components/AboutPage';
import ProjectsPage from './components/ProjectsPage';
import ExpPage from './components/ExpPage';
import ContactPage from './components/ContactPage';
import './style.css';
import React from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate} from 'react-router-dom';
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
            <Route path="/experience" element={<ExpPage />} />
            <Route path="/contact" element={<ContactPage />} />
            <Route path="/*" element={<Navigate to="/about" />}/>
          </Routes>
          </AnimatePresence>
        </main>
      </div>
    </Router>
  );
}

export default App;
