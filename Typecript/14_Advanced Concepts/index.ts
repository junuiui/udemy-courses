

// Type Soundness
type User = {
    name: string;
    age: number;
}

const user3 = { name: "Name", age: 20, isAdmin: false }
const newUser3: User = user3; // NO COMPLAIN? User Type only has 2 types

function printUser(user:User) {
    console.log(user);
}

printUser(newUser3) // typescript accepts
printUser({ name: "Name", age: 20, isAdmin: false }) // Complains...!! 