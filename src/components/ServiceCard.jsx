import React from 'react';
import './ServiceCard.css'; // Make sure to import the CSS file for styling

function ServiceCard({ name, price, description }) {
  return (
    <div className="service-card">
      <h2>{name}</h2>
      <h3>{price}</h3>
      <p>{description}</p>
    </div>
  );
}

export default ServiceCard;
