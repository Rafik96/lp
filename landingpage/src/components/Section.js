// src/components/Section.js
import React, { forwardRef } from 'react';
import './Section.css';

const Section = forwardRef(({ id, title, content, imageSrc, altText }, ref) => (
    <section id={id} ref={ref} className={`section ${id}`}>
        <h2>{title}</h2>
        <div dangerouslySetInnerHTML={{ __html: content }} />
        {imageSrc && (
            <div className="office-image-container">
                <img src={imageSrc} alt={altText} />
            </div>
        )}
    </section>
));

export default Section;
