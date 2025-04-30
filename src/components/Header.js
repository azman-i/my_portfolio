import React from 'react';

function Header({ name, title, image, links }) {
    return (
      <header id="header">
        <img src={image} alt="Profile Picture" className="profile-image" />
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
                className={link.name === "CV" ? "cv-link" : ""}
              >
                {link.name}
              </a>
            ))}
          </div>
        </div>
      </header>
    );
  }
export default Header;