const Airport = require("./airport");
const Plane = require("./plane");
const { Passenger } = require("./person");
const Bag = require("./bag");

describe("airport name", () => {
  test("gives airport name", () => {
    const airportName = new Airport("Heathrow");
    expect(airportName.name).toEqual("Heathrow");
  });
});
