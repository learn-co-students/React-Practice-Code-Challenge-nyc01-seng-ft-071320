import React, { Fragment } from 'react'
import MoreButton from '../components/MoreButton'
import Sushi from '../components/Sushi'

class SushiContainer extends React.Component {

  state = {
    count: 0
  }

  sushiRenderFour = () => {
    return this.props.sushi.slice(this.state.count, this.state.count + 4).map(sushiObj => <Sushi total={this.props.total} clickHandler={this.props.clickHandler} key={sushiObj.id} sushi={sushiObj} />)
  }
  
  clickHandler = () => {
    if (this.state.count + 4 >= 100){
      this.setState(()=>({
        count: 0
      }))
    } else {
      this.setState(()=>({
        count: this.state.count + 4
      }))
    }
  }

  render(){
    return (
      <Fragment>
        <div className="belt">
          {this.sushiRenderFour()}
          <MoreButton clickHandler={this.clickHandler}/>
        </div>
      </Fragment>
    )
  }
}

export default SushiContainer