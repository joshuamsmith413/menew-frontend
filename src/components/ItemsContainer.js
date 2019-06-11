import React from 'react'
import { Card } from 'semantic-ui-react'
import ItemCard from './ItemCard';
import { withRouter } from 'react-router-dom';


class ItemsContainer extends React.Component {

  renderAllItems = () => {
    return this.props.itemsOnMenu.map(item => <ItemCard key={item.id} item={item} />)
  }

  renderAllergenItems = () => {
    return this.props.allergenItems.map(item => <ItemCard key={item.id} item={item} />)
  }

  render() {
  return (
    <Card.Group itemsPerRow={3}>
      {this.renderAllItems()}
    </Card.Group>
    )
  }
}

export default withRouter(ItemsContainer)
