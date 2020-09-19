import React, { Fragment } from "react";
import MoreButton from "../components/MoreButton";
import Sushi from "../components/Sushi";

class SushiContainer extends React.Component {
  renderSushis = () => {
    return this.props.sushis.map((sushi) => {
      // console.log(sushi);
      return (
        <Sushi
          key={sushi.id}
          sushi={sushi}
          eaten={this.props.eaten.includes(sushi)}
          eatSushi={this.props.eatSushi}
        />
      );
    });
  };

  render() {
    return (
      <Fragment>
        <div className="belt">
          {this.renderSushis()}
          <MoreButton displayHandler={this.props.moreSushis} />
        </div>
      </Fragment>
    );
  }
}

export default SushiContainer;
