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

        <div id="HomePagecontainer1">
          <h2>What is it?</h2>
          <p> Menew is a new and easy way to keep your staff up to date on the latest menu changes. </p>
          <img className="homeImages" id='menuPageExample' src="data:image/png;base64,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" alt="card example" />
        </div><br/>
      <div className="secondaryContainer">
        <div id="HomePagecontainer2">
          <h3> How Does it work? </h3>
          <p>We provide easy to use costumizable displays for each menu item so your staff can study the menu and imediately see all changes reflected. Once your menus are uploaded, You can modify, add and delete the items as often as necessary.</p>
          <img className="homeImages" id='cardExample' src={infocard} alt="card example" />
          </div>
        </div>

      </div>
    )
  }
}

export default HomePage
