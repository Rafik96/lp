// Section.js

import React from 'react';
import './Section.css'; // Importuj plik CSS dla sekcji

const Section = React.forwardRef(({ id, title, content }, ref) => {
    return (
        <div className="section" id={id} ref={ref}>
            <h2>{title}</h2>
            <div dangerouslySetInnerHTML={{ __html: content }} />
        </div>
    );
});

export default Section;
