const Plane = require("./plane");
const { Crew, Passenger } = require("./person");
const Airport = require("./airport");
const Bag = require("./bag");

describe("destination", () => {
  test("shows correct destination", () => {
    const country = new Plane("Canada");
    expect(country.destination).toEqual("Canada");
  });
  test("shows when passenger boarded", () => {
    const passenger1 = new Passenger("John");
    const johnBag = new Bag(10);
    passenger1.addBag(johnBag);
    const floridaFlight = new Plane("FL");
    floridaFlight.board(passenger1);
    console.log(floridaFlight);
    expect(floridaFlight.boardedPassengers).toEqual([passenger1]);
  });
  test("shows when crew boarded", () => {
    const crewMember = new Crew("Paul");
    const ausFlight = new Plane("AUS");
    ausFlight.board(crewMember);
    console.log(ausFlight);
    expect(ausFlight.boardedCrew).toEqual([crewMember]);
  });
  test("shows when passenger and crew boarded on same plane", () => {
    const nyFlight = new Plane("NY");
    const crewMember = new Crew("Paul");
    nyFlight.board(crewMember);
    const passengerMember = new Passenger("Sarah");
    nyFlight.board(passengerMember);
    console.log(nyFlight);
    expect(nyFlight.boardedPassengers).toEqual([passengerMember]);
    expect(nyFlight.boardedCrew).toEqual([crewMember]);
  });
});
