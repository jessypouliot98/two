import { NonEmptyArray } from "./types";

export namespace Array2 {

  export function isNotEmpty<T>(array: T[]): array is NonEmptyArray<T> {
    return Array.isArray(array) && array.length > 0;
  }

  export function assertsNonEmpty<T>(array: T[]): asserts array is NonEmptyArray<T> {
    if (!isNotEmpty(array)) {
      throw new Error("Array is empty or not an array");
    }
  }

  export function pickRandom<T>(array: NonEmptyArray<T>): T;
  export function pickRandom<T>(array: T[]): T | undefined;
  export function pickRandom<T>(array: T[]): T | undefined {
    return array[Math.floor(Math.random() * array.length)];
  }

  const filterNilPredicate = (value: unknown) => value == undefined
  export function filterNil<T>(array: (T | undefined | null)[]) {
    return array.filter(filterNilPredicate) as unknown as T[];
  }

  const rangeMapFn = (_: unknown, i: number) => i;
  export function range(length: number) {
    return Array.from({ length }, rangeMapFn);
  }

}