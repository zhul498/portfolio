import React from 'react'
import '../../src/App.css'

const Header = () => {
    return (
        <div className="header-container">
            <header className="header">
                <h1>Lian Zhu</h1>
                <h2>Computer Science Major at Portland State University</h2>
                <p>Portland, Oregon, United States</p>
            </header>
            <div className="header">
                <a href="mailto:lianzhu@pdx.edu" target="_blank" rel="noopener noreferrer">Email</a>
                <span className="bolder"> | </span>
                <a href="https://www.linkedin.com/in/lianzhu-/" target="_blank" rel="noopener noreferrer">Linkedin</a>
                <span className="bolder"> | </span>               
                <a href="https://github.com/zhul498" target="_blank" rel="noopener noreferrer">Github</a>
            </div>
        </div>
    );
};

export default Header;