export namespace Number2 {

  export function isNumber(value: unknown): value is number {
    return typeof value === 'number';
  }

  export function assertsValueIsNumber(value: unknown): asserts value is number {
    if (!isNumber(value)) {
      throw new Error("value is not a number");
    }
  }

  export function isOdd(number: number) {
    return (number & 1) === 1;
  }

  export function isEven(number: number) {
    return (number & 1) === 0;
  }

}