
            import React from 'react';
import ugImage from '../assets/ug.png'; // ✅ UG programs image
import pgImage from '../assets/pg.png'; // ✅ PG programs image

const Academics = () => {
  return (
    <div style={{ padding: '20px', textAlign: 'center' }}>
      <h2>Academics at SVIET</h2>

      {/* UG Programs Section */}
      <div style={{ marginTop: '30px' }}>
        <h3>Undergraduate Programs (UG)</h3>
        <img
          src={ugImage}
          alt="Undergraduate Programs"
          style={{
            width: '85%',
            maxWidth: '800px',
            borderRadius: '12px',
            boxShadow: '0 4px 12px rgba(0, 0, 0, 0.2)',
            margin: '20px 0'
          }}
        />
        <p style={{ maxWidth: '900px', margin: '0 auto', fontSize: '18px', lineHeight: '1.6' }}>
          SVIET offers a range of Undergraduate programs including B.Tech in Computer Science & Engineering (CSE),
          Electronics & Communication Engineering (ECE), CSM (Computer Science & Machine Learning), and other emerging fields.
          The UG programs focus on building strong technical foundations, hands-on lab sessions, mini-projects, internships, and
          industry-aligned training to prepare students for real-world challenges and competitive placements.
        </p>
      </div>

      {/* PG Programs Section */}
      <div style={{ marginTop: '50px' }}>
        <h3>Postgraduate Programs (PG)</h3>
        <img
          src={pgImage}
          alt="Postgraduate Programs"
          style={{
            width: '85%',
            maxWidth: '800px',
            borderRadius: '12px',
            boxShadow: '0 4px 12px rgba(0, 0, 0, 0.2)',
            margin: '20px 0'
          }}
        />
        <p style={{ maxWidth: '900px', margin: '0 auto', fontSize: '18px', lineHeight: '1.6' }}>
          The PG programs at SVIET, such as M.Tech in CSE and VLSI, are designed for students aiming to deepen their technical expertise.
          These programs emphasize advanced subjects, research work, thesis writing, and exposure to real-time projects.
          The curriculum is frequently updated to match industry advancements and encourages innovation through research centers
          and faculty mentorship.
        </p>
      </div>
    </div>
  );
};

export default Academics;
