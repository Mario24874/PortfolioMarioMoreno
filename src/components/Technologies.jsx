import React from 'react';
import technologiesIcon from '../images/technologies-icon.svg';
import programmingIcon from '../images/programming-icon.png';
import apiIcon from '../images/api-icon.png';
import versionControlIcon from '../images/version-control-icon.png';
import databaseIcon from '../images/database-icon.png';
import cloudIcon from '../images/cloud-icon.png';
import devToolsIcon from '../images/dev-tools-icon.png';
import './Sections.css';


function Technologies({ expandedContainer, toggleContainer }) {
  return (
    <div className={`container ${expandedContainer === 'technologies' ? 'expanded' : ''}`} onClick={() => toggleContainer('technologies')}>
      <div className="container-header">
        <img src={technologiesIcon} alt="Technologies" width="100" height="100" />
        <h2>Technologies</h2>
      </div>
      <div className="container-content">
        <div className="skill">
          <img src={programmingIcon} alt="Programming Languages" width="100" height="100" />
          <div>
            <h3>Programming Languages</h3>
            <p>Proficiency in a wide range of programming languages such as HTML, CSS, JavaScript, TypeScript, Java, Python, C, C++, C#, PHP, SQL, and more.</p>
          </div>
        </div>
        <div className="skill">
          <img src={apiIcon} alt="API and Frameworks" width="100" height="100" />
          <div>
            <h3>API and Frameworks</h3>
            <p>Experience in using APIs and Frameworks such as React.JS, Angular.JS, Vue.JS, Symfony for PHP, Django REST, Flask (Python), Sinatra or Rails (Ruby), Express.JS (NodeJS), Slim, Laravel (PHP), Nancy, Core (.NET), Play or Spring Boot (Java), ASP.NET and ADO.NET.</p>
          </div>
        </div>
        <div className="skill">
          <img src={versionControlIcon} alt="Version Control" width="100" height="100" />
          <div>
            <h3>Version Control</h3>
            <p>Expertise in using version control systems like Git, GitHub, Docker, Kubernetes and other related tools.</p>
          </div>
        </div>
        <div className="skill">
          <img src={databaseIcon} alt="Databases" width="100" height="100" />
          <div>
            <h3>Databases</h3>
            <p>Knowledge and experience in working with various SQL database technologies such as MySQL, MariaDB, SQLServer and PostgreSQL, also NoSQL such as MongoDB, Redis and Cassandra, as well as cloud-based database solutions.</p>
          </div>
        </div>
        <div className="skill">
          <img src={cloudIcon} alt="Cloud Technologies" width="100" height="100" />
          <div>
            <h3>Cloud Technologies</h3>
            <p>Familiarity with cloud computing platforms and services, including AWS, Azure, and Google Cloud.</p>
          </div>
        </div>
        <div className="skill">
          <img src={devToolsIcon} alt="Development Tools" width="100" height="100" />
          <div>
            <h3>Development Tools</h3>
            <p>Proficiency in the use of various development tools in IDEs such as Visual Studio, IntelliJ IDEA and Android Studio, as well as code editors such as Visual Studio Code, Sublime Text and Vim, among other project management software.</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Technologies;
