import React from 'react'

const MoreButton = (props) => {
  // console.log(props.next)
    return <button onClick={()=>(props.next())}>
            More sushi!
          </button>
}

export default MoreButton