import React, { Component } from 'react';
import SushiContainer from './containers/SushiContainer';
import Table from './containers/Table';

// Endpoint!
const API = "http://localhost:3000/sushis"

class App extends Component {

  //create the state 
  state = {
    ateSushi: [],
    money: 200
  }

  //create a clickHandler
  clickHandler = (sushi) => {
    // console.log("clicked Sushi info:", sushi)
    let newArray = [...this.state.ateSushi, sushi]
    this.setState(previousState => ({ateSushi: newArray, money: previousState.money - parseInt(sushi.price, 10)}))
  }

  render() {
    return (
      <div className="app">
        <SushiContainer clickHandler={this.clickHandler} money={this.state.money}/>
        <Table money={this.state.money}/>
      </div>
    );
  }
}

export default App;