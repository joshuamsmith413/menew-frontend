import React from "react";
import Button from "@material-ui/core/Button";
import Menu from "@material-ui/core/Menu";
import MenuItem from "@material-ui/core/MenuItem";

export default function RestaurantDropdown(props) {
  const [anchorEl, setAnchorEl] = React.useState(null);

  function handleClick(event) {
    setAnchorEl(event.currentTarget);
  }

  function handleClose() {
    setAnchorEl(null);
  }

  return (
    <span className="RestaurantDropdown">
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
        onClick={handleClose}
      >
        {props.restaurants.map(restaurant => {
          return <MenuItem
            id={restaurant.id}
            onClick={() => props.selectRestaurant(restaurant)}
            key={restaurant.id}>
            {restaurant.name}
          </MenuItem>
        })}
      </Menu>
    </span>
  );
}
