import React, { Component } from 'react';
import SushiContainer from './containers/SushiContainer';
import Table from './containers/Table';

// Endpoint!
const API = "http://localhost:3000/sushis"

class App extends Component {

  state={
    data:[],
    itemNum:0,
    cash:100,
    consumed:[]
  }

  componentDidMount=()=>{
    fetch(API)
    .then(res=>res.json())
    .then(string=>{this.setState({data:string})})
  }
  
  service=()=>{
    return this.state.data.slice(this.state.itemNum, this.state.itemNum+4)
  }

  next=()=>{//console.log("give me more")// this.setState(()=>({itemNum:this.state.itemNum+4}))
    let newItems = this.state.itemNum+4
    if (newItems>=this.state.data.length){
      this.setState(() => ({itemNum: 0}))
      let newArray=this.state.data.filter(el=>!this.state.consumed.includes(el))
      this.setState(()=>({data:newArray}))
    }
    this.setState(prevState => ({itemNum: prevState.itemNum+4}))
  }

  eat=(obj)=>{ // console.log("I am eating this",obj) //console.log(!this.state.consumed.includes(obj),obj, cashMoney)
    const cashMoney=this.state.cash - obj.price
    if (!this.state.consumed.includes(obj)&&cashMoney>=0){
      this.setState(prevState => ({
        consumed: [obj,...prevState.consumed],
        cash: cashMoney
      }))
    }
  }

  addCash=(obj)=>{
    console.log("give me more money please",obj)
    this.setState(prevState => ({cash: prevState.cash+parseInt(obj)}))
  }

  render() { // console.log("this is my data", this.state.data) // console.log(this.service())
  // console.log("get in my belly", this.state.consumed,this.state.cash)
  // console.log("this is the content",this.state.data.length,this.state.itemNum)
  console.log(this.state.cash)
    return (
      <div className="app">
        <SushiContainer service={this.service()} next={this.next} eat={this.eat} inStomach={this.state.consumed}/>
        <Table cash={this.state.cash} addCash={this.addCash}/>
        {/* {this.serv  ice()} */}
      </div>
    );
  }
}

export default App;