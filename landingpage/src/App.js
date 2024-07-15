// src/App.js
import React, { useRef } from 'react';
import Navbar from './components/Navbar';
import Section from './components/Section';
import './App.css';
import { sectionsData } from './sectionsData';

function App() {
    const eduRef = useRef(null);
    const expRef = useRef(null);
    const therapyRef = useRef(null);
    const contactRef = useRef(null);

    const scrollToSection = (ref) => {
        ref.current.scrollIntoView({ behavior: 'smooth' });
    };

    return (
        <div className="App">
            <Navbar
                scrollToSection={scrollToSection}
                eduRef={eduRef}
                expRef={expRef}
                therapyRef={therapyRef}
                contactRef={contactRef}
            />
            <header className="App-header">
                <h1>Psychoterapia uzależnień i wsparcie psychologiczne</h1>
            </header>
            <div className="header-image-container">
                    <img src="https://i.postimg.cc/4NZTfgD8/Anna-Maguder-2.jpg" alt="Example" className="header-image" />
                    <p className="header-image-caption">mgr Anna Maguder</p>
            </div>
            <main className="main-content">
                <div className="container">
                    {sectionsData.map((section, index) => (
                        <Section
                            key={index}
                            id={section.id}
                            title={section.title}
                            content={section.content}
                            ref={section.id === 'home' ? eduRef : section.id === 'about' ? expRef : section.id === 'services' ? therapyRef : section.id === 'contact' ? contactRef : null}
                        />
                    ))}
                </div>
            </main>
        </div>
    );
}

export default App;