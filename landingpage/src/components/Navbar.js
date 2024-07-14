// src/components/Navbar.js
import React from 'react';
import './Navbar.css';

const Navbar = ({ scrollToSection, homeRef, aboutRef, servicesRef, contactRef }) => {
    return (
        <nav className="navbar">
            <div className="navbar-links">
                <a href="/" onClick={() => scrollToSection(homeRef)}>Home</a>
                <a href="/" onClick={() => scrollToSection(aboutRef)}>About</a>
                <a href="/" onClick={() => scrollToSection(servicesRef)}>Services</a>
                <a href="/" onClick={() => scrollToSection(contactRef)}>Contact</a>
            </div>
        </nav>
    );
};

export default Navbar;
