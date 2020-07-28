import React from "react";
import "../styles/Navbar.css";

function Navbar() {
    return (
            <nav className="navbar sticky-top justify-content-center">
            <ul className="nav">
                <li className="nav-item">
                    <a href="#about">
                        ABOUT
                    </a>
                </li>
                <li className="nav-item">
                    <a href="#resume">
                        RESUMÉ
                    </a>
                </li>
                <li className="nav-item">
                    <a href="#portfolio">
                        PORTFOLIO
                    </a>
                </li>
                <li className="nav-item">
                    <a href="#contact">
                        CONTACT
                    </a>
                </li>
        </ul>
        </nav>
    )
};

export default Navbar;