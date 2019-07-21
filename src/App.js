import React from 'react';
import './App.css';
import { Switch, Route, withRouter } from 'react-router-dom'
import ItemsContainer from './components/ItemsContainer';
import NavBar from './components/NavBar'
import HomePage from './components/HomePage'
import NewItem from './components/NewItem'

class App extends React.Component {
  state = {
    items: [],
    menus: [],
    restaurants: [],
    allergens: [],
    selectedRestaurant: null
  }



  componentDidMount() {
   fetch(`https://menew-api.herokuapp.com/items`)
   .then(r => r.json())
   .then(data => {
     this.setState({
       items: data
     })
   })
   fetch(`https://menew-api.herokuapp.com/restaurants`)
   .then(r => r.json())
   .then(data => {
     this.setState({
       restaurants: data
     })
   })
   fetch(`https://menew-api.herokuapp.com/allergens`)
   .then(r => r.json())
   .then(data => {
     this.setState({
      allergens: data
     })
   })
  }

  restaurantRefresh = () => {
    const restId = this.props.location.search.split('')[1]
    if (this.state.selectedRestaurant === null && this.props.location.pathname !== "/") {
      fetch(`https://menew-api.herokuapp.com/restaurants/${restId}`)
      .then(r => r.json())
      .then(data => {
        this.setState({
          selectedRestaurant: data
        })
      })
    }
  }

  selectRestaurant = (restaurant) => {
    this.setState(() => {
      return {
        selectedRestaurant: restaurant,
        menus: restaurant.menus
      }
    })
    this.props.history.push({pathname: `/${restaurant.name}`, search: `${restaurant.id}`})
  }

  handleDelete = (id) => {
    fetch(`https://menew-api.herokuapp.com/items/${id}`, {
      method: "DELETE",
        headers: {
         'Content-Type': 'application/json'
        }
      }
    )
    fetch(`https://menew-api.herokuapp.com/restaurants`)
    .then(r => r.json())
    .then(data => {
      this.setState({
        restaurants: data
      })
    })
    .then(() => this.props.history.push("/"))
  }


  render() {

    return (
      <div className="App">
        <NavBar
          items={this.state.items}
          selectRestaurant={this.selectRestaurant}
          restaurants={this.state.restaurants}
          allergens={this.state.allergens}/>

          <Switch>
            <Route exact path="/" component={HomePage}/>
            <Route path="/newitem" exact render={() =>
                <NewItem
              allergens={this.state.allergens}
              restaurants={this.state.restaurants}
            />}/>
            <Route path='/:name' render={(routerProps) => {
              if (!this.state.selectedRestaurant) {
                return this.restaurantRefresh()
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
