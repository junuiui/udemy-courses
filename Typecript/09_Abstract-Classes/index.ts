// Abstract Classes
type Holidays = {
    date: Date;
    reason: string;
}[];

abstract class Department {
    protected abstract holidays: Holidays;
    protected constructor(
        protected name: string
    ) { }

    public addHolidays(holidays: Holidays) {
        if (Array.isArray(holidays)) {
            for (const holiday of holidays) {
                this.holidays.push(holiday)
            }
        }
    }

    public printHoliday() {
        for (const holiday of this.holidays) {
            console.log(`${holiday.date}: ${holiday.reason}`)
        }
    }
}

// Error: Cannot create an instance of an abstrat class.
// const department = new Department("admin"); 
class ITDepartment extends Department {
    protected holidays: Holidays = [];

    constructor() {
        super(
            "IT Department"
        );
    }
}

class HRDepartment extends Department {
    protected holidays: Holidays = [];
}

const itDepartment: ITDepartment = new ITDepartment();

const itHolidays: Holidays = [
    {
        date: new Date(2022, 12, 25),
        reason: "Christmas"
    },
    {
        date: new Date(2022, 11, 2),
        reason: "IT Department day"
    },
]

itDepartment.addHolidays(itHolidays);

// ====================
// Interfaces
enum Roles {
    admin = "admin",
    author = "author",
    editor = "editor",
}

interface Role {
    role: Roles
}

enum PermissionsList {
    read = "read",
    write = "write",
    execute = "execute"
}

interface UserPermissions {
    permissions: PermissionsList[],

}

interface User {
    userName: string;
    email: string;
    login(): void;
    greet?: () => void;
}

interface UserAdmission extends User, Role, UserPermissions {
    // ...
}

class Admin implements User {
    constructor(
        public userName: string,
        public email: string,
        public adminNumber: number, // unique that is not from Interface
    ) { }
    public login() {
        console.log(`${this.userName}: Login`)
    }
}

class Customer implements User {
    constructor(
        public userName: string,
        public email: string,
        public userNumber: number, // unique that is not from Interface
    ) { }
    public login() {
        console.log(`${this.userName}: Login`)
    }
}

class Auth {
    public static login(user: User) {
        user.login();
    }
}

const admin: Admin = new Admin("Mark", "mark@email.com", 1);
const customer: Customer = new Customer("John", "jjj@email.com", 4);


// Interface Extension
/**
 * It has all the properties that User has.
 */
interface UserWithAddress extends User {
    address: string;
}

// Generics
enum AutomobileTypes {
    car = "car",
    bus = "bus",
    van = "van",
    truck = "truck",
    bike = "bike",
}

enum AutomobileBrands {
    ferrari = "ferrari",
    honda = "honda",
    bmw = "bmw",
    toyota = "toyota",
}

enum AutomobileColors {
    red = "red",
    blue = "blue",
    white = "white",
    black = "black",
    silver = "silver",
}

interface Automobile<Type, Brand, Colors> {
    type: Type;
    brand: Brand;
    colors: Colors[];
    description: string;
}

const ferrari: Automobile<AutomobileTypes, AutomobileBrands, AutomobileColors> = {
    type: AutomobileTypes.car,
    brand: AutomobileBrands.ferrari,
    colors: [AutomobileColors.black, AutomobileColors.red],
    description: "This is a ferrari"
};

const honda: Automobile<string, string, string> = {
    type: "car",
    brand: "Honda",
    colors: ["silver", "black"],
    description: "This is a Honda"
};

const toyota: Automobile<string, AutomobileBrands, number> = {
    type: "car",
    brand: AutomobileBrands.toyota,
    colors: [6676, 97897],
    description: "This is a Toyota"
};

console.log(ferrari);
console.log(honda);
console.log(toyota);