import React, { useContext } from 'react';
import { DarkModeContext } from '../components/DarkModeContext.jsx';

const Footer = ({ onOpenPopup }) => {
  const { darkMode, setDarkMode } = useContext(DarkModeContext);

  const toggleDarkMode = () => setDarkMode(!darkMode);

  return (
    <footer className="fixed bottom-0 left-0 w-full z-50 bg-gray-100">
      <div className="relative py-1 flex items-center">
        <div className="absolute left-1/2 transform -translate-x-1/2">
          <p className="text-center text-sm">
            Please leave your feedback{' '}
            <button onClick={onOpenPopup} className="text-blue-500 hover:underline">
              here
            </button>
          </p>
        </div>
        <div className="ml-auto pr-4">
          <button
            className="bg-gray-100 text-black py-2 px-4"
            onClick={toggleDarkMode}
          >
            {darkMode ? 'Light Mode' : 'Dark Mode'}
          </button>
        </div>
      </div>
    </footer>
  );
};

export default Footer;