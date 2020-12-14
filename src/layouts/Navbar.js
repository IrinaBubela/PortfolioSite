import React from 'react';
import { withRouter } from 'react-router-dom';
import { Navbar, Nav } from 'react-bootstrap';
import { Link } from 'react-router-dom';

class NavbarComponent extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            classNameScroll: "",
            classNameColorNav: "",
            classNameResized: ""
        }
    }

    navbar = React.createRef();

    componentDidMount = () => {
        if (this.props.location.pathname !== '/') {
            this.setState({ classNameColorNav: " navbar-not-mainpage " });
        }

        if (window.innerWidth < 991) {
            if (!this.state.classNameResized) {
                this.setState({ classNameResized: " navbar-resized" });
            }
        }
        window.addEventListener("scroll", this.handleScroll);
        window.addEventListener("resize", this.handleResize);
    }

    componentWillUnmount = () => {
        window.removeEventListener('scroll', this.handleScroll);
        window.removeEventListener("resize", this.handleResize);
    }

    handleScroll = () => {
        if (window.pageYOffset > 20) {
            if (!this.state.classNameScroll) {
                this.setState({ classNameScroll: " navbar-scrolled" });
            }
        } else if (window.pageYOffset < 20) {
            if (this.state.classNameScroll) {
                this.setState({ classNameScroll: "" });
            }
        }
    }

    handleResize = () => {
        if (window.innerWidth < 991) {
            if (!this.state.classNameResized) {
                this.setState({ classNameResized: " navbar-resized" });
            }
        } else if (window.innerWidth > 992) {
            if (this.state.classNameResized) {
                this.setState({ classNameResized: "" });
            }
        }
    }


    render() {
        return (
            <Navbar bg="light" expand="lg" ref={this.navbar} className={"navbar navbar-marketing navbar-expand-lg bg-transparent navbar-dark fixed-top bg-gradient-primary-to-secondary" + this.state.classNameColorNav + this.state.classNameScroll + this.state.classNameResized}>
                <div className="container">
                    <Navbar.Brand href="/" className="navbar-brand text-white">
                        <Link className="link" to="/">Ira Bubela Dev</Link>
                    </Navbar.Brand>
                    <Navbar.Toggle aria-controls="basic-navbar-nav" className="navbar-toggler" type="button" />
                    <Navbar.Collapse id="basic-navbar-nav" className="collapse navbar-collapse">
                        <Nav className="navbar-nav ml-auto mr-lg-5">
                            <Nav.Link className="nav-item">
                                <Link className="nav-link" to="/">Home</Link>
                            </Nav.Link>
                            <Nav.Link className="nav-item">
                                <Link className="nav-link" to="/Projects">Projects</Link>
                            </Nav.Link>
                            <Nav.Link className="nav-item">
                                <Link className="nav-link" to="/About">About</Link>
                            </Nav.Link>
                            {/* <Nav.Link className="nav-item" href="/Contact">
                                <Link className="nav-link" to="/Contact">Contact</Link>
                            </Nav.Link> */}
                        </Nav>
                        <a className="btn font-weight-500 ml-lg-4 btn-teal" href="assets/img/CV-BUBELA.pdf" download>
                            Resume
                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" className="feather feather-arrow-right ml-2"><line x1="5" y1="12" x2="19" y2="12"></line><polyline points="12 5 19 12 12 19"></polyline></svg>
                        </a>
                    </Navbar.Collapse>
                </div>
            </Navbar >
        )
    }
}

export default withRouter(NavbarComponent);