import React from 'react';
import './ServiceCard.css'; // Make sure to import the CSS file for styling

function ServiceCard({ name, description }) {
  return (
    <div className="service-card">
      <h3>{name}</h3>
      <p>{description}</p>
    </div>
  );
}

export default ServiceCard;
