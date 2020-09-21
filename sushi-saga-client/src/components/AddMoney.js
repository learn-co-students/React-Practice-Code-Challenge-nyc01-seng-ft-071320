import React from 'react'

const AddMoney = props => {
  return (
    <div className="wallet">
      <h2>Want to add money?</h2>
      <form onSubmit={props.addMoney}>
        <input
          type="number"
          name="amount"
          placeholder="Enter amount"
          value={props.amount}
          onChange={props.getAmount}
        />
        <input type="submit" value="Add" />
      </form>
    </div>
  )
}

export default AddMoney
