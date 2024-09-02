import React, { useState } from 'react';
import About from './About';
import Skills from './Skills';
import Technologies from './Technologies';
import Projects from './Projects';
import './Sections.css';
import '../App.css';

function Sections() {
  const [expandedContainer, setExpandedContainer] = useState(null);

  const toggleContainer = (containerName) => {
    setExpandedContainer(containerName === expandedContainer ? null : containerName);
  };

  return (
    <div className="container-section">
      <About expandedContainer={expandedContainer} toggleContainer={toggleContainer} />
      <Skills expandedContainer={expandedContainer} toggleContainer={toggleContainer} />
      <Technologies expandedContainer={expandedContainer} toggleContainer={toggleContainer} />
      <Projects expandedContainer={expandedContainer} toggleContainer={toggleContainer} />
    </div>
  );
}

export default Sections;