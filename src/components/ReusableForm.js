import React from "react";
import PropTypes from "prop-types";
import { Form, Button } from "react-bootstrap";

const formStyle = {
  display: "flex",
  flexDirection: "column",
  fontSize: "18px",
  alignItems: "center",
  maxWidth: "400px",
  margin: "0 auto",
  textAlign: "center"
};
function ReusableForm(props) {
  const inputStyle = {
    marginBottom: "10px",
    fontSize: "18px",
    padding: "10px", 
    textAlign: "center"
  };

  const buttonStyle = {
    alignSelf: "center",  
    marginTop: "15px",
    marginLeft: "40px"
  };

  return (
    <React.Fragment>
      <Form style={formStyle} onSubmit={props.formSubmissionHandler}>
        <Form.Group controlId="origin">
          <Form.Label><b>Origin:</b></Form.Label>
          <Form.Control
            type="text"
            name="origin"
            placeholder="Place"
            style={inputStyle}
          />
        </Form.Group>
        <Form.Group controlId="name">
          <Form.Label><b>Name:</b></Form.Label>
          <Form.Control
            type="text"
            name="name"
            placeholder="Name"
            style={inputStyle}
          />
        </Form.Group>
        <Form.Group controlId="price">
          <Form.Label><b>Price:$</b></Form.Label>
          <Form.Control
            type="text"
            name="price"
            placeholder="Price"
            style={inputStyle}
          />
        </Form.Group>
        <Form.Group controlId="roast">
          <Form.Label><b>Roast:</b></Form.Label>
          <Form.Control
            type="text"
            name="roast"
            placeholder="Light, Medium, Dark"
            style={inputStyle}
          />
        </Form.Group>
        <Button style={buttonStyle} type="submit">
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