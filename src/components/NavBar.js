import React from 'react'
import RestaurantDropdown from './RestaurantDropdown'
import NewRestaurant from './NewRestaurant'
import { Link } from "react-router-dom";

class NavBar extends React.Component {

  // <RestaurantDropdown
  //   items={this.props.items}
  //   selectRestaurant={this.props.selectRestaurant}
  //   restaurant={this.props.restaurant}
  //   restaurants={this.props.restaurants}/>

  render(){
    return(
        <div className="navbar">
          <Link to="/"><h1 className="nav-title">Menew</h1></Link>
          <span>
            <Link to="/newitem"> New Item </Link>
            <NewRestaurant />
        </span>
        </div>
    )
  }
}

export default NavBar
