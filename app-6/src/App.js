import React, { Component } from "react";
import Todo from "./Todo";
import "./App.css";

// prettier-ignore
class App extends Component {
  constructor() {
    super()

    this.state = {
      list: [],
      input: ""
    }
  }

  handleInput(val){
    this.setState({ input: val})
  }

  handleAddTask(){
    this.setState({
      list: [...this.state.list, this.state.input],
      input: ""
    })
    document.getElementById("input1").value = "";
  }


  render() {
    let list = this.state.list.map((el, index) => {
      return <Todo key={index} task={el} />
    })

    return(
      <div className="App">
        <h1>My To Do List</h1>

        <div>
        <input id="input1" placeholder="Add an item to your list" type="text" onChange={(e) => this.handleInput(e.target.value)}/>
        <button onClick={() => this.handleAddTask()}>Add</button>
        </div>
        {list}
      </div>
    )
  }
}

export default App;

// value={this.state.input}
