import React, { Fragment } from 'react'
import MoreButton from '../components/MoreButton'
import Sushi from '../components/Sushi'

const SushiContainer = (props) => { //console.log(props.service)

  return (
    <Fragment>
      <div className="belt">
        {
          props.service.map(el=><Sushi key={el.id} el={el} eat={props.eat} inStomach={props.inStomach}/>)
        }
        <MoreButton next={props.next}/>
      </div>
    </Fragment>
  )
}

export default SushiContainer