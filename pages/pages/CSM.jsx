import React from 'react';
import csmImage from '../assets/csm.png'; // ✅ Adjust if your path/image name is different

const CSM = () => {
  return (
    <div style={{ padding: '20px', textAlign: 'center' }}>
      <h2>Computer Science & Machine Learning (CSM)</h2>
      <img
        src={csmImage}
        alt="CSM Department"
        style={{ width: '80%', maxWidth: '700px', borderRadius: '10px', margin: '20px 0' }}
      />
      <p style={{ maxWidth: '800px', margin: '0 auto', fontSize: '18px', lineHeight: '1.6' }}>
        The CSM department is designed to equip students with strong foundations in both computer science
        and modern machine learning technologies. Our curriculum emphasizes core programming, data structures,
        algorithms, along with specialized topics like neural networks, deep learning, data analytics, and AI-driven systems.
        Students graduate with the skills necessary to build intelligent, scalable software solutions and pursue careers in
        artificial intelligence, data science, and emerging tech industries.
      </p>
    </div>
  );
};

export default CSM;
