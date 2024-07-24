import React from 'react';
import contactData from '../contact.json';
import './Contact.css'; // Importuj plik CSS

const Contact = () => {
    const { phoneNumber, emailAddress, address, postCode } = contactData;

    return (
        <div className="contact-container">
            <h2>Gabinet:</h2>
            <p className="contact-address">{address}</p>
            <p className="contact-postcode">{postCode}</p>
            <p className="contact-phone">
                Telefon: <a href={`tel:${phoneNumber}`}>{phoneNumber}</a>
            </p>
            <p className="contact-email">
                Email: <a href={`mailto:${emailAddress}`}>{emailAddress}</a>
            </p>
        </div>
    );
}

export default Contact;
