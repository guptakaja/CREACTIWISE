import React, { useState } from 'react';
import '../navbar/navbar.css';
import logo from '../../assets/Logo.png';

export default function Navbar() {
  const [activeLink, setActiveLink] = useState('home');

  const handleSetActive = (section) => {
    setActiveLink(section);
  };

  return (
    <nav className="navbar">
      <img src={logo} alt="Logo" className="logo" />

      <ul className="nav-links">
        <li className={activeLink === 'home' ? 'active' : ''}>
          <a href="#home" onClick={() => handleSetActive('home')}>Home</a>
        </li>
        <li className={activeLink === 'about' ? 'active' : ''}>
          <a href="#about" onClick={() => handleSetActive('about')}>About</a>
        </li>
        <li className={activeLink === 'works' ? 'active' : ''}>
          <a href="#works" onClick={() => handleSetActive('works')}>Projects</a>
        </li>
        <li className={activeLink === 'contact' ? 'active' : ''}>
          <a href="#contact" onClick={() => handleSetActive('contact')}>Contact</a>
        </li>
      </ul>

      <button className="hire-button">HIRE ME</button>
    </nav>
  );
}
