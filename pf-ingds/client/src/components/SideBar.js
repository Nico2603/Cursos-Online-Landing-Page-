import React from 'react';
import { NavLink } from 'react-router-dom';
import '../styles/SideBar.css';

const SideBar = () => {
    return (
        <div className="sidebar" style={{display: 'flex', justifyContent: 'flex-start'}}>
            <NavLink exact to="/" activeClassName="selected" className="sidebar-button">Home</NavLink>
            <NavLink to="/about" activeClassName="selected" className="sidebar-button">About</NavLink>
            <NavLink to="/contact" activeClassName="selected" className="sidebar-button">Contact</NavLink>
        </div>
    );
};

export default SideBar;
