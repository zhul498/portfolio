import React, { useContext } from 'react';
import Card from '../components/Card';
import { DarkModeContext } from '../components/DarkModeContext.jsx';

const Projects = () => {
  const { darkMode } = useContext(DarkModeContext);

  return (
    <div className={`bg-white dark:bg-neutral-900 dark:text-white animate-fade-in pb-20`}>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 px-4 max-w-7xl mx-auto">
        <Card
          icon="/assets/projects/viking.svg"
          title="Viking Grades"
          link="https://example.com"
          description="Currently developing a website to enhance transparency at PSU. This website will provide students with detailed information about course performance trends, grade distributions, and instructor data."
          timeline="December 2024 - Present"
        />
        <Card
          icon="/assets/projects/portfolio-icon.svg"
          title="Portfolio Website"
          link="https://github.com/zhul498/portfolio"
          description="This portfolio website started in summer 2024 to get familiar with frontend development, with incremental updates."
          timeline="July 2024 - Present"
        />
        <Card
          icon="/assets/projects/roblox-icon.svg"
          title="Roblox Group Management Service"
          link="https://github.com/zhul498/discord-bot-public"
          description="ROBLOX group management service handling 300+ members."
          timeline="June 2024 - December 2024"
        />
        <Card
          icon="/assets/projects/barbell-icon.svg"
          title="Barbell Path Tracker"
          link="#"
          description="OpenCV program to track the path of a barbell and calculate the deviation from the center of path."
          timeline="February 2024 - June 2024"
        />
        <Card
          icon="/assets/projects/task-icon.svg"
          title="CRUD CLI Application"
          link="#"
          description="C++ application using a linked list data structure for task management."
          timeline="March 2023 - July 2023"
        />
      </div>
    </div>
  );
};

export default Projects;