Typescript (.ts)
===
- Typescript is a **superset** to JavaScript
- It adds **static typing** to JavaScript

```js
function add(a, b) { return a + b } // No typing
function add(a: number, b: number) { return a + b } // only number!!
```

# TypeScript Basics

## Primitives
```ts
let age: number = 10;
age = 20;

let userName: string;
userName = "username";

let isTrue: boolean;
isTrue = true;
```

## Array / Objects
```ts
let arr: string[];
arr = ['1', '2', '3'];

let person: {
  name: string;
  age: number;
};

person = {
  name: "J",
  age: 32
};

// person = { name: "J", age: 32, sex: true } // ❌ Invalid
```

## Type Inference
```ts
let course = 'Course'; 
course = 12345; // ❌ Error — inferred as string
```

## Union Types
```ts
let course_union: string | number = 'Course';
course_union = 12345; // works
```

## Type Aliases
```ts
type Dog = {
  name: string;
  age: number;
};

let dog: Dog;
```

## Functions
```ts
// Regular
function add(a: number, b: number): number {
  return a + b;
}

// Void
function print(value: any): void {
  console.log(value);
}
```

## Generic
```ts
// Non Generic
function insertAtBeginning(arr: any[], value: any) {
  const newArr = [value, ...arr];
  return newArr;
}

const demoArr = [1, 2, 3, 4];
const newArr = insertAtBeginning(demoArr, 0); // type: any[]

// Generic
function insertAtBeginningGeneric<T>(arr: T[], value: T) {
  const newArr = [value, ...arr];
  return newArr;
}

const demoArr2 = [1, 2, 3, 4];
const newArr2 = insertAtBeginningGeneric(demoArr2, 0); // type: number[]
```

## Basic Summary
| Concept             | Example                         | Description                            |
| ------------------- | ------------------------------- | -------------------------------------- |
| **Primitive Types** | `number`, `string`, `boolean`   | Basic data types                       |
| **Array**           | `let arr: string[]`             | List of items of a single type         |
| **Object Type**     | `{ name: string; age: number }` | Defines structure                      |
| **Type Inference**  | `let x = "Hi"`                  | Type guessed by compiler               |
| **Union Type**      | `string \| number`              | Allows multiple possible types         |
| **Type Alias**      | `type Dog = {...}`              | Custom reusable type                   |
| **Void Function**   | `function print(): void`        | Returns nothing                        |
| **Generics**        | `<T>`                           | Makes functions type-safe and reusable |
