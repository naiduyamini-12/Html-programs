import React from 'react';
import campusImage from '../assets/campus.jpeg'; // ✅ Adjust the path/filename if needed

const Campus = () => {
  return (
    <div style={{ padding: '20px', textAlign: 'center' }}>
      <h2>Our Campus</h2>
      <img
        src={campusImage}
        alt="Campus"
        style={{
          width: '85%',
          maxWidth: '800px',
          borderRadius: '12px',
          boxShadow: '0 4px 12px rgba(0, 0, 0, 0.2)',
          margin: '20px 0'
        }}
      />
      <p style={{ maxWidth: '900px', margin: '0 auto', fontSize: '18px', lineHeight: '1.6' }}>
        Our college campus offers a serene and inspiring environment ideal for academic excellence and personal growth.
        Spread over a vast green landscape, the campus features state-of-the-art classrooms, modern laboratories,
        a digital library, sports facilities, and comfortable hostels. The infrastructure is designed to promote collaboration,
        innovation, and a vibrant student life, making it a true center of learning and development.
      </p>
    </div>
  );
};

export default Campus;
