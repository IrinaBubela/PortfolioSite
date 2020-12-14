import React from 'react';
import Projects from './Projects';
import { Link } from 'react-router-dom';

class MainPage extends React.Component {
    render() {
        return (
            <div>
                <main>
                    <header className="page-header page-header-dark bg-gradient-primary-to-secondary">
                        <div className="page-header-content pt-10">
                            <div className="container">
                                <div className="row align-items-center">
                                    <div className="col-lg-6 aos-init aos-animate" data-aos="fade-up">
                                        <h1 className="page-header-title">Front-end JS Developer</h1>
                                        <p className="page-header-text mb-5">I'm Irina, a Web Developer with commercial and team work experience. I enjoy creating user-centric, delightful and optimized projects.</p>
                                        <Link className="link" to="/Projects">
                                            <a className="btn btn-teal font-weight-500 mr-2" href="/Projects">
                                                View Projects
                                           <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" className="feather feather-arrow-right ml-2"><line x1="5" y1="12" x2="19" y2="12"></line><polyline points="12 5 19 12 12 19"></polyline></svg>
                                            </a>
                                        </Link>

                                        <a className="btn btn-link" href="/">Contact</a>
                                    </div>
                                    <div className="offset-lg-1 col-lg-5 d-none d-lg-block aos-init aos-animate text-right" data-aos="fade-up" data-aos-delay="100">
                                        <img className="img-fluid illustration" src="assets/img/illustration-2.svg" alt="dev" />
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="svg-border-rounded text-white">
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 144.54 17.34" preserveAspectRatio="none" fill="currentColor"><path d="M144.54,17.34H0V0H144.54ZM0,0S32.36,17.34,72.27,17.34,144.54,0,144.54,0"></path></svg>
                        </div>
                    </header>

                    <section className="bg-white py-10 section-my-skills">
                        <div className="container">
                            <div className="row text-center">
                                <div className="col-lg-4 mb-5 mb-lg-0">
                                    <div className="icon-stack icon-stack-xl bg-gradient-primary-to-secondary text-white mb-4"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" className="feather feather-layers"><polygon points="12 2 2 7 12 12 22 7 12 2"></polygon><polyline points="2 17 12 22 22 17"></polyline><polyline points="2 12 12 17 22 12"></polyline></svg></div>
                                    <h3>Front-end development</h3>
                                    <p className="mb-0">JavaScript(ES6), jQuery, HTML, CSS(CSS Preprocessors), Bootstrap, RWD, UX/UI Design </p>
                                </div>
                                <div className="col-lg-4 mb-5 mb-lg-0">
                                    <div className="icon-stack icon-stack-xl bg-gradient-primary-to-secondary text-white mb-4"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" className="feather feather-smartphone"><rect x="5" y="2" width="14" height="20" rx="2" ry="2"></rect><line x1="12" y1="18" x2="12.01" y2="18"></line></svg></div>
                                    <h3>JavaScript, Typescript and frameworks</h3>
                                    <p className="mb-0">React, Redux.
                                    Angular, AngularJS.  <br />
                                    Typescript.</p>
                                </div>
                                <div className="col-lg-4">
                                    <div className="icon-stack icon-stack-xl bg-gradient-primary-to-secondary text-white mb-4"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" className="feather feather-code"><polyline points="16 18 22 12 16 6"></polyline><polyline points="8 6 2 12 8 18"></polyline></svg></div>
                                    <h3>Backend and build tools</h3>
                                    <p className="mb-0">RESTful Services and APIs. <br /> Basics of Node.js and PHP.<br /> GIT and SVN. Problem Solving Skills</p>
                                </div>
                            </div>
                        </div>
                        <div className="svg-border-rounded text-light">
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 144.54 17.34" preserveAspectRatio="none" fill="currentColor"><path d="M144.54,17.34H0V0H144.54ZM0,0S32.36,17.34,72.27,17.34,144.54,0,144.54,0"></path></svg>
                        </div>
                    </section>
                    <Projects />

                </main>
            </div >
        );
    }
}



export default MainPage;