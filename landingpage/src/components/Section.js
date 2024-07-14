// src/components/Section.js
import React, { forwardRef } from 'react';
import './Section.css';

const Section = forwardRef(({ id, title, content }, ref) => {
    return (
        <section id={id} ref={ref} className="section">
            <div className="section-content">
                <h2>{title}</h2>
                <p>{content}</p>
            </div>
        </section>
    );
});

export default Section;
