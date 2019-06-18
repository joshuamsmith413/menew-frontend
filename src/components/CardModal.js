import React from 'react'
import { Button, Header, Image, Modal } from 'semantic-ui-react'
import ItemCard from './ItemCard.js'
import DeleteEditButton from './DeleteEditButton.js'
import { Link } from "react-router-dom";

const CardModal = (props) => {

  const renderAllergenList = () => {
    return props.item.allergens.map(allergen => {
      return <li>{allergen.name}</li>
    })
  }
  return (
  <Modal trigger={<Button basic color="red">More Info</Button>} key={props.item.id}>
    <Modal.Header>{props.item.name} ({props.item.section})</Modal.Header>
    <Modal.Content image>
      <Image wrapped size='medium' src={props.item.picture} />
      <Modal.Description>
        <Header>{props.item.oneliner}</Header>
        <h4>Description:</h4>
        <p>{props.item.description}</p>
        <h4>Allergens:</h4>
        <ul>{renderAllergenList()}</ul>
      </Modal.Description>
      <DeleteEditButton item={props.item}/>
    </Modal.Content>
  </Modal>
  )
}


export default CardModal
