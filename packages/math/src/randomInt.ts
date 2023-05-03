/**
 * - Get a random integer between [0, max]
 * - Max is excluded
 * - Does not return decimals
 */
export function randomInt(max: number, _?: never): number;
/**
 * - Get a random value between [min, max]
 * - Max is excluded
 * - Does not return decimals unless the minimum value has a decimal. It will keep the same decimal as `min`
 */
export function randomInt(min: number, max: number): number;
export function randomInt(v1: number, v2: number) {
  const min = typeof v2 === 'number' ? v1 : 0;
  const max = typeof v2 === 'number' ? v2 : v1;
  return Math.floor(Math.random() * (max - min)) + min;
}