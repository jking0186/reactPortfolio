import React from "react";
import "../styles/Footer.css"

function Footer() {
    return (
        <div className="footer">
            <a href="#"><i class="fa fa-chevron-circle-up fa-4x"></i></a>
            <footer className="footer mt-auto">
                    <div className="justify-content-center">
                        <div className="social">
                            <a href="https://github.com/jking0186">
                            <i class="fa fa-github fa-2x"></i>
                            </a>
                            <a href="https://www.linkedin.com/in/joe-king-iii-60b9a3173/"
                            ><i class="fa fa-linkedin fa-2x"></i>
                            </a>
                        </div>
                        <p className="text-secondary">Copyright 2020 Joe King</p>
                    </div>
            </footer>
        </div>
    )
};

export default Footer;