import React from 'react'


export default class Form extends React.Component {

  state = {
    amount: ""
  }

  changeHandler = (e) => {
    e.persist()
    this.setState(()=>({
      [e.target.name]: e.target.value
    }))
  }

  submit = (e) => {
    e.preventDefault()
    this.props.submitHandler(this.state.amount)
    this.setState(()=>({
      amount: ""
    }))
  }

  render(){
    return(
      <form onSubmit={this.submit}>
        <input type="number" placeholder="Amount..." name="amount" value={this.state.amount} onChange={this.changeHandler} />
        <input type="submit" value="Add To Wallet" />
      </form>
    )
  }
}