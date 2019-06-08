import React from 'react';
import './App.css';
import ReactDOM from 'react-dom';
import ItemsContainer from './components/ItemsContainer';
import NavBar from './components/NavBar'

class App extends React.Component {
  state = {
    items: [],
    allergenItems: []
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

  showAllergenItems = (e) => {
    let allergenToMatch = e.target.value
    let itemsWithAllergen = []
    console.log(allergenToMatch)
    if (allergenToMatch === "None") {
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
    console.log(itemsWithAllergen)
    this.setState({
      allergenItems: itemsWithAllergen
    })
  }


  render() {

    return (
      <div className="App">
        <NavBar items={this.state.items} showAllergenItems={this.showAllergenItems}/>
        <ItemsContainer items={this.state.items} allergenItems={this.state.allergenItems}/>
      </div>
    );
  }
}

export default App;
