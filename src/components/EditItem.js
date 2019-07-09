import React from 'react'
import { withRouter } from 'react-router-dom';
import { Button, Form } from 'semantic-ui-react'


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
      restaurant: this.item.restaurants[0].name,
      lunch: "",
      dinner: ""
    },
    allergens: []
  }



  handleChange = e => {
    console.log(this.state)
    let newFields = {...this.state.fields, [e.target.name]: e.target.value}
    let newAllergen = null
      if (e.target.name === "allergens") {
        newAllergen = e.target.value
      }
    this.setState( prevState => {
      return {
        fields: newFields, allergens: [...this.state.allergens, newAllergen]
        }
    })
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
      body: JSON.stringify(this.state)
    })
    .then(r => r.json())
    .then(this.props.history.push(`/${this.item.restaurants[0].name}`))
  }


  render() {

    return (
      <div style ={ { backgroundImage: "url(https://www.sanziorestaurant.co.uk/wp-content/uploads/2014/07/photodune-6761938-food-background-on-dark-slate-m.jpg)", minHeight: "100vh", backgroundSize: "cover" } }>
        <div className="newItemDiv">
        <h1>{`Edit ${this.state.fields.name}`}</h1>
        <Form onSubmit={this.handleSubmit} className="newItemForm">
          <label>Name of Dish</label>
            <input
              name='name'
              placeholder='Name'
              onChange={this.handleChange}
              value={this.state.fields.name}
            />
          <label>Restaurant</label>
            <input
              name='restaurant'
              placeholder='restaurant name'
              onChange={this.handleChange}
              value={this.state.fields.restaurant}
            />
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
              {this.props.allergens.map(allergen => <span><input type="checkbox" onChange={this.handleChange} name="allergens" value={allergen.name}/> {allergen.name} </span>)}
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
            />
          <br/>
          <Button type='Submit'>Submit</Button>
        </Form>
        </div>
      </div>
    )}
}
export default withRouter(EditItem)
