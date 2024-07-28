import React from 'react';

const About = () => {
    return (
        <div className="centered-container">
            <div className="centered-content">
                <h2 className="bolder">About Me</h2>
                <p>I am a rising Sophomore at Portland State University. As a current student focused mainly on learning and applying my skills as soon as possible, I am excited to
                    use technology to create cool things. My projects are where I try to apply my knowledge. Outside of school, I enjoy exercising, playing video games, and trying 
                    out new foods.
                </p>

                <h2 className="bolder">Documents</h2>
                <a href="/assets/Resume.pdf" target="_blank" rel="noopener noreferrer" className="link">Resume</a>
                <span> | </span>
                <a href="" target="_blank" rel="noopener noreferrer" className="link">Unofficial Transcript</a>

                <h2 className="bolder">Work Experience</h2>
                <div className="work-experience">
                    <h3>City of Hillsboro</h3>
                    <h4>Front Desk Member</h4>
                    <h5>March 2023 - Present</h5>
                    <p>Customer service, P.O.S Machine, Membership management</p>
                </div>
            </div>
        </div>
    );
}

export default About