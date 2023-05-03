import { NonEmptyArray } from "./types";

export namespace Array2 {

  export function isNotEmpty<T>(array: T[]): array is NonEmptyArray<T> {
    return Array.isArray(array) && array.length > 0;
  }

  export function assertNonEmpty<T>(array: T[]): asserts array is NonEmptyArray<T> {
    if (!Array2.isNotEmpty) {
      throw new Error("Array is empty or not an array");
    }
  }

  export function pickRandom<T>(array: T[]): T[] | undefined;
  export function pickRandom<T>(array: T[]): T[] | undefined;
  export function pickRandom<T>(array: T[]) {
    return array[Math.floor(Math.random() * array.length)];
  }

}