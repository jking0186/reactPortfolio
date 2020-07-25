import React from "react";
import '../styles/Portfolio.css';

function Portfolio() {
    return (
        <div className="portfolio">
            <div className="container">
            <h5 className="text-center text-secondary m-5">CHECK OUT SOME OF MY WORK</h5>
                <div className="row mt-5">
                    <div className="col-sm-4">
                        <div className="card">
                            <div className="card-body">
                                <img className="card-img" alt="" />
                            </div>
                        </div>
                    </div>
                    <div className="col-sm-4">
                        <div className="card">
                            <div className="card-body">
                                <img className="card-img" alt="" />
                            </div>
                        </div>
                    </div>
                    <div className="col-sm-4">
                        <div className="card">
                            <div className="card-body">
                                <img className="card-img" alt="" />
                            </div>
                        </div>
                    </div>
                </div>
                <div className="row mt-5">
                    <div className="col-sm-4">
                        <div className="card">
                            <div className="card-body">
                                <img className="card-img" alt="" />
                            </div>
                        </div>
                    </div>
                    <div className="col-sm-4">
                        <div className="card">
                            <div className="card-body">
                                <img className="card-img" alt="" />
                            </div>
                        </div>
                    </div>
                    <div className="col-sm-4">
                        <div className="card">
                            <div className="card-body">
                                <img className="card-img" alt="" />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
};

export default Portfolio;