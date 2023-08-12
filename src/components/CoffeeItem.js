import React from "react";
import PropTypes from "prop-types";

function CoffeeItem(props){
  return (
    <React.Fragment>
      <h3>{props.origin} - {props.name}</h3>
      <p><em>{props.price} - {props.roast}</em></p>
      <hr/>
    </React.Fragment>
  );
}

CoffeeItem.propTypes = {
  names: PropTypes.string,
  location: PropTypes.string,
  issue: PropTypes.string
};

export default CoffeeItem;