import React from 'react';
import placementsImage from '../assets/placements.png'; // ✅ Adjust the path/image name if needed

const Placements = () => {
  return (
    <div style={{ padding: '20px', textAlign: 'center' }}>
      <h2>Placements at SVIET</h2>
      <img
        src={placementsImage}
        alt="Placements"
        style={{
          width: '85%',
          maxWidth: '800px',
          borderRadius: '12px',
          boxShadow: '0 4px 12px rgba(0, 0, 0, 0.2)',
          margin: '20px 0'
        }}
      />
      <p style={{ maxWidth: '900px', margin: '0 auto', fontSize: '18px', lineHeight: '1.6' }}>
        The Placement Cell at SVIET is committed to guiding students toward excellent career opportunities.
        With strong industry connections and dedicated training programs, the institute ensures students are prepared for top MNCs,
        startups, and core companies. Our students have been successfully placed in companies like Infosys, TCS, Wipro, Cognizant,
        and many more. Regular training on communication skills, aptitude, coding, and mock interviews is provided to build confidence
        and industry readiness. SVIET boasts a high placement percentage every year with competitive salary packages.
      </p>
    </div>
  );
};

export default Placements;
