import React, { Component } from "react";
import SushiContainer from "./containers/SushiContainer";
import Table from "./containers/Table";

const API = "http://localhost:3008/sushis/";
class App extends Component {
  state = {
    sushiArray: [],
    sushiCount: 0,
    wallet: 300,
    plateArray: [],
  };
  // Endpoint!
  componentDidMount() {
    fetch(API)
      .then((res) => res.json())
      .then((data) => this.setState({ sushiArray: data }));
  }

  deleteSushi = (sushi) => {
    fetch(`http://localhost:3008/sushis/${sushi.id}`, {
      method: "DELETE",
      headers: {
        "content-type": "application/json",
        accepts: "application/json",
      },
      body: JSON.stringify(sushi),
    })
      .then((res) => res.json())
      .then(() => {
        const updatedArray = this.state.sushiArray.filter(
          (currentsushi) => sushi.id !== currentsushi.id
        );

        this.setState({
          sushiArray: updatedArray,
        });
      });
  };

  //send one V sushi
  eatSushi = (sushi) => {
    console.log("sushiline22:", sushi.price);
    //subtract how much it costed
    let sPrice = parseInt(sushi.price);
    this.setState({ wallet: this.state.wallet - sPrice });
    //delete it off DB
    this.deleteSushi(sushi);
    //delete eaten sushi off dom
    this.renderDirtyPlate();
  };

  refillSushi = () => {
    this.setState({ sushiCount: this.state.sushiCount + 4 });
  };

  renderDirtyPlate = () => {
    let newArray = [...this.state.plateArray];
    newArray.push("anotherStinkinPlate");
    this.setState({ plateArray: newArray });
  };
  render() {
    return (
      <div className="app">
        <SushiContainer
          sushiArray={this.state.sushiArray}
          eatSushi={this.eatSushi}
          refillSushi={this.refillSushi}
          sushiCount={this.state.sushiCount}
        />
        <Table wallet={this.state.wallet} plateArray={this.state.plateArray} />
      </div>
    );
  }
}

export default App;
