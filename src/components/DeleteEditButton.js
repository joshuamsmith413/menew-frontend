import React from 'react'
import { Button, Grid, Popup } from 'semantic-ui-react'
import { Link } from "react-router-dom";


const DeleteEditButton = (props) => {

  return (
  <Popup wide trigger={<Button content='Edit/Delete'/>} on='click'>
    <Grid divided columns='equal'>
      <Grid.Column>
        <Link to={{ pathname: '/EditItem', state: { item: props.item} }}>
        <Popup
          trigger={<Button color='blue' content='Edit' fluid />}
          content='Edit this item.'
          position='top center'
          size='tiny'
          inverted
        />
    </Link>
      </Grid.Column>
      <Grid.Column>
        <Popup
          trigger={<Button color='red' onClick={() => props.handleDelete(props.item.id)} content='Delete' fluid />}
          content='Delete this item.'
          position='top center'
          size='tiny'
          inverted

        />
      </Grid.Column>
    </Grid>
  </Popup>
  )
}
export default DeleteEditButton
