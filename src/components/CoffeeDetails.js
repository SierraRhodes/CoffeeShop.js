import React from "react";
import PropTypes from "prop-types";

function CoffeeDetails(props){
  const { coffeeItem, onClickingDelete, onClickingSell } = props;
  
  return (
    <React.Fragment>
      <h1>Coffee Details</h1>
      <h3>{coffeeItem.origin} - {coffeeItem.name}</h3>
      <p><em>{coffeeItem.price} - {coffeeItem.roast}</em></p>
      <h3>Inventory: {coffeeItem.quantity}</h3>
      <button onClick={()=> props.onClickingEdit(coffeeItem.id)}>Update Coffee Item</button>
      <button onClick={()=> onClickingDelete (coffeeItem.id) }>Delete Coffee Item</button>
      <button onClick={ () => onClickingSell(coffeeItem) }>Buy Coffee</button>
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