import React from 'react';
import Skills from '../components/Skills';
import ImageCarousel from '../components/ImageCarousel';

const About = () => {
  return (
    <div className="flex justify-center items-start bg-white dark:bg-neutral-900 dark:text-white px-4">
      <div className="max-w-5xl w-full flex flex-col gap-10 mt-10 mb-20">

        <div className="flex flex-col md:flex-row gap-8">
          <div className="md:w-2/3">
            <h1 className="text-2xl font-bold mb-4">About Me</h1>
            <p className="text-gray-700 leading-7 dark:text-gray-400">
              I am a Sophomore at Portland State University. As a current student focused mainly on learning and applying my skills as soon as possible, I am excited to
              use technology to create cool things. My projects give me the ability to apply my knowledge. Outside of school, I enjoy exercising, playing video games, and 
              trying out new foods.
            </p>
          </div>

          <div className="md:w-1/3 flex flex-col items-center gap-4">
            <ImageCarousel />
          </div>
        </div>

        <div className="flex flex-col md:flex-row gap-8">
          <div className="md:w-2/3">
            <h1 className="text-2xl font-bold mb-4">Education</h1>
            <h3 className="text-xl font-semibold">Portland State University</h3>
            <h4 className="text-lg">Bachelor's of Science</h4>
            <p className="text-sm text-text-secondary">Expected Graduation: June 2027 GPA: 3.98/4.00</p>
            <p className="text-gray-700 leading-7 dark:text-gray-400">
              Studying B.S in Computer Science from the Maseeh College of Engineering. Minoring in Mathematics.
            </p>
          </div>

          <div className="md:w-1/3">
            <h1 className="text-2xl font-bold mb-4">Documents</h1>
            <p className="leading-7">
              <a href="/assets/Resume.pdf" target="_blank" rel="noopener noreferrer" className="text-blue-500 hover:underline">Resume</a>
              <span> | </span>
              <a href="/assets/Transcript.pdf" target="_blank" rel="noopener noreferrer" className="text-blue-500 hover:underline">Unofficial Transcript</a>
            </p>
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
