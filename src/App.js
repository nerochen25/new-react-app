import React, { Component } from 'react';
import Ninja from './ninja';

class App extends Component {
  state = {
    ninjas: [
      {name: 'Dante', age: 45, sword: "Rebellion", devilTrigger: true},
      {name: 'Vergil', age: 45, sword: "Yamato", devilTrigger: true},
      {name: 'V', age: 25, sword: "Demon Summon", devilTrigger: true},
      {name: 'Lady', age: 34, sword: "Rocket", devilTrigger: false},
      {name: 'Nero', age: 25, sword: "Red Queen", devilTrigger: true},
    ]
  }
  render() {
    console.log(this.state.ninjas)
    return (
      <div className="App">
        <h1>React  App</h1>
        <p>Welcome!</p>

        <Ninja hunters={this.state.ninjas} />

      </div>
    );
  }
}

export default App;
