const { Passenger } = require("./person");

class Plane {
  constructor(destination) {
    this.destination = destination;
    this.boardedPassengers = [];
    this.boardedCrew = [];
  }

  board(person) {
    if (person instanceof Passenger) {
      this.boardedPassengers.push(person);
    } else {
      this.boardedCrew.push(person);
    }
  }
}

module.exports = Plane;
