import React, { Component } from 'react';
import SushiContainer from './containers/SushiContainer';
import Table from './containers/Table';

// Endpoint!
const API = "http://localhost:3000/sushis"

class App extends Component {

  state = {
    sushiArray: [],
    eaten: [],
    money: 100,
    displayIndex: 0
  }

  componentDidMount(){
    fetch(API)
    .then(resp => resp.json())
    .then(data => this.setState({ sushiArray: data }))
  }

  fourSushis = () => {
    return this.state.sushiArray.slice(this.state.displayIndex, this.state.displayIndex+4)
  }

  moreHandler = () => {
    let newDisplayIndex = this.state.displayIndex+4
    this.setState({ displayIndex: newDisplayIndex })
  }

  eat = (sushi) => {
    const newMoney = this.state.money - sushi.price

    if (!this.state.eaten.includes(sushi) && newMoney >= 0) {
      this.setState({
        eaten: [...this.state.eaten, sushi],
        money: newMoney
      })
    }
  }

  render() {
    return (
      <div className="app">
        <SushiContainer sushis={this.fourSushis()} moreHandler={this.moreHandler} eaten={this.state.eaten} eat={this.eat} />
        <Table remainingBudget={this.state.money} eaten={this.state.eaten} />
      </div>
    );
  }
}

export default App;