import React from "react";
import Button from "@material-ui/core/Button";
import Menu from "@material-ui/core/Menu";
import MenuItem from "@material-ui/core/MenuItem";

export default function RestaurantDropdown(props) {
  const [anchorEl, setAnchorEl] = React.useState(null);

  const onlyUnique = (value, index, self) => {
    return self.indexOf(value) === index;
  }

  const findUniqueRestaurants = () => {
    let fullRestaurantList = []
    props.items.forEach(item => {
      return item.restaurants.forEach(restaurant => {
        fullRestaurantList.push(restaurant.name)
      })
    })
    return fullRestaurantList.filter(onlyUnique)
  }


  function handleClick(event) {
    setAnchorEl(event.currentTarget);
  }

  function handleClose() {
    setAnchorEl(null);
  }

  return (
    <div>
      <Button
        aria-controls="simple-menu"
        aria-haspopup="true"
        onClick={handleClick}
      >
        Select a Restaurant
      </Button>
      <Menu
        id="simple-menu"
        anchorEl={anchorEl}
        keepMounted
        open={Boolean(anchorEl)}
        onClose={handleClose}
      >
        {findUniqueRestaurants().map(restaurant => {
          return <MenuItem onClick={props.selectRestaurant} key={restaurant}>{restaurant}</MenuItem>
        })}
      </Menu>
    </div>
  );
}
