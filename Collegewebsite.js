// src/CollegeWebsite.js
import React from "react";
import "./CollegeWebsite.css"; // Move CSS to a separate file

function CollegeWebsite() {
  return (
    <div>
      <header>
        <img
          src="https://www.sviet.edu.in/wp-content/uploads/2023/06/SVIET-LOGO-Edited-1.png"
          alt="SVIET Logo"
          width="10%"
        />
        <h1 style={{ color: "rgb(22, 41, 105)" }}>
          SRI VASAVI INSTITUTE OF ENGINEERING & TECHNOLOGY
        </h1>
        <nav>
          <ul>
            <li>
              <a href="home1.html">Home</a>
            </li>

            <div className="navbar">
              <div className="dropdown">
                <button className="dropbtn">About US</button>
                <div className="dropdown-content">
                  <a href="About sviet.html">About sviet</a>
                </div>
              </div>
            </div>

            <div className="navbar">
              <div className="dropdown">
                <button className="dropbtn">Departments</button>
                <div className="dropdown-content">
                  <a href="CSE.html">CSE</a>
                  <a href="ECE.html">ECE</a>
                  <a href="CSM.html">CSM</a>
                  <a href="Mechinical.html">Mechinical</a>
                </div>
              </div>
            </div>

            <div className="navbar">
              <div className="dropdown">
                <button className="dropbtn">Login</button>
                <div className="dropdown-content">
                  <a href="Login.html">Login</a>
                </div>
              </div>
            </div>

            <div className="navbar">
              <div className="dropdown">
                <button className="dropbtn">Academics</button>
                <div className="dropdown-content">
                  <a href="UG Programms.html">UG Programms</a>
                  <a href="Diploma.html">Diploma Programms</a>
                </div>
              </div>
            </div>

            <li>
              <a href="#">Admissions</a>
            </li>
            <li>
              <a href="images.html">Images</a>
            </li>
            <li>
              <a href="contact.html">Contact</a>
            </li>
          </ul>
        </nav>
      </header>

      <hr />

      <section className="hero">
        <h2>Welcome to Our College</h2>
        <p>Your future begins here.</p>
      </section>

      <section className="about">
        <h2>About Us</h2>
        <p>Our college is committed to academic excellence and student success.</p>
        <img src="college.jpeg" alt="College" width="50%" />
        <img src="college.jpeg" alt="College" width="49%" />
      </section>

      <footer>
        <p>&copy; 2025 My College. All rights reserved.</p>
      </footer>

      <img src="college.jpeg" alt="College Full" width="100%" />
    </div>
  );
}

export default CollegeWebsite;
