import React from 'react';
import { NavLink } from 'react-router-dom';

const Navigation = () => {
  return (
    <nav className="pt-6 pb-4 bg-white dark:bg-neutral-900">
      <ul className="flex justify-start max-w-5xl mx-auto px-4 gap-8 text-lg font-medium">
        {[
          { name: 'About', path: '/' },
          { name: 'Projects', path: '/projects' },
          { name: 'Experience', path: '/experience' },
          // { name: 'Miscellaneous', path: '/miscellaneous' },
        ].map(({ name, path }) => (
          <li key={name}>
            <NavLink
              to={path}
              className={({ isActive }) =>
                `relative transition-all duration-200 pb-1 ${
                  isActive
                    ? 'text-black dark:text-white after:scale-x-100'
                    : 'text-neutral-500 dark:text-neutral-400 hover:text-black dark:hover:text-white after:scale-x-0'
                } after:content-[''] after:absolute after:left-0 after:-bottom-1 after:h-[2px] after:w-full after:bg-current after:transition-transform after:duration-300 after:origin-left`
              }
            >
              {name}
            </NavLink>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default Navigation;
