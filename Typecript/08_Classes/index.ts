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

// Practice