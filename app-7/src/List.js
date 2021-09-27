import React, { Component } from "react";
import Todo from "./Todo";

//prettier-ignore
export class List extends Component {
  render() {
    let list = this.props.tasks.map((el, index) => {
        return <Todo key={index} task={el} />
    })

    return <div>{list}</div>;
  }
}

export default List;
