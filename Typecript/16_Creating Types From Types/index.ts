// 196. Generic Interfaces
// interface BoxString {
//     content: string;
//     size: number;
// }

// interface BoxNumber {
//     content: number;
//     size: number;
// }

// problem: Box_ is redundant

interface Box<T> {
    content: T;
    size: number;
}

const stringBox: Box<string> = { content: "String Box", size: 10 }
const numberBox: Box<number> = { content: 99, size: 10 }

interface LengthWise {
    length: number
}

function logLength<T extends LengthWise>(arg: T): void {
    console.log(arg.length); // LengthWise helps to check whether arg has length or not
}

// 197. keyof Operator
type User = {
    id: number;
    name: string;
    age: number;
}

// return the union of objects types
type UserKeys = keyof User; // type UserKeys = 'id' | 'name' | 'bio'
let key: UserKeys;
key = "id";



// 199. Indexed Access Types
type UserNameType = User["name"];

// 200. Mapped Types
// What if we dont use the Partial<T>
type PartialUser = {
    [K in keyof User]?: User[K]
}

// 201. Conditional
type IsString<T> = T extends string ? "Yes" : "No"

type Test1 = IsString<string>
type Test2 = IsString<number>

type OptionIfString<T> = {
    [K in keyof T]: T[K] extends string ? T[K] | undefined : T[K]
}

type OptionalNameUser = OptionIfString<User>