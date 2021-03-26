class Person {
  constructor(name) {
    this.name = name;
    this.bags = [];
  }

  addBag(bag) {
    this.bags.push(bag);
  }
}

class Passenger extends Person {
  callCrew() {
    console.log("calling crew");
  }
}

class Crew extends Person {
  attendToPassenger() {
    console.log("How can I help?");
  }
}
module.exports = { Person, Crew, Passenger };
