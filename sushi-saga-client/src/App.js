import React, { Component } from 'react';
import SushiContainer from './containers/SushiContainer';
import Table from './containers/Table';

// Endpoint!
const API = 'http://localhost:3000/sushis';

class App extends Component {
  state = {
    api: [],
    index: 0,
    custMoney: 100,
    empties: [],
  };

  filterSushi = () => {
    const newAPI = [...this.state.api];
    return newAPI.splice(this.state.index, 4);
  };

  clickHandler = () => {
    this.setState(() => ({
      index: (this.state.index + 4) % this.state.api.length,
    }));
  };

  addToEmpties = (cost) => {
    const newEmpties = [...this.state.empties, cost];
    this.setState(() => ({
      empties: newEmpties,
      custMoney: this.state.custMoney - cost,
    }));
  };

  render() {
    return (
      <div className='app'>
        <SushiContainer
          api={this.filterSushi()}
          click={this.clickHandler}
          empties={this.addToEmpties}
          money={this.state.custMoney}
        />
        <Table money={this.state.custMoney} empties={this.state.empties} />
      </div>
    );
  }

  componentDidMount() {
    fetch(API)
      .then((res) => res.json())
      .then((data) => {
        this.setState(() => ({
          api: data,
        }));
      });
  }
}

export default App;
