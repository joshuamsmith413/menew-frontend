import React from 'react'
import ReactDOM from 'react-dom';
import AllergenDropDown from './AllergenDropDown'
import RestaurantDropdown from './RestaurantDropdown'

class NavBar extends React.Component {

  render(){
    return(
      <div style={{backgroundColor: "yellow"}}>
        <h1>This is my NavBar</h1>
        <span>
          <AllergenDropDown items={this.props.items} showAllergenItems={this.props.showAllergenItems}/>
          <RestaurantDropdown items={this.props.items} selectRestaurant={this.props.selectRestaurant} restaurant={this.props.restaurant}/>
        </span>
      </div>
    )
  }
}

export default NavBar
