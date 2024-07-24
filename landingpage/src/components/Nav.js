import React, { useEffect, useState } from 'react';
import { FiMenu } from 'react-icons/fi'; // Ikona menu hamburgerowego
import { Link } from 'react-scroll';
import './Nav.css';

const Nav = () => {
    const smooth = true;
    const duration = 500;
    const [isOpen, setIsOpen] = useState(false);
    const [offset, setOffset] = useState(-75);
    useEffect(() => {
        const handleResize = () => {
            if (window.innerWidth < 768) {
                setOffset(-30); // Mniejszy offset dla mniejszych ekranów
            } else {
                setOffset(-75); // Większy offset dla większych ekranów
            }
        };

        window.addEventListener('resize', handleResize);

        return () => {
            window.removeEventListener('resize', handleResize);
        };
    }, []);

    const toggleMenu = () => {
        setIsOpen(!isOpen);
    };

    return (
        <div className="Nav">
            <div className="menu-icon" onClick={toggleMenu}>
                <FiMenu />
            </div>
            <div className={isOpen ? "menu-links active" : "menu-links"}>
                <Link
                    to="edu"
                    smooth={smooth}
                    duration={duration}
                    offset={offset}
                    onClick={toggleMenu}
                >
                    Wykształcenie
                </Link>
                <Link
                    to="exp"
                    smooth={smooth}
                    duration={duration}
                    offset={offset}
                    onClick={toggleMenu}
                >
                    Doświadczenie zawodowe
                </Link>
                <Link
                    to="therapy"
                    smooth={smooth}
                    duration={duration}
                    offset={offset}
                    onClick={toggleMenu}
                >
                    Terapia
                </Link>
                <Link
                    to="contact"
                    smooth={smooth}
                    duration={duration}
                    offset={offset}
                    onClick={toggleMenu}
                >
                    Kontakt
                </Link>
            </div>
        </div>
    );
};

export default Nav;
