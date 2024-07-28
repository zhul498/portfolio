import React from 'react'
import '../../src/App.css'

const Header = () => {
    return (
        <div className="header-container centered-container">
            <div className="image-container">
                <img src="/assets/profile.png" alt ="Lian Zhu" />
            </div>
            <header className="header-content centered-content">
                <h1>Lian Zhu</h1>
                <h2>Computer Science Major at Portland State University</h2>
                <p>Portland, Oregon, United States</p>
                <div className="header-content centered-content links-container">
                    <a href="mailto:lianzhu@pdx.edu" target="_blank" rel="noopener noreferrer" className="link">Email</a>
                    <span> | </span>
                    <a href="https://www.linkedin.com/in/lianzhu-/" target="_blank" rel="noopener noreferrer" className="link">Linkedin</a>
                    <span> | </span>               
                    <a href="https://github.com/zhul498" target="_blank" rel="noopener noreferrer" className="link">Github</a>
                </div>
            </header>

        </div>
    );
};

export default Header;