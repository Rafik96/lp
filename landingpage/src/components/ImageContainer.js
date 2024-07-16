// src/components/ImageContainer.js
import React from 'react';
import './ImageContainer.css';

const ImageContainer = ({ imageSrc, altText, caption }) => (
    <div className="header-image-container">
        <img src={imageSrc} alt={altText} className="header-image" />
        <div className="header-image-caption">{caption}</div>
    </div>
);

export default ImageContainer;
