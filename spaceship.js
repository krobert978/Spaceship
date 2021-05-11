
const SpaceShip = {
  'fuel': 400,
  'passengers': ['John', 'Steve', 'Sam', 'Danielle'],
  'shields': true,
  'speedometer': 0,
  listPassengers() {
    for (let i = 0; i < this.passengers.length; i++) {
      console.log('Passenger ' + (i + 1) + ': ' + SpaceShip.passengers[i]);
    }
  },
  addPassenger(newPassenger) {
    SpaceShip.passengers.push(newPassenger);
    console.log(newPassenger + ' was added to the ship');
  },
  travel(distance) {
    let originalFuel = this.fuel;
    console.log('trying to travel: ' + distance);
    if (this.fuel === 0) {
      console.log('cant go further, tank is empty');
    } else {

      this.fuel = this.fuel - (distance / 2);
      if (this.fuel < 0) {
        distance = originalFuel * 2;
        console.log('can only travel: ' + distance);
        this.fuel = 0;
      }
      this.speedometer = this.speedometer + distance;
      if (this.fuel < 30) {
        this.shields = false;
        console.log('fuel is low, turning off shields... ');
      }
      console.log('the SpaceShip is at: ' + this.speedometer);
      console.log('the SpaceShip has ' + this.fuel + ' fuel');
    }

  }
};

SpaceShip.listPassengers();
SpaceShip.addPassenger('Lindsay');
SpaceShip.listPassengers();
SpaceShip.travel(750);
SpaceShip.travel(200);
SpaceShip.travel(100);


