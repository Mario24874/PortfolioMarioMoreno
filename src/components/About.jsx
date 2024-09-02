import React from 'react';
import aboutMePhoto from '../images/aboutMePhoto.png';
import aboutIcon from '../images/about-icon.svg';
import './Sections.css';


function About({ expandedContainer, toggleContainer }) {
  return (
    <div
      className={`container ${expandedContainer === 'about' ? 'expanded' : ''}`}
      onClick={() => toggleContainer('about')} >
      <div className="container-header">
        <img src={aboutIcon} alt="About" />
        <h2>About Me</h2>
      </div>
      <div className="container-content">
        <img src={aboutMePhoto} alt="About Me Photo" className="rounded-image" />
        <p>With a solid track record of over 20 years in various companies, I stand out as a resolute, proactive, organized, and responsible person. My ability to work in a team has been a fundamental pillar in my career.</p>
        <p>I have extensive experience in project and human resources management, business and industrial consulting, budget preparation, cost structuring, and the handling of technology and information systems. I am seeking a challenging and dynamic position where I can apply and share my vast experience while acquiring and contributing new knowledge.</p>
      </div>
    </div>
  );
}

export default About;
