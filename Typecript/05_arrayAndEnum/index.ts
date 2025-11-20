////////////
// Strictly Typing Array
let a: number[] = [1, 2, 3]
let b: Array<string> = ["a", "b", "c"]

let c: (string | number)[] = ["a", "b", "c", 2, 3]
let d: Array<string | number> = ["a", "b", "c", 2, 3]

type Airplane = {
    model: string;
    flightNumber: string;
}

type AirPlanes = Airplane[]

let airplane: AirPlanes = [
    {
        model: "m1",
        flightNumber: "a1123"
    },
    {
        model: "m2",
        flightNumber: "a112311"
    }
]

////////////
// Tuples (array with fixed shape)
let person: [string, string, number] = ["John", "Doe", 18];

/**
 * firstName, lastName, age
 */
type User = [string, string, number, string?]; // last string? is optional!!
let user: User = ["f", "l", 20, "fl@example.com"]

type listOfStudents = [number, boolean, ...string[]]
const passingStudents: listOfStudents = [3, true, "John", "Stella", "Mark"]

type StringBooleansNumber = [string, ...boolean[], number]
const stringboolsnumbers: StringBooleansNumber = ["h", true, true, false, false, 10]


////////////
// Readonly Arrays and Tuples



////////////
// Enums


////////////
// Strictly Typing Array


////////////
// Strictly Typing Array


////////////
// Strictly Typing Array


////////////
// Strictly Typing Array


////////////
// Strictly Typing Array
