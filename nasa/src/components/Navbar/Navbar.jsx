import React, { useState } from 'react';
import '../Navbar/Navbar.css';
import { Link } from 'react-router-dom';

export default function Navbar() {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    };

    return (
      <div>
        {/* pc nav  */}
        <nav className="navbar">
          <h1 className="logo">EXO.EDU</h1>
          <div className="navChild">
            <Link to={"/"}>
            <h3>Home page</h3>
            </Link>
            <Link to={"/list"}>
              <h3>Exoplanets</h3>
            </Link>
            <Link className='text' to={"/cai"}>
              <h3>Create your exoplanet</h3>
            </Link>
            <h3>Resources</h3>
            <h3>About us</h3>
          </div>
          <a href="#footer">
            <button className="navBtn">contact us</button>
          </a>
        </nav>

        {/* mobile nav  */}
        <div className="mobileNav">
          <div className="hamburger">
            <h1 className="logo">EXO.EDU</h1>
            <button className="menuBtn" onClick={toggleMenu}>
              {isMenuOpen ? "✖" : "☰"} {/* Hamburger icon */}
            </button>
          </div>
          {isMenuOpen && (
            <div className="mobileMenu">
              <h3>Home page</h3>
              <h3>Exoplanets</h3>
              <h3>Create your planet</h3>
              <h3>Resources</h3>
              <h3>About us</h3>
            </div>
          )}
        </div>
      </div>
    );
}
