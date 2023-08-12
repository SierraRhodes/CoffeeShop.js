import React from "react";
import CoffeeItem from "./CoffeeItem";
import PropTypes from "prop-types";

function CoffeeList(props){
  return (
    <React.Fragment>
      {props.coffeeList.map((coffeeItem) => // Loop through the list passed down from StoreManagement
        <CoffeeItem whenCoffeeItemClicked = { props.onCoffeeItemSelection }
          origin={coffeeItem.origin}
          name={coffeeItem.name}
          price={coffeeItem.price}
          roast={coffeeItem.roast}
          id={coffeeItem.id}
          key={coffeeItem.id} />
      )}
    </React.Fragment>
    
  );
}

CoffeeList.propTypes = {
  coffeeList: PropTypes.array,
  onCoffeeItemSelection: PropTypes.func
};

CoffeeList.defaultProps = {
  coffeeList: []
};
export default CoffeeList;