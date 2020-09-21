import React, { Fragment } from 'react'

class Sushi extends React.Component {
  state = {
    eaten: false
  }

  removeSushi = e => {
    if (this.props.balance >= this.props.sushi.price) {
      this.props.addEatenSushi(e, this.props.sushi)
      e.persist(e)
      this.setState(() => ({
        eaten: true
      }))
    }
  }

  render() {
    return (
      <Fragment>
        <div className="sushi">
          <div className="plate" 
              onClick={this.removeSushi}>
            { 
              this.state.eaten ?
                null
              :
                <img src={this.props.sushi.img_url} alt={this.props.sushi.name} width="100%" />
            }
          </div>
          <h4 className="sushi-details">
            {this.props.sushi.name} - ${this.props.sushi.price}
          </h4>
        </div>
      </Fragment>
    )    
  }
}

export default Sushi
