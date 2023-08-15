import React from "react";
import PropTypes from "prop-types";

function CoffeeDetails(props){
  const { coffeeItem, onClickingDelete, onClickingSell } = props;
  
  return (
    <React.Fragment>
      <h1>Coffee Details</h1>
      <h3><em>Origin: {coffeeItem.origin} - Name: {coffeeItem.name}</em></h3>
      <h3><em>Price: ${coffeeItem.price} - Roast: {coffeeItem.roast}</em></h3>
      <h3>Inventory: {coffeeItem.quantity}</h3>
      <button onClick={()=> props.onClickingEdit(coffeeItem.id)}>Update Coffee Item</button>
      <button onClick={()=> onClickingDelete (coffeeItem.id) }>Delete Coffee Item</button>
      <button onClick={ () => onClickingSell(coffeeItem)}disabled={coffeeItem <= 0}>Sell Coffee</button>
      <hr/>
    </React.Fragment>
  );
}

CoffeeDetails.propTypes = {
  coffeeItem: PropTypes.object,
  onClickingDelete: PropTypes.func,
  onClickingEdit: PropTypes.func
};

export default CoffeeDetails;