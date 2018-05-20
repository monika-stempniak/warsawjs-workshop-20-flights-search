import React, { Component } from 'react';
import logo from './logo.svg';
import styles from './App.css';
import SearchView from './SearchView';
import FlightsView from './FlightsView';

// class App extends Component {
//  render() {
//    return (
//      <div className="App">
//        <header className="App-header">
//          <img src={logo} className="App-logo" alt="logo" />
//          <h1 className="App-title">Welcome to React</h1>
//        </header>
//        <p className="App-intro">
//          To get started, edit <code>src/App.js</code> and save to reload.
//        </p>
//        <SearchView />
//      </div>
//    );
//  }
// }

class App extends Component {

  state = {
    flightData: {},
    view: 'search'
  }

  onSearchSubmit = (flightData) => {
    console.log(flightData)
    this.setState({
      flightData, // = flightData: flightData,
      view: 'flights'
    })
  }

 render() {
   return (
     <div className="App">
       <header className="App-header">
         <img src={logo} className={styles["App-logo"]} alt="logo" />
         <h1 className="App-title">Welcome to Flight Search</h1>
       </header>
       {
         this.state.view === "search" ? <SearchView onAppSubmit={this.onSearchSubmit} /> : <FlightsView flightData={this.state.flightData} />
       }
     </div>
   );
 }
}

export default App;
