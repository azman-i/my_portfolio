import React, { useState } from 'react';

import { Github, Linkedin, Mail, FileText, Award ,Menu, X } from 'lucide-react';

function Header({ name, title, image, links }) {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  // Function to toggle mobile menu
  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
    if (!isMenuOpen) {
      document.body.classList.add('menu-is-active');
    } else {
      document.body.classList.remove('menu-is-active');
    }
  };
  // Function to render the appropriate icon based on link name
  const renderIcon = (linkName) => {
    switch(linkName.toLowerCase()) {
      case 'github':
        return <Github size={20} />;
      case 'linkedin':
        return <Linkedin size={20} />;
      case 'email':
        return <Mail size={20} />;
      case 'cv':
        return <FileText size={20} />;
      case 'google scholar':
        return <Award size={20} />;
      default:
        return null;
    }
  };

  return (
    <>
    <nav className="navbar">
        <div className="navbar-brand">
          <span className="navbar-name">{name}</span>
        </div>
        
        {/* Mobile menu button */}
        <button className="mobile-menu-button" onClick={toggleMenu} aria-label="Toggle menu">
          {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
        
        {/* Desktop and Mobile menu */}
        <div className={`navbar-menu ${isMenuOpen ? 'is-active' : ''}`}>
          <a href="#research" className="navbar-item" onClick={() => setIsMenuOpen(false)}>Research</a>
          <a href="#publications" className="navbar-item" onClick={() => setIsMenuOpen(false)}>Publications</a>
          <a href="#services" className="navbar-item" onClick={() => setIsMenuOpen(false)}>Services</a>
        </div>
      </nav>
    <header id="header">
      <div className="profile-image-container">
        <img src={image} alt="Profile Picture" className="profile-image" />
      </div>
      <div className="profile-info">
        <h1 className="profile-name">{name}</h1>
        <p className="profile-title">{title}</p>
        <div className="social-links">
          {links.map((link, index) => (
            <a 
              key={index} 
              href={link.url} 
              target="_blank" 
              rel="noopener noreferrer"
              className={`icon-link ${link.name.toLowerCase().replace(' ', '-')}-icon`}
              aria-label={link.name}
              title={link.name}
            >
              {renderIcon(link.name)}
            </a>
          ))}
        </div>
      </div>
    </header>
    </>
  );
}

export default Header;