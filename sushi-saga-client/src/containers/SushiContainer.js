import React, { Fragment } from 'react'
import MoreButton from '../components/MoreButton'
import Sushi from '../components/Sushi'

const SushiContainer = (props) => {

  const genFourSushis = () => {
    return props.sushis.map(sushi => <Sushi key={sushi.id} sushi={sushi}/>)
  }

  return (
    <Fragment>
      <div className="belt">
        {genFourSushis()}
        <MoreButton />
      </div>
    </Fragment>
  )
}

export default SushiContainer
