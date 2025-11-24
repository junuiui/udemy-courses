// Generics
//////////////////////////////////////
// Basic generics
/**
 * 
 * @param param type is `genericType`
 * @returns genericType
 */
function returnParams<genericType>(param: genericType): genericType {
    return param;
}

const returnParams2: <T>(param: T) => T
    = (param) => param;

const returnParam3 = function <U>(param: U): U { return param }

// returnParams<string>('string'); ==> string
// returnParams<number>(32334444); ==> number

type ObjectType = {
    myParam: <V, X>(param: V, param2: X) => V | X
}

type MyParam = <K>(param: K) => K

//////////////////////////////////////
// Generic Function Declarations
type GetFirstElement = <T>(arr: Array<T>) => T;

const getFirstElement: GetFirstElement = (arr) => {
    return arr[0];
};

type FirstElement<T> = (arr: T[]) => T; // when you want to declare eeach function with each types
const firstElement: FirstElement<string> = (arr) => arr[0];
const firstElement2: FirstElement<number> = (arr) => arr[0];

//////////////////////////////////////
// Generic and Constraints with Array
type HasLength = {
    length: number;
};


function logLength<T extends HasLength>(item: T): void {
    console.log(item.length);
}

logLength([1, 2, 34])
// logLength({ name: 'nmae'}) // NOT working, NO length!!
logLength({ name: 'nmae', length: 30 }) // it works

//////////////////////////////////////
// Generics with Object
type KeyValuePair<K, V> = {
    key: K,
    value: V,
}

let stringnumberPair: KeyValuePair<string, number> = {
    key: "age",
    value: 30,
};

let numberArrayPair: KeyValuePair<number, string[]> = {
    key: 1234,
    value: ["a"],
};

type HasID = {
    id: number;
}

function printID<T extends HasID>(obj: T) {
    console.log(obj.id)
}

const user = {
    id: 1234,
    name: "Alice",
};

printID(user);
printID({
    name: "hello",
    id: 1 // to avoid error, needs `id`!!
})

//////////////////////////////////////
// keyof Type Operator
type Events = {
    id: number;
    date: Date;
    type: "indoor" | "outdoor"
}

type UnionOfKeysOfEvents = keyof Events;

let typeOfEvents: UnionOfKeysOfEvents = "type";
// let idOfEvents: UnionOfKeysOfEvents = "notid"; // not working

// Index Signature
type Numeric = {
    [key: number]: string;
};

type NumericKeyOf = keyof Numeric;

type NumberAndString = {
    [key: string]: string;
}

type NumberAndStringKeyOf = keyof NumberAndString;

let stringObject: NumberAndString = {
    0: 'first',
    second: "srcond"
}

type Person = {
    name: string;
    age: string;
    address: string;
}

type PartialPerson = {
    [P in keyof Person]?: Person[P] | null // k can be anything from Person
}

let partial: PartialPerson = {
    name: "John"
}

//////////////////////////////////////
// Generic Default Values
async function fetchData<T = string>(url: string): Promise<T> {
    const response = await fetch(url);
    const data = await response.json()
    return data;
}

async function fetchDefault() {
    const data = await fetchData("https://jsonplaceholder.typicode.com/posts/1");
    console.log(data);
}

fetchDefault();

type Post = {
    userId: number,
    id: number,
    title: string,
    body: string;
}

async function fetchPost() {
    const post = await fetchData<Post>("https://jsonplaceholder.typicode.com/posts/1");
    console.log(post)
}

fetchPost();

//////////////////////////////////////
// Implementing a Polymorphic Function 
// & Problems with Fucntion Overloads 
// & Using Generics Instead of function overloads

type Filter <T> = {
    (array: T[], predicate: (item: T) => boolean): T[];

}

// custom filter
const filter = <T>(array: T[], predicate: (item: T) => boolean): T[] => {
    let result: T[] = [];
    for (let i = 0; i < array.length; i++) {
        if (predicate(array[i])) {
            result.push(array[i])
        }
    }
    return result;
};

let numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 0, 13, 12, 421, 5, 15, 4, 1]
const predicate2 = (item: number) => { return item > 8 };

console.log(filter(numbers, predicate2))

//////////////////////////////////////
// 

//////////////////////////////////////
// Practice