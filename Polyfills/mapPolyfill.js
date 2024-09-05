/*
Assume that you are PERSON1 
You want to do something
You call PERSON2
Give him a set of information that is a bucket of oranges
Ask him to goto market and double all the oranges that is ask the shopkeeper to give 2 oranges instead of one
PERSON2 does the job and returns the set of double oranges 
*/

const arr = [2, 1, 3, 4, 5];

Array.prototype.personOne = function (personTwo, context = this) {
  let arr = [];
  console.log("this", context);
  for (let i = 0; i < context.length; i++) {
    arr.push(personTwo(context[i], i, context));
  }
  return arr;
};

const result = arr.personOne((item) => item * 10);

console.log(result);
