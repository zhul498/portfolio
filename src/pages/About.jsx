import React from 'react';
import Skills from '../components/Skills';

const About = () => {
    return (
        <div className="centered-container">
            <div className="centered-content main-container">
                <h1>About Me</h1>
                <p>I am a rising Sophomore at Portland State University. As a current student focused mainly on learning and applying my skills as soon as possible, I am excited to
                    use technology to create cool things. My projects gives me the ability to apply my knowledge. Outside of school, I enjoy exercising, playing video games, and 
                    trying out new foods.
                </p>
                
                <div className="sub-category">
                    
                    <h1>Documents</h1>
                    <p><a href="/assets/Resume.pdf" target="_blank" rel="noopener noreferrer" className="link">Resume</a>
                    <span> | </span>
                    <a href="" target="_blank" rel="noopener noreferrer" className="link">Unofficial Transcript</a></p>

                    <h1>Education</h1>
                    <h3>Portland State University</h3>
                    <h4>Bachelor's of Science</h4>
                    <h5>Expected Graduation: June 2027 GPA: 3.96/4.00</h5>
                    <p>Studying B.S in Computer Science from the Maseeh College of Engineering.</p>

                    <h1>Work Experience</h1>
                    <h3>City of Hillsboro</h3>
                    <h4>Front Desk Member</h4>
                    <h5>March 2023 - Present</h5>
                    <p>Customer service - P.O.S Machine - Membership management.</p>

                    <br></br>

                    <h3>McDonald's</h3>
                    <h4>Team Member</h4>
                    <h5>July 2022 - October 2022</h5>
                    <p>Fast-paced environment - Food handling - Customer service</p>

                    <h1>Skills</h1>
                    <Skills />
                </div>

            </div>
        </div>
    );
}

export default About