import React, { Component } from 'react';
import SushiContainer from './containers/SushiContainer';
import Table from './containers/Table';

// Endpoint!
const API = "http://localhost:3000/sushis"

class App extends Component {
  state = {
    eatenSushi: [],
    money: 100
  }

  appSushiClickHandler = (sushi) => {
    console.log('app sushi click:', sushi)
    let newArray = [...this.state.eatenSushi, sushi]
    this.setState(previousState => ({eatenSushi: newArray, money: previousState.money - parseInt(sushi.price)}))
  }

  render() {
    console.log('app render:', this.state)
    return (
      <div className="app">
        <SushiContainer appSushiClickHandler={this.appSushiClickHandler} money={this.state.money} />
        <Table eatenSushi={this.state.eatenSushi} money={this.state.money} />
      </div>
    );
  }
}

export default App;