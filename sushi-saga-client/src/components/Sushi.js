import React, { Fragment } from 'react'

class Sushi extends React.Component {
  eatSushi = () => {

    const options = {
      method: 'PATCH',
      headers: {
        "Content-type": "application/json",
        "Accepts": "application/json"
      },
      body: JSON.stringify({ eaten: true })
    }

    fetch(`http://localhost:3000/sushis/${this.props.sushi.id}`, options)
      .then(resp => resp.json())
      .then(data => this.props.appEatSushi(data))

  }

  alert = () => {
    window.alert("No free meals!")
  }

  render() {
    return (
      <div className="sushi">
        <div className="plate"
          onClick={this.props.balance >= this.props.sushi.price ? this.eatSushi : this.alert}>
          {
            this.props.sushi.eaten ?
              null
              :
              <img src={this.props.sushi.img_url} alt="sushi" width="100%" />
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