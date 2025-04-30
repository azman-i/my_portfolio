import React from 'react';
import { Github, Linkedin, Mail, FileText, Award } from 'lucide-react';

function Header({ name, title, image, links }) {
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
  );
}

export default Header;