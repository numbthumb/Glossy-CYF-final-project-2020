import React from "react";
import { Form } from "react-bootstrap";

const AddTermUser = () => {

    return(
        <Form>
  <Form.Row>
    <Col>
      <Form.Control placeholder="Name" />
    </Col>
    <Col>
      <Form.Control placeholder="Email" />
    </Col>
  </Form.Row>
  <Form.Row>
        <Col>
            <Form.Control placeholder="Add terminology" />
        </Col>
        <Col>
            <Form.Control placeholder="Definition" />
        </Col>
        <Col>
            <Form.Control placeholder="Video link" />
        </Col>
        <Col>
            <Form.Control placeholder="Website link" />
        </Col>
  </Form.Row>
</Form>
    );
}

export default AddTermUser;