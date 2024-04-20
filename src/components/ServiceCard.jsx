import React from "react";
import { useState } from "react";


function ServiceCard({ name, description }) {
  const [isFlipped, setIsFlipped] = useState(false);

  const handleClick = () => {
    setIsFlipped(!isFlipped);
  };

  return (
    <div className={`service-card ${isFlipped ? 'flipped' : ''}`} onClick={handleClick}>
      <div className='front'>
        <h3>{name}</h3>
      </div>
      <div className='back'>
        <p>{description}</p>
      </div>
    </div>
  );
}


  export default ServiceCard;