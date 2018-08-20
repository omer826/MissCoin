import React from 'react';
import './NavBar.css';
import { NavLink } from "react-router-dom";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'


const NavBar = () => (

    <div className="nav-bar flex">
        <NavLink
            to="/"
            activeClassName="selected">
            <FontAwesomeIcon icon="home" />
        </NavLink>
        <NavLink
            to="/contact"
            activeClassName="selected">
            <FontAwesomeIcon icon="users" />
        </NavLink>
        <NavLink
            to="/"
            activeClassName="selected">
            <FontAwesomeIcon icon="chart-bar" />
        </NavLink>

    </div>

);

export default NavBar;