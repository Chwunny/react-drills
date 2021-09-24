import React, { Component } from "react";
import "./App.css";

//prettier-ignore
class App extends Component {
  constructor() {
    super()
    this.state = {
      message: ""
    }
  }

  handleChange(val){
    this.setState({ message: val })
  }

  render() {
    return (
    <div>
      <input className="inputBox" type="text" onChange={e => this.handleChange(e.target.value)}/>
      <p className="responseBox">{this.state.message}</p>
    </div>
    )
  }
}

export default App;
