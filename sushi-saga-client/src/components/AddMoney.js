import React from 'react'

export default class AddMoney extends React.Component {
    state = {
        amount: ''
    }

    changeHandler = (event) => {
        event.persist()
        // debugger
        // console.log(event.target.value)
        this.setState(()=>({
            amount: event.target.value
        }))
        // console.log(this.state.amount)
    }

    submitHandler = (event) => {
        event.preventDefault()
        let amount = parseInt(this.state.amount, 10)
        this.props.submitHandler(amount)
        // this.setState(()=>({
        //     amount: ''
        // }))
        event.target.reset()
    }

    render(){
        return(
            <form onSubmit={this.submitHandler}>
                <input type='number' name="amount" placeholder="Enter amount" onChange={this.changeHandler} />
                <input type='submit' value='Add Funds' />
            </form>
        )
    }
}