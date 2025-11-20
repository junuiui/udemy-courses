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
let number: readonly number[] = [1, 2, 3]
// number.push(2) // readonly!! 

type ReadOnlyTuple = readonly [string, string, number] // cannot modify
let person2: ReadOnlyTuple = ['nmae', 'last', 10];
// person2[0] = "mark" // readonly!!

type array_a = Readonly<string[]>;
type array_b = ReadonlyArray<string | number> // union
type array_c = ReadonlyArray<string & number> // intersection, NOT POSSIBLE, since both primitives

type tuple_a = Readonly<[number, string, number]>;

////////////
// Enums
const STATUS_LOADING = "loading";
const STATUS_STOPPED = "stopped";

enum Direction {
    Up,     // value of 0
    Down,   // value of 1
    Left,   // value of 2
    Right,  // value of 3
}

enum Roles {
    ADMIN = "admin",
    AUTHOR = "author",
    EDITOR = "editor",
}

type Person = {
    name: string,
    role: Roles
}

let person_2 = {
    name: "hello",
    role: Roles.ADMIN,
}

// not compiled
const enum Roles2 {
    ADMIN = "admin",
    AUTHOR = "author",
    EDITOR = "editor",
}

// object
const oRoles = {
    ADMIN: "admin",
    AUTHOR: "author",
    EDITOR: "editor",
} as const // as const makes CONST 

// Computed
enum Permission {
    R = 1,
    W = 2,
    RW = R + W,
    D = 4,
    A = RW | D // 7
}

