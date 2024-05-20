import React from "react";
import ServiceCard from "../components/ServiceCard";


function Services(){
  const services = [
    { name: 'Service 1', description: 'Description for Service 1' },
    { name: 'Service 2', description: 'Description for Service 2' },
    { name: 'Service 3', description: 'Description for Service 3' },
  ];

  return (
    <div className='page'>
      <div className='sub-header'>
        <h2 className='title'>Choose the right plan for YOU</h2>
        <p className='paragraph'>These are the services we provide at Steady State Fitness</p>
      </div>
        <div className='services-list'>
          {services.map(service => (
            <ServiceCard key={service.name} name={service.name} description={service.description} />
          ))}
        </div>
    </div>
  );
}

export default Services;