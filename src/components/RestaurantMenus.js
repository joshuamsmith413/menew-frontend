import React from 'react'
import ItemsContainer from './ItemsContainer'
import { Link } from "react-router-dom";
import Menu from "@material-ui/core/Menu";
import MenuItem from "@material-ui/core/MenuItem";

class RestaurantMenus extends React.Component {

  makeATag = () => {
    this.props.menus.map(menu => {
      return <option>{menu.name}</option>
    })
  }

  render(){

    return(
        <div>
          <form>
          <select>
            {this.makeATag}
          </select>
          <button>submit</button>
          </form>
        </div>
    )
  }
}

export default RestaurantMenus
