import React, { Fragment } from 'react'

const Table = (props) => {

  const renderPlates = (array) => {
    console.log(props.dishes)
    return array.map((x, index) => {
      return <div key={index} className="empty-plate" style={{ top: -7 * index }}/>
    })
  }

  // const budget = () => {
  //   let wallet = props.wallet
  //   props.dishes.forEach(sushi => {
  //     if(wallet - sushi.price >= 0){
  //       wallet -= sushi.price
  //     }
  //   })
  //   return wallet
  // }

  return (
    <Fragment>
      <h1 className="remaining">
        You have: ${props.wallet} remaining!
      </h1>
      <div className="table">
        <div className="stack">
          {
            /* 
               renderPlates takes an array 
               and renders an empty plate
               for every element in the array
            */
            renderPlates(props.dishes)
          }
        </div>
      </div>
    </Fragment>
  )
}

export default Table