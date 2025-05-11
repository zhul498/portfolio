import React from 'react';

const Experience = () => {
  return (
    <div className="bg-white dark:bg-neutral-900 dark:text-white py-12">
      <div className="max-w-5xl mx-auto px-6">
        <h1 className="text-3xl font-bold text-center text-neutral-900 dark:text-white mb-8">Work Experience</h1>
        
        <div className="space-y-8">
          <div>
            <h3 className="text-2xl font-semibold text-neutral-900 dark:text-white">City of Hillsboro</h3>
            <h4 className="text-lg text-neutral-500 dark:text-neutral-400">Front Desk Member at Shute Park Aquatic & Recreation Center</h4>
            <p className="text-sm text-neutral-500 dark:text-neutral-400">March 2023 - Present</p>
            <p className="text-base text-gray-700 leading-7 dark:text-gray-400">Customer service, P.O.S. Machine operation, Membership management.</p>
          </div>

          <div>
            <h3 className="text-2xl font-semibold text-neutral-900 dark:text-white">McDonald's</h3>
            <h4 className="text-lg text-neutral-500 dark:text-neutral-400">Team Member</h4>
            <p className="text-sm text-neutral-500 dark:text-neutral-400">July 2022 - October 2022</p>
            <p className="text-base text-gray-700 leading-7 dark:text-gray-400">Fast-paced environment, Food handling, Customer service.</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Experience;
