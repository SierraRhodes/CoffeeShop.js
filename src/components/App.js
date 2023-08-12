import React from "react";
import Header from "./Header";
import StoreManagement from "./StoreManagement";
import CoffeeList from "./CoffeeList";

function App() {
  return (
  <React.Fragment>
    <Header />
    <CoffeeList />
    <StoreManagement />
  </React.Fragment>
  );
}

export default App;
