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

let stringnumberPair: KeyValuePair<string, number>  = {
    key: "age",
    value: 30,
};

let numberArrayPair: KeyValuePair<number, string[]>  = {
    key: 1234,
    value: ["a"],
};

type HasID = {
    id: number;
}

function printID<T extends HasID>(obj: T){
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

//////////////////////////////////////
// Generic Default Values

//////////////////////////////////////
// Implementing a Polymorphic Function

//////////////////////////////////////
// Problems with Fucntion Overloads

//////////////////////////////////////
// Using Generics Instead of function overloads

//////////////////////////////////////
// Practice