import React, { Fragment } from "react";

class Sushi extends React.Component {
  localClickHandler = () => {
    this.props.eatSushi(this.props.sushi);
  };

  render() {
    // console.log(this.props.sushi);
    return (
      <div className="sushi">
        <div className="plate" onClick={this.localClickHandler}>
          {this.props.eaten ? null : (
            <img src={this.props.sushi.img_url} alt="" width="100%" />
          )}
        </div>
        <h4 className="sushi-details">
          {this.props.sushi.name} - ${this.props.sushi.price}
        </h4>
      </div>
    );
  }
}

export default Sushi;
