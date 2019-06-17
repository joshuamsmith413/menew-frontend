import React from 'react';

class HomePage extends React.Component {

  render() {

    return (
      <div className='background-image' style ={ { backgroundImage: "url(https://cdn-image.travelandleisure.com/sites/default/files/styles/1600x1000/public/1443538034/sanfran0915-Cockscomb_Restaurant_San_Francisco_Architecture_Photography_pan.jpg?itok=Zj1IciCF)", minHeight: "100vh", backgroundSize: "cover" } }>
      <h1>Welcome to Menew</h1>
      </div>
    )
  }
}

export default HomePage
