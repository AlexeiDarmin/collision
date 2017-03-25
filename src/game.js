/*
    'direction' is a number from 0 to 360 representing degrees.
      To start it will only be 0, 90, 180, or 270 for simplicity.
*/



export const initVehicle = () => {
  return {
    styles: {
      width: '50px',
      height: '50px',
      background: 'black'
    },
    props: {
      health: 100,
      direction: 0
    }
  }
}

export const startMoveVehicleLoop = (vehicle) => {
  console.log('start vehicle')
  setTimeout(() => moveVehicle(vehicle), 16);
}

function moveVehicle(vehicle) {
  console.log('move vehicle')

  vehicle.style.left = vehicle.offsetLeft + 1 + 'px'

  setTimeout(() => moveVehicle(vehicle), 16)
}
