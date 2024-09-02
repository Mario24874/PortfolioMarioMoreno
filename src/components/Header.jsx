import React, { useState, useEffect } from 'react';
import logo from '../images/Logo_Mario_Moreno-SF.png';
import sunnyIcon from '../images/sunny.svg';
import moonIcon from '../images/moon.svg';
import '../App.css';
import './Header.css';

function Header() {
  const [isDarkMode, setIsDarkMode] = useState(false);

  const toggleDarkMode = () => {
    setIsDarkMode(!isDarkMode);
  };

  useEffect(() => {
    const app = document.querySelector('.App');
    if (isDarkMode) {
      app.classList.add('dark-mode');
    } else {
      app.classList.remove('dark-mode');
    }
  }, [isDarkMode]);

  return (
    <header className={`App-header ${isDarkMode ? 'dark-mode' : ''}`}>
      <div className="logo-container">
        <img src={logo} className="App-logo" alt="logo" />
      </div>
      <div className="content-container">
        <div className="welcome-message">
          <h1 lang="en">Welcome to my portfolio!</h1>
        </div>
        <div className="dark-mode-toggle-container">
        <div className={`dark-mode-toggle ${isDarkMode ? 'dark-mode' : ''}`} onClick={toggleDarkMode}>
            <div className="switch">
              <img src={isDarkMode ? sunnyIcon : moonIcon} alt="mode-icon" />
            </div>
          </div>
          <div className="circle-text">
            <span lang="en">Full Stack Developer</span>
          </div>
          <div className="circle-text">
            <span lang="en">Web Development</span>
          </div>
          <div className="circle-text">
            <span lang="en">Mobile Applications</span>
          </div>
        </div>
      </div>
    </header>
  );
}

export default Header;