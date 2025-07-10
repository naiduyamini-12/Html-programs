import React from 'react';
import './HeroSection.css';

const HeroSection = () => {
  return (
    <div className="hero">
      <div className="hero-content">
        <h4>We are now Autonomous</h4>
        <h1>Proud Moment: SVIET Attains Autonomy Status</h1>
        <p>
          A proud moment for SVIET as we attain autonomy status. This milestone signifies our commitment to quality education, student empowerment, and transformative learning experiences.
        </p>
        <div className="buttons">
          <button className="btn">Discover More</button>
          <button className="btn-outline">Contact Us</button>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
