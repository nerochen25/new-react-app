import React, { Component } from 'react';
import Hunter from './hunter';
import AddHunter from './addHunter';

class App extends Component {
  state = {
    hunters: [
      {id: 1, name: 'Dante', age: 45, sword: "Rebellion", devilTrigger: true},
      {id: 2, name: 'Vergil', age: 45, sword: "Yamato", devilTrigger: true},
      {id: 3, name: 'V', age: 25, sword: "Demon Summon", devilTrigger: true},
      {id: 4, name: 'Lady', age: 34, sword: "Rocket", devilTrigger: false},
      {id: 5, name: 'Nero', age: 25, sword: "Red Queen", devilTrigger: true},
    ]
  }

  addHunter = (hunter) => {
    hunter.id = Math.random();
    let hunters = [...this.state.hunters, hunter];
    this.setState({
      hunters: hunters
    })
  }

  deleteHunter = (id) => {
    let hunters = this.state.hunters.filter(hunter => {
      return hunter.id !== id
    })
    this.setState({
      hunters: hunters
    })
  }

  editHunter = (hunter) => {
    
  }

  render() {
    console.log(this.state.hunters)
    return (
      <div className="App">
        <h1>React  App</h1>
        <p>Welcome!</p>

        <Hunter deleteHunter={this.deleteHunter} hunters={this.state.hunters} />
        <AddHunter addHunter={this.addHunter}/>

      </div>
    );
  }
}

export default App;
