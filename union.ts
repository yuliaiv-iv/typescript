// type Union (flexible) 

function combine(
  input1: number | string, 
  input2: number | string, 
  resultType: string // type Literal. or => "as-number" | "as-text"
  ) { // combine types. can pass as many as needed

  let result;
  if(typeof input1 === 'number' && typeof input2 === 'number' || resultType === "as-number") {
    result = +input1 + +input2;
  } else {
    result = input1.toString() + input2.toString(); 
  }
  return result;
}

const combineAges = combine(30, 20, "as-number");

const combineNames = combine("Alex", "Max", "as-text");

const combineStringAges = combine("30", "25", "as-number");

// type Aliases 

type Combinable = number | string; //reuseble 
type Conversion = "as-number" | "as-text";

function combine1(
  input1: Combinable, 
  input2: Combinable, 
  resultType: Conversion
  ) {}
