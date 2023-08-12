import React from "react";



function Header(){
    const myStyledComponentStyles = {
      backgroundColor: '#fcf0f1',
      fontFamily: 'sans-serif',
      paddingTop: '50px'
    }
  return (
    <React.Fragment>
      <div style={myStyledComponentStyles}>
    <h1> Belle's Coffee Shop</h1>
    </div>
    </React.Fragment>
  );
}
export default Header;