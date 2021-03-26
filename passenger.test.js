const Bag = require("./bag");
const { Passenger } = require("./person");

describe("creates passenger", () => {
  test("have a name", () => {
    const person1 = new Passenger("Bob");
    expect(person1.name).toEqual("Bob");
  });
  test("have a bag", () => {
    const person2 = new Passenger("Steve");
    const steveBag = new Bag(10);
    person2.addBag(steveBag);
    expect(person2.bags).toEqual([steveBag]);
  });
  test("is instance of passenger", () => {
    const george = new Passenger("George");
    expect(george instanceof Passenger).toBeTruthy();
  });
});
