
import React from 'react';
import './ContactPreview.css';

const ContactPreview = ({ contact }) => (

    <div className="contact-prev flex align-center">
        <img src="/img/profile.png" alt="profile img" />
        <p>
            {contact.name}
        </p>
    </div>

);

export default ContactPreview;