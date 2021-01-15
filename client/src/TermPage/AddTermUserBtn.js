import React, { useState } from "react";
import { Button } from "react-bootstrap";
import AddTermUserForm from "./AddTermUserForm";
import "./AddTermUserBtn.scss";

function AddTermUserBtn() {
  const [showText, setShowText] = useState(false);
  const handleClick = () => setShowText(!showText);


  return (
      <>
        <div className="addTermUserButtonContainer">
          <Button onClick={handleClick}>Add Term</Button>
        </div>
        <div>{showText && <AddTermUserForm handleClose={handleClick} />}</div>
        </>
  );
}
export default AddTermUserBtn;
