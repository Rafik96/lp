import React, { useState, useEffect } from 'react';
import { FiMenu } from 'react-icons/fi'; // Ikona menu hamburgerowego
import { Link } from 'react-scroll';
import './Navbar.css';

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);

    const toggleMenu = () => {
        setIsOpen(!isOpen);
    };

    return (
        <div className="navbar">
            <div className="menu-icon" onClick={toggleMenu}>
                <FiMenu />
            </div>
            <div className={isOpen ? "menu-links active" : "menu-links"}>
                <Link to="edu" smooth={true} duration={500} onClick={toggleMenu}>Wykształcenie</Link>
                <Link to="exp" smooth={true} duration={500} onClick={toggleMenu}>Doświadczenie zawodowe</Link>
                <Link to="therapy" smooth={true} duration={500} onClick={toggleMenu}>Terapia</Link>
                <Link to="contact" smooth={true} duration={500} onClick={toggleMenu}>Kontakt</Link>
            </div>
        </div>
    );
};

export default Navbar;
