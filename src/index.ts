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
// even the properties of an object must have a type

let employee: {
    id: number,
    name: string,
    retire: (date: Date) => void
} = {
    id: 17,
    name: "Marcy",
    retire: (date: Date) => console.log(date)
}

//------------------------------
// >> ADVANCED TYPES

// 1. TYPE ALIASES
// you can use "type" or "interface"

type EmployeType = {
  id: number,
  name: string,
  retire: (date: Date) => void
}

let typeAliasEmployee: EmployeType = {
  id: 17,
  name: "Marcy",
  retire: (date: Date) => console.log(date)
}

// 2. Union Types
// the vertical bar -> " | " is considered OR 

// Narrowing technique is narrowing the union type into a specific type 

function getWeight(kg: number | string): number {

  // Narrowing technique
  if (typeof kg === 'number') return kg * 1 // returning number

  return parseInt(kg); // converting string into interger
}

// 3. Intersection Types
// use & to intersect types

type AdditionType = {
  add: () => void
};

type SubtractType = {
  subtract: () => void
}

type ComputeType = AdditionType & SubtractType;

let numberToCompute: ComputeType = {
  add: () => {
    console.log("this is from AdditionType")
  },
  subtract: () => {
    console.log("this is from SubtractType")
  },
}

// 4. Literal Types
// if you want to add an exact or specific value

type Quantity = "Dozen" | 100

let quantity: Quantity;
quantity = "Dozen";
quantity = 100; 
// quantity = 90; // <- ERROR

// 5. Nullable Types

function greet(name: string | null | undefined): void {
  if (name) return console.log("Nice name");
  return console.log("Hola");
}

// 6. Optional Chaining
// if the property or element is possible to be null or undefined

type Customer = {
  birthday?: Date
}

function getBirthday(id: number): Customer | null | undefined {
  return id === 0 ? null : { birthday: new Date() }
}

let customer = getBirthday(0);

// Optional property access operator
console.log(customer?.birthday?.getFullYear);

// Optional element access opertor <- used for arrays
// customers?.[0]

// Optional call <- used for referencing functions
let log: any = null;
log?.('a'); // <- this will only be excuted if "log" is referencing a function
