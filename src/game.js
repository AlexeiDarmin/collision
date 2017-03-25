/*
    'direction' is a number from 0 to 3 where 0 = up, 1 = right, 2 = down, 3 = left
*/



export const initVehicle = () => {
  const size = getRandomInt(5, 25) + 'px'
  return {
    styles: {
      width: size,
      height: size,
      background: 'black',
      top: getRandomInt(0, 500) + 'px',
      left: getRandomInt(0, 500) + 'px',
      position: 'absolute'
    },
    props: {
      health: 100,
      direction: getRandomInt(0, 4)
    }
  }
}

export const startMoveVehicleLoop = (vehicle, direction) => {
  // console.log('start vehicle')
  setTimeout(() => moveVehicle(vehicle, direction), 16);
}

function moveVehicle(vehicle, direction) {
  // console.log('move vehicle', direction)
  // debugger
  // console.log(direction)
  if (direction == 0) {            // up
    vehicle.style.top = vehicle.offsetTop - 1 + 'px'
  } else if (direction == 1) {     // right
    vehicle.style.left = vehicle.offsetLeft + 1 + 'px'
  } else if (direction == 2) {     // down
    vehicle.style.top = vehicle.offsetTop + 1 + 'px'
  } else if (direction == 3) {     // left
    vehicle.style.left = vehicle.offsetLeft - 1 + 'px'
  }

  setTimeout(() => moveVehicle(vehicle, direction), 16)
}

function getRandomInt(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min)) + min;
}
