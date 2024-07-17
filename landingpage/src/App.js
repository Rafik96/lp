// src/App.js
import React, { useRef } from 'react';
import Navbar from './components/Navbar';
import Section from './components/Section';
import Header from './components/Header';
import ImageContainer from './components/ImageContainer'
import Widget from './components/Widget';
import './App.css';
import { sectionsData } from './sectionsData';


function App() {
    const eduRef = useRef(null);
    const expRef = useRef(null);
    const therapyRef = useRef(null);
    const contactRef = useRef(null);
    

   

    return (
        
        <div className="App">
            <Widget
            />
            <Navbar />
            <header>
                <h1><Header/></h1>
            </header>
            <div>
            <ImageContainer
                imageSrc="https://i.postimg.cc/4NZTfgD8/Anna-Maguder-2.jpg"
                altText="Anna Maguder"
                caption="mgr Anna Maguder"
            />
            </div>
            <main className="main-content">
                <div className="container">
                    {sectionsData.map((section, index) => (
                        <Section
                            key={index}
                            id={section.id}
                            title={section.title}
                            content={section.content}
                            imageSrc={section.imageSrc}
                            ref={section.id === 'edu' ? eduRef : section.id === 'exp' ? expRef : section.id === 'therapy' ? therapyRef : section.className === 'office-image-container' ? contactRef : null}
                        />
                    ))}
                </div>
            </main>
        </div>
    );
}

export default App;