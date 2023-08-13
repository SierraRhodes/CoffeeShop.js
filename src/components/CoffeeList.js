import React from "react";
import CoffeeItem from "./CoffeeItem";
import PropTypes from "prop-types";

function CoffeeList(props){
  return (
    <React.Fragment>
      {props.coffeeList.map((coffeeItem) => 
        <CoffeeItem 
          whenCoffeeItemClicked = { props.onCoffeeItemSelection }
          // onSellCoffee={props.onSellCoffee}
          origin={coffeeItem.origin}
          name={coffeeItem.name}
          price={coffeeItem.price}
          roast={coffeeItem.roast}
          quantity={coffeeItem.quantity} 
          id={coffeeItem.id}
          key={coffeeItem.id} />
      )}
    </React.Fragment>
    
  );
}

CoffeeList.propTypes = {
  coffeeList: PropTypes.array,
  onCoffeeItemSelection: PropTypes.func,
  
};

export default CoffeeList;