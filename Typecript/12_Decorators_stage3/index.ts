// 1. Creating Decorator
function methodLogger(originalMethod: any, context: any) {
    console.log(originalMethod)
    console.log(context);
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
    greet() {
        console.log(`Hello my name is ${this.name}`)
    }
}