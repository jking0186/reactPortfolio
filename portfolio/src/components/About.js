import React from "react";
import "../styles/About.css";


function About() {
    return (
        <div className="about">
            <div className="container">
                <div className="row">
                    <div className="col-lg-6 card-body aboutme">
                        <h5 class="card-title text-info border-bottom border-white">
                        About Me
                        </h5>
                        <p class="card-text text-white">
                        Hello, I’m <span class="text-info">Joe King</span>.
                        <br />
                        After nearly a decade of experience in television production I decided to learn full stack web development as a cohort in the Vanderbilt University coding bootcamp. 
                        I'm originally from Knoxville,TN where I attended The University of Tennessee and graduated with a B.S. in Journalism &amp; Electronic
                        Media. After 12 weeks of being exposed to a full stack of development areas, I found an interest in pursuing a front-end path. 
                        </p>
                        <h5 class="card-title text-info">
                        Contact Details
                        </h5>
                        <p class="card-text text-white contact">
                        Joe King <br/>
                        Franklin, TN 37067 <br/>
                        <a href="tel:865-789-6607">865-789-6607</a> <br />
                        <a href="mailto:jking0186@gmail.com">jking0186@gmail.com</a>
                        </p>
                    </div>
                </div>
            </div>
        </div>
    )
};

export default About;