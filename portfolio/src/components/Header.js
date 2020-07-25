import React from "react";
import "../styles/Header.css"
import ProfilePic from '../images/joeking-6.jpg'

function Header() {
    return (
        <div className="header">
            <div className="text-center text-white">
            <br />
                <h1>
                    im
                    <span className="text-info">only</span>
                    joeking
                </h1>
                <img className="profilepic" src={ProfilePic} alt="Joe King"/>
                <h4>
                    Full Stack Web Developer
                </h4>
                <br />
                <button type="button" className="btn btn-info btn-lg">
                <i class="fa fa-download"></i>
                    Download Resumé
                </button>
                <div className="social">
                <a href="https://github.com/jking0186">
                <i class="fa fa-github fa-2x"></i>
                </a>
                <a href="https://www.linkedin.com/in/joe-king-iii-60b9a3173/"
                ><i class="fa fa-linkedin fa-2x"></i>
                </a>
                </div>
            </div>
        </div>
    )
};

export default Header;