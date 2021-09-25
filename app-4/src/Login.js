import React, { Component } from "react";

//prettier-ignore
export class Login extends Component {
  constructor() {
    super();
    this.state = {
      username: "",
      password: "",
    };
  }
  async handleUser(val){
      await this.setState({ username: val })
      console.log(this.state.username)
  }
  async handlePass(val){
      await this.setState({ password: val })
      console.log(this.state.password)
  }
  saveUser(){
      alert(`Username: ${this.state.username}, Password: ${this.state.password}`)
      console.log(`Username: ${this.state.username}, Password: ${this.state.password}`)
  }
  render() {
    return (
      <div>
        <input type="text" placeholder="username" onChange={e => this.handleUser(e.target.value)} />
        <input type="text" placeholder="password" onChange={e => this.handlePass(e.target.value)}/>
        <button onClick={() => this.saveUser()}>Login</button>
      </div>
    );
  }
}

export default Login;
