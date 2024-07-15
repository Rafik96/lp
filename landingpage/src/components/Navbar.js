// src/components/Navbar.js
import React from 'react';
import './Navbar.css';

const Navbar = ({ scrollToSection, eduRef, expRef, therapyRef, contactRef }) => {
    return (
        <nav className="navbar">
            <div className="navbar-links">
                <a href="/" onClick={() => scrollToSection(eduRef)}>Wykształcenie</a>
                <a href="/" onClick={() => scrollToSection(expRef)}>Doświadczenie zawodowe</a>
                <a href="/" onClick={() => scrollToSection(therapyRef)}>Terapia</a>
                <a href="/" onClick={() => scrollToSection(contactRef)}>Kontakt</a>
            </div>
        </nav>
    );
};

export default Navbar;
