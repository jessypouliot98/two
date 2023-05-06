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

  const filterNilPredicate = (value: unknown) => value != undefined
  export function filterNil<T>(array: (T | undefined | null)[]) {
    return array.filter(filterNilPredicate) as unknown as T[];
  }

  export function range(max: number, _?: never): number[];
  export function range(min: number, max: number): number[];
  export function range(v1: number, v2?: number) {
    const min = typeof v2 === 'number' ? v1 : 0;
    const max = typeof v2 === 'number' ? v2 : v1;

    const length = (max - min) + 1;
    return Array.from({ length }, (_, i) => i + min);
  }

}