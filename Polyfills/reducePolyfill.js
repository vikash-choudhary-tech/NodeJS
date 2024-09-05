const arr = [1, 2, 3, 4, 5];

// const response = arr.reduce(callback);
function callback(acc, item, index, arr) {
  return (acc += item);
}

// console.log(response);

Array.prototype.myReduce = function (callback, acc) {
  let startIndex = 0;
  if (acc === undefined) {
    acc = this[0];
    startIndex = 1;
  }
  for (let i = startIndex; i < this.length; i++) {
    acc = callback(acc, this[i], i, this);
  }
  return acc;
};

const response = arr.myReduce(callback, 0);

function callback(acc, item, index, arr) {
  return (acc += item);
}

console.log(response);
