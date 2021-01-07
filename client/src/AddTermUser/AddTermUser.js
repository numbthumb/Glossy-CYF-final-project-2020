import React from "react";
import Form from 'react-bootstrap/Form';
import Col from 'react-bootstrap/Col';

const AddTermUser = () => {
    return(
        <div>
        <Form>
  <Form.Row>
    <Col>
      <Form.Control placeholder="Name" />
    </Col>
    <Col>
      <Form.Control placeholder="Email" />
    </Col>
    <Col>
      <Form.Control placeholder="Terminology" />
    </Col>
    <Col>
      <Form.Control placeholder="Definition" />
    </Col>
    <Col>
      <Form.Control placeholder="Video link" />
    </Col>
    <Col>
      <Form.Control placeholder="Link" />
    </Col>
  </Form.Row>
</Form>
</div>
    )
};

export default AddTermUser;