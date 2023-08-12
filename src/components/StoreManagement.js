import React from 'react';
import AddSackForm from './AddSackForm';
import CoffeeList from './CoffeeList';
import CoffeeDetails from './CoffeeDetails';

class StoreManagement extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      formVisibleOnPage: false,
      mainCoffeeList: [],
      selectedcoffeeItem: null

    };
  }

  handleClick = () => {
    this.setState(prevState => ({
      formVisibleOnPage: !prevState.formVisibleOnPage
    }));
  }

  handleAddingNewCoffeeItemToList = (newCoffeeItem) => {
    console.log("Adding new coffee item:", newCoffeeItem);
  const newMainCoffeeList = this.state.mainCoffeeList.concat(newCoffeeItem);
  console.log("New main coffee list:", newMainCoffeeList);
  this.setState({
    mainCoffeeList: newMainCoffeeList,
    formVisibleOnPage: false
  });
  }

  handleChangingSelectedCoffeeItem = (id) => {
    const selectedCoffeeItem = this.state.mainCoffeeList.filter(coffeeItem => coffeeItem.id === id)[0];
    this.setState({selectedCoffeeItem: selectedCoffeeItem});
  } 

  render(){
    let currentlyVisibleState = null;
    let buttonText = null;

    if (this.state.formVisibleOnPage) {
      currentlyVisibleState = <AddSackForm onNewCoffeeItemCreation={this.handleAddingNewCoffeeItemToList} />
      buttonText = "Return to Menu";
    } else {
      currentlyVisibleState = <CoffeeList coffeeList={this.state.mainCoffeeList} />
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