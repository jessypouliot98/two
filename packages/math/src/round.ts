/**
 * Rounds a number with support for decimal point rounding.
 * Use `Math.round` for better performance when decimals are not needed
 */
export function round(number: number, decimalPoints: number = 0) {
  const factor = 10 ** decimalPoints;
  return Math.round(number * factor) / factor;
}