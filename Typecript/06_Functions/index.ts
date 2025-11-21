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

function throwError(error: string) : never {
    throw new Error(error);
}

////////////////////////////////////
// Async Function 

////////////////////////////////////
////////////////////////////////////
////////////////////////////////////
////////////////////////////////////