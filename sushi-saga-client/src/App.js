import React, { Component } from 'react';
import SushiContainer from './containers/SushiContainer';
import Table from './containers/Table';

// Endpoint!
const API = "http://localhost:3000/sushis"

class App extends Component {

  state = {
    sushis: [],
    startIndex: 0,
    endIndex: 4
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

  render() {
    const fourSushis = this.state.sushis.slice(this.state.startIndex, this.state.endIndex)
    return (
      <div className="app">
        <SushiContainer sushis={fourSushis} renderMoreSushi={this.renderMoreSushi}/>
        <Table />
      </div>
    );
  }
}

export default App;
