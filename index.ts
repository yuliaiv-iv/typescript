
// Types
// passing arguments into function 
function addNumbers(num1: number, num2: number, showResult: boolean, phrase: string) { // any accepts strings as well
  if(showResult) {
    console.log(phrase, num1 + num2);
  } else {
    throw new Error('Cannot sum')
  }
}
const number1 = 5; //cannot be string / error
const number2 = 2.5;
const printResult = true;
const showPhrase = 'The sum is';

addNumbers(number1, number2, printResult, showPhrase);

//Arrays, type can be flexible or strict

const person: {
  name: string;
  age: number;
  hobbies: string[];
  role: [number, string]; // just an example of Tuple - fixed-length array
} = {
  name: "Alex",
  age: 30,
  hobbies: ["Sports", "Cooking"], /// hobbies: string[]
  role: [2, "author"] // array with exact 2 elements => role: (string | number)[]
};

let activity: string[]; // would be an array of strings
activity = ["Hiking"]; // cannot add a number inside

let activity2: any[];
activity2 = ["Hiking", 2]; // accepts all types

for(const hobby of person.hobbies) {
  console.log(hobby.toUpperCase()); // can use singe TS detects a string
}

// Enum

enum Role { ADMIN, READ_ONLY, AUTHOR }; // our own custom type (ADMIN is enum member = 0)
//enum Role { ADMIN = 5, READ_ONLY, AUTHOR }; // can asign an start number

const person2 = {
  name: "Max",
  age: 35,
  hobbies: ["Sports", "Cooking"],
  role: Role.AUTHOR
};

if(person2.role === Role.AUTHOR) {
  console.log('it is');
}

// Any type => any kind of value
