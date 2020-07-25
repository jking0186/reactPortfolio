import React from "react";
import "../styles/Navbar.css";
import { Link, useLocation } from "react-router-dom";

function Navbar() {
    const location = useLocation();
    return (
            <nav className="navbar justify-content-center">
            <ul className="nav">
                <li className="nav-item">
                    <Link
                        to="/"
                        className={location.pathname === "/" ? "nav-link active" : "nav-link"}
                    >
                        About
                    </Link>
                </li>
                <li className="nav-item">
                    <Link
                        to="/"
                        className={location.pathname === "/#resume" ? "nav-link active" : "nav-link"}
                    >
                        Resumé
                    </Link>
                </li>
                <li className="nav-item">
                    <Link
                        to="/"
                        className={location.pathname === "/#portfolio" ? "nav-link active" : "nav-link"}
                    >
                        Portfolio
                    </Link>
                </li>
                <li className="nav-item">
                    <Link
                        to="/discover"
                        className={location.pathname === "/#contact" ? "nav-link active" : "nav-link"}
                    >
                        Contact
                    </Link>
                </li>
        </ul>
        </nav>
    )
};

export default Navbar;