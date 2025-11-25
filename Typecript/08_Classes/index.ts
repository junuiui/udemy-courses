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

    public greet() {
        console.log(this.name);
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
}

const admin: Admin = new Admin("AdminName", "admin@ad.com", 4, "Male");

/**
 * * Practice Problem
 * * You are building a simple library management system.
 * * Implement the following requirements using TypeScript:
 *
 * TODO: 1. Create a class Book with the following properties:
 * * - title (string, required)
 * * - author (string, required)
 * * - yearPublished (number, optional)
 * * - ISBN (string, readonly)
 *
 * TODO: 2. Define a constructor function to initialize the Book class with title, author,yearPublished, and ISBN.
 *
 * TODO: 3. Ensure that the constructor function uses the this keyword to assign values to the class properties.
 *
 * TODO: 4. Create an instance of the Book class and log its details.
 *
 * TODO: 5. Create a function logBookDetails that takes an instance of Book as a parameter and logs its details.
 *
 * TODO: 6. Create a subclass EBook that extends the Book class. Add the following properties:
 * * - fileSize (number, required)
 * * - format (string, required)
 *
 * TODO:7. Use the super method to call the constructor of the parent class Book from the EBook class.
 *
 * TODO: 8. Ensure that the yearPublished property in the Book class is optional and the ISBN property is readonly.
 */