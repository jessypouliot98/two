/**
 * @param start -- Must be below `end`
 * @param end -- Must be after `start`
 * @param t -- Must be a decimal between `0` and `1`
 */
export function interpolate(start: number, end: number, t: number) {
  return start + ((end - start) * t);
}