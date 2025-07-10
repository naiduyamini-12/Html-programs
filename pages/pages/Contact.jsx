import React from 'react';
import './Contact.css'; // We'll create this CSS file next

const Contact = () => {
  return (
    <div>
      <header className="header">
        <h2>SVIET - Sri Vasavi Institute of Engineering & Technology</h2>
      </header>

      <div className="breadcrumb">
        Home | Contact
      </div>

      <div className="contact-header">
        <h1>Contact</h1>
      </div>

      <section className="make-appointment">
        <h2>Make Appointment</h2>
        <div className="info-boxes">
          <div className="box">
            <img src="https://img.icons8.com/ios-filled/50/000000/phone.png" width="40" alt="phone" />
            <h3>0866-2469230</h3>
            <p>Phone Support</p>
          </div>
          <div className="box">
            <img src="https://img.icons8.com/ios-filled/50/000000/email.png" width="40" alt="email" />
            <h3>info@sviet.edu.in</h3>
            <p>Email Address</p>
          </div>
          <div className="box">
            <img src="https://img.icons8.com/ios-filled/50/000000/marker.png" width="40" alt="marker" />
            <h3>Nandamuru, Pedana</h3>
            <p>College Address</p>
          </div>
        </div>

        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3804.120144924165!2d81.35005707415495!3d16.622702784217998!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a37c724eeeeeeee%3A0xabc3f7a1f4c2f0a!2sSri%20Vasavi%20Institute%20of%20Engineering%20and%20Technology!5e0!3m2!1sen!2sin!4v1718459700000!5m2!1sen!2sin"
          allowFullScreen=""
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
          title="SVIET Location"
        ></iframe>
      </section>
    </div>
  );
};

export default Contact;