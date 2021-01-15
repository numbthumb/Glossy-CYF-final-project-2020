import React from 'react';
import Logo from "./Logo.js";
import {Navbar, Button} from 'react-bootstrap';
import {Link} from "react-router-dom";
import "./Header.scss";

const Header = () => {
    
    return (
    <Navbar expand="lg" variant="light" bg="light">
        <Navbar.Brand href="#">
            <Logo />
        </Navbar.Brand>     
        <Navbar.Brand>
        <Link to="/">
            <Button variant="primary" className="homeBtn">Home</Button>{' '}
            </Link> 
            <Button variant="primary" className="loginBtn">Login</Button>{' '}
        </Navbar.Brand>
    </Navbar>
    );
};

export default Header;