import React from 'react'
import RestaurantDropdown from './RestaurantDropdown'
import { Link } from "react-router-dom";

class NavBar extends React.Component {

  render(){
    return(
        <div style={{backgroundColor: "yellow"}}>
          <h1>This is my NavBar</h1>
          <Link to="/newitem">New Item</Link>
          <RestaurantDropdown
            items={this.props.items}
            selectRestaurant={this.props.selectRestaurant}
            restaurant={this.props.restaurant}
            restaurants={this.props.restaurants}/>
        </div>
    )
  }
}

export default NavBar
