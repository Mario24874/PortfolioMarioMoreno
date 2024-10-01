import React from 'react';
import projectsIcon from '../images/projects-icon.svg';
import logoItalianto from '../images/logo_Italianto.png';
import calculadoraBtu from '../images/CalculadoraBTU.png';
import eduManager from '../images/EduManager.png';
import urbanDrive from '../images/Urbandrive.png';
import './Sections.css';

function Projects({ expandedContainer, toggleContainer }) {
  return (
    <div className={`container ${expandedContainer === 'projects' ? 'expanded' : ''}`} onClick={() => toggleContainer('projects')}>
      <div className="container-header">
        <img src={projectsIcon} alt="Projects" width="100" height="100" style={{ borderRadius: '50%' }} />
        <h2>My Projects</h2>
      </div>
      <div className="container-content">
        {/* Proyecto: Italianto */}
        <div className="project">
          <a href="https://italianto.vercel.app" target="_blank" rel="noopener noreferrer">
            <img src={logoItalianto} alt="Italianto" width="100" height="100" style={{ borderRadius: '50%' }} />
            <div>
              <h3>Italiantonline</h3>            
              <p>Website dedicated to the teaching of the Italian language. It has many learning resources such as audios, videos, images, dictionary and translator that accompany the lessons of each course.</p>
            </div>
          </a> {/* Cierre de la etiqueta a */}
        </div>

        {/* Proyecto: Calculadora BTU */}
        <div className="project">
          <a href="https://calculadorabtu.netlify.app" target="_blank" rel="noopener noreferrer">
            <img src={calculadoraBtu} alt="CalculadoraBTU" width="100" height="100" style={{ borderRadius: '50%' }} />
            <div>
              <h3>Calculator BTU</h3>            
              <p>Application to efficiently calculate the BTU needed to air-condition a space.</p>
            </div>
          </a> {/* Cierre de la etiqueta a */}
        </div>

        {/* Proyecto: EduManager */}
        <div className="project">
          <a href="https://github.com/Mario24874/edumanager-web2py" target="_blank" rel="noopener noreferrer">
            <img src={eduManager} alt="EduManager" width="100" height="100" style={{ borderRadius: '50%' }} />
            <div>
              <h3>EduManager</h3>            
              <p>Desktop application for the administrative management of educational centres and institutions which performs the registration of students, scheduling of classes and classrooms as well as other events; it also stores the database and performs the issuance of reports, grades and grades of students.</p>
            </div>
          </a> {/* Cierre de la etiqueta a */}
        </div>

        {/* Proyecto: Urban Drive */}
        <div className="project">
          <a href="https://urban-drive.netlify.app" target="_blank" rel="noopener noreferrer">
            <img src={urbanDrive} alt="UrbanDrive" width="100" height="100" style={{ borderRadius: '50%' }} />
            <div>
              <h3>Urban Drive</h3>            
              <p>This application is to geographically locate the driver of your transport or delivery service in real time. It also schedules transport routes and land trips, offers weather forecasts, as well as arrival times according to destination and forecasts; it also offers messaging and notifications of incidents and delays.</p>
            </div>
          </a> {/* Cierre de la etiqueta a */}
        </div>
      </div>
    </div>
  );
}

export default Projects;
