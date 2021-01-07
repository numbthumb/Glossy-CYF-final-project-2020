import React, { useState } from "react";
import { Button } from "react-bootstrap";
import { Link } from "react-router-dom";

const LoginButton = () => {
    // const [showText, setShowText] = useState(false);
    const handleClick = () => setShowText(!showText);
    
    return(
        <div>
        <Link to="/LoginPage">
        <Button variant="primary" className="loginBtn" onClick={handleClick} >
          Login
        </Button>{" "}
        </Link>
        </div>
    );
}

export default LoginButton;