// src/App.jsx
import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Header from './components/Header';
import Sections from './components/Sections';
import Slider from './components/Slider';
import Sample from './components/Sample';
import ImageComponent from './components/ImageComponent';
import VideoPro from './components/VideoPro';
import Form from './components/Form';
import Footer from './components/Footer';
import MyChatbot from './Chatbot';
import Navbar from './components/Navbar';
import Blog from './components/Blog'; 
import './App.css';
import chatbotIcon from './images/custom-icon.png';

function App() {
  const [showChatbot, setShowChatbot] = useState(false);

  const toggleChatbot = () => {
    setShowChatbot(!showChatbot);
  };

  return (
    <Router>
      <div className="App">
        <Navbar />
        <Routes>
          <Route path="/" element={
            <>
              <Header />
              <Sections />
              <Slider />
              <Sample />
              <ImageComponent />
              <VideoPro />
              <Blog />
              <Form />
              <Footer />
              <MyChatbot isOpen={showChatbot} onToggle={toggleChatbot} />
              <div className="chatbot-button" onClick={toggleChatbot}>
                <img src={chatbotIcon} alt="Chatbot Icon" className="chatbot-icon" />
              </div>
            </>
          } />
        </Routes>
      </div>
    </Router>
  );
}

export default App;