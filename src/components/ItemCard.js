import React from 'react'
import { Card, Image } from 'semantic-ui-react'
import CardModal from './CardModal'
import { withRouter } from 'react-router-dom';


class ItemCard extends React.Component {
  render() {
    return(
      <Card key={this.props.item.id}>
        <Image src={this.props.item.picture}  gravity="faces" crop="fill" wrapped ui={false} />
        <Card.Content>
          <Card.Header>{this.props.item.name}</Card.Header>
          <Card.Meta>
            <span>
              {this.props.item.oneliner ? this.props.item.oneliner : this.props.item.section}</span>
            <div>
            <CardModal item={this.props.item} handleDelete={this.props.handleDelete}/>
            </div>
          </Card.Meta>
        </Card.Content>
      </Card>
    )
  }
}


export default withRouter(ItemCard);
