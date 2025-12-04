// 1. Creating Decorator
function methodLogger(originalMethod: any, context: any) {

    const methodName = context.name;

    if (context.private) {
        throw new Error("Cannot ... ")
    }

    context.addInitializer(function (this: any) {
        console.log(this);
        this[methodName] = this[methodName].bind(this);
    })

    // to return new function
    function replacementMethod(this: any, ...args: any[]) {
        console.log(args); // [params]
        console.log(this); // Person {name: ...}

        // invocation
        const result = originalMethod.call(this, ...args);


    }
    return replacementMethod;
}

// function classDecorator(target: any, context: any) {
//     console.log(target);
//     console.log(context);
// }

// @classDecorator
class Person {
    constructor(public name: string) {

    }

    @methodLogger
    greet(str: string) : void {
        console.dir(this)
        console.log(`${str} my name is ${this.name}`)
    }
}

let user: Person = new Person("Jun");
user.greet("Hello"); // replaced

const greet = user.greet("Hello");
greet("Hello");