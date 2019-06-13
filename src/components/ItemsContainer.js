import React from 'react'
import { Card } from 'semantic-ui-react'
import ItemCard from './ItemCard';
import { Link } from 'react-router-dom';
import { withRouter } from 'react-router-dom';
import AllergenCheckboxes from './AllergenCheckboxes'
import RestaurantMenus from './RestaurantMenus'


class ItemsContainer extends React.Component {

  getLunch = () => {
    let lunch = []
    this.props.restaurant.items.forEach(item => {
      return item.menus.forEach(menu => {
        if (menu.meal_period.includes("lunch")) {
          return lunch.push(item)
        }
      })
    })
    return lunch
  }

  getDinner = () => {
    let dinnerToRender = []
    let dinner = []
    this.props.restaurant.items.forEach(item => {
      return item.menus.forEach(menu => {
        if (menu.meal_period.includes("dinner")) {
          return dinner.push(item)
        }
      })
    })
    dinner.forEach(item1 => {
      dinner.forEach(item2 => {
        if(item1.name == item2.name) {
            return null
        } else {
          dinnerToRender.push(item1)
        }
      })
    })
    return dinner
  }

  renderLunch = () => {
    return this.getLunch().map(item => <ItemCard key={item.id} item={item} />)
  }

  renderDinner = () => {
    return this.getDinner().map(item => <ItemCard key={item.id} item={item} />)
  }



  render() {
    console.log(this.props.restaurant)

  return (
    <div>
      <h1>{this.props.restaurant.name}</h1>
      <h3>{this.props.restaurant.name} Menus</h3>
      <RestaurantMenus menus={this.props.menus}/>
      <AllergenCheckboxes items={this.props.restaurant.items} handleAllergenCheckboxes={this.props.handleAllergenCheckboxes} allergens={this.props.allergens} />
      <h3>Lunch</h3>
    <Card.Group itemsPerRow={3}>
      {this.renderLunch()}
    </Card.Group>
      <h3>Dinner</h3>
    <Card.Group itemsPerRow={3}>
      {this.renderDinner()}
    </Card.Group>
    </div>
    )
  }
}

export default withRouter(ItemsContainer)
