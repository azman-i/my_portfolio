// components/Publications.js
import React from 'react';

function Publications({ publications }) {
  return (
    <section id="publications">
      <h2 className="section-title">Publications</h2>
      
      {publications.map((pub, index) => (
        <div className="publication" key={index}>
          <div className="publication-title">{pub.title}</div>
          <div className="publication-authors">{pub.authors}</div>
          <div className="publication-venue">{pub.venue}</div>
          <p>{pub.description}</p>
          {pub.links.map((link, linkIndex) => (
            <a 
              key={linkIndex} 
              href={link.url} 
              target="_blank" 
              rel="noopener noreferrer"
            >
              [{link.name}]
            </a>
          ))}
        </div>
      ))}
    </section>
  );
}

export default Publications;