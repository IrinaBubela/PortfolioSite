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
                        <Link className="link" to="/">IB Dev</Link>
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
                            <Nav.Link className="nav-item" href="/Contact">
                                <Link className="nav-link" to="/Contact">Contact</Link>
                            </Nav.Link>
                        </Nav>
                    </Navbar.Collapse>
                </div>
            </Navbar >
        )
    }
}

export default withRouter(NavbarComponent);