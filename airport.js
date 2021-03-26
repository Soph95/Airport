const fs = require("fs");

class Airport {
  constructor(name) {
    this.name = name;
  }

  getInfo(callback) {
    fs.readFile("./airportsData.json", (err, data) => {
      callback(err, JSON.parse(String(data)));
    });
  }
}
module.exports = Airport;
