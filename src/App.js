import React from 'react';
import './App.css';
import ReactDOM from 'react-dom';
import { Switch, Route, withRouter } from 'react-router-dom'
import ItemsContainer from './components/ItemsContainer';
import NavBar from './components/NavBar'
import AllergenCheckboxes from './components/AllergenCheckboxes.js'
import _ from 'lodash'
import HomePage from './components/HomePage'
import NewItem from './components/NewItem'

class App extends React.Component {
  state = {
    items: [],
    checkedAllergens: [],
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

  showAllergenItems = () => {

  }


  handleAllergenCheckboxes = (e) => {
    let newCheckedAllergen = e.target.innerText
    if (this.state.checkedAllergens.includes(newCheckedAllergen)) {
       let newState = this.state.checkedAllergens.filter(item => {
         return item !== newCheckedAllergen
       })
       this.setState(prevState => {
         return {checkedAllergens: newState}
       })
    }
    this.setState(prevState => {
      return {checkedAllergens: [...prevState.checkedAllergens, newCheckedAllergen]}
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
        <NavBar items={this.state.items} selectRestaurant={this.selectRestaurant}/>
        <Route exact path="/" render={ () => <HomePage />}/>
        {this.state.restaurant === "" ? null : <AllergenCheckboxes itemsOnMenu={this.itemsOnMenu()} handleAllergenCheckboxes={this.handleAllergenCheckboxes}/>}
        <Route path="/" render={()=> <ItemsContainer itemsOnMenu={this.itemsOnMenu()} allergenItems={this.state.allergenItems} />}/>
        <Route path="/newitem" component={NewItem}/>
      </div>
    );
  }
}

export default withRouter(App);
