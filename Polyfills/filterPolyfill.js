/*
Assume that you are PERSON1 
You want to do something
You call PERSON2
Give him a set of information that is a bucket of oranges
Ask him to goto market and check all the oranges are good or not if good then adds to the basket
PERSON2 does the job and returns the set of double oranges 
*/


Array.prototype.personOne = function (personTwo, context = this) {
  const arr = [];
  for (let i = 0; i < context.length; i++) {
    if (personTwo(context[i], i, context)) {
      arr.push(context[i]);
    }
  }
  return arr;
};

const arr = [1, 2, 3, 4, 5, 6];

const result = arr.personOne((item) => item % 2 !== 0);
console.log("Result", result);
