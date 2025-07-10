import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css';
import logo from '../assets/sviet-logo.png'; // ✅ import your logo image

const Navbar = () => {
  const [showDropdown, setShowDropdown] = useState(false);

  return (
    <nav className="navbar">
      <div className="nav-logo">
        <img src={logo} alt="SVIET Logo" className="logo-img" />
        <span className="college-name">SVIET College</span>
      </div>

      <ul className="nav-links">
        <li><Link to="/">Home</Link></li>
        <li><Link to="/about">About</Link></li>
        <li><Link to="/academics">Academics</Link></li>

        <li
          className="dropdown"
          onMouseEnter={() => setShowDropdown(true)}
          onMouseLeave={() => setShowDropdown(false)}
        >
          Departments ▾
          {showDropdown && (
            <ul className="dropdown-menu">
              <li><Link to="/cse">CSE</Link></li>
              <li><Link to="/ece">ECE</Link></li>
              <li><Link to="/csm">CSM</Link></li>
            </ul>
          )}
        </li>

        
        <li><Link to="/campus">Campus</Link></li>
<li><Link to="/placements">Placements</Link></li>

        <li><Link to="/contact">Contact</Link></li>

        <li className="login-button">
          <Link to="/login">Login</Link>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
