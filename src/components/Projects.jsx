import React from 'react';
import projectsIcon from '../images/projects-icon.svg';
import italiantonlineThumbnail from '../images/italiantonline-thumbnail.png';
import maleteroThumbnail from '../images/maletero-thumbnail.png';
import eduManagerThumbnail from '../images/edumanager-thumbnail.png';
import urbanDriveThumbnail from '../images/urbandrive-thumbnail.png';
import reactIcon from '../images/react-icon.png';
import angularIcon from '../images/angular-icon.png';
import web2pyIcon from '../images/web2py-icon.png';
import flutterIcon from '../images/flutter-icon.png';
import './Sections.css';


function Projects({ expandedContainer, toggleContainer }) {
  return (
    <div className={`container ${expandedContainer === 'projects' ? 'expanded' : ''}`} onClick={() => toggleContainer('projects')}>
      <div className="container-header">
        <img src={projectsIcon} alt="Projects" width="100" height="100" />
        <h2>My Projects</h2>
      </div>
      <div className="container-content">
        <div className="project">
          <img src={italiantonlineThumbnail} alt="Italiantonline" width="100" height="100" />
          <div>
            <h3>Italiantonline</h3>
            <div className="technology">
              <img src={reactIcon} alt="React" width="50" height="50" />
              <div className="technology-info">
                <span>React</span>
              </div>
            </div>
            <p>Website dedicated to the teaching of the Italian language. It has many learning resources such as audios, videos, images, dictionary and translator that accompany the lessons of each course.</p>
          </div>
        </div>
        <div className="project">
          <img src={maleteroThumbnail} alt="Maletero" width="100" height="100" />
          <div>
            <h3>Maletero</h3>
            <div className="technology">
              <img src={angularIcon} alt="Angular" width="50" height="50" />
              <div className="technology-info">
                <span>Angular</span>
              </div>
            </div>
            <p>Website for buying and selling of new and used items, e-commerce and donations of all types of items between individuals. No paid applications included.</p>
          </div>
        </div>
        <div className="project">
          <img src={eduManagerThumbnail} alt="EduManager" width="100" height="100" />
          <div>
            <h3>EduManager</h3>
            <div className="technology">
              <img src={web2pyIcon} alt="Web2py" width="50" height="50" />
              <div className="technology-info">
                <span>Web2py</span>
              </div>
            </div>
            <p>Desktop application for the administrative management of educational centres and institutions which performs the registration of students, scheduling of classes and classrooms as well as other events; it also stores the database and performs the issuance of reports, grades and grades of students.</p>
          </div>
        </div>
        <div className="project">
          <img src={urbanDriveThumbnail} alt="Urban Drive" width="100" height="100" />
          <div>
            <h3>Urban Drive</h3>
            <div className="technology">
              <img src={flutterIcon} alt="Flutter" width="50" height="50" />
              <div className="technology-info">
                <span>Flutter</span>
              </div>
            </div>
            <p>This application is to geographically locate the driver of your transport or delivery service in real time. It also schedules transport routes and land trips, offers weather forecasts, as well as arrival times according to destination and forecasts; it also offers messaging and notifications of incidents and delays.</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Projects;
