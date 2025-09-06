import React from 'react';


function Services({ services }) {
  return (
    <section id="services">
      <h2 className="section-title">Services</h2>
      {services.map((activity, index) => (
        <div className="activity-item" key={index}>
          <h3 className="activity-section">{activity.section}</h3>
          <p className="activity-description">{activity.description}</p>
        </div>
      ))}
    </section>
  );
}

export default Services;
