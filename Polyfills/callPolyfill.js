const obj = {
  name: "vikash",
};

function printName(param1, param2) {
  console.log(this.name, param1, param2);
}

Function.prototype.myCall = function (obj = {}, ...args) {
  if (typeof this !== "function") {
    throw new Error("myCall can be called upon functions only...");
  }
  obj.fn = this;
  obj.fn(...args);
};

printName.call(obj, "nicky", "kumar");
printName.myCall(obj, "nicky", "kumar");

printName.call(obj);
printName.myCall(obj);
