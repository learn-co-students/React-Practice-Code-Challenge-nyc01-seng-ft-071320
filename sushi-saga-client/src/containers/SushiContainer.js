import React, { Fragment } from 'react'
import Sushi from '../components/Sushi'
import MoreButton from '../components/MoreButton'

class SushiContainer extends React.Component {

  state = {
    currentGroupStartIndex: 0
  }

  renderFourSushi = () => {
    const start = this.state.currentGroupStartIndex
    const end = start + 4
    if(end <= 100){
      let currentGroup = this.props.sushi.slice(start, end)
      return currentGroup.map(sushi => <Sushi key={sushi.id} id={sushi.id} name={sushi.name} img_url={sushi.img_url} price={sushi.price} eaten={sushi.eaten} eat={this.props.eatHandler} />)
    } else {
      this.setState(()=>({
        currentGroupStartIndex: 0
      }))
    }
  }

  clickHandler = () => {
    this.setState((previousState)=>({
      currentGroupStartIndex: previousState.currentGroupStartIndex + 4
    }))
  }

  render(){
    return (
      <Fragment>
        <div className="belt">
          {this.renderFourSushi()}
          <MoreButton moreSushi={this.clickHandler} />
        </div>
      </Fragment>
    )
  }
}

export default SushiContainer

/* Only Render 4 sushi at a time
1. create a closured function that only returns 4 elements as a new array from the total array
      do it by object id? -- id's match original array index + 1
      do it by index

      1. change SushiContainer to a class component
      2. add property currentGroupStartIndex: 0
      3. define method renderFourSushi
          defines currentGroup that calls slice on this.props.sushi
              arguments for slice: 
                  start argument will be this.state.currentGroupStartIndex
                  end argument will be this.state.currentGroupStartIndex + 3
      4.  return currentGroup.map(sushi => <Sushi with props />)
      5. call renderFourSushi() in render() return
2. MoreButton
      1. add onClick to MoreButton component and set to clickHandler
      2. still in SushiContainer: define clickHandler
            use this.setState and increment currentGroupStartIndex by 4
3. Eat a sushi - In Sushi component
    1. set onClick to callback function eat
    2. define enclosed function 'eat'
          call props.eat(props)
    3. in SushiContainer, add prop called eat={this.props.eatHandler}
    4. in App, add prop to SushiContainer component eatHandler={this.eatHandler}
    5. in App, define eatHandler
          takes in sushiObj
          let newArray = this.state.sushi
          let foundObj = newArray.find(sushi => sushi.id === sushiObj.id)
          foundObj.eaten = true
          this.setState(()=>({
            sushi: newArray
          }))
4. Table stack of empty plates
    1. add to state, a property called dishes: []
    2. inside eatHandler, define dishArray = this.state.dishes
    3. call push on dishArray and pass sushiObj.id 
    4. inside the this.setState, include dishes: dishArray below sushi array
    5. pass prop to table called dishes={this.state.dishes}
    6. inside Table component, pass props.dishes as argument to renderPlates call

5. No free meals
    1. add wallet property to app state
    2. add prop to Table called wallet={this.state.wallet}
    3. in budget method
          use props.wallet, everything can stay the same
    4. in App eatHandler
          let newWallet = this.state.wallet
          add condition: if newWallet - sushiObj.price is >= 0
              then: do everything
          add to this.setState -- wallet: newWallet

6. Add to wallet
    1. Make a new component called AddMoney
          1. create file in components directory
          2. make it a class
          3. give state and add property 'amount' initialized at 0
          4. render method renders <form></form> with one input 
              one input type number
              one input type submit value is Add Money
          5. add onSubmit to form, = submitHandler
          6. add onChange for number input
                set value=this.state.amount
          7. define changeHandler
                takes event as arg
                calls this.setState and sets amount: event.target.value
                console.log this.state.amount
          7. define submitHandler with event as arg
                calls event.preventDefault()
                calls this.props.submitHandler and passes this.state.amount
          8. in App, define submitHandler, takes amount param
                let newWallet = this.state.wallet
                newWallet += amount
                calls this.setState and sets wallet: newWallet

*/