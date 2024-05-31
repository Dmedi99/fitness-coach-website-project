import React from "react";
import ServiceCard from "../components/ServiceCard";
import './Services.css'; // Make sure to import the CSS file for styling

function Services() {
  const services = [
    { name: 'Service 1', description: 'Description for Service 1' },
    { name: 'Service 2', description: 'Description for Service 2' },
    { name: 'Service 3', description: 'Description for Service 3' },
  ];

  return (
    <div className="services-container">
      {services.map((service, index) => (
        <ServiceCard key={index} name={service.name} description={service.description} />
      ))}
    </div>
  );
}

export default Services;
