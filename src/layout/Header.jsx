import React, { useContext } from 'react';
import { DarkModeContext } from '../components/DarkModeContext.jsx';

const Header = () => {
  const { darkMode, setDarkMode } = useContext(DarkModeContext);

  const toggleDarkMode = () => setDarkMode(!darkMode);

  return (
    <header className="relative bg-white dark:bg-neutral-900 dark:text-white border-b border-neutral-200 dark:border-neutral-800 py-6 shadow-sm">
      <button
        onClick={toggleDarkMode}
        className="absolute top-4 right-4 p-2 rounded-full hover:bg-neutral-100 dark:hover:bg-neutral-800 transition"
        aria-label="Toggle dark mode"
      >
        <img
          src={darkMode ? '/assets/header/lightmode.svg' : '/assets/header/darkmode.svg'}
          alt="Toggle Theme"
          className="w-6 h-6"
        />
      </button>

      <div className="max-w-5xl mx-auto px-4 flex flex-col sm:flex-row items-center sm:items-start sm:justify-between">
        <div className="flex items-center gap-6 w-full">
          <img
            src="/profile.png"
            alt="Lian Zhu"
            className="w-24 h-24 rounded-full object-cover shadow-md"
          />
          <div className="text-left">
            <h1 className="text-3xl font-bold">Lian Zhu</h1>
            <h2 className="text-xl text-neutral-500 dark:text-neutral-400">
              Computer Science Major, at Portland State University
            </h2>
            <h3 className="text-lg text-neutral-500 dark:text-neutral-400">Minor in Mathematics</h3>
            <p className="text-sm mt-1 text-neutral-500 dark:text-neutral-400">
              Portland, Oregon, United States
            </p>
          </div>
        </div>

        <div className="mt-4 sm:mt-0 flex gap-4 items-center justify-center sm:justify-end w-full sm:w-auto">
          <a
            href="mailto:lianzhu@pdx.edu"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:opacity-80 transition"
          >
            <img src="/assets/header/mail.svg" alt="Email" className="w-6 h-6" />
          </a>
          <a
            href="https://www.linkedin.com/in/lianzhu-/"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:opacity-80 transition"
          >
            <img src="/assets/header/linkedin.svg" alt="LinkedIn" className="w-6 h-6" />
          </a>
          <a
            href="https://github.com/zhul498"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:opacity-80 transition"
          >
            <img src="/assets/header/github.svg" alt="GitHub" className="w-6 h-6" />
          </a>
        </div>
      </div>
    </header>
  );
};

export default Header;
