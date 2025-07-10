  import React from 'react';
import eceImage from '../assets/ece.png'; // ✅ Adjust the filename/path if needed

const ECE = () => {
  return (
    <div style={{ padding: '20px', textAlign: 'center' }}>
      <h2>Electronics and Communication Engineering (ECE)</h2>
      <img
        src={eceImage}
        alt="ECE Department"
        style={{ width: '80%', maxWidth: '700px', borderRadius: '10px', margin: '20px 0' }}
      />
      <p style={{ maxWidth: '800px', margin: '0 auto', fontSize: '18px', lineHeight: '1.6' }}>
        The ECE department focuses on the design, development, and application of electronics and communication technologies.
        It covers core subjects such as analog/digital circuits, microprocessors, embedded systems, signal processing,
        and wireless communication. Students are trained in both hardware and software aspects of modern communication systems,
        preparing them for careers in electronics design, IoT, robotics, and telecom industries.
      </p>
    </div>
  );
};

export default ECE;
