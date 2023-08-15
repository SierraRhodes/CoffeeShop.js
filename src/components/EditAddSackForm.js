import React from "react";
import ReusableForm from "./ReusableForm";
import PropTypes from "prop-types";

function EditAddSackForm (props) {
  const { coffeeItem } = props;

  function handleEditCoffeeItemFormSubmission(event) {
    event.preventDefault();
    props.onEditCoffeeItem({origin: event.target.origin.value, name: event.target.name.value, price: event.target.price.value, roast: event.target.roast.value, quantity: event.target.quantity.value, id: coffeeItem.id});
  }
  return (
    <React.Fragment>
      <ReusableForm 
        formSubmissionHandler={handleEditCoffeeItemFormSubmission}
        buttonText="Update Coffee" />
    </React.Fragment>
  );
}

EditAddSackForm.propTypes = {
  coffeeItem: PropTypes.object,
  onEditCoffeeItem: PropTypes.func
};

export default EditAddSackForm;