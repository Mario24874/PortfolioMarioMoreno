// src/components/Navbar.jsx
import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { FaHome, FaList, FaImage, FaVideo, FaBlog, FaEnvelope, FaRegAddressCard } from 'react-icons/fa';
import { changeTabActive } from '../redux/actions';
import './Navbar.css';

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();
  const dispatch = useDispatch();
  const activeTab = useSelector((state) => state.activeTab);

  const toggleNavbar = () => {
    setIsOpen(!isOpen);
  };

  const closeNavbar = () => {
    setIsOpen(false);
  };

  useEffect(() => {
    closeNavbar();
  }, [location]);

  const scrollToSection = (className) => {
    const element = document.querySelector(`.${className}`);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const changeTab = (tab) => {
    dispatch(changeTabActive(tab));
    closeNavbar();
    scrollToSection(tab); // Agregamos esta línea para scroll hacia la sección seleccionada
  };

  return (
    <>
      <div className="navbar-toggle" onClick={toggleNavbar}>
        <div className="bar"></div>
        <div className="bar"></div>
        <div className="bar"></div>
      </div>
      <nav className={`navbar ${isOpen ? 'open' : ''}`}>
        <ul className="navbar-menu">
          <li>
            <Link to="/" onClick={() => changeTab('home')} className={activeTab === 'home' ? 'active' : ''}>
              <FaHome /> <span>Home</span>
            </Link>
          </li>
          <li>
            <Link to="/" onClick={() => changeTab('sections')} className={activeTab === 'sections' ? 'active' : ''}>
              <FaList /> <span>Sections</span>
            </Link>
          </li>
          <li>
            <Link to="/" onClick={() => changeTab('slider')} className={activeTab === 'slider' ? 'active' : ''}>
              <FaImage /> <span>Slider</span>
            </Link>
          </li>
          <li>
            <Link to="/" onClick={() => changeTab('image')} className={activeTab === 'image' ? 'active' : ''}>
              <FaImage /> <span>Image</span>
            </Link>
          </li>
          <li>
            <Link to="/" onClick={() => changeTab('video')} className={activeTab === 'video' ? 'active' : ''}>
              <FaVideo /> <span>Video</span>
            </Link>
          </li>
          <li>
            <Link to="/" onClick={() => changeTab('blog')} className={activeTab === 'blog' ? 'active' : ''}>
              <FaBlog /> <span>Blog</span>
            </Link>
          </li>
          <li>
            <Link to="/" onClick={() => changeTab('form')} className={activeTab === 'form' ? 'active' : ''}>
              <FaEnvelope /> <span>Form</span>
            </Link>
          </li>
          <li>
            <Link to="/" onClick={() => changeTab('footer')} className={activeTab === 'footer' ? 'active' : ''}>
              <FaRegAddressCard /> <span>Footer</span>
            </Link>
          </li>
        </ul>
      </nav>
    </>
  );
}

export default Navbar;


