import React from "react";
import PropTypes from "prop-types";
import { Form, Button } from "react-bootstrap";

function ReusableForm(props) {
  const inputStyle = {
    marginBottom: "10px" // Adjust the value as needed
  };

  return (
    <React.Fragment>
      <Form onSubmit={props.formSubmissionHandler}>
        <Form.Group controlId="origin">
          <Form.Label>Origin:</Form.Label>
          <Form.Control
            type="text"
            name="origin"
            placeholder="Place"
            style={inputStyle}
          />
        </Form.Group>
        <Form.Group controlId="name">
          <Form.Label>Name:</Form.Label>
          <Form.Control
            type="text"
            name="name"
            placeholder="Name"
            style={inputStyle}
          />
        </Form.Group>
        <Form.Group controlId="price">
          <Form.Label>Price:$</Form.Label>
          <Form.Control
            type="text"
            name="price"
            placeholder="Price"
            style={inputStyle}
          />
        </Form.Group>
        <Form.Group controlId="roast">
          <Form.Label>Roast: </Form.Label>
          <Form.Control
            type="text"
            name="roast"
            placeholder="Light, Medium, Dark"
            style={inputStyle}
          />
        </Form.Group>
        <Button variant="primary" type="submit">
          {props.buttonText}
        </Button>
      </Form>
    </React.Fragment>
  );
}

ReusableForm.propTypes = {
  formSubmissionHandler: PropTypes.func,
  buttonText: PropTypes.string
};

export default ReusableForm;