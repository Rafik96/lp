// src/App.js
import React, { useRef } from 'react';
import Navbar from './components/Navbar';
import Section from './components/Section';
import './App.css';

const sectionsData = [
    {
        id: "home",
        title: "Home Section",
        content: "Welcome to the Home section. This is where you can find information about our company."
    },
    {
        id: "about",
        title: "About Section",
        content: "Learn more about our mission and values in the About section."
    },
    {
        id: "services",
        title: "Services Section",
        content: "Explore our range of services offered to meet your needs in the Services section."
    },
    {
        id: "contact",
        title: "Contact Section",
        content: "Contact us for any inquiries or feedback in the Contact section."
    }
];

function App() {
    const homeRef = useRef(null);
    const aboutRef = useRef(null);
    const servicesRef = useRef(null);
    const contactRef = useRef(null);

    const scrollToSection = (ref) => {
        ref.current.scrollIntoView({ behavior: 'smooth' });
    };

    return (
        <div className="App">
            <Navbar
                scrollToSection={scrollToSection}
                homeRef={homeRef}
                aboutRef={aboutRef}
                servicesRef={servicesRef}
                contactRef={contactRef}
            />
            <header className="App-header">
                <h1>Psychoterapia uzależnień i wsparcie psychologiczne</h1>
            </header>
            <main className="main-content">
                <div className="container">
                    {sectionsData.map((section, index) => (
                        <Section
                            key={index}
                            id={section.id}
                            title={section.title}
                            content={section.content}
                            ref={section.id === 'home' ? homeRef : section.id === 'about' ? aboutRef : section.id === 'services' ? servicesRef : section.id === 'contact' ? contactRef : null}
                        />
                    ))}
                </div>
            </main>
        </div>
    );
}

export default App;
