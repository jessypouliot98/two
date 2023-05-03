import { numberEven, numberOdd } from "./types";

export namespace Number2 {

  export function isOdd(number: number): number is numberOdd {
    return (number & 1) === 1;
  }

  export function assertsNumberIsOdd(number: number): asserts number is numberOdd {
    if (!isOdd(number)) {
      throw new Error('number is not odd')
    }
  }

  export function isEven(number: number): number is numberEven {
    return (number & 1) === 0;
  }

  export function assertsNumberIsEven(number: number): asserts number is numberEven {
    if (!isEven(number)) {
      throw new Error('number is not even')
    }
  }

}