import React, { Component } from "react";

// prettier-ignore
export class NewTask extends Component {
    constructor() {
        super()

        this.state = {
            input: ""
        }
    }

    handleInputChange(value) {
        this.setState( {input: value })
    }

    handleAdd() {
        this.props.add(this.state.input)
        this.setState({ input: "" })
    }

  render() {
    return(
        <div>
            <input 
            type="text"
            placeholder="Enter new task"
            onChange={e => this.handleInputChange(e.target.value)}
            value={this.state.input}
            />

            <button onClick={() => this.handleAdd()}>Add</button>
        </div>
    )
  }
}

export default NewTask;
