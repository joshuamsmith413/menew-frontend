// import React from 'react';
// import CssBaseline from '@material-ui/core/CssBaseline';
// import Typography from '@material-ui/core/Typography';
// import Container from '@material-ui/core/Container';
// import ItemCard from './ItemCard';
//
// function ItemsContainer(props) {
//   const renderAllItems = () => {
//     return props.items.map(item => <ItemCard item={item} />)
//   }
//
//   const renderAllergenItems = () => {
//     return props.allergenItems.map(item => <ItemCard item={item} />)
//   }
//
//   console.log(props.allergenItems)
//   return (
//     <React.Fragment>
//       <CssBaseline />
//       <Container fixed>
//         {props.allergenItems.length > 0 ? renderAllergenItems() : renderAllItems()}
//       </Container>
//     </React.Fragment>
//   );
// }
//
// export default ItemsContainer;


import React from 'react'
import { Card } from 'semantic-ui-react'
import ItemCard from './ItemCard';
import { withRouter } from 'react-router-dom';

const src = '/images/wireframe/image.png'

class ItemsContainer extends React.Component {
  renderAllItems = () => {
    return this.props.items.map(item => <ItemCard key={item.id} item={item} />)
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
