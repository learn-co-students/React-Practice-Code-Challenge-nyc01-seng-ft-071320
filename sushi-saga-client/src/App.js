import React, { Component } from 'react';
import SushiContainer from './containers/SushiContainer';
import Table from './containers/Table';
import SushiForm from './components/SushiForm'

// Endpoint!
const API = "http://localhost:3000/sushis"

class App extends Component {

  state = {
    sushi: [],
    eatenSushi: [],
    sushiBudget: 50
  }


  componentDidMount() {
    fetch(API)
    .then(response => response.json())
    .then(data => {
      this.setState({
        sushi: data
      })
    })
  }

  eatHandler = (sushiObj) => {
    if(this.state.sushiBudget >= sushiObj.price){
      fetch(`http://localhost:3000/sushis/${sushiObj.id}`, {method: 'DELETE'})
      .then(response => response.json())
      .then(Obj => {
        if (Obj.id === undefined){
          let newArray = ['eaten', ...this.state.eatenSushi]
          let sushiArray = this.state.sushi.filter(sushi => sushi.id !== sushiObj.id)
          let newBudget = this.state.sushiBudget - sushiObj.price
          this.setState({
            sushi: sushiArray,
            eatenSushi: newArray,
            sushiBudget: newBudget
          })
        }
      })
    }

  }

  submitHandler = (money) => {
    let oldMoney = this.state.sushiBudget

    this.setState({
      sushiBudget: oldMoney + money
    })
  }

  render() {
    console.log(this.state.sushi)
    return (
      <div className="app">
        <SushiForm submitHandler={this.submitHandler} />
        <SushiContainer sushi={this.state.sushi} clickHandler={this.eatHandler}/>
        <Table eatenSushi={this.state.eatenSushi} sushiBudget={this.state.sushiBudget}/>
      </div>
    );
  }
}

export default App;