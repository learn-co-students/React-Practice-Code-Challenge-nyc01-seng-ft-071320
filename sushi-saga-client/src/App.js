import React, { Component } from 'react';
import SushiContainer from './containers/SushiContainer';
import Table from './containers/Table';
import AddMoney from './components/AddMoney'

// Endpoint!
const API = "http://localhost:3000/sushis"

class App extends Component {

  state = {
    sushis: [],
    startIndex: 0,
    endIndex: 4,
    balance: 100,
    eatenSushis: [],
    addAmount: ""
  }

  componentDidMount() {
    fetch(API)
    .then(res => res.json())
    .then(sushis => {
      this.setState(() => ({
        sushis: sushis
      }))
    })
  }

  renderMoreSushi = e => {
    e.persist()
    this.setState(() => ({
      startIndex: this.state.startIndex + 4,
      endIndex: this.state.endIndex + 4
    }))
  }

  addEatenSushi = (e, sushiObj) => {
    e.persist()
    const newSushis = [sushiObj, ...this.state.eatenSushis]
    this.setState(()=> ({
      eatenSushis: newSushis,
      balance: this.state.balance - sushiObj.price
    }))
  }

  getAmount = e => {
    e.persist()
    this.setState(() => ({
      addAmount: e.target.value
    }))
  }

  addMoney = e => {
    e.preventDefault()
    console.log(this.state.balance, this.state.addAmount)
    this.setState(() => ({
      balance: this.state.balance + parseInt(this.state.addAmount, 10),
      addAmount: ""
    }))
  }

  render() {
    const fourSushis = this.state.sushis.slice(this.state.startIndex, this.state.endIndex)
    return (
      <div className="app">
        <SushiContainer sushis={fourSushis} renderMoreSushi={this.renderMoreSushi} addEatenSushi={this.addEatenSushi} balance={this.state.balance}/>
        <Table balance={this.state.balance} eatenSushis={this.state.eatenSushis}/>
        <AddMoney amount={this.state.addAmount} addMoney={this.addMoney} getAmount={this.getAmount}/>
      </div>
    );
  }
}

export default App;
