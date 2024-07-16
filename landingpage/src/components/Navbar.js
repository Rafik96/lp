// src/components/Navbar.js
import React, { useEffect, useState } from 'react';
import './Navbar.css';

const Navbar = ({ scrollToSection, eduRef, expRef, therapyRef, contactRef }) => {
    const [isFixed, setIsFixed] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            const navbar = document.querySelector('.navbar');
            const offsetTop = navbar.offsetTop;

            if (window.pageYOffset > offsetTop) {
                setIsFixed(true);
            } else {
                setIsFixed(false);
            }
        };

        window.addEventListener('scroll', handleScroll);
        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    const handleLinkClick = (event, ref) => {
        event.preventDefault();
        scrollToSection(ref);
    };

    return (
        <nav className={`navbar ${isFixed ? 'fixed' : ''}`}>
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
