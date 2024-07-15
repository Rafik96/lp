// src/components/Navbar.js
import React from 'react';
import './Navbar.css';

const Navbar = ({ scrollToSection, eduRef, expRef, therapyRef, contactRef }) => {
    const handleLinkClick = (event, ref) => {
        event.preventDefault();
        scrollToSection(ref);
    };

    return (
        <nav className="navbar">
            <div className="navbar-links">
                <a href="/" onClick={(event) => handleLinkClick(event, eduRef)}>Wykształcenie</a>
                <a href="/" onClick={(event) => handleLinkClick(event, expRef)}>Doświadczenie zawodowe</a>
                <a href="/" onClick={(event) => handleLinkClick(event, therapyRef)}>Terapia</a>
                <a href="/" onClick={(event) => handleLinkClick(event, contactRef)}>Kontakt</a>
            </div>
        </nav>
    );
};

export default Navbar;
