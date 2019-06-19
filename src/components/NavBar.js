import React from 'react'
import RestaurantDropdown from './RestaurantDropdown'
import NewRestaurant from './NewRestaurant'
import { Link } from "react-router-dom";

class NavBar extends React.Component {

  render(){
    return(
        <div className="navbar" style={ {backgroundColor: "#e3f2fd"}}>
          <Link to="/"><h1 className="nav-title">Menew</h1></Link>
          <span>
            <NewRestaurant />
            <Link to="/newitem"> New Item </Link>
            <RestaurantDropdown
              items={this.props.items}
              selectRestaurant={this.props.selectRestaurant}
              restaurant={this.props.restaurant}
              restaurants={this.props.restaurants}/>
        </span>
        </div>
    )
  }
}

export default NavBar
