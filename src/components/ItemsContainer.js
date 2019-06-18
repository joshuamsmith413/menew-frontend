import React from 'react'
import { Card } from 'semantic-ui-react'
import ItemCard from './ItemCard';
import { Link } from 'react-router-dom';
import { withRouter } from 'react-router-dom';
import AllergenCheckboxes from './AllergenCheckboxes'



class ItemsContainer extends React.Component {

  findItemsWithAllergen = () => {
    let itemsWithAllergen = []
    this.props.restaurant.items.forEach(item => {
      let counter = 0
      return item.allergens.forEach(allergen => {
        if (this.props.checkedAllergens.includes(allergen)) {
          return counter += 1
        }
      })
      if (counter === this.props.checkedAllergens.length) {
        itemsWithAllergen.push(item)
      }
    })
    return itemsWithAllergen
  }

  getLunch = () => {
    let lunch = []
    this.props.restaurant.items.forEach(item => {
      return item.menus.forEach(menu => {
        if (menu.meal_period.includes("lunch")) {
          return lunch.push(item)
        }
      })
    })
    let uniq = new Set(lunch.map(e => JSON.stringify(e)));
    let res = Array.from(uniq).map(e => JSON.parse(e));
    return res
  }

  getDinner = () => {
    let dinner = []
    this.props.restaurant.items.forEach(item => {
      return item.menus.forEach(menu => {
        if (menu.meal_period.includes("dinner")) {
          return dinner.push(item)
        }
      })
    })
    let uniq = new Set(dinner.map(e => JSON.stringify(e)));
    let res = Array.from(uniq).map(e => JSON.parse(e));
    return res
  }

  renderLunch = () => {
    return this.getLunch().map(item => <ItemCard key={item.id} item={item} />)
  }

  renderDinner = () => {
    return this.getDinner().map(item => <ItemCard key={item.id} item={item} />)
  }

  render() {


  return (
    <div style ={ { backgroundImage: "url(https://i.pinimg.com/originals/76/89/c5/7689c5513084cd3ae199cec4f9b84af3.jpg)", minHeight: "100vh", backgroundSize: "cover" } }>
      <div className="ItemsContainer">
        <div className="itemsToCenter">
        <h1>{this.props.restaurant.name}</h1>
        <AllergenCheckboxes items={this.props.restaurant.items} handleAllergenCheckboxes={this.props.handleAllergenCheckboxes} allergens={this.props.allergens} />
        {this.renderLunch().length > 0 ? <h3>Lunch</h3> : null}
        <Card.Group itemsPerRow={4}>
          {this.renderLunch()}
        </Card.Group>
          <h3>Dinner</h3>
        <Card.Group itemsPerRow={4}>
          {this.renderDinner()}
        </Card.Group>
      </div>
      </div>
    </div>
    )
  }
}

export default withRouter(ItemsContainer)
