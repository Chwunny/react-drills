import React, { Component } from "react";
// import logo from "./logo.svg";
import "./App.css";

//prettier-ignore
class App extends Component {
  constructor() {
    super()
    this.state = {
      filteredString: "",
      unfilteredArray: ["spaghetti", "ice cream", "sushi", "bologna", "cheese"],
    };
  }

  handleChange(val){
    this.setState( { filteredString: val} )
  }

  render(){
    let foodsToDipslay = this.state.unfilteredArray
    .filter(e => {
      return e.includes(this.state.filteredString)
    })
    .map(e => {
      return <h2>{e}</h2>
    })

    return (
      <div>
      <input type="text" onChange={e => this.handleChange(e.target.value)}/>
      {foodsToDipslay}
      </div>
    )
  }
}

export default App;
