import React from 'react';
import './AccreditationCard.css';

const AccreditationCard = ({ title, desc, bgColor }) => {
  return (
    <div className="card" style={{ backgroundColor: bgColor }}>
      <h3>{title}</h3>
      <p>{desc}</p>
      <a href="#">Read More →</a>
    </div>
  );
};

export default AccreditationCard;
