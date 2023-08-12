import React from "react";
import CoffeeItem from "./CoffeeItem";

function CoffeeList(){
  return (
    <React.Fragment>
    <CoffeeItem
        origin="3A"
        name="Lola"
        price= {7.25}
        roast= "light"/>
      <CoffeeItem
        location="4B"
        name="Ashley"
        price= {8.95}
        roast= "dark"/>
    </React.Fragment>
    
  );
}

export default CoffeeList;