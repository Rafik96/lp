import React from 'react';
import './Widget.css';
import contactData from '../contact.json'; // Poprawna ścieżka do contact.json
import docIcon from '../icons/doc-icon.png'
import googleMapsIcon from '../icons/google-maps-icon.png'; // Poprawna ścieżka do ikony Google Maps
import emailIcon from '../icons/email-icon.png'; // Poprawna ścieżka do ikony email
import phoneIcon from '../icons/phone-icon.png'; // Poprawna ścieżka do ikony telefonu

const Widget = () => {
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
        <div className="widget" style={{ opacity: opacity }}>
            <div className="widget-buttons">
                <button onClick={openUrl}>
                    <img src={docIcon} alt="Znany lekarz" className="button-icon" />
                </button>
                <button onClick={openGoogleMaps}>
                    <img src={googleMapsIcon} alt="Google Maps" className="button-icon" />
                </button>
                <button onClick={sendEmail}>
                    <img src={emailIcon} alt="Email" className="button-icon" />
                </button>
                <button onClick={makePhoneCall}>
                    <img src={phoneIcon} alt="Phone" className="button-icon" />
                </button>
            </div>
        </div>
    );
};

export default Widget;
