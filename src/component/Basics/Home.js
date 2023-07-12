import React, { Component } from 'react'

export class Home extends Component {
  
  constructor(props) {
    super(props)
  
    this.state = {
       message : 'This is Home'
    }
  }
  
  changeMessage(){
        this.setState({
          message : 'You are in Home.'
        })
  }
  
  
  render() {
    return (
      <div>
        <h1>{this.state.message}</h1>
        <button onClick={() => this.changeMessage()}>Home</button>
      </div>
    )
  }
}

export default Home
