import React, { Component } from 'react';
import Hunter from './hunter';
import AddHunter from './addHunter';

class App extends Component {
  state = {
    hunters: [
      {name: 'Dante', age: 45, sword: "Rebellion", devilTrigger: true},
      {name: 'Vergil', age: 45, sword: "Yamato", devilTrigger: true},
      {name: 'V', age: 25, sword: "Demon Summon", devilTrigger: true},
      {name: 'Lady', age: 34, sword: "Rocket", devilTrigger: false}
    ]
  }

  addHunter = (hunter) => {
    let hunters = [...this.state.hunters, hunter];
    this.setState({
      hunters: hunters
    })
  }

  render() {
    console.log(this.state.hunters)
    return (
      <div className="App">
        <h1>React  App</h1>
        <p>Welcome!</p>

        <Hunter hunters={this.state.hunters} />
        <AddHunter addHunter={this.addHunter}/>

      </div>
    );
  }
}

export default App;
