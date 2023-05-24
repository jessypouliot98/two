export namespace Number2 {

  export type IsNumberOptions = { strict?: boolean };
  export function isNumber(value: unknown, opts: IsNumberOptions = { strict: true }): value is number {
    return typeof value === 'number' && opts.strict ? Number.isFinite(value) : true;
  }

  export function assertsValueIsNumber(value: unknown, opts?: IsNumberOptions): asserts value is number {
    if (!isNumber(value, opts)) {
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