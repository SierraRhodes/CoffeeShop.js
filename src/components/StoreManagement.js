import React from 'react';
import AddSackForm from './AddSackForm';
import CoffeeList from './CoffeeList';
import CoffeeDetails from './CoffeeDetails';
import EditAddSackForm from './EditAddSackForm';


class StoreManagement extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      formVisibleOnPage: false,
      mainCoffeeList: [],
      selectedCoffeeItem: null,
      editing: false

    };
  }

  handleClick = () => {
    console.log("handleClick triggered"); 
    if (this.state.selectedCoffeeItem != null) {
      this.setState({
        formVisibleOnPage: false,
        selectedCoffeeItem: null,
        editing: false
      });
    } else {
      this.setState(prevState => ({
        formVisibleOnPage: !prevState.formVisibleOnPage,
      }));
    }
  }

  handleAddingNewCoffeeItemToList = (newCoffeeItem) => {
  const newMainCoffeeList = this.state.mainCoffeeList.concat(newCoffeeItem);
  this.setState({
    mainCoffeeList: newMainCoffeeList,
    formVisibleOnPage: false
  });
  }

  handleChangingSelectedCoffeeItem = (id) => {
    const selectedCoffeeItem = this.state.mainCoffeeList.filter(coffeeItem => coffeeItem.id === id)[0];
    this.setState({selectedCoffeeItem: selectedCoffeeItem});
  } 

  handleDeletingCoffeeItem = (id) => {
    const newMainCoffeeList = this.state.mainCoffeeList.filter(coffeeItem => coffeeItem.id !== id);
    this.setState({
      mainCoffeeList: newMainCoffeeList,
      selectedCoffeeItem: null
    });
  }

  handleEditClick = () => {
    this.setState({editing: true});
  }

  handleEditingCoffeeItemInList = (coffeeItemToEdit) => {
    const editedMainCoffeeList = this.state.mainCoffeeList
    .filter(coffeeItem => coffeeItem.id !== this.state.selectedCoffeeItem.id)
    .concat(coffeeItemToEdit);
    this.setState({
      mainCoffeeList: editedMainCoffeeList,
      editing: false,
      selectedCoffeeItem: null
    });
  }

  render(){
    let currentlyVisibleState = null;
    let buttonText = null;

    if (this.state.editing) {
      currentlyVisibleState = <EditAddSackForm coffeeItem = {this.state.selectedCoffeeItem} onEditCoffeeItem = {this.handleEditingCoffeeItemInList}/>
      buttonText= "Return to Coffee List";
    } else if (this.state.selectedCoffeeItem != null) {
      currentlyVisibleState = <CoffeeDetails coffeeItem= {this.state.selectedCoffeeItem} onClickingDelete = {this.handleDeletingCoffeeItem} onClickingEdit = {this.handleEditClick} />
      buttonText = "Return to Coffee List";
    } else if (this.state.formVisibleOnPage) {
      currentlyVisibleState = <AddSackForm onNewCoffeeItemCreation={this.handleAddingNewCoffeeItemToList} />;
      buttonText = "Return to Coffee List";
    } else {
      currentlyVisibleState  = <CoffeeList coffeeList={this.state.mainCoffeeList} onCoffeeItemSelection={this.handleChangingSelectedCoffeeItem}/>;
      buttonText = "Add New Coffee";
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