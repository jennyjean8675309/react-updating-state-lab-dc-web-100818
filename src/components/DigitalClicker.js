import React, { Component } from 'react'

class DigitalClicker extends Component {
  constructor(){
    super()
    this.state = {
      timesClicked: 0
    }
  }

  incrementButton = () =>{
    let newNumber = this.state.timesClicked + 1
    this.setState({
      timesClicked: newNumber
    })
  }
  render(){
    return <button onClick={this.incrementButton}>{this.state.timesClicked}</button>
  }
}

export default DigitalClicker
