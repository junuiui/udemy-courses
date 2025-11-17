// Primitives
let age: number = 10;
age = 20;

let userName: string;
userName = "username"

let isTrue: Boolean;
isTrue = true;

// Arrays/Objects
let arr: string[];
arr = ['1', '2', '3'];

let person: {
  name: string;
  age: number;
};

person = {
  name: "J",
  age: 32
}

person = {
  name: "J",
  age: 32,
  // sex: true // DOES NOT WORK!! 
}

// Type Inference
let course = 'Course'
course = 12345;

// Union Types
let course_union: string | number = 'Course'
course_union = 12345;

// Type Aliases
type Dog = {
  name: string;
  age: number;
} // New type (custom)

let dog: Dog;

// Functions

/**
 * 
 * @param a number
 * @param b number
 * @returns ` number `
 */
function add(a: number, b: number): number {
  return a + b;
}

// type not needed!!
// return void (returns nothing)
function print(value: any): void {
  console.log(value);
}

// Non - Generics
function insertAtBeginning(arr: any[], value: any) {
  const newArr = [value, ...arr];
  return newArr;
}

const demoArr = [1, 2, 3, 4]; // type: any

const newArr = insertAtBeginning(demoArr, 0); // type: any

// Generic
function insertAtBeginningGeneric<T>(arr: T[], value: T) {
  const newArr = [value, ...arr];
  return newArr;
}

const demoArr2 = [1, 2, 3, 4]; // type number (due to generic)
const newArr2 = insertAtBeginningGeneric(demoArr, 0); // type number (due to generic)
