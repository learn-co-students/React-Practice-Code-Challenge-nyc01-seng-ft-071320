import React, { Fragment } from 'react'


//Going to use state, so I need to change this to a class component
class Sushi extends React.Component {

  //create the state
  state = {
    ate: false
  }

  //create clickHandler
  clickHandler = () => {
    if (this.props.money >= this.props.sushi.price) {
      this.setState({ate: true})
      this.props.clickHandler(this.props.sushi)
    } else {
      alert("You don't have enough money!")
    }
  }

  render() {

    return (
      <div className="sushi">
        <div className="plate" 
             onClick={this.clickHandler}>
          { 
            this.state.ate
            ?
              null
            :
              <img src={this.props.sushi.img_url} alt="" width="100%" />
          }
        </div>
        <h4 className="sushi-details">
          {this.props.sushi.name} - ${this.props.sushi.price}
        </h4>
      </div>
    )
  }
  
}

export default Sushi