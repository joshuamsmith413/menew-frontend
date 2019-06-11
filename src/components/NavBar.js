import React from 'react'
import RestaurantDropdown from './RestaurantDropdown'
import { BrowserRouter as Router, Route, Link } from "react-router-dom";

class NavBar extends React.Component {

  render(){
    return(
      <Router>
        <div style={{backgroundColor: "yellow"}}>
          <h1>This is my NavBar</h1>
          <Link to="/newitem">New Item</Link>
          <RestaurantDropdown items={this.props.items} selectRestaurant={this.props.selectRestaurant} restaurant={this.props.restaurant}/>

        </div>
      </Router>
    )
  }
}

export default NavBar
