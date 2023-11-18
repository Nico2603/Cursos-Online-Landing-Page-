import React from 'react';
import '../styles/NavBar.css';
import logo from "../images/logo.svg"

const NavBar = () => {
    return (
        <nav className="navbar">
            <div className="nav-container">
                <div className="nav-logo">
                    <img src={logo}
                    style={{width:'100px'}}
                    />
                </div>
                <ul className="nav-menu">
                    <li className="nav-item">
                        <a href="#">Inicio</a>
                    </li>
                    <li className="nav-item">
                        <a href="#">Acerca de</a>
                    </li>
                    <li className="nav-item">
                        <a href="#">Contacto</a>
                    </li>
                </ul>
            </div>
        </nav>
    );
};

export default NavBar;
