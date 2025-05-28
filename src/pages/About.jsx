import React from 'react';
import Skills from '../components/Skills';
import ImageCarousel from '../components/ImageCarousel';
import DocuCard from '../components/DocuCard'; 

const About = () => {
  return (
    <div className="flex justify-center items-start bg-white dark:bg-neutral-900 dark:text-white px-4 animate-fade-in">
      <div className="max-w-5xl w-full flex flex-col gap-10 mt-10 mb-20">

        <div className="flex flex-col md:flex-row gap-8">
          <div className="md:w-2/3">
            <h1 className="text-2xl font-bold mb-4">About Me</h1>
            <p className="text-gray-700 leading-7 dark:text-gray-400">
              I am a Sophomore at Portland State University. As a current student focused mainly on learning and applying my skills as soon as possible, I am excited to
              use technology to create cool things. My projects give me the ability to apply my knowledge. Outside of school, I enjoy exercising, playing video games, and 
              trying out new foods.
            </p>

            <h1 className="text-2xl font-bold mt-8 mb-4">Documents</h1>
            <DocuCard />
          </div>

          <div className="md:w-1/3 flex flex-col items-center gap-4">
            <ImageCarousel />
          </div>
        </div>

        <div className="flex flex-col gap-4">
          <h1 className="text-2xl font-bold">Education</h1>

          <div className="flex flex-row gap-6 items-start p-6 rounded-xl border border-transparent hover:border-green-700 hover:shadow-xl transition-shadow bg-white dark:bg-neutral-900">
            <div className="relative w-40 h-40 flex-shrink-0 mt-1">
              <img
                src="/psu-logo.jpg"
                alt="Portland State University Logo"
                className="w-full h-full object-contain"
              />
            </div>

            <div className="flex-1">
              <h3 className="text-3xl font-bold text-green-800 mb-1">Portland State University</h3>
              <h4 className="text-lg font-semibold mb-1">B.S. in Computer Science, Maseeh College of Engineering</h4>

              <div className="flex items-center gap-2 mb-1">
                <div className="bg-green-700 text-white text-sm font-semibold px-3 py-0.5 rounded-full shadow-md opacity-80">
                  GPA: 3.98
                </div>
                <h4 className="text-md font-semibold mb-1">Minor in Mathematics</h4>
              </div>

              <p className="mt-2 text-sm text-gray-700 dark:text-gray-300">
                <span className="font-semibold">Relevant Coursework: </span>
                Data Structures & Algorithms, Database Management Systems, Algorithmic Thinking,  System Programming & Architecture, Calculus III, Linear Algebra,
                Discrete Structures
              </p>
            </div>
          </div>
        </div>

        <div>
          <h1 className="text-2xl font-bold mb-2">Skills</h1>
          <Skills />
        </div>

      </div>
    </div>
  );
};

export default About;
