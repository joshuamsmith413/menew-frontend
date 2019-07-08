import React from 'react';
import './App.css';
import ReactDOM from 'react-dom';
import { Switch, Route, withRouter } from 'react-router-dom'
import ItemsContainer from './components/ItemsContainer';
import NavBar from './components/NavBar'
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
    allergens: [],
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
            <Route exact path='/EditItem/' exact render={() =>
              <EditItem
              restaurants={this.state.restaurants}
              allergens={this.state.allergens}
              />}/>
            <Route path="/newitem" exact render={() =>
                <NewItem
              allergens={this.state.allergens}
              restaurants={this.state.restaurants}
            />}/>
            <Route path='/:name' render={(routerProps) => {
              if (!this.state.selectedRestaurant) {
                return null
              }
              return <ItemsContainer
                restaurant={this.state.selectedRestaurant}
                menus={this.state.menus}
                handleDelete={this.handleDelete}
                />}}
                />
          </Switch>
      </div>
    );
  }
}

export default withRouter(App);
