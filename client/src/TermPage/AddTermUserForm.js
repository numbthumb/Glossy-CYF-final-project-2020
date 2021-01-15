import React, {useState} from "react";
import { Form, Col, Container, FormLabel, Button } from "react-bootstrap";
import "./AddTermUserForm.scss";


const AddTermUserForm = ({handleClose}) => {
const [submitted, setSubmitted] = useState(false)
const handleClick = () => setSubmitted(true)
// const [closeForm, setCloseForm] = useState(false)
// const handleClose = () => {setCloseForm(!closeForm); console.log(closeForm)}
console.log(handleClose);

  return (
      <Container className="AddTermBox">
        <div className="closeForm">
        <Button variant="primary" className="closeFormBtn" onClick={handleClose}>x</Button>{" "}</div> 
          {submitted ? <p className="submitMessage">Your term has been submitted to Code Your future admin, please await a response from admin.<br></br> Your response from Code Your Future admin will be sent to your email.<br></br> Thank you.</p> :
        <>
        <Form className="AddTermForm">
          <Form.Row>
            <Col>
              <FormLabel className="FormLabel">Name:*</FormLabel>
              <Form.Control
                as="input"
                placeholder="Name"
                className="FormInput"
                required
              />
            </Col>
            <Col>
              <FormLabel className="FormLabel">Email:*</FormLabel>
              <Form.Control
                as="input"
                placeholder="Email"
                className="FormInput"
                required
              />
            </Col>
          </Form.Row>
          <Form.Row>
            <Col>
              <FormLabel className="FormLabel">Add terminology:*</FormLabel>
              <Form.Control
                as="input"
                placeholder="Add terminology"
                className="FormInput"
                required
              />
            </Col>
            <Col>
              <FormLabel className="FormLabel">Definition:*</FormLabel>
              <Form.Control
                as="textarea"
                placeholder="Definition"
                className="FormInputDefinition"
                required
              />
            </Col>
            <Col>
              <FormLabel className="FormLabel">Video link:*</FormLabel>
              <Form.Control
                as="input"
                placeholder="Video link"
                className="FormInput"
                required
              />
            </Col>
            <Col>
              <FormLabel className="FormLabel">Website link:*</FormLabel>
              <Form.Control
                as="input"
                placeholder="Website link"
                className="FormInput"
                required
              />
            </Col>
          </Form.Row>
        </Form>
        <div className="submit">
        <Button variant="primary" className="SubmitBtn" onClick={handleClick}>
          Submit
        </Button>{" "}</div>
        </>
        }
      </Container>
  );
};

export default AddTermUserForm;
