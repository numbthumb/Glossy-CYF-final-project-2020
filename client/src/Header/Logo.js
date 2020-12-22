import React from "react";
import logo from "../images/cyf_logo.png";
import "./Logo.scss"

const Logo = () => {

    return (
        <div id="logo">
            <img src={logo} className="logoImage" />
        </div>
    );
};

export default Logo;