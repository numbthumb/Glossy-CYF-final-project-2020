import React from 'react';
import Logo from "./Logo.js";
import {Navbar, Button} from 'react-bootstrap';
import "./Header.scss";

const Header = () => {
    
    return (
    <Navbar expand="lg" variant="light" bg="light">
        <Navbar.Brand href="#">
            <Logo />
        </Navbar.Brand>     
        <Navbar.Brand>
            <Button variant="primary" className="homeBtn">Home</Button>{' '}
            <Button variant="primary" className="loginBtn">Login</Button>{' '}
        </Navbar.Brand>
    </Navbar>
    );
};

export default Header;