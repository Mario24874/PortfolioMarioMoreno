import React from 'react';
import skillsIcon from '../images/skills-icon.svg';
import ideIconPng from '../images/ide-icon.png';
import webDevIcon from '../images/web-dev-icon.png';
import seoErpIcon from '../images/seo-erp-icon.png';
import versionControlIcon from '../images/version-control-icon.png';
import socialMediaIcon from '../images/social-media-icon.png';
import problemSolvingIcon from '../images/problem-solving-icon.png';
import teamworkIcon from '../images/teamwork-icon.png';
import hrManagementIcon from '../images/hr-management-icon.png';
import riskPreventionIcon from '../images/risk-prevention-icon.png';
import agileMethodsIcon from '../images/agile-methods-icon.png';
import englishIcon from '../images/english-icon.png';
import italianIcon from '../images/italian-icon.png';
import './Sections.css';

function Skills({ expandedContainer, toggleContainer }) {
  return (
    <div className={`container ${expandedContainer === 'skills' ? 'expanded' : ''}`} onClick={() => toggleContainer('skills')}>
      <div className="container-header">
        <img src={skillsIcon} alt="Skills" />
        <h2>My Skills</h2>
      </div>
      <div className="container-content">
        <div className="skill-section">
          <h3>Technical Skills</h3>
          <div className="skill">
            <img src={ideIconPng} alt="IDE" width="100" height="100" />
            <div>
              <h4>Software Management and Development Environments (IDE)</h4>
              <p>Ability to manage and optimize software and integrated development environments.</p>
            </div>
          </div>
          <div className="skill">
                  <img src={webDevIcon} alt="Web and Mobile Development" width="100" height="100" />
                  <div>
                    <h4>Web and Multiplatform Mobile Applications Development</h4>
                    <p>Competence in developing web solutions and mobile applications for various platforms.</p>
                  </div>
                </div>
                <div className="skill">
                  <img src={seoErpIcon} alt="SEO and ERP" width="100" height="100" />
                  <div>
                    <h4>SEO and ERP</h4>
                    <p>Knowledge in search engine optimization and enterprise resource planning.</p>
                  </div>
                </div>
                <div className="skill">
                  <img src={versionControlIcon} alt="Version Control and Orchestration" width="100" height="100" />
                  <div>
                    <h4>Version Control, Container Orchestration, Servers, Databases, Cloud Services</h4>
                    <p>Ability to manage and orchestrate a variety of technologies including version control, containers, servers, databases, and cloud services.</p>
                  </div>
                </div>
                <div className="skill">
                  <img src={socialMediaIcon} alt="Social Media Management" width="100" height="100" />
                  <div>
                    <h4>Social Media Management</h4>
                    <p>Ability to manage and optimize social media presence.</p>
                  </div>
                </div>
                <div className="skill">
                  <img src={problemSolvingIcon} alt="Problem Solving" width="100" height="100" />
                  <div>
                    <h4>Problem Solving</h4>
                    <p>Demonstrated ability to identify and efficiently solve problems.</p>
                  </div>
                </div>
                <div className="skill">
                  <img src={hrManagementIcon} alt="HR Management" width="100" height="100" />
                  <div>
                    <h4>Human Resources Management</h4>
                    <p>Experience in team management and development.</p>
                  </div>
                </div>
                <div className="skill">
                  <img src={riskPreventionIcon} alt="Risk Prevention" width="100" height="100" />
                  <div>
                    <h4>Risk Prevention and Safety Measures</h4>
                    <p>Knowledge in implementing safety measures and risk prevention.</p>
                  </div>
                </div>
                <div className="skill">
                  <img src={agileMethodsIcon} alt="Agile Methodologies" width="100" height="100" />
                  <div>
                    <h4>Agile Methodologies</h4>
                    <p>Familiarity with agile methodologies for project management.</p>
                  </div>
        </div>
        <div className="skill-section">
          <h3>Management and Organization Skills</h3>
          <div className="skill">
            <img src={teamworkIcon} alt="Teamwork" width="100" height="100" />
            <div>
              <h4>Teamwork</h4>
              <p>Strong teamwork skills and ability to lead groups and collaborate with others.</p>
            </div>
          </div>
          </div>

          <div className="skill-section">
          <h3>Language Skills</h3>
          <div className="skill">
            <img src={englishIcon} alt="English" width="100" height="100" />
            <div>
              <h4>English</h4>
              <p>Intermediate level.</p>
            </div>
          </div>
          <div className="skill">
                  <img src={italianIcon} alt="Italian" width="100" height="100" />
                  <div>
                    <h4>Italian</h4>
                    <p>Intermediate level.</p>
                  </div>
                </div>              
        </div>
      </div>
    </div>
    </div>
  );
}

export default Skills;
