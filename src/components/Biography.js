import React from 'react';

function Biography({ paragraphs }) {
  return (
    <section id="biography">
      <h2 className="section-title">Biography</h2>
      {paragraphs.map((paragraph, index) => (
        <p key={index}>{paragraph}</p>
      ))}
    </section>
  );
}

export default Biography;