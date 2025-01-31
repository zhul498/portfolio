import React from 'react';

const Header = () => {
  return (
    <header className="bg-white dark:bg-neutral-900 dark:text-white">
      <div className="p-7 shadow-lg rounded-[50px] max-w-3xl w-full mb-5 mx-auto flex justify-between items-center">
        <div className="flex items-center space-x-6">
          <img src="/assets/profile.png" alt="Lian Zhu" className="w-28 h-28 rounded-full object-cover" />
          <div className="text-left">
            <h1 className="text-3xl font-bold">Lian Zhu</h1>
            <h2 className="text-xl text-text-secondary">Computer Science Major, at Portland State University</h2>
            <h3 className="text-l text-text-secondary">Minor in Mathematics</h3>
            <p className="text-sm">Portland, Oregon, United States</p>
            <div className="mt-2 space-x-2 text-sm">
              <a href="mailto:lianzhu@pdx.edu" target="_blank" rel="noopener noreferrer" className="text-blue-500 hover:underline">Email</a>
              <span> | </span>
              <a href="https://www.linkedin.com/in/lianzhu-/" target="_blank" rel="noopener noreferrer" className="text-blue-500 hover:underline">LinkedIn</a>
              <span> | </span>
              <a href="https://github.com/zhul498" target="_blank" rel="noopener noreferrer" className="text-blue-500 hover:underline">GitHub</a>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;