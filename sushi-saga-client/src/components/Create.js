import React from 'react'

class Create extends React.Component{

    state={
        add:0
    }

    change=(e)=>{
        e.persist()
        this.setState(()=>({[e.target.name]:e.target.value}))
    }

    submit=(e)=>{
        e.preventDefault()
        this.props.addCash(this.state.add)
        this.setState(()=>({add:0}))
    }

    render(){
        // console.log(this.state.add)
        return(
            <form onSubmit={this.submit}>
                <input type='number' name="add" value={this.state.add} onChange={this.change} placeholder='Top-Up'/>
                <input type='submit' value='More Cash'/>
            </form>
        )

    }
}

export default Create