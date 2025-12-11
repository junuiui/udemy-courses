/// <reference path="simpleUtil.ts" />

namespace MathUtils {
    export const add = (a: number, b: number): number => {
        return a + b;
    }

    export const subtract = (a: number, b: number): number => {
        return a - b;
    }
}

namespace StringUtils {
    export const add = (a: string, b: string): string => {
        return a + b;
    }

    export const subtract = (a: string, b: string): string => {
        return a.replace(b, "");
    }
}

let sum = MathUtils.add(1, 2)

simpleUtil.printResult(sum)