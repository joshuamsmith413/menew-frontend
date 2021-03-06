import React from 'react'

import { withRouter } from 'react-router-dom';
import { Button, Form } from 'semantic-ui-react'


class NewItem extends React.Component {

  state = {
    fields: {
      name: "",
      oneliner: "",
      description: "",
      section: "",
      picture: "",
      restaurant: "",
      lunch: "",
      dinner: "",
    },
    allergens: []
  }

  handleChange = e => {
    let newFields = {...this.state.fields, [e.target.name]: e.target.value}
    let newAllergen = null
      if (e.target.name === "allergens") {
        newAllergen = e.target.value
      }
    this.setState({fields: newFields, allergens: [...this.state.allergens, newAllergen]})
  }

  handleSubmit = e => {
    e.preventDefault()
    e.target.reset()
    fetch(`https://menew-api.herokuapp.com/items`, {
      method: "POST",
      headers: {
        'Content-Type': 'application/json',
        Accept: 'application/json'
      },
      body: JSON.stringify(this.state)
    })
    .then(r => r.json())
    .then(() => this.props.history.push("/"))
  }

  renderAllergenCheckboxes = () => {
    return this.props.allergens.map(allergen => <span> <input type="checkbox" onChange={this.handleChange} name="allergens" value={allergen.name}/> {allergen.name} </span>)
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
          <label>Select a Restaurant</label>
            <select name="restaurant" onChange={this.handleChange}>
              {this.props.restaurants.map(restaurant => {
                return <option value={restaurant.name}>{restaurant.name}</option>
              })}
            </select>
          <label>Meal Peiod</label><br/>
            <input type="checkbox" onChange={this.handleChange} name="lunch" value="lunch"/> Lunch <span></span>
            <input type="checkbox" onChange={this.handleChange} name="dinner" value="dinner"/> Dinner <span></span><br/>
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
          <label>Allergens</label><br/>
            <span>
              {this.renderAllergenCheckboxes()}
            </span><br/>
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
            /><br/>
          <Button type='Submit'>Submit</Button>
        </Form>
        </div>
      </div>
    )
  }
}
export default withRouter(NewItem)
