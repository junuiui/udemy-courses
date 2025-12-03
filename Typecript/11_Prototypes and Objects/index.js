// method -> Object
// function -> window, global

const book = {
    title: "The Title",
    authors: ["John", "Mark", "Rob"],
    read() {
        console.log(this)
    },

    printAuthors() {
        this.authors.forEach(function (author) {
            console.log(this.title, " - ", author) // this infers the function inside
        }, this) // this leads binding this
    },

    printAuthors2() {
        // => arrow makes to refer the parent object
        this.authors.forEach((author) => {
            console.log(this.title, " - ", author)
        })
    }
}

book.read(); //  object

// object
book.stopreading = function () {
    console.log(this)
}

// window, global
function watchMovie() {
    console.log(this);
}

// Constructor Functions
class User {
    public name;
    public email;
    public points;

    constructor(name, email) {
        this.name = name;
        this.email = email;
        this.points = 0;
    }

    login() {
        console.log(this.name, " Logged in")
    }

    logout() {
        console.log(this.name, " Logged out")
    }

    addPoints() {
        this.points++;
    }
}

const user = new User('N', '123@ww.com');

console.log(user) // functions are NOT in User object. they are in Prototype

// functions are in User object.
function User2(name, email) {
    this.name = name;
    this.email = email;
    this.points = 0;

    this.login = () => { };
    this.logout = () => { };
    this.addpoints = () => { };
}