import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
  return (
    <header class="bg-gradient-to-b from-gray-900 to-gray-600 text-white py-4">
      <div class="container mx-auto flex justify-between items-center">
        <h1 class="text-3xl font-bold">Ahmed Alhamrany</h1>
        <nav>
          <ul class="flex space-x-6">
            <li><Link class="hover:text-gray-300" to="/about">About</Link></li>
            <li><Link class="hover:text-gray-300" to="/projects">Projects</Link></li>
            <li><Link class="hover:text-gray-300" to="/experience">Experience</Link></li>
            <li><Link class="hover:text-gray-300" to="/contact">Contact</Link></li>
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Header;
