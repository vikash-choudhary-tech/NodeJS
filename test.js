const Event = require("node:events");

class Test extends Event {
  constructor() {
    super();
  }

  getName() {
    return this.name;
  }

  setName(name) {
    this.name = name;
  }

}

module.exports = Test;
