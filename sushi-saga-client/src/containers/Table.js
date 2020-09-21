import React, { Fragment } from 'react'

class Table extends React.Component {

  renderPlates = (array) => {
    return array.map((x, index) => {
      return <div className="empty-plate" style={{ top: -7 * index }} />
    })
  }

  render() {
    return (
      <Fragment>
        <h1 className="remaining">
          You have: ${this.props.balance} remaining!
        </h1>
        <div className="table">
          <div className="stack">
            {
              /* 
                 renderPlates takes an array 
                 and renders an empty plate
                 for every element in the array
              */
              this.renderPlates([])
            }
          </div>
        </div>
      </Fragment>
    )
  }
}

export default Table