import React, { Component } from 'react';

class ContactForm extends Component {



    render() {
        return (
            <div className="contact-page">
                <main>
                    <header class="page-header page-header-dark bg-gradient-primary-to-secondary">
                        <div class="page-header-content">
                            <div class="container text-center">
                                <div class="row justify-content-center">
                                    <div class="col-lg-8">
                                        <h1 class="page-header-title mb-3">Contact me</h1>
                                        <p class="page-header-text">If you are initially interested in cooperation - please contact me. </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="svg-border-rounded text-light">
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 144.54 17.34" preserveAspectRatio="none" fill="currentColor">
                                <path d="M144.54,17.34H0V0H144.54ZM0,0S32.36,17.34,72.27,17.34,144.54,0,144.54,0"></path>
                            </svg>
                        </div>
                    </header>
                    <section className="bgd-gray pt-10">
                        <div className="container">
                            <div className="row">
                                <div className="col-lg-4 mb-5">
                                    <div className="card card-link border-top border-top-lg border-primary lift text-center o-visible h-100" href="/">
                                        <div className="card-body">
                                            <div className="icon-stack icon-stack-xl bg-primary-soft text-primary mb-4 mt-n5 z-1 shadow">
                                                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" className="feather feather-user"><path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"></path><circle cx="12" cy="7" r="4"></circle></svg>
                                            </div>
                                            <h5>E-mail</h5>
                                            <p className="card-text">bubelairene@gmail.com</p>
                                        </div>
                                        <div className="card-footer">
                                            <div className="text-primary font-weight-bold d-inline-flex align-items-center">Contact With Email<svg className="svg-inline--fa fa-arrow-right fa-w-14 text-xs ml-1" aria-hidden="true" focusable="false" data-prefix="fas" data-icon="arrow-right" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512" data-fa-i2svg=""><path fill="currentColor" d="M190.5 66.9l22.2-22.2c9.4-9.4 24.6-9.4 33.9 0L441 239c9.4 9.4 9.4 24.6 0 33.9L246.6 467.3c-9.4 9.4-24.6 9.4-33.9 0l-22.2-22.2c-9.5-9.5-9.3-25 .4-34.3L311.4 296H24c-13.3 0-24-10.7-24-24v-32c0-13.3 10.7-24 24-24h287.4L190.9 101.2c-9.8-9.3-10-24.8-.4-34.3z"></path></svg></div></div></div>
                                </div>
                                <div className="col-lg-4 mb-5">
                                    <a className="card card-link border-top border-top-lg border-secondary lift text-center o-visible h-100" href="https://github.com/IrinaBubela"><div className="card-body">
                                        <div className="icon-stack icon-stack-xl bg-secondary-soft text-secondary mb-4 mt-n5 z-1 shadow">
                                            <img src="assets/img/github.png" alt="github" />
                                        </div>
                                        <h5>Github</h5>
                                        <p className="card-text">My Github Account</p>
                                    </div>
                                        <div className="card-footer">
                                            <div className="text-secondary font-weight-bold d-inline-flex align-items-center">Contact With Github<svg className="svg-inline--fa fa-arrow-right fa-w-14 text-xs ml-1" aria-hidden="true" focusable="false" data-prefix="fas" data-icon="arrow-right" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512" data-fa-i2svg=""><path fill="currentColor" d="M190.5 66.9l22.2-22.2c9.4-9.4 24.6-9.4 33.9 0L441 239c9.4 9.4 9.4 24.6 0 33.9L246.6 467.3c-9.4 9.4-24.6 9.4-33.9 0l-22.2-22.2c-9.5-9.5-9.3-25 .4-34.3L311.4 296H24c-13.3 0-24-10.7-24-24v-32c0-13.3 10.7-24 24-24h287.4L190.9 101.2c-9.8-9.3-10-24.8-.4-34.3z"></path></svg></div></div></a>
                                </div>
                                <div className="col-lg-4 mb-5">
                                    <a className="card card-link border-top border-top-lg border-teal lift text-center o-visible h-100" href="https://www.linkedin.com/in/irina-bubela-17259a1a2/"><div className="card-body">
                                        <div className="icon-stack icon-stack-xl bg-teal-soft text-teal mb-4 mt-n5 z-1 shadow">
                                            <img src="assets/img/linkedin.png" alt="linkedin" />
                                        </div>
                                        <h5>Linkedin</h5>
                                        <p className="card-text">My Linkedin Account</p>
                                    </div>
                                        <div className="card-footer">
                                            <div className="text-teal font-weight-bold d-inline-flex align-items-center">Contact With Linkedin<svg className="svg-inline--fa fa-arrow-right fa-w-14 text-xs ml-1" aria-hidden="true" focusable="false" data-prefix="fas" data-icon="arrow-right" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512" data-fa-i2svg=""><path fill="currentColor" d="M190.5 66.9l22.2-22.2c9.4-9.4 24.6-9.4 33.9 0L441 239c9.4 9.4 9.4 24.6 0 33.9L246.6 467.3c-9.4 9.4-24.6 9.4-33.9 0l-22.2-22.2c-9.5-9.5-9.3-25 .4-34.3L311.4 296H24c-13.3 0-24-10.7-24-24v-32c0-13.3 10.7-24 24-24h287.4L190.9 101.2c-9.8-9.3-10-24.8-.4-34.3z"></path></svg></div></div></a>
                                </div>
                            </div>

                        </div>
                    </section>
                </main >
            </div >
        );
    }
}


export default ContactForm;