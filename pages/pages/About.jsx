import React from 'react';
import aboutImage from '../assets/about.jpeg'; // ✅ Make sure image exists in the assets folder

const About = () => {
  return (
    <div style={{ padding: '20px', textAlign: 'center' }}>
      <h2>About SVIET</h2>
      <img
        src={aboutImage}
        alt="About SVIET"
        style={{
          width: '85%',
          maxWidth: '800px',
          borderRadius: '12px',
          boxShadow: '0 4px 12px rgba(0, 0, 0, 0.2)',
          margin: '20px 0'
        }}
      />
      <p style={{ maxWidth: '900px', margin: '0 auto', fontSize: '18px', lineHeight: '1.6' }}>
        Sri Vasavi Institute of Engineering and Technology (SVIET) is committed to academic excellence and innovation.
        Located in a serene environment, SVIET provides quality technical education with state-of-the-art infrastructure and modern laboratories.
        Our faculty members are highly qualified and dedicated to student success. We focus on holistic development through technical education,
        soft skills training, research encouragement, and co-curricular activities. At SVIET, we aim to shape future-ready professionals
        with strong ethical values and leadership qualities.
      </p>
    </div>
  );
};

export default About;
