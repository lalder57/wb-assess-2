// Unit 2 Assessment: arrow-fns.js

// Set the value of giveMeTwo to an arrow function that returns 2.
//
// Ex.:
//   giveMeTwo();
//   => 2
const giveMeTwo = () => 2;

// Set the value of addNums to an arrow function that takes in two numbers and
// returns their sum.
//
// Ex.:
//   addNums(1, 2);
//   => 3
const addNums = (num1, num2) => num1 + num2;

// Set the value of max to an arrow function that takes in two numbers and
// returns the largest one.
//
// Ex.:
//   max(1, 2);
//   => 2
const max = (num1, num2) => Math.max(num1, num2);

// Given an array of numbers, return a new array that only includes the even
// numbers. Do this using array iteration methods. Do NOT use a for loop.
//
// Ex.:
//   evens([1, 2, 3, 4, 5]);
//   => [2, 4]
const evens = (nums) => {
  const isEven = (num) => num % 2 === 0;
  return nums.filter(isEven);
}

// Given an array of names, return a new array of greetings for each name. Do
// this using array iteration methods. Do NOT use a for loop.
//
// Ex.:
//   createGreetings(['Clive', 'Jill', 'Torgal']);
//   => ['Hello, Clive!', 'Hello, Jill!', 'Hello, Torgal!']

const createGreetings = (names) => names.map((name) => "Hello, " + name + "!");

// Given an array of words, return a new array where each word is uppercased
// and only includes words that are longer than 4 characters. Do this using
// array iteration methods (you may need more than one). Do NOT use a for loop.
//
// Ex.:
//   loudLongWords(['apple', 'pear', 'cake', 'pinata']);
//   => ['APPLE', 'PINATA']

const loudLongWords = (arrayWords) => {
  let biggerThanFour = [];
  for (let i = 0; i < arrayWords.length; i++)
  if (arrayWords[i].length > 4) {
    biggerThanFour.push(arrayWords[i]);
  }

  const capitalize = (word) => {
    return word.toUpperCase();
  }

  const capitalizeWords = biggerThanFour.map(capitalize);

  return capitalizeWords;
}


export { addNums, createGreetings, evens, giveMeTwo, loudLongWords, max };