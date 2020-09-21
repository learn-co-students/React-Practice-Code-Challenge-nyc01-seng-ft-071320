import React, { Fragment } from "react";
import MoreButton from "../components/MoreButton";
import Sushi from "../components/Sushi";

const SushiContainer = (props) => {
  // Update sushiCount so that you receive it from the props or state
  // We want the refill sushi button to increase the count by 4 every time you click it
  const sushiCount = props.sushiCount;
  const sushiMap = props.sushiArray.map(
    (ele, currentSushiIndex) =>
      // if the sushiCount is BEFORE OR EQUAL to the current sushi, show it
      sushiCount <= currentSushiIndex &&
      // AND if the current sushi is less than the sushiCount + 4 (because we want to show 4 in a row!)
      currentSushiIndex < sushiCount + 4 && (
        <Sushi sushi={ele} eatSushi={props.eatSushi} />
      )
  );
  //if sushiArray/reset sushicount to 0
  // console.log("sushimap:", sushiMap);
  return (
    <Fragment>
      <div className="belt">
        {sushiMap}
        <MoreButton refillSushi={props.refillSushi} />
      </div>
    </Fragment>
  );
};

export default SushiContainer;
