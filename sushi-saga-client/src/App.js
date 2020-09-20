import React, { Component } from 'react';
import AddMoney from './components/AddMoney';
import SushiContainer from './containers/SushiContainer';
import Table from './containers/Table';

// Endpoint!
const API = "http://localhost:3000/sushis"

class App extends Component {

  state = {
    sushi: [],
    dishes: [],
    wallet: 100
  }

  componentDidMount(){
    fetch(API)
      .then(res=>res.json())
      .then(sushiArray => {
        let newArray = sushiArray.map(sushi => ({
          ...sushi,
          eaten: false
        }))
        this.setState(()=>({
          sushi: newArray
        }))
        console.log(`%c Array received with ${newArray.length} sushi!`, 'color: green')
        // console.log(newArray)
      })
  }

  eatHandler = (sushiObj) => {

    let newWallet = this.state.wallet
    newWallet -= sushiObj.price

    if(newWallet >= 0){
      let newArray = this.state.sushi
      let foundObj = newArray.find(sushi => sushi.id === sushiObj.id)
      foundObj.eaten = true
  
      let dishArray = this.state.dishes
      dishArray.push(sushiObj)
  
      this.setState(()=>({
        sushi: newArray,
        dishes: dishArray,
        wallet: newWallet
      }))
    } else {
      console.log("%c You've reached your budget and can't spend any more!", 'color: red')
    }

  }

  submitHandler = (amount) => {
    console.log(amount)
    this.setState((previousState)=>{
      let newAmount = previousState.wallet + amount
      console.log(newAmount)
      return {
        wallet: newAmount
      }
    })
  }

  render() {
    return (
      <div className="app">
        <AddMoney submitHandler={this.submitHandler} />
        <SushiContainer sushi={this.state.sushi} eatHandler={this.eatHandler} />
        <Table dishes={this.state.dishes} wallet={this.state.wallet} />
      </div>
    );
  }
}

export default App;