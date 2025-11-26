// 3. Creating First Classes and Instance
class StaticUser { // STATIC
    name = "John";
    readonly email = "john@email.com";

    greet() {
        return "Hello John";
    }
}

class User { // dynamic
    // variables
    public name: string;
    readonly email: string;
    public gender?: string; // optional

    // constructor
    constructor(name: string, email: string, gender?: string) {
        this.name = name;
        this.email = email;
        this.gender = ""
    }

    // // all in one constructor
    // constructor(
    //     public name: string,
    //     public email: string,
    // ) {}

    // overriding...
    public greet(): string {
        return `Hello ${this.name}`
    }
}

const user2 = new User('Mark', 'mark@email.com');
user2.name = "new Mark"
// user2.email = "newEmal@cc.com" // read only

// Inheritance & super method
class Admin extends User {
    isAdmin: boolean = true;
    usersReporting: number;

    constructor(name: string, email: string, usersReporting: number, gender?: string) {
        super(name, email, gender);
        this.usersReporting = usersReporting;
    }

    // overriding...
    public greet(): string {
        return `Admin: ` + super.greet()
    }
}

const admin: Admin = new Admin("AdminName", "admin@ad.com", 4, "Male");

// shothand for constructor
class Animal {
    constructor(
        public name: string,
        public canFly: boolean,
    ) { }
}

function setCounter() {
    console.log("Set Counter called")
    Person.counter = -1;
}

// More Control
class Person {

    static counter = 0;

    constructor(public name: string, public age: number) {
        if (age < 0 || age > 150) {
            throw new Error("Age must be within the range 0 to 150")
        }
        Person.counter++;
    }

    public fullname() {
        return this.name;
    }
    // static block, implemented once when class is initialized, doesnt matter about class instances
    static {
        console.log("Initializing")
        this.counter = 7;
    }
}

const person = new Person("name", 1);

console.log(Person.counter)
// console.log(person.counter) // ERROR

// non-Generic With Classes
// class Box {
//     private _value: any;

//     constructor(value: any) {
//         this._value = value;
//     }

//     // getter
//     get value() {
//         return this._value;
//     }

//     // setter
//     set value(newValue: any) {
//         this._value = newValue;
//     }
// }

// Generic
class Box<T> {
    private _value: T;

    constructor(value: T) {
        this._value = value;
    }

    // getter
    get value() {
        return this._value;
    }

    // setter
    set value(newValue: T) {
        this._value = newValue;
    }

    public setDifferentValue<U>(newValue: U){
        return new Box<U>(newValue)
    }
}


// Practice
// /**
//  * * Practice Problem
//  * * You are building a simple library management system.
//  * * Implement the following requirements using TypeScript:
//  *
//  * TODO: 1. Create a class Book with the following properties:
//  * * - title (string, required)
//  * * - author (string, required)
//  * * - yearPublished (number, optional)
//  * * - ISBN (string, readonly)
//  */

// class Book {
//     public title: string;
//     public author: string;
//     public yearPublished?: number;
//     readonly ISBN: string

//     //  * TODO: 2. Define a constructor function to initialize the Book class with title, author,yearPublished, and ISBN.
//     //  * TODO: 3. Ensure that the constructor function uses the this keyword to assign values to the class properties.
//     constructor(title: string, author: string, ISBN: string, yearPublished?: number) {
//         this.title = title;
//         this.author = author;
//         this.ISBN = ISBN;
//         if (yearPublished) { this.yearPublished = yearPublished; }

//     }
// }

// //  * TODO: 4. Create an instance of the Book class and log its details.
// const book1 = new Book("Harry Potter", "James Mudric", "isbn-v394kv", 1998)
// const book2 = new Book("Hunger Games", "Kate Yak", "isbn-v1433kv")

// //  * TODO: 5. Create a function logBookDetails that takes an instance of Book as a parameter and logs its details.
// function logBookDetails(book: Book): void {
//     console.log(book.author)
//     console.log(book.title)
//     console.log(book.ISBN)
//     book.yearPublished ? console.log(book.yearPublished) : console.log();
// }

// //  * TODO: 6. Create a subclass EBook that extends the Book class. Add the following properties:
// //  * * - fileSize (number, required)
// //  * * - format (string, required)
// class EBook extends Book {
//     fileSize: number;
//     format: string;

//     //  * TODO:7. Use the super method to call the constructor of the parent class Book from the EBook class.
//     constructor(title: string, author: string, ISBN: string, fileSize: number, format: string, yearPublished?: number) {
//         super(title, author, ISBN, yearPublished);
//         this.fileSize = fileSize;
//         this.format = format;
//     }

// }

