import React from 'react';


class HomePage extends React.Component {

  render() {

    return (
      <div className='HomePage'>
        <div id="HomePagePic" style ={ { backgroundImage: "url(https://designcontest-com-designcontest.netdna-ssl.com/data/contests/215250/entries/d5fdc19b02f7f67a.jpg)", minHeight: "75vh", backgroundSize: "cover" } } >
          <h1 id="homeTitle">Welcome to Menew</h1>
        </div>


      </div>
    )
  }
}

export default HomePage
