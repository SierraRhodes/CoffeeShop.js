import React from 'react';
import AddSackForm from './AddSackForm';
import CoffeeList from './CoffeeList';

class StoreManagement extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      formVisibleOnPage: false
      
    };
  }

  handleClick = () => {
    this.setState(prevState => ({
      formVisibleOnPage: !prevState.formVisibleOnPage
    }));
  }

  render(){
    let currentlyVisibleState = null;
    let addCoffeeButton = null;
    let buttonText = null;

    if (this.state.formVisibleOnPage) {
      currentlyVisibleState = <AddSackForm />
      buttonText = "Return to Menu";
    } else {
      currentlyVisibleState = <CoffeeList />
      addCoffeeButton = <button onClick={this.handleClick}>Add Coffee</button>
      buttonText = "Add Coffee";
    }
    return (
      <React.Fragment>
        {currentlyVisibleState}
        <button onClick={this.handleClick}>{buttonText}</button>
      </React.Fragment>
    );
  }

}

export default StoreManagement;