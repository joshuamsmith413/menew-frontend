import React from 'react';
import infocard from '../infocard.png'
import menuPageExample from '../menuPageExample.png'

class HomePage extends React.Component {

  render() {

    return (
      <div className='HomePage'>
        <div id="HomePagePic" style ={ { backgroundImage: "url(https://designcontest-com-designcontest.netdna-ssl.com/data/contests/215250/entries/d5fdc19b02f7f67a.jpg)", minHeight: "75vh", backgroundSize: "cover" } } >
          <h1 id="homeTitle">Welcome to Menew</h1>
        </div>
        <div className='secondaryContainer'>
        <span id="HomePagecontainer1">
          <h2>What is it?</h2>
          <p> Menew is a new and easy way to keep your staff up to date on the latest menu changes. </p>
          <img id='menuPageExample' src={menuPageExample} alt="card example" />
        </span>
        <span id="HomePagecontainer2">
          <h3> How Does it work? </h3>
          <p>We provide easy to use costumizable displays for each menu item so your staff can study the menu and imediately see all changes reflected. Once your menus are uploaded, You can modify, add and delete the items as often as necessary.</p>
          <img id='cardExample' src={infocard} alt="card example" />
        </span>
      </div>
      </div>
    )
  }
}

export default HomePage
