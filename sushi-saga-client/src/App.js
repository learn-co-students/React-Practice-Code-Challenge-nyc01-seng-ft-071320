import React, { Component } from "react";
import SushiContainer from "./containers/SushiContainer";
import Table from "./containers/Table";

// Endpoint!
const API = "http://localhost:3000/sushis/";

class App extends Component {
  state = {
    sushis: [],
    eaten: [],
    wallet: 100,
    display: 0,
  };

  componentDidMount() {
    return fetch(API)
      .then((resp) => resp.json())
      .then((data) => {
        this.setState(() => ({ sushis: data }));
      });
  }

  displaySushis = () => {
    return this.state.sushis.slice(this.state.display, this.state.display + 4);
  };

  moreSushis = (e) => {
    let newSushis = this.state.display + 4;
    this.setState(() => ({
      display: newSushis,
    }));
  };

  eatSushi = (sushi) => {
    let newWallet = this.state.wallet - sushi.price;

    if (!this.state.eaten.includes(sushi) && newWallet >= 0) {
      this.setState((prevEaten) => ({
        wallet: newWallet,
        eaten: [...prevEaten, sushi],
      }));
    }
  };

  clickHandler = (sushiObj) => {
    console.log("Sushi clicked", sushiObj);
  };

  render() {
    return (
      <div className="app">
        <SushiContainer
          sushis={this.displaySushis()}
          moreSushis={this.moreSushis}
          eaten={this.state.eaten}
          eatSushi={this.eatSushi}
        />
        <Table wallet={this.state.wallet} eaten={this.state.eaten} />
      </div>
    );
  }
}

export default App;
