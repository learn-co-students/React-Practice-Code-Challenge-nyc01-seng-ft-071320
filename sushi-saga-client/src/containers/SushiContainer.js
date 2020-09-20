import React, { Fragment } from 'react'
import MoreButton from '../components/MoreButton'
import Sushi from '../components/Sushi'

class SushiContainer extends React.Component {

  state = {
    sushiStart: 0,
    sushiCounter: 4,
  }

  renderSushi = () => {
    return this.props.sushi.slice(this.state.sushiStart, this.state.sushiCounter).map(sushi => {
      return <Sushi sushi={sushi} clickHandler={this.props.clickHandler}/>
    })
  }

  updateCounter = () => {
    let oldCounter = this.state.sushiCounter
    if ((this.state.sushiCounter) >= (this.props.sushi.length - 4)){
      this.setState({
        sushiCounter: 4,
        sushiStart: 0
      })  
    } else {
      this.setState({
        sushiCounter: oldCounter + 4,
        sushiStart: oldCounter 
      })
    }

  }

  render () {
    return (
      <Fragment>
        <div className="belt">
          {
            this.renderSushi()
          }
          <MoreButton updateCounter={this.updateCounter}/>
        </div>
      </Fragment>
    )
  }

}

export default SushiContainer