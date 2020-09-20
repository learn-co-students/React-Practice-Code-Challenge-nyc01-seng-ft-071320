import React, { Component } from 'react';
import MoreButton from '../components/MoreButton.js';
import Sushi from "../components/Sushi.js";

class SushiContainer extends React.Component {

  sushis = () => {
    return this.props.sushis.map(el => <Sushi key={el.id} sushi={el} eat={this.props.eat} taken={this.props.eaten.includes(el)} />)
  }

  render() {

    return (
      // <Fragment>

        <div className="belt">
          {this.sushis()}
          <MoreButton moreHandler={this.props.moreHandler} />
        </div>
      // </Fragment>

    )
  }
}

// const SushiContainer = (props) => {
//   return (
//     <Fragment>
//       <div className="belt">
//         {props.sushis.map((sushi) => {
//           return <Sushi sushi={sushi} key={sushi.id} eat={props.eat} taken={props.eaten.includes(sushi)} />
//         })}
//         <MoreButton moreHandler={props.moreHandler} />
//       </div>
//     </Fragment>
//   )
// }

export default SushiContainer