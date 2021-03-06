import React from 'react'
import { Card } from 'semantic-ui-react'
import ItemCard from './ItemCard';
import { withRouter } from 'react-router-dom';
import { Link } from "react-router-dom";




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
    return this.getLunch().map(item => <ItemCard key={item.id} item={item} handleDelete={this.props.handleDelete} />)
  }

  renderDinner = () => {
    return this.getDinner().map(item => <ItemCard key={item.id} item={item} handleDelete={this.props.handleDelete} />)
  }

  render() {
    return (
      <div style ={ { backgroundImage: "url(https://i.pinimg.com/originals/76/89/c5/7689c5513084cd3ae199cec4f9b84af3.jpg)", minHeight: "100vh", backgroundSize: "cover" } }>
        <div className="ItemsContainer">
          <div className="itemsToCenter">
          <h1>{this.props.restaurant.name}</h1>
          {this.renderLunch().length > 0 ? <h3>Lunch</h3> : null}
          <Card.Group itemsPerRow={4}>
            {this.renderLunch()}
          </Card.Group>
            <h3>Dinner</h3>
          <Card.Group itemsPerRow={4}>
            {this.renderDinner()}
          </Card.Group>
          <Link to="/newitem"> New Item </Link>
        </div>
        </div>
      </div>
      )
  }
}

export default withRouter(ItemsContainer)
