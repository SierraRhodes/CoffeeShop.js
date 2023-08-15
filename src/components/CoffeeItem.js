import React from "react";
import PropTypes from "prop-types";

 function CoffeeItem(props){
//     const [sackCount, setSackCount] = useState(130);
  
//     const coffeeSack = () => {
//       if (sackCount > 0) {
//         setSackCount(sackCount - 1);

//       }
//     };
  return (
    <React.Fragment>
      <div onClick = {() => props.whenCoffeeItemClicked(props.id)}>
      <h3><em>Origin: {props.origin} - Name: {props.name}</em></h3>
      <h3><em>Price: ${props.price} - Roast: {props.roast}</em></h3>
      <p>Inventory: {props.quantity}</p>
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
  quantity: PropTypes.number, 
  whenCoffeeItemClicked: PropTypes.func,
  // onSellCoffee: PropTypes.func
};

export default CoffeeItem;