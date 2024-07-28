import React from 'react';
import { NavLink } from 'react-router-dom';

const Navigation = () => {
    return (
      <nav>
        <ul className="nav-list">
          <li><NavLink to="/" className={({ isActive }) => isActive ? "nav-link-active" : "nav-link"}>About</NavLink></li>
          <li><NavLink to="/projects" className={({ isActive }) => isActive ? "nav-link-active" : "nav-link"}>Projects</NavLink></li>
          <li><NavLink to="/contact" className={({ isActive }) => isActive ? "nav-link-active" : "nav-link"}>Contact</NavLink></li>
        </ul>
      </nav>
    );
  };
  
  export default Navigation;