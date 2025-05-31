import React, { useContext } from 'react';
import Card from '../components/Card';
import { DarkModeContext } from '../components/DarkModeContext.jsx';

const Projects = () => {
  const { darkMode } = useContext(DarkModeContext);

  return (
    <div className={`bg-white dark:bg-neutral-900 dark:text-white animate-fade-in pb-20`}>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 px-4 max-w-7xl mx-auto">
        <Card
          icon="/assets/projects/fsu_logo.svg"
          title="Data Visualization Tool"
          link="https://www.youtube.com/watch?v=wplYJyGQDFs"
	  description="Full-stack app that visualizes a university's course and professor grade distributions using a custom SQLite3 database. Enables search by professor or course, showing term-by-term grade trends and teaching history."
	  tech="React + Vite, JavaScript, Node.js, SQLite3"
          timeline="December 2024 - May 2025"
        />
        <Card
          icon="/assets/projects/portfolio-icon.svg"
          title="Portfolio Website"
          link="https://github.com/zhul498/portfolio"
          description="This portfolio website started in summer 2024 to get familiar with frontend development, with incremental updates."
	  tech="React + Vite, JavaScript, tailwindcss"
          timeline="July 2024 - Present"
        />
        <Card
          icon="/assets/projects/roblox-icon.svg"
          title="Roblox Group Management Service"
          link="https://github.com/zhul498/discord-bot-public"
          description="ROBLOX group management service handling 300+ members."
	  tech="Python, discord.py, Pillow"
          timeline="June 2024 - December 2024"
        />
        <Card
          icon="/assets/projects/barbell-icon.svg"
          title="Barbell Path Tracker"
          link="#"
          description="OpenCV program to track the path of a barbell and calculate the deviation from the center of path."
	  tech="Python, OpenCV"
          timeline="February 2024 - June 2024"
        />
        <Card
          icon="/assets/projects/task-icon.svg"
          title="CRUD CLI Application"
          link="#"
          description="C++ application using a linked list data structure for task management."
	  tech="C++"
          timeline="March 2023 - July 2023"
        />
      </div>
    </div>
  );
};

export default Projects;
