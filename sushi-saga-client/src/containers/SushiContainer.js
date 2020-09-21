import React, { Fragment } from 'react'
import MoreButton from '../components/MoreButton'

//import the sushi.js file
import Sushi from '../components/Sushi'


//Will be using state, so change into a class based component
class SushiContainer extends React.Component {
  //create state
  state = {
    loaded: false,
    sushiCollection: [],
    sushiDisplayed: [0, 5]
  };

  
  //fetch the data
  componentDidMount = () => {
    let api = "http://localhost:3000/sushis";
    fetch(api)
    .then(response => response.json())
    .then(data => {
      this.setState({
        loaded: true,
        sushiCollection: data
      })
    })
  }

  //create a clickHandler 
  clickHandler = () => {
    if (this.state.sushiDisplayed[0] < 95) {
      let newStart = this.state.sushiDisplayed[0] + 5
      let newEnd = this.state.sushiDisplayed[1] + 5
      this.setState({sushiDisplayed: [newStart, newEnd]})
    } else {
      this.setState({sushiDisplayed: [0, 5]})
    }
  }

  //create function to render the sushi assortment
  renderSushi = () => {
    let array = this.state.sushiCollection.slice(this.state.sushiDisplayed[0], this.state.sushiDisplayed[1])
    return array.map(sushi => {
      return <Sushi key={sushi.id} sushi={sushi} clickHandler={this.props.clickHandler} money={this.props.money}/>
    })
  }

  render() {
    return this.state.loaded === false 
    ?
    <h1>Loading Data...</h1>
    :
    (
      <Fragment>
        <div className="belt">
          {this.renderSushi()}
          <MoreButton clickHandler={this.clickHandler}/>
        </div>
      </Fragment>
    );
  }
}

export default SushiContainer