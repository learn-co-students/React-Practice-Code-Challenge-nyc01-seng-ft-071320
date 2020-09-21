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
    maxIndex: 0,
    balance: 100,
    eatenSushis: [],
    addAmount: "",
    numOfSushi: 0
  }

  componentDidMount() {
    fetch(API)
    .then(res => res.json())
    .then(sushis => {
      this.setState(() => ({
        sushis: sushis,
        numOfSushi: sushis.length,
        maxIndex: sushis.length - 1
      }))
    })
  }

  renderMoreSushi = e => {
    e.persist()
    // console.log(this.state.sushis.slice(96,99))
    // console.log(this.state.startIndex, this.state.endIndex, 4*(this.state.numOfSushi/4-1))
    if (this.state.startIndex < this.state.numOfSushi - 4) {
      const newEndIndex = this.state.endIndex + 4 > this.state.maxIndex ? this.state.maxIndex : this.state.endIndex + 4
      this.setState(() => ({
        startIndex: this.state.startIndex + 4,
        endIndex: newEndIndex
      }))
    } else {
      const newSushis = this.state.sushis.filter(sushi => this.state.eatenSushis.indexOf(sushi) < 0)
      this.setState(() => ({
        sushis: newSushis,
        startIndex: 0,
        endIndex: 4,
        numOfSushi: newSushis.length,
        maxIndex: newSushis.length - 1
      }))
    }
  }

  addEatenSushi = (e, sushiObj) => {
    e.persist()
    const newEatenSushis = [sushiObj, ...this.state.eatenSushis]
    this.setState(()=> ({
      eatenSushis: newEatenSushis,
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
    this.setState(() => ({
      balance: this.state.balance + parseInt(this.state.addAmount, 10),
      addAmount: ""
    }))
  }

  render() {
    const fourSushis = this.state.sushis.slice(this.state.startIndex, this.state.endIndex)
    console.log("start ", this.state.startIndex, "end ", this.state.endIndex, fourSushis, "max ", this.state.maxIndex, "len ", this.state.numOfSushi)
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
