import React, { Fragment } from 'react'
import MoreButton from '../components/MoreButton'
import Sushi from '../components/Sushi'

class SushiContainer extends React.Component {

  state = {
    counter: 0
  }

  makeSushi = () => {
    return this.props.sushis.slice(this.state.counter, (this.state.counter + 4)).map(sushi => <Sushi sushi={sushi} balance={this.props.balance} appEatSushi={this.props.appEatSushi} />)
  }

  appMoreSushi = () => {
    this.props.sushis[this.state.counter] ? this.setState((previousState) => ({ counter: previousState.counter + 4 })) : this.setState(() => ({ counter: 0 }))

  }

  render() {
    return (
      <Fragment>
        <div className="belt">
          {this.makeSushi()}
          <MoreButton appMoreSushi={this.appMoreSushi} />
        </div>
      </Fragment>
    )
  }
}

export default SushiContainer