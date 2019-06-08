import React from 'react'
import ReactDOM from 'react-dom';
import AllergenDropDown from './AllergenDropDown'

class NavBar extends React.Component {

  render(){
    return(
      <div style={{backgroundColor: "yellow"}}>
        <h1>This is my NavBar</h1>
        <AllergenDropDown items={this.props.items} showAllergenItems={this.props.showAllergenItems}/>
      </div>
    )
  }
}

export default NavBar
