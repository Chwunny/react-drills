import React, { Component } from "react";
import axios from "axios";
import "./App.css";
// import Search from "./Search";

// prettier-ignore
export class App extends Component {
  constructor() {
    super()
    this.state = {
      input: "",
      name: "",
      id: null,
      sprite: null,
      type: ""
    }
  }

  async handleInput(val){
    await this.setState({ input: val })
  }

  handleSubmit = (e) => {
    e.preventDefault()
    axios.get(`https://pokeapi.co/api/v2/pokemon/${this.state.input.toLowerCase()}`)
    .then(res => {
      // console.log(res.data)
      this.setState( { name: res.data.name, id: res.data.id, sprite: res.data.sprites.front_default, type: res.data.types[0].type.name } )
    })
    this.setState({ input: "" })
    document.getElementById('pokemonName').classList.remove("hidden")
  }
  
  render() {
    return (
      <div className="App">
      <form onSubmit={this.handleSubmit}>
        <input value={this.state.input} placeholder="Search for a pokémon" onChange={(e) => this.handleInput(e.target.value)}/>
        <button>Search</button>
      </form>
      <p id="pokemonName" className="hidden" >{this.state.name.charAt(0).toUpperCase() + this.state.name.slice(1)}{` Id: ${this.state.id}`}</p>
      <img src={this.state.sprite} alt="" />
      <p>{this.state.type.charAt(0).toUpperCase() + this.state.type.slice(1)}</p>
      </div>
    )
  }
}

export default App;
