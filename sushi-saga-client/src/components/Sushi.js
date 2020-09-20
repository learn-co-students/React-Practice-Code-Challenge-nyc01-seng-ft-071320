import React from 'react'

function Sushi (props) {


  const clicker = () => {
    if (props.total >= props.sushi.price && !props.sushi.clicked){
      props.clickHandler(props.sushi)
    }
  }

  return (
    <div className="sushi">
      <div className="plate" 
          onClick={clicker}>
        { props.sushi.clicked ? null : <img alt={props.sushi.name} src={props.sushi.img_url} width="100%" /> }
      </div>
      <h4 className="sushi-details">
        {props.sushi.name} - ${props.sushi.price}
      </h4>
    </div>
  )

}

export default Sushi