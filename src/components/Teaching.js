// components/Teaching.js
import React from 'react';

function Teaching({ teachings }) {
  return (
    <section id="teaching">
      <h2 className="section-title">Teaching Experience</h2>
      
      {teachings.map((item, index) => (
        <div className="teaching-item" key={index}>
          <div className="teaching-title">{item.title}</div>
          <div className="teaching-institution">{item.institution}</div>
          <p>{item.description}</p>
        </div>
      ))}
    </section>
  );
}

export default Teaching;
