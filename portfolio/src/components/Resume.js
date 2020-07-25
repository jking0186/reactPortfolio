import React from "react";
import "../styles/Resume.css"

function Resume() {
    return (
        <div id="resume">
            <div className="card mb-3 p-5 d-flex">
                <div className="row no-gutters border-bottom">
                    <div className="col-md-4">
                        <div className="card-body">
                        <h4 className="card-title" id="education">Education</h4>
                        </div>
                    </div>
                    <div className="col-md-6">
                        <div className="card-body text-left" id="school">
                            <h5 className="card-title">Vanderbilt University</h5>
                            <h6 className="card-title">Full Stack Development &bull; August 2020</h6>
                            <p className="card-text text-muted">This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
                        </div>   
                            <br />
                        <div className="card-body text-left" id="school">
                            <h5 className="card-title">University of Tennessee</h5>
                            <h6 className="card-title">Journalism &amp; Electronic Media &bull; May 2010</h6>
                            <p className="card-text text-muted">This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
                        </div>
                    </div>
                </div>
                {/* ================================================================================ */}
                <div className="row no-gutters border-bottom">
                    <div className="col-md-4">
                        <div className="card-body">
                        <h4 className="card-title" id="education">Work</h4>
                        </div>
                    </div>
                    <div className="col-md-6">
                        <div className="card-body text-left" id="school">
                            <h5 className="card-title">Scripps Networks Interactive</h5>
                            <h6 className="card-title">Network Operations Technician &bull; December 2015 - February 2019</h6>
                            <p className="card-text text-muted">This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
                        </div>
                            <br />
                        <div className="card-body text-left" id="school">
                            <h5 className="card-title">Jewelry Television</h5>
                            <h6 className="card-title">Technical Direct, Production Member &bull; September 2010 - December 2015</h6>
                            <p className="card-text text-muted">This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
                        </div>
                    </div>
                </div>
                <div className="row no-gutters">
                    <div className="col-md-4">
                        <div className="card-body">
                        <h4 className="card-title" id="education">Skills</h4>
                        </div>
                    </div>
                    <div className="col-md-6">
                        <div className="card-body text-left" id="school">
                            <h5 className="card-title">HTML</h5>
                        </div>
                        <div className="card-body text-left" id="school">
                            <h5 className="card-title">CSS</h5>
                        </div>
                        <div className="card-body text-left" id="school">
                            <h5 className="card-title">JavaScript</h5>
                        </div>
                        <div className="card-body text-left" id="school">
                            <h5 className="card-title">Node.js</h5>
                        </div>
                        <div className="card-body text-left" id="school">
                            <h5 className="card-title">React.js</h5>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
};

export default Resume;