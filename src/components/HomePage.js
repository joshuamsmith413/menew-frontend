import React from 'react';


class HomePage extends React.Component {

  renderRestaurantName = () => {
    return this.props.restaurants.map(rest => {
      return <div className="restaurantTile">
        <img src={rest.picture} alt={rest.name} height="300" width="300"/>
        <div className="restaurantText" onClick={() => this.props.selectRestaurant(rest)}><h2>{rest.name}</h2></div>
      </div>
    })
  }

  //  style ={ { backgroundImage: "url(http://www.eatout.co.za/wp-content/uploads/2015/10/Saxon-fivehundredThePass.jpg)", minHeight: "75vh", backgroundSize: "cover" } }

  render() {
    console.log(this.props.restaurants)
    return (
      <div id='HomePage'>
        <div>
          <h1 id="homeTitle">Welcome to Menew</h1>
          <div id="restaurantContainer">
            {this.renderRestaurantName()}
          </div>
        </div>


      </div>
    )
  }
}

export default HomePage
