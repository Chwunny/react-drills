import React, { Component } from "react";
import "./App.css";
import List from "./List";
import NewTask from "./NewTask";

// prettier-ignore
export class App extends Component {
  constructor() {
    super()
    
    this.state = {
      list: []
    }
    // this.handleAddTask = this.handleAddTask.bind(this)
  }
  handleAddTask(task){
    this.setState({ list: [...this.state.list, task] })
  }

  render() {
    return (
      <div className="App">
        <h1>My To Do list</h1>
        <NewTask add={(input) => this.handleAddTask(input)} />
        <List tasks={this.state.list} />
      </div>
    )
  }
}

export default App;
