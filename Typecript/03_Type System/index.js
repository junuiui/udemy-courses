///////////////////////
// Any type
var firstName = "Mark"; // forcing ts to set `any` type
firstName = 3; // since `any`, it works
firstName = [1, 2, 3, 4]; // since `any`, it works
///////////////////////
///////////////////////
// unknown
function doubleIt(number) {
    // checking the unknown type!! (NOT IDEAL tho)
    if (typeof (number) === "number") {
        return number * 2;
    }
    return new Error("Please Provide a valid number");
}
var cString = "hello"; // string - automatic conversion `AT TIME`
var cNumber = 66; // number
// Annotation: manually say what the variable’s type is.
var dFistName = "Mark";
// inference: TypeScript figures out the type on its own.
var finalResult = 5 + 2;
var user = { name: "Jun", age: 24 };
function printPerson(p) {
    console.log(p.name);
}
printPerson(user); // Works because "user" has the same structure
///////////////////////
///////////////////////
///////////////////////
