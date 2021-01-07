import React from "react";
import { Form, Col, Container, FormLabel, Button } from "react-bootstrap";
import "./AddTermUserForm.scss";

const AddTermUserForm = () => {
  return (
      <Container className="AddTermBox">
        <Button variant="primary">x</Button>{" "}
        <Form className="AddTermForm">
          <Form.Row>
            <Col>
              <FormLabel className="FormLabel">Name:*</FormLabel>
              <Form.Control
                as="input"
                size="lg"
                placeholder="Name"
                className="FormInput"
              />
            </Col>
            <Col>
              <FormLabel className="FormLabel">Email:*</FormLabel>
              <Form.Control
                as="input"
                placeholder="Email"
                className="FormInput"
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
              />
            </Col>
            <Col>
              <FormLabel className="FormLabel">Definition:*</FormLabel>
              <Form.Control
                as="textarea"
                placeholder="Definition"
                className="FormInputDefinition"
              />
            </Col>
            <Col>
              <FormLabel className="FormLabel">Video link:*</FormLabel>
              <Form.Control
                as="input"
                placeholder="Video link"
                className="FormInput"
              />
            </Col>
            <Col>
              <FormLabel className="FormLabel">Website link:*</FormLabel>
              <Form.Control
                as="input"
                placeholder="Website link"
                className="FormInput"
              />
            </Col>
          </Form.Row>
        </Form>
        <Button variant="primary" className="SubmitBtn">
          Submit
        </Button>{" "}
      </Container>
  );
};

export default AddTermUserForm;
