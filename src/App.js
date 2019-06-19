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
import EditItem from './components/EditItem'
import { BrowserRouter } from 'react-router-dom';

class App extends React.Component {
  state = {
    items: [],
    menus: [],
    restaurants: [],
    checkedAllergens: [],
    allergenItems: [],
    selectedRestaurant: null
  }

  componentDidMount() {
   fetch('http://localhost:3000/items')
   .then(r => r.json())
   .then(data => {
     this.setState({
       items: data
     })
   })
   fetch('http://localhost:3000/restaurants')
   .then(r => r.json())
   .then(data => {
     this.setState({
       restaurants: data
     })
   })
   fetch('http://localhost:3000/allergens')
   .then(r => r.json())
   .then(data => {
     this.setState({
      allergens: data
     })
   })
  }

  handleAllergenCheckboxes = (allergen) => {
    let arrayOfAllergens = this.state.checkedAllergens
    if (this.state.checkedAllergens.includes(allergen)) {
      let indexToRemove = arrayOfAllergens.indexOf(allergen)
      let newArrayForState = arrayOfAllergens.splice(indexToRemove, ++indexToRemove)
      this.setState({
        checkedAllergens: arrayOfAllergens
      })
    } else {
      this.setState(prevState => {
        return {checkedAllergens: [...prevState.checkedAllergens, allergen]}
      })
    }
  }

  fetchRestaurant = (routerProps) => {
    let saveRestaurant = this.state.restaurants.filter(restaurant => restaurant.name === routerProps.match.params.name)
    this.setState({
      selectedRestaurant: saveRestaurant
    })
  }

  selectRestaurant = (restaurant) => {
    this.setState(() => {
      return {
        selectedRestaurant: restaurant,
        menus: restaurant.menus
      }
    })
    this.props.history.push(restaurant.name)
  }

  handleDelete = (id) => {
    fetch(`http://localhost:3000/items/${id}`, {
      method: "DELETE",
        headers: {
         'Content-Type': 'application/json'
        }
      }
    )
    fetch('http://localhost:3000/restaurants')
    .then(r => r.json())
    .then(data => {
      this.setState({
        restaurants: data
      })
    })
    .then(() => this.props.history.push("/"))
  }

  // {this.state.restaurant === "" ? null : <AllergenCheckboxes itemsOnMenu={this.itemsOnMenu()} handleAllergenCheckboxes={this.handleAllergenCheckboxes}/>}
  render() {
    return (
      <div className="App">
        <NavBar
          items={this.state.items}
          selectRestaurant={this.selectRestaurant}
          restaurants={this.state.restaurants}/>

          <Switch>
            <Route exact path="/" component={HomePage}/>
            <Route exact path='/EditItem/' component={EditItem}/>
            <Route path="/newitem" exact render={() =>
            <NewItem
              menus ={this.state.menus}
              restaurants={this.state.restaurants}
              allergens={this.state.allergens}
            />}/>
            <Route path='/:name' render={(routerProps) => {
              if (!this.state.selectedRestaurant) {
                return null
              }
              return <ItemsContainer
                restaurant={this.state.selectedRestaurant} handleAllergenCheckboxes={this.handleAllergenCheckboxes}
                menus={this.state.menus}
                checkedAllergens={this.state.checkedAllergens}
                handleDelete={this.handleDelete}
                />}}
                />
          </Switch>
      </div>
    );
  }
}

export default withRouter(App);
