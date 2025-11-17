
let user: undefined;
console.log(user) // undefined

let user2: null;
// console.log(user2) // ERROR: need to assign first!!

let user3: null;
user3 = null;
console.log(user3)
console.log(!user && !user3) 