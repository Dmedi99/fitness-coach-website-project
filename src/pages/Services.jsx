import React from "react";
import ServiceCard from "../components/ServiceCard";
import './Services.css'; // Make sure to import the CSS file for styling

function Services() {
  const services = [
    { name: 'In-Person Training', price: '$85/session with bulk purchase perks', description: 'Enjoy a semi-private training experience with a Certified Personal Trainer at our fitness studio in Torrance, CA. We will guide you through each exercise, and make sure you are using proper form so that your body is getting the most out of each workout. In-home training available upon request.' },
    { name: 'Online Coaching', price: 'Starting at $200/month', description: 'We use TrueCoach to deliver workouts and communicate with our clients. The app is trusted by over 15,000+ personal trainers, coaches, and gym owners worldwide! Quickly log your workouts, view demonstration, videos, upload video results, post comments, and direct message us right from TrueCoach. All of the infomation you need about your training plan is in the app so we can focus on crushing your goals.' },
    { name: 'Hybrid Coaching', price: '$400/month', description: 'A flexible option that includes in-person and online training.' }, 
  ];

  return (
    <>
      <div className="services-container">
        {services.map((service, index) => (
          <ServiceCard key={index} name={service.name} price={service.price} description={service.description} />
        ))}
      </div>
    </>
  );
}

export default Services;
