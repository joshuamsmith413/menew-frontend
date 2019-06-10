import React from 'react';
import './App.css';
import ReactDOM from 'react-dom';
import { Switch, Route, withRouter } from 'react-router-dom'
import ItemsContainer from './components/ItemsContainer';
import NavBar from './components/NavBar'

class App extends React.Component {
  state = {
    items: [],
    allergenItems: [],
    restaurant: "",
    menu: "lunch"
  }

  componentDidMount() {
     fetch('http://localhost:3000/items')
     .then(r => r.json())
     .then(data => {
       this.setState({
         items: data
       })
     })

  }

  itemsOnMenu = () => {
    if (this.state.allergenItems.length > 0) {
    return this.state.allergenItems.filter(item => item.restaurants[0].name === this.state.restaurant)
  } else {
      return this.state.items.filter(item => item.restaurants[0].name === this.state.restaurant)
    }
  }

  showAllergenItems = (e) => {
    let allergenToMatch = e.target.value
    let itemsWithAllergen = []
    if (allergenToMatch === "Allergens") {
      this.setState({
        allergenItems: []
      })
    }
    this.state.items.forEach(item => {
      item.allergens.forEach(allergen => {
        if (allergen.name === allergenToMatch) {
          itemsWithAllergen.push(item)
        }
      })
    })
    this.setState({
      allergenItems: itemsWithAllergen
    })
  }

  selectRestaurant = (e) => {
    this.setState({
      restaurant: e.target.innerText
    })
  }

  render() {
    return (
      <div className="App">
        <NavBar items={this.state.items} showAllergenItems={this.showAllergenItems} selectRestaurant={this.selectRestaurant}/>
        <Route path="/" render={()=> <ItemsContainer items={this.itemsOnMenu()} allergenItems={this.state.allergenItems} />}/>
      </div>
    );
  }
}

export default withRouter(App);
