////////////////////////////////////
// Declare functions
// named function
function intro(name: string): string {
    return name;
}

// function expression
const intro2 = function (name: string): string {
    return name;
}

// arrow function
const intro3 = (name: string): string => { return name }

////////////////////////////////////
// optional parameter
function optionalParam(name: string, age?: number) {
    if (age) { // check if age is passed
        return age;
    }
    return name;
}

////////////////////////////////////
// Custom Parameters and return types 
enum AgeUnit {
    Years = "years",
    Months = "months"

}

type Person3 = {
    name: string;
    age: number;
    ageUnit: AgeUnit
}

const person3: Person3 = {
    name: "Scott",
    age: 30,
    ageUnit: AgeUnit.Years,
}

function convertAgeToMonths(person: Person3): Person3 {
    if (person.ageUnit === AgeUnit.Years) {
        person.age = person.age * 12;
        person.ageUnit = AgeUnit.Months;
    }

    return person;
}

console.log(convertAgeToMonths(person3))


////////////////////////////////////
// Function Signature
type Person4 = {
    name: string;
    age: number;
    ageUnit: AgeUnit;
    // greet: Function // also works
    greet: (greeting: string) => string // function call signature
}

const person4: Person4 = {
    name: "Scott",
    age: 30,
    ageUnit: AgeUnit.Years,
    greet(greeting) {
        return greeting
    },
}

////////////////////////////////////
// Anonymous
const numberss = [3, 4, 5, 1, 2, 4, 5, 6, 1, 2, 3, 4, 5, 6, 7]

numberss.map((num) => {
    console.log(num)
})

////////////////////////////////////
// void and never Types
function printHello(value: string = "hello"): void {
    console.log(value)
}

function throwError(error: string): never {
    throw new Error(error);
}

////////////////////////////////////
// Async Function 
// Always return Promise<T>
async function fetchFromDB(id: number): Promise<any> { }

const anotherAsyncFn = async (): Promise<any> => { }

async function returnString(id: number): Promise<string> {
    return Promise.reject("string");
}

type User2 = {
    name: string;
    age: number;
};

async function returnUser(id: number): Promise<User2> {
    return Promise.resolve({ name: "John", age: 20 })
}

//////////////////////////////////// 
// Rest Parameters and arguments
function multiplyBy(by: number, ...numbers: number[]): number[] {
    return numbers.map((num) => by * num)
}

const args = [5, 2] as const; // need "as const" to make it tuple
// const angle = Math.atan2(args)
const angle = Math.atan2(...args)

const args2: [number, number] = [5, 2];
const angle2 = Math.atan2(...args2)

////////////////////////////////////
// Parameter Destructuring
type Numbers = {
    a: number;
    b: number;
    c: number;
}

let numbers: Numbers = {
    a: 11,
    b: 22,
    c: 33
}

// function sum({ numbers }: { numbers: Numbers; }): number {
//     return numbers.a + numbers.b + numbers.c // very lengthy
// }

function sum({ a, b, c }: Numbers): number {
    return a + b + c
}

////////////////////////////////////
// Overloading
const str = "Hello, World!"
const part1 = str.slice(0, 7)
console.log(part1)

type Reservation = {
    departureDate: Date;
    returnDate?: Date;
    departingFrom: string;
    destination: string;
}

// function overloading!!
type Reserve = {
    (
        departureDate: Date,
        returnDate: Date,
        departingFrom: string,
        destination: string,
    ): Reservation | never;
    (
        departureDate: Date,
        departingFrom: string,
        destination: string,
    ): Reservation | never
};

const reserve: Reserve = (
    departureDate: Date,
    returnDateOrDepartingFrom: Date | string,
    departingFromOrDestination: string,
    destination?: string
) => {
    if (returnDateOrDepartingFrom instanceof Date && destination) {
        return {
            departureDate: departureDate,
            returnDate: returnDateOrDepartingFrom,
            departingFrom: departingFromOrDestination,
            destination: destination
        }
    }
    else if (typeof returnDateOrDepartingFrom === 'string') {
        return {
            departureDate: departureDate,
            departingFrom: returnDateOrDepartingFrom,
            destination: departingFromOrDestination,
        }
    }

    throw new Error('NOT VALID');
}


/**
 * Practice Excercise for functions
 */

//* 1. Declare a function named greet that takes a string parameter name and returns a greeting message.
const greet = (name: string) => { return `Hello, ${name}` }

//* 2. Define an type Product with properties id (number) and name (string). Create a function named getProduct that takes an id parameter and returns a Product.
type Product = {
    id: number;
    name: string;
}

const getProduct = (id: number): Product => {
    return {
        id: id,
        name: "Sample"
    }
}

//* 3. Declare a function signature named Calculator as a type that takes two numbers and returns a number. Implement two functions add and subtract that match this signature.
type Calculator = (firstNumber: number, secondNumber: number) => number
const add: Calculator = (a: number, b: number) => { return a + b }
const substract: Calculator = (a: number, b: number) => { return a - b }

//* 4. Create a function named logMessage that takes a string message and logs it to the console, returning void. Also, create a function named throwError that takes a string message and throws an error, returning never.

const logMessage = (message: string) : void => {
    console.log(message)
}

const throwError2 = (message: string) : never => {
    throw new Error(message)
}
////////////////////////////////////