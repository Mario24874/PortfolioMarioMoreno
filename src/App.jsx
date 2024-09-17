// src/App.jsx
import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Header from './components/Header';
import Sections from './components/Sections';
import ImageComponent from './components/ImageComponent';
import VideoPro from './components/VideoPro';
import Form from './components/Form';
import Footer from './components/Footer';
import MyChatbot from './Chatbot'; 
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
        <Header />
        <Routes>
          <Route path="/" element={<Sections />} />
        </Routes>
        <ImageComponent />
        <VideoPro />
        <Blog /> 
        <Form />
        <Footer />
        <MyChatbot isOpen={showChatbot} onToggle={toggleChatbot} />
        <div className="chatbot-button" onClick={toggleChatbot}>
          <img src={chatbotIcon} alt="Chatbot Icon" className="chatbot-icon" />
        </div>
      </div>
    </Router>
  );
}

export default App;