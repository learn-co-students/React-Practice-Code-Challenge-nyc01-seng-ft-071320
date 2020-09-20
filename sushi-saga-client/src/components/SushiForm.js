import React from 'react'

class SushiForm extends React.Component {

    state = {
        money: 0
    }

    submit = (e) => {
        e.preventDefault()
        this.props.submitHandler(this.state.money)
    }

    changeHandler = (e) => {
        this.setState({
            [e.target.name]: parseInt(e.target.value)
        })
    }

    render(){
        return (<form onSubmit={this.submit}>
            <label>ATM: </label>
            <input onChange={this.changeHandler} name="money" type="number" placeholder="Add Money Here"></input>
            <button type="submit" >Add Money</button>
        </form>)
    }
}

export default SushiForm