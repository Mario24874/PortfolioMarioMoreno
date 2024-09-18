// src/App.jsx
import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Header from './components/Header';
import Sections from './components/Sections';
import ImageComponent from './components/ImageComponent';
import VideoPro from './components/VideoPro';
import Form from './components/Form';
import Footer from './components/Footer';
import MyChatbot from './Chatbot'; // Importa el componente del chatbot
import Blog from './components/Blog'; // Importa el componente del blog
import BlogPostDetail from './components/BlogPostDetail'; // Importa el componente de detalle del blog
import './App.css';
import chatbotIcon from './images/custom-icon.png'; // Importa tu icono

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
          <Route path="/blog" element={<Blog />} />
          <Route path="/blog/:id" element={<BlogPostDetail />} />
        </Routes>
        <ImageComponent />
        <VideoPro />
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