import React from "react";
import "../styles/Contact.css"

function Contact() {
    return (
        <div id="contact">
        
            <form className="col-6 mt-5 container">
                <h2 className="text-light mb-3">Send Me A Message</h2>
                <div className="form-group row m-2">
                    <label for="nameinput" className="col-sm-2 col-form-label text-light">Name</label>
                    <div className="col-sm-10">
                        <input type="text" className="bg-secondary" />
                    </div>
                </div>
                <div className="row m-2">
                    <label for="inputEmail3" className="col-sm-2 col-form-label text-light">Email</label>
                    <div className="col-sm-10">
                        <input type="email" className="bg-secondary" id="inputEmail3" />
                    </div>
                </div>
                <div className="row m-2">
                    <label for="subject" className="col-sm-2 col-form-label text-light">Subject</label>
                    <div className="col-sm-10">
                        <input type="text" className="bg-secondary" />
                    </div>
                </div>
                <div className="row m-2">
                    <label for="subject" className="col-sm-2 col-form-label text-light">Message</label>
                    <div className="col-sm-10">
                    <textarea className="bg-secondary" id="exampleFormControlTextarea1" rows="5"></textarea>
                    </div>
                </div>
                <div className="float-right mr-4">
                    <button>SUBMIT</button>
                </div>
            </form>
        </div>
    )
};

export default Contact;