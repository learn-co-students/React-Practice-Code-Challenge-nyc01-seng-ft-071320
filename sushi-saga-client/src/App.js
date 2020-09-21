import React, { Component } from 'react';
import SushiContainer from './containers/SushiContainer';
import Table from './containers/Table';

// Endpoint!
const API = "http://localhost:3000/sushis"

class App extends Component {

  state = {
    sushis: [],
    startIndex: 0,
    endIndex: 4,
    balance: 500,
    eatenSushis: []
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

  render() {
    const fourSushis = this.state.sushis.slice(this.state.startIndex, this.state.endIndex)
    return (
      <div className="app">
        <SushiContainer sushis={fourSushis} renderMoreSushi={this.renderMoreSushi} addEatenSushi={this.addEatenSushi}/>
        <Table balance={this.state.balance} eatenSushis={this.state.eatenSushis}/>
      </div>
    );
  }
}

export default App;
