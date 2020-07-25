import React from "react";
import "../styles/About.css";


function About() {
    return (
        <div className="about">
            <div className="container">
                <div className="row">
                    <div className="col-lg-6 card-body">
                        <h3 class="card-title text-danger border-bottom border-white">about me</h3>
                        <p class="card-text text-white " id="intro">Hello, I’m <span class="text-danger">Joe King</span>.
                        <br />
                        I’m a student in the Vanderbilt University full stack web development bootcamp. I'm from Knoxville,TN
                        were I went to The University of Tennessee and graduated with a B.S. in Journalism &amp; Electronic
                        Media.
                        </p>
                    </div>
                </div>
            </div>
        </div>
    )
};

export default About;