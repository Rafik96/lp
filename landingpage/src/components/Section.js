// src/components/Section.js
import React, { forwardRef } from 'react';
import './Section.css';

const Section = forwardRef(({ id, title, content, imageSrc, altText }, ref) => (
    <h2>
        <section id={id} ref={ref} className={`section ${id}`}>
        <h2>{title}</h2>
        <h3><div dangerouslySetInnerHTML={{ __html: content }} /></h3>
        {imageSrc && (
            <div className="office-image-container">
                <img src={imageSrc} alt={altText} />
            </div>
        )}
    </section>
    </h2>
));

export default Section;
