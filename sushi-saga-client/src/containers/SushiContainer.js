import React, { Fragment } from 'react'
import MoreButton from '../components/MoreButton'
import Sushi from '../components/Sushi'

class SushiContainer extends React.Component {

  state = {
    loaded: false,
    sushis: [],
    displayedSushis: [0, 5]
  }

  API = "http://localhost:3000/sushis"

  componentDidMount = () => {
    fetch(this.API)
    .then(resp => resp.json())
    .then(sushis => {
      console.log(sushis)
      this.setState({
        loaded: true,
        sushis: sushis
      })
    })
  }

  clickHandler = () => {
    if (this.state.displayedSushis[0] < 95) { 
      let newStart = this.state.displayedSushis[0] + 5
      let newFin = this.state.displayedSushis[1] + 5
      this.setState({displayedSushis: [newStart, newFin]})
    } else {
      this.setState({displayedSushis: [0, 5]})
    }
  }

  sushis = () => {
    console.log("map sushis:", this.state.sushis)
    let array = this.state.sushis.slice(this.state.displayedSushis[0], this.state.displayedSushis[1])
    return array.map(sushi => {return <Sushi key={sushi.id} sushi={sushi} appSushiClickHandler={this.props.appSushiClickHandler} money={this.props.money}/>})
  }

  render() {
    return this.state.loaded === false
    ?
    <h1>Loading...</h1>
    :
    <Fragment>
      <div className="belt">
        {
          this.sushis()
        }
        <MoreButton clickHandler={this.clickHandler} />
      </div>
    </Fragment>
  }
}

export default SushiContainer