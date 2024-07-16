import React, { useState, useEffect } from 'react';
import { FiMenu } from 'react-icons/fi'; // Ikona menu hamburgerowego
import './Navbar.css';

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);

    const toggleMenu = () => {
        setIsOpen(!isOpen);
    };

    useEffect(() => {
        const navbar = document.querySelector('.navbar');

        const handleScroll = () => {
            if (navbar && window.scrollY > navbar.offsetHeight) {
                navbar.classList.add('navbar-fixed');
            } else {
                navbar.classList.remove('navbar-fixed');
            }
        };

        window.addEventListener('scroll', handleScroll);

        // Clean up
        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    });

    return (
        <div className="navbar">
            <div className="menu-icon" onClick={toggleMenu}>
                <FiMenu />
            </div>
            <div className={isOpen ? "menu-links active" : "menu-links"}>
                <a href="#edu" onClick={toggleMenu}>Wykształcenie</a>
                <a href="#exp" onClick={toggleMenu}>Doświadczenie zawodowe</a>
                <a href="#therapy" onClick={toggleMenu}>Terapia</a>
                <a href="#contact" onClick={toggleMenu}>Kontakt</a>
            </div>
        </div>
    );
};

export default Navbar;
