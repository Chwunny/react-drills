import React, { Component } from "react";

// prettier-ignore
export class Todo extends Component {
    render() {
        return (
            <div>
                {this.props.task}
            </div>
        )
    }
}

export default Todo;
