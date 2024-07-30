import React from 'react';
import { FaCode } from 'react-icons/fa'; 
import { FaPython } from 'react-icons/fa'; 
import { FaDatabase } from 'react-icons/fa'; 

const Skills = () => {
  const skills = [
    { name: 'C++', icon: <FaCode /> },
    { name: 'Python', icon: <FaPython /> },
    { name: 'SQL', icon: <FaDatabase /> },
  ];

  return (
    <div className="skills-container">
      {skills.map((skill, index) => (
        <div className="skill-bubble" key={index}>
          <div className="icon">{skill.icon}</div>
          <div className="skill-name">{skill.name}</div>
        </div>
      ))}
    </div>
  );
};

export default Skills;