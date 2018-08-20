

import React from 'react';
import ContactPreview from '../../components/ContactPreview/ContactPreview';
import './ContactList.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

import { Link } from "react-router-dom";


const ContactList = ({ contacts }) => (
    <section >

        <ul className="clean-list contact-list flex-column justify-center">
            <div className="ctrl-btn btn btn-danger round-btn">
                <Link to='/contact/edit/'> 
                 <FontAwesomeIcon icon="plus" />
                </Link>
            </div>
            {contacts.map(contact => (
                <li key={contact._id} >
                    <Link to={`contact/${contact._id}`}><ContactPreview contact={contact} /></Link>
                </li>
            ))}
        </ul>
    </section>
);

export default ContactList;