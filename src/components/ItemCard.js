import React from 'react'
import { Card, Icon, Image } from 'semantic-ui-react'
import { Button, Header, Modal } from 'semantic-ui-react'
import CardModal from './CardModal'
import { withRouter } from 'react-router-dom';


const ItemCard = (props) => (
  <Card>
    <Image src={props.item.picture} width="250" height="250" gravity="faces" crop="fill" wrapped ui={false} />
    <Card.Content>
      <Card.Header>{props.item.name}</Card.Header>
      <Card.Meta>
        <span className='date'>
          {props.item.oneliner ? props.item.oneliner : props.item.section}</span>
        <div>
        <CardModal item={props.item} />
        </div>
      </Card.Meta>
    </Card.Content>
  </Card>
)

export default withRouter(ItemCard)
