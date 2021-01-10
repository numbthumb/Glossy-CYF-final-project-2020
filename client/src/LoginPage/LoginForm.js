import React from "react";
import Form from "react-bootstrap/Form";
import {Row, Col, Container} from "react-bootstrap";
import "./LoginForm.scss";

const LoginForm = () => {
  return (
    <Container className="LoginFormBox">
    <Form className="LoginForm">
      <Form.Group as={Row} controlId="formPlaintextEmail">
        <Form.Label column sm="2" className="LoginFormLabel">
          Email
        </Form.Label>
        <Col sm="10">
          <Form.Control plaintext readOnly defaultValue="email@example.com" />
        </Col>
      </Form.Group>
      <Form.Group as={Row} controlId="formPlaintextPassword">
        <Form.Label column sm="2">
          Password
        </Form.Label>
        <Col sm="10">
          <Form.Control type="password" placeholder="Password" />
        </Col>
      </Form.Group>
    </Form>
    </Container>
  );
};

export default LoginForm;
