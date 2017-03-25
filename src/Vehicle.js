import React, { Component } from 'react';
import * as game from './game'

class Vehicle extends Component {

  constructor(props){
    super(props)

    const initVehicle = game.initVehicle()

    this.state = {
      styles: initVehicle.styles,
      health: initVehicle.props.health,
      direction: initVehicle.props.direction,
      node: null
    }
  }


  render(){
    const { styles, health, direction, node } = this.state

    const saveSelf = (self) => {
      if (self && !node) {
        setTimeout(() => game.startMoveVehicleLoop(self, direction), 1)
        this.setState({node: self})
        return null
      }
    }



    return <div style={styles} ref={saveSelf}></div>
  }
}


export default Vehicle;
