import React from 'react';
import Navbar from '../components/Navbar';
import HeroSection from '../components/HeroSection';
import AccreditationCard from '../components/AccreditationCard';

const Home = () => {
  return (
    <>
      <Navbar />
      <HeroSection />
      <div style={{ display: "flex", justifyContent: "space-around", flexWrap: "wrap", padding: "30px" }}>
        <AccreditationCard
          title="Approved by AICTE, New Delhi"
          desc="Empowering minds with AICTE accreditation and JNTUK affiliation."
          bgColor="#e0f7fa"
        />
        <AccreditationCard
          title="Accredited by NAAC & NBA"
          desc="SVIET stands as a leading authority in shaping engineering excellence."
          bgColor="#ffe0b2"
        />
        <AccreditationCard
          title="ISO 9001:2015 Certified Institute"
          desc="Our SVIET holds prestigious ISO certification."
          bgColor="#dcedc8"
        />
      </div>
    </>
  );
};

export default Home;
