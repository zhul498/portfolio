import React from 'react';
import CppIcon from '/assets/skills/cpp.svg'; 
import PythonIcon from '/assets/skills/python.svg';  
import SqlIcon from '/assets/skills/sql.svg';  

const Skills = () => {
  const skills = [
    { name: 'C++', icon: <img src={CppIcon} alt="C++" className="w-8 h-8" /> },
    { name: 'Python', icon: <img src={PythonIcon} alt="Python" className="w-8 h-8" /> },
    { name: 'SQL', icon: <img src={SqlIcon} alt="SQL" className="w-8 h-8" /> },
  ];

  return (
    <div className="skills-container pb-12 max-w-7xl mx-auto px-6">
      <div className="grid grid-cols-2 sm:grid-cols-3 gap-6">
        {skills.map((skill, index) => (
          <div className="flex flex-col items-center justify-center bg-neutral-200 dark:bg-neutral-800 p-4 rounded-lg shadow-sm hover:shadow-md transition-all duration-200 ease-in-out group" key={index}>
            <div className="icon-container mb-3 p-3 rounded-full bg-neutral-300 dark:bg-neutral-700 group-hover:bg-neutral-600 transition-all duration-200">
              {skill.icon}
            </div>
            <div className="skill-name text-lg font-medium text-neutral-900 dark:text-white group-hover:text-neutral-100 transition-all duration-200">
              {skill.name}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Skills;
