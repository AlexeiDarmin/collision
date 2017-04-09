import React, { Component } from 'react';
import './App.css';

import Vehicle from './Vehicle';

class App extends Component {

  generateVehicles = (numberOfVehicles, addVehicleToStore) => {
    const vehicles = []
    for (let i = 0; i < numberOfVehicles; i++) {
      vehicles.push(<Vehicle ref={addVehicleToStore}/>)
    }
    return <div>{vehicles}</div>
  }

  render() {
    const addVehicleToStore = (node) => {
      const { store: { vehicles } } = window
      if (vehicles.indexOf(node) === -1) {
        vehicles.push(node)
      }
      // console.log('push store:', node, vehicles)
    }

    return (
      <div className="App">
        {this.generateVehicles(15, addVehicleToStore)}
      </div>
    );
  }
}

export default App;
