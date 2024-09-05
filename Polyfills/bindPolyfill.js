Function.prototype.myBind = function (obj = {}, ...passedArgs) {
  obj.fn = this;
  return function (...args) {
    obj.fn.apply(obj, [...passedArgs, ...args]);
  };
};

const obj = {
  name: "vikash",
};

function printName(...param) {
  console.log(this.name + " " + param);
}

// const res = printName.bind(obj);
const res = printName.myBind(obj);
res();
