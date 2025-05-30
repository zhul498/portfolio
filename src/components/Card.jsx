import React from 'react';

const Card = ({ icon, title, link, description, timeline, tech }) => {
  return (
    <a 
      href={link} 
      target="_blank" 
      rel="noopener noreferrer" 
      className="bg-white dark:bg-neutral-800 shadow-md rounded-xl p-5 transition border border-transparent hover:border-green-700 hover:shadow-lg flex flex-col sm:flex-row gap-4"
    >
      <div className="flex-shrink-0">
        <img src={icon} alt={`${title} icon`} className="w-12 h-12" />
      </div>

      <div className="flex flex-col">
        <h3 className="text-xl font-semibold dark:text-white">
          {title}
        </h3>

        {tech && (
          <p className="text-sm text-gray-600 dark:text-gray-400 mb-2">
		{tech}
          </p>
        )}

        <p className="text-sm text-gray-700 dark:text-gray-300 mt-1 mb-2">
          {description}
        </p>


        <span className="text-xs text-gray-500 dark:text-gray-400 mt-auto">{timeline}</span>
      </div>
    </a>
  );
};

export default Card;

