import React from 'react';

const About = () => {
    return (
        <div className="centered-container">
            <div className="centered-content">
                <h2>About Me</h2>
                <p>I am a rising Sophomore at Portland State University. As a current student focused mainly on learning and applying my skills as soon as possible, I am excited to
                    use technology to create cool things. My projects are where I try to apply my knowledge. Outside of school, I enjoy exercising, playing video games, and trying 
                    out new foods.
                </p>

                <h2>Documents</h2>
                <a href="/assets/Resume.pdf" target="_blank" rel="noopener noreferrer" className="link">Resume</a>
                <span> | </span>
                <a href="" target="_blank" rel="noopener noreferrer" className="link">Unofficial Transcript</a>

                
                <div className="sub-category">
                    <h2>Education</h2>
                    <h3>Portland State University</h3>
                    <h4>Bachelor's of Science</h4>
                    <h5>Expected Graduation: June 2027</h5>
                    <p>Studying B.S in Computer Science from the Maseeh College of Engineering.</p>

                    <h2>Work Experience</h2>
                    <h3>City of Hillsboro</h3>
                    <h4>Front Desk Member</h4>
                    <h5>March 2023 - Present</h5>
                    <p>Customer service, P.O.S Machine, Membership management.</p>
                </div>

            </div>
        </div>
    );
}

export default About