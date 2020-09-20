import React from 'react'

const Sushi = (props) => {
  // console.log(props)
  // console.log(props.inStomach.includes(props.el))
  return (
    <div className="sushi">
      <div className="plate" 
           onClick={()=>(props.eat(props.el))}>
        { 
            props.inStomach.includes(props.el) 
          ?
            null
          :
            <img alt="beef" src={props.el.img_url} width="100%" />
        }
      </div>
      <h4 className="sushi-details">
        {props.el.name} - ${props.el.price}
      </h4>
    </div>
  )
}

export default Sushi