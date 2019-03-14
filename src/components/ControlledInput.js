// Code ControlledInput Component Here
import React, { Component } from "react";

class ControlledInput extends Component{
  state={
    firstname: "",
    lastName: ""
  }

  handleFirstNameChange = (event) => {
  this.setState({
    firstName: event.target.value
  })
}

handleLastNameChange = (event) => {
  this.setState({
    lastName: event.target.value
  })
}


  render(){
    console.log(this.state)
    return(
      <div>
      <input onChange = {this.handleFirstNameChange} type="text" name="firstName" value={this.state.firstName} />
      <input onChange = {this.handleLastNameChange} type="text" name="lastName" value={this.state.lastName} />
      </div>
    )
  }
}


export default ControlledInput;
