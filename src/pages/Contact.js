import React, { Component } from "react";
import axios from "axios";

class ContactForm extends Component {
    constructor() {
        super();
        this.state = {
            name: '',
            message: '',
            email: '',
            sent: false,
            buttonText: 'Send Message'
        };
    }




    render() {
        return (
            <div className="contact-form">
                <form className="container">
                    <div className="form-row">
                        <div className="form-group col-md-6">
                            <label className="text-dark" for="inputName">Full name</label>
                            <input className="form-control py-4" id="inputName" type="text" placeholder="Full name" />
                        </div>

                        <div className="form-group col-md-6">
                            <label className="text-dark" for="inputEmail">Email</label>
                            <input className="form-control py-4" id="inputEmail" type="email" placeholder="name@example.com" />
                        </div>
                    </div>

                    <div className="form-group">
                        <label className="text-dark" for="inputMessage">Message</label>
                        <textarea className="form-control py-3" id="inputMessage" type="text" placeholder="Enter your message..." rows="4"></textarea>
                    </div>
                    <div className="text-center">
                        <button className="btn btn-teal mt-4" type="submit">Submit Request</button>
                    </div>
                </form >
            </div >
        );
    }

}

export default ContactForm;