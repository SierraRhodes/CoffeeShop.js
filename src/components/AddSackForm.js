import React from "react";
import PropTypes from "prop-types";
import { v4 } from 'uuid';
import ReusableForm from "./ReusableForm";

function AddSackForm(props){
  
  return (
    <React.Fragment>
     <ReusableForm formSubmissionHandler={handleNewCoffeeItemFormSubmission}
     buttonText="Add Coffee" />
    </React.Fragment>
  );
  function handleNewCoffeeItemFormSubmission(event) {
    event.preventDefault();
    props.onNewCoffeeItemCreation({
      origin: event.target.origin.value,
      name: event.target.name.value,
      price: event.target.price.value,
      roast: event.target.roast.value,
      id: v4()
    });
  
  }
}

AddSackForm.propTypes = {
  onNewCoffeeItemCreation: PropTypes.func
};

export default AddSackForm;
