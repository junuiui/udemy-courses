function methodLogger() {
    // 1. Creating Decorator
    return function (originalMethod: any, context: any) {

        // 원래 메서드를 감싸는 wrapper 함수
        return function (this: any, ...args: any[]) {
            console.log(args);     // 전달된 매개변수 출력
            console.log(this);     // 메서드를 호출한 인스턴스 출력

            // 원래 메서드를 정상적으로 실행
            const result = originalMethod.call(this, ...args);

            // 필요하면 result 반환 가능
            return result;
        }
    }
}

// MOVED to factory
// // 1. Creating Decorator
// function methodLogger(originalMethod: any, context: any) {

//     // Moved to @bound
//     // // 메서드 이름 가져오기 (예: "greet")
//     // const methodName = context.name;

//     // // private 메서드면 허용되지 않음
//     // if (context.private) {
//     //     throw new Error("Cannot decorate private methods");
//     // }

//     // // 인스턴스가 만들어질 때 실행될 초기화 함수 등록
//     // context.addInitializer(function (this: any) {
//     //     console.log(this);                                     // 현재 인스턴스 출력
//     //     this[methodName] = this[methodName].bind(this);        // this 고정(bind)
//     // });

//     // 원래 메서드를 감싸는 wrapper 함수
//     function replacementMethod(this: any, ...args: any[]) {
//         console.log(args);     // 전달된 매개변수 출력
//         console.log(this);     // 메서드를 호출한 인스턴스 출력

//         // 원래 메서드를 정상적으로 실행
//         const result = originalMethod.call(this, ...args);

//         // 필요하면 result 반환 가능
//         return result;
//     }

//     // 원래 메서드 대신 replacementMethod 적용
//     return replacementMethod;
// }


// ------------------------------------------------------
//   bound decorator (this 고정만 수행하는 가벼운 버전)
// ------------------------------------------------------

function bound(target: any, context: any) {

    // 메서드 이름 가져오기
    const methodName = context.name;

    // private 메서드는 허용 X
    if (context.private) {
        throw new Error("Cannot decorate private methods");
    }

    // 인스턴스 생성 시 this 고정
    context.addInitializer(function (this: any) {
        console.log(this);                                     // 현재 인스턴스 출력
        this[methodName] = this[methodName].bind(this);        // this 고정(bind)
    });
}

// function classDecorator(target: any, context: any) {
//     console.log(target);
//     console.log(context);
// }

// @classDecorator
class Person {
    constructor(public name: string) {

    }

    @bound
    @methodLogger
    greet(str: string): void {
        console.dir(this)
        console.log(`${str} my name is ${this.name}`)
    }
}

let user: Person = new Person("Jun");
user.greet("Hello"); // replaced

const greet = user.greet("Hello");
greet("Hello");