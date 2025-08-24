import React, { useState } from 'react';
import { Home,Github, Linkedin, Mail, Menu, X, GraduationCap } from 'lucide-react';
import './Header.css';

function Header({ name, title, image, links }) {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  console.log(image);
  // Function to toggle mobile menu
  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
    if (!isMenuOpen) {
      document.body.classList.add('menu-is-active');
    } else {
      document.body.classList.remove('menu-is-active');
    }
  };
  const closeMenu = () => {
    setIsMenuOpen(false);
    document.body.classList.remove('menu-is-active');
  };

  // Function to render the appropriate icon with enhanced styling
  const renderIcon = (linkName) => {
    const iconStyle = {
      size: 20,
      strokeWidth: 2,
      className: 'social-icon'
    };

    switch(linkName.toLowerCase()) {
      case 'github':
        return <Github {...iconStyle} />;
      case 'linkedin':
        return <Linkedin {...iconStyle} />;
      case 'email':
        return <Mail {...iconStyle} />;
        case 'home':
          return <Home {...iconStyle} />;
      case 'google scholar':
        return (
          <svg 
            className="google-scholar-icon-svg" 
            viewBox="0 0 24 24" 
            width="20" 
            height="20"
            fill="currentColor"
          >
            <path d="M5.242 13.769L0 9.5 12 0l12 9.5-5.242 4.269C17.548 11.249 14.978 9.5 12 9.5c-2.977 0-5.548 1.748-6.758 4.269zM12 10a7 7 0 1 0 0 14 7 7 0 0 0 0-14z"/>
          </svg>
        );
      case 'phd':
        return <GraduationCap {...iconStyle} />;
      default:
        return null;
    }
  };

  // Find CV link from the links array
  const cvLink = links.find(link => link.name.toLowerCase() === 'cv');

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
          <a href="#research" className="navbar-item" onClick={() => closeMenu()}>Research</a>
          <a href="#publications" className="navbar-item" onClick={() => closeMenu(false)}>Publications</a>
          <a href="#services" className="navbar-item" onClick={() => closeMenu(false)}>Services</a>
        </div>
      </nav>
    <header id="header">
      <div className="profile-image-container">
        <img src={image} alt="Profile Picture" className="profile-image" />
      </div>
      <div className="profile-info">
        <h1 className="profile-name">{name}</h1>
       
        <div className="profile-position">
        
          <p className="position-line">Doctoral Instructional Assistant</p>
          <p className="position-department">Department of Computer Science</p>
          <p className="institution-line">Texas State University</p>
        </div>
        
        <div className="social-links">
        {links.filter(link => link.name.toLowerCase() !== 'cv').map((link, index) => (
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
        {cvLink && (
          <a 
            href={cvLink.url}
            target="_blank" 
            rel="noopener noreferrer"
            className="resume-link"
          >
            View Resume
          </a>
        )}
      </div>
    </header>
    </>
  );
}

export default Header;