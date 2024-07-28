import React from 'react';

const About = () => {
    return (
        <div className="centered-container">
            <div className="centered-content">
                <h2 className="bolder">About Me</h2>
                <p>I am a rising Sophomore at Portland State University. I enjoy this and that! I enjoy this and that!I enjoy this and that!I enjoy this and that!</p>

                <h2 className="bolder">Documents</h2>
                <a href="/assets/Resume.pdf" target="_blank" rel="noopener noreferrer" className="link">Resume</a>
                <span> | </span>
                <a href="" target="_blank" rel="noopener noreferrer" className="link">Unofficial Transcript</a>

                <h2 className="bolder">Work Experience</h2>
                <div className="work-experience">
                    <h3>City of Hillsboro</h3>
                    <h4>Front Desk Member</h4>
                    <p>March 2023 - Present</p>
                    <p>Customer service, P.O.S Machine, Membership management</p>
                </div>
            </div>
        </div>
    );
}

export default About