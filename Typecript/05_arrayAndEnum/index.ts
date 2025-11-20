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
