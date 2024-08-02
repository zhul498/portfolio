import React from 'react';
import { NavLink } from 'react-router-dom';

const Navigation = () => {
  return (
    <div className="bg-white dark:bg-neutral-900">
      <nav className="mt-8 mb-5">
        <ul className="flex flex-wrap justify-center space-x-4 text-xl">
          <li><NavLink to="/" className={({ isActive }) => isActive ? "nav-link-active dark:text-white" : "nav-link dark:text-gray-400"}>About</NavLink></li>
          <li><NavLink to="/projects" className={({ isActive }) => isActive ? "nav-link-active dark:text-white" : "nav-link dark:text-gray-400"}>Projects</NavLink></li>
          <li><NavLink to="/miscellaneous" className={({ isActive }) => isActive ? "nav-link-active dark:text-white" : "nav-link dark:text-gray-400"}>Miscellaneous</NavLink></li>
        </ul>
      </nav>
    </div>
  );
};

export default Navigation;
