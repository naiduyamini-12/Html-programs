import React from 'react';
import './CSE.css'; // optional CSS file for styling
import cseImage from '../assets/cse.png'; // ✅ adjust path to your image

function CSE() {
  return (
    <div className="cse-container">
      <h2 className="cse-title">Computer Science & Engineering Department</h2>

      <img src={cseImage} alt="CSE Department" className="cse-image" />

      <p className="cse-description">
        The Department of Computer Science and Engineering (CSE) aims to provide students with a strong foundation in computer science
        fundamentals, programming, data structures, algorithms, artificial intelligence, machine learning, and more. 
        Our department encourages innovation, hands-on learning, research, and industry collaboration.
        Students are prepared for successful careers in software development, data science, cybersecurity, and beyond.
      </p>
    </div>
  );
}

export default CSE;
