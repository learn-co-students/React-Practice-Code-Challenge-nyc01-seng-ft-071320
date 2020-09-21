import React, { Component } from 'react';
import SushiContainer from './containers/SushiContainer';
import Table from './containers/Table';
import SushiWallet from './components/SushiWallet'

// Endpoint!
const API = "http://localhost:3000/sushis"

class App extends Component {

  state = {
    sushiArray: [],
    counter: 0,
    balance: 100
  }

  componentDidMount() {
    fetch(API)
      .then(resp => resp.json())
      .then(sushis => this.setState(() => ({ sushiArray: sushis })))
  }

  appEatSushi = (sushiObj) => {
    let newArray = this.state.sushiArray
    let foundSushi = newArray.find(sushi => sushi.id === sushiObj.id)
    newArray[newArray.indexOf(foundSushi)] = sushiObj
    this.setState((previousState) => ({ balance: previousState.balance - parseInt(sushiObj.price, 10), sushiArray: newArray }))
  }

  addMoniez = (amount) => {
    this.setState((previousState) => ({ balance: previousState.balance + parseInt(amount, 10) }))
  }

  render() {
    return (
      <div className="app">
        <SushiContainer sushis={this.state.sushiArray} counter={this.state.counter} balance={this.state.balance} appEatSushi={this.appEatSushi} />
        <SushiWallet addMoniez={this.addMoniez} />
        <Table balance={this.state.balance} />
      </div>
    );
  }
}

export default App;