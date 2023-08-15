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
      <h3>{props.origin} - {props.name}</h3>
      <p><em>{props.price} - {props.roast}</em></p>
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