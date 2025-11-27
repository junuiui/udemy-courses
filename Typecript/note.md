TypeScript Course Note
===

# Sections
- [TypeScript Course Note](#typescript-course-note)
- [Sections](#sections)
  - [Section 1 - TypeScript Basic](#section-1---typescript-basic)
    - [How Programs work in JavaScript](#how-programs-work-in-javascript)
    - [How Program work in TypeScript](#how-program-work-in-typescript)
    - [Advantage](#advantage)
    - [Disadvanges](#disadvanges)
    - [Converting](#converting)
    - [Creating project](#creating-project)
    - [TS vs JS](#ts-vs-js)
  - [Primitive Types](#primitive-types)
  - [Type System](#type-system)
  - [Objects](#objects)
  - [Array \& Enums](#array--enums)
  - [Functions](#functions)
  - [Generic](#generic)
  - [Classes](#classes)
    - [What is classes?](#what-is-classes)
    - [Example](#example)
    - [What is Access Modifier?](#what-is-access-modifier)
    - [Mixins](#mixins)


## Section 1 - TypeScript Basic
### How Programs work in JavaScript
- Procedure
    - Source Code Parsed to `AST` (Abstract Syntax Tree) 
        > `AST`: tree-like data structure representing the <br>abstract syntactic structure of JavaScript source code.
    - Source Code to Byte Code by Compiler
    - Byte Code is Evaluated by Runtime

### How Program work in TypeScript
- Procedure
    - Source Code Parsed to `AST`
    - `AST` is checked by `Type Checker`
    - `TypeScript` Compiler Compiles to `JavaScript`

### Advantage

### Disadvanges

### Converting
- `tsc index.ts`
- `npx tsc index.ts`
    > most latest will be used
- `tsc --init `
    > `tsconfig.json` will be created
- `tsc -w` 
    > w flag (watch mode)
    >> autumatically checks/compile for changes 

### Creating project
- npm init

### TS vs JS
| Feature                        | JavaSCript  | TypeScript    |
| ------------------------------ | ----------- | ------------- |
| How are types bound            | Dynamically | Statically    |
| Types automatically converted? | Yes         | No (at times) |
| When are types checked?        | Runtime     | Compile Time  |
| When errors surface?           | Runtime     | Compile Time  |

## Primitive Types
- in JS, a primitive is data that is not an object and has no methods or properties. <br>
A primitive values is represented directly at the lowest level of the language implementation.
- `JavaScript` Types
    - `string` / `number` / `boolean`
    - `null` / `undefined`
    - `BigInt` / `Symbol`

- `String`, `Number`, `Boolean`
    ```ts
    var str: string = "Hello";
    var str2 = something.toString(); // automatically assign string
    ```
    ```ts
    var i: number = 66;
    var j = parseInt('11'); // automatically assin number
    ```
    ```ts
    var isTrue: boolean = true;
    let isMinimum: age >= 10 ? true : false;
    ```

- `null`, `undefined`
    ```ts
    let user: undefined;
    console.log(user) // undefined

    let user2: null;
    console.log(user2) // ERROR: need to assign first!!

    let user3: null;
    user3 = null;
    console.log(user3)  // null

    console.log(user === user3) // false

    console.log(!user && !user3) // true
    ```

- `Bigint`
    - What is it?
        - Max Safe Interger value
        ```ts 
        const safeInt = Number.MAX_SAFE_INTEGER 
        ```
    - Usage
    ```ts
    let bigInt1: bigint = BigInt(123); // 123n
    let bigInt2: bigint = 1234433314n; // follwed by n
    let bigInt3: bigint = 1231222.22n; // ERROR: must be integer
    ```

- `Symbol`
    - What is it?
        - ensure to give unique value
        ```ts
        let id: symbol = Symbol(1234);
        let alphaId: symbol = Symbol("tempId");

        let user = {
            [id]: "1234" // private
            name: "Mark"

            // to get id Symbol
            getId() {
                return this[id];
            }
        }

        console.log(user.name) // Mark
        console.log(user.id) // ERROR
        console.log(id) // Symbol(1234)
        console.log(user.getId()); // 1234
        ```

## Type System
- New types
  - `any`
  - `unkown`
  - `Custom Types`
  - `union`
    - union of two types ( `type1 || type2` )
- Duck Typing
  - used by ts for inference of types

check [example](./03_Type%20System/index.ts)

## Objects

check [example](./04_Objects/index.ts)


## Array & Enums

check [example](./05_arrayAndEnum/index.ts)

## Functions
check [example](./06_Functions/index.ts)

## Generic
check [example](./07_Generics/index.ts)

## Classes
### What is classes?
- A class ia template or a blueprint of creating objects. It defines a set of properties and methods that are common to all objects of one type.

### Example
```ts
let user = {
    name: "John",
    email: "john@email.com",
    gret: () => {
        console.log(`hello ${person.name}`)
    }
};

let user2 = {
    name: "Mark",
    email: "mark@email.com",
    gret: () => {
        console.log(`hello ${person.name}`)
    }
};

// PROBLEM: need to generate similar objects by hands
```
- Classes help you generate objecsts of a single type!!
  > 1. use class (Blue Print)
  > 2. new User()
  > 3. user object

    ```ts
    // 1. Blue print
    class User {
        constructor(
            public name: string,
            public email: string) {}

            public greet() {
                console.log(this.name);
            }
        )
    }
    ```
### What is Access Modifier?
- control whether certain methods or properties are visible to code outside te class
    1. Public (`default`) - any
    2. Protected - within the class (child class)
    3. Private - only within the class

### Mixins
- Pattern to add properties and methods from one class to another. 
- They use functions that take a class and return a new class with the combined features
  - Example
    - `User` -> `Mixin` (adds Timestamps) -> `User + Timestamp`
    - `Book` -> `Mixin` (adds Timestamps) -> `Book + Timestamp` ==> NOT REPEATING