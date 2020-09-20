import React, { Component } from 'react';
import SushiContainer from './containers/SushiContainer';
import Table from './containers/Table';
import Form from './components/Form'

// Endpoint!
const API = "http://localhost:3000/sushis"

class App extends Component {

  state = {
    sushiArray: [],
    total: 100,
    eatenSushi: []
  }

  componentDidMount(){
    fetch(API)
    .then(resp=>resp.json())
    .then(data => {
      this.setState(()=>({
        sushiArray: data
      }))
    })
  }

  clickHandler = (sushiObj) => {
    let newArray = [...this.state.sushiArray]
    let found = newArray.find(sushi => sushi.id === sushiObj.id)
    found.clicked = true
    let newTotal = this.state.total - sushiObj.price
    this.setState(()=>({
      sushiArray: newArray,
      eatenSushi: [...this.state.eatenSushi, sushiObj],
      total: newTotal
    }))
  }

  submitHandler = (amount) => {
    this.setState(()=>({
      total: (this.state.total + parseInt(amount, 10))
    }))
  }

  render() {
    return (
      <div className="app">
        <SushiContainer total={this.state.total} clickHandler={this.clickHandler} sushi={this.state.sushiArray} />
        <Table money={this.state.total} plates={this.state.eatenSushi} />
        <Form submitHandler={this.submitHandler}/>
      </div>
    );
  }
}

export default App;