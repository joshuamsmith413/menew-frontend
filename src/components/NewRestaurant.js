import React from 'react'
import { Button, Modal, Form } from 'semantic-ui-react'

class NewRestaurant extends React.Component {
  state = {
    name: ""
  }

    handleChange = e => {
      console.log(e.target.name)
      this.setState({name: e.target.value})
    }

    handleSubmit = e => {
      e.preventDefault()
      e.target.reset()
      fetch(`${process.env.API}restaurants`, {
        method: "POST",
        headers: {
          'Content-Type': 'application/json',
          Accept: 'application/json'
        },
        body: JSON.stringify(this.state.name)
      })
      .then(r => r.json())
    }

    render() {
    return (
      <Modal trigger={<p> New Restaurant</p>}>
        <Modal.Header>Create Restaurant</Modal.Header>
        <Modal.Content image>
          <Form onSubmit={this.handleSubmit}>
            <label>Name of Restaurant</label>
            <input
              name='name'
              placeholder='Name'
              onChange={this.handleChange}
              value={this.state.name}
            />
            <Button type='Submit'>Submit</Button>
          </Form>
        </Modal.Content>
      </Modal>
    )
  }
}


export default NewRestaurant
