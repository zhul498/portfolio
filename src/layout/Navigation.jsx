import React from 'react';
import { NavLink } from 'react-router-dom';

const Navigation = () => {
    return (
      <nav>
        <ul>
          <li><NavLink to="/" className={({ isActive }) => isActive ? "nav-link-active" : "nav-link"}>About</NavLink></li>
          <li><NavLink to="/projects" className={({ isActive }) => isActive ? "nav-link-active" : "nav-link"}>Projects</NavLink></li>
        </ul>
      </nav>
    );
  };
  
  export default Navigation;