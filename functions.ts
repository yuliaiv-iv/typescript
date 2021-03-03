// functions

function add(n1: number, n2: number) { //add(n1: number, n2: number): number
  return n1 + n2
}

function result(num: number) { //result(num: number): void
  console.log("Result" + num)
}

console.log(result(add(5, 12))); //returns undefined

let combineValues: Function;

combineValues = add;
combineValues = result; //TS wont complane because it is a function but it doesnt take 2 argum

console.log(combineValues(8, 5)); //returns undefined

// function stored in variable
let combineValues2: (a: number, b: number) => number; // can take any function that takes 2 parameters where each is an number and return a number

combineValues2 = add;
// combineValues2 = result; // cannot use 1 parament and return void

console.log(combineValues2(6, 5));

// callback

function addAndHandle(num1: number, num2: number, cd: (num: number) => void) {
  const result = num1 + num2;
  cd(result)
}

addAndHandle(10, 20, (result) => {console.log(result)})