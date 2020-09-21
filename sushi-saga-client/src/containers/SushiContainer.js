import React, { Fragment } from 'react'
import MoreButton from '../components/MoreButton'
import Sushi from '../components/Sushi'

const SushiContainer = (props) => {

  const genFourSushis = () => {
    return props.sushis.map(sushi => <Sushi key={sushi.id} sushi={sushi} addEatenSushi={props.addEatenSushi}/>)
  }

  return (
    <Fragment>
      <div className="belt">
        {genFourSushis()}
        <MoreButton renderMoreSushi={props.renderMoreSushi}/>
      </div>
    </Fragment>
  )
}

export default SushiContainer
