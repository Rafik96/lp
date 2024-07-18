import React from 'react';
import './Buttons.css';
import contactData from '../contact.json'; // Poprawna ścieżka do contact.json
import docIcon from '../icons/doc-icon.png';
import googleMapsIcon from '../icons/google-maps-icon.png'; // Poprawna ścieżka do ikony Google Maps
import emailIcon from '../icons/email-icon.png'; // Poprawna ścieżka do ikony email
import phoneIcon from '../icons/phone-icon.png'; // Poprawna ścieżka do ikony telefonu

const Buttons = () => {
    const { urlDoc, googleMapsLink, phoneNumber, emailAddress, opacity } = contactData;

    const openUrl = () => {
        window.open(urlDoc, '_blank');
    };

    const openGoogleMaps = () => {
        window.open(googleMapsLink, '_blank');
    };

    const sendEmail = () => {
        window.location.href = `mailto:${emailAddress}`;
    };

    const makePhoneCall = () => {
        window.location.href = `tel:${phoneNumber}`;
    };

    return (
        <div className="Buttons" style={{ opacity: opacity }}>
            <div className="Buttons-buttons">
                <button onClick={openUrl} txt="Znany lekarz">
                    <img src={docIcon} alt="Znany lekarz" className="button-icon" />
                </button>
                <button onClick={openGoogleMaps} txt="Adres">
                    <img src={googleMapsIcon} alt="Google Maps" className="button-icon" />
                </button>
                <button onClick={sendEmail} txt="Napisz maila">
                    <img src={emailIcon} alt="Email" className="button-icon" />
                </button>
                <button onClick={makePhoneCall} txt="Zadzwoń">
                    <img src={phoneIcon} alt="Phone" className="button-icon" />
                </button>
            </div>
        </div>
    );
};

export default Buttons;
