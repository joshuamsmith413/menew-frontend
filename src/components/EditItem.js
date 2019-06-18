import React from 'react'
import { Link } from "react-router-dom";
import { withRouter } from 'react-router-dom';
import { Button, Checkbox, Form } from 'semantic-ui-react'


class EditItem extends React.Component {

  item = this.props.location.state.item

  state = {
    fields: {
      id: this.item.id,
      name: this.item.name,
      oneliner: this.item.oneliner,
      description: this.item.description,
      section: this.item.section,
      picture: this.item.picture,
      restaurant: ""
    }
  }



  handleChange = e => {
    console.log(e.target.value)
    let newFields = {...this.state.fields, [e.target.name]: e.target.value}
    this.setState({fields: newFields})
  }

  handleSubmit = e => {
    e.preventDefault()
    e.target.reset()
    fetch(`http://localhost:3000/items/${this.props.location.state.item.id}`, {
      method: "PATCH",
      headers: {
        'Content-Type': 'application/json',
        Accept: 'application/json'
      },
      body: JSON.stringify(this.state.fields)
    })
    .then(r => r.json())
    .then(this.props.history.push("/"))
  }



  render() {

    return (
      <div style ={ { backgroundImage: "url(https://www.azamaraclubcruises.com/sites/default/files/heros/med-food-hero.jpg)", minHeight: "100vh", backgroundSize: "cover" } }>
        <div className="newItemDiv">
        <h1>Create a New Item</h1>
        <Form onSubmit={this.handleSubmit} className="newItemForm">
            <label>Name of Dish</label>
            <input
              name='name'
              placeholder='Name'
              onChange={this.handleChange}
              value={this.state.fields.name}
            />
            <label>Meal Peiod</label><br/>
              <input type="radio" name="Meal Period" value="lunch"/> Lunch <span></span>
              <input type="radio" name="Meal Period" value="dinner"/> Dinner <span></span><br/>
            <label>One Liner or Drop Line</label>
            <input
              name='oneliner'
              placeholder='Drop line'
              onChange={this.handleChange}
              value={this.state.fields.oneliner}
            />
          <label>Description</label>
            <Form.TextArea
              name='description'
              placeholder='Full Description Here'
              onChange={this.handleChange}
              value={this.state.fields.description}
              />
            <label>Section</label>
            <input
              name='section'
              placeholder='App, Main, Crudi, etc...'
              onChange={this.handleChange}
              value={this.state.fields.section}
            />
            <label>Picture</label>
            <input
              name='picture'
              placeholder='Enter Url'
              onChange={this.handleChange}
              value={this.state.fields.picture}
            />
          <br/>
          <Button type='Submit'>Submit</Button>
        </Form>
        </div>
      </div>
    )}
}
export default withRouter(EditItem)
