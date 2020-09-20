import React from 'react'

const MoreButton = (props) => {
    return <button onClick={() => {
      props.updateCounter()
    }}>
            More sushi!
          </button>
}

export default MoreButton