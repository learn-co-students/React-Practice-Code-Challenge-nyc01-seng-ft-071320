import React from 'react'

class SushiWallet extends React.Component {

    state = {
        amount: ""
    }

    changeHandler = (e) => {
        e.persist()
        this.setState(() => ({ [e.target.name]: e.target.value }))
    }

    submitHandler = (e) => {
        e.preventDefault()
        this.props.addMoniez(this.state.amount)
    }

    render() {
        return (
            <form onSubmit={this.submitHandler}>
                <input type="number" name="amount" placeholder="Amount" value={this.state.name} onChange={this.changeHandler} />
                <input type="submit" value="Add money" />
            </form>
        )
    }
}

export default SushiWallet