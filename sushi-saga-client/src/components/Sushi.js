import React from 'react'

class Sushi extends React.Component {

  eat = () => {
    this.props.eat(this.props)
  }

  render(){
    return (
      <div className="sushi">
        <div className="plate" 
             onClick={this.eat}>
          { 
            /* Tell me if this sushi has been eaten! */ 
            this.props.eaten ?
              null
            :
              <img alt={this.props.name} src={this.props.img_url} width="100%" />
          }
        </div>
        <h4 className="sushi-details" data-id={this.props.id}>
          {this.props.name} - ${this.props.price}
        </h4>
      </div>
    )

  }
}

export default Sushi