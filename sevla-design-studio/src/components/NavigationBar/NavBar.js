import React from 'react'
import { Navbar, Nav, Container } from 'react-bootstrap';
import {
    BrowserRouter as Router,
    Routes,
    Route,
    Link
  } from "react-router-dom";
import Shopping from '../Pages/Shopping';
import About from '../Pages/About';
import Contact from '../Pages/Contact';
import Login from '../Pages/Login';
import SignUp from '../Pages/SignUp';

const NavBar = () => {
    return (
        <Router>
            <div>
                <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
                    <Container>
                        <Navbar.Brand href="#home">Logo</Navbar.Brand>
                        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                        <Navbar.Collapse id="responsive-navbar-nav">
                            <Nav className="me-auto">
                                <Nav.Link as={Link} to={"/about"} href="#about">About</Nav.Link>
                                <Nav.Link as={Link} to={"/contact"} href="#contact">Contact</Nav.Link>
                                <Nav.Link as={Link} to={"/shopping"} href="#shopping">Shopping</Nav.Link>
                            </Nav>
                            <Nav>
                                <Nav.Link as={Link} to={'/login'} href="#login">Login</Nav.Link>
                                <Nav.Link as={Link} to={'/signup'} eventKey={2} href="#signup">
                                    SignUp
                                </Nav.Link>
                            </Nav>
                        </Navbar.Collapse>
                    </Container>
                </Navbar>
            </div>

            <div>
                    <Routes>
                        <Route path="/about" element={<About/>} />
                        <Route path="/contact" element={<Contact/>} />
                        <Route path="/shopping" element={<Shopping/>} />
                        <Route path="/login" element={<Login/>} />
                        <Route path="/signup" element={<SignUp/>} />
                    </Routes>
            </div>

        </Router>
    )
}

export default NavBar