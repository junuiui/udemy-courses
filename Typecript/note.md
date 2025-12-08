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
  - [Abstract Class](#abstract-class)
  - [TypeScript Compiler](#typescript-compiler)
    - [File and Compiler Options](#file-and-compiler-options)
    - [tsconfig.json](#tsconfigjson)
  - [Prototypes and Objects](#prototypes-and-objects)
    - [What is property](#what-is-property)
    - [Property Descriptors](#property-descriptors)
  - [Decorators (Stage 3)](#decorators-stage-3)
    - [What is Decorator?](#what-is-decorator)
    - [Why do we use Decorator?](#why-do-we-use-decorator)
    - [Types of Decorators](#types-of-decorators)
  - [Advanced Concepts](#advanced-concepts)
  - [Utility Types](#utility-types)
    - [What is Utility Types?](#what-is-utility-types)
    - [Why needed?](#why-needed)
    - [Partial\<T\>](#partialt)
    - [Required\<T\>](#requiredt)
    - [Readonly\<T\>](#readonlyt)
    - [Pick\<T, K\>](#pickt-k)
    - [Omit\<T, K\>](#omitt-k)
    - [Record\<K, T\>](#recordk-t)
    - [Exclude\<T, U\>](#excludet-u)
    - [Extract\<T, U\>](#extractt-u)
    - [NonNullable\<T\>](#nonnullablet)
    - [Awaited\<T\>](#awaitedt)
    - [String Manipulation Types](#string-manipulation-types)


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

check [example](./08_Classes/index.ts)

## Abstract Class
check [example](./09_Abstract-Classes/index.ts)

## TypeScript Compiler
check [example](./10_Compiler/index.ts)

### File and Compiler Options
- `File Options`: Options related to how TypeScript treates files
- `Type Checking Options`: Options that alter TS's behaviour related to type checking and other code related features that TS offers

### tsconfig.json
- check [tsconfig.json](./10_Compiler/tsconfig.json)

- Exclude & Include
    ```json
    "exclude": [
            "app2.ts",
            "node_modules",
            "*.exclude.ts",
            "**/*.exclude.ts"
        ],
    "include": [
            "src"
        ],
    ```

- rootDir and outDir
    ```json
    "rootDir": "./src_path"
    "outDir": "./dist_path" 
    ```

- target
    ```json
    "target": "es5"
    ```
    - check [tsconfig/bases](https://github.com/tsconfig/bases)
  
- Core Libraries
  - to include libraries that target does not support
    ```json
    "lib":["dom", "dom.iterable", "esnext"],
    "target": "es5"
    ```
- Type Checking
    ```json
    "noUnusedLocals": true, /* Enable error reporting when local variables aren't read. */
    "noUnusedParameters": true, /* Raise an error when a function parameter isn't read. */

    // ... more
    ```

- Source map
    ```json
    "sourceMap": true, /* Create source map files for emitted JavaScript files. */
    ```
    - useful when need to check the source of the error

## Prototypes and Objects
### What is property
- fundamental concept used across various disciplines, including programming, mathematics, and general language
- Properties are essentially variables that belong to an object.

### Property Descriptors
- `value`: value of the property
- `writable` (boolean): whether this peroperty in question is writable or not
- `enumerable` (boolean): whether you can enumerate or loop through this property
- `configurable` (boolean): tells the user has permission to change property descriptor such as to change the value of writable and enumrable settings

check [example](./11_Prototypes%20and%20Objects/index.js)

## Decorators (Stage 3)
### What is Decorator?
- Special function that attaches extra behaviour to classes, methodsk, properties, or parameters
- like a sticker

### Why do we use Decorator?
- Reduce repeated code
- Add behaviours cleanly
- Apply cross-cuitting concerns (logging, validation, permissions)

### Types of Decorators
1. `Class` Decorator
    - Adds behavour to a class or modifies it
    ```ts
    function Logger(target: any) {
        console.log("Decorated:", target.name);
        }

        @Logger
        class Person {}
    ```
2. `Method` Decorator
    - Wraps or modifies a method's behaviour
    ```ts
    function Log(target: any, method: string, descriptor: PropertyDescriptor) {
        const original = descriptor.value;

        descriptor.value = function (...args: any[]) {
            console.log("Calling:", method);
            return original.apply(this, args);
        };
    }

    class Calculator {
        @Log
        add(a: number, b: number) {
            return a + b;
        }
    }
    ```
3. `Property` Decorator
    - Used on class fields (variables)
4. `Parameter` Decorators
    - Used to inspect or modify method parameters

check [example](./12_Decorators_stage3/index.js)

## Advanced Concepts

check [example](./14_Advanced%20Concepts/index.ts)

## Utility Types
### What is Utility Types?
- Predefeind generic types that can perform common types transformation in TypeScript. 
- Built into TS and are used to manipulate other ytpes and create new types.
- Can create new types by applying transformations to existing types. 
- Help avoid code duplication and make it easier to write generic code

### Why needed?
```ts
type Teacher = {
    id: number;
    name: string;
    bio: string;
    email: string
}
```
- 상황별로 필요한 필드가 다름
  - 생성할 때는 id 없음
  - 수정할 때는 일부만 필요
  - 읽기 전용으로 막고 싶을 때
- 매번 새 타입으로 만들면 Duplication!!

### Partial\<T>
- 모든 속성을 optional 
```ts
interface Todo {
  title: string;
  description: string;
}
 
function updateTodo(todo: Todo, fieldsToUpdate: Partial<Todo>) {
  return { ...todo, ...fieldsToUpdate };
}
 
const todo1 = {
  title: "organize desk",
  description: "clear clutter",
};
 
const todo2 = updateTodo(todo1, {
  description: "throw out trash",
});
```

### Required\<T>
- 모든 속성을 필수로
```ts
interface Props {
  a?: number;
  b?: string;
}
 
const obj: Props = { a: 5 };
 
const obj2: Required<Props> = { a: 5 };
// Property 'b' is missing in type '{ a: number; }' but required in type 'Required<Props>'.
```

### Readonly\<T>
- 값 수정 불가
```ts
type ReadonlyTeacher = Readonly<Teacher>
t.name = "New Name" // error
```

### Pick\<T, K>
- 필요한 필드만 선택
```ts
interface Todo {
  title: string;
  description: string;
  completed: boolean;
}
 
type TodoPreview = Pick<Todo, "title" | "completed">;
 
const todo: TodoPreview = {
  title: "Clean room",
  completed: false,
};
 
todo;
```

### Omit\<T, K>
- 특정 필드 제외
```ts
interface Todo {
  title: string;
  description: string;
  completed: boolean;
  createdAt: number;
}
 
type TodoPreview = Omit<Todo, "description">;
 
const todo: TodoPreview = {
  title: "Clean room",
  completed: false,
  createdAt: 1615544252770,
};
 
todo;
 
const todo: TodoPreview
 
type TodoInfo = Omit<Todo, "completed" | "createdAt">;
 
const todoInfo: TodoInfo = {
  title: "Pick up kids",
  description: "Kindergarten closes at 5pm",
};
 
todoInfo;
```

### Record\<K, T>
- key-value 구조
```ts
type CatName = "miffy" | "boris" | "mordred";
 
interface CatInfo {
  age: number;
  breed: string;
}
 
const cats: Record<CatName, CatInfo> = {
  miffy: { age: 10, breed: "Persian" },
  boris: { age: 5, breed: "Maine Coon" },
  mordred: { age: 16, breed: "British Shorthair" },
};
 
cats.boris; // const cats: Record<CatName, CatInfo>
```
- 다국어 JSON
- 설정 객체

### Exclude\<T, U>
- 특정 타입 제거
```ts
type T0 = Exclude<"a" | "b" | "c", "a">;     
// type T0 = "b" | "c"

type T1 = Exclude<"a" | "b" | "c", "a" | "b">;  
// type T1 = "c"
```

### Extract\<T, U>
- 겹치는 것만 추출
```ts
type A = 'a' | 'b' | 'c'
type B = 'b' | 'c' | 'd'

type Common = Extract<A, B> // 'b' | 'c'
```

### NonNullable\<T>
- Constructs a type by excluding null and undefined from Type.
```ts
type T0 = NonNullable<string | number | undefined>;
//    ^?
type T1 = NonNullable<string[] | null | undefined>;
//    ^?
```

### Awaited\<T>
- This type is meant to model operations like await in async functions, or the `.then()` method on Promises - specifically, the way that they recursively unwrap Promises.
```ts
const promise: Promise<string> = new Promise((res, rej)) => {
    setTimeout(() => {
        res("Done!");
    }, 1000);
}

type AwaitedType = Awaited<typeof promise>
```

### String Manipulation Types
```ts
type Str = "aa" | "Bb" | "Cc" | "dD"
```
- Uppercase\<T>
```ts
type UppercaseStr = Uppercase<Str> // AA BB CC DD
```
- Lowercase\<T>
```ts
type LowercaseStr = Lowercase<Str> // aa bb cc dd
```
- Capitalize\<T>
```ts
type CapitalizeStr = Capitalize<Str> // Aa Bb Cc DD
```
- Uncapitalize\<T>
```ts
type UncapitalizeStr = Uncapitalize<Str> // aa bb cc dd
```

check [example](./15_Utility%20Types/index.ts)