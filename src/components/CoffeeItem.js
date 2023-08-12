import React from "react";
import PropTypes from "prop-types";

function CoffeeItem(props){
  return (
    <React.Fragment>
      <div onClick = {() => props.whenCoffeeItemClicked(props.id)}>
      <h3>{props.origin} - {props.name}</h3>
      <p><em>{props.price} - {props.roast}</em></p>
      <hr/>
      </div>
    </React.Fragment>
  );
}

CoffeeItem.propTypes = {
  origin: PropTypes.string,
  name: PropTypes.string,
  price: PropTypes.string,
  roast: PropTypes.string,
  whenCoffeeItemClicked: PropTypes.func
};

export default CoffeeItem;