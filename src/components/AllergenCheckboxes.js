import React, { Component } from 'react'
import { Checkbox } from 'semantic-ui-react'

export default class AllergenCheckboxes extends React.Component {

  onlyUnique(value, index, self) {
    return self.indexOf(value) === index;
  }

  findUniqueAllergens = () => {
    let fullAllergenList = []
    this.props.items.forEach(item => {
     return item.allergens.forEach(allergen => fullAllergenList.push(allergen.name))
   })
    return fullAllergenList.filter(this.onlyUnique)
  }

  makeAllergenCheckboxes = () => {
    return this.findUniqueAllergens().map(allergen => {
      return <Checkbox key={allergen} value={allergen} label={allergen} onChange={this.props.handleAllergenCheckboxes} />
    })
  }

  render() {
    return (
      <div>
        {this.makeAllergenCheckboxes()}
      </div>
    )
  }
}
