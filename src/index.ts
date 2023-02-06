// Source: https://www.youtube.com/watch?v=d56mG7DezGs&t=2255s

// DATA TYPES
// 1. ANY
let sales = 123_324;
let course = "Typescript";
let isPublished = true;

function render(document: any) {
  console.log(document);
}

// 2. ARRAY
let number: number[] = [1, 2, 4];
// let number: number[] = [1,2,"4"]; <- this is invalid

let letters: string[] = [];
letters[0] = "This is a string";
// letters[1] = 2; <- this is invalid

// 3. TUPLE
// Example we want to store [17, "Marcy"]
let user: [number, string] = [17, "Marcy"];

// 4. ENUMS

// Constant values
// const small = 1;
// const medium = 2;
// const large = 3;

const enum Size {
  Small = 1,
  Medium,
  Large,
} // in default, the first member is 0
let mySize: Size = Size.Large; // 3

//------------------------------

// FUNCTIONS
// parameters have types and the return also
// if function does not return anything, void will be the type
// if parameters can be optional then only add ?:
// when adding a default value to a parameter just simply add a value -> sampleFunction(arg = 1000): void {  }

function calculateTax(income = 5000, job?: string): string {
  if (income > 1000 && job === "decent job") return "nice";

  return "oh noh";
}

calculateTax(10000, "decent job");

//----------------------------

// OBJECTS
