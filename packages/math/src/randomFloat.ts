/**
 * - Get a random float between `[0, max]`
 * - `max` is excluded
 */
export function randomFloat(max: number, _?: never): number;
/**
 * - Get a random float between `[min, max]`
 * - `max` is excluded
 */
export function randomFloat(min: number, max: number): number;
export function randomFloat(v1: number, v2?: number) {
  const min = typeof v2 === 'number' ? v1 : 0;
  const max = typeof v2 === 'number' ? v2 : v1;
  return Math.random() * (max - min) + min;
}