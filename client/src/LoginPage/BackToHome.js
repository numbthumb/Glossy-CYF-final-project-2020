import React, {useState} from "react";
import { Button } from "react-bootstrap";
import { Link } from "react-router-dom";
import "./BackToHome.scss";

const BackToHome = () => {
  const [glossaryHome, setGlossaryHome] = useState(false);
  const handleClick = () => setGlossaryHome(!glossaryHome);

  return (
    <Link to="/">
      <Button variant="primary" className="backToHome" onClick={handleClick}>
        Back
      </Button>{" "}
    </Link>
  );
};

export default BackToHome;
