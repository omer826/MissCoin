import React from 'react';
import './ContactFilter.css';

const ContactFilter = ({ onFilter }) => (

    <div className="filter">
        <input className="form-control" type="search"
         placeholder="Search user" onChange={event => onFilter(event.target.value)} />
    </div>

);

export default ContactFilter;