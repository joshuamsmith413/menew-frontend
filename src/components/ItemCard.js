import React from 'react'
import { Card, Icon, Image } from 'semantic-ui-react'

const ItemCard = (props) => (
  <Card>
    <Image src={props.item.picture} width="250" height="250" gravity="faces" crop="fill" wrapped ui={false} />
    <Card.Content>
      <Card.Header>{props.item.name}</Card.Header>
      <Card.Meta>
        <span className='date'>{props.item.section}</span>
      </Card.Meta>
    </Card.Content>
  </Card>
)

export default ItemCard
