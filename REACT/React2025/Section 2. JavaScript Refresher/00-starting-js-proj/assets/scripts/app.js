// import {apiKey} from './util.js' // ./ same file    ../ prev..
// import { apiKey, abc } from './util.js';
import * as utils from './util.js' // alias "as"..
import defaultExport from './util.js' // default - when only one component

console.log("API KEY: " + utils.apiKey);
console.log("abc: " + utils.abc);
console.log("from Default export: " + defaultExport)

export default () => { console.log("Anonymous Function!"); }

// Object ---------------------------
const user = {
    name: "Max",
    age: 34,
    greet() {
        console.log("Hello, " + this.name);
    }
};

function printUser() {
    user.greet();
    console.log("Age: " + user.age);
}

// Class ---------------------------
class User {
    constructor (name, age) {
        this.name = name;
        this.age = age;
    }
    greet() { console.log("Hello")}
}

// Array ---------------------------
const hobbies = ['Sports', 'Reading', 'Studying'];
console.log(hobbies)

hobbies.push('Gaming');

console.log(hobbies.findIndex((item) => { return item === 'Reading' }))

// Transform...
const newHobbies = hobbies.map((item) => item + "!")
console.log(newHobbies)

const objHobbies = hobbies.map((item) => ({name: item}))
console.log(objHobbies)

// Array destruct-------------------------
const arr = [1, 2, 3, 4, 5];
const [one, two, three, four, five] = arr;

console.log(one + two + three);

// Merge
const mergeArr = [...arr, ...hobbies];  // ... pulls out the values in the array
                                        // without ... => store the array itself
console.log(mergeArr)

const newUser = {
    isAdmin: true,
    ...user
};

console.log(newUser)