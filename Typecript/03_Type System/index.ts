///////////////////////
// Any type
let firstName: any = "Mark"; // forcing ts to set `any` type
firstName = 3;  // since `any`, it works
firstName = [1, 2, 3, 4];  // since `any`, it works
///////////////////////

///////////////////////
// unknown
function doubleIt(number: unknown) {

    // checking the unknown type!! (NOT IDEAL tho)
    if (typeof (number) === "number") {
        return number * 2;
    }
    return new Error("Please Provide a valid number");
}

// console.log(doubleIt(2)) // 4
// console.log(doubleIt('he')) // error
///////////////////////

///////////////////////
// Type Alias
// js: types
//  Date, Array, Map, Set, Promise, RegExp, Error, 
//  Function, Symbol, WeakMap, WeakSet
type CustomString = string;
type CustomNumber = number;

let cString: CustomString = "hello" // string - automatic conversion `AT TIME`
let cNumber: CustomNumber = 66; // number
///////////////////////

///////////////////////
// Inference, Annotation, Duck Typing, Declaration
// Declaration: create a custom type name.
type declareString = string;

// Annotation: manually say what the variable’s type is.
let dFistName: declareString = "Mark";

// inference: TypeScript figures out the type on its own.
let finalResult = 5 + 2;

// duck typing: TS checks types based on shape, not names
type Person = { name: string; age: number };
let personUser = { name: "Jun", age: 24 };
function printPerson(p: Person) {
    console.log(p.name);
}

printPerson(personUser);  // Works because "personUser" has the same structure
///////////////////////


///////////////////////
// Union
type union1 = string | number;
type union2 = number | undefined | string

let sOrN: union1 = 122;
sOrN = '122';
///////////////////////

///////////////////////
// Conditional Types
type CustomDate = Date;
type CustomString2 = string;

type TrueString = CustomString2 extends string ? true : false;
type ConditionalNumber = CustomDate extends CustomDate ? number : string;
type DateAssignment = CustomDate extends Date ? Date : undefined;

type IsArray<T> = T extends any[] ? true : false;

type C = IsArray<string[]>;  // true
type D = IsArray<number>;    // false
///////////////////////

///////////////////////
// Type Casting
let fN = <any>"Marm"
let lN = "Doe" as any;

let tcUser = {
    name: "Mark",
    email: "mark22@gmail.com"
};

type User = {
    name: string;
    email: string;
};

function fetchUser(){
    return tcUser as User;
}

const fetchedUser = fetchUser() // type User by casting



///////////////////////

let city = "New York"; // string
let population = 8400000; // number
const age = 32; // 32 (not a number)
let oldAge = 79 as const; // 79 (not a number)
let newAge = oldAge; // 79 (not a number)
let data = new Map(); // Map
let score = [90, 86, 100]; // number[]
type Primitive = string | number | boolean;
type CustomName = "John" extends string ? string : "John"; // string
type CustomAge = typeof newAge extends number ? 79 : number; // 79
type CheckData = typeof data extends Object ? true : false; // true
type CheckScore = typeof score extends never ? {} : []; // []

/**
 * Are the following statements valid
 * Check if below lines of code are valid as per TypeScript or not without uncommenting them
 *  */

// age = 85;
score.push(10);
// score.push("New Score");
// let customAge: CustomAge = 50;
// let primitive: Primitive = new Date();
let years: CheckScore = [];