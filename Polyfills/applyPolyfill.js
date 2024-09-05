Function.prototype.myApply = function (obj = {}, args) {
  if (typeof this !== "function") {
    throw new Error("myApply can be called upon functions only...");
  }
  if (!Array.isArray(args)) {
    throw new Error("myApply can accept arrays only...");
  }

  obj.fn = this;
  if (args) obj.fn(...args);
  else obj.fn();
};

const obj = {
  name: "vikash",
  age: 30,
};

function printName(param = "nothing") {
  console.log(this.name, ...param);
}

printName.apply(obj, ["My Name"]);
printName.myApply(obj, ["My Name"]);

// printName.apply(obj,'vikash');
printName.myApply(obj, "vikash");
